/* eslint-disable @typescript-eslint/no-unused-vars */
interface InfoApp {
	isLoading: boolean;
	data?: ApiResponse | null;
	isError: boolean;
	errorMsg?: string;
}

interface FormSearchByName {
	q: string;
	appid: string;
}

interface FormSearchByLatLong {
	lat: number;
	lon: number;
	appid: string;
}

interface Coords {
	accuracy: number;
	altitude: number | null;
	altitudeAccuracy: number | null;
	heading: number | null;
	latitude: number;
	longitude: number;
	speed: number | null;
}

interface PositionDevice {
	coords?: Coords;
	timestamp?: number;
}
