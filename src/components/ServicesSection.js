import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      num: "01",
      titleFr: "Structuration pédagogique",
      titleEn: "Pedagogical structure",
      descFr: "Votre savoir est organisé en modules clairs avec des objectifs précis et une progression logique pour l'apprenant.",
      descEn: "Your knowledge is organized into clear modules with precise objectives and logical progression for the learner."
    },
    {
      num: "02",
      titleFr: "Infrastructure digitale",
      titleEn: "Digital infrastructure",
      descFr: "Plateforme, tunnel de vente, CRM, automatisations — l'outil complet pour que votre programme tourne sans friction.",
      descEn: "Platform, sales funnel, CRM, automations — everything so your program runs without friction."
    },
    {
      num: "03",
      titleFr: "Lancement & acquisition",
      titleEn: "Launch & acquisition",
      descFr: "Meta Ads, LinkedIn, bootcamp de validation — les premières inscriptions générées, le lancement se fait avec impact.",
      descEn: "Meta Ads, LinkedIn, validation bootcamp — first sign-ups generated, the launch lands with impact."
    },
    {
      num: "04",
      titleFr: "Scaling continu",
      titleEn: "Continuous scaling",
      descFr: "A/B tests, nouveaux canaux, ajustements réguliers — le programme devient plus performant et rentable dans le temps.",
      descEn: "A/B tests, new channels, regular adjustments — the program grows more effective and profitable over time."
    }
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
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
    <div className="wrap" id="services" ref={ref}>
      <motion.p 
        className="label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span data-fr>Ce que fait Scale Division</span>
        <span data-en>What Scale Division does</span>
      </motion.p>

      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span data-fr>Vous apportez l'expertise.<br/>Scale Division <span className="gold">s'occupe du reste.</span></span>
        <span data-en>You bring the expertise.<br/>Scale Division <span className="gold">handles the rest.</span></span>
      </motion.h2>

      <motion.div 
        className="steps"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            className="step"
            variants={stepVariants}
            whileHover={{
              borderColor: "rgba(201,168,76,0.35)",
              backgroundColor: "rgba(201,168,76,0.04)",
              transition: { duration: 0.28 }
            }}
          >
            <motion.div 
              className="step-n"
              whileHover={{ scale: 1.1, color: "rgba(201,168,76,0.3)" }}
              transition={{ duration: 0.2 }}
            >
              {step.num}
            </motion.div>
            <div className="step-t" data-fr>{step.titleFr}</div>
            <div className="step-t" data-en>{step.titleEn}</div>
            <div className="step-d" data-fr>{step.descFr}</div>
            <div className="step-d" data-en>{step.descEn}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
