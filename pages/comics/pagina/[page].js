import { Section, Grid } from "aura-design-system";
import Error from "next/error";
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

  if (
    (!router.isFallback && archives.page > archives.total_pages) ||
    !archives
  ) {
    return <Error statusCode="404" />;
  }

  return (
    <Layout data={layout} text="Cómics">
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
      <Section color="snow">
        <Grid>
          {archives?.results.map((item, index) => (
            <SmartModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="comics" />
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
  const archives = await getArchives(previewData, params.page, "comics");

  return {
    props: { preview, layout, archives },
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
