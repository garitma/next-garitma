import { RichText } from 'prismic-reactjs'

export default class PromotionPlaces extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul className="PromotionPlace" style={{ background: `${document.data.color}` }} key={document.id}>
                <li className="coat">
                    <div className="block small-12 medium-8">
                        <div className="module-box-detail" style={{ background: `${document.data.color}` }}>
                            <div className="module-title">
                                <h2><a>{RichText.asText(document.data.title)}</a></h2>
                            </div>
                            <div className="module-description">

                            </div>
                            <div className="module-cta">
                                <a className="button-link">Leer</a>
                                <span>|</span>
                                <a className="button-link">Ver más {document.type}</a>
                            </div>
                        </div>
                    </div>
                    <div className="block small-12 medium-4 module-img-container">
                        <a> <img className="responsive-image" src={document.data.featured_img.square.url} /></a>
                    </div>
                </li>
            </ul>
        )
    }
}