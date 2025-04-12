// server/routes/weather.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

router.get('/', async (req, res) => {
  const city = req.query.city;

  if (!city || city.trim() === '') {
    return res.status(400).json({ error: 'City name is required' });
  }

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    // Extracting data from the first forecast in the list
    const firstForecast = data.list[0];  // Use the first 3-hour interval forecast

    const result = {
      temperature: firstForecast.main.temp,
      weather: firstForecast.weather[0].description,
      icon: firstForecast.weather[0].icon,
      humidity: firstForecast.main.humidity,
      wind_speed: firstForecast.wind.speed,
    };

    res.json(result);
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      res.status(404).json({ error: err.response.data.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

module.exports = router;

