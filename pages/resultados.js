import { Client, Prismic } from '../api/prismic'
import GaritmicConfig from '../garitmic.config.json'
import SearchForm from '../components/Search/SearchForm'
import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'
import SearchResults from '../components/Search/SearchResults'
import Pagination from '../components/Pagination'

export default class extends React.Component {


    static async getInitialProps({ req, res, query }) {

        let { page } = query
        let { s } = query

        try {

            let search = await Client(req).query(Prismic.Predicates.fulltext('document', `${s}`), { pageSize: `${GaritmicConfig.ArchivePageSize}`, page: `${page ? page : [1]}` });

            return { search, s }
        } catch (e) {
            res.statusCode = 503
            return { search: null, statusCode: 503 }
        }
    }

    renderSearchResults() {

        const { search } = this.props

        return (
            search.results.map((document, index) =>
                <SearchResults document={document} key={index} />
            )
        )
    }

    renderPagination() {

        const { search, s } = this.props

        return (
            <Pagination document={search} root={`/resultados?s=${s}`} string="&" />
        )
    }


    renderBody() {

        const { search } = this.props

        return (
            <Layout>
                <SubHeader text={`Se encontraron ${search.total_results_size} resultados para ${this.props.s}`} />
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
        )
    }

    render() {
        return (
            this.renderBody()
        )
    }
}