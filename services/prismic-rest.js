import Prismic from "prismic-javascript";
import GLOBAL from "garitmic.config.json";
import { API_URL_KIT, API_TOKEN } from "lib/constants";

export const apiEndpoint = API_URL_KIT;
export const accessToken = API_TOKEN;

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export async function getPoemsArchives(previewData = {}, page = 1) {
  const { ref } = previewData;
  const client = Client();

  const data =
    (await client.query(
      Prismic.Predicates.at("document.type", "poemas"),
      {
        pageSize: GLOBAL.ArchivePageSize,
        orderings: `[my.poemas.date desc]`,
        page,
      },
      ref ? { ref } : null
    )) || {};

  return data;
}
