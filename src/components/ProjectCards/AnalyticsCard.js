import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './BaseCard.css';
import './AnalyticsCard.css';

const AnalyticsCard = ({ position, cardAnimations }) => {
  const { cardsOpacity, cardScale } = cardAnimations;
  const { saveScrollPosition } = useScrollPosition();

  const handleCardClick = () => {
    saveScrollPosition();
  };

  return (
    <motion.div
      className="card-wrapper analytics-card-wrapper"
      style={{
        '--card-x': position.x,
        '--card-y': position.y,
        '--card-opacity': position.opacity || cardsOpacity,
        '--card-scale': position.scale || cardScale,
      }}
    >
      <Link to="/chorus" className="card-link" onClick={handleCardClick}>
        <div className="base-card analytics-card">
          <div className="card-logo-center">
            <img src="/images/Chorus-Main.png" alt="Chorus by Zoominfo" className="logo-image" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnalyticsCard; 