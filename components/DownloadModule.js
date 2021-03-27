import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const DownloadModule = ({ item }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <Link href={`/descargas/${item.uid}`}>
          <a>
            <Image
              src={item.data.featured_img.url}
              alt={item.data.featured_img.alt}
              width={item.data.featured_img.dimensions.width}
              height={item.data.featured_img.dimensions.height}
              loading="eager"
            />
          </a>
        </Link>
      </div>
      <div className="aura centertxt">
        <Link href={`/descargas/${item.uid}`}>
          <a className="mod-title">{RichText.asText(item.data.title)}</a>
        </Link>
        <p className="truncate">{RichText.asText(item.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default DownloadModule;
