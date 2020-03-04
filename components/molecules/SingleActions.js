
export default class SingleAction extends React.Component {

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
                    <div className="videoWrapper">
                        <iframe width="1140" height="570" 
                            src={`https://www.youtube.com/embed/${document.data.youtube_id}`} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                }     
            </>
        )
    }
}