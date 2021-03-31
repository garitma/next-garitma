import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import { getArchives } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import ModuleDownload from "@components/ModuleDownload";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

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
          {archives.results.map((item, index) => (
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
  const archives = await getArchives(previewData, 1, "descargas");

  return {
    props: { preview, archives },
  };
};

export default Archive;
