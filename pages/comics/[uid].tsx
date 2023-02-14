import Grid from "@aura-design/system/grid";
import Button from "@aura-design/system/button";
import { usePaginateData } from "@aura-design/system/data";
import * as prismicH from "@prismicio/helpers";

import { menuGraphQuery } from "@/utils/prismic-graphquery";
import { createClient } from "@/utils/prismic-client";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import AuthorBox from "@/components/AuthorBox";

const SingleComics = ({ doc, menu, archives }) => {
  const {
    screenData,
    nextPage,
    prevPage,
    hasNextPage,
    hasPrevPage,
    page,
    setPage,
  } = usePaginateData(doc.data.gallery, 1);
  const { 0: currentItem } = screenData;

  const seo = {
    title: prismicH.asText(doc.data.title),
    export: prismicH.asText(doc.data.excerpt),
  };

  return (
    <Layout menu={menu} seo={seo}>
      <article className="smash">
        <div className="pad">
          <div className="centertxt">
            <time>{doc.data.date}</time>
            <h1>{prismicH.asText(doc.data.title)}</h1>
          </div>
          <div className="anchor">
            <div className="pin left top bottom valign">
              <Button onClick={() => prevPage()} isDisabled={!hasPrevPage}>
                <i className="icon arrowLeft dark" />
              </Button>
            </div>
            <Image {...currentItem.gallery_image} />
            <div className="pin right top bottom valign">
              <Button onClick={() => nextPage()} isDisabled={!hasNextPage}>
                <i className="icon arrowRight dark" />
              </Button>
            </div>
          </div>
          <Grid col="six fixed">
            {doc.data.gallery.map((item, index) => (
              <button
                className={`m0 p0 b0 white halo ${
                  index === page - 1 ? "active" : "pre-disabled"
                }`}
                onClick={() => setPage(index + 1)}
              >
                <Image {...item.gallery_image} />
              </button>
            ))}
          </Grid>
          <hr className="aura" />
          <AuthorBox />
        </div>
      </article>
    </Layout>
  );
};

export async function getStaticProps({ previewData, params, locale, locales }) {
  const client = createClient(previewData);

  //Querying page

  const document = await client
    .getByUID("comics", params.uid, { lang: locale })
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
    .getAllByType("comics", {
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
export default SingleComics;
