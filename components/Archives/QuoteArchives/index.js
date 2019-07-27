import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default class QuoteArchives extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className="block small-12 medium-6 large-4">
                <div className="coat inside-pad">
                    <div className="module-box-detail">
                        <div className="module-title">
                            <blockquote>{RichText.asText(document.data.title)}</blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}