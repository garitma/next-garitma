
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default class SearchResults extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className="page-search-results mod">
                <div className="page-search-module layer">
                    <div className="page-search-wrapper halo">
                        <div className="search-thumbnail layer small-4 medium-2 valign">
                            {document.type != "frases" && document.type != "paginas" &&
                                <div className="mod-media zoom">
                                    <img className="responsive-image" src={`${document.data.featured_img.url}&w=150&h=150&fit=crop`} />
                                </div>
                            }
                        </div>

                        <div className="layer small-8 medium-10 valign">
                            <div className="inside-pad">
                                <Link href="/[uid]" as={document.uid}>
                                    <h2 className="h5"><a>{RichText.asText(document.data.title)}</a></h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}