import { RichText } from 'prismic-reactjs'

export default class AuthorBox extends React.Component {
    render() {

        const { document } = this.props

        return (
            <section className="contact-info smush">
                <div className="pad mod">
                    <div className="halo">
                        <div className="layer small-4">
                            <div className="mod-media">
                                <img width="90" src="https://images.prismic.io/garitma%2F7bcfd3a3-4da2-4b73-9402-612e7b20ce1c_favicon-pwa.png?auto=compress,format&rect=0,0,512,512&w=180&h=180" />
                            </div>
                        </div>
                        <div className="layer small-8">
                            <div className="wall-pad">
                                <h3 className="mb0 mt0 h5">Por: <span itemProp="author">
                                    Garitma
                                </span>
                                </h3>
                                <p>Escribo como dibujante y dibujo como escritor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}