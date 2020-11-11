import { Section, Grid } from "aura-design-system";
import Image from "next/image";
import Error from "next/error";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { getPoemsArchives } from "@services/prismic-rest";
import Pagination from "@components/Pagination";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

  if (!router.isFallback && archives.page > archives.total_pages) {
    return <Error />;
  }

  return (
    <Layout data={layout} text="Poemas">
      <Section color="snow">
        <Grid>
          {archives.results.map((item, index) => (
            <div className="mod" key={index}>
              <div className="mod zoom">
                <Image
                  src={item.data.featured_img.url}
                  alt={item.data.featured_img.alt}
                  width={1140}
                  height={570}
                />
              </div>
              <div className="aura centertxt">
                <span className="mod-title">
                  {RichText.asText(item.data.title)}
                </span>
                <p className="truncate">{RichText.asText(item.data.excerpt)}</p>
              </div>
            </div>
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
  const archives = await getPoemsArchives(previewData, params.page);

  return {
    props: { preview, layout, archives },
  };
};

export async function getStaticPaths(previewData) {
  const archives = await getPoemsArchives(previewData);
  const allArchivePages = Array.from(Array(archives?.total_pages + 1).keys());
  const paths = allArchivePages?.slice(2).map((pageNumber) => ({
    params: { page: `${pageNumber}` },
  }));

  return {
    paths: [{ params: { type: "poemas", page: "2" } }],
    fallback: true,
  };
}

export default Archive;
