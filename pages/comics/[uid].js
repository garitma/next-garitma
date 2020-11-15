import Layout from "@components/Layout";
import { getLayout, getComicsAndMoreComics } from "@services/prismic-graphql";
import { queryRepeatableDocuments } from "@services/prismic-rest";

import ArticleIntro from "@components/ArticleIntro";
import ArticleFeatureImg from "@components/ArticleFeatureImg";
import ArticleContentRender from "@components/ArticleContentRender";
import AuthorBox from "@components/AuthorBox";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedPost from "@components/ArticleRelatedPost";
import ArticleContentGalery from "@components/ArticleContentGalery";

const singlePoem = ({ layout, comics, moreComics }) => {
  return (
    <Layout data={layout} text="Cómics">
      <div style={{ backgroundColor: comics.color }}>
        <ArticleIntro news={comics} />
        <ArticleContentGalery news={comics} />
        <AuthorBox />
        <ArticleMoreNews title="Poemas reciente">
          <ArticleRelatedPost news={moreComics} />
        </ArticleMoreNews>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const layout = await getLayout(previewData);
  const data = await getComicsAndMoreComics(params.uid, previewData);

  return {
    props: {
      preview,
      layout,
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
