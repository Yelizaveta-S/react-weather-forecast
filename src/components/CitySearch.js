import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeatherForecast, clearForecast } from "../redux/actions";
import PropTypes from "prop-types";

const CitySearch = ({ fetchWeatherForecast, clearForecast }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      fetchWeatherForecast(city);
    }
  };

  const handleClearClick = () => {
    setCity("");
    clearForecast();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      {city && <button onClick={handleClearClick}>Clear</button>}
    </div>
  );
};

CitySearch.propTypes = {
  fetchWeatherForecast: PropTypes.func.isRequired,
  clearForecast: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeatherForecast: (city) => dispatch(fetchWeatherForecast(city)),
  clearForecast: () => dispatch(clearForecast()),
});

export default connect(null, mapDispatchToProps)(CitySearch);
