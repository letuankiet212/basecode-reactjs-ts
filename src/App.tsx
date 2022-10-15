import { debounce, Typography } from '@mui/material';
import { useEffect, useReducer, useState } from 'react';
import { getInfoCity } from './api/weather';
import './App.css';
import { ACTION_TYPE, apiReducer, INITIAL_STATE } from './utils/reducers/WeatherReducers';

function App() {
	const [state, dispatch] = useReducer(apiReducer, INITIAL_STATE);
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {}, [state]);

	const getInfoDevice = () => {
		navigator.geolocation.getCurrentPosition(({ coords }: PositionDevice) => {
			if (!coords) return;

			const formRequest = {
				lat: coords.latitude,
				lon: coords.longitude,
				appid: process.env.REACT_APP_KEY || '',
			};

			getInfoWithCityName(formRequest);
		});
	};

	const handleSearchWithCityName = debounce((nameCity: string) => {
		const formRequest = {
			q: nameCity,
			appid: process.env.REACT_APP_KEY || '',
		};
		getInfoWithCityName(formRequest);
	}, 1000);

	const getInfoWithCityName = async (payload: FormSearchByName | FormSearchByLatLong) => {
		dispatch({ type: ACTION_TYPE.FETCH_START });

		await getInfoCity(payload).then((weatherInfo) =>{
			dispatch({ type: ACTION_TYPE.FETCH_SUCCESS, payload: weatherInfo });
			setIsSuccess(true);
		}).catch((e: ApiError) => {
			dispatch({ type: ACTION_TYPE.FETCH_FAILED, errorMsg: e.message });
		});
	};

	return (
		<div className="App">
			<Typography variant="h3">Hello word</Typography>
			<div className={`wrapper ${isSuccess && 'active'}`}>
				<header>
					<i className="bx bx-left-arrow-alt" onClick={() => setIsSuccess(false)}></i>Weather App
				</header>
				<section className="input-part">
					<p className={`info-txt ${state.isError && 'error'}  ${state.isLoading && 'pending'} `}>{state.errorMsg || 'Loading...'}</p>
					<div className="content">
						<input type="text" spellCheck="false" placeholder="Enter city name" onChange={(e) => handleSearchWithCityName(e.target.value)} required />
						<div className="separator"></div>
						<button disabled={state.isLoading} onClick={() => getInfoDevice()}>
							Get Device Location
						</button>
					</div>
				</section>

				<section className="weather-part">
					<img src={`http://openweathermap.org/img/wn/${state.data?.weather[0].icon}@2x.png`} alt="Weather Icon" />
					<div className="temp">
						<span className="numb">{Math.round((state.data?.main.temp || 0) / 10)}</span>
						<span className="deg">°</span>C
					</div>
					<div className="weather">{state.data?.weather[0].main}</div>
					<div className="location">
						<i className="bx bx-map"></i>
						<span>{`${state.data?.name} , ${state.data?.sys.country}`}</span>
					</div>
					<div className="bottom-details">
						<div className="column feels">
							<i className="bx bxs-thermometer"></i>
							<div className="details">
								<div className="temp">
									<span className="numb-2">{Math.round((state.data?.main.feels_like || 0) / 10)}</span>
									<span className="deg">°</span>C
								</div>
								<p>Feels like</p>
							</div>
						</div>
						<div className="column humidity">
							<i className="bx bxs-droplet-half"></i>
							<div className="details">
								<span className="numb-2">{Math.round(state.data?.main.humidity || 0)}</span>
								<span className="deg">%</span>
								<p>Humidity</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
