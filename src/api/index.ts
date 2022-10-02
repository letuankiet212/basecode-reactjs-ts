/* eslint-disable import/no-anonymous-default-export */
import API from "../utils/constants/api";
import CrudService from "../utils/service/api";

export default {
  // EXAMPLE: Your need delete it
  weather: new CrudService<ApiResponse, FormSearchByName | FormSearchByLatLong>(
    API.WEATHER
  ),
};
