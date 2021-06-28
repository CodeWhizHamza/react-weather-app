import React, { useContext } from 'react'
import WeatherContext from '../../contexts/WeatherContext'
import iconsFile from '../../weather-icons.svg'

export default function WeatherCardHeader() {
  const weather = useContext(WeatherContext)

  const weatherIcon = `${iconsFile}#icon-${weather.icon}`

  const getTemperatureInCelsius = temp => Math.round(temp - 273)

  return (
    <header className="weather__header">
      <h3 className="weather__type">{weather.main}</h3>
      <h1 className="weather__temp">
        {getTemperatureInCelsius(weather.temp)}&deg;C
      </h1>
      <p className="weather__desc">
        {weather.description} - {weather.city}
      </p>
      <svg className="weather__icon" alt="Icon">
        <use xlinkHref={weatherIcon}></use>
      </svg>
    </header>
  )
}
