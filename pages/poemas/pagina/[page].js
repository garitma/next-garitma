import { Section, Grid } from "aura-design-system";
import Error from "next/error";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { getArchives } from "@services/prismic-rest";
import Pagination from "@components/Pagination";
import SmartModule from "@components/SmartModule";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  if (
    (!router.isFallback && archives.page > archives.total_pages) ||
    !archives
  ) {
    return <Error statusCode="404" />;
  }

  return (
    <Layout data={layout} text="Poemas">
      <Section color="snow">
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
  const layout = await getLayout(previewData);
  const archives = await getArchives(previewData, params.page);

  return {
    props: { preview, layout, archives },
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
