import React from 'react'
import Weather from './components/Weather'
import useFetchWeather from './hooks/useFetchWeather'
import WeatherContext from './contexts/WeatherContext'
import './App.css'

function App() {
  const weatherData = useFetchWeather()

  const renderData = () => {
    const loadingIcon = (
      <div className="loading">
        <div className="lds-dual-ring"></div>
        <p className="loading__msg">Getting your weather data from API</p>
      </div>
    )
    const weatherContainer = (
      <WeatherContext.Provider value={weatherData}>
        <Weather />
      </WeatherContext.Provider>
    )
    return weatherData ? weatherContainer : loadingIcon
  }

  return renderData()
}

export default App
