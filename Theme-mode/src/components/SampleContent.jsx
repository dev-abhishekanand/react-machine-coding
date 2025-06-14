import { useTheme } from "../hook/useTheme";

const SampleContent = () => {
    const { theme } = useTheme();

    return (
        <div className={`${theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
            } border rounded-xl p-8 shadow-lg transition-all duration-300`}>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                About This Theme System
            </h2>

            <div className={`prose ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    This application demonstrates a comprehensive theme switching system built with React Context.
                    The implementation provides a seamless user experience with smooth transitions between light and dark modes.
                </p>

                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Key features include persistent theme state management, optimized color schemes for both modes,
                    and responsive design that works beautifully across all device sizes.
                </p>

                <div className={`mt-6 p-4 rounded-lg ${theme === 'dark'
                    ? 'bg-gray-900 border-l-4 border-blue-400'
                    : 'bg-gray-50 border-l-4 border-blue-600'
                    }`}>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        💡 Try switching themes using the toggle buttons to see the smooth transitions in action!
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SampleContent