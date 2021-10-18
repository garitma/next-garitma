import { RichText } from "prismic-reactjs";
import Section from "aura-design/section";
import { GetStaticProps } from 'next'

import { getPage } from "@utils/prismic-graphql";
import Layout from "@components/Layout";

const LegalInfo = ({ page }) => {
  return (
    <Layout text="Información Legal">
      {page?.body?.map((item, index) => {
        switch (item?.__typename) {
          case "PageBodyText":
            return <Section key={index}>{RichText.render(item.primary.content)}</Section>;
          default:
            return;
        }
      })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const page = await getPage("informacion-legal", previewData);

  return {
    props: { page },
  };
};

export default LegalInfo;
