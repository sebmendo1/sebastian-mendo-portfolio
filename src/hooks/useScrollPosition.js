import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_POSITION_KEY = 'portfolioScrollPosition';
const BACK_BUTTON_KEY = 'portfolioBackButton';

export const useScrollPosition = () => {
  const location = useLocation();

  // Save current scroll position
  const saveScrollPosition = () => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());
    // Clear any back button flag
    sessionStorage.removeItem(BACK_BUTTON_KEY);
  };

  // Set scroll to bottom of homepage (for back button)
  const scrollToBottom = () => {
    sessionStorage.setItem(BACK_BUTTON_KEY, 'true');
    // Clear any saved scroll position
    sessionStorage.removeItem(SCROLL_POSITION_KEY);
  };

  // Restore saved scroll position or scroll to bottom if back button was used
  const restoreScrollPosition = () => {
    const isBackButton = sessionStorage.getItem(BACK_BUTTON_KEY);
    const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
    
    if (isBackButton) {
      // Calculate bottom position based on screen size
      const isMobile = window.innerWidth <= 768;
      let targetPosition;
      
      if (isMobile) {
        // Mobile: scroll to trigger the mobile card viewer
        targetPosition = window.innerHeight * 4.6; // 460vh to trigger mobile viewer
      } else {
        // Desktop: homepage is 300vh, scroll to around 80% to show cards
        targetPosition = window.innerHeight * 2.4; // 240vh to show cards fully
      }
      
      requestAnimationFrame(() => {
        window.scrollTo(0, targetPosition);
      });
      sessionStorage.removeItem(BACK_BUTTON_KEY);
    } else if (savedPosition) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      });
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
    }
  };

  // Clear scroll position (for fresh navigation)
  const clearScrollPosition = () => {
    sessionStorage.removeItem(SCROLL_POSITION_KEY);
    sessionStorage.removeItem(BACK_BUTTON_KEY);
  };

  return {
    saveScrollPosition,
    restoreScrollPosition,
    clearScrollPosition,
    scrollToBottom
  };
};

export default useScrollPosition; 