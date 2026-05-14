import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" }
    }
  };

  const pillars = [
    {
      num: "01",
      titleFr: "Structuration du savoir",
      titleEn: "Knowledge structuring",
      descFr: "Votre expertise est transformée en contenu pédagogique clair, progressif et actionnable.",
      descEn: "Your expertise is turned into clear, progressive, and actionable educational content."
    },
    {
      num: "02",
      titleFr: "Construction de l'infrastructure",
      titleEn: "Infrastructure build",
      descFr: "Plateforme, tunnel de vente, CRM, automatisations — tout ce qu'il faut pour que le programme tourne et vende.",
      descEn: "Platform, sales funnel, CRM, automations — everything needed for the program to run and sell."
    },
    {
      num: "03",
      titleFr: "Distribution & Scaling",
      titleEn: "Distribution & Scaling",
      descFr: "Publicité, acquisition, optimisation continue — le programme est distribué et les résultats s'améliorent dans le temps.",
      descEn: "Advertising, acquisition, continuous optimization — the program is distributed and results improve over time."
    }
  ];

  return (
    <div className="wrap" id="whoweare" ref={ref}>
      <motion.p 
        className="label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span data-fr>Qui sommes-nous</span>
        <span data-en>Who we are</span>
      </motion.p>

      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span data-fr>Une structure dédiée à la<br/>monétisation de l'expertise en ligne</span>
        <span data-en>A structure dedicated to<br/>monetizing expertise online</span>
      </motion.h2>

      <div className="intro-grid">
        <motion.div 
          className="intro-left"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="big-letter">SD</span>
          <p data-fr>Scale Division est une structure spécialisée dans la création et la distribution de formations en ligne — construites autour d'un savoir-faire qui a de la valeur sur le marché.</p>
          <p data-fr>L'expertise est prise en charge dans sa totalité : structuration du contenu, mise en place de l'infrastructure technique, acquisition et scaling.</p>
          <p data-en>Scale Division is a structure specialized in creating and distributing online training programs — built around expertise that carries real market value.</p>
          <p data-en>Expertise is handled end-to-end: content structuring, technical infrastructure, acquisition, and scaling.</p>
        </motion.div>

        <motion.div 
          className="intro-right"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              className="pilier"
              variants={itemVariants}
              whileHover={{
                borderLeftColor: "var(--gold)",
                backgroundColor: "rgba(201,168,76,0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="pilier-num">{pillar.num}</div>
              <div className="pilier-title" data-fr>{pillar.titleFr}</div>
              <div className="pilier-title" data-en>{pillar.titleEn}</div>
              <div className="pilier-desc" data-fr>{pillar.descFr}</div>
              <div className="pilier-desc" data-en>{pillar.descEn}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
