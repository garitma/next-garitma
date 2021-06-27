import Section from "aura-design/section";
import Grid from "aura-design/grid";
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
      seo={{
        title: `Descargas página ${archives.page}`,
        excerpt: "Fondos de pantalla originales artísticos para tu celular.",
        slug: router.asPath,
      }}
    >
      <Section color="yellow" container="smash" className="centertxt">
        <p className="h6">
          Fondos de pantalla originales artísticos para tu celular.
        </p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives.results.map((item, index) => (
            <ModuleDownload doc={item} key={index} />
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
