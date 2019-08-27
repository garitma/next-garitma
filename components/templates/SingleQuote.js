import moment from 'moment'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../garitmic.config.json'
import QuoteSeo from '../seo/QuoteSeo'

export default class SingleQuote extends React.Component {
    render() {

        const { document } = this.props

        return (
            <div className='page-header-single' itemScope itemType="http://schema.org/CreativeWork">

                <QuoteSeo document={document} />

                <div className='layer smash centertxt message pad valign'>
                    <div className='page-post-info'>
                        <div itemProp="genre" className='page-single-post-type single-post-category'>
                            <Link href={`/categorias/${document.type}`}><a>{GaritmicConfig.types[document.type].name}</a></Link>
                        </div>
                        <div className="smosh">
                            <blockquote className='headline-single-quote'>{RichText.asText(document.data.title)}</blockquote>
                        </div>
                        <div data-wio-id={document.id}></div>
                    </div>
                </div>

            </div >
        )
    }
}