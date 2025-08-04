# Individual Card Customization Guide

You now have **individual card components** for each portfolio project! This gives you complete control over styling, content, and functionality for each card.

## 📁 File Structure

```
src/components/ProjectCards/
├── SalesforceCard.js       # Salesforce project card
├── SalesforceCard.css      # Salesforce-specific styles
├── WriterCard.js           # Writer platform card
├── WriterCard.css          # Writer-specific styles
├── FinancialCard.js        # Financial dashboard card
├── FinancialCard.css       # Financial-specific styles
├── AnalyticsCard.js        # Analytics intelligence card
├── AnalyticsCard.css       # Analytics-specific styles
└── index.js                # Component exports
```

## 🎨 Card-Specific Features

### 1. **SalesforceCard** (Top-Left)
- **Background**: `#EAF8FF` (Light blue)
- **Features**:
  - Enterprise badge
  - Technology tags
  - Project year display
  - View project link
- **File**: `src/components/ProjectCards/SalesforceCard.js`

### 2. **WriterCard** (Top-Right) 
- **Background**: `#F6F0FD` (Light purple)
- **Features**:
  - Active status indicator with pulsing dot
  - Performance metrics (40% faster, 95% accuracy)
  - Case study link
  - Client information
- **File**: `src/components/ProjectCards/WriterCard.js`

### 3. **FinancialCard** (Bottom-Left)
- **Background**: `#D3E8FB` (Light blue)
- **Features**:
  - FinTech gradient badge
  - Animated progress bars (Approval Rate, Process Time)
  - Security badge with lock icon
  - Live demo link
- **File**: `src/components/ProjectCards/FinancialCard.js`

### 4. **AnalyticsCard** (Bottom-Right)
- **Background**: `#EBF2FD` (Light purple-blue)
- **Features**:
  - Trend indicator (+23%)
  - Interactive mini bar chart
  - Data points counter (2.5M)
  - View insights link
- **File**: `src/components/ProjectCards/AnalyticsCard.js`

## ✏️ How to Customize Each Card

### **Option 1: Direct Component Editing**

Edit the individual card component files:

```javascript
// src/components/ProjectCards/SalesforceCard.js
const SalesforceCard = ({ position, cardAnimations }) => {
  return (
    <motion.div className="salesforce-card-wrapper">
      <div className="salesforce-card">
        
        {/* Customize Header */}
        <div className="salesforce-header">
          <div className="salesforce-icon">🎯</div>  {/* Change icon */}
          <div className="salesforce-badge">New Badge</div>  {/* Change badge */}
        </div>
        
        {/* Customize Content */}
        <div className="salesforce-content">
          <h3 className="salesforce-title">
            Your Custom Title  {/* Change title */}
          </h3>
          <p className="salesforce-description">
            Your custom description...  {/* Change description */}
          </p>
          
          {/* Add/modify elements */}
          <div className="custom-section">
            <span>Your custom content</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
```

### **Option 2: Style Customization**

Edit the individual CSS files:

```css
/* src/components/ProjectCards/SalesforceCard.css */

/* Change background color */
.salesforce-card {
  background-color: #YOUR_COLOR;
}

/* Change text colors */
.salesforce-title {
  color: #YOUR_TITLE_COLOR;
}

/* Add custom animations */
.salesforce-card:hover {
  transform: translate(-50%, -50%) scale(1.05);
}

/* Add custom elements */
.custom-section {
  padding: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
}
```

## 🔧 Common Customizations

### **1. Change Card Colors**
```css
.your-card {
  background-color: #YOUR_BACKGROUND;
  border: 1px solid rgba(YOUR_RGB, 0.1);
}

.your-card:hover {
  box-shadow: 0 16px 48px rgba(YOUR_RGB, 0.15);
}
```

### **2. Add New Content Sections**
```javascript
<div className="new-section">
  <h4>Custom Section</h4>
  <p>Your content here</p>
</div>
```

### **3. Modify Links and Actions**
```javascript
<a href="https://your-link.com" className="custom-link">
  Custom Action →
</a>
```

### **4. Change Icons and Images**
```javascript
// Use different emoji
<div className="card-icon">🚀</div>

// Use image instead
<img src="/your-image.png" alt="Project" className="card-image" />
```

### **5. Add Interactive Elements**
```javascript
const [isHovered, setIsHovered] = useState(false);

<div 
  className="interactive-element"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {isHovered ? "Hovered!" : "Hover me"}
</div>
```

## 📱 Mobile Responsiveness

Each card includes responsive breakpoints:
- **768px**: Tablet adjustments
- **480px**: Mobile phone adjustments

Customize these in each card's CSS file:

```css
@media (max-width: 768px) {
  .your-card {
    /* Tablet styles */
  }
}

@media (max-width: 480px) {
  .your-card {
    /* Mobile styles */
  }
}
```

## 🎯 Adding New Cards

To add a fifth card:

1. **Create new component**: `src/components/ProjectCards/NewCard.js`
2. **Create styles**: `src/components/ProjectCards/NewCard.css`
3. **Export in index**: Add to `src/components/ProjectCards/index.js`
4. **Update PortfolioGrid**: Add to `src/components/PortfolioGrid/PortfolioGrid.js`
5. **Update animations**: Modify positioning in `src/hooks/useScrollAnimations.js`

## 🚀 Advanced Customizations

### **Data-Driven Content**
```javascript
// Create data file for each card
const salesforceData = {
  title: "Dynamic Title",
  metrics: [85, 92, 78],
  features: ["Feature 1", "Feature 2"]
};

// Use in component
{salesforceData.features.map(feature => (
  <span key={feature}>{feature}</span>
))}
```

### **Animation Customization**
```javascript
// Custom hover animations
const [isHovered, setIsHovered] = useState(false);

<motion.div
  animate={{ 
    scale: isHovered ? 1.05 : 1,
    rotateY: isHovered ? 5 : 0 
  }}
  transition={{ duration: 0.3 }}
>
```

### **Conditional Rendering**
```javascript
{showMetrics && (
  <div className="metrics-section">
    {/* Metrics content */}
  </div>
)}
```

## 💡 Tips & Best Practices

1. **Keep consistent dimensions** - All cards use `calc(50vw - 12px)` × `calc(50vh - 12px)`
2. **Maintain color harmony** - Use related color palettes
3. **Test mobile responsiveness** - Check all breakpoints
4. **Use semantic class names** - Keep CSS organized
5. **Optimize performance** - Avoid heavy animations

## 🎨 Example: Complete Card Customization

```javascript
// Custom card with new features
const CustomSalesforceCard = ({ position, cardAnimations }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <motion.div className="salesforce-card-wrapper">
      <div className="salesforce-card custom-variant">
        <div className="card-header">
          <img src="/salesforce-logo.png" alt="Salesforce" />
          <span className="live-indicator">Live</span>
        </div>
        
        <div className="card-body">
          <h3>Salesforce CX Platform</h3>
          <p>Advanced customer experience platform...</p>
          
          <div className="metrics-grid">
            <div className="metric">
              <span className="value">40%</span>
              <span className="label">Satisfaction ↑</span>
            </div>
            <div className="metric">
              <span className="value">2.5s</span>
              <span className="label">Response Time</span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="toggle-details"
          >
            {showDetails ? 'Hide' : 'Show'} Details
          </button>
          
          {showDetails && (
            <div className="details-panel">
              <p>Additional project information...</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
```

You now have complete control over each portfolio card! 🎉 