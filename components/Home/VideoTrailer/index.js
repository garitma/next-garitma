import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class VideoTrailer extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-6">
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <Link href={document.uid}><a>
                            <img className="responsive-image" src={document.data.featured_img.url} />
                        </a></Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>{RichText.asText(document.data.title)}</p>
                        </div>
                        <div className="module-cta">
                            <Link href={document.uid}><a className="button-link">Ver</a></Link>
                            <span>|</span>
                            <Link href={`/categorias/${document.type}`}><a className="button-link">Ver más {document.type}</a></Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}