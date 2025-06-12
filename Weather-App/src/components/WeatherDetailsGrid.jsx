import { Wind, Droplets, Eye, Thermometer } from 'lucide-react'

export const WeatherDetailsGrid = ({ weatherData }) => {

    const details = [
        { icon: Wind, label: 'Wind', value: `${weatherData.wind.speed} m/s` },
        { icon: Droplets, label: 'Humidity', value: `${weatherData.main.humidity}%` },
        { icon: Eye, label: 'Visibility', value: `${(weatherData.visibility / 1000).toFixed(1)} km` },
        { icon: Thermometer, label: 'Pressure', value: `${weatherData.main.pressure} hPa` }
    ]

    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            {details.map((detail, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                    <detail.icon className="mx-auto mb-2 text-white/80" size={24} />
                    <p className="text-white/70 text-xs uppercase tracking-wide">{detail.label}</p>
                    <p className="text-white font-semibold">{detail.value}</p>
                </div>
            ))}
        </div>
    )
}
