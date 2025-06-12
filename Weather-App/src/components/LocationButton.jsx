import { MapPin } from 'lucide-react'

const LocationButton = ({ onClick, isLoading }) => {

    return (
        <div className="text-center">
            <button
                onClick={onClick}
                disabled={isLoading}
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl px-6 py-3 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto gap-2"
            >
                {isLoading ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Getting location...
                    </>
                ) : (
                    <>
                        <MapPin size={20} />
                        Use Current Location
                    </>
                )}
            </button>
        </div>
    )
}
export default LocationButton;