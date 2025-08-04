import React from 'react';
import { motion } from 'framer-motion';
import './TopLogo.css';

const TopLogo = ({ opacity }) => {
  return (
    <motion.div 
      className="top-logo"
      style={{ 
        opacity: opacity
      }}
    >
      <img 
        src="images/SebMendoDesign.png" 
        alt="Sebastian Mendo Design" 
        className="top-logo-image"
      />
    </motion.div>
  );
};

export default TopLogo; 