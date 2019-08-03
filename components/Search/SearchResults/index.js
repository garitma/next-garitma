
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default class SearchResults extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className="page-search-results">
                <div className="page-search-module block">
                    <div className="page-search-wrapper coat">
                        <div className="search-thumbnail block small-4 medium-2">

                        </div>

                        <div className="block small-8 medium-10 valign">
                            <div className="search-box-detail">
                                <Link href="/[uid]" as={document.uid}>
                                    <h2 className="h5"><a>{RichText.asText(document.data.title)}</a></h2>
                                </Link>
                                <Link href="/[uid]" as={document.uid}>
                                    <a className="button-link hide-small">Ver más</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}