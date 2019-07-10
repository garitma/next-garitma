import { Client, Prismic } from '../../api/prismic'
import { RichText } from 'prismic-reactjs'

import Layout from '../../components/Layout'
import SubHeader from '../../components/SubHeader'



export default class extends React.Component {

    static async getInitialProps({ req }) {
        try {
            const request = req && req.headers ? req : null
            const archive = await Client(request).query(Prismic.Predicates.at('document.type', 'poemas'), { orderings: '[document.first_publication_date desc]', pageSize: 12 })
            return { archive }
        } catch (error) {
            console.log(error)
            return { error: true }
        }
    }

    renderArchives() {
        return this.props.archive.results.map((document, index) =>
            <div key={index} className="products-grid-item-wrapper">
                <p className="products-grid-item-subtitle">{RichText.asText(document.data.title)}</p>
            </div>
        )
    }

    renderBody() {
        return <Layout>
            <SubHeader subtitle="Poema" />
            {this.renderArchives()}
        </Layout>
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}