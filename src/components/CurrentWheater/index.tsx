import { FC, useEffect } from "react";

import "./index.css";
import { WeatherResponse } from "../../interfaces/weather.interfaces";
import { dateFormatLong, kelvinToCelsius } from "../../utils/formatters";
import { getBackground } from "../../utils/getBackground";

interface Props {
  data: WeatherResponse;
  name: string;
  onClickSearch: () => void;
}

export const CurrentWeather: FC<Props> = ({
  data: { current },
  name,
  onClickSearch,
}) => {
  useEffect(() => {
    if (current) {
      const body = document.querySelector("body");
      body.style.backgroundImage = `url(${getBackground(
        current.weather[0].id
      )})`;
    }
  }, [current]);
  return (
    <aside className="aside">
      <article className="current-weather">
        <h3 className="current-weather__place">{name}</h3>
        <p className="current-weather__date">
          Hoy {dateFormatLong(new Date()).toLowerCase()}
        </p>
        <figure className="current-weather__icon">
          <img
            src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
            alt="Weather icon"
          />
        </figure>
        <p className="current-weather__temp">
          {kelvinToCelsius(current.temp)} °C
        </p>

        <div className="current-weather__data">
          <p className="current-weather__description">{`${current.weather[0].description}`}</p>
          <ul className="current-weather__list">
            <li className="current-weather__item">
              <span>Velocidad del viento </span>
              <strong> {current.wind_speed} m/s</strong>
            </li>
            <li className="current-weather__item">
              <span>Nubosidad</span>
              <strong>{current.clouds}%</strong>{" "}
            </li>
            <li className="current-weather__item">
              <span>Presión</span>
              <strong>{current.pressure}hPa</strong>{" "}
            </li>
          </ul>
        </div>
        <div className="current-weather__toggle"></div>
        <div className="current-weather__search">
          <button onClick={onClickSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Buscar otro lugar
          </button>
        </div>
      </article>
    </aside>
  );
};
