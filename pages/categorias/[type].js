import { Client, Prismic } from '../../api/prismic'
import GaritmicConfig from '../../garitmic.config.json'
import Layout from '../../components/Layout'
import SubHeader from '../../components/SubHeader'
import DefaultArchive from '../../components/Archives/DefaultArchive'
import QuoteArchives from '../../components/Archives/QuoteArchives'
import Pagination from '../../components/Pagination'
import ArchiveSeo from '../../components/Seo/ArchiveSeo'
import Error from '../_error'



export default class extends React.Component {

    static async getInitialProps({ query, req, res }) {

        const { page } = query
        const { type } = query

        try {
            const request = req && req.headers ? req : null
            let archive = await Client(request).query(Prismic.Predicates.at('document.type', `${type}`), { orderings: `[my.${type}.date desc]`, pageSize: `${GaritmicConfig.ArchivePageSize}`, page: `${page ? page : [1]}` })

            if (archive.results.length === 0) {
                res.statusCode = 404
                return { archive: null, statusCode: 404 }
            }

            return { archive, type, statusCode: 200 }
        } catch (e) {
            return { archive: null, statusCode: 503 }
        }
    }

    renderArchives() {

        const { archive } = this.props

        return (
            archive.results.map((document, index) =>
                <DefaultArchive document={document} key={index} />
            )
        )
    }

    renderArchivesQuotes() {

        const { archive } = this.props

        return (
            archive.results.map((document, index) =>
                <QuoteArchives document={document} key={index} />
            )
        )
    }

    renderPagination() {

        const { archive } = this.props

        return (
            <Pagination document={archive} root={`/categorias/${this.props.archive.results[0].type}/`} string="?" />
        )
    }

    renderBody() {

        const { archive, type } = this.props

        return (
            <Layout>
                <SubHeader text={GaritmicConfig.types[type]} />
                <ArchiveSeo document={archive} />
                <div className="pad archives">
                    <div className="coat ">
                        {archive.results[0].type != 'frases' &&
                            this.renderArchives()
                        }
                        {archive.results[0].type == 'frases' &&
                            this.renderArchivesQuotes()
                        }
                    </div>
                </div>
                {archive.total_results_size > GaritmicConfig.ArchivePageSize &&
                    this.renderPagination()
                }
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