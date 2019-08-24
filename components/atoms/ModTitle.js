import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class ModTitle extends React.Component {
    render() {

        const { document } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}>
                <a className="mod-title">{RichText.asText(document.data.title)}</a>
            </Link>
        )
    }
}