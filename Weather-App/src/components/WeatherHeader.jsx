export const WeatherHeader = ({ weatherData, onSearchAgain }) => (
    <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{weatherData.name}</h1>
        <p className="text-white/80 text-sm">{weatherData.sys.country}</p>
        <button
            onClick={onSearchAgain}
            className="mt-3 text-white/70 hover:text-white text-sm underline transition-colors duration-300"
        >
            Search for another city
        </button>
    </div>
)
