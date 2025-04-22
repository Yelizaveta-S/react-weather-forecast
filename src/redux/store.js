import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./reducers";

const store = configureStore({
  reducer: forecastReducer,
});

export default store;
