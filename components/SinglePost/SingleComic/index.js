import moment from 'moment'
import Link from 'next/link'

import { RichText } from 'prismic-reactjs'

export default class SingleComic extends React.Component {
    render() {
        const { document } = this.props
        return (<div className='page-header-single'>

            <div className='block smash'>
                <div className='page-post-info'>
                    <div className='single-post-category'>
                        <Link href='/categorias/comics'><a>Cómics</a></Link>
                    </div>
                    <div>
                        <h1 className='headline-single'>{RichText.asText(document.data.title)}</h1>
                    </div>

                    <div className='avatar-container'>
                        <div className="glyphsSprite logo" />
                    </div>

                    <div className='single-post-autor-date'>
                        <span>Garitma · {moment(document.date).locale("es").format('LL')}</span>
                    </div>
                </div>
            </div>

            <div className='smash'>
                <div className='entry-content'>
                    {RichText.render(document.data.content)}
                </div>
            </div>

        </div>
        )
    }
}
