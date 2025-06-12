export const WeatherSunTimes = ({ weatherData }) => (
    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
        <div className="flex justify-between items-center">
            <div className="text-center">
                <p className="text-white/70 text-xs uppercase tracking-wide">Sunrise</p>
                <p className="text-white font-semibold">
                    {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
            <div className="text-center">
                <p className="text-white/70 text-xs uppercase tracking-wide">Sunset</p>
                <p className="text-white font-semibold">
                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
        </div>
    </div>
)