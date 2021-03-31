import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const ModuleSmart = ({ document }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/${document.type}/${document.uid}`}>
          <a>
            <Image
              src={document.data.featured_img.url}
              alt={document.data.featured_img.alt}
              width={1140}
              height={570}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <span className="mod-title">
          {RichText.asText(document.data.title)}
        </span>
        <p className="truncate">{RichText.asText(document.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default ModuleSmart;
