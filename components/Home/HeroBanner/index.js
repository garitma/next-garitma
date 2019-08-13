import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../../garitmic.config.json'
import LazyLoad from 'react-lazyload';


export default class HeroPoem extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul className="page-hero-banner" style={{ background: `${document.data.color}` }}>
                <li className='page-hero-banner-module hero-module'>
                    <Link href="/[uid]" as={`/${document.uid}`}>
                        <a className="page-hero-banner-module-image-link">
                            <div className='page-hero-banner-module-image-container image-coat wallpaper-backgorund'>
                                <div className='page-hero-banner-module-image-wrapper look hero-look'>
                                    <LazyLoad height={150}>
                                        <picture>
                                            <source media="(min-width: 768px)" srcSet={`${document.data.featured_img.url}&w=600&h=570&fit=crop&crop=faces`} />
                                            <source media="(max-width: 767px)" srcSet={`${document.data.featured_img.url}&w=767&`} />
                                            <img className="responsive-image" src={`${document.data.featured_img.url}&w=600&h=570&fit=crop&crop=faces`} alt={document.data.featured_img.alt} />
                                        </picture>
                                    </LazyLoad>
                                </div>
                            </div></a></Link>
                    <div className='page-hero-banner-hero-content hero-content' style={{ background: `${document.data.color}` }}>
                        <div className='page-hero-banner-hero-body hero-body'>
                            <div className='page-hero-banner-hero-detail hero-detail'>
                                <Link href="/[uid]" as={`/${document.uid}`}><a className='page-hero-banner-title-link'>
                                    <h1 className='page-hero-banner-title'>{RichText.asText(document.data.title)}</h1>
                                </a></Link>
                                <div className='page-hero-banner-description hero-description'>
                                    <p>{RichText.asText(document.data.excerpt)}</p>
                                </div>
                                <p className='page-hero-banner-cta-container hero-cta'>
                                    <Link href="/[uid]" as={`/${document.uid}`}>
                                        <a className='page-hero-banner-cta-post-link button-link'>Leer</a>
                                    </Link>
                                    <span className="page-hero-banner-divisor">|</span>
                                    <Link href="/categorias/[type]" as={`/categorias/${document.type}`}>
                                        <a className='page-hero-banner-cta-archive-link button-link'>
                                            Ver más {GaritmicConfig.types[document.type]}
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

