import { Client, Prismic } from '../api/prismic'
import GaritmicConfig from '../garitmic.config.json'
import Layout from '../components/organism/Layout'
import SubHeader from '../components/molecules/SubHeader'
import Pagination from '../components/molecules/Pagination'
import SearchForm from '../components/atoms/SearchForm'
import SearchResults from '../components/molecules/SearchResults'

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

    renderNoResults() {
        return (
            <div className="centertxt">
                <img alt="Buzo llorando" src="https://media.giphy.com/media/BoIoEEO69oO6JqML25/200w_d.gif" />
                <h2>On No :(</h2>
                <p>Continúa buscando</p>
            </div>
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
                <div className="pad snow">
                    <div className="smosh">
                        <SearchForm />
                    </div>
                    <ul className="results smash">
                        <div className="pad">
                            <div className="aureole one">
                                {this.renderSearchResults()}
                            </div>
                            {search.results_size === 0 &&
                                this.renderNoResults()
                            }
                        </div>
                    </ul>

                </div>
                <section className="pagination pad">
                    {this.props.search.total_results_size > GaritmicConfig.ArchivePageSize &&
                        this.renderPagination()
                    }
                </section>
            </Layout>
        )
    }

    render() {
        return (
            this.renderBody()
        )
    }
}