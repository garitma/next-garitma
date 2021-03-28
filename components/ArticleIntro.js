import Section from "aura-design-system/core/section";
import { RichText, Date } from "prismic-reactjs";

import GLOBAL from "garitmic.config.json";

const SingleIntro = ({ news }) => (
  <Section container="smash">
    <div className="halo">
      <span className="theme wall-pad">{news._meta.tags}</span>
    </div>
    <time itemProp="datePublished">
      {Intl.DateTimeFormat(GLOBAL.lang, GLOBAL.dateFormatS).format(
        Date(news.date)
      )}
    </time>
    <h1 itemProp="name"> {RichText.asText(news.title)}</h1>
    <p itemProp="abstract" className="h5 light">
      {RichText.asText(news.excerpt)}
    </p>
  </Section>
);

export default SingleIntro;
