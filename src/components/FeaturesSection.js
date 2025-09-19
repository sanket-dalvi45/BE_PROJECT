import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 text-center select-none cursor-default">
      <h2 className="text-3xl font-bold text-gray-800">Your Preparation Journey</h2>
      <p className="mt-2 text-gray-600">
        Follow a proven 4-step approach to master competitive skills and knowledge.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
            <span role="img" aria-label="Learn" className="text-white text-3xl">💡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">1. Learn</h3>
          <p className="mt-2 text-gray-600">
            Master core concepts through structured courses with clear explanations
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
            <span role="img" aria-label="Practice" className="text-white text-3xl">🧩</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">2. Practice</h3>
          <p className="mt-2 text-gray-600">
            Apply your knowledge to diverse problem sets with increasing difficulty levels
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
            <span role="img" aria-label="Compete" className="text-white text-3xl">⚡️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">3. Compete</h3>
          <p className="mt-2 text-gray-600">
            Test your skills in time-bound contests against peers to build speed and accuracy
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
            <span role="img" aria-label="Analyze" className="text-white text-3xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">4. Analyze</h3>
          <p className="mt-2 text-gray-600">
            Review your performance, identify improvement areas, and track progress
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
