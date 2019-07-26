import { Client, Prismic } from '../api/prismic'
import Link from 'next/link'

import SearchForm from '../components/Search/SearchForm'
import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'
import SearchResults from '../components/Search/SearchResults'

export default class extends React.Component {


    static async getInitialProps({ req, query }) {

        const { page } = query
        const { s } = query

        try {
            const search = await Client(req).query(Prismic.Predicates.fulltext('document', `${s}`), { pageSize: 12 });

            return { search, s }
        } catch (error) {
            return { error: true }
        }
    }

    renderSearchResults() {
        return this.props.search.results.map((document, index) =>
            <></>
        )
    }


    renderBody() {
        return <Layout>
            <SubHeader text={`Se encontraron ${this.props.search.total_results_size} resultados para ${this.props.s}`} />
            <div className="pad archives">
                <div className="block smash">
                    <SearchForm />
                </div>


                <ul className="results smush">
                    <div className="coat pad">
                        {this.renderSearchResults()}
                    </div>
                </ul>
            </div>
        </Layout>
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}