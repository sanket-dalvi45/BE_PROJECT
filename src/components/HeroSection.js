import React from 'react';

const HeroSection = ({ onShowForm }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-gradient-to-br from-indigo-50 to-purple-100 select-none">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          <span className="text-purple-600">Elevate Your Future</span> with AI-Powered Learning
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Our platform harnesses the power of AI to create a personalized learning journey, fostering cognitive growth and enhancing social skills for a smarter, more connected you.
        </p>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <button 
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors cursor-pointer"
            onClick={() => onShowForm('signup')}
          >
            Start Free
          </button>
          <button 
            className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            onClick={() => onShowForm('login')}
          >
            Login
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="https://aptidude.in/hero.webp" 
          alt="A person working on a laptop" 
          className="w-full max-w-sm md:max-w-md select-none" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
