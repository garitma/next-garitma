import Layout from '../components/organism/Layout'
import { Client, Prismic } from '../api/prismic'
import GeneralSeo from '../components/seo/GeneralSeo'
import Error from './_error'
import Module from '../components/molecules/Module'

export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        try {
            let [poems, quotes, games, comics, videos, downloads, featured] = await Promise.all([
                Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[my.poemas.date desc]', pageSize: 3 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[my.frases.date desc]', pageSize: 3 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'juegos'), { orderings: '[my.juegos.date desc]', pageSize: 1 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[my.comics.date desc]', pageSize: 3 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[my.videos.date desc]', pageSize: 3 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[my.descargas.date desc]', pageSize: 3 }),
                Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[my.poemas.date desc]', pageSize: 3 }),
            ])

            return { poems, quotes, games, comics, videos, downloads, featured, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { poems: null, quotes: null, games: null, comics: null, videos: null, downloads: null, featured: null, statusCode: 503 }
        }
    }

    renderPoems() {

        const { poems } = this.props

        return (
            poems.results.map((document, index) =>
                <Module document={document} key={index} linktype="false" />
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

    renderQuotes() {

        const { quotes } = this.props

        return (
            quotes.results.map((document, index) =>
                <Module document={document} key={index} modquote="true" modtitle="false" linktype="false" linkuid="false" modmedia="false" modcontent="false" />
            )
        )
    }

    renderComics() {

        const { comics } = this.props

        return (
            comics.results.map((document, index) =>
                <Module document={document} key={index} linktype="false" />
            )
        )
    }

    renderVideos() {

        const { videos } = this.props

        return (
            videos.results.map((document, index) =>
                <Module document={document} key={index} linktype="false" linkuid="false" />
            )
        )
    }

    renderDownloads() {

        const { downloads } = this.props

        return (
            downloads.results.map((document, index) =>
                <Module document={document} key={index} linktype="false" />
            )
        )
    }


    renderFeatured() {

        const { featured } = this.props

        return (
            featured.results.map((document, index) =>
                <Module document={document} key={index} linktype="false" />
            )
        )
    }

    renderBody() {
        return (
            <Layout seo={<GeneralSeo />}>
                <section className="poems purple pad">
                    <div className="smesh">
                        <h3 className="centertxt mtn">Poemas</h3>
                        <div className="aureole">
                            {this.renderPoems()}
                        </div>
                    </div>
                </section>
                <section className="quotes snow pad">
                    <div className="smesh">
                        <h3 className="centertxt">Frases</h3>
                        <div className="aureole">
                            {this.renderQuotes()}
                        </div>
                    </div>
                </section>
                <section className="quotes purple pad">
                    <div className="smesh">
                        <h3 className="centertxt">Cómics</h3>
                        <div className="aureole">
                            {this.renderComics()}
                        </div>
                    </div>
                </section>
                <section className="quotes snow pad">
                    <div className="smesh">
                        <h3 className="centertxt">Descargas</h3>
                        <div className="aureole">
                            {this.renderDownloads()}
                        </div>
                    </div>
                </section>
                <section className="videos purple pad">
                    <div className="smesh">
                        <h3 className="centertxt">Videos</h3>
                        <div className="aureole">
                            {this.renderVideos()}
                        </div>
                    </div>
                </section>
                <section className="featured snow pad">
                    <div className="smesh">
                        <h3 className="centertxt">Recomendados</h3>
                        <div className="aureole">
                            {this.renderFeatured()}
                        </div>
                    </div>
                </section>

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