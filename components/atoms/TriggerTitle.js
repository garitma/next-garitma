import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class TriggerTitle extends React.Component {
    render() {

        const { document, onClickPost } = this.props

        return (
            <Link href="/[uid]" as={`/${document.uid}`}  >
            <a className="mod-title valign" onClick={(event) => onClickPost(event, document, `/${document.uid}`)}>
                {RichText.asText(document.data.title)}
            </a>
            </Link>
        )
    }
}