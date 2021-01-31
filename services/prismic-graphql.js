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
        logo
        secundary_logo
        third_logo
        subheader_cover
        copy_right
        footer_links {
          link {
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
          label
        }
        footer_links_rs {
          link {
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
          icon
        }
        footer_links_secondary {
          link {
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
          label
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

export async function getPage(uid, previewData) {
  const data = await fetchAPI(
    `
    query pageByUid($uid: String!, $lang: String!) {
      page(uid: $uid, lang: $lang) {
        title
        excerpt
        _meta {
          uid
        }
        body {
          __typename
          ... on PageBodyImage_gallery {
            primary {
              column_gallery_title
              column_gallery_color_class
            }
            label
            fields {
              column_gallery_image
              column_gallery_image_title
              column_gallery_description
              column_gallery_link_item {
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
          ... on PageBodyIntro {
            primary {
              intro_title
              intro_description
              intro_color_class
            }
          }
          ... on PageBodyBanner_note {
            primary {
              banner_note_color_class
              banner_note_title
              banner_note_description
              banner_note_caption
              banner_note_image
              banner_note_first_button_text
              banner_note_first_button_pathname
              banner_note_first_button_item {
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
          ...on PageBodyText {
            primary{
              content
            }
          }
          ... on PageBodySlide {
            primary {
              slide_color_class
              slide_direction
              slide_title
              slide_subtitle
              slide_description
              slide_first_button_text
              slide_first_button_pathname
              slide_first_button_item {
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
              slide_image
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
  return data.page;
}
