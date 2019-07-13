import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class PromotionPlaces extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul className="PromotionPlace" style={{ background: `${document.data.color}` }}>
                <li className="coat">
                    <div className="block small-12 medium-8">
                        <div className="module-box-detail" style={{ background: `${document.data.color}` }}>
                            <div className="module-title">
                                <h2><Link href={document.uid}><a>{RichText.asText(document.data.title)}</a></Link></h2>
                            </div>
                            <div className="module-description">
                                <p>{RichText.asText(document.data.excerpt)}</p>
                            </div>
                            <div className="module-cta">
                                <Link href={document.uid}><a className="button-link">Leer</a></Link>
                                <span>|</span>
                                <Link href={`/categorias/${document.type}`}><a className="button-link">Ver más {document.type}</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="block small-12 medium-4 module-img-container">
                        <Link href={document.uid}><a><img className="responsive-image" src={document.data.featured_img.square.url} /></a></Link>
                    </div>
                </li>
            </ul>
        )
    }
}