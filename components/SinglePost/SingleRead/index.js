import moment from 'moment'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../../garitmic.config.json'
import SingleSeo from "../../Seo/SingleSeo"
import SingleActions from "./SingleActions"

export default class SingleRead extends React.Component {

    render() {

        const { document } = this.props

        return (
            <div className='page-header-single' itemScope itemType="http://schema.org/CreativeWork">
                <SingleSeo document={document} />
                <div className='page-header-single-module module' style={{ background: `${document.data.color}` }} >
                    <div className='page-header-single-image-container module-img smush'>
                        <picture>
                            <source media="(min-width: 1280px)" srcSet={`${document.data.featured_img.url}`} />
                            <source media="(max-width: 1279px)" srcSet={`${document.data.featured_img.url}&w=600`} />
                            <img itemProp="image" className='page-header-single-image responsive-image' src={document.data.featured_img.url} alt={document.data.featured_img.alt} />
                        </picture>

                    </div>
                    <div className="page-header-single-actions">
                        <SingleActions document={document} />
                    </div>
                </div>

                <div className='page-post-body block smash'>
                    <div className='page-post-info'>
                        <div itemProp="genre" className='page-single-post-type single-post-category'>
                            <Link href={`/categorias/${document.type}`}><a>{GaritmicConfig.types[document.type]}</a></Link>
                        </div>
                        <div>
                            <h1 itemProp="name" className='headline-single'>{RichText.asText(document.data.title)}</h1>
                        </div>

                        <div className='page-single-post-avatar avatar-container'>
                            <div className='glyphsSprite logo' />
                        </div>

                        <div className='page-single-post-meta single-post-autor-date'>
                            <span itemProp="author">Garitma</span> · <span>{moment(document.data.date).locale(`${GaritmicConfig.lang}`).format(`${GaritmicConfig.dateFormat}`)}</span>
                        </div>
                    </div>
                </div>

                <div className='page-post-single-content-container smash'>
                    <div className='page-post-single-content entry-content'>
                        {RichText.render(document.data.content)}
                        <Link href='/categorias/[type]' as={`/categorias/${document.type}`}><a className="button-link">Ver más {GaritmicConfig.types[document.type]}</a></Link>
                        <div data-wio-id={document.id}></div>
                    </div>
                </div>
            </div>
        )
    }
}
