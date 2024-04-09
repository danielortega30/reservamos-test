import { useState } from "react";
import { ReservamosItem } from "../interfaces/reservamos.interfaces";
import { getWeatherByCoords } from "../services/getWeatherByCoords";
import { WeatherResponse } from "../interfaces/weather.interfaces";

export const useOpenWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<WeatherResponse | null>(null);

  const getWeather = async (item: ReservamosItem) => {
    setLoading(true);
    setError(null);
    const { data, hasError } = await getWeatherByCoords(item);
    setData(data);
    setLoading(false);
    if (hasError) {
      setError("Ocurrio un error al traer la informacion");
    }
  };

  return {
    data,
    error,
    loading,
    getWeather,
  };
};
