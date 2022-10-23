import urlJoin from "url-join";

const baseURL = process.env.REACT_APP_API_ENDPOINT || "";

export const linkApi = (resource: string) => {
  return urlJoin(baseURL, resource);
};
