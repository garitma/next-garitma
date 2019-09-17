import Layout from '../components/organism/Layout'
import { Client, Prismic } from '../api/prismic'
import GeneralSeo from '../components/seo/GeneralSeo'
import Error from './_error'
import SmartModule from '../components/organism/SmartModule'
import SingleModal from '../components/templates/SingleModal'


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

    openPost = (event, post) => {
        event.preventDefault()
        this.setState({
            openPost: post
        })
    }

    closePost = (event) => {
        event.preventDefault()
        this.setState({
            openPost: null
        })
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

        const { openPost } = this.state

        return (
            <Layout seo={<GeneralSeo />}>

                {openPost && <div>
                    <SingleModal document={openPost} onClose={this.closePost} />
                </div>}

                <section className="poems purple pad">
                    <div className="smesh">
                        <div className="pad hide-small" />
                        <div className="aureole field">
                            {this.renderNews()}
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