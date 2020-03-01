import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../garitmic.config.json'
import QuoteSeo from '../seo/QuoteSeo'


export default class SingleQuote extends React.Component {
    render() {

        const { document } = this.props

        return (
            <div className="post">
                <QuoteSeo document={document} />
                <div className="pad centertxt">
                    <Link href='/categorias/[type]' as={`/categorias/${document.type}`}><a className="h6" itemProp="genre">{GaritmicConfig.types[document.type].name}</a></Link>
                    <div className="smash">
                        <div className="centertxt message pad valign">
                            <blockquote className='h1'>{RichText.asText(document.data.title)}</blockquote>
                        </div>
                    </div>
                    <div className='glyphsSprite logo' />
                    <div className="h6"><span itemProp="author">Garitma</span></div>

                </div>
            </div>
        )
    }
}