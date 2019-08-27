
import { RichText } from 'prismic-reactjs'
import PageSeo from "../seo/PageSeo"


export default class SinglePage extends React.Component {
    render() {
        const { document } = this.props
        return (<div>

            <PageSeo document={document} />

            <div className='SubHeader'>
                <div className='halo smash'>
                    <h1 className='content-center SubHeader-title'>{RichText.asText(document.data.title)}</h1>
                </div>
            </div>

            <div className='smash'>
                <div className="pad">
                    <h2>{RichText.asText(document.data.subtitle)}</h2>
                    <div className='page-content'>
                        {RichText.render(document.data.content)}
                        <div data-wio-id={document.id}></div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}
