


export const ErrorDisplay = ({ error, onRetry }) => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-red-600">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md text-center">
            <p className="text-white text-lg font-medium mb-4">⚠️ {error}</p>
            <button
                onClick={onRetry}
                className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl px-6 py-3 text-white font-medium transition-all duration-300"
            >
                Try Again
            </button>
        </div>
    </div>
)