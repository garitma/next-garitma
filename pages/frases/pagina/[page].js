import { Section, Grid } from "aura-design-system";
import Error from "next/error";
import { useRouter } from "next/router";

import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import QuoteModule from "@components/QuoteModule";
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
    <Layout data={layout} text="Frases">
      <ArchiveSeo
        document={archives}
        title={`Frases página ${archives.page}`}
        excerpt="Frases para decirle a alguien. Comunes no tan comunes de Garitma."
      />
      <Section container="smash" className="centertxt">
        <p className="h6">Frases para decirle a alguien.</p>
      </Section>
      <Section color="snow">
        <Grid>
          {archives?.results.map((item, index) => (
            <QuoteModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="frases" />
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
  const archives = await getArchives(previewData, params.page, "frases");

  return {
    props: { preview, layout, archives },
  };
};

export async function getStaticPaths(previewData) {
  const archives = await getArchives(previewData, 1, "frases");

  const allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());
  const paths = allArchivesPages?.slice(2).map((pageNumber) => ({
    params: { type: "frases", page: `${pageNumber}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Archive;
