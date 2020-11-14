import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const SmartModule = ({ item }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/${item.type}/${item.uid}`}>
          <a>
            <Image
              src={item.data.featured_img.url}
              alt={item.data.featured_img.alt}
              width={1140}
              height={570}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <span className="mod-title">{RichText.asText(item.data.title)}</span>
        <p className="truncate">{RichText.asText(item.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default SmartModule;
