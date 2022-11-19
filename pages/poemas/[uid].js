import Section from "aura-design/section";
import Grid from "aura-design/grid";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import Button from "aura-design/button";

import { menuGraphQuery } from "@utils/prismic-graphquery";
import { createClient } from "@utils/prismic-client";
import Layout from "@components/Layout";
import Link from "@components/Link";
import Image from "@components/Image";
import AuthorBox from "@components/AuthorBox";

const SinglePoem = ({ doc, menu, archives }) => {

  const seo = {
    title: prismicH.asText(doc.data.title),
    export: prismicH.asText(doc.data.excerpt),
  };

  return (
    <Layout menu={menu} seo={seo}>
      <article className="smash">
        <div className="center-text pad">
          <time>{doc.data.date}</time>
          <h1>{prismicH.asText(doc.data.title)}</h1>
        </div>
        <Image {...doc.data.featured_img} />
        <Section passDiv>
          <PrismicRichText field={doc.data.content} />
        </Section>
        <AuthorBox />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ previewData, params, locale, locales }) {
  const client = createClient(previewData);

  //Querying page

  const document = await client
    .getByUID("poemas", params.uid, { lang: locale })
    .catch((e) => {
      return null;
    });

  if (!document) {
    return {
      notFound: true,
    };
  }

  //Querying the Menu here so that it can be previewed at the same time as the page (in a release)
  const menu = await client
    .getSingle("menu", { lang: locale, graphQuery: menuGraphQuery })
    .catch((e) => {
      return {};
    });

  return {
    props: {
      menu: menu,
      doc: document,
    }, // will be passed to the page component as props
  };
}
export const getStaticPaths = async (previewData, locale) => {
  const client = createClient(previewData);
  let paths = [];

  //Querying archives
  const allPost = await client
    .getAllByType("poemas", {
      lang: locale,
    })
    .catch((e) => {
      return null;
    });

  allPost?.map((item) => {
    paths.push({ params: { uid: `${item.uid}` } });
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};
export default SinglePoem;
