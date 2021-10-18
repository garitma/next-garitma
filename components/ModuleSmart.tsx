import Link from "next/link";
import { RichText } from "prismic-reactjs";

import Image from "@components/Image";

const ModuleSmart = ({ data, uid, type, ...props }) => {
  switch (type) {
    case "frases":
      return (
        <div className="mod" {...props}>
          <div className="aura">
            <blockquote>{RichText.asText(data.title || [])}</blockquote>
          </div>
        </div>
      );
    case "comics":
    case "poemas":
      return (
        <div className="mod" {...props}>
          <div className="halo">
            <div className="layer small-12 medium-3">
              <div className="wall-pad zoom">
                <Link
                  href={{
                    pathname: `/${type}/[uid]`,
                    query: { uid },
                  }}
                >
                  <a>
                    <Image
                      src={`${data.featured_img.url}`}
                      aspectRatio="1:1"
                      width={400}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="layer small-12 medium-9">
              <Link
                href={{
                  pathname: `/${type}/[uid]`,
                  query: { uid },
                }}
              >
                <a>
                  <h3 className="h2">{RichText.asText(data.title)}</h3>
                </a>
              </Link>
              <p>{RichText.asText(data.excerpt)}</p>
            </div>
          </div>
        </div>
      );
    case "descargas":
      return (
        <div className="mod" {...props}>
          <div className="halo">
            <div className="layer small-12 ">
              <div className="wall-pad zoom">
                <Link
                  href={{
                    pathname: `/${type}/[uid]`,
                    query: { uid },
                  }}
                >
                  <a>
                    <Image
                      src={`${data.featured_img.url}`}
                      aspectRatio="16:9"
                      width={400}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="layer small-12 ">
              <Link
                href={{
                  pathname: `/${type}/[uid]`,
                  query: { uid },
                }}
              >
                <a>
                  <h3 className="h6">{RichText.asText(data.title)}</h3>
                </a>
              </Link>
           
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default ModuleSmart;
