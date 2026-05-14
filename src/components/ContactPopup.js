import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Copy, Check } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(null);

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

  const emails = [
    "contact@scaledivision.info",
    "kewengue1@gmail.com",
    "kewenguepro@outlook.fr"
  ];

  const copyToClipboard = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 1800);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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

          <div className="popup-title" data-fr>Prendre contact</div>
          <div className="popup-title" data-en>Get in touch</div>

          <motion.a
            href="https://www.linkedin.com/in/kelian-e-13a3b8254/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdQbZEonVTJ2OKB5ibT61VQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="choice-row"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              borderColor: "rgba(201,168,76,0.45)", 
              backgroundColor: "rgba(201,168,76,0.05)" 
            }}
          >
            <div className="choice-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="choice-info">
              <div className="choice-label">LinkedIn</div>
              <div className="choice-value" data-fr>Envoyer un message sur LinkedIn</div>
              <div className="choice-value" data-en>Send a message on LinkedIn</div>
            </div>
            <ExternalLink size={14} style={{ color: 'var(--muted)', flexShrink: 0 }} />
          </motion.a>

          <div style={{ 
            margin: '10px 0 6px', 
            fontSize: '10px', 
            fontWeight: 600, 
            letterSpacing: '0.18em', 
            textTransform: 'uppercase', 
            color: 'var(--muted)' 
          }}>
            <span data-fr>Par email</span>
            <span data-en>By email</span>
          </div>

          <div className="email-list">
            {emails.map((email, index) => (
              <motion.div
                key={email}
                className="email-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (index * 0.05) }}
                whileHover={{ borderColor: "rgba(201,168,76,0.35)" }}
              >
                <span className="email-addr">{email}</span>
                <motion.button
                  className={`copy-btn ${copiedEmail === email ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(email)}
                  whileHover={{ 
                    backgroundColor: "rgba(201,168,76,0.1)", 
                    borderColor: "var(--gold)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedEmail === email ? (
                    <Check size={10} />
                  ) : (
                    <Copy size={10} />
                  )}
                  <span style={{ marginLeft: '4px' }}>
                    {copiedEmail === email ? (
                      <>
                        <span data-fr>Copié</span>
                        <span data-en>Copied</span>
                      </>
                    ) : (
                      <>
                        <span data-fr>Copier</span>
                        <span data-en>Copy</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPopup;
