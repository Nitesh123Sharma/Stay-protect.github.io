import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Service from './Component/Service'
import Home from './Component/Home';
import HomeService from './Component/HomeService';
import ServicesHero from './Component/ServicesHero';
import ValueSection from './Component/ValueSection';
import PricingPlans from './Component/PricingPlans';
import AboutHero from './Component/AboutHero';
import PestControl from './Component/PestControl';
import PestSolutionHero from './Component/PestSolutionHero';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <PestControl />
              <ValueSection />
              <PricingPlans />
              <HomeService />
            </>

          } />
          <Route path="/about" element={
            <>
              <AboutHero />
              <About />
              <ValueSection />
            </>
          } />
          <Route path="/PestSolution" element={<>
            <PestSolutionHero />

            <PestControl />
          </>
          } />

          <Route path="/services" element={
            <>
              <ServicesHero />
              <Service />
              <PricingPlans />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact />
            </>
          } />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
