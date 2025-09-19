import React from 'react';
import Button from './Button';

const Navbar = ({ onShowForm }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg select-none">
      <div>
        <h1 className="text-2xl font-bold">PersonaLift</h1>
      </div>
      <div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="font-medium hover:text-slate-800 cursor-pointer">Home</a></li>
          <li><a href="#learn" className="font-medium hover:text-slate-800 cursor-pointer">Learn</a></li>
          <li><a href="#practice" className="font-medium hover:text-slate-800 cursor-pointer">Practice</a></li>
          <li><a href="#compete" className="font-medium hover:text-slate-800 cursor-pointer">Compete</a></li>
          <li><a href="#analyse" className="font-medium hover:text-slate-800 cursor-pointer">Analyse</a></li>
          <li><a href="#discuss" className="font-medium hover:text-slate-800 cursor-pointer">Discuss</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Button text="Login" onClick={() => onShowForm('login')} />
        <Button text="Sign Up" onClick={() => onShowForm('signup')} />
      </div>
    </nav>
  );
};

export default Navbar;
