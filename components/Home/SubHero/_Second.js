import { RichText } from 'prismic-reactjs'

export default class extends React.Component {

    render() {
        const { document } = this.props
        return (
            <div className='module-box-detail' key={document.id}>
                <div className='module-title' >
                    <blockquote>{RichText.asText(document.data.title)}</blockquote>
                </div>
                <div className='module-cta'>
                    <a className='button-link'>Ver más {document.type}</a>
                </div>
            </div>

        )
    }
}