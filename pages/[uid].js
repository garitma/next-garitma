import Layout from '../components/Layout'
import { Client } from '../api/prismic'
import SingleRead from '../components/SinglePost/SingleRead'
import SinglePages from '../components/SinglePost/SinglePages'
import Error from './_error'


export default class Post extends React.Component {

    static async getInitialProps({ req, query, res }) {

        try {
            let [poems, comics, downloads, games, podcasts, videos, pages] = await Promise.all([
                Client(req).getByUID('poemas', query.uid),
                Client(req).getByUID('comics', query.uid),
                Client(req).getByUID('descargas', query.uid),
                Client(req).getByUID('juegos', query.uid),
                Client(req).getByUID('podcasts', query.uid),
                Client(req).getByUID('videos', query.uid),
                Client(req).getByUID('paginas', query.uid)
            ])

            if (poems == undefined &&
                comics == undefined &&
                downloads == undefined &&
                games == undefined &&
                podcasts == undefined &&
                videos == undefined &&
                pages == undefined) {
                res.statusCode = 404
                return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, pages: null, statusCode: 404 }
            }

            return { poems, comics, downloads, games, podcasts, videos, pages, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, pages: null, statusCode: 503 }
        }
    }

    renderBody() {

        const { poems, comics, downloads, games, podcasts, videos, pages } = this.props

        return (
            <Layout>

                {poems
                    ? <SingleRead document={poems} />
                    : ''}

                {comics
                    ? <SingleRead document={comics} />
                    : ''
                }

                {downloads
                    ? <SingleRead document={downloads} />
                    : ''
                }

                {games
                    ? <SingleRead document={games} />
                    : ''
                }

                {podcasts
                    ? <SingleRead document={podcasts} />
                    : ''
                }

                {videos
                    ? <SingleRead document={videos} />
                    : ''
                }

                {pages
                    ? <SinglePages document={pages} />
                    : ''
                }

            </Layout>
        )
    }

    render() {

        const { statusCode } = this.props

        if (statusCode !== 200) {
            return (
                <Error statusCode={statusCode} />
            )
        }

        return (
            this.renderBody()
        )
    }
}