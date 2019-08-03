import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../../garitmic.config.json'

export default class VideoTrailer extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-6">
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <Link href="/[uid]" as={`/${document.uid}`}><a>
                            <img className="responsive-image" src={document.data.featured_img.url} alt={document.data.featured_img.alt} />
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