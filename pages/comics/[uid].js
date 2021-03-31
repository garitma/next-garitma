import Error from "next/error";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getComic, getSimilarComics } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import ArticleIntro from "@components/ArticleIntro";
import AuthorBox from "@components/AuthorBox";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedPost from "@components/ArticleRelatedPost";
import ArticleContentGalery from "@components/ArticleContentGalery";

const singlePoem = ({ comic, moreComics }) => {
  const router = useRouter();

  if (!router.isFallback && !comic?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout text="Cómics" meta={comic}>
          <div style={{ backgroundColor: comic?.color }}>
            <ArticleIntro document={comic} />
            <ArticleContentGalery document={comic} />

            <AuthorBox />
            {moreComics.length > 0 ? (
              <ArticleMoreNews title="Cómics similares">
                <ArticleRelatedPost
                  document={moreComics}
                  pathname="/poemas/[uid]"
                />
              </ArticleMoreNews>
            ) : (
              <div className="pad" />
            )}
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
  const moreComics = await getSimilarComics(
    comic?.comics?._meta?.id,
    previewData
  );

  return {
    props: {
      preview,
      comic: comic?.comics ?? null,
      moreComics: moreComics?.allComicss?.edges ?? [],
    },
  };
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "comics"
  );
  return {
    paths: documents.map((doc) => `/comics/${doc.uid}`),
    fallback: true,
  };
}

export default singlePoem;
