import React, { useRef, useEffect, useState } from 'react';
import { 
  SalesforceCard, 
  WriterCard, 
  ChaseCard, 
  AnalyticsCard 
} from '../ProjectCards';
import './PortfolioGrid.css';

const PortfolioGrid = ({ cardAnimations, isMobile }) => {
  const { positions } = cardAnimations;
  const containerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [showMobileGrid, setShowMobileGrid] = useState(false);
  
  // Individual card components mapped to their positions
  const cardComponents = [
    <SalesforceCard 
      key="salesforce"
      position={positions.topLeft}
      cardAnimations={cardAnimations}
    />,
    <WriterCard 
      key="writer"
      position={positions.topRight}
      cardAnimations={cardAnimations}
    />,
    <ChaseCard 
      key="chase"
      position={positions.bottomLeft}
      cardAnimations={cardAnimations}
    />,
    <AnalyticsCard 
      key="analytics"
      position={positions.bottomRight}
      cardAnimations={cardAnimations}
    />
  ];

  // Show mobile grid when scrolled to cards section
  useEffect(() => {
    if (!isMobile) {
      setShowMobileGrid(false);
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollProgress = window.scrollY / (scrollHeight - windowHeight);
      
      // Show mobile grid when reaching cards section (around 70% scroll)
      setShowMobileGrid(scrollProgress >= 0.7);
    };

    // Check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Mobile swipe functionality
  useEffect(() => {
    if (!isMobile || !containerRef.current || !showMobileGrid) return;

    const container = containerRef.current;
    let startY = 0;
    let startTime = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      startTime = Date.now();
      isScrolling = false;
    };

    const handleTouchMove = (e) => {
      if (!startY) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = startY - currentY;
      
      if (Math.abs(diffY) > 10) {
        isScrolling = true;
      }
    };

    const handleTouchEnd = (e) => {
      if (!startY || !isScrolling) return;
      
      const endY = e.changedTouches[0].clientY;
      const diffY = startY - endY;
      const timeDiff = Date.now() - startTime;
      const velocity = Math.abs(diffY) / timeDiff;

      // Swipe threshold (50px or velocity > 0.5)
      if (Math.abs(diffY) > 50 || velocity > 0.5) {
        if (diffY > 0) {
          // Swipe up - next card
          setCurrentCard(prev => Math.min(prev + 1, cardComponents.length - 1));
        } else {
          // Swipe down - previous card
          setCurrentCard(prev => Math.max(prev - 1, 0));
        }
      }

      startY = 0;
      startTime = 0;
      isScrolling = false;
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentCard(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentCard(prev => Math.min(prev + 1, cardComponents.length - 1));
      } else if (e.key === 'Escape') {
        setShowMobileGrid(false);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, cardComponents.length, showMobileGrid]);

  // Mobile scroll to current card
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const targetCard = container.children[currentCard];
    
    if (targetCard) {
      targetCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [currentCard, isMobile]);

  if (isMobile && showMobileGrid) {
    return (
      <div className="portfolio-grid-mobile" ref={containerRef}>
        {/* Close button */}
        <button 
          className="mobile-grid-close" 
          onClick={() => setShowMobileGrid(false)}
          aria-label="Close card viewer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {cardComponents.map((card, index) => (
          <div key={index} className="mobile-card-container">
            {card}
          </div>
        ))}
        
        {/* Progress indicator */}
        <div className="mobile-progress-indicator">
          {cardComponents.map((_, index) => (
            <div 
              key={index}
              className={`progress-dot ${index === currentCard ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (isMobile && !showMobileGrid) {
    // Don't render anything on mobile until cards section is reached
    return null;
  }

  // Desktop grid
  return (
    <>
      {cardComponents}
    </>
  );
};

export default PortfolioGrid; 