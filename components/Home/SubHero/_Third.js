import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <div className="coat inside-pad" key={document.id}>
                <div className='block module-img-container'>
                    <a>
                        <img className='responsive-image' src={document.data.featured_img.square.url} />
                    </a>
                </div>
                <div className='module-box-detail'>
                    <div className='module-title'>
                        <p><a>{RichText.asText(document.data.title)}</a></p>
                    </div>
                    <div className='module-description'>
                        {RichText.asText(document.data.title)}
                    </div>
                    <div className='module-cta'>
                        <a className='button-link'> Escuchar</a>
                    </div>
                </div>
            </div>
        )
    }
}