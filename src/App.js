import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(null);

  const handleShowForm = (formType) => {
    setShowForm(formType);
  };

  const handleCloseForm = () => {
    setShowForm(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar onShowForm={handleShowForm} />
      <HeroSection onShowForm={handleShowForm} />
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
      

      {/* Conditionally render forms based on state */}
      {showForm === 'login' && <LoginForm onClose={handleCloseForm} />}
      {showForm === 'signup' && <SignUpForm onClose={handleCloseForm} />}
    </div>
  );
}

export default App;