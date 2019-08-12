import moment from 'moment'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../../garitmic.config.json'
import SingleSeo from "../../Seo/SingleSeo"

export default class SingleQuote extends React.Component {
    render() {

        const { document } = this.props

        return (
            <div className='page-header-single' itemType="http://schema.org/CreativeWork">


                <div className='block smash'>
                    <div className='page-post-info'>
                        <div itemProp="genre" className='page-single-post-type single-post-category'>
                            <Link href={`/categorias/${document.type}`}><a>{GaritmicConfig.types[document.type]}</a></Link>
                        </div>
                        <div>
                            <h1><blockquote className='headline-single-quote'>{RichText.asText(document.data.title)}</blockquote></h1>
                        </div>
                        <Link href='/categorias/[type]' as={`/categorias/${document.type}`}><a className="button-link">Ver más {GaritmicConfig.types[document.type]}</a></Link>
                        <div data-wio-id={document.id}></div>
                    </div>
                </div>

            </div>
        )
    }
}