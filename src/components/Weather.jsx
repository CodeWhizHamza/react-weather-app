import React, { useContext } from 'react'
import WeatherContext from '../contexts/WeatherContext'
import WeatherCard from './WeatherCard/WeatherCard'

export default function Weather() {
  const weather = useContext(WeatherContext)

  const weatherBackgroundImages = {
    clearSky:
      'https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    fewClouds:
      'https://images.unsplash.com/photo-1495933925743-bb94d1d4ea4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    scatteredClouds:
      'https://images.unsplash.com/photo-1493130952181-47e36589f64d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNjYXR0ZXJlZCUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    brokenClouds:
      'https://images.unsplash.com/photo-1614368558175-ad4a95a6d8d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    showerRain:
      'https://cdn.pixabay.com/photo/2013/02/21/19/11/rain-84648__340.jpg',
    rain: 'https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    thunderstorm:
      'https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    snow: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    mist: 'https://images.unsplash.com/photo-1568096584300-d7f22180b7e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  }

  const getImageType = id => {
    id = String(id)
    if (id.startsWith(2)) return 'thunderstorm'
    if (id.startsWith(3) || id.startsWith(7)) return 'mist'
    if (id.startsWith(5)) return id.startsWith(521) ? 'showerRain' : 'rain'
    if (id.startsWith(8)) {
      if (id.startsWith(800)) return 'clearSky'
      if (id.startsWith(801)) return 'scatteredClouds'
      if (id.startsWith(802)) return 'fewClouds'
      return 'brokenClouds'
    }
    return null
  }
  const containerImageUrl = weatherBackgroundImages[getImageType(weather.id)]
  const containerStyles = {
    backgroundImage: `url(${containerImageUrl})`,
  }
  return (
    <div className="container" style={containerStyles}>
      <WeatherCard />
    </div>
  )
}
