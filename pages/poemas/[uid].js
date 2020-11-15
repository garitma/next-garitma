import Error from "next/error";
import { useRouter } from "next/router";

import { getLayout, getPoemsAndMorePoems } from "@services/prismic-graphql";
import { queryRepeatableDocuments } from "@services/prismic-rest";
import SingleSeo from "@seo/SingleSeo";
import Layout from "@components/Layout";
import ArticleIntro from "@components/ArticleIntro";
import ArticleFeatureImg from "@components/ArticleFeatureImg";
import ArticleContentRender from "@components/ArticleContentRender";
import AuthorBox from "@components/AuthorBox";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedPost from "@components/ArticleRelatedPost";

const singlePoem = ({ layout, poems, morePoems }) => {
  const router = useRouter();

  if (!router.isFallback && !poems?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout data={layout} text="Cargando..." />
      ) : (
        <Layout data={layout} text="Poemas">
          <SingleSeo document={poems} type="poemas" />
          <div style={{ backgroundColor: poems?.color }}>
            <ArticleIntro news={poems} />
            <ArticleFeatureImg news={poems} />
            <ArticleContentRender news={poems} />
            <AuthorBox />
            <ArticleMoreNews title="Poemas reciente">
              <ArticleRelatedPost news={morePoems} pathname="/poemas/[uid]" />
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
  const layout = await getLayout(previewData);
  const data = await getPoemsAndMorePoems(params.uid, previewData);

  return {
    props: {
      preview,
      layout,
      poems: data?.poemas ?? null,
      morePoems: data?.morePoems ?? [],
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
