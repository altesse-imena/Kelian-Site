import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StarfieldCanvas from './components/StarfieldCanvas';
import AboutSection from './components/AboutSection';
import ProfilesSection from './components/ProfilesSection';
import DomainsSection from './components/DomainsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PortfolioPopup from './components/PortfolioPopup';
import ContactPopup from './components/ContactPopup';

function App() {
  const [language, setLanguage] = useState('fr');
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    document.body.className = `lang-${language}`;
  }, [language]);

  const openPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="App">
      <StarfieldCanvas />
      <Navigation 
        language={language} 
        setLanguage={setLanguage} 
      />
      <Hero openPopup={openPopup} />
      <div className="shimmer"></div>
      <AboutSection />
      <div className="shimmer"></div>
      <ProfilesSection />
      <div className="shimmer"></div>
      <DomainsSection />
      <div className="shimmer"></div>
      <ServicesSection />
      <div className="shimmer"></div>
      <ContactSection openPopup={openPopup} />
      <Footer />
      
      <PortfolioPopup 
        isOpen={activePopup === 'portfolio'} 
        onClose={closePopup} 
      />
      <ContactPopup 
        isOpen={activePopup === 'contact'} 
        onClose={closePopup} 
      />
    </div>
  );
}

export default App;
