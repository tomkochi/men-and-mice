import Prismic from "prismic-javascript";

//psrimic configs
export const apiEndpoint = "https://men-mice.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5YdDRodnhBQUFCMEFTX1J3.77-9Me-_ve-_vSbvv73vv70U77-9V--_vVzvv71f77-977-9de-_ve-_vVHvv71QfzkndO-_ve-_vTcrTBs";

// Client method to query documents from the Prismic repo
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
