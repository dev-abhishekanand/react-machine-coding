import { useTheme } from "../hook/useTheme";
import ThemeDisplayCard from "./DisplayTheme";
import FeatureCards from "./FeatureCard";
import Header from "./Header";
import SampleContent from "./SampleContent";
import StepByStepTutorial from "./StepbyStepTutorial";

const AppContent = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen transition-all duration-300 ${theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            }`}>
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                        Dynamic Theme Switcher
                    </h1>
                    <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Experience seamless light and dark mode transitions
                    </p>
                </div>

                <div className="space-y-12">
                    <ThemeDisplayCard />
                    <FeatureCards />
                    <StepByStepTutorial />
                    <SampleContent />
                </div>
            </main>

            <footer className={`${theme === 'dark'
                ? 'bg-gray-900 border-gray-700'
                : 'bg-white border-gray-200'
                } border-t mt-16`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Built with React Context API & Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default AppContent