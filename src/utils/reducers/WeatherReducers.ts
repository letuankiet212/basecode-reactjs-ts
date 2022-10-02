/* eslint-disable @typescript-eslint/no-unused-vars */
export const INITIAL_STATE: InfoApp = {
	isLoading: false,
	isError: false,
	data: null,
	errorMsg: '',
};

export enum ACTION_TYPE {
	FETCH_START = 'START',
	FETCH_SUCCESS = 'SUCCESS',
	FETCH_FAILED = 'FAILED',
}

export const apiReducer = (state: InfoApp, action: ActionReducer) => {
	switch (action.type) {
		case ACTION_TYPE.FETCH_START:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case ACTION_TYPE.FETCH_SUCCESS:
			return {
				isLoading: false,
				isError: false,
				data: action.payload,
			};

		case ACTION_TYPE.FETCH_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
				errorMsg: action.errorMsg,
			};

		default:
			return INITIAL_STATE;
	}
};
