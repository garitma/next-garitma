import Layout from '../components/Layout'
import { Client } from '../api/prismic'
import SingleRead from '../components/SinglePost/SingleRead'
import SinglePages from '../components/SinglePost/SinglePages'


export default class Post extends React.Component {

    static async getInitialProps({ req, query }) {

        try {
            const [poems, comics, downloads, games, podcasts, videos, pages] = await Promise.all([
                Client(req).getByUID('poemas', query.uid),
                Client(req).getByUID('comics', query.uid),
                Client(req).getByUID('descargas', query.uid),
                Client(req).getByUID('juegos', query.uid),
                Client(req).getByUID('podcasts', query.uid),
                Client(req).getByUID('videos', query.uid),
                Client(req).getByUID('paginas', query.uid)
            ])

            return { poems, comics, downloads, games, podcasts, videos, pages }
        } catch (error) {
            return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, pages: null, error: true }
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

        const { poems, comics, downloads, games, podcasts, videos, pages, error } = this.props

        if (error) {
            return <div>Error</div>
        }

        if (poems == null && comics == null && downloads == null && games == null && podcasts == null && videos == null && pages == null) {
            return <div>Error</div>
        }


        return this.renderBody()
    }
}