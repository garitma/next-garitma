import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ModuleSmart = ({ doc }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/${doc.type}/${doc.uid}`}>
          <a>
            <Image
              src={doc.data.featured_img.url}
              alt={doc.data.featured_img.alt}
              width={1140}
              height={570}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <span className="mod-title">{RichText.asText(doc.data.title)}</span>
        <p className="truncate">{RichText.asText(doc.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default ModuleSmart;
