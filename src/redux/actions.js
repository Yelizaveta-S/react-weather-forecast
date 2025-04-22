import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export const FETCH_FORECAST_REQUEST = "FETCH_FORECAST_REQUEST";
export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_FORECAST_FAILURE = "FETCH_FORECAST_FAILURE";
export const CLEAR_FORECAST = "CLEAR_FORECAST";

export const fetchForecastRequest = () => ({
  type: FETCH_FORECAST_REQUEST,
});

export const fetchForecastSuccess = (forecast) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: forecast,
});

export const fetchForecastFailure = (error) => ({
  type: FETCH_FORECAST_FAILURE,
  payload: error,
});

export const clearForecast = () => ({
  type: CLEAR_FORECAST,
});

export const fetchWeatherForecast = (city) => {
  return async (dispatch) => {
    dispatch(fetchForecastRequest());
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      dispatch(fetchForecastSuccess(response.data.list));
    } catch (error) {
      let errorMessage = error.message;
      if (error.response && error.response.status === 404) {
        errorMessage = `City "${city}" not found. Please check the spelling.`;
      }
      dispatch(fetchForecastFailure(errorMessage));
    }
  };
};
