import { Search } from 'lucide-react'
import SuggestionsList from './SuggestionsList'
const SearchForm = ({ searchQuery, setSearchQuery, suggestions, onSubmit, onSuggestionClick }) => {

    return (
        <form onSubmit={onSubmit} className='mb-6 relative'>
            <div>
                <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Enter City Name' className="w-full bg-white/20 border border-white/30 rounded-2xl px-6 py-4 pr-14 text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/25 transition-all duration-300"
                />
                <button type='submit' disabled={!searchQuery.trim()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Search className='text-white' size={20} />
                </button>
            </div>
            <SuggestionsList suggestions={suggestions} onSuggestionClick={onSuggestionClick} />
        </form>
    )
}

export default SearchForm