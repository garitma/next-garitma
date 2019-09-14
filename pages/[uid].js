import Layout from '../components/organism/Layout'
import { Client } from '../api/prismic'
import Error from './_error'
import SingleRead from '../components/templates/SingleRead'
import SinglePage from '../components/templates/SinglePages'
import SingleQuote from '../components/templates/SingleQuote'

export default class Post extends React.Component {

    static async getInitialProps({ req, query, res }) {

        try {
            let [poems, comics, downloads, games, podcasts, videos, pages, quotes] = await Promise.all([
                Client(req).getByUID('poemas', query.uid),
                Client(req).getByUID('comics', query.uid),
                Client(req).getByUID('descargas', query.uid),
                Client(req).getByUID('juegos', query.uid),
                Client(req).getByUID('podcasts', query.uid),
                Client(req).getByUID('videos', query.uid),
                Client(req).getByUID('paginas', query.uid),
                Client(req).getByUID('frases', query.uid)
            ])

            if (poems == undefined &&
                comics == undefined &&
                downloads == undefined &&
                games == undefined &&
                podcasts == undefined &&
                videos == undefined &&
                pages == undefined &&
                quotes == undefined) {
                res.statusCode = 404
                return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, pages: null, quotes: null, statusCode: 404 }
            }

            return { poems, comics, downloads, games, podcasts, videos, quotes, pages, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, pages: null, quotes: null, statusCode: 503 }
        }
    }

    renderBody() {

        const { poems, comics, downloads, games, podcasts, videos, pages, quotes } = this.props

        if (poems != undefined) {
            return (
                <SingleRead document={poems} />
            )
        }

        if (comics != undefined) {
            return (
                <SingleRead document={comics} />
            )
        }

        if (downloads != undefined) {
            return (
                <SingleRead document={downloads} />
            )
        }

        if (games != undefined) {
            return (
                <SingleRead document={games} />
            )
        }

        if (podcasts != undefined) {
            return (
                <SingleRead document={podcasts} />
            )
        }

        if (videos != undefined) {
            return (
                <SingleRead document={videos} />
            )
        }

        if (pages != undefined) {
            return (
                <SinglePage document={pages} />
            )
        }

        if (quotes != undefined) {
            return (
                <SingleQuote document={pages} />
            )
        }

    }

    render() {

        const { statusCode } = this.props

        if (statusCode !== 200) {
            return (
                <Error statusCode={statusCode} />
            )
        }

        return (
            <Layout>
                {this.renderBody()}
            </Layout>
        )
    }
}