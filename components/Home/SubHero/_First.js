import Link from 'next/link'
import { RichText } from 'prismic-reactjs'


export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <li className='block small-12 medium-12 large-6'>
                <div className='coat inside-pad'>
                    <div className='block module-img-container'>
                        <Link href="/[uid]" as={`/${document.uid}`}><a>
                            <picture>
                                <source media="(min-width: 1280px)" srcSet={`${document.data.featured_img.url}`} />
                                <source media="(max-width: 1279px)" srcSet={`${document.data.featured_img.url}&w=600`} />
                                <img className="responsive-image" src={`${document.data.featured_img.url}&w=600`} alt={document.data.featured_img.alt} />
                            </picture>
                        </a></Link>
                    </div>
                    <div className='module-box-detail'>
                        <div className='module-title'>
                            <p><Link href="/[uid]" as={`/${document.uid}`}><a>{RichText.asText(document.data.title)}</a></Link></p>
                        </div>
                        <div className='module-description'>
                            {RichText.asText(document.data.excerpt)}
                        </div>
                        <div className='module-cta'>
                            <Link href="/[uid]" as={`/${document.uid}`}><a className='button-link'> Jugar</a></Link>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}