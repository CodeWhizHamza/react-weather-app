import { useEffect, useState } from 'react'

export default function useFetchWeather() {
  const [weatherApiUrl, setWeatherApiUrl] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  const weatherApiKey = '79fb33b1249bad0870bf35a0b8cf9456'
  const locationApiKey = '741c861174c041'

  const locationApiUrl = `https://ipinfo.io/json?token=${locationApiKey}`

  const fetchLocation = async url => {
    const res = await fetch(url)
    const data = await res.json()
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${weatherApiKey}&mode=json`
    setWeatherApiUrl(apiUrl)
  }
  const fetchWeatherData = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data) setWeatherData({ ...data.main, ...data.weather[0] })
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
