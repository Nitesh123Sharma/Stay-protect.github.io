import React from "react";

export default function PricingPlans() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center text-blue-700 mb-6">
          Choose Your Package
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Perfect Plans Crafted for Your Protection 
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-200 transform hover:scale-110 transition-all">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Basic
            </h3>
            <p className="text-5xl font-bold text-gray-800">₹7,999</p>
            <p className="text-gray-500 mb-6">Monthly Billing</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ 24/7 Emergency Response</li>
              <li>✔️ Eco-Friendly Solutions</li>
              <li>✔️ Licensed Pest Experts</li>
              <li>✔️ Same-Day Guarantee</li>
              <li>✔️ Pet-Safe Treatments</li>
              <li>✔️ Inspection Reports</li>
            </ul>
            
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-200 transform hover:scale-110 transition-all">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Premium
            </h3>
            <p className="text-5xl font-bold text-gray-800">₹11,999</p>
            <p className="text-gray-500 mb-6">Monthly Billing</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ 24/7 Emergency Response</li>
              <li>✔️ Eco-Friendly Solutions</li>
              <li>✔️ Licensed Pest Experts</li>
              <li>✔️ Same-Day Guarantee</li>
              <li>✔️ Pet-Safe Treatments</li>
              <li>✔️ Inspection Reports</li>
            </ul>
           
          </div>

          {/* Expert Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-200 transform hover:scale-110 transition-all">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Expert
            </h3>
            <p className="text-5xl font-bold text-gray-800">₹24,999</p>
            <p className="text-gray-500 mb-6">Monthly Billing</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ 24/7 Emergency Response</li>
              <li>✔️ Eco-Friendly Solutions</li>
              <li>✔️ Licensed Pest Experts</li>
              <li>✔️ Same-Day Guarantee</li>
              <li>✔️ Pet-Safe Treatments</li>
              <li>✔️ Inspection Reports</li>
            </ul>
            
          </div>

          {/* Commercial Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-blue-200 transform hover:scale-110 transition-all">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Commercial
            </h3>
            <p className="text-5xl font-bold text-gray-800">₹39,999</p>
            <p className="text-gray-500 mb-6">Monthly Billing</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔️ 24/7 Emergency Response</li>
              <li>✔️ Eco-Friendly Solutions</li>
              <li>✔️ Licensed Pest Experts</li>
              <li>✔️ Same-Day Guarantee</li>
              <li>✔️ Pet-Safe Treatments</li>
              <li>✔️ Inspection Reports</li>
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
}
