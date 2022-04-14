import { RichText } from "prismic-reactjs";
import Image from "@components/Image";

const ArticleWallPaper = ({ doc }) => {
  return (
    <article>
      <div className="smash">
        <h2 className="motion-fadeUp mounted">
          {RichText.asText(doc?.title || [])}
        </h2>
      </div>
      <div className="centertxt motion-fadeUp mounted">
        <a
          className="button-fill"
          href={`${doc?.featured_img?.url}&dl=${doc?.featured_img?.alt}.jpg`}
          data-analytics-title="Download wallpaper"
        >
          Descargar fondo de pantalla
        </a>
        <div className="aura" />
      </div>
      <div className="centertxt motion-fadeUp mounted">
        <Image
          src={doc.featured_img.url}
          alt={doc.featured_img.alt}
          width={400}
          aspectRatio="9:16"
        />
        <p>{RichText.asText(doc?.excerpt || [])}</p>
      </div>
    </article>
  );
};

export default ArticleWallPaper;
