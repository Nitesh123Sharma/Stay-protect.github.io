import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 shadow-inner">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">About Us</h2>
          <p className="leading-relaxed text-gray-600">
            At <span className="font-semibold">Stay Protect</span>, we are committed to providing top-notch pest control services for homes and businesses. Our eco-friendly and effective solutions ensure your spaces remain pest-free and safe.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Services</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="hover:text-blue-600 transition duration-200">Residential Pest Control</li>
            <li className="hover:text-blue-600 transition duration-200">Commercial Pest Control</li>
            <li className="hover:text-blue-600 transition duration-200">Termite Treatment</li>
            <li className="hover:text-blue-600 transition duration-200">Rodent Management</li>
            <li className="hover:text-blue-600 transition duration-200">Eco-Friendly Solutions</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Us</h2>
          <p className="text-gray-600 mb-2">Stay Protect</p>
          <p className="text-gray-600 mb-2">Dwarka Sector 25, New Delhi</p>
          <p className="text-gray-600 mb-2">Email: <a href="mailto:nitesh861sharma@gmail.com" className="text-blue-600 hover:underline">nitesh861sharma@gmail.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+919306919861" className="text-blue-600 hover:underline">+91-9306919861</a></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-gray-500">
        <p>&copy; 2025 PestGuard Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
