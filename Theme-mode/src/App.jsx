import AppContent from "./components/AppContent"
import DisplayTheme from "./components/DisplayTheme"
import ThemeProvider from "./context/ThemeProvider"

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
