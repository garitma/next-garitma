import Error from "next/error";
import { useRouter } from "next/router";

import { getPoem, getSimilarPoems } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import ArticleIntro from "@components/ArticleIntro";
import ArticleFeatureImg from "@components/ArticleFeatureImg";
import ArticleContentRender from "@components/ArticleContentRender";
import AuthorBox from "@components/AuthorBox";
import ArticleComment from "@components/ArticleComment";
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
        <Layout text="Poemas" meta={poem} path="poemas">
          <div style={{ backgroundColor: poem?.color }}>
            <ArticleIntro doc={poem} />
            <ArticleFeatureImg doc={poem} />
            <ArticleContentRender doc={poem} />
            <AuthorBox />
            <ArticleComment
              title={poem.title}
              uid={poem._meta.uid}
              id={poem._meta.id}
              path="poemas"
            />
            {morePoems.length > 0 ? (
              <ArticleMoreNews title="Poemas similares">
                <ArticleRelatedPost doc={morePoems} pathname="/poemas/[uid]" />
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
  const docs = await queryRepeatableDocuments((doc) => doc.type === "poemas");
  return {
    paths: docs.map((doc) => `/poemas/${doc.uid}`),
    fallback: true,
  };
}

export default singlePoem;
