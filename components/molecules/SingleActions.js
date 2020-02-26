import ModalVideo from 'react-modal-video'
import Player from 'react-soundcloud-player'

export default class SingleAction extends React.Component {

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

        return (
            <>
                {document.data.download &&
                    <a href={document.data.download.url} target="_blank" download>
                        <div className="glyphsSprite download action" />
                    </a>
                }

                {document.data.game_link &&
                    <div>
                        <a href={document.data.game_link.url} target="_blank">
                            <div className="glyphsSprite play action" />
                        </a>
                    </div>
                }

                {document.data.youtube_id &&
                    <div>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} autoplay='true' videoId={document.data.youtube_id} onClose={() => this.setState({ isOpen: false })} />
                        <div className="glyphsSprite play action" onClick={this.openModal} />
                    </div>
                }
                {document.data.audio_id && 
                    <Player
                        client_id="c5a171200f3a0a73a523bba14a1e0a29"
                        audio_id={document.data.audio_id}
                        
                    />
                }       
            </>
        )
    }
}