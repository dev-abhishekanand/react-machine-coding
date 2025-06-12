import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import SearchForm from './SearchForm'
import LocationButton from './LocationButton'

const SearchInterface = ({ onLocationSelect }) => {

    const [searchQuery, setSearchQuery] = useState('')
    console.log('searchQuery', searchQuery)
    const [suggestions, setSuggestions] = useState([])
    console.log('suggestions', suggestions)
    const [isSearching, setIsSearching] = useState(false)
    const debouncedSearchQuery = useDebounce(searchQuery, 500)

    console.log('debounceValue', debouncedSearchQuery)


    useEffect(() => {
        if (debouncedSearchQuery && debouncedSearchQuery.length >= 2) {
            searchCitySuggestions(debouncedSearchQuery)
        }
        // else {
        //     setSuggestions([])
        // }
    }, [debouncedSearchQuery])

    const searchCitySuggestions = async (query) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=dbc1c10dfb3c94d2d910c00e9eb3ac55`
            )
            console.log('response123', response)
            if (response.ok) {
                const data = await response.json()
                setSuggestions(data)
            }
        } catch (error) {
            console.log('error while getting suggestions', error.message)
            setSuggestions([])
        }
    }

    const handleCurrentLocation = async () => {
        setIsSearching(true)
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject)
            })
            console.log('position', position)

            const { latitude, longitude } = position.coords
            onLocationSelect({ type: 'coords', lat: latitude, lon: longitude })
        } catch (error) {
            console.log(error.message)
        } finally {
            setIsSearching(false)
        }
    }

    const handleSuggestionsClick = (suggestion) => {
        const cityName = suggestion.state ? `${suggestion.name}, ${suggestion.state}, ${suggestion.country}`
            : `${suggestion.name}, ${suggestion.country}`
        onLocationSelect({ type: 'city', name: cityName })
        setSearchQuery('')
        setSuggestions([])
    }

    const handleFormSubmit = (e) => {
        e.preventDefult()
        if (searchQuery.trim()) {
            onLocationSelect({ type: 'city', name: searchQuery.trim() })
            setSearchQuery('')
            // setSuggestions([])
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-white/20">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
                    <p className="text-white/80">Search for any city or use your location</p>
                </div>

                <SearchForm
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    suggestions={suggestions}
                    onSubmit={handleFormSubmit}
                    onSuggestionClick={handleSuggestionsClick}
                />

                <LocationButton onClick={handleCurrentLocation} isLoading={isSearching} />
            </div>
        </div>
    )
}

export default SearchInterface