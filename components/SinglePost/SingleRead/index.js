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

            <div className='page-header-single-module module' style={{ background: `${document.data.color}` }} >

                <div className='page-header-single-image-container module-img smush'>
                    <img className='page-header-single-image responsive-image' src={document.data.featured_img.url} alt={document.data.featured_img.alt} />
                </div>

                <div className="page-header-single-actions">
                    {document.type == "descargas" &&
                        <a href={document.data.download.url} target="_blank" download><div className="glyphsSprite download action" /></a>
                    }

                    {document.type == "juegos" &&
                        <div>
                            <a href={document.data.game_link.url} target="_blank"><div className="glyphsSprite play action" /></a>
                        </div>
                    }

                    {document.data.youtube_id != undefined &&
                        <div>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay='true' videoId={document.data.youtube_id} onClose={() => this.setState({ isOpen: false })} />
                            <div className="glyphsSprite play action" onClick={this.openModal} />
                        </div>
                    }
                </div>
            </div>

            <div className='page-post-body block smash'>
                <div className='page-post-info'>
                    <div className='page-single-post-type single-post-category'>
                        <Link href={`/categorias/${document.type}`}><a>{document.type}</a></Link>
                    </div>
                    <div>
                        <h1 className='headline-single'>{RichText.asText(document.data.title)}</h1>
                    </div>

                    <div className='page-single-post-avatar avatar-container'>
                        <div className='glyphsSprite logo' />
                    </div>

                    <div className='page-single-post-meta single-post-autor-date'>
                        <span>Garitma · {moment(document.date).locale("es").format('LL')}</span>
                    </div>

                </div>
            </div>

            <div className='page-post-single-content-container smash'>
                <div className='page-post-single-content entry-content'>
                    {RichText.render(document.data.content)}
                    <div data-wio-id={document.id}></div>
                </div>
            </div>
        </div>
        )
    }
}
