import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";

import { useRouter } from "next/router";

import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  return (
    <Layout text="Poemas">
      <ArchiveSeo
        document={archives}
        title="Poemas"
        excerpt="Poemas cortos de amor, desamor e historias cotidianas. Cortos y bonitos cualquier momento."
      />
      <Section color="blue" container="smash" className="centertxt">
        <p className="h6">
          Poemas cortos de amor, desamor e historias cotidianas.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives.results.map((item, index) => (
            <SmartModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="poemas" />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const archives = await getArchives(previewData, 1, "poemas");

  return {
    props: { preview, archives },
  };
};

export default Archive;
