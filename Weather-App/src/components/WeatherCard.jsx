import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react'
import { WeatherHeader } from './WeatherHeader'
import { WeatherMainDisplay } from './WeatherMainDisplay'
import { WeatherDetailsGrid } from './WeatherDetailsGrid'
import { WeatherSunTimes } from './WeatherSunTimes'

const WeatherCard = ({ weatherData, onSearchAgain }) => {
    const getWeatherIcon = (condition) => {
        const iconProps = { size: 64, className: "text-white drop-shadow-lg" }

        if (condition.includes('rain')) return <CloudRain {...iconProps} />
        if (condition.includes('cloud')) return <Cloud {...iconProps} />
        if (condition.includes('snow')) return <Snowflake {...iconProps} />
        if (condition.includes('clear')) return <Sun {...iconProps} />
        return <Sun {...iconProps} />
    }

    const getBackgroundGradient = (condition) => {
        if (condition.includes('rain')) return 'from-gray-600 via-gray-700 to-gray-800'
        if (condition.includes('cloud')) return 'from-gray-500 via-gray-600 to-gray-700'
        if (condition.includes('snow')) return 'from-blue-300 via-blue-400 to-blue-500'
        if (condition.includes('clear')) return 'from-blue-400 via-blue-500 to-blue-600'
        return 'from-blue-400 via-blue-500 to-blue-600'
    }

    const condition = weatherData.weather[0].main.toLowerCase()
    const bgGradient = getBackgroundGradient(condition)

    return (
        <div className={`min-h-screen bg-gradient-to-br ${bgGradient} flex items-center justify-center p-4`}>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-white/20">
                <WeatherHeader weatherData={weatherData} onSearchAgain={onSearchAgain} />
                <WeatherMainDisplay weatherData={weatherData} icon={getWeatherIcon(condition)} />
                <WeatherDetailsGrid weatherData={weatherData} />
                <WeatherSunTimes weatherData={weatherData} />
            </div>
        </div>
    )
}

export default WeatherCard;