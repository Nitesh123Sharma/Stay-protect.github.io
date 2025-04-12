import React from 'react';

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 mt-16">
      <div className="container mx-auto px-6 lg:px-32">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Let’s connect! We are happy to assist with any inquiries.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img 
              src="/Contact.jpg" 
              alt="Contact Illustration"
              className="rounded-xl shadow-md w-full object-cover max-h-96"
            />
          </div>
          
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-700">Address:</p>
              <p className="ml-4 text-gray-700">
                Dwarka Sector 25, New Delhi, India
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-700">Email:</p>
              <p className="ml-4 text-gray-700">
                <a href="mailto:nitesh861sharma@gmail.com" className="hover:underline">nitesh861sharma@gmail.com</a>
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-700">Phone:</p>
              <p className="ml-4 text-gray-700">
                <a href="tel:+919306919861" className="hover:underline">+91-9306919861</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

