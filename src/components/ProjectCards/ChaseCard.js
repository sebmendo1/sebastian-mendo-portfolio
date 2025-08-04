import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getVideoUrl, useLocalVideos } from '../../config/videoHosting';
import './BaseCard.css';
import './FinancialCard.css';

const ChaseCard = ({ position, cardAnimations }) => {
  const { cardsOpacity, cardScale } = cardAnimations;
  const videoRef = useRef(null);
  const { saveScrollPosition } = useScrollPosition();
  const [videoUrl, setVideoUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set video URL based on environment and device
    const url = useLocalVideos 
      ? '/video/Chase-HELOC.mp4'
      : getVideoUrl('chase', isMobile);
    setVideoUrl(url);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

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
              src={videoUrl}
              className="logo-video"
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChaseCard;
