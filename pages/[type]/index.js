import { Section, Grid } from "aura-design-system";
import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";

import Layout from "@components/Layout";
import { getLayout } from "@services/prismic-graphql";
import { getPoemsArchives } from "@services/prismic-rest";
import Pagination from "@components/Pagination";

const Archive = ({ preview, layout, archives }) => {
  const router = useRouter();

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
        <Pagination archives={archives} archiveType={router.query.type} />
      </Section>
    </Layout>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "poemas" } },
      { params: { type: "descargas" } },
      { params: { type: "comics" } },
      { params: { type: "frases" } },
    ],
    fallback: true,
  };
}

export const getStaticProps = async ({ preview = false, previewData }) => {
  const layout = await getLayout(previewData);
  const archives = await getPoemsArchives(previewData);

  return {
    props: { preview, layout, archives },
  };
};

export default Archive;
