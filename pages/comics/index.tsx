import Section from "@aura-design/system/section";
import Grid from "@aura-design/system/grid";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { components as marketingComponents } from "@/slices/marketing/index";
import Pagination from "@/components/Pagination";
import Subheader from "@/components/Subheader";
import CollectionHorizontal from "@/components/CollectionHorizontal";
import { menuGraphQuery } from "@/utils/prismic-graphquery";
import { createClient } from "@/utils/prismic-client";
import Layout from "@/components/Layout";

const __allComponents = { ...marketingComponents };

const ArchiveComics = ({ doc, menu, archives }) => {

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
      <Section container="smash">
        <Grid col="one">
          {archives.results.map((item) => (
            <CollectionHorizontal
              title={prismicH.asText(item.data.title)}
              excerpt={prismicH.asText(item.data.excerpt)}
              image={item.data.featured_img}
              key={item.id}
              href={`/comics/${item.uid}`}
            />
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
    .getSingle("comics_page", { lang: locale })
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
    .getByType("comics", { lang: locale,  orderings: `my.comics.date desc`, })
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

export default ArchiveComics;
