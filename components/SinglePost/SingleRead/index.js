import moment from 'moment'
import Link from 'next/link'

import { RichText } from 'prismic-reactjs'
import ModalVideo from 'react-modal-video'



export default class SingleRead extends React.Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        const { document } = this.props
        return (<div className='page-header-single'>

            <div className='module' style={{ background: `${document.data.color}` }} >
                <div className='module-img smush'>
                    <img className='responsive-image' src={document.data.featured_img.url} alt={document.data.featured_img.alt} />

                    {document.type == "descargas" &&
                        <a href={document.data.download.url} target="_blank" download><div className="glyphsSprite download action" /></a>
                    }

                    {document.type == "videos" &&
                        <div>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay='true' videoId={document.data.youtube_id} onClose={() => this.setState({ isOpen: false })} />
                            <div className="glyphsSprite play action" onClick={this.openModal} />
                        </div>
                    }

                    {document.type == "podcasts" &&
                        <div>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay='true' videoId={document.data.youtube_id} onClose={() => this.setState({ isOpen: false })} />
                            <div className="glyphsSprite play action" onClick={this.openModal} />
                        </div>
                    }

                    {document.type == "juegos" &&
                        <div>
                            <a href={document.data.game_link.url} target="_blank"><div className="glyphsSprite play action" /></a>
                        </div>
                    }

                </div>
            </div>

            <div className='block smash'>
                <div className='page-post-info'>
                    <div className='single-post-category'>
                        <Link href={`/categorias/${document.type}`}><a>{document.type}</a></Link>
                    </div>
                    <div>
                        <h1 className='headline-single'>{RichText.asText(document.data.title)}</h1>
                    </div>

                    <div className='avatar-container'>
                        <div className='glyphsSprite logo' />
                    </div>

                    <div className='single-post-autor-date'>
                        <span>Garitma · {moment(document.date).locale("es").format('LL')}</span>
                    </div>

                </div>
            </div>

            <div className='smash'>
                <div className='entry-content'>
                    {RichText.render(document.data.content)}
                    <div data-wio-id={document.id}></div>
                </div>
            </div>
        </div>
        )
    }
}
