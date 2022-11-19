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

const ArchivePoemsPage = ({ doc, menu, archives }) => {

  const seo = {
    title: `${prismicH.asText(doc.data.title)} página ${archives.page}`,
    export: prismicH.asText(doc.data.excerpt),
  };
  

  return (
    <Layout menu={menu} seo={seo}>
      <Section className="center-text">
        <h1>{prismicH.asText(doc.data.title)} página {archives.page}</h1>
      </Section>
      <SliceZone slices={doc.data.slices} components={__allComponents} />
      <Section container="smash">
        <Grid col="one">
          {archives.results.map((item) => (
            <CollectionHorizontal
              title={prismicH.asText(item.data.title)}
              excerpt={prismicH.asText(item.data.excerpt)}
              image={item.data.featured_img}
              key={item.id}
              href={`/poemas/${item.uid}`}
            />
          ))}
        </Grid>
        <Pagination archives={archives} path="poemas" />
      </Section>
    </Layout>
  );
};

export async function getStaticProps({ previewData, locale, locales, params }) {
  const client = createClient(previewData);

  //Querying page
  const document = await client
    .getSingle("poems_page", { lang: locale })
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

  //Querying archives
  const archives = await client
    .getByType("poemas", {
      lang: locale,
      orderings: `my.poemas.date desc`,
      page: params.page,
    })
    .catch((e) => {
      return null;
    });

  if (!archives.results.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      menu: menu,
      doc: document,
      archives: archives,
      page: params.page
    }, // will be passed to the page component as props
  };
}

export const getStaticPaths = async (previewData, locale) => {
  const client = createClient(previewData);
  let paths = [];

  //Querying archives
  const archives = await client
    .getByType("poemas", {
      lang: locale,
      orderings: `my.poemas.date desc`,
    })
    .catch((e) => {
      return null;
    });

  let allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());
  allArchivesPages?.slice(2).map((pageNumber) => {
    paths.push({ params: { page: `${pageNumber}` } });
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default ArchivePoemsPage;
