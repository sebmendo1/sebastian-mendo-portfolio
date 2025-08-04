import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { restoreScrollPosition, clearScrollPosition } = useScrollPosition();

  useEffect(() => {
    // If navigating to homepage, try to restore scroll position
    if (pathname === '/') {
      restoreScrollPosition();
    } else {
      // For project pages, scroll to top and clear any saved position
      window.scrollTo(0, 0);
      clearScrollPosition();
    }
  }, [pathname, restoreScrollPosition, clearScrollPosition]);

  return null;
};

export default ScrollToTop; 