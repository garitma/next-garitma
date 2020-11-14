import { Section, Grid } from "aura-design-system";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import Pagination from "@components/Pagination";
import QuoteModule from "@components/QuoteModule";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  return (
    <Layout data={layout} text="Frases">
      <Section container="smash" className="centertxt">
        <p className="h6">Frases para decirle a alguien.</p>
      </Section>
      <Section color="snow">
        <Grid>
          {archives.results.map((item, index) => (
            <QuoteModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="frases" />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const layout = await getLayout(previewData);
  const archives = await getArchives(previewData, 1, "frases");

  return {
    props: { preview, layout, archives },
  };
};

export default Archive;
