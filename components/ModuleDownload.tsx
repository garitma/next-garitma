import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ModuleDownload = ({ doc }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/descargas/${doc.uid}`}>
          <a>
            <Image
              src={doc.data.featured_img.url}
              alt={doc.data.featured_img.alt}
              width={doc.data.featured_img.dimensions.width}
              height={doc.data.featured_img.dimensions.height}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <Link href={`/descargas/${doc.uid}`}>
          <a className="mod-title">{RichText.asText(doc.data.title)}</a>
        </Link>
        <p className="truncate">{RichText.asText(doc.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default ModuleDownload;
