import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { queryRepeatableDocuments } from "@services/prismic-rest";

const singleComics = ({ layout }) => {
  return <Layout data={layout} text="Cómics"></Layout>;
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const layout = await getLayout(previewData);

  return {
    props: { preview, layout },
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

export default singleComics;
