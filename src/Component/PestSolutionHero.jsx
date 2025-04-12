import React from 'react'
import { Link } from 'react-router-dom'


export default function PestSolutionHero() {
  return (
    <section
    className="h-screen flex items-center justify-center text-white mt-16"
    style={{
      backgroundImage: `url('/PestSolutionHero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="z-10 text-center max-w-2xl mx-auto px-4">
  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
    Advanced Pest Control Solutions
  </h1>
  <p className="text-lg md:text-2xl mb-8 animate-fade-in-up" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
    Stay Protect offers innovative and eco-friendly pest control solutions for your home and business. 
    Our expert team ensures your space remains pest-free with safe and effective methods.
  </p>
  <button 
    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-bounce">
    <Link to="/contact">
      Contact Us
    </Link>
  </button>
</div>
s
  </section>

  )
}
