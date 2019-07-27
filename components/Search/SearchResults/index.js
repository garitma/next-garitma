
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default class SearchResults extends React.Component {
    render() {
        const { document } = this.props
        return (<div className="block">
            <div className="module-box-detail">
                <Link href="/[uid]" as={document.uid}><a><h2>{RichText.asText(document.data.title)}</h2></a></Link>
                <p>
                    {document.data.excerpt
                        ? `Hay ${RichText.asText(document.data.excerpt)} excerpt`
                        : ''}
                </p>
                <p><Link href="/[uid]" as={document.uid}><a className="button-link" href={document.uid}>https://garitma.com/{document.uid}</a></Link></p>
            </div>
        </div>)
    }
}