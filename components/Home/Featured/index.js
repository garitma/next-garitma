
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import GaritmicConfig from '../../../garitmic.config.json'


export default class Featured extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="page-featured block small-12 medium-4">
                <div className="coat inside-pad">
                    <div className="block module-img-container" style={{ background: `${document.data.color}` }}>
                        <Link href="/[uid]" as={`/${document.uid}`}><a>
                            <picture>
                                <source media="(min-width: 768px)" srcSet={`${document.data.featured_img.url}&w=390&h=330&fit=crop`} />
                                <source media="(max-width: 767px)" srcSet={`${document.data.featured_img.url}&w=600&h=570&fit=crop`} />
                                <img className="responsive-image" src={`${document.data.featured_img.url}&w=600&h=570&fit=crop`} alt={document.data.featured_img.alt} />
                            </picture>
                        </a></Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>
                                <Link href="/[uid]" as={`/${document.uid}`}>
                                    <a>{RichText.asText(document.data.title)}</a>
                                </Link>
                            </p>
                        </div>
                        <div className='module-description'>
                            <p>{RichText.asText(document.data.excerpt)}</p>
                        </div>
                        <div className="module-category">
                        </div>
                        <div className="module-cta">
                            <Link href="/[uid]" as={`/${document.uid}`}>
                                <a className="button-link">
                                    Leer
                                </a>
                            </Link>
                            <span>|</span>
                            <Link href="/categorias/[type]" as={`/categorias/${document.type}`}>
                                <a className="button-link">
                                    Ver más {GaritmicConfig.types[document.type]}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}