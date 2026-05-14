import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src="/images/SD-LOGO.PNG" 
        alt="Scale Division" 
        className="footer-logo"
        style={{ height: '43px' }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      <p className="footer-copy">Scale Division · Info Product · 2025</p>
    </motion.footer>
  );
};

export default Footer;
