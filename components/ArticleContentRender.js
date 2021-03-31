import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const ArticleContentRender = ({ document }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {RichText.render(document.content)}
    </Section>
  );
};

export default ArticleContentRender;
