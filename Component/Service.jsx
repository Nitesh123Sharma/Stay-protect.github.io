import React from 'react';

export default function Service() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Residential Pest Control.jpg"
              alt="Residential Pest Control"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Residential Pest Control</h3>
            <p className="text-gray-700">Keep your home free from pests with our customized solutions for a clean and safe environment.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Rodent Control Services.jpg"
              alt="Rodent Control Services"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rodent Control Services</h3>
            <p className="text-gray-700">Effective measures to prevent rodent infestations and protect your property from damage.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Mosquito & Fly Control.jpg"
              alt="Mosquito & Fly Control"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mosquito & Fly Control</h3>
            <p className="text-gray-700">Prevent disease-carrying mosquitoes and flies from disturbing your surroundings.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Ant Control Services.jpg"
              alt="Ant Control Services"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ant Control Services</h3>
            <p className="text-gray-700">Tailored solutions to control and eliminate ants from your premises effectively.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Emergency Pest Removal.jpg"
              alt="Emergency Pest Removal"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Pest Removal</h3>
            <p className="text-gray-700">Quick and efficient pest removal services for urgent pest problems.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
            <img
              src="./Eco-Friendly Pest Solutions.jpg"
              alt="Eco-Friendly Pest Solutions"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eco-Friendly Pest Solutions</h3>
            <p className="text-gray-700">Environmentally safe pest control solutions for a healthier living space.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
