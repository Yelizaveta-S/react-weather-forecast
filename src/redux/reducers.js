import {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE,
  CLEAR_FORECAST,
} from "./actions";

const initialState = {
  loading: false,
  forecast: null,
  error: null,
};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecast: action.payload,
        error: null,
      };
    case FETCH_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        forecast: null,
        error: action.payload,
      };
    case CLEAR_FORECAST:
      return {
        ...state,
        forecast: null,
        error: null,
      };
    default:
      return state;
  }
};

export default forecastReducer;
