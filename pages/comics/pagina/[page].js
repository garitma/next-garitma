import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import Error from "next/error";
import { useRouter } from "next/router";

import { getLayout } from "@services/prismic-graphql";
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
    <Layout text="Cómics">
      <ArchiveSeo
        document={archives}
        title={`Cómics página ${archives.page}`}
        excerpt="Las increibles aventuras de Coco, Chan, Garritas y puntitas. Cómics para leer en cualquier momento."
      />
      <Section color="orange" container="smash" className="centertxt">
        <p className="h6">
          Las increibles aventuras de Coco, Chan, Garritas y puntitas.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives?.results.map((item, index) => (
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
  const archives = await getArchives(previewData, params.page, "comics");

  return {
    props: { preview, archives },
  };
};

export async function getStaticPaths(previewData) {
  const archives = await getArchives(previewData, 1, "comics");

  const allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());
  const paths = allArchivesPages?.slice(2).map((pageNumber) => ({
    params: { type: "comics", page: `${pageNumber}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Archive;
