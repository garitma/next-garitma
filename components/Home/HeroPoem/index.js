import { RichText } from 'prismic-reactjs'

export default class HeroBanner extends React.Component {
    render() {
        const { document } = this.props
        return (
            <ul>
                <li className="hero-module" key={document.id} >
                    <a>
                        <div className="image-coat wallpaper-backgorund" style={{ background: `${document.data.color}` }}>
                            <div className="look hero-look">
                                <img className="responsive-image hide-large" src={document.data.featured_img.url} />
                                <img className="responsive-image hide-small" src={document.data.featured_img.square.url} />
                            </div>
                        </div></a>
                    <div className="hero-content" style={{ background: `${document.data.color}` }}>
                        <div className="hero-body">
                            <div className="hero-detail">
                                <a>
                                    <h1>{RichText.asText(document.data.title)}</h1>
                                </a>
                                <div className="hero-description">
                                    {RichText.asText(document.data.title)}
                                </div>
                                <p className="hero-cta"> <a className="button-link">Leer</a>
                                    <span>|</span>
                                    <a className="button-link">
                                        Ver más poemas
                            </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        )
    }
}

