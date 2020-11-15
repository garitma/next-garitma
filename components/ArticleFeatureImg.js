import Image from "next/image";

const ArticleFeatureImg = ({ news }) => (
  <section className="smush">
    <Image
      itemProp="image"
      alt={news.featured_img.alt}
      src={news.featured_img.url}
      width={1140}
      height={570}
    />
  </section>
);

export default ArticleFeatureImg;
