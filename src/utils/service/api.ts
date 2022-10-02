import axios, { AxiosError } from "axios";
import urlJoin from "url-join";
import { API_STATUS } from "../constants/api";

const baseURL = process.env.REACT_APP_API_ENDPOINT || "";

const linkApi = (resource: string) => {
  return urlJoin(baseURL, resource);
};

const handleError = ({ response }: AxiosError) => {
  if (
    !response?.status ||
    [API_STATUS.HTTP_404_NOT_FOUND].includes(response?.status)
  ) {
    console.log({ response });
  }
};

class RestService<ApiResponse, ApiRequestParam = any> {
  constructor(protected resource: string) {}

  index(params?: ApiRequestParam) {
    return new Promise((resolve, reject) => {
      axios
        .get<ApiResponse>(linkApi(this.resource), {
          params,
        })
        .then(resolve)
        .catch((error: AxiosError) => {
          handleError(error);
        });
    });
  }
}

export default RestService;
