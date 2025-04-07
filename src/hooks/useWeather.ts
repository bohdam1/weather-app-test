import axios from 'axios';
import { useState } from 'react';
import { WeatherData } from '../types';
import { getCache, setCache } from '../utils/cache';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY!;


export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city: string) => {
    setError('');
    const cacheKey = `weather-${city.toLowerCase()}`;
    const cached = getCache(cacheKey);

    if (cached) {
      setWeather(cached);
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data: WeatherData = {
        city: res.data.name,
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`,
        updatedAt: new Date().toLocaleTimeString(),
      };

      setCache(cacheKey, data);
      setWeather(data);
    } catch {
      setError('City not found.');
      setWeather(null);
    }
  };

  return { weather, error, fetchWeather };
};