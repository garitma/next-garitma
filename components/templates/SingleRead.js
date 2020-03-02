import moment from 'moment'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import GaritmicConfig from '../../garitmic.config.json'
import SingleSeo from "../seo/SingleSeo"
import SingleAction from "../molecules/SingleActions"
import SubhHader from "../molecules/SubHeader"
import AuthorBox from "../molecules/AuthorBox"
import Player from 'react-soundcloud-player'

export default class SingleRead extends React.Component {

    render() {

        const { document, archive, onClose } = this.props

        return (
            <>
            <SingleSeo document={document} />

            <article className="post" itemScope itemType="http://schema.org/CreativeWork">

            <div className="pad" />
                <section className="sumary smash">
                    <div className="pad">
                        <div className="halo">
                            {archive ?
                            <a itemProp="genre" href={`/categorias/${document.type}`} onClick={onClose}>
                                <div className="halo">
                                    <span className="purple wall-pad container">{GaritmicConfig.types[document.type].name}</span>
                                </div>
                            </a>
                            :
                            <Link href='/categorias/[type]' as={`/categorias/${document.type}`}>
                                <a itemProp="genre">
                                    <div className="halo">
                                        <span className="purple wall-pad container">{GaritmicConfig.types[document.type].name}</span>
                                    </div>
                                </a>
                            </Link>
                            }
                        </div>
                        <time itemProp="datePublished">{moment(document.data.date).locale(`${GaritmicConfig.lang}`).format(`${GaritmicConfig.dateFormat}`)}</time>
                        <h1 itemProp="name"> {RichText.asText(document.data.title)}</h1>
                         
                        <p itemProp="abstract" className="h5 light">{RichText.asText(document.data.excerpt)}</p>
                    </div>
                </section>
                <section className="feature">
                    <div className="block-img smush">
                        {document.data.audio_id && 
                            <Player
                                client_id="c5a171200f3a0a73a523bba14a1e0a29"
                                audio_id={document.data.audio_id}
                                title={`${RichText.asText(document.data.title)}`}
                            />
                        }
                        <img itemProp="image" alt={document.data.featured_img.alt} srcSet={`${document.data.featured_img.url}&w=640&h=320&dpr=1&fit=crop 640w,${document.data.featured_img.url}&w=750&h=375&dpr=1&fit=crop 750w, ${document.data.featured_img.url}&w=1080&h=540&dpr=1&fit=crop 1080w`} src={`${document.data.featured_img.url}&w=1140&h=570&dpr=1&fit=crop`} />
                        <SingleAction document={document} />
                    </div>
                </section>
                <section className="content smash">
                    <div itemProp="articleBody" className="pad h4 light centertxt">
                        {RichText.render(document.data.content)}
                        <div data-wio-id={document.id}></div>
                    </div>
                </section>
                <section className="wall-pad">
                    <AuthorBox />
                </section>
                <div className="pad" />
                <section className="relatedpost"> 
                    <SubhHader plaintxt="Ver más" onClick={onClose}/>
                </section>
            </article>

                {document.data.color &&
                    <style jsx>{`
                        .feature, .post {
                            background-color: ${document.data.color};
                        }
                    `}</style>
                }
            </>
        )
    }
}
