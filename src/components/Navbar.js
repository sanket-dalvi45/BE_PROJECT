import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand + Links */}
          <div className="flex items-center space-x-10">
            {/* Brand */}
            <a
              href="/"
              className="text-2xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition"
            >
              Navbar
            </a>

            {/* Links */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white font-medium hover:text-yellow-300 transition">
                Home
              </a>
              <a href="/" className="text-white font-medium hover:text-yellow-300 transition">
                Services
              </a>
              <a href="/" className="text-white font-medium hover:text-yellow-300 transition">
                Explore
              </a>
              <a href="/" className="text-white font-medium hover:text-yellow-300 transition">
                About Us
              </a>
            </div>
          </div>

          {/* Buttons + Search */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form className="flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="px-3 py-2 bg-white/90 border border-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-lg hover:bg-yellow-500 transition"
              >
                🔍
              </button>
            </form>

            {/* Buttons */}
            <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-50 transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-50 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
