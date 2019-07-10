import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <li className='block small-12 medium-12 large-6' key={document.id}>
                <div className='coat inside-pad'>
                    <div className='block module-img-container'>
                        <a>
                            <img className='responsive-image' src={document.data.featured_img.url} />
                        </a>
                    </div>
                    <div className='module-box-detail'>
                        <div className='module-title'>
                            <p><a>{RichText.asText(document.data.title)}</a></p>
                        </div>
                        <div className='module-description'>
                            {RichText.asText(document.data.excerpt)}
                        </div>
                        <div className='module-cta'>
                            <a className='button-link'> Jugar</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}