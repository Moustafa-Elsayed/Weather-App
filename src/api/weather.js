import axios from 'axios';
import {apiKey} from './constant';

const forecastEndPiont =
  params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityNAme}&days=${params.days}&aqi=no&alerts=no
`;
const searchEndPiont = params =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityNAme}`;

const apicall = async (endPoint, params) => {
  const options = {
    method: 'GET',
    url: endPoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return {};
  }
};

export const fetchForcatdata = params => {
  return apicall(forecastEndPiont(params));
};

export const fetchSearchEndPiont = params => {
  return apicall(searchEndPiont(params));
};
