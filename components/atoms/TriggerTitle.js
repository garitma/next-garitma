import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class TriggerTitle extends React.Component {
    render() {

        const { document, onClickPost } = this.props

        return (
            <a href={`/${document.uid}`} className="mod-title" onClick={(event) => onClickPost(event, document, `/${document.uid}`)}>
                {RichText.asText(document.data.title)}
            </a>
        )
    }
}