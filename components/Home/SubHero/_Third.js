import Link from 'next/link'

import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <div className="coat inside-pad">
                <div className='block module-img-container'>
                    <Link href={document.uid}><a>
                        <img className='responsive-image' src={document.data.featured_img.square.url} />
                    </a></Link>
                </div>
                <div className='module-box-detail'>
                    <div className='module-title'>
                        <p><Link href={document.uid}><a>{RichText.asText(document.data.title)}</a></Link></p>
                    </div>
                    <div className='module-description'>
                        <p>{RichText.asText(document.data.excerpt)}</p>
                    </div>
                    <div className='module-cta'>
                        <Link href={document.uid}><a className='button-link'> Escuchar</a></Link>
                    </div>
                </div>
            </div>
        )
    }
}