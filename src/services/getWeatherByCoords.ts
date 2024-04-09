import axios from "axios";
import { apiOpenWeather } from "../const/api";
import { ReservamosItem } from "../interfaces/reservamos.interfaces";
import { API_OPEN_WEATHER } from "../config/keys";
import { WeatherResponse } from "../interfaces/weather.interfaces";

export const getWeatherByCoords = async (coords: ReservamosItem) => {
  const params = new URLSearchParams();
  params.append("lat", coords.lat || "");
  params.append("lon", coords.long || "");
  params.append("appid", API_OPEN_WEATHER);
  params.append("lang", "es");

  try {
    const weather = await axios.get(apiOpenWeather, { params });

    return {
      hasError: false,
      data: weather.data as WeatherResponse,
    };
  } catch (error) {
    return {
      hasError: true,
      data: null,
    };
  }
};
