import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ language, setLanguage }) => {

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img 
        src="/images/SD-LOGO.png" 
        alt="Scale Division" 
        className="nav-logo"
        style={{ height: '50px' }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      <div className="lang-toggle">
        <motion.button
          className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
          onClick={() => setLanguage('fr')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FR
        </motion.button>
        <motion.button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
