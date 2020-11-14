import Image from "next/image";
import Link from "next/link";
import { RichText } from "prismic-reactjs";

const DownloadModule = ({ item }) => {
  return (
    <div className="mod">
      <div className="mod zoom">
        <a
          href={`${item.data.featured_img.url}&dl=${item.data.featured_img.alt}.jpg`}
        >
          <Image
            src={item.data.featured_img.url}
            alt={item.data.featured_img.alt}
            width={item.data.featured_img.dimensions.width}
            height={item.data.featured_img.dimensions.height}
            loading="eager"
          />
        </a>
      </div>
      <div className="aura centertxt">
        <span className="mod-title">{RichText.asText(item.data.title)}</span>
        <p className="truncate">{RichText.asText(item.data.excerpt)}</p>
      </div>
    </div>
  );
};

export default DownloadModule;
