import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComp } from './components/NavbarComp'
import { HeroSection } from './components/HeroSection'
import { MarketUpdate } from './components/MarketUpdate'
import { AboutUs } from './components/AboutUs'
import { Footer } from './components/Footer'


function App() {

  return (
    <main className='App'>
      <NavbarComp />
      <HeroSection />
      <MarketUpdate />
      <AboutUs />
      <Footer />
    </main>
  )
}

export default App
