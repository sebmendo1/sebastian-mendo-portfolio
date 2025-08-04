import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { getVideoUrl, useLocalVideos } from '../../config/videoHosting';
import './BaseCard.css';
import './SalesforceCard.css';

const SalesforceCard = ({ position, cardAnimations }) => {
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
      ? '/video/Salesforce - Contact Support - Portfolio.mp4'
      : getVideoUrl('salesforce', isMobile);
    setVideoUrl(url);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

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
              src={videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              className="logo-video"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SalesforceCard;
