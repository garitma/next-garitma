import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import Error from "pages/_error";
import Layout from "@components/Layout";
import { getComic, getSimilarComics } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import ArticleIntro from "@components/ArticleIntro";
import AuthorBox from "@components/AuthorBox";
import ArticleContentGalery from "@components/ArticleContentGalery";

const singlePoem = ({ comic }) => {
  const router = useRouter();

  if (!router.isFallback && !comic?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout
          text="Cómics"
          seo={{
            title: RichText.asText(comic?.title),
            excerpt: RichText.asText(comic?.excerpt),
            slug: router?.asPath,
            image: comic?.featured_img?.url,
          }}
        >
          <div style={{ backgroundColor: comic?.color }}>
            <ArticleIntro doc={comic} />
            <ArticleContentGalery doc={comic} />
            <AuthorBox />
            <div className="pad" />
          </div>
        </Layout>
      )}
    </>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const comic = await getComic(params.uid, previewData);

  return {
    props: {
      preview,
      comic: comic?.comics ?? null,
    },
  };
};

export async function getStaticPaths() {
  const docs = await queryRepeatableDocuments((doc) => doc.type === "comics");
  return {
    paths: docs.map((doc) => `/comics/${doc.uid}`),
    fallback: true,
  };
}

export default singlePoem;
