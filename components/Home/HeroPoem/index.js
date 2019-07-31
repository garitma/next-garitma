import Link from 'next/link'
import { RichText } from 'prismic-reactjs'


export default class HeroPoem extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul className="page-hero-poem">
                <li className='page-hero-poem-module hero-module'>
                    <Link href="/[uid]" as={document.uid}>
                        <a className="page-hero-poem-module-image-link">
                            <div className='page-hero-poem-module-image-container image-coat wallpaper-backgorund' style={{ background: `${document.data.color}` }}>
                                <div className='page-hero-poem-module-image-wrapper look hero-look'>
                                    <img className='page-hero-poem-module-image responsive-image' src={document.data.featured_img.square.url} alt={document.data.featured_img.alt} />
                                </div>
                            </div></a></Link>
                    <div className='page-hero-poem-hero-content hero-content' style={{ background: `${document.data.color}` }}>
                        <div className='page-hero-poem-hero-body hero-body'>
                            <div className='page-hero-poem-hero-detail hero-detail'>
                                <Link href="/[uid]" as={document.uid}><a className='page-hero-poem-title-link'>
                                    <h1 className='page-hero-poem-title'>{RichText.asText(document.data.title)}</h1>
                                </a></Link>
                                <div className='page-hero-poem-description hero-description'>
                                    <p>{RichText.asText(document.data.excerpt)}</p>
                                </div>
                                <p className='page-hero-poem-cta-container hero-cta'>
                                    <Link href="/[uid]" as={document.uid}>
                                        <a className='page-hero-poem-cta-post-link button-link'>Leer</a>
                                    </Link>
                                    <span className="page-hero-poem-divisor">|</span>
                                    <Link href="/categorias/[type]" as={`/categorias/${document.type}`}>
                                        <a className='page-hero-poem-cta-archive-link button-link'>
                                            Ver más {document.type}
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        )
    }
}

