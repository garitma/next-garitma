import { RichText } from 'prismic-reactjs'
import Link from 'next/link'

export default class DefaultArchive extends React.Component {
    render() {
        const { document } = this.props
        return (
            <div className="block small-12 medium-6 large-4" key={document.id}>
                <div className="coat inside-pad">
                    <div className="block">
                        <Link href={`/${document.uid}`} as={`/${document.uid}`}>
                            <a>
                                <img className="responsive-image" src={document.data.featured_img.url} />
                            </a>
                        </Link>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>
                                <Link href={`/${document.uid}`} as={`/${document.uid}`}>
                                    <a>{RichText.asText(document.data.title)}</a>
                                </Link>
                            </p>
                        </div>

                        <div className='module-description'>
                            {RichText.asText(document.data.title)}
                        </div>

                        <div className="module-cta">
                            <Link href={`/${document.uid}`} as={`/${document.uid}`}>
                                <a className="button-link"> Ver más</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}