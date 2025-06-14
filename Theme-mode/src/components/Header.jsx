import { useTheme } from "../hook/useTheme";
import { Moon, Sun, Palette, Settings, Home, User } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`${theme === 'dark'
            ? 'bg-gray-900 border-gray-700'
            : 'bg-white border-gray-200'
            } border-b transition-all duration-300 shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <Palette className={`h-8 w-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                        <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                            ThemeHub
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                            }`}>
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </a>
                        <a href="#" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                            }`}>
                            <Settings className="h-4 w-4" />
                            <span>Settings</span>
                        </a>
                        <a href="#" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${theme === 'dark'
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                            }`}>
                            <User className="h-4 w-4" />
                            <span>Profile</span>
                        </a>
                    </nav>

                    <button
                        onClick={toggleTheme}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${theme === 'dark'
                            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/25'
                            : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/25'
                            }`}
                    >
                        {theme === 'dark' ? (
                            <>
                                <Sun className="h-4 w-4" />
                                <span className="hidden sm:inline">Light</span>
                            </>
                        ) : (
                            <>
                                <Moon className="h-4 w-4" />
                                <span className="hidden sm:inline">Dark</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header