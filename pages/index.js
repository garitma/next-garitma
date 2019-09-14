import Layout from '../components/organism/Layout'
import { Client, Prismic } from '../api/prismic'
import GeneralSeo from '../components/seo/GeneralSeo'
import Error from './_error'
import SmartModule from '../components/organism/SmartModule'

export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        try {

            const post = await Client(req).query('', { orderings: '[document.first_publication_date desc]', pageSize: 12 });

            return { post, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { post: null, statusCode: 503 }
        }
    }

    renderNews() {

        const { post } = this.props

        return (
            post.results.map((document, index) =>
                <SmartModule document={document} key={index} />
            )
        )
    }

    renderBody() {
        return (
            <Layout seo={<GeneralSeo />}>

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