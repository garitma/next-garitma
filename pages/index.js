import CarouselSingle from '../components/molecules/CarouselSingle';
import Error from './_error';
import GeneralSeo from '../components/seo/GeneralSeo';
import Layout from '../components/organism/Layout';
import SingleModal from '../components/templates/SingleModal';
import SmartModule from '../components/organism/SmartModule';
import { Client, Prismic } from '../api/prismic';



export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openPost: null }
    }

    static async getInitialProps({ req, res }) {
        try {

            let [poems, quotes, comics, videos, downloads, featured] = await Promise.all([
                Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[my.poemas.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[my.frases.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[my.comics.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[my.videos.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[my.descargas.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[my.poemas.date desc]', pageSize: 6 }),
            ])

            return { poems, quotes, comics, videos, downloads, featured, statusCode: 200 }

        } catch (e) {
            res.statusCode = 503
            return { poems: null, quotes: null, comics: null, videos: null, downloads: null, featured: null, statusCode: 503 }
        }
    }

    openPost = (event, post, slug) => {
        event.preventDefault()
        this.setState({
            openPost: post
        });
        window.history.pushState("", "", slug)
    }

    closePost = (event) => {
        event.preventDefault()
        this.setState({
            openPost: null
        })
        window.history.pushState("", "", "/")
    }

    renderNews() {

        const { poems } = this.props

        return (
            poems.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }


    renderQuotes() {

        const { quotes } = this.props

        return (
            quotes.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderComics() {

        const { comics } = this.props

        return (
            comics.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderVideos() {

        const { videos } = this.props

        return (
            videos.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderDownloads() {

        const { downloads } = this.props

        return (
            downloads.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderFeatured() {

        const { featured } = this.props

        return (
            featured.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderBody() {

        const { openPost } = this.state

        return (
            <Layout seo={<GeneralSeo />}>

                {openPost && <div>
                    <SingleModal document={openPost} onClose={this.closePost} />
                </div>}

                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Poemas</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderNews()}
                    </CarouselSingle>
                </section>



                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Cómics</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderComics()}
                    </CarouselSingle>
                </section>

                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Frases</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderQuotes()}
                    </CarouselSingle>
                </section>

                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Videos</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderVideos()}
                    </CarouselSingle>
                </section>

                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Fondos de pantalla</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderDownloads()}
                    </CarouselSingle>
                </section>

                <section className="poems purple">
                    <div className="halo">
                        <div className="layer">
                            <div className="wall-pad centertxt">
                                <h2 className="h1">Recomendados</h2>
                            </div>
                        </div>
                    </div>
                    <CarouselSingle>
                        {this.renderFeatured()}
                    </CarouselSingle>
                </section>

                <div className="pad purple" />


            </Layout >
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