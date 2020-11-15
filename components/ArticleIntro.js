import { Section } from "aura-design-system";
import moment from "moment";
import { RichText } from "prismic-reactjs";

import GLOBAL from "garitmic.config.json";

const SingleIntro = ({ news }) => (
  <Section container="smash">
    <div className="halo">
      <span className="theme wall-pad">{news._meta.tags}</span>
    </div>
    <time itemProp="datePublished">
      {moment(news.date)
        .locale(`${GLOBAL.lang}`)
        .format(`${GLOBAL.dateFormat}`)}
    </time>
    <h1 itemProp="name"> {RichText.asText(news.title)}</h1>
    <p itemProp="abstract" className="h5 light">
      {RichText.asText(news.excerpt)}
    </p>
  </Section>
);

export default SingleIntro;
