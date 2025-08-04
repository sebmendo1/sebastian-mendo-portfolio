import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './BaseCard.css';
import './FinancialCard.css';

const ChaseCard = ({ position, cardAnimations }) => {
  const { cardsOpacity, cardScale } = cardAnimations;
  const videoRef = useRef(null);
  const { saveScrollPosition } = useScrollPosition();

  const handleMouseEnter = () => {
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current && videoRef.current.pause();
  };

  const handleCardClick = () => {
    saveScrollPosition();
  };

  return (
    <motion.div
      className="card-wrapper financial-card-wrapper"
      style={{
        '--card-x': position.x,
        '--card-y': position.y,
        '--card-opacity': position.opacity || cardsOpacity,
        '--card-scale': position.scale || cardScale,
      }}
    >
      <Link to="/chase" className="card-link" onClick={handleCardClick}>
        <div
          className="base-card financial-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-logo-center">
            <video
              ref={videoRef}
              src="/video/Chase-HELOC.mp4"
              className="logo-video"
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChaseCard;
