import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import { useRouter } from "next/router";

import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import QuoteModule from "@components/QuoteModule";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  return (
    <Layout text="Frases">
      <ArchiveSeo
        document={archives}
        title="Frases"
        excerpt="Frases para decirle a alguien. Comunes no tan comunes de Garitma."
      />
      <Section container="smash" className="centertxt">
        <p className="h6">Frases para decirle a alguien.</p>
      </Section>
      <Section color="accents-1">
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
  const archives = await getArchives(previewData, 1, "frases");

  return {
    props: { preview, archives },
  };
};

export default Archive;
