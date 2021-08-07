import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import Error from "pages/_error";
import Layout from "@components/Layout";
import { getComic, getAllComicsWithSlug } from "@utils/prismic-graphql";
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
  const allPosts = await getAllComicsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/comics/${node._meta.uid}`) || [],
    fallback: true,
  };
}

export default singlePoem;
