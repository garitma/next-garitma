import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <div className='module-box-detail valign'>
                <div className='module-title' >
                    <blockquote>{RichText.asText(document.data.title)}</blockquote>
                </div>
                <div className='module-cta'>
                    <Link href="/categorias/[type]" as={`/categorias/${document.type}`}><a className='button-link'>Ver más {document.type}</a></Link>
                </div>
            </div>

        )
    }
}