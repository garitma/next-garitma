import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { queryRepeatableDocuments } from "@services/prismic-rest";

const singlePoem = ({ layout }) => {
  return <Layout data={layout} text="Poemas"></Layout>;
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
    (doc) => doc.type === "poemas"
  );
  return {
    paths: documents.map((doc) => `/poemas/${doc.uid}`),
    fallback: true,
  };
}

export default singlePoem;
