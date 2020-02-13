import ModMedia from "../atoms/ModMedia"
import ModTitle from "../atoms/ModTitle"
import LinkUid from "../atoms/LinkUid"
import Link from 'next/link'
import LinkType from "../atoms/LinkType"
import { RichText } from 'prismic-reactjs'
import TriggerUid from "../atoms/TriggerUid"
import TriggerMedia from "../atoms/TriggerlMedia"
import TriggerTitle from "../atoms/TriggerTitle"
import moment from 'moment'
import GaritmicConfig from '../../garitmic.config.json'



export default class Module extends React.Component {
    render() {

        const { document, linkuid, linktype, modmedia, modtitle, modcontent, modquote, moddate, modtype, onClickPost, triggermedia, triggeruid, triggertitle, children, classModifier } = this.props

        return (
            <div className="mod">
                {triggermedia &&
                    <TriggerMedia document={document} onClickPost={onClickPost} />
                }
                {modmedia &&
                    <ModMedia document={document} />
                }
                <div className={`mod-detail ${classModifier}`}>
                    {modtype &&
                        <Link href='/categorias/[type]' as={`/categorias/${document.type}`}>
                            <a>
                            <div class="halo">
                                <span class="purple wall-pad">{GaritmicConfig.types[document.type].name}</span>
                            </div>
                            </a>
                        </Link>
                    }  
                    {triggertitle &&
                        <TriggerTitle document={document} onClickPost={onClickPost} />
                    }
                    {modtitle &&
                        <ModTitle document={document} />
                    }
                    {moddate &&
                        <time>{moment(document.data.date).locale(`${GaritmicConfig.lang}`).format(`${GaritmicConfig.dateFormat}`)}</time>
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