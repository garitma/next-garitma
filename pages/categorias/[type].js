import { Client, Prismic } from '../../api/prismic'
import GaritmicConfig from '../../garitmic.config.json'
import Layout from '../../components/organism/Layout'
import SubHeader from '../../components/molecules/SubHeader'
import ArchiveSeo from '../../components/seo/ArchiveSeo'
import Error from '../_error'
import SmartModule from '../../components/organism/SmartModule'
import Pagination from '../../components/molecules/Pagination'
import SingleModal from '../../components/templates/SingleModal'


export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openPost: null }
    }

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

    openPost = (event, post, slug) => {
        event.preventDefault()
        this.setState({
            openPost: post
        });
        window.history.pushState("", "", slug)
    }

    closePost = (event) => {

        const { type } = this.props

        event.preventDefault()
        this.setState({
            openPost: null
        })
        window.history.pushState("", "", `/categorias/${type}`)
    }

    componentDidMount() {
        window.addEventListener("popstate", this.openPost);
    }

    renderArchives() {

        const { archive } = this.props

        return (
            archive.results.map((document, index) =>
                <SmartModule document={document} key={index} onClickPost={this.openPost} />
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
        const { openPost } = this.state


        return (
            <Layout seo={<ArchiveSeo document={archive} />}>

                <SubHeader text={GaritmicConfig.types[type].name} />

                {openPost && <div>
                    <SingleModal document={openPost} onClose={this.closePost} archive="true" />
                </div>}

                <section className="archives pad purple">
                    <div className="smesh">
                        <div className="aureole field feature-first">
                            {this.renderArchives()}
                        </div>
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