import { Client, Prismic } from '../../api/prismic'
import Link from 'next/link'

import Layout from '../../components/Layout'
import SubHeader from '../../components/SubHeader'
import DefaultArchive from '../../components/Archives/DefaultArchive'
import QuoteArchives from '../../components/Archives/QuoteArchives'


export default class extends React.Component {

    static async getInitialProps({ query, req }) {

        const { page } = query
        const { type } = query

        try {
            const request = req && req.headers ? req : null
            const archive = await Client(request).query(Prismic.Predicates.at('document.type', `${type}`), { orderings: '[document.first_publication_date desc]', pageSize: 12, page: `${page ? page : [1]}` })
            return { archive }
        } catch (error) {
            console.log(error)
            return { error: true }
        }
    }

    renderArchives() {
        return this.props.archive.results.map((document) =>
            <DefaultArchive document={document} />
        )
    }

    renderArchivesQuotes() {
        return this.props.archive.results.map((document) =>
            <QuoteArchives document={document} />
        )
    }

    renderPagination() {
        return (
            <div className="block">
                <div className="pagination-container">
                    <div className="">
                        <ul className="nav-list">
                            <li className="items">
                                {this.props.archive.prev_page == null &&
                                    <a className="button-link">
                                        <div className="glyphsSprite arrowLeft disable" />
                                    </a>
                                }
                                {this.props.archive.prev_page != null &&
                                    <Link href={`/categorias/${this.props.archive.results[0].type}?page=${Number(this.props.archive.page) - 1
                                        }`}>
                                        <a className="button-link">
                                            <div className="glyphsSprite arrowLeft" />
                                        </a>
                                    </Link>
                                }
                            </li>
                            <li className="items">{this.props.archive.page} de {this.props.archive.total_pages}</li>
                            <li className="items">
                                {this.props.archive.next_page == null &&
                                    <a className="button-link">
                                        <div className="glyphsSprite arrowRight disable" />
                                    </a>
                                }
                                {this.props.archive.next_page != null &&
                                    <Link href={`/categorias/${this.props.archive.results[0].type}?page=${Number(this.props.archive.page) + 1} `}>
                                        <a className="button-link">
                                            <div className="glyphsSprite arrowRight" />
                                        </a>
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    renderBody() {
        return <Layout>
            <SubHeader subtitle={this.props.archive.results[0].type} />
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
            {this.renderPagination()}
        </Layout>
    }

    render() {
        if (this.props.error) return <Error />
        else return this.renderBody()
    }
}