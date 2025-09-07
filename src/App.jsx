import { HelmetProvider } from 'react-helmet-async';
import SEOHead from "./components/SEO/SEOHead";
import Home from "./pages/Home"

const App = () => {
  return (
    <HelmetProvider>
      <SEOHead />
      <Home/>
    </HelmetProvider>
  )
}

export default App