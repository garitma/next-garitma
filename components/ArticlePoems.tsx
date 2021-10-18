import { RichText } from "prismic-reactjs";
import Image from "@components/Image";

const ArticlePoems = ({ doc }) => {
  return (
    <article>
      <div className="smash">
        <h2>{RichText.asText(doc?.title || [])}</h2>
      </div>
      <Image src={doc.featured_img.url} alt={doc.featured_img.alt} width={1140} aspectRatio="1:2" />
      <div className="h6 smash">{RichText.render(doc?.content || [])}</div>
    </article>
  );
};

export default ArticlePoems;
