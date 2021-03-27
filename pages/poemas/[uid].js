import Error from "next/error";
import { useRouter } from "next/router";

import { getPoem, getSimilarPoems } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import ArticleIntro from "@components/ArticleIntro";
import ArticleFeatureImg from "@components/ArticleFeatureImg";
import ArticleContentRender from "@components/ArticleContentRender";
import AuthorBox from "@components/AuthorBox";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedPost from "@components/ArticleRelatedPost";

const singlePoem = ({ poem, morePoems }) => {
  const router = useRouter();

  if (!router.isFallback && !poem?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout text="Poemas" meta={poem}>
          <div style={{ backgroundColor: poem?.color }}>
            <ArticleIntro news={poem} />
            <ArticleFeatureImg news={poem} />
            <ArticleContentRender news={poem} />

            <AuthorBox />
            {morePoems.length > 0 ? (
              <ArticleMoreNews title="Poemas similares">
                <ArticleRelatedPost news={morePoems} pathname="/poemas/[uid]" />
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
  const poem = await getPoem(params.uid, previewData);
  const morePoems = await getSimilarPoems(poem?.poemas?._meta?.id, previewData);

  return {
    props: {
      preview,
      poem: poem?.poemas ?? null,
      morePoems: morePoems?.allPoemass?.edges ?? [],
    },
  };
};

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "poemas"
  );
  return {
    paths: documents.map((doc) => `/poemas/${doc.uid}`),
    fallback: true,
  };
}

export default singlePoem;
