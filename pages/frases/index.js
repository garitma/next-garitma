import Section from "aura-design/section";
import Grid from "aura-design/grid";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Button from "aura-design/button";

import { components as marketingComponents } from "@slices/marketing/index";
import Pagination from "@components/Pagination";
import Subheader from "@components/Subheader";
import CollectionHorizontal from "@components/CollectionHorizontal";
import { menuGraphQuery } from "@utils/prismic-graphquery";
import { createClient } from "@utils/prismic-client";
import Layout from "@components/Layout";
import Link from "@components/Link";
import Image from "@components/Image";

const __allComponents = { ...marketingComponents };

const ArchiveQuotes = ({ doc, menu, archives }) => {
  const seo = {
    title: prismicH.asText(doc.data.title),
    export: prismicH.asText(doc.data.excerpt),
  };

  return (
    <Layout menu={menu} seo={seo}>
      <Subheader
        title={prismicH.asText(doc.data.title)}
        excerpt={prismicH.asText(doc.data.excerpt)}
        image={doc.data.image}
      />
      <SliceZone slices={doc.data.slices} components={__allComponents} />
      <Section container="smush">
        <Grid>
          {archives.results.map((item) => (
            <div className="white centertxt aura valign">
              <blockquote> {prismicH.asText(item.data.title)}</blockquote>
            </div>
          ))}
        </Grid>
        <Pagination archives={archives} path="frases" />
      </Section>
    </Layout>
  );
};

export async function getStaticProps({ previewData, locale, locales }) {
  const client = createClient(previewData);

  //Querying page
  const document = await client
    .getSingle("quotes_page", { lang: locale })
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

  //Querying page
  const archives = await client
    .getByType("frases", {
      lang: locale,
      orderings: `my.frases.date desc`,
      pageSize: 51,
    })
    .catch((e) => {
      return null;
    });

  return {
    props: {
      menu: menu,
      doc: document,
      archives: archives,
    }, // will be passed to the page component as props
  };
}

export default ArchiveQuotes;
