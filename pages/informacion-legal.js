import { getPage } from "@services/prismic-graphql";
import PageSeo from "@seo/PageSeo";
import Layout from "@components/Layout";
import PageTemplate from "@components/PageTemplate";

const LegalInfo = ({ page, preview, layout }) => {
  return (
    <Layout text="Información Legal">
      <PageSeo document={page} />
      <PageTemplate page={page} />
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, previewData }) => {
  const page = await getPage("informacion-legal", previewData);

  return {
    props: { page, preview },
  };
};

export default LegalInfo;
