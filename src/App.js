import React from "react";
import CitySearch from "./components/CitySearch";
import WeatherChart from "./components/WeatherChart";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <CitySearch />
      <WeatherChart />
    </div>
  );
}

export default App;
