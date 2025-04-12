import React from 'react';
import { Link } from 'react-router-dom';


export default function HomeService() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Services</h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="./HomeServices.jpg"
              alt="Eco-Friendly Pest Control"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 text-left space-y-10">
            <h3 className="text-2xl font-semibold text-gray-800">
              Eco-Friendly Solutions to Protect Your Family and Property
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our advanced, environmentally safe pest control solutions ensure
              your living space remains clean, comfortable, and pest-free — without compromising the health
              of your loved ones or the environment.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              <Link
                to="/services">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
