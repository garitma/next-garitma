import moment from 'moment'
import Link from 'next/link'

import { RichText } from 'prismic-reactjs'


export default class SingleRead extends React.Component {
    render() {
        const { document } = this.props
        return (<div className='page-header-single'>

            <div className='module' style={{ background: `${document.data.color}` }} >
                <div className='module-img smush'>
                    <img className='responsive-image' src={document.data.featured_img.url} />
                </div>
            </div>

            <div className='block smash'>
                <div className='page-post-info'>
                    <div className='single-post-category'>
                        <Link><a>Poemas</a></Link>
                    </div>
                    <div>
                        <h1 className='headline-single'>{RichText.asText(document.data.title)}</h1>
                    </div>

                    <div className='avatar-container'>
                        <img className='avatar' src='#' />
                    </div>

                    <div className='single-post-autor-date'>
                        <span>Garitma · {moment(document.date).locale("es").format('LL')}</span>
                    </div>

                </div>
            </div>

            <div className='smash'>
                <div className='entry-content'>
                    <p>
                        {RichText.asText(document.data.content)}
                    </p>
                </div>
            </div>
        </div>
        )
    }
}
