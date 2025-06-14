import { useTheme } from "../hook/useTheme";

const ThemeDisplayCard = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
            } border rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl`}>
            <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    Current Theme
                </h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark'
                    ? 'bg-blue-900 text-blue-200'
                    : 'bg-blue-100 text-blue-800'
                    }`}>
                    {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </div>
            </div>

            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Experience seamless theme switching with smooth transitions and beautiful design.
            </p>

            <button
                onClick={toggleTheme}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${theme === 'dark'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25'
                    }`}
            >
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};
export default ThemeDisplayCard