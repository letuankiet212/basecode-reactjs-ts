interface InfoApi {
	isLoading: boolean;
	data?: any;
	isError: boolean;
	errorMsg?: string;
}

interface ActionReducer {
	type: string;
	payload?: ApiResponse;
	errorMsg?: string;
}
