import axios from 'axios';
import { apiKey } from './constant';

const forecastEndPoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const searchEndPoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endPoint) => {
  try {
    const response = await axios.get(endPoint);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {}; // or handle error as needed
  }
};

export const fetchForecastData = params => {
  const endPoint = forecastEndPoint(params);
  return apiCall(endPoint);
};

export const fetchSearchEndPoint = params => {
  const endPoint = searchEndPoint(params);
  return apiCall(endPoint);
};
