import React from "react";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const WeatherChart = ({ forecast, error, loading }) => {
  if (loading) {
    return <div>Loading forecast...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!forecast || forecast.length === 0) {
    return null;
  }

  const chartData = forecast.map((item) => ({
    date: new Date(item.dt * 1000).toLocaleDateString(),
    temperature: item.main.temp,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          label={{
            value: "Temperature (°C)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

WeatherChart.propTypes = {
  forecast: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  forecast: state.forecast,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps)(WeatherChart);
