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

    static async getInitialProps({ query, req }) {

        const { page } = query
        const { type } = query

        try {
            const request = req && req.headers ? req : null
            const archive = await Client(request).query(Prismic.Predicates.at('document.type', `${type}`), { orderings: `[my.${type}.date desc]`, pageSize: `${GaritmicConfig.ArchivePageSize}`, page: `${page ? page : [1]}` })

            if (archive.status >= 400) {
                return { statusCode: archive.status }
            }

            return { archive, statusCode: 200 }
        } catch (error) {
            return { error: true, archive: null, statusCode: 503 }
        }
    }

    renderArchives() {
        return this.props.archive.results.map((document, index) =>
            <DefaultArchive document={document} key={index} />
        )
    }

    renderArchivesQuotes() {
        return this.props.archive.results.map((document, index) =>
            <QuoteArchives document={document} key={index} />
        )
    }

    renderPagination() {
        return (
            <Pagination document={this.props.archive} root={`/categorias/${this.props.archive.results[0].type}/`} string="?" />
        )
    }

    renderBody() {
        return (<Layout>
            <SubHeader text={this.props.archive.results[0].type} />
            <ArchiveSeo document={this.props.archive} />
            <div className="pad archives">
                <div className="coat ">
                    {this.props.archive.results[0].type != 'frases' &&
                        this.renderArchives()
                    }
                    {this.props.archive.results[0].type == 'frases' &&
                        this.renderArchivesQuotes()
                    }
                </div>
            </div>
            {this.props.archive.total_results_size > GaritmicConfig.ArchivePageSize &&
                this.renderPagination()
            }
        </Layout>)
    }

    render() {

        if (this.props.statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        if (this.props.archive.results.length == 0) {
            return <Error statusCode="404" />
        }

        if (this.props.error) return <Error />

        else return this.renderBody()
    }
}