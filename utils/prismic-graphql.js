import Prismic from "@prismicio/client";
import {
  API_URL_KIT,
  API_TOKEN,
  GRAPHQL_API_URL,
  API_LOCALE,
} from "@utils/constants";

import { gql } from "graphql-request";

export const PrismicClient = Prismic.client(API_URL_KIT, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPoem(uid, previewData) {
  const data = await fetchAPI(
    gql`
      query poemByUid($uid: String!, $lang: String!) {
        poemas(uid: $uid, lang: $lang) {
          title
          date
          excerpt
          featured_img
          color
          content
          _meta {
            uid
            tags
            id
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );

  return data;
}

export async function getQuote(uid, previewData) {
  const data = await fetchAPI(
    gql`
      query quotesByUid($uid: String!, $lang: String!) {
        frases(uid: $uid, lang: $lang) {
          title
          date
          _meta {
            uid
            id
            tags
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );

  return data;
}

export async function getComic(uid, previewData) {
  const data = await fetchAPI(
    gql`
      query comicsByUid($uid: String!, $lang: String!) {
        comics(uid: $uid, lang: $lang) {
          title
          date
          excerpt
          featured_img
          color
          content
          gallery {
            gallery_image
          }
          _meta {
            uid
            id
            tags
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );

  return data;
}

export async function getDownload(uid, previewData) {
  const data = await fetchAPI(
    gql`
      query downloadByUid($uid: String!, $lang: String!) {
        descargas(uid: $uid, lang: $lang) {
          title
          date
          excerpt
          featured_img
          color
          content
          _meta {
            uid
            id
            tags
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );

  return data;
}

export async function getPage(uid, previewData) {
  const data = await fetchAPI(
    gql`
      query pageByUid($uid: String!, $lang: String!) {
        page(uid: $uid, lang: $lang) {
          title
          excerpt
          body {
            __typename
            ... on PageBodyText {
              primary {
                content
              }
            }
          }
          _meta {
            uid
            id
            tags
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        uid,
      },
    }
  );

  return data.page;
}

export async function getSimilarDownload(id, previewData) {
  const data = await fetchAPI(
    gql`
      query similarComics($id: String!) {
        allDescargass(similar: { documentId: $id, max: 30 }, first: 4) {
          edges {
            node {
              title
              featured_img
              date
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        id,
      },
    }
  );

  return data;
}

export async function getSimilarPoems(id, previewData) {
  const data = await fetchAPI(
    gql`
      query similarPoems($id: String!) {
        allPoemass(similar: { documentId: $id, max: 10 }, first: 4) {
          edges {
            node {
              title
              featured_img
              date
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        id,
      },
    }
  );

  return data;
}

export async function getSimilarComics(id, previewData) {
  const data = await fetchAPI(
    gql`
      query similarComics($id: String!) {
        allComicss(similar: { documentId: $id, max: 30 }, first: 4) {
          edges {
            node {
              title
              featured_img
              date
              _meta {
                uid
              }
            }
          }
        }
      }
    `,
    {
      previewData,
      variables: {
        lang: API_LOCALE,
        id,
      },
    }
  );

  return data;
}
