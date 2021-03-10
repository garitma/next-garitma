import Section from "aura-design-system/core/section";
import { RichText } from "prismic-reactjs";

const ArticleContentRender = ({ news }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {RichText.render(news.content)}
    </Section>
  );
};

export default ArticleContentRender;
