import axios from 'axios';
import {apiKey} from './constant';

const forecastEndPiont =
  params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityNAme}&days=${params.days}&aqi=no&alerts=no
`;
const searchEndPiont = params =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityNAme}`;
