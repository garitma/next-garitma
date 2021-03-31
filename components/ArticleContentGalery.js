import Section from "aura-design-system/core/section";
import Image from "next/image";

const ArticleContentRender = ({ document }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {document.gallery.map((item, index) => (
        <Image
          src={item.gallery_image.url}
          height={item.gallery_image.dimensions.height}
          width={item.gallery_image.dimensions.width}
          key={index}
          loading="eager"
        />
      ))}
    </Section>
  );
};

export default ArticleContentRender;
