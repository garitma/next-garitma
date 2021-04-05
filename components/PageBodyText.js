import Section from "aura-design/section";
import { RichText } from "prismic-reactjs";

const PageBodyText = ({ data, ...props }) => {
  return <Section {...props}>{RichText.render(data.primary.content)}</Section>;
};

export default PageBodyText;
