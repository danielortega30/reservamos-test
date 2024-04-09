import { FC } from "react";
import { WeatherResponse } from "../../interfaces/weather.interfaces";

import "./index.css";
import { ForecastCard } from "../ForecastCard";
interface Props {
  data: WeatherResponse;
}

export const ForecastList: FC<Props> = ({ data: { daily } }) => {
  return (
    <main className="main">
      <section className="forecast">
        <h2 className="forecast__title">Pronostico</h2>
        <div className="forecast-list">
          {daily.slice(0, 7).map((forecast) => (
            <ForecastCard key={forecast.dt} data={forecast} />
          ))}
        </div>
      </section>
    </main>
  );
};
