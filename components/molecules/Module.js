import ModMedia from "../atoms/ModMedia"
import ModTitle from "../atoms/ModTitle"
import LinkUid from "../atoms/LinkUid"
import LinkType from "../atoms/LinkType"
import { RichText } from 'prismic-reactjs'


export default class Module extends React.Component {
    render() {

        const { document } = this.props

        return (
            <div className="mod">
                <ModMedia document={document} />
                <div className="mod-detail">
                    <ModTitle document={document} />
                    <p className="mod-content">
                        {RichText.asText(document.data.excerpt)}
                    </p>
                </div>
                <div className="mod-action">
                    <LinkUid document={document} />
                    <LinkType document={document} />
                </div>
            </div>
        )
    }
}