import Section from "aura-design-system/core/section";
import Grid from "aura-design-system/core/grid";
import Error from "next/error";
import { useRouter } from "next/router";

import { getArchives } from "@services/prismic-rest";
import ArchiveSeo from "@seo/ArchiveSeo";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import QuoteModule from "@components/QuoteModule";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  if (
    (!router.isFallback && archives.page > archives.total_pages) ||
    !archives
  ) {
    return <Error statusCode="404" />;
  }

  return (
    <Layout text="Frases">
      <ArchiveSeo
        document={archives}
        title={`Frases página ${archives.page}`}
        excerpt="Frases para decirle a alguien. Comunes no tan comunes de Garitma."
      />
      <Section container="smash" className="centertxt">
        <p className="h6">Frases para decirle a alguien.</p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives?.results.map((item, index) => (
            <QuoteModule item={item} key={index} />
          ))}
        </Grid>
        <Pagination archives={archives} archiveType="frases" />
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
    props: { preview, archives },
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
