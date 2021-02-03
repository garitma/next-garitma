import { Section, Grid } from "aura-design-system";
import { useRouter } from "next/router";

import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";
import SupportBanner from "@components/SupportBanner";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  return (
    <Layout data={layout} text="Poemas">
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
      <Section color="snow">
        <Grid>
          {archives.results.map((item, index) => (
            <SmartModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="poemas" />
        <SupportBanner />
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
  const archives = await getArchives(previewData, 1, "poemas");

  return {
    props: { preview, layout, archives },
  };
};

export default Archive;
