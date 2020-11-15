import { Section } from "aura-design-system";

const PageBodyIntro = ({ data, ...props }) => {
  return (
    <Section {...props}>
      <p className="centertxt h6">{data.primary.intro_description[0].text}</p>
    </Section>
  );
};

export default PageBodyIntro;
