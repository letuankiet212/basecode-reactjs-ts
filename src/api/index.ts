/* eslint-disable import/no-anonymous-default-export */
import API from '../utils/constants/api';
import RestService from '../utils/service/api';

export default {
	// EXAMPLE: Your need delete it
	weather: new RestService<ApiResponse, FormSearchByName | FormSearchByLatLong>(API.WEATHER),
};
