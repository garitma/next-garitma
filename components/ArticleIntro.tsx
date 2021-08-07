import Section from "aura-design/section";
import { RichText, Date } from "prismic-reactjs";
import { API_LOCALE, DATE_FORMAT } from "@utils/constants";

const SingleIntro = ({ doc }) => (
  <Section container="smash">
    <div className="halo">
      <span className="theme wall-pad">{doc._meta.tags}</span>
    </div>
    <time itemProp="datePublished">
      {Intl.DateTimeFormat(API_LOCALE, {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date(doc.date))}
    </time>
    <h1 itemProp="name">{RichText.asText(doc.title)}</h1>
  </Section>
);

export default SingleIntro;
