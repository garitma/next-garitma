import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import Error from "next/error";
import { useRouter } from "next/router";

import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  if (
    (!router.isFallback && archives.page > archives.total_pages) ||
    !archives
  ) {
    return <Error statusCode="404" />;
  }

  return (
    <Layout text="Poemas">
      <ArchiveSeo
        document={archives}
        title={`Poemas página ${archives.page}`}
        excerpt="Poemas cortos de amor, desamor e historias cotidianas. Cortos y bonitos cualquier momento."
      />
      <Section color="blue" container="smash" className="centertxt">
        <p className="h6">
          Poemas cortos de amor, desamor e historias cotidianas.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives?.results.map((item, index) => (
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
  const archives = await getArchives(previewData, params.page);

  return {
    props: { preview, archives },
  };
};

export async function getStaticPaths(previewData) {
  const archives = await getArchives(previewData, 1, "poemas");

  const allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());
  const paths = allArchivesPages?.slice(2).map((pageNumber) => ({
    params: { type: "poemas", page: `${pageNumber}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Archive;
