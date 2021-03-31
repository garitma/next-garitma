import { useRouter } from "next/router";
import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";

import { getArchives } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import ModuleSmart from "@components/ModuleSmart";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  if (
    (!router.isFallback && archives.page > archives.total_pages) ||
    !archives
  ) {
    return <Error statusCode="404" />;
  }

  return (
    <Layout
      text="Poemas"
      meta={archives}
      path="poemas"
      excerpt="Poemas cortos de amor, desamor e historias cotidianas."
      isArchive
    >
      <Section color="blue" container="smash" className="centertxt">
        <p className="h6">
          Poemas cortos de amor, desamor e historias cotidianas.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives.results.map((item, index) => (
            <ModuleSmart doc={item} key={index} />
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
