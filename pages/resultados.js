import { Client, Prismic } from '../api/prismic'
import GaritmicConfig from '../garitmic.config.json'
import SearchForm from '../components/Search/SearchForm'
import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'
import SearchResults from '../components/Search/SearchResults'
import Pagination from '../components/Pagination'

export default class extends React.Component {


    static async getInitialProps({ req, res, query }) {

        const { page } = query
        const { s } = query

        try {

            const search = await Client(req).query(Prismic.Predicates.fulltext('document', `${s}`), { pageSize: `${GaritmicConfig.ArchivePageSize}`, page: `${page ? page : [1]}` });

            return { search, s }
        } catch (e) {
            res.statusCode = 503
            return { search: null, statusCode: 503 }
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

            {this.props.search.total_results_size > GaritmicConfig.ArchivePageSize &&
                this.renderPagination()
            }
        </Layout>
    }

    render() {

        return this.renderBody()
    }
}