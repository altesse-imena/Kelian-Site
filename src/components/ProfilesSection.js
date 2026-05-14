import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProfilesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" }
    }
  };

  const profiles = [
    {
      icon: "◈",
      titleFr: "L'expert, le professionnel, le dirigeant",
      titleEn: "The expert, the professional, the executive",
      textFr: "Un parcours, des résultats, une expérience terrain dans un domaine précis. Scale Division prend cette expertise et en fait un programme rentable et scalable en ligne, à votre image.",
      textEn: "A track record, results, field experience in a specific domain. Scale Division takes that expertise and builds a profitable, scalable online program in your image.",
      conditionFr: "expertise maîtrisée, preuve sociale existante, demande réelle sur le marché.",
      conditionEn: "mastered expertise, existing social proof, real market demand."
    },
    {
      icon: "⬡",
      titleFr: "L'entreprise avec un savoir-faire propriétaire",
      titleEn: "The company with proprietary know-how",
      textFr: "Des méthodes, des process, une façon de faire qui se distingue. Scale Division transforme ce savoir collectif en produit pédagogique — nouvelle ligne de revenus et outil de visibilité puissant.",
      textEn: "Methods, processes, a distinctive way of operating. Scale Division transforms this collective knowledge into an educational product — a new revenue stream and a powerful visibility tool.",
      conditionFr: "réputation de marché établie, méthodes documentables, volonté de transmettre à grande échelle.",
      conditionEn: "established market reputation, documentable methods, will to share at scale."
    }
  ];

  return (
    <div className="forqui-section" id="forqui">
      <div className="forqui-inner" ref={ref}>
        <motion.p 
          className="label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span data-fr>Profils</span>
          <span data-en>Profiles</span>
        </motion.p>

        <motion.h2 
          className="h2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span data-fr>À qui s'adresse ce format ?</span>
          <span data-en>Who is this format for?</span>
        </motion.h2>

        <motion.p 
          className="lead"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span data-fr>Expert indépendant ou entreprise — la condition est la même : un domaine maîtrisé, la preuve que ça fonctionne, et des gens qui veulent apprendre.</span>
          <span data-en>Independent expert or company — the condition is the same: a mastered field, proof it works, and people who want to learn.</span>
        </motion.p>

        <div className="cards-row">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              className="who-card"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                borderColor: "rgba(201,168,76,0.38)",
                backgroundColor: "rgba(201,168,76,0.04)",
                transition: { duration: 0.32 }
              }}
            >
              <div className="who-icon">{profile.icon}</div>
              <div className="who-title">
                <span data-fr>{profile.titleFr}</span>
                <span data-en>{profile.titleEn}</span>
              </div>
              <div className="who-text" data-fr>{profile.textFr}</div>
              <div className="who-text" data-en>{profile.textEn}</div>
              <div className="who-cond">
                <strong data-fr>Ce que Scale Division recherche :</strong>
                <strong data-en>What Scale Division looks for:</strong>
                <span data-fr> {profile.conditionFr}</span>
                <span data-en> {profile.conditionEn}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesSection;
