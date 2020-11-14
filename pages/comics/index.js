import { Section, Grid } from "aura-design-system";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  return (
    <Layout data={layout} text="Cómics">
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
