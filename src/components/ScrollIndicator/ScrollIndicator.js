import React from 'react';
import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = ({ opacity, text = "Scroll to explore my work" }) => {
  return (
    <motion.div 
      className="scroll-indicator"
      style={{ opacity }}
    >
      <div className="scroll-content">
        <span className="scroll-text">{text}</span>
        
        {/* Animated scroll icon */}
        <motion.div 
          className="scroll-icon"
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg 
            width="20" 
            height="28" 
            viewBox="0 0 20 28" 
            fill="none"
            className="scroll-mouse"
          >
            {/* Mouse outline */}
            <rect 
              x="1" 
              y="1" 
              width="18" 
              height="26" 
              rx="9" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
            />
            
            {/* Scroll wheel */}
            <motion.rect 
              x="8" 
              y="6" 
              width="4" 
              height="6" 
              rx="2" 
              fill="currentColor"
              animate={{ y: [6, 12, 6] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </svg>
        </motion.div>
        
        {/* Subtle progress dots */}
        <div className="scroll-dots">
          <motion.div 
            className="scroll-dot"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="scroll-dot"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div 
            className="scroll-dot"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator; 