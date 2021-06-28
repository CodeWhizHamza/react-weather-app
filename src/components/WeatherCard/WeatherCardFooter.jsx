import React, { useContext } from 'react'
import WeatherContext from '../../contexts/WeatherContext'

export default function WeatherCardFooter() {
  const weather = useContext(WeatherContext)

  const getTemperatureInCelsius = temp => Math.round(temp - 273)

  return (
    <footer className="weather__footer">
      <div className="left">
        <p className="weather__details">Pressure: {weather.pressure} Pa</p>
        <p className="weather__details">Humidity: {weather.humidity} %</p>
      </div>
      <div className="right">
        <p className="weather__details">
          Feels: {getTemperatureInCelsius(weather.feels_like)}&deg;C
        </p>
        <p className="weather__details">
          Temp: {getTemperatureInCelsius(weather.temp)}&deg;C
        </p>
      </div>
    </footer>
  )
}
