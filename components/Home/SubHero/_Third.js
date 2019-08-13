import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import LazyLoad from 'react-lazyload';

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <div className="coat inside-pad">
                <div className='block module-img-container'>
                    <Link href="/[uid]" as={`/${document.uid}`}><a>
                        <LazyLoad height={150}>
                            <picture>
                                <source media="(min-width: 768px)" srcSet={`${document.data.featured_img.url}&w=390&h=330&fit=crop`} />
                                <source media="(max-width: 767px)" srcSet={`${document.data.featured_img.url}&w=600&h=570&fit=crop`} />
                                <img className="responsive-image" src={`${document.data.featured_img.url}&w=600&h=570&fit=crop`} alt={document.data.featured_img.alt} />
                            </picture>
                        </LazyLoad>
                    </a></Link>
                </div>
                <div className='module-box-detail'>
                    <div className='module-title'>
                        <p><Link href="/[uid]" as={`/${document.uid}`}><a>{RichText.asText(document.data.title)}</a></Link></p>
                    </div>
                    <div className='module-description'>
                        <p>{RichText.asText(document.data.excerpt)}</p>
                    </div>
                    <div className='module-cta'>
                        <Link href="/[uid]" as={`/${document.uid}`}><a className='button-link'> Escuchar</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}