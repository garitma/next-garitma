import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../../garitmic.config.json'
import LazyLoad from 'react-lazyload';

export default class VideoTrailer extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-6">
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <Link href="/[uid]" as={`/${document.uid}`}><a>
                            <LazyLoad height={150}>
                                <picture>
                                    <source media="(min-width: 1280px)" srcSet={`${document.data.featured_img.url}`} />
                                    <source media="(max-width: 1279px)" srcSet={`${document.data.featured_img.url}&w=600`} />
                                    <img className="responsive-image" src={`${document.data.featured_img.url}&w=600`} alt={document.data.featured_img.alt} />
                                </picture>
                            </LazyLoad>
                        </a></Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>{RichText.asText(document.data.title)}</p>
                        </div>
                        <div className="module-cta">
                            <Link href="/[uid]" as={`/${document.uid}`}><a className="button-link">Ver</a></Link>
                            <span>|</span>
                            <Link href="/categorias/[type]" as={`/categorias/${document.type}`}>
                                <a className="button-link">Ver más {GaritmicConfig.types[document.type]}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}