import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import Error from "next/error";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import { getArchives } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import ModuleDownload from "@components/ModuleDownload";

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
      text="Descargas"
      meta={archives}
      path="poemas"
      excerpt="Fondos de pantalla originales artísticos para tu celular."
      isArchive
    >
      <Section color="yellow" container="smash" className="centertxt">
        <p className="h6">
          Fondos de pantalla originales artísticos para tu celular.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives?.results.map((item, index) => (
            <ModuleDownload document={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="descargas" />
      </Section>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const archives = await getArchives(previewData, params.page, "descargas");

  return {
    props: { preview, archives },
  };
};

export async function getStaticPaths(previewData) {
  const archives = await getArchives(previewData, 1, "descargas");

  const allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());
  const paths = allArchivesPages?.slice(2).map((pageNumber) => ({
    params: { type: "descargas", page: `${pageNumber}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Archive;
