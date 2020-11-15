import { Section, Grid } from "aura-design-system";

import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, layout, archives }) => {
  return (
    <Layout data={layout} text="Cómics">
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
      <Section color="snow">
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
  const layout = await getLayout(previewData);
  const archives = await getArchives(previewData, 1, "comics");

  return {
    props: { preview, layout, archives },
  };
};

export default Archive;
