import { Client, Prismic } from '../api/prismic'
import Layout from '../components/organism/Layout'
import Error from './_error'
import SinglePage from '../components/templates/SinglePages'
import PageSeo from '../components/seo/PageSeo'
import ContactForm from '../components/molecules/ContactForm'



export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        try {

            let slug = 'informacion-de-contacto'

            const page = await Client(req).query(Prismic.Predicates.at('my.paginas.uid', `${slug}`))

            return { page, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { page: null, statusCode: 503 }
        }
    }

    renderBody() {

        const { page } = this.props

        return (
            <Layout seo={<PageSeo document={page.results[0]} />}>
                <SinglePage document={page.results[0]} />
                <ContactForm />
            </Layout>
        )
    }

    render() {

        const { statusCode } = this.props

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