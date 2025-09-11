import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import SEOHead from "./components/SEO/SEOHead";
import Home from "./pages/Home"

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEOHead />
        <Home/>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App