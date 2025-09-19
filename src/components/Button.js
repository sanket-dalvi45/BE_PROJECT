import React from 'react';

const Button = ({ text, onClick, type = 'button' }) => {
  const baseClasses = "px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer select-none";

  const buttonClasses = text === 'Login'
    ? "bg-white text-purple-600 hover:bg-gray-200"
    : "bg-purple-800 text-white hover:bg-purple-900";

  return (
    <button
      type={type}
      className={`${baseClasses} ${buttonClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
