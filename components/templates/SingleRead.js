import moment from 'moment'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../garitmic.config.json'
import SingleSeo from "../seo/SingleSeo"
import SingleAction from "../molecules/SingleActions"
import LinkType from "../atoms/LinkType"

export default class SingleRead extends React.Component {

    render() {

        const { document, archive, onClose } = this.props

        return (
            <article className="post">
                <div className="feature" itemScope itemType="http://schema.org/CreativeWork" style={{ backgroundColor: `${document.data.color}` }}>
                    <SingleSeo document={document} />
                    <div className="smush" >
                        <div className="mod-media" >
                        <img alt={document.data.featured_img.alt} srcSet={`${document.data.featured_img.url}&w=640&h=320&dpr=1&fit=crop 640w,${document.data.featured_img.url}&w=750&h=375&dpr=1&fit=crop 750w, ${document.data.featured_img.url}&w=1080&h=540&dpr=1&fit=crop 1080w`} src={`${document.data.featured_img.url}&w=1140&h=570&dpr=1&fit=crop`} />
                            <SingleAction document={document} />
                        </div>
                    </div>
                </div>
                <div className="pad centertxt">
                    {archive ?
                        <a className="h6" href={`/categorias/${document.type}`} onClick={onClose}>{GaritmicConfig.types[document.type].name}</a>
                        :
                        <Link href='/categorias/[type]' as={`/categorias/${document.type}`}><a className="h6" itemProp="genre">{GaritmicConfig.types[document.type].name}</a></Link>
                    }
                    <div className="smash">
                        <h1 itemProp="name">{RichText.asText(document.data.title)}</h1>
                    </div>
                    <div className='glyphsSprite logo' />
                    <div className="h6"><span itemProp="author">Garitma</span> · <time>{moment(document.data.date).locale(`${GaritmicConfig.lang}`).format(`${GaritmicConfig.dateFormat}`)}</time></div>
                    <div className="content smash pad h4 light">
                        {RichText.render(document.data.content)}
                        <div data-wio-id={document.id}></div>
                    </div>
                    <div className="h6">
                        {archive ?
                            <a className="button-link" href={`/categorias/${document.type}`} onClick={onClose}>Ver más</a>
                            :
                            <LinkType document={document} />
                        }
                    </div>
                </div>
                {document.type == 'videos' &&
                    <style jsx>{`
                        .feature {
                            background-color: rgb(0, 0, 0);
                        }
                  `}</style>
                }
            </article>
        )
    }
}
