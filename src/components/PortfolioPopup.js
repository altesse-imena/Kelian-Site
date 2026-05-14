import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const PortfolioPopup = ({ isOpen, onClose }) => {
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const portfolioItems = [
    {
      name: "Virality Masterplan",
      url: "virality-masterplan-1.systeme.io",
      link: "https://virality-masterplan-1.systeme.io/virality"
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay open"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="popup-box"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            className="popup-close"
            onClick={onClose}
            whileHover={{ scale: 1.1, color: "var(--text)" }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={20} />
          </motion.button>

          <div className="popup-title" data-fr>Trusted By:</div>
          <div className="popup-title" data-en>Trusted By:</div>

          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-row"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ borderColor: "rgba(201,168,76,0.4)" }}
            >
              <div className="portfolio-info">
                <div className="portfolio-name">{item.name}</div>
                <div className="portfolio-url">{item.url}</div>
              </div>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-visit"
                whileHover={{ backgroundColor: "var(--gold-light)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={11} />
                <span data-fr>Visiter</span>
                <span data-en>Visit</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioPopup;
