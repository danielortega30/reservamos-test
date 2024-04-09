import { useEffect, useState } from "react";
import { ReservamosItem } from "../../interfaces/reservamos.interfaces";
import { useOpenWeather } from "../../hooks/useOpenWeather";

export const useSearchCity = () => {
  const [showModalForm, setShowModalForm] = useState(true);
  const [citie, setCitie] = useState<ReservamosItem | null>(null);
  const { getWeather, data, loading } = useOpenWeather();

  const onCitieSelected = (citie: ReservamosItem) => {
    setShowModalForm(false);
    setCitie(citie);
  };

  const onClickSearch = () => {
    setShowModalForm(true);
  };

  useEffect(() => {
    if (citie) getWeather(citie);
  }, [citie]);

  return {
    citie,
    data,
    loading,
    showModalForm,
    onCitieSelected,
    onClickSearch,
  };
};
