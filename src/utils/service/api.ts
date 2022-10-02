import axios, { AxiosError, AxiosResponse } from 'axios';
import urlJoin from 'url-join';
import { API_STATUS } from '../constants/api';

const baseURL = process.env.REACT_APP_API_ENDPOINT || '';

const linkApi = (resource: string) => {
	return urlJoin(baseURL, resource);
};

const handleError = (error: AxiosError) => {
	if (!error.response?.status || [API_STATUS.HTTP_500_SERVER].includes(error.response?.status)) {
		console.log(error.response);
	} else {
		return error.response.data;
	}
};

class RestService<T, R = any> {
	constructor(protected resource: string) {}

	index(params?: R) {
		return new Promise<AxiosResponse<T>>((resolve, rejects) => {
			axios
				.get<T>(linkApi(this.resource), {
					params,
				})
				.then(resolve)
				.catch((error: AxiosError) => {
					rejects(handleError(error));
				});
		});
	}
}

export default RestService;
