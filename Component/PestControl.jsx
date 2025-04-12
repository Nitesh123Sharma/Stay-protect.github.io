import React from 'react';

export default function PestControl() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-32">
        <h2 className="text-4xl font-bold text-gray-700 text-center mb-8">
          Pest Control Solutions
        </h2>
        <p className="text-lg text-gray-500 text-center mb-12">
          Safe and effective pest control solutions for all your pest problems.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pest Solutions Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pest Solutions</h3>
            <p className="text-gray-600 mb-4">
              We offer reliable and safe pest control solutions for various pests, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Termites </li>
              <li>Mosquitoes </li>
              <li>Rodents</li>
            </ul>
          </div>

          {/* Techniques Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Techniques Used</h3>
            <p className="text-gray-600 mb-4">
              We use modern and effective techniques to eliminate pests safely. Some of the methods we use include:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Eco-friendly chemicals</li>
              <li>Ultrasonic repellents</li>
              <li>Physical traps</li>
              <li>Biological pest control</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Environmentally Safe Solutions Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Environmentally Safe Solutions</h3>
            <p className="text-gray-600 mb-4">
              Our solutions are safe for your family, pets, and the environment. We focus on:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Non-toxic treatments</li>
              <li>Natural pest deterrents</li>
              <li>Minimal chemical use</li>
              <li>Safe disposal methods</li>
            </ul>
          </div>

          {/* Pest Problem Identification Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">How to Identify Pest Problems</h3>
            <p className="text-gray-600 mb-4">
              Knowing the signs of a pest problem is crucial. Look out for:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Unusual noises (for rodents)</li>
              <li>Small bite marks or droppings</li>
              <li>Damaged furniture or wood (for termites)</li>
              <li>Itchy bites (for mosquitoes)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
