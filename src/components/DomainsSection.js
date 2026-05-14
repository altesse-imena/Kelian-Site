import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DomainsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedDomain, setSelectedDomain] = useState(null);

  const domains = [
    { icon: "💼", nameFr: "Entrepreneuriat", nameEn: "Entrepreneurship" },
    { icon: "📊", nameFr: "Finance", nameEn: "Finance" },
    { icon: "🏢", nameFr: "Immobilier", nameEn: "Real Estate" },
    { icon: "⚖️", nameFr: "Droit", nameEn: "Law" },
    { icon: "🏥", nameFr: "Santé", nameEn: "Health" },
    { icon: "🏆", nameFr: "Sport", nameEn: "Sport" },
    { icon: "💻", nameFr: "Tech", nameEn: "Tech" },
    { icon: "🎯", nameFr: "Management", nameEn: "Management" },
    { icon: "🏭", nameFr: "Industrie", nameEn: "Industry" }
  ];

  const domainVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="wrap" id="domains" style={{ paddingBottom: '60px' }} ref={ref}>
      <motion.p 
        className="label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span data-fr>Domaines</span>
        <span data-en>Fields</span>
      </motion.p>

      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span data-fr>Dans quel domaine êtes-vous expert ?</span>
        <span data-en>What is your field of expertise?</span>
      </motion.h2>

      <motion.div 
        className="domains-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            className={`dom ${selectedDomain === index ? 'selected' : ''}`}
            variants={domainVariants}
            whileHover={{
              backgroundColor: "rgba(201,168,76,0.07)",
              borderColor: "var(--gold)",
              y: -3,
              transition: { duration: 0.28 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDomain(selectedDomain === index ? null : index)}
            style={{
              backgroundColor: selectedDomain === index ? "rgba(201,168,76,0.1)" : undefined,
              borderColor: selectedDomain === index ? "var(--gold)" : undefined
            }}
          >
            <motion.span 
              className="dom-icon"
              animate={selectedDomain === index ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {domain.icon}
            </motion.span>
            <span className="dom-name" data-fr>{domain.nameFr}</span>
            <span className="dom-name" data-en>{domain.nameEn}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="domains-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p data-fr>Des milliers de personnes cherchent à s'éduquer —<br/>n'attendez plus, partagez et monétisez votre savoir.</p>
        <p data-en>Thousands of people are looking to educate themselves —<br/>don't wait, share and monetize your knowledge.</p>
      </motion.div>
    </div>
  );
};

export default DomainsSection;
