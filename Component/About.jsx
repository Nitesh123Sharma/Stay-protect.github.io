import React from 'react';

export default function About() {
  return (
    <div>
      <section id="about" className="py-16 bg-purple-50 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in text-blue-600">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in-left">
              <p className="text-lg md:text-xl mb-4 leading-relaxed">
                At Stay Protect, we are committed to providing top-notch security solutions to ensure your safety and peace of mind. With a passion for excellence, we combine cutting-edge technology with expert knowledge to create the most effective security systems for your home and business. Our mission is simple: to provide you with complete security, no matter where you are.
              </p>
              <p className="text-lg md:text-xl mb-4 leading-relaxed">
                Our dedicated team of experts is always available to assist you in choosing the best security solutions. From surveillance systems to advanced alarm technologies, we work closely with you to tailor services that fit your needs perfectly. We believe in providing value by delivering results-driven security that keeps you safe and secure every day.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                With Stay Protect, you gain a partner that cares deeply about your safety. Trust us to secure what matters most to you – your home, your business, and your loved ones.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="./About image.jpg"
                alt="About Us"
                className="rounded-lg w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
