// client/src/components/WeatherCard.jsx
import React from 'react';

function WeatherCard({ data }) {
  return (
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '300px',
        textAlign: 'center',
      }}
    >
      <h2>Weather in your city</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {data.temperature}°C
      </p>
      <p>{data.weather}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="weather icon"
        style={{ width: '50px', height: '50px' }}
      />
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.wind_speed} m/s</p>
    </div>
  );
}

export default WeatherCard;

