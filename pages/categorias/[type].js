import { Client, Prismic } from '../../api/prismic'
import GaritmicConfig from '../../garitmic.config.json'
import Layout from '../../components/organism/Layout'
import SubHeader from '../../components/molecules/SubHeader'
import ArchiveSeo from '../../components/seo/ArchiveSeo'
import Error from '../_error'
import SmartModule from '../../components/organism/SmartModule'
import Pagination from '../../components/molecules/Pagination'

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
                <SmartModule document={document} key={index} />
            )
        )
    }

    renderPagination() {

        const { archive, type } = this.props

        return (
            <Pagination document={archive} root={`/categorias/${type}/`} string="?" />
        )
    }

    renderBody() {

        const { archive, type } = this.props

        return (
            <Layout seo={<ArchiveSeo document={archive} />}>

                <SubHeader text={GaritmicConfig.types[type].name} />

                <section className="archives pad snow">
                    <div className="smesh">
                        <ul className="aureole field">
                            {this.renderArchives()}
                        </ul>
                    </div>
                </section>
                <section className="pagination pad">
                    {archive.total_results_size > GaritmicConfig.ArchivePageSize &&
                        this.renderPagination()
                    }
                </section>

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