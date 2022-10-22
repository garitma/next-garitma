import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { ReactCusdis } from "react-cusdis";
import { RichText } from "prismic-reactjs";
import Section from "aura-design/section";
import Link from "next/link";

import {
  getPoem,
  getAllPoemsWithSlug,
  getComic,
  getAllComicsWithSlug,
  getDownload,
  getAllDownloadsWithSlug,
} from "@utils/prismic-graphql";
import { POSTS_TYPES, POSTS_TYPE_ID, POSTS_TYPE_LABEL } from "@utils/constants";
import Schema from "@components/Schema";
import Layout from "@components/Layout";
import AuthorBox from "@components/AuthorBox";
import ArticleContent from "@components/ArticleContent";
import ArticleComment from "@components/ArticleComment";

const SinglePost = ({ doc, type }) => {
  const router = useRouter();

  const seo = {
    title: `${RichText.asText(doc?.title || [])}`,
    excerpt: RichText.asText(doc?.excerpt || []),
    slug: router.asPath,
  };

  return (
    <Layout seo={seo} text={POSTS_TYPE_LABEL[type]}>
      <Schema
        title={RichText.asText(doc?.title || [])}
        image={doc.featured_img.url}
      />
      <Section style={{ backgroundColor: doc.color }}>
        <div className="smash  mounted">
          <Link href={`/${type}`}>
            <a className="button-link">
              <i className="icon arrowLeft" /> Volver a todos los{" "}
              {POSTS_TYPE_LABEL[type].toLowerCase()}
            </a>
          </Link>
        </div>
        <ArticleContent doc={doc} type={type} />
      </Section>
      <Section style={{ backgroundColor: doc.color }}>
        <AuthorBox />
      </Section>
      <Section>
        <h3 className="">Cajita de comentarios</h3>
        <ArticleComment
          title={RichText.asText(doc?.title || [])}
          id={doc?._meta?.id}
          path={`https://garitma.com${router.asPath}`}
        />
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const type = params?.type;
  const uid = params?.uid;

  if (typeof type !== "string") {
    return { notFound: true };
  }

  if (typeof uid !== "string") {
    return { notFound: true };
  }

  if (!POSTS_TYPES.includes(type)) {
    return { notFound: true };
  }

  const singlePostQuery = {
    poemas: async (uid: string, previewData) => await getPoem(uid, previewData),
    comics: async (uid: string, previewData) =>
      await getComic(uid, previewData),
    descargas: async (uid: string, previewData) =>
      await getDownload(uid, previewData),
  };

  try {
    const doc = await singlePostQuery[type](uid, previewData);

    if (!doc?.[POSTS_TYPE_ID[type]]) {
      return { notFound: true };
    }

    return {
      props: {
        type,
        doc: doc?.[POSTS_TYPE_ID[type]] ?? null,
        preview,
      },
      revalidate: 60 * 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];

  const typesQuery = {
    poemas: getAllPoemsWithSlug(),
    comics: getAllComicsWithSlug(),
    descargas: getAllDownloadsWithSlug(),
  };

  for (let type of POSTS_TYPES) {
    let allPosts: any = await typesQuery[type];

    allPosts?.map(({ node }) => {
      paths.push({ params: { type, uid: `/${type}/${node._meta.uid}` } });
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export default SinglePost;
