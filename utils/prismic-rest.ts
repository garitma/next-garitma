import Prismic from "@prismicio/client";
import { API_URL_KIT, API_TOKEN } from "@utils/constants";

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

export async function getArchives(previewData = {}, page = 1, type: string) {
  const { ref} : any  = previewData;
  const client = Client();

  const data =
    (await client.query(
      Prismic.Predicates.at("document.type", type),
      {
        pageSize: "9",
        orderings: `[my.${type}.date desc]`,
        page,
      },
      ref ? ref : null
    )) || {};

  return data;
}
