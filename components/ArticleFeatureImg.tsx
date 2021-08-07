import Image from "next/image";

const ArticleFeatureImg = ({ doc }) => (
  <section className="smush">
    <Image
      itemProp="image"
      alt={doc.featured_img.alt}
      src={doc.featured_img.url}
      width={1140}
      height={570}
      loading="eager"
    />
  </section>
);

export default ArticleFeatureImg;
