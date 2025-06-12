import React, { useState } from 'react'
import SearchInterface from './SearchInterface'
import WeatherCard from './WeatherCard'
import { LoadingSpinner } from './LoadingSpinner'
import { ErrorDisplay } from './ErrorDisplay'
import { useWeatherData } from '../hooks/useWeatherData'

const WeatherApp = () => {
    const [selectedLocation, setSelectedLocation] = useState(null)
    const { weatherData, loading, error, getWeatherDatabyCity, getWeatherDatabyCoordinates, resetWeather } = useWeatherData()

    const handleLocationSelect = (location) => {
        setSelectedLocation(location)
        if (location.type === 'city') {
            getWeatherDatabyCity(location.name)
        } else if (location.type === 'coords') {
            getWeatherDatabyCoordinates(location.lat, location.lon)
        }
    }

    const handleSearchAgain = () => {
        resetWeather()
        setSelectedLocation(null)
    }

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorDisplay error={error} onRetry={() => resetWeather()} />
    }

    if (!weatherData) {
        return <SearchInterface onLocationSelect={handleLocationSelect} />
    }

    return <WeatherCard weatherData={weatherData} onSearchAgain={handleSearchAgain} />
}

export default WeatherApp