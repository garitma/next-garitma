import { Section } from "aura-design-system";

const ArticleMoreNews = ({ children, title }) => (
  <Section container="smash">
    <h2 className="mb0">{title || "Artículos recientes"}</h2>
    {children}
  </Section>
);

export default ArticleMoreNews;
