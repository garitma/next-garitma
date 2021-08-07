import Section from "aura-design/section";
import { RichText } from "prismic-reactjs";

const ArticleContentRender = ({ doc }) => {
  return (
    <Section
      className="content h4 light"
      container="smash"
      itemProp="articleBody"
    >
      {RichText.render(doc.content)}
    </Section>
  );
};

export default ArticleContentRender;
