import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ModuleDownload = ({ document }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/descargas/${document.uid}`}>
          <a>
            <Image
              src={document.data.featured_img.url}
              alt={document.data.featured_img.alt}
              width={document.data.featured_img.dimensions.width}
              height={document.data.featured_img.dimensions.height}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <Link href={`/descargas/${document.uid}`}>
          <a className="mod-title">{RichText.asText(document.data.title)}</a>
        </Link>
        <p className="truncate">{RichText.asText(document.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default ModuleDownload;
