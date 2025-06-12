import React from 'react'

const SuggestionsList = ({ suggestions, onSuggestionClick }) => {
    if (suggestions.length === 0) return null;
    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/50 backdrop-blur-lg border border-white/30 rounded-2xl overflow-hidden z-10">
            {suggestions.map((suggestion, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => onSuggestionClick(suggestion)}
                    className="w-full text-left px-6 py-3 text-black hover:bg-white/60 transition-all duration-300 border-b border-white/10 last:border-b-0"
                >
                    <div className="font-medium">{suggestion.name}</div>
                    <div className="text-sm text-black/70">
                        {suggestion.state ? `${suggestion.state}, ` : ''}{suggestion.country}
                    </div>
                </button>
            ))}
        </div>
    )
}

export default SuggestionsList