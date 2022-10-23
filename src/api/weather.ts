import axios from "axios";
import API from "../utils/constants/api";
import { linkApi } from "../utils/service/api";

export const getInfoCity = async (
  params: FormSearchByName | FormSearchByLatLong
): Promise<ApiResponse> => {
  return axios.get(linkApi(API.WEATHER), { params }).then((d) => d.data);
};
