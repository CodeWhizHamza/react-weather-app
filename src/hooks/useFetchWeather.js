import { useEffect, useState } from 'react'

export default function useFetchWeather() {
  const [weatherApiUrl, setWeatherApiUrl] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [fetchedCity, setFetchedCity] = useState(null)

  const {
    REACT_APP_WEATHER_API_KEY: WEATHER_API_KEY,
    REACT_APP_LOCATION_API_KEY: LOCATION_API_KEY,
    REACT_APP_WEATHER_API_URL: WEATHER_API_URL,
    REACT_APP_LOCATION_API_URL: LOCATION_API_URL,
  } = process.env

  const locationApiUrl = `${LOCATION_API_URL}?token=${LOCATION_API_KEY}`

  console.log(
    WEATHER_API_URL,
    WEATHER_API_KEY,
    LOCATION_API_URL,
    LOCATION_API_KEY,
  )

  const fetchLocation = async url => {
    const res = await fetch(url)
    const { city } = await res.json()

    const apiUrl = `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&mode=json`

    setFetchedCity(city)
    setWeatherApiUrl(apiUrl)
  }
  const fetchWeatherData = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()

      const weatherData = {
        ...data.main,
        ...data.weather[0],
        city: fetchedCity,
      }
      if (data) setWeatherData(weatherData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchLocation(locationApiUrl)
    if (weatherApiUrl) fetchWeatherData(weatherApiUrl)
  }, [locationApiUrl, weatherApiUrl])

  return weatherData
}
