import Error from "next/error";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getComicsAndMoreComics } from "@services/prismic-graphql";
import { queryRepeatableDocuments } from "@services/prismic-rest";
import ArticleIntro from "@components/ArticleIntro";
import AuthorBox from "@components/AuthorBox";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedPost from "@components/ArticleRelatedPost";
import ArticleContentGalery from "@components/ArticleContentGalery";
import SingleSeo from "@seo/SingleSeo";

const singlePoem = ({ comics, moreComics }) => {
  const router = useRouter();

  if (!router.isFallback && !comics?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout text="Cómics">
          <SingleSeo document={comics} type="comics" />
          <div style={{ backgroundColor: comics?.color }}>
            <ArticleIntro news={comics} />
            <ArticleContentGalery news={comics} />

            <AuthorBox />
            <ArticleMoreNews title="Poemas reciente">
              <ArticleRelatedPost news={moreComics} pathname="/comics/[uid]" />
            </ArticleMoreNews>
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
  const data = await getComicsAndMoreComics(params.uid, previewData);

  return {
    props: {
      preview,

      comics: data?.comics ?? null,
      moreComics: data?.moreComics ?? [],
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
