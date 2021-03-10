import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";

import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, archives }) => {
  return (
    <Layout text="Cómics">
      <ArchiveSeo
        document={archives}
        title="Cómics"
        excerpt="Las increibles aventuras de Coco, Chan, Garritas y puntitas. Cómics para leer en cualquier momento."
      />
      <Section color="orange" container="smash" className="centertxt">
        <p className="h6">
          Las increibles aventuras de Coco, Chan, Garritas y puntitas.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives.results.map((item, index) => (
            <SmartModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="comics" />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const archives = await getArchives(previewData, 1, "comics");

  return {
    props: { preview, archives },
  };
};

export default Archive;
