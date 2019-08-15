import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import Placeholder from '../../Placeholder'

export default class DefaultArchive extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className="block small-12 medium-6 large-4">
                <div className="coat inside-pad">
                    <div className="block">
                        <Link href="/[uid]" as={`/${document.uid}`}>
                            <a>
                                <LazyLoad placeholder={<Placeholder src={document.data.featured_img.url} height="200" />} once>
                                    <picture>
                                        <source media="(min-width: 1280px)" srcSet={`${document.data.featured_img.url}`} />
                                        <source media="(max-width: 1279px)" srcSet={`${document.data.featured_img.url}&w=600`} />
                                        <img className="responsive-image" src={`${document.data.featured_img.url}`} alt={document.data.featured_img.alt} />
                                    </picture>
                                </LazyLoad>
                            </a>
                        </Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>
                                <Link href="/[uid]" as={`/${document.uid}`}>
                                    <a>{RichText.asText(document.data.title)}</a>
                                </Link>
                            </p>
                        </div>

                        <div className='module-description'>
                            <p>{RichText.asText(document.data.excerpt)}</p>
                        </div>

                        <div className="module-cta">
                            <Link href="/[uid]" as={`/${document.uid}`}>
                                <a className="button-link"> Ver más</a>
                            </Link>
                            <div data-wio-id={document.id}></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}