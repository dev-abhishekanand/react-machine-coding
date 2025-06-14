import { useTheme } from "../hook/useTheme";

const FeatureCards = () => {
    const { theme } = useTheme();

    const features = [
        {
            title: "Instant Switching",
            description: "Toggle between light and dark themes with a single click",
            icon: "⚡"
        },
        {
            title: "Smooth Transitions",
            description: "Enjoy fluid animations and seamless color transitions",
            icon: "🎨"
        },
        {
            title: "Responsive Design",
            description: "Perfect experience across all devices and screen sizes",
            icon: "📱"
        },
        {
            title: "Eye Comfort",
            description: "Reduce eye strain with optimized color schemes",
            icon: "👁️"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`${theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                        : 'bg-white border-gray-200 hover:bg-gray-50'
                        } border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                        {feature.title}
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default FeatureCards