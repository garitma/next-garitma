import Section from "aura-design-system/core/section";
import Image from "next/image";

const ArticleContentRender = ({ doc }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {doc.gallery.map((doc, index) => (
        <Image
          src={doc.gallery_image.url}
          height={doc.gallery_image.dimensions.height}
          width={doc.gallery_image.dimensions.width}
          key={index}
          loading="eager"
        />
      ))}
    </Section>
  );
};

export default ArticleContentRender;
