import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MessageCircle } from 'lucide-react';

const Hero = ({ openPopup }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-monogram" variants={itemVariants} style={{ marginBottom: '0px' }}>
        <motion.img 
          src="/images/SD-LOGO.png" 
          alt="Scale Division" 
          width="250" 
          height="250"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div className="hero-subtitle" variants={itemVariants} style={{ marginTop: '-10px' }}>
        <span className="gold" data-fr>Transformez votre savoir en revenus.</span>
        <span className="gold" data-en>Turn your knowledge into income.</span>
      </motion.div>

      <motion.p className="hero-eyebrow" variants={itemVariants}>
        Scale Division · Info Product
      </motion.p>

      <motion.h1 className="hero-title" variants={itemVariants}>
        <span data-fr>Vous maîtrisez un domaine ?<br/><span className="gold">Scale Division le monétise.</span></span>
        <span data-en>You master a field?<br/><span className="gold">Scale Division monetizes it.</span></span>
      </motion.h1>

      <motion.p className="hero-tagline" variants={itemVariants}>
        <span data-fr>Transformez votre savoir-faire en un programme d'éducation digital.</span>
        <span data-en>Transform your expertise into a digital education program.</span>
      </motion.p>

      <motion.p className="hero-sub" variants={itemVariants}>
        <span data-fr>Pour les experts indépendants comme pour les entreprises.</span>
        <span data-en>For independent experts and companies alike.</span>
      </motion.p>

      <motion.div className="hero-cta" variants={itemVariants}>
        <motion.button
          onClick={() => openPopup('portfolio')}
          className="btn-gold"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Briefcase size={13} />
          <span data-fr>Découvrir</span>
          <span data-en>Discover</span>
        </motion.button>
        <motion.button
          onClick={() => openPopup('contact')}
          className="btn-ghost"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <MessageCircle size={13} />
          <span data-fr>Prendre contact</span>
          <span data-en>Get in touch</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
