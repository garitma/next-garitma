import { Client, Prismic } from '../api/prismic'
import Link from 'next/link'

import SearchForm from '../components/Search/SearchForm'
import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'
import SearchResults from '../components/Search/SearchResults'
import Pagination from '../components/Pagination'

export default class extends React.Component {


    static async getInitialProps({ req, query }) {

        const { page } = query
        const { s } = query

        try {
            const search = await Client(req).query(Prismic.Predicates.fulltext('document', `${s}`), { pageSize: 12, page: `${page ? page : [1]}` });

            return { search, s }
        } catch (error) {
            return { error: true }
        }
    }

    renderSearchResults() {
        return this.props.search.results.map((document, index) =>
            <SearchResults document={document} key={index} />
        )
    }

    renderPagination() {
        return (
            <Pagination document={this.props.search} root={`/resultados?s=${this.props.s}`} string="&" />
        )
    }


    renderBody() {
        return <Layout>
            <SubHeader text={`Se encontraron ${this.props.search.total_results_size} resultados para ${this.props.s}`} />
            <div className="pad archives">
                <div className="block search-container">
                    <SearchForm />
                </div>


                <ul className="results smush">
                    <div className="coat pad">
                        {this.renderSearchResults()}
                    </div>
                </ul>
            </div>
            {this.props.search.total_results_size > [12] &&
                this.renderPagination()
            }
        </Layout>
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}