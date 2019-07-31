import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

export default class PromotionPlaces extends React.Component {
    render() {
        const { document, cta } = this.props
        return (
            <ul className="page-promotion-place PromotionPlace" style={{ background: `${document.data.color}` }}>
                <li className="page-promotion-place-container coat">
                    <div className="page-promotion-place-content block small-12 medium-8 smush">
                        <div className="page-promotion-place-content-detail module-box-detail" style={{ background: `${document.data.color}` }}>
                            <div className="page-promotion-place-title module-title">
                                <h2><Link href="/[uid]" as={document.uid}><a className="page-promotion-place-link">{RichText.asText(document.data.title)}</a></Link></h2>
                            </div>
                            <div className="page-promotion-place-description module-description">
                                <p>{RichText.asText(document.data.excerpt)}</p>
                            </div>
                            <div className="page-promotion-place-cta module-cta">
                                <Link href="/[uid]" as={document.uid}><a className="page-promotion-place-cta-post-link button-link">{cta}</a></Link>
                                <span className="page-divisor">|</span>
                                <Link href={`/categorias/${document.type}`}><a className="page-promotion-place-cta-archive-link button-link">Ver más {document.type}</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="page-promotion-place-image-wrapper block small-12 medium-4 module-img-container">
                        <Link href="/[uid]" as={document.uid}><a className="page-hero-poem-module-image-link"><img className="page-promotion-place-image responsive-image" src={document.data.featured_img.square.url} alt={document.data.featured_img.alt} /></a></Link>
                    </div>
                </li>
            </ul>
        )
    }
}