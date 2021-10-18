import { RichText, Date } from "prismic-reactjs";
import { API_LOCALE } from "@utils/constants";
import Image from "@components/Image";

const ArticlePoems = ({ doc }) => {
  return (
    <article>
      <div className="smash">
        <h2>{RichText.asText(doc?.title || [])}</h2>
        <time itemProp="datePublished">
          {Intl.DateTimeFormat(API_LOCALE, {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(Date(doc.date))}
        </time>
      </div>
      <Image
        src={doc.featured_img.url}
        alt={doc.featured_img.alt}
        width={1140}
        aspectRatio="1:2"
      />

      <div className="h6 smash">{RichText.render(doc?.content || [])}</div>
    </article>
  );
};

export default ArticlePoems;
