import Link from "next/link";
import { RichText } from "prismic-reactjs";
import TriggerMedia from "../atoms/TriggerlMedia";
import TriggerTitle from "../atoms/TriggerTitle";
import moment from "moment";
import GaritmicConfig from "../../garitmic.config.json";

export default class Module extends React.Component {
  render() {
    const {
      document,
      modcontent,
      modquote,
      moddate,
      modtype,
      triggermedia,
      triggertitle,
      children,
      classModifier,
    } = this.props;

    return (
      <div className="mod">
        {triggermedia && <TriggerMedia document={document} />}

        <div className={`mod-detail ${classModifier}`}>
          {modtype && (
            <div className="halo">
              <div className="content-left">
                <Link
                  href="/categorias/[type]"
                  as={`/categorias/${document.type}`}
                >
                  <a className="halo interactive">
                    <span className="valign">
                      <span className="purple wall-pad">
                        {GaritmicConfig.types[document.type].name}
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          )}
          {triggertitle && <TriggerTitle document={document} />}

          {moddate && (
            <time>
              {moment(document.data.date)
                .locale(`${GaritmicConfig.lang}`)
                .format(`${GaritmicConfig.dateFormat}`)}
            </time>
          )}
          {modquote && (
            <blockquote className="centertxt">
              {RichText.asText(document.data.title)}
              {!document.data.question && "."}
            </blockquote>
          )}
          {modcontent && document.data.excerpt != undefined && (
            <p className="mod-content">
              {RichText.asText(document.data.excerpt)}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }
}
