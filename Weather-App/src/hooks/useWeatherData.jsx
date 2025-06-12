import { useState } from "react"

export const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState()
    const [loading, setloading] = useState(false)
    const [error, setError] = useState('')

    const API_KEY = 'dbc1c10dfb3c94d2d910c00e9eb3ac55'

    const getWeatherDatabyCoordinates = async (lat, lon) => {
        setloading(true)
        setError('')
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            if (!response.ok) {
                throw new Error('Error while fetching Data with Coordinates')
            }
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setloading(false)
        }
    }

    const getWeatherDatabyCity = async (cityName) => {
        setloading(true)
        setError('')
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            if (!response.ok) {
                throw new Error('Error while fetching Data with CityName')
            }
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setloading(false)
        }
    }

    const resetWeather = () => {
        setWeatherData()
        setloading(false)
        setError('')
    }
    return {
        getWeatherDatabyCity, getWeatherDatabyCoordinates, weatherData, loading, error, resetWeather
    }
}