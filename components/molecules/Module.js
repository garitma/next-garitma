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

        const { document, linkuid, linktype, modmedia, modtitle, modcontent, modquote, onClickPost, triggermedia, triggeruid, triggertitle, children } = this.props

        return (
            <div className="mod">
                {triggermedia &&
                    <TriggerMedia document={document} onClickPost={onClickPost} />
                }
                {modmedia &&
                    <ModMedia document={document} />
                }
                <div className="mod-detail">
                    {triggertitle &&
                        <TriggerTitle document={document} onClickPost={onClickPost} />
                    }
                    {modtitle &&
                        <ModTitle document={document} />
                    }
                    {modquote &&
                        <blockquote className="centertxt">{RichText.asText(document.data.title)}.</blockquote>
                    }
                    {modcontent && document.data.excerpt != undefined &&
                        <p className="mod-content">
                            {RichText.asText(document.data.excerpt)}
                        </p>
                    }

                    {children}

                    <div className="mod-action">
                        {triggeruid &&
                            <TriggerUid document={document} onClickPost={onClickPost} />
                        }

                        {linkuid &&
                            <LinkUid document={document} />
                        }
                        {linktype &&
                            <LinkType document={document} />
                        }
                    </div>
                </div>

            </div>
        )
    }
}