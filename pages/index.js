import Layout from '../components/organism/Layout'
import { Client, Prismic } from '../api/prismic'
import GeneralSeo from '../components/seo/GeneralSeo'
import Error from './_error'
import SmartModule from '../components/organism/SmartModule'
import SingleModal from '../components/templates/SingleModal'
import Carousel from 'react-multi-carousel';



export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openPost: null }
    }

    static async getInitialProps({ req, res }) {
        try {

            const post = await Client(req).query('', { orderings: '[document.first_publication_date desc]', pageSize: 12 });

            return { post, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { post: null, statusCode: 503 }
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

        const { post } = this.props

        return (
            post.results.map((document, index) =>
                <SmartModule document={document} key={index} onClickPost={this.openPost} />
            )
        )
    }

    renderBody() {

        const responsive = {
            superLargeDesktop: {
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        const { openPost } = this.state

        return (
            <Layout seo={<GeneralSeo />}>

                {openPost && <div>
                    <SingleModal document={openPost} onClose={this.closePost} />
                </div>}

                <section className="poems purple pad">
                    <Carousel
                        responsive={responsive}
                        ssr={true}
                        arrows={false}
                        centerMode={true}
                    >
                        {this.renderNews()}
                    </Carousel>
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