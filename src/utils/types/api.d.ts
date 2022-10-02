//TODO: Need Handle
interface ActionReducer {
	type: string;
	payload?: ApiResponse;
	errorMsg?: string;
}

// TODO: Need Handle Code
interface ApiError {
	code: string;
	message: string;
}

interface Clouds {
	all: number;
}

interface Coord {
	lon: number;
	lat: number;
}

interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
}

interface Sys {
	country: string;
	id: number;
	sunrise: number;
	sunset: number;
	type: number;
}

interface Weather {
	description: string;
	icon: string;
	id: number;
	main: string;
}

interface Wind {
	speed: number;
	deg: number;
}

interface ApiResponse {
	base: string;
	clouds: Clouds;
	cod: number;
	coord: Coord;
	dt: number;
	id: number;
	main: Main;
	name: string;
	sys: Sys;
	timezone: number;
	visibility: number;
	weather: Weather[];
	wind: Wind;
}
