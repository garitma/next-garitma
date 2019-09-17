import ModMedia from "../atoms/ModMedia"
import ModTitle from "../atoms/ModTitle"
import LinkUid from "../atoms/LinkUid"
import LinkType from "../atoms/LinkType"
import { RichText } from 'prismic-reactjs'
import TriggerUid from "../atoms/TriggerUid"
import TriggerMedia from "../atoms/TriggerlMedia"
import TriggerTitle from "../atoms/TriggerTitle"


export default class Module extends React.Component {
    render() {

        const { document, linkuid, linktype, modmedia, modtitle, modcontent, modquote, onClickPost, triggermedia, triggeruid, triggertitle } = this.props

        return (
            <div className="mod">
                {triggermedia === 'true' &&
                    <TriggerMedia document={document} onClickPost={onClickPost} />
                }
                {modmedia === 'true' &&
                    <ModMedia document={document} />
                }
                <div className="mod-detail">
                    {triggertitle === 'true' &&
                        <TriggerTitle document={document} onClickPost={onClickPost} />
                    }
                    {modtitle === 'true' &&
                        <ModTitle document={document} />
                    }
                    {modquote === "true" &&
                        <blockquote className="centertxt">{RichText.asText(document.data.title)}.</blockquote>
                    }
                    {modcontent === 'true' && document.data.excerpt != undefined &&
                        <p className="mod-content">
                            {RichText.asText(document.data.excerpt)}
                        </p>
                    }
                    <div className="mod-action">
                        {triggeruid === "true" &&
                            <TriggerUid document={document} onClickPost={onClickPost} />
                        }

                        {linkuid === 'true' &&
                            <LinkUid document={document} />
                        }
                        {linktype === 'true' &&
                            <LinkType document={document} />
                        }
                    </div>
                </div>

            </div>
        )
    }
}