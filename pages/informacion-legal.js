import { RichText } from "prismic-reactjs";
import Section from "aura-design-system/core/section";

import { getPage } from "@utils/prismic-graphql";
import Layout from "@components/Layout";

const LegalInfo = ({ page, preview, layout }) => {
  return (
    <Layout text="Información Legal">
      {page?.body?.map((item, index) => {
        switch (item?.__typename) {
          case "PageBodyText":
            return <Section>{RichText.render(item.primary.content)}</Section>;
          default:
            return;
        }
      })}
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
