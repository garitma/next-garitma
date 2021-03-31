import Image from "next/image";

const ArticleFeatureImg = ({ document }) => (
  <section className="smush">
    <Image
      itemProp="image"
      alt={document.featured_img.alt}
      src={document.featured_img.url}
      width={1140}
      height={570}
      loading="eager"
    />
  </section>
);

export default ArticleFeatureImg;
