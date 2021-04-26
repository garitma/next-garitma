import Error from "next/error";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "@components/Layout";
import { getDownload, getSimilarDownload } from "@utils/prismic-graphql";
import { queryRepeatableDocuments } from "@utils/prismic-rest";
import ArticleIntro from "@components/ArticleIntro";
import AuthorBox from "@components/AuthorBox";
import ArticleComment from "@components/ArticleComment";
import ArticleMoreNews from "@components/ArticleMoreNews";
import ArticleRelatedDownloads from "@components/ArticleRelatedDownloads";

const singleDownload = ({ download, moreDownloads }) => {
  const router = useRouter();

  if (!router.isFallback && !download?._meta?.uid) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Layout text="Cargando..." />
      ) : (
        <Layout text="Descargas" meta={download} path="descargas">
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
            <ArticleComment
              title={download?.title}
              uid={download?._meta?.uid}
              id={download?._meta?.id}
              path="descargas"
            />
            {moreDownloads.length > 0 ? (
              <ArticleMoreNews title="Fondos de pantalla similares">
                <ArticleRelatedDownloads doc={moreDownloads} />
              </ArticleMoreNews>
            ) : (
              <div className="pad" />
            )}
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
  const moreDownloads = await getSimilarDownload(
    download?.descargas?._meta?.id,
    previewData
  );

  return {
    props: {
      preview,
      download: download?.descargas ?? null,
      moreDownloads: moreDownloads?.allDescargass?.edges ?? [],
    },
  };
};

export async function getStaticPaths() {
  const docs = await queryRepeatableDocuments(
    (doc) => doc.type === "descargas"
  );
  return {
    paths: docs.map((doc) => `/descargas/${doc.uid}`),
    fallback: true,
  };
}

export default singleDownload;
