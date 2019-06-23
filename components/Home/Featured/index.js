
import { RichText } from 'prismic-reactjs'

export default class Featured extends React.Component {
    render() {
        const { document } = this.props
        return (
            <li className="block small-12 medium-4" key={document.id}>
                <div className="coat inside-pad">
                    <div className="block module-img-container">
                        <a>
                            <img className="responsive-image" src={document.data.featured_img.square.url} />
                        </a>
                    </div>
                    <div className="module-box-detail">
                        <div className="module-title">
                            <p><a>{RichText.asText(document.data.title)}</a></p>
                        </div>
                        <div className='module-description'>
                            {RichText.asText(document.data.title)}
                        </div>
                        <div className="module-category">
                        </div>
                        <div className="module-cta">
                            <a className="button-link">
                                Leer
                                            </a>
                            <span>|</span>
                            <a className="button-link">
                                Ver más {document.type}
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}