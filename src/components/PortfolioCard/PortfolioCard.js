import React from 'react';
import { motion } from 'framer-motion';
import './PortfolioCard.css';

const PortfolioCard = ({ 
  project, 
  position, 
  cardAnimations 
}) => {
  const { cardsOpacity, cardScale } = cardAnimations;

  return (
    <motion.div
      className="portfolio-card-wrapper"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        x: position.x,
        y: position.y,
        opacity: cardsOpacity,
        scale: cardScale,
        zIndex: 5
      }}
    >
      <div 
        className="portfolio-card card-container"
        style={{
          backgroundColor: project.backgroundColor,
          color: project.textColor
        }}
      >
        <div className="card-emoji">
          {project.image}
        </div>
        
        <div className="card-content">
          <h3 
            className="card-title"
            style={{ color: project.textColor }}
          >
            {project.title}
          </h3>
          <p 
            className="card-description"
            style={{ color: project.textColor, opacity: 0.8 }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard; 