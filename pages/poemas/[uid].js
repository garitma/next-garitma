import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import Error from "pages/_error";
import { getPoem, getAllPoemsWithSlug } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import ArticleIntro from "@components/ArticleIntro";
import ArticleFeatureImg from "@components/ArticleFeatureImg";
import ArticleContentRender from "@components/ArticleContentRender";
import AuthorBox from "@components/AuthorBox";

const singlePoem = ({ poem }) => {
  const router = useRouter();

  if (!router.isFallback && !poem?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout
          text="Poemas"
          seo={{
            title: RichText.asText(poem?.title),
            excerpt: RichText.asText(poem?.excerpt),
            slug: router?.asPath,
            image: poem?.featured_img?.url,
          }}
        >
          <div style={{ backgroundColor: poem?.color }}>
            <ArticleIntro doc={poem} />
            <ArticleFeatureImg doc={poem} />
            <ArticleContentRender doc={poem} />
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
  const poem = await getPoem(params.uid, previewData);

  return {
    props: {
      preview,
      poem: poem?.poemas ?? null,
    },
    revalidate: 60 * 60,
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllPoemsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/poemas/${node._meta.uid}`) || [],
    fallback: true,
  };
}

export default singlePoem;
