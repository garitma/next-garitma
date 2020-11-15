import Prismic from "prismic-javascript";
import {
  API_URL_KIT,
  API_TOKEN,
  GRAPHQL_API_URL,
  API_LOCALE,
  LAYOUT_UID,
} from "lib/constants";

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

export async function getLayout(previewData) {
  const data = await fetchAPI(
    `	
    query getLayout($uid: String!, $lang: String!) {
      layout(uid: $uid, lang: $lang) {
        dark_mode
        copy_right
        logo
        header_menu {
          header_link_menu_text
          header_link_menu_pathname
          header_menu_link_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
        secundary_logo
        subheader_cover
        footer_logo
        footer_secondary_logo
        footer_menu {
          footer_link_menu_text
          footer_link_menu_pathname
          footer_menu_link_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
        footer_follow_menu {
          footer_follow_icon
          footer_follow_link {
            __typename
            ... on _ExternalLink {
              url
              target
            }
          }
        }
        footer_secundary_menu {
          footer_secundary_link_menu_text
          footer_secundary_link_menu_pathname
          footer_secundary_link_menu_item {
            __typename
            ... on _ExternalLink {
              url
              target
            }
            ... on _Document {
              _meta {
                uid
              }
            }
          }
        }
      }
    }    
  `,
    {
      previewData,
      variables: {
        uid: LAYOUT_UID,
        lang: API_LOCALE,
      },
    }
  );

  return data.layout;
}

export async function getAllPoemsWithSlug() {
  const data = await fetchAPI(`
    {
      allPoemass {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data?.allPoemass?.edges;
}

export async function getPoemsAndMorePoems(uid, previewData) {
  const data = await fetchAPI(
    `
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
      }
    }
    morePoems: allPoemass(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          date
          featured_img
          _meta {
            uid
            tags
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
        uid,
      },
    }
  );

  data.morePoems = data.morePoems.edges
    .filter(({ node }) => node._meta.uid !== uid)
    .slice(0, 2);

  return data;
}

export async function getComicsAndMoreComics(uid, previewData) {
  const data = await fetchAPI(
    `
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
        tags
      }
    }
    moreComics: allComicss(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          date
          featured_img
          _meta {
            uid
            tags
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
        uid,
      },
    }
  );

  data.moreComics = data.moreComics.edges
    .filter(({ node }) => node._meta.uid !== uid)
    .slice(0, 2);

  return data;
}
