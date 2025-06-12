export const WeatherMainDisplay = ({ weatherData, icon }) => (
    <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
            {icon}
        </div>
        <div className="text-6xl font-bold text-white mb-2">
            {Math.round(weatherData.main.temp)}°
        </div>
        <p className="text-xl text-white/90 capitalize font-medium">
            {weatherData.weather[0].description}
        </p>
        <p className="text-white/70 text-sm mt-2">
            Feels like {Math.round(weatherData.main.feels_like)}°C
        </p>
    </div>
)