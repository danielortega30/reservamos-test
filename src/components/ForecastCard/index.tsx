import React, { FC } from "react";
import { Daily } from "../../interfaces/weather.interfaces";
import "./index.css";
import { kelvinToCelsius, unixToDate } from "../../utils/formatters";

interface Props {
  data: Daily;
}

export const ForecastCard: FC<Props> = ({ data: { weather, dt, temp } }) => {
  return (
    <article className="forecast-card">
      <p className="forecast-card__date"> {unixToDate(dt)}</p>
      <div>
        <figure className="forecast-card__icon">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
            alt="Weather icon"
          />
        </figure>
      </div>
      <div className="forecast-card__minmax">
        <p>
          <strong>{kelvinToCelsius(temp.min)} °C</strong> Min
        </p>
        <p>
          <strong>{kelvinToCelsius(temp.max)} °C</strong> Max
        </p>
      </div>
      <p className="forecast-card__description">{`${weather[0].description}`}</p>
    </article>
  );
};
