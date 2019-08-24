import Layout from '../components/organism/Layout'
import { Client, Prismic } from '../api/prismic'
import GeneralSeo from '../components/Seo/GeneralSeo'
import Error from './_error'
import Module from '../components/molecules/Module'

export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        try {
            let [poems, quotes, games, podcasts, comics, videos, downloads, featured] = await Promise.all([
                Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[my.poemas.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[my.frases.date desc]', pageSize: 2 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'juegos'), { orderings: '[my.juegos.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'podcasts'), { orderings: '[my.podcasts.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[my.comics.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[my.videos.date desc]', pageSize: 2 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[my.descargas.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[my.poemas.date desc]', pageSize: 3 }),
            ])

            return { poems, quotes, games, podcasts, comics, videos, downloads, featured, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { poems: null, quotes: null, games: null, podcasts: null, comics: null, videos: null, downloads: null, featured: null, statusCode: 503 }
        }
    }

    renderPoems() {

        const { poems } = this.props

        return (
            poems.results.map((document, index) =>
                <Module document={document} />
            )
        )
    }

    renderSubHeroFirst() {

        const { games } = this.props

        return (
            games.results.map((document, index) =>
                <div key={index} />
            )
        )
    }

    renderSubHeroSecond() {

        const { quotes } = this.props

        return (
            quotes.results.map((document, index) =>
                <div key={index} />
            )
        )
    }

    renderSubHeroThird() {

        const { podcasts } = this.props

        return (
            podcasts.results.map((document, index) =>
                <div key={index} />
            )
        )
    }

    renderPromotionPlaceComic() {

        const { comics } = this.props

        return (
            comics.results.map((document, index) =>
                <div key={index} />
            )
        )
    }

    renderVideoTrailer() {

        const { videos } = this.props

        return (
            videos.results.map((document, index) =>
                <div key={index} />
            )
        )
    }

    renderPromotionPlaceDownloads() {

        const { downloads } = this.props

        return (
            downloads.results.map((document, index) =>
                <div key={index} />
            )
        )
    }


    renderFeatured() {

        const { featured } = this.props

        return (
            featured.results.map((document, index) =>
                <div document={document} key={index} />
            )
        )
    }

    renderBody() {
        return (
            <Layout seo={<GeneralSeo />}>
                {this.renderPoems()}
            </Layout>
        )
    }

    render() {
        const { statusCode, } = this.props

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