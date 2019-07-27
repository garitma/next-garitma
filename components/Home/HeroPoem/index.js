import Link from 'next/link'
import { RichText } from 'prismic-reactjs'


export default class HeroPoem extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul>
                <li className='hero-module'>
                    <Link href="/[uid]" as={document.uid}>
                        <a>
                            <div className='image-coat wallpaper-backgorund' style={{ background: `${document.data.color}` }}>
                                <div className='look hero-look'>

                                    <img className='responsive-image' src={document.data.featured_img.square.url} alt={document.data.featured_img.alt} />

                                </div>
                            </div></a></Link>
                    <div className='hero-content' style={{ background: `${document.data.color}` }}>
                        <div className='hero-body'>
                            <div className='hero-detail'>
                                <Link href="/[uid]" as={document.uid}><a>
                                    <h1>{RichText.asText(document.data.title)}</h1>
                                </a></Link>
                                <div className='hero-description'>
                                    <p>{RichText.asText(document.data.excerpt)}</p>
                                </div>
                                <p className='hero-cta'>
                                    <Link href="/[uid]" as={document.uid}>
                                        <a className='button-link'>Leer</a>
                                    </Link>
                                    <span>|</span>
                                    <Link href={`/categorias/${document.type}/`}>
                                        <a className='button-link'>
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

