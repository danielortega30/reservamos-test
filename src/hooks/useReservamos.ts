import { useState } from "react";
import { ReservamorResponse } from "../interfaces/reservamos.interfaces";
import { getCitiesByName } from "../services/getCitiesByName";

export const useReservamos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [cities, setCities] = useState<ReservamorResponse>([]);

  const getCities = async (word: string) => {
    setLoading(true);
    setError(null);
    const { data, hasError } = await getCitiesByName(word);
    setCities(data || []);
    setLoading(false);
    if (hasError) {
      setError("Ocurrio un error al traer la informacion");
    }
  };

  return {
    cities,
    error,
    loading,
    getCities,
  };
};
