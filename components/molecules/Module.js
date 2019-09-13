import ModMedia from "../atoms/ModMedia"
import ModTitle from "../atoms/ModTitle"
import LinkUid from "../atoms/LinkUid"
import LinkType from "../atoms/LinkType"
import { RichText } from 'prismic-reactjs'


export default class Module extends React.Component {
    render() {

        const { document, linkuid, linktype, modmedia, modtitle, modcontent, modquote } = this.props

        return (
            <div className="mod">
                {modmedia != 'false' &&
                    <ModMedia document={document} />
                }
                <div className="mod-detail">
                    {modtitle != 'false' &&
                        <ModTitle document={document} />
                    }
                    {modquote === "true" &&
                        <blockquote className="centertxt">{RichText.asText(document.data.title)}.</blockquote>
                    }
                    {modcontent != 'false' && document.data.excerpt != undefined &&
                        <p className="mod-content">
                            {RichText.asText(document.data.excerpt)}
                        </p>
                    }
                    <div className="mod-action">
                        {linkuid != 'false' &&
                            <LinkUid document={document} />
                        }
                        {linktype != 'false' &&
                            <LinkType document={document} />
                        }
                    </div>
                </div>

            </div>
        )
    }
}