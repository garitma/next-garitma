import { Section } from "aura-design-system";
import Image from "next/image";

const ArticleContentRender = ({ news }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {news.gallery.map((item, index) => (
        <Image
          src={item.gallery_image.url}
          height={item.gallery_image.dimensions.height}
          width={item.gallery_image.dimensions.width}
          key={index}
        />
      ))}
    </Section>
  );
};

export default ArticleContentRender;
