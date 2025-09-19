import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 select-none cursor-default">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">XYZ</h3>
          <p className="text-sm">
            Empowering minds through comprehensive aptitude training and competitive exam preparation.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Mock Tracker</li>
            <li>Learn</li>
            <li>Practice</li>
            <li>Compete</li>
            <li>Discuss</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Popular Exams</h4>
          <ul className="space-y-1 text-sm">
            <li>CUET</li>
            <li>CAT</li>
            <li>SSC</li>
            <li>Banking</li>
            <li>Railways</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact & Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-2 md:mb-0">© 2025 AptiDude. All rights reserved.</p>
        <div className="space-x-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
