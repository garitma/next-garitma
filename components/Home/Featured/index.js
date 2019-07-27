
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'


export default class Featured extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-4" key={document.id}>
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <Link href="/[uid]" as={document.uid}><a>
                            <img className="responsive-image" src={document.data.featured_img.square.url} alt={document.data.featured_img.alt} />
                        </a></Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>
                                <Link href="/[uid]" as={document.uid}>
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
                            <Link href="/[uid]" as={document.uid}>
                                <a className="button-link">
                                    Leer
                                </a>
                            </Link>
                            <span>|</span>
                            <Link href="/cateogorias/[type]" as={`/categorias/${document.type}`}>
                                <a className="button-link">
                                    Ver más {document.type}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}