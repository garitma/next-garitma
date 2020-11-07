import { getLayout } from "@services/prismic-graphql";
import Layout from "@components/Layout";

const Home = ({ preview, layout }) => (
  <Layout data={layout} preview={preview}></Layout>
);

export const getStaticProps = async ({ preview = false, previewData }) => {
  const layout = await getLayout(previewData);
  return {
    props: { preview, layout },
  };
};

export default Home;
