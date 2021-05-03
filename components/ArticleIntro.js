import Section from "aura-design/section";
import { RichText, Date } from "prismic-reactjs";

import GLOBAL from "garitmic.config.json";

const SingleIntro = ({ doc }) => (
  <Section container="smash">
    <div className="halo">
      <span className="theme wall-pad">{doc._meta.tags}</span>
    </div>
    <time itemProp="datePublished">
      {Intl.DateTimeFormat(GLOBAL.lang, GLOBAL.dateFormatS).format(
        Date(doc.date)
      )}
    </time>
    <h1 itemProp="name"> {RichText.asText(doc.title)}</h1>
  </Section>
);

export default SingleIntro;
