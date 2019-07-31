
import { RichText } from 'prismic-reactjs'
import SingleSeo from "../../Seo/SingleSeo"


export default class SingleRead extends React.Component {
    render() {
        const { document } = this.props
        return (<div>
            <SingleSeo document={document} />
            <div className='SubHeader'>
                <div className='coat smash'>
                    <h1 className='content-center SubHeader-title'>{RichText.asText(document.data.title)}</h1>
                </div>
            </div>

            <div className='smash'>
                <h2>{RichText.asText(document.data.subtitle)}</h2>
                <div className='page-content'>
                    {RichText.render(document.data.content)}
                    <div data-wio-id={document.id}></div>
                </div>
            </div>
        </div>
        )
    }
}
