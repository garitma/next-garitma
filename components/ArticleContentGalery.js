import Section from "aura-design-system/core/section";
import Image from "next/image";

const ArticleContentRender = ({ document }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {document.gallery.map((document, index) => (
        <Image
          src={document.gallery_image.url}
          height={document.gallery_image.dimensions.height}
          width={document.gallery_image.dimensions.width}
          key={index}
          loading="eager"
        />
      ))}
    </Section>
  );
};

export default ArticleContentRender;
