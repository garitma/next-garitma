import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import Section from "aura-design/section";

import { getPage } from "@utils/prismic-graphql";
import { getArchives } from "@utils/prismic-rest";
import { POSTS_TYPES } from "@utils/constants";
import Layout from "@components/Layout";
import Pagination from "@components/Pagination";

const Archive = ({ archives, page }) => {
  const router = useRouter();
  const type = router.query.type.toString();

  const seo = {
    title: `${RichText.asText(page?.title)} página ${archives?.page}`,
    excerpt: RichText.asText(page?.excerpt),
    slug: router.asPath,
  };

  return (
    <Layout seo={seo} text={RichText.asText(page.title)}>
      <Section className="centertxt">
        <p className="h3 light">{RichText.asText(page.excerpt)}</p>
      </Section>
      <Section>
        {archives.results.map((item, index) => {
          return (
            <div key={index}>
              <p>{RichText.asText(item.data.title)}</p>
            </div>
          );
        })}
      </Section>
      <Pagination archives={archives} archiveType={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const type = params?.type;
  const pageNumber = Number(params?.page);

  if (typeof type !== "string") {
    return { notFound: true };
  }

  if (typeof pageNumber !== "number") {
    return { notFound: true };
  }

  if (!POSTS_TYPES.includes(type)) {
    return { notFound: true };
  }

  try {
    const page = await getPage(type, previewData);
    const archives: any = await getArchives(previewData, pageNumber, type);

    if(pageNumber > archives.total_pages) {
        return { notFound: true };
    }

    return {
      props: { preview, archives, page },
      revalidate: 60 * 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async (previewData) => {
  let paths = [];

  for (let type of POSTS_TYPES) {
    let archives: any = await getArchives(previewData, 1, type);
    let allArchivesPages = Array.from(Array(archives?.total_pages + 1).keys());

    allArchivesPages?.slice(2).map((pageNumber) => {
      paths.push({ params: { type, page: `${pageNumber}` } });
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export default Archive;
