import * as prismicH from "@prismicio/helpers";

import { menuGraphQuery } from "@/utils/prismic-graphquery";
import { createClient } from "@/utils/prismic-client";
import Layout from "@/components/Layout";
import Image from "@/components/Image";
import AuthorBox from "@/components/AuthorBox";

const SingleDownload = ({ doc, menu, archives }) => {
  const seo = {
    title: prismicH.asText(doc.data.title),
    export: prismicH.asText(doc.data.excerpt),
  };
  
  return (
    <Layout menu={menu} seo={seo}>
      <article className="smash">
        <div className="centertxt pad">
          <time>{doc.data.date}</time>
          <h1>{prismicH.asText(doc.data.title)}</h1>
          <p>{prismicH.asText(doc.data.excerpt)}</p>
          <a
            className="button-fill"
            href={`${doc?.data.featured_img?.url.replace(",format", "")}&dl`}
            data-analytics-title="Download wallpaper"
            download
          >
            Descargar fondo de pantalla
          </a>
        </div>
        <Image {...doc.data.featured_img} />
        <AuthorBox />
      </article>
    </Layout>
  );
};

export async function getStaticProps({ previewData, params, locale, locales }) {
  const client = createClient(previewData);

  //Querying page

  const document = await client
    .getByUID("descargas", params.uid, { lang: locale })
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
    .getAllByType("descargas", {
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
export default SingleDownload;
