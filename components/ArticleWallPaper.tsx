import { RichText } from "prismic-reactjs";
import Image from "@components/Image";

const ArticleWallPaper = ({ doc }) => {
  return (
    <article>
      <div className="smash">
        <h2>{RichText.asText(doc?.title || [])}</h2>
        
      </div>
      <div className="centertxt">
        <a
          className="button-fill"
          href={`${doc?.featured_img?.url}&dl=${doc?.featured_img?.alt}.jpg`}
        >
          Descargar fondo de pantalla
        </a>
        <div className="aura" />
      </div>
      <div className="centertxt">
        <Image src={doc.featured_img.url} width={400} aspectRatio="16:9" />
        <p>{RichText.asText(doc?.excerpt || [])}</p>
      </div>

    </article>
  );
};

export default ArticleWallPaper;
