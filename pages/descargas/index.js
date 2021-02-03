import { Section, Grid } from "aura-design-system";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";

import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import DownloadModule from "@components/DownloadModule";
import SupportBanner from "@components/SupportBanner";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  return (
    <Layout data={layout} text="Descargas">
      <ArchiveSeo
        document={archives}
        title="Descargas"
        excerpt="Fondos de pantalla originales artísticos para tu celular."
      />
      <Section color="yellow" container="smash" className="centertxt">
        <p className="h6">
          Fondos de pantalla originales artísticos para tu celular.
        </p>
      </Section>
      <Section color="snow">
        <Grid>
          {archives.results.map((item, index) => (
            <DownloadModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="descargas" />
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
  const archives = await getArchives(previewData, 1, "descargas");

  return {
    props: { preview, layout, archives },
  };
};

export default Archive;
