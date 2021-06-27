import Section from "aura-design/section";
import Grid from "aura-design/grid";
import { useRouter } from "next/router";

import { getArchives } from "@utils/prismic-rest";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";
import ModuleQuote from "@components/ModuleQuote";

const Archive = ({ preview, archives }) => {
  const router = useRouter();

  return (
    <Layout
      seo={{
        title: `Frases página ${archives?.page}`,
        excerpt: "Frases para decirle a alguien.",
        slug: router?.asPath,
      }}
    >
      <Section container="smash" className="centertxt">
        <p className="h6">Frases para decirle a alguien.</p>
      </Section>
      <Section color="accents-1">
        <Grid>
          {archives.results.map((item, index) => (
            <ModuleQuote doc={item} key={index} />
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
  const archives = await getArchives(previewData, 1, "frases");

  return {
    props: { preview, archives },
  };
};

export default Archive;
