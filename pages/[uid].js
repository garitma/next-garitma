import Layout from '../components/organism/Layout'
import { Client } from '../api/prismic'
import Error from './_error'
import SingleRead from '../components/templates/SingleRead'
import SingleQuote from '../components/templates/SingleQuote'
export const config = { amp: 'hybrid' };

export default class Post extends React.Component {

    static async getInitialProps({ req, query, res }) {

        const { uid } = query

        try {
            let [poems, comics, downloads, games, podcasts, videos, quotes] = await Promise.all([
                Client(req).getByUID('poemas', `${uid}`),
                Client(req).getByUID('comics', `${uid}`),
                Client(req).getByUID('descargas', `${uid}`),
                Client(req).getByUID('juegos', `${uid}`),
                Client(req).getByUID('podcasts', `${uid}`),
                Client(req).getByUID('videos', `${uid}`),
                Client(req).getByUID('frases', `${uid}`)
            ])

            if (poems == undefined &&
                comics == undefined &&
                downloads == undefined &&
                games == undefined &&
                podcasts == undefined &&
                videos == undefined &&
                quotes == undefined) {
                res.statusCode = 404
                return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, quotes: null, statusCode: 404 }
            }

            return { poems, comics, downloads, games, podcasts, videos, quotes, statusCode: 200 }
        } catch (e) {
            req.statusCode = 503
            return { poems: null, comics: null, downloads: null, games: null, podcasts: null, videos: null, quotes: null, statusCode: 503 }
        }
    }

    renderBody() {

        const { poems, comics, downloads, games, podcasts, videos, quotes } = this.props

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

        if (quotes != undefined) {
            return (
                <SingleQuote document={quotes} />
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