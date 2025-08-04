import React from 'react';
import { motion, useTransform } from 'framer-motion';
import './SubtitleText.css';

const SubtitleText = ({ 
  line1 = "Sebastian Mendo is a Senior Product Designer",
  line2 = "specialized in building AI-first digital products.",
  textAnimations 
}) => {
  const { subtitleOpacity, subtitleLine1Reveal, subtitleLine2Reveal } = textAnimations;

  return (
    <div className="subtitle-container">
      <motion.div 
        className="subtitle-content"
        style={{ 
          opacity: subtitleOpacity,
        }}
      >
        <div className="subtitle-text-wrapper">
          {/* First line */}
          <div className="subtitle-line-wrapper">
            <motion.span
              className="subtitle-text subtitle-line"
              style={{
                clipPath: useTransform(
                  subtitleLine1Reveal,
                  [0, 100],
                  ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
                )
              }}
            >
              {line1}
            </motion.span>
            
            {/* First line cursor */}
            <motion.div
              className="subtitle-cursor subtitle-cursor-line1"
              style={{
                left: useTransform(
                  subtitleLine1Reveal,
                  [0, 100],
                  ["0%", "100%"]
                ),
                opacity: useTransform(
                  subtitleLine1Reveal,
                  [0, 80, 100],
                  [1, 1, 0]
                )
              }}
            />
          </div>
          
          {/* Second line */}
          <div className="subtitle-line-wrapper">
            <motion.span
              className="subtitle-text subtitle-line"
              style={{
                clipPath: useTransform(
                  subtitleLine2Reveal,
                  [0, 100],
                  ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
                )
              }}
            >
              {line2}
            </motion.span>
            
            {/* Second line cursor */}
            <motion.div
              className="subtitle-cursor subtitle-cursor-line2"
              style={{
                left: useTransform(
                  subtitleLine2Reveal,
                  [0, 100],
                  ["0%", "100%"]
                ),
                opacity: useTransform(
                  subtitleLine2Reveal,
                  [0, 80, 100],
                  [1, 1, 0]
                )
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubtitleText; 