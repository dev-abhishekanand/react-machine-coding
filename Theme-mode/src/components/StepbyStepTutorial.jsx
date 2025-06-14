import { useState } from "react";
import { useTheme } from "../hook/useTheme";

const StepByStepTutorial = () => {
    const { theme } = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [copiedStep, setCopiedStep] = useState(null);

    const steps = [
        {
            title: "Step 1: Create Theme Context",
            description: "First, create a context to manage theme state across your application.",
            code: `// ThemeContext.js
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;`,
            explanation: "This creates a React Context that will hold our theme state and functions. The context acts as a global state container that can be accessed by any component in the component tree."
        },
        {
            title: "Step 2: Build Theme Provider",
            description: "Create a provider component that manages theme state and provides it to child components.",
            code: `// ThemeProvider.js
import React, { useState } from 'react';
import { createContext } from 'react';

// Create context in same file for single-file approach
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };`,
            explanation: "The ThemeProvider component wraps your app and manages the theme state. It provides both the current theme value and a function to toggle between themes."
        },
        {
            title: "Step 3: Create Custom Hook (Optional)",
            description: "Build a custom hook for easier context consumption and error handling.",
            code: `// Add this to your ThemeProvider.js file
import { useContext } from 'react';

const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    
    return context;
};

// Export the hook along with other exports
export { ThemeContext, ThemeProvider, useTheme };`,
            explanation: "This custom hook simplifies using the theme context and provides better error messages if the context is used outside of a provider."
        },
        {
            title: "Step 4: Wrap Your App",
            description: "Wrap your main App component with the ThemeProvider to make theme available everywhere.",
            code: `// App.js - Complete single-file approach
import React, { useState, useContext, createContext } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Create provider
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Create custom hook
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// 4. Your main component
const MainContent = () => {
    return (
        <div>
            <h1>Your App Content</h1>
        </div>
    );
};

// 5. App with provider wrapper
function App() {
    return (
        <ThemeProvider>
            <MainContent />
        </ThemeProvider>
    );
}

export default App;`,
            explanation: "This shows a complete single-file implementation where everything is defined in one file, eliminating any import issues. This approach is perfect for smaller apps or when you want to keep theme logic contained."
        },
        {
            title: "Step 5: Use Theme in Components",
            description: "Consume the theme context in any component to access theme state and toggle function.",
            code: `// Inside your component (using the useTheme hook from above)
const MyComponent = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={\`p-4 transition-colors duration-300 \${
            theme === 'dark' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-black'
        }\`}>
            <h2>Current Theme: {theme}</h2>
            <button 
                onClick={toggleTheme}
                className={\`px-4 py-2 rounded transition-colors \${
                    theme === 'dark'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                }\`}
            >
                Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};`,
            explanation: "Any component within the ThemeProvider can use the useTheme hook to access the current theme and toggle function. Apply conditional styling based on the theme value with smooth transitions."
        },
        {
            title: "Step 6: Add Advanced Features",
            description: "Enhance your theme system with localStorage persistence and system preference detection. Note: localStorage won't work in Claude artifacts, but this shows how to implement it in a real app.",
            code: `// Enhanced ThemeProvider with persistence
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // In a real app, uncomment these lines:
        // const saved = localStorage.getItem('theme');
        // if (saved) return saved;
        
        // Check system preference
        if (typeof window !== 'undefined' && 
            window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'dark' : 'light';
            // In a real app, uncomment this line:
            // localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};`,
            explanation: "Advanced features include remembering user preference with localStorage and automatically detecting system dark mode preference for better user experience. Note: localStorage is commented out as it's not supported in Claude artifacts."
        }
    ];

    const copyToClipboard = (code, stepIndex) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedStep(stepIndex);
            setTimeout(() => setCopiedStep(null), 2000);
        });
    };

    return (
        <div className={`${theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
            } border rounded-xl shadow-lg transition-all duration-300`}>
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    📚 How to Build Theme Context - Step by Step
                </h2>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    Learn how to create your own theme switching system from scratch
                </p>
            </div>

            {/* Step Navigation */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${activeStep === index
                                ? theme === 'dark'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-600 text-white'
                                : theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Step {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Step Content */}
            <div className="p-6">
                <div className="mb-6">
                    <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                        {steps[activeStep].title}
                    </h3>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {steps[activeStep].description}
                    </p>
                </div>

                {/* Code Block */}
                <div className={`relative rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                    }`}>
                    <div className={`flex items-center justify-between px-4 py-2 ${theme === 'dark' ? 'bg-gray-800 border-b border-gray-700' : 'bg-gray-100 border-b border-gray-200'
                        }`}>
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Code Example
                        </span>
                        <button
                            onClick={() => copyToClipboard(steps[activeStep].code, activeStep)}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${copiedStep === activeStep
                                ? 'bg-green-600 text-white'
                                : theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {copiedStep === activeStep ? '✓ Copied!' : 'Copy'}
                        </button>
                    </div>
                    <pre className={`p-4 overflow-x-auto text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'
                        }`}>
                        <code>{steps[activeStep].code}</code>
                    </pre>
                </div>

                {/* Explanation */}
                <div className={`mt-4 p-4 rounded-lg ${theme === 'dark'
                    ? 'bg-blue-900/20 border-l-4 border-blue-400'
                    : 'bg-blue-50 border-l-4 border-blue-600'
                    }`}>
                    <p className={`text-sm ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
                        }`}>
                        <strong>💡 Explanation:</strong> {steps[activeStep].explanation}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${activeStep === 0
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                            } ${theme === 'dark'
                                ? 'bg-gray-700 text-white hover:bg-gray-600'
                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                    >
                        ← Previous
                    </button>

                    <span className={`px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        {activeStep + 1} of {steps.length}
                    </span>

                    <button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${activeStep === steps.length - 1
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                            } ${theme === 'dark'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
};
export default StepByStepTutorial