import Section from "aura-design-system/core/section";
import { RichText, Date } from "prismic-reactjs";

import GLOBAL from "garitmic.config.json";

const SingleIntro = ({ document }) => (
  <Section container="smash">
    <div className="halo">
      <span className="theme wall-pad">{document._meta.tags}</span>
    </div>
    <time itemProp="datePublished">
      {Intl.DateTimeFormat(GLOBAL.lang, GLOBAL.dateFormatS).format(
        Date(document.date)
      )}
    </time>
    <h1 itemProp="name"> {RichText.asText(document.title)}</h1>
    <p itemProp="abstract" className="h5 light">
      {RichText.asText(document.excerpt)}
    </p>
  </Section>
);

export default SingleIntro;
