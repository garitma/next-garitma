import { RichText } from 'prismic-reactjs'

export default class VideoTrailer extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-6">
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <a>
                            <img className="responsive-image" src={document.data.featured_img.url} />
                        </a>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p>{RichText.asText(document.data.title)}</p>
                        </div>
                        <div className="module-cta">
                            <a className="button-link">Ver</a>
                            <span>|</span>
                            <a className="button-link">Ver más {document.type}</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}