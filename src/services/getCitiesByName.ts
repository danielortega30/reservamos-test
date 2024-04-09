import axios, { AxiosResponse } from "axios";
import { ReservamorResponse } from "../interfaces/reservamos.interfaces";
import { apiReservamos } from "../const/api";

export const getCitiesByName = async (word: string) => {
  const params = new URLSearchParams();
  params.append("q", word);

  try {
    const response = (await axios.get(apiReservamos, {
      params,
    })) as AxiosResponse<ReservamorResponse>;
    response.data;
    const cities = response.data.filter((d) => d.result_type === "city");

    return {
      hasError: false,
      data: cities,
    };
  } catch (error) {
    return {
      hasError: true,
      data: null,
    };
  }
};
