export const portfolioProjects = [
  {
    id: 1,
    title: "Salesforce Customer Experience",
    description: "Redesigned support interface improving customer satisfaction by 40%. Modern chat system with intelligent routing and real-time analytics dashboard.",
    image: "🔵",
    color: "#0066CC",
    backgroundColor: "#EAF8FF",
    textColor: "#1a365d"
  },
  {
    id: 2,
    title: "Writer Content Platform",
    description: "AI-powered writing assistant helping content creators plan, write, and optimize their marathon training guides and editorial content.",
    image: "✍️",
    color: "#6B46C1",
    backgroundColor: "#F6F0FD",
    textColor: "#44337A"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Streamlined loan application process with personalized recommendations, real-time approval status tracking, and risk assessment tools.",
    image: "💰",
    color: "#2563EB",
    backgroundColor: "#D3E8FB",
    textColor: "#1e3a8a"
  },
  {
    id: 4,
    title: "Analytics Intelligence",
    description: "Data visualization platform turning complex metrics into actionable insights with interactive charts, predictive modeling, and automated reporting.",
    image: "📊",
    color: "#7C3AED",
    backgroundColor: "#EBF2FD",
    textColor: "#553C9A"
  }
];

export const animationConfig = {
  text: {
    revealRange: [0, 0.35],
    opacityRange: [0, 0.35, 0.6, 0.8],
    opacityValues: [0, 1, 1, 0],
    scaleRange: [0.6, 0.8],
    cursorFadeRange: [0, 0.35, 0.42],
    subtitleRevealRange: [0.42, 0.52],
    subtitleOpacityRange: [0.42, 0.52, 0.6, 0.8],
    subtitleOpacityValues: [0, 1, 1, 0],
    subtitleLine1Range: [0.42, 0.47],
    subtitleLine2Range: [0.47, 0.52]
  },
  cards: {
    opacityRange: [0.7, 0.9],
    scaleRange: [0.7, 1],
    positionRange: [0.7, 1],
    scaleValues: [0.7, 1]
  },
  mobileCards: {
    // Mobile-specific ranges for one-by-one viewing with better spacing
    card1Range: [0.7, 0.72, 0.82, 0.84],
    card2Range: [0.78, 0.8, 0.9, 0.92],
    card3Range: [0.86, 0.88, 0.98, 1.0],
    card4Range: [0.94, 0.96, 1.0, 1.0],
    cardOpacityValues: [0, 1, 1, 0],
    cardScaleValues: [0.9, 1, 1, 0.9]
  },
  scroll: {
    indicatorRange: [0, 0.8, 1],
    indicatorValues: [1, 1, 0]
  }
}; 