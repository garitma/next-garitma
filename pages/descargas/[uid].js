import { useRouter } from "next/router";
import Image from "next/image";
import { RichText } from "prismic-reactjs";

import Error from "pages/_error";
import Layout from "@components/Layout";
import { getDownload, getAllDownloadsWithSlug } from "@utils/prismic-graphql";
import ArticleIntro from "@components/ArticleIntro";
import AuthorBox from "@components/AuthorBox";

const singleDownload = ({ download }) => {
  const router = useRouter();

  if (!router.isFallback && !download?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout
          text="Descargas"
          seo={{
            title: RichText.asText(download?.title),
            excerpt: RichText.asText(download?.excerpt),
            slug: router?.asPath,
            image: download?.featured_img?.url,
          }}
        >
          <div style={{ backgroundColor: download?.color }}>
            <ArticleIntro doc={download} />
            <div className="smosh">
              <div className="centertxt">
                <a
                  className="button-fill"
                  href={`${download?.featured_img?.url}&dl=${download?.featured_img?.alt}.jpg`}
                >
                  Descargar fondo de pantalla
                </a>
              </div>
              <div className="pad">
                <div className="zoom">
                  <a
                    href={`${download?.featured_img?.url}&dl=${download?.featured_img?.alt}.jpg`}
                  >
                    <Image
                      src={download?.featured_img?.url}
                      alt={download?.featured_img?.alt}
                      width={download?.featured_img?.dimensions?.width}
                      height={download?.featured_img?.dimensions?.height}
                      loading="eager"
                    />
                  </a>
                </div>
              </div>
            </div>
            <AuthorBox />
            <div className="pad" />
          </div>
        </Layout>
      )}
    </>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const download = await getDownload(params.uid, previewData);

  return {
    props: {
      preview,
      download: download?.descargas ?? null,
    },
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllDownloadsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/descargas/${node._meta.uid}`) || [],
    fallback: true,
  };
}

export default singleDownload;
