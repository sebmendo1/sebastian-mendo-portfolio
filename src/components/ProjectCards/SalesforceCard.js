import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './BaseCard.css';
import './SalesforceCard.css';

const SalesforceCard = ({ position, cardAnimations }) => {
  const { cardsOpacity, cardScale } = cardAnimations;
  const videoRef = useRef(null);
  const { saveScrollPosition } = useScrollPosition();

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  const handleCardClick = () => {
    saveScrollPosition();
  };

  return (
          <motion.div
        className="card-wrapper salesforce-card-wrapper"
        style={{
          '--card-x': position.x,
          '--card-y': position.y,
          '--card-opacity': position.opacity || cardsOpacity,
          '--card-scale': position.scale || cardScale,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <Link to="/salesforce" className="card-link" onClick={handleCardClick}>
        <div className="base-card salesforce-card">
          <div className="card-logo-center">
            <video
              ref={videoRef}
              src="/video/Salesforce - Contact Support - Portfolio.mp4"
              muted
              loop
              playsInline
              className="logo-video"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SalesforceCard;
