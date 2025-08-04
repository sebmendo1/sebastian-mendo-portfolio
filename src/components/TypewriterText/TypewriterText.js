import React from 'react';
import { motion, useTransform } from 'framer-motion';
import './TypewriterText.css';

const TypewriterText = ({ 
  text = "sebmendo.design", 
  textAnimations 
}) => {
  const { textReveal, textOpacity, textScale, cursorOpacity } = textAnimations;

  return (
    <div className="typewriter-container">
      <motion.div 
        className="typewriter-content"
        style={{ 
          opacity: textOpacity,
          scale: textScale
        }}
      >
        <div className="typewriter-text-wrapper">
          <h1 className="typewriter-title main-title">
            <motion.span
              className="typewriter-text"
              style={{
                clipPath: useTransform(
                  textReveal,
                  [0, 100],
                  ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
                )
              }}
            >
              {text}
            </motion.span>
          </h1>
          
          {/* Typing cursor */}
          <motion.div
            className="typewriter-cursor"
            style={{
              left: useTransform(
                textReveal,
                [0, 100],
                ["0%", "100%"]
              ),
              opacity: cursorOpacity
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TypewriterText; 