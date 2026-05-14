import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';

const ContactSection = ({ openPopup }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="contact-section" id="contact" ref={ref}>
      <motion.p 
        className="label" 
        style={{ marginBottom: '14px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span data-fr>Contact</span>
        <span data-en>Contact</span>
      </motion.p>

      <motion.h2 
        className="h2" 
        style={{ marginBottom: '14px', fontSize: 'clamp(22px, 3.2vw, 42px)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span data-fr>Vous avez l'expertise.<br/>Scale Division <span className="gold">la structure.</span></span>
        <span data-en>You have the expertise.<br/>Scale Division <span className="gold">structures it.</span></span>
      </motion.h2>

      <motion.p 
        className="lead" 
        style={{ 
          margin: '0 auto 14px', 
          textAlign: 'center', 
          fontSize: 'clamp(16px, 1.7vw, 20px)', 
          maxWidth: '560px' 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span data-fr>Un premier échange de 20 à 30 minutes suffit pour évaluer le potentiel de votre projet.</span>
        <span data-en>A first 20 to 30 minute conversation is enough to assess the potential of your project.</span>
      </motion.p>

      <motion.div 
        className="contact-btns"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          onClick={() => openPopup('contact')}
          className="btn-mail-cta"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Mail size={15} />
          <span data-fr>Envoyer un email</span>
          <span data-en>Send an email</span>
        </motion.button>

        <motion.a
          href="https://www.linkedin.com/in/kelian-e-13a3b8254/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdQbZEonVTJ2OKB5ibT61VQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-linkedin"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          <span data-fr>Contacter via LinkedIn</span>
          <span data-en>Contact via LinkedIn</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ContactSection;
