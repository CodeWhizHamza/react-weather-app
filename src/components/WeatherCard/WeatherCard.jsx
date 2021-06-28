import React from 'react'
import WeatherCardHeader from './WeatherCardHeader'
import WeatherCardFooter from './WeatherCardFooter'

export default function WeatherCard() {
  return (
    <article className="weather">
      <WeatherCardHeader />
      <WeatherCardFooter />
    </article>
  )
}
