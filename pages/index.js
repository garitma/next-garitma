import Error from './_error'
import GeneralSeo from '../components/seo/GeneralSeo'
import Layout from '../components/organism/Layout'
import SingleModal from '../components/templates/SingleModal'
import SmartModule from '../components/organism/SmartModule'
import { Client, Prismic } from '../api/prismic'
import SliceCarousel from '../components/organism/SliceCarousel'



export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openPost: null }
    }

    static async getInitialProps({ req, res }) {
        try {

            let [poems, quotes, comics, videos, downloads, featured, home] = await Promise.all([
                Client(req).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[my.poemas.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'frases'), { orderings: '[my.frases.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'comics'), { orderings: '[my.comics.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'videos'), { orderings: '[my.videos.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.type', 'descargas'), { orderings: '[my.descargas.date desc]', pageSize: 6 }),
                Client(req).query(Prismic.Predicates.at('document.tags', ['featured']), { orderings: '[my.poemas.date desc]', pageSize: 6 }),
                Client(req).getSingle('homepage')
            ])

            return { poems, quotes, comics, videos, downloads, featured, home, statusCode: 200 }

        } catch (e) {
            res.statusCode = 503
            return { poems: null, quotes: null, comics: null, videos: null, downloads: null, featured: null, home: null, statusCode: 503 }
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

    renderModule(document) {
        return (
            document.results.map((document, index) =>
                <SmartModule
                    document={document}
                    key={index}
                    onClickPost={this.openPost}
                />
            )
        )
    }

    renderCarouselSlice(slice) {

        return (
            slice.data.carousel.map((slice, index) =>
                <SliceCarousel slice={slice} key={index}>
                    {this.renderModule(this.props[slice.post_type])}
                </SliceCarousel>
            )
        )
    }


    renderBody() {

        const { home } = this.props
        const { openPost } = this.state

        return (
            <Layout seo={<GeneralSeo />}>

                {openPost && <div>
                    <SingleModal document={openPost} onClose={this.closePost} />
                </div>}

                {this.renderCarouselSlice(home)}

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