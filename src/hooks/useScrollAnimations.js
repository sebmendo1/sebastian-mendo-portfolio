import { useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { animationConfig } from '../data/portfolio';

export const useScrollAnimations = () => {
  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Get scroll progress of the entire window
  const { scrollYProgress } = useScroll();

  // Typewriter animation transforms
  const textReveal = useTransform(
    scrollYProgress, 
    animationConfig.text.revealRange, 
    [0, 100]
  );
  
  const textOpacity = useTransform(
    scrollYProgress, 
    animationConfig.text.opacityRange, 
    animationConfig.text.opacityValues
  );
  
  const textScale = useTransform(
    scrollYProgress, 
    animationConfig.text.scaleRange, 
    [1, 0.8]
  );

  const cursorOpacity = useTransform(
    scrollYProgress, 
    animationConfig.text.cursorFadeRange, 
    [1, 1, 0]
  );

  // Subtitle animations
  const subtitleReveal = useTransform(
    scrollYProgress,
    animationConfig.text.subtitleRevealRange,
    [0, 100]
  );

  const subtitleOpacity = useTransform(
    scrollYProgress,
    animationConfig.text.subtitleOpacityRange,
    animationConfig.text.subtitleOpacityValues
  );

  // Individual line animations
  const subtitleLine1Reveal = useTransform(
    scrollYProgress,
    animationConfig.text.subtitleLine1Range,
    [0, 100]
  );

  const subtitleLine2Reveal = useTransform(
    scrollYProgress,
    animationConfig.text.subtitleLine2Range,
    [0, 100]
  );

  // Card animation transforms
  const cardsOpacity = useTransform(
    scrollYProgress, 
    animationConfig.cards.opacityRange, 
    [0, 1]
  );
  
  const cardScale = useTransform(
    scrollYProgress, 
    animationConfig.cards.scaleRange, 
    animationConfig.cards.scaleValues
  );

  // Card position transforms - different for mobile vs desktop
  const range = animationConfig.cards.positionRange;
  
  // Desktop positioning (2x2 grid)
  const desktopTopLeftX = useTransform(scrollYProgress, range, ["calc(-50vw + 25vw - 6px)", "calc(-25vw - 6px)"]);
  const desktopTopLeftY = useTransform(scrollYProgress, range, ["calc(-50vh + 25vh - 6px)", "calc(-25vh - 6px)"]);
  
  const desktopTopRightX = useTransform(scrollYProgress, range, ["calc(50vw - 25vw + 6px)", "calc(25vw + 6px)"]);
  const desktopTopRightY = useTransform(scrollYProgress, range, ["calc(-50vh + 25vh - 6px)", "calc(-25vh - 6px)"]);
  
  const desktopBottomLeftX = useTransform(scrollYProgress, range, ["calc(-50vw + 25vw - 6px)", "calc(-25vw - 6px)"]);
  const desktopBottomLeftY = useTransform(scrollYProgress, range, ["calc(50vh - 25vh + 6px)", "calc(25vh + 6px)"]);
  
  const desktopBottomRightX = useTransform(scrollYProgress, range, ["calc(50vw - 25vw + 6px)", "calc(25vw + 6px)"]);
  const desktopBottomRightY = useTransform(scrollYProgress, range, ["calc(50vh - 25vh + 6px)", "calc(25vh + 6px)"]);

  // Mobile positioning (single column)
  const mobileCardX = useTransform(scrollYProgress, range, ["0px", "0px"]);
  
  // Mobile Y positions and animations for one-by-one viewing
  const mobileCard1Opacity = useTransform(scrollYProgress, animationConfig.mobileCards.card1Range, animationConfig.mobileCards.cardOpacityValues);
  const mobileCard1Scale = useTransform(scrollYProgress, animationConfig.mobileCards.card1Range, animationConfig.mobileCards.cardScaleValues);
  const mobileCard1Y = useTransform(scrollYProgress, range, ["0vh", "0vh"]);

  const mobileCard2Opacity = useTransform(scrollYProgress, animationConfig.mobileCards.card2Range, animationConfig.mobileCards.cardOpacityValues);
  const mobileCard2Scale = useTransform(scrollYProgress, animationConfig.mobileCards.card2Range, animationConfig.mobileCards.cardScaleValues);
  const mobileCard2Y = useTransform(scrollYProgress, range, ["0vh", "0vh"]);

  const mobileCard3Opacity = useTransform(scrollYProgress, animationConfig.mobileCards.card3Range, animationConfig.mobileCards.cardOpacityValues);
  const mobileCard3Scale = useTransform(scrollYProgress, animationConfig.mobileCards.card3Range, animationConfig.mobileCards.cardScaleValues);
  const mobileCard3Y = useTransform(scrollYProgress, range, ["0vh", "0vh"]);

  const mobileCard4Opacity = useTransform(scrollYProgress, animationConfig.mobileCards.card4Range, animationConfig.mobileCards.cardOpacityValues);
  const mobileCard4Scale = useTransform(scrollYProgress, animationConfig.mobileCards.card4Range, animationConfig.mobileCards.cardScaleValues);
  const mobileCard4Y = useTransform(scrollYProgress, range, ["0vh", "0vh"]);

  // Choose positioning and animations based on screen size
  const topLeftX = isMobile ? mobileCardX : desktopTopLeftX;
  const topLeftY = isMobile ? mobileCard1Y : desktopTopLeftY;
  const topLeftOpacity = isMobile ? mobileCard1Opacity : cardsOpacity;
  const topLeftScale = isMobile ? mobileCard1Scale : cardScale;
  
  const topRightX = isMobile ? mobileCardX : desktopTopRightX;
  const topRightY = isMobile ? mobileCard2Y : desktopTopRightY;
  const topRightOpacity = isMobile ? mobileCard2Opacity : cardsOpacity;
  const topRightScale = isMobile ? mobileCard2Scale : cardScale;
  
  const bottomLeftX = isMobile ? mobileCardX : desktopBottomLeftX;
  const bottomLeftY = isMobile ? mobileCard3Y : desktopBottomLeftY;
  const bottomLeftOpacity = isMobile ? mobileCard3Opacity : cardsOpacity;
  const bottomLeftScale = isMobile ? mobileCard3Scale : cardScale;
  
  const bottomRightX = isMobile ? mobileCardX : desktopBottomRightX;
  const bottomRightY = isMobile ? mobileCard4Y : desktopBottomRightY;
  const bottomRightOpacity = isMobile ? mobileCard4Opacity : cardsOpacity;
  const bottomRightScale = isMobile ? mobileCard4Scale : cardScale;

  // Top logo animation - starts visible, disappears with text
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    [1, 1, 0]
  );

  // Scroll indicator animation
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    animationConfig.scroll.indicatorRange,
    animationConfig.scroll.indicatorValues
  );

  // Background color transition - grey to white as cards appear
  const backgroundTransition = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    [0, 1]
  );

  return {
    scrollYProgress,
    textAnimations: {
      textReveal,
      textOpacity,
      textScale,
      cursorOpacity,
      subtitleReveal,
      subtitleOpacity,
      subtitleLine1Reveal,
      subtitleLine2Reveal
    },
    cardAnimations: {
      // Desktop fallback values
      cardsOpacity,
      cardScale,
      // Individual card animations for mobile
      positions: {
        topLeft: { x: topLeftX, y: topLeftY, opacity: topLeftOpacity, scale: topLeftScale },
        topRight: { x: topRightX, y: topRightY, opacity: topRightOpacity, scale: topRightScale },
        bottomLeft: { x: bottomLeftX, y: bottomLeftY, opacity: bottomLeftOpacity, scale: bottomLeftScale },
        bottomRight: { x: bottomRightX, y: bottomRightY, opacity: bottomRightOpacity, scale: bottomRightScale }
      }
    },
    logoOpacity,
    backgroundTransition,
    scrollIndicatorOpacity
  };
}; 