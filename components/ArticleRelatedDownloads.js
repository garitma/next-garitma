import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ArticleRelatedPost = ({ doc, pathname }) => (
  <section className="pad">
    <div className="smash">
      <div className="aureole  two">
        {doc.map(({ node }, index) => (
          <div className="mod" key={index}>
            <div className="mod zoom">
              <Link href={`/descargas/${node?._meta.uid}`}>
                <a>
                  <Image
                    src={node?.featured_img?.url}
                    alt={node?.featured_img?.alt}
                    width={node.featured_img?.dimensions?.width}
                    height={node.featured_img?.dimensions?.height}
                    loading="eager"
                  />
                </a>
              </Link>
            </div>
            <div className="aura centertxt">
              <Link href={`/descargas/${node?._meta.uid}`}>
                <a className="mod-title">{RichText.asText(node?.title)}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ArticleRelatedPost;
