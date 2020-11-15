import { getLayout, getPage } from "@services/prismic-graphql";
import PageSeo from "@seo/PageSeo";
import Layout from "@components/Layout";
import PageTemplate from "@components/PageTemplate";

const LegalInfo = ({ page, preview, layout }) => {
  console.log(page);
  return (
    <Layout text="Información Legal" data={layout}>
      <PageSeo document={page} />
      <PageTemplate page={page} />
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, previewData }) => {
  const layout = await getLayout(previewData);
  const page = await getPage("informacion-legal", previewData);

  return {
    props: { page, preview, layout },
  };
};

export default LegalInfo;
