import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopLogo from '../TopLogo/TopLogo';
import TypewriterText from '../TypewriterText/TypewriterText';
import SubtitleText from '../TypewriterText/SubtitleText';
import PortfolioGrid from '../PortfolioGrid/PortfolioGrid';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import { useScrollAnimations } from '../../hooks/useScrollAnimations';
import './PortfolioHero.css';

const PortfolioHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const {
    textAnimations,
    cardAnimations,
    logoOpacity,
    backgroundTransition,
    scrollIndicatorOpacity
  } = useScrollAnimations();

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

    return (
    <motion.main
      className="portfolio-hero"
      style={{
        '--background-transition': backgroundTransition
      }}
    >
      <TopLogo
        opacity={logoOpacity}
      />

      <TypewriterText
        text="sebmendo.design"
        textAnimations={textAnimations}
      />

      <SubtitleText
        line1="Sebastian Mendo is a Senior Product Designer"
        line2="specialized in building AI-first digital products."
        textAnimations={textAnimations}
      />

      <PortfolioGrid
        cardAnimations={cardAnimations}
        isMobile={isMobile}
      />

      <ScrollIndicator
        opacity={scrollIndicatorOpacity}
        text={isMobile ? "Swipe to explore projects" : "Scroll to explore my work"}
      />
    </motion.main>
  );
};

export default PortfolioHero; 