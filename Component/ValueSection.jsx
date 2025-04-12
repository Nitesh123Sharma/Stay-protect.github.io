import React from 'react'

export default function ValueSection() {
  return (
<section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-gray-800">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
          What Drives Us
        </h2>

        {/* Value, Vision, Mission Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Value Card */}
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Value
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are your trusted partner for effective pest management solutions. Our commitment to eco-friendly methods ensures a healthy environment for your home and business.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading provider of sustainable pest control solutions, ensuring a pest-free environment while preserving nature’s balance.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver innovative and safe pest management services, using cutting-edge techniques that prioritize customer satisfaction and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>    
)
}
