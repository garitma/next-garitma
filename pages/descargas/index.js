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

const ArchiveDownloads = ({ doc, menu, archives }) => {
  return (
    <Layout menu={menu}>
      <Subheader
        title={prismicH.asText(doc.data.title)}
        excerpt={prismicH.asText(doc.data.excerpt)}
        image={doc.data.image}
      />
      <SliceZone slices={doc.data.slices} components={__allComponents} />
      <Section container="smesh">
        <Grid col="field fixed">
          {archives.results.map((item) => (
            <Link href={`/descargas/${item.uid}`}>
              <a>
                <Image {...item.data.featured_img} />
              </a>
            </Link>
          ))}
        </Grid>
        <Pagination archives={archives} path="comics" />
      </Section>
    </Layout>
  );
};

export async function getStaticProps({ previewData, locale, locales }) {
  const client = createClient(previewData);

  //Querying page
  const document = await client
    .getSingle("downloads_page", { lang: locale })
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
    .getByType("descargas", {
      lang: locale,
      orderings: `my.descargas.date desc`,
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

export default ArchiveDownloads;
