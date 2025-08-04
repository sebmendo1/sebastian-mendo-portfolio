# Class-Based Styling System Guide

## 🎯 **Overview**

The portfolio cards have been refactored to use a modern class-based styling system that eliminates inline styles and provides better maintainability, consistency, and performance.

## 📁 **New File Structure**

```
src/components/ProjectCards/
├── BaseCard.css              # Shared base styles for all cards
├── SalesforceCard.js         # Uses base + specific styles
├── SalesforceCard.css        # Only Salesforce-specific styles
├── WriterCard.js             # Uses base + specific styles
├── WriterCard.css            # Only Writer-specific styles
├── FinancialCard.js          # Uses base + specific styles
├── FinancialCard.css         # Only Financial-specific styles
├── AnalyticsCard.js          # Uses base + specific styles
├── AnalyticsCard.css         # Only Analytics-specific styles
└── index.js                  # Component exports
```

## 🏗️ **Architecture**

### **Base Card System (`BaseCard.css`)**

**Core Wrapper Class:**
```css
.card-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(var(--card-x, 0), var(--card-y, 0));
  opacity: var(--card-opacity, 1);
  scale: var(--card-scale, 1);
  z-index: 5;
}
```

**Dynamic Values via CSS Custom Properties:**
- `--card-x`: Horizontal position (from Framer Motion)
- `--card-y`: Vertical position (from Framer Motion) 
- `--card-opacity`: Opacity animation (from Framer Motion)
- `--card-scale`: Scale animation (from Framer Motion)

### **Component Implementation**

**Before (Inline Styles):**
```javascript
<motion.div
  style={{
    position: "fixed",
    top: "50%", 
    left: "50%",
    x: position.x,
    y: position.y,
    opacity: cardsOpacity,
    scale: cardScale,
    zIndex: 5
  }}
>
```

**After (Class-Based):**
```javascript
<motion.div
  className="card-wrapper salesforce-card-wrapper"
  style={{
    '--card-x': position.x,
    '--card-y': position.y,
    '--card-opacity': cardsOpacity,
    '--card-scale': cardScale,
  }}
>
```

## 🎨 **Styling Pattern**

### **1. Import Order**
```javascript
import './BaseCard.css';      // Always import first
import './SpecificCard.css';  // Then component-specific styles
```

### **2. Class Naming Convention**
```html
<!-- Wrapper -->
<div className="card-wrapper [component]-card-wrapper">

<!-- Card -->
<div className="base-card [component]-card">

<!-- Header -->
<div className="card-header [component]-header">

<!-- Logo -->
<div className="card-logo [component]-logo">

<!-- Content -->
<div className="card-content [component]-content">

<!-- Title -->
<h3 className="card-title [component]-title">

<!-- Description -->
<p className="card-description [component]-description">

<!-- Tags -->
<div className="card-tags [component]-tags">
<span className="tag [component]-tag">

<!-- Footer -->
<div className="card-footer [component]-footer">

<!-- Links -->
<a className="card-link [view-specific-name]">
```

### **3. CSS Structure**
```css
/* Component-specific card styles */
.[component]-card {
  background-color: #SPECIFIC_COLOR;
}

.[component]-card:hover {
  box-shadow: 0 16px 48px rgba(SPECIFIC_RGB, 0.15);
}

/* Component-specific colors */
.[component]-title {
  color: #SPECIFIC_COLOR;
}

.[component]-description {
  color: #SPECIFIC_COLOR;
}

/* Component-specific elements */
.[component]-tag {
  background: rgba(SPECIFIC_RGB, 0.1);
  color: #SPECIFIC_COLOR;
}
```

## 🔧 **Benefits**

### **1. Performance**
- ✅ Reduced inline styles
- ✅ Better CSS caching
- ✅ Smaller bundle size
- ✅ Faster rendering

### **2. Maintainability**
- ✅ Centralized base styles
- ✅ DRY (Don't Repeat Yourself) principle
- ✅ Consistent patterns
- ✅ Easy to modify

### **3. Scalability**
- ✅ Easy to add new cards
- ✅ Shared responsive breakpoints
- ✅ Consistent hover effects
- ✅ Unified animation system

### **4. Developer Experience**
- ✅ Clear separation of concerns
- ✅ Better CSS debugging
- ✅ Reusable components
- ✅ Type-safe custom properties

## 📱 **Responsive Design**

### **Base Breakpoints (Applied to All Cards)**
```css
/* Desktop */
@media (min-width: 1200px) { /* Enhanced styles */ }

/* Tablet */
@media (max-width: 768px) { /* Reduced styles */ }

/* Mobile */
@media (max-width: 480px) { /* Minimal styles */ }
```

### **Component-Specific Responsive**
```css
/* Only component-specific responsive adjustments */
@media (max-width: 768px) {
  .writer-metrics { padding: 12px; }
  .financial-stats { margin-bottom: 12px; }
}
```

## 🎯 **Adding New Cards**

### **Step 1: Create Component**
```javascript
import './BaseCard.css';
import './NewCard.css';

const NewCard = ({ position, cardAnimations }) => {
  const { cardsOpacity, cardScale } = cardAnimations;

  return (
    <motion.div
      className="card-wrapper new-card-wrapper"
      style={{
        '--card-x': position.x,
        '--card-y': position.y,
        '--card-opacity': cardsOpacity,
        '--card-scale': cardScale,
      }}
    >
      <div className="base-card new-card">
        {/* Use base classes + new-specific classes */}
      </div>
    </motion.div>
  );
};
```

### **Step 2: Create Styles**
```css
/* NewCard.css */
.new-card {
  background-color: #YOUR_COLOR;
}

.new-card:hover {
  box-shadow: 0 16px 48px rgba(YOUR_RGB, 0.15);
}

.new-title {
  color: #YOUR_TEXT_COLOR;
}

.new-tag {
  background: rgba(YOUR_RGB, 0.1);
  color: #YOUR_COLOR;
}
```

## 🔍 **Debugging**

### **CSS Custom Properties**
Use browser dev tools to inspect custom properties:
```css
/* In dev tools */
--card-x: /* Current Framer Motion value */
--card-y: /* Current Framer Motion value */
--card-opacity: /* Current Framer Motion value */
--card-scale: /* Current Framer Motion value */
```

### **Class Inheritance**
Check that components inherit from base classes:
```html
<!-- Should see both classes applied -->
<div class="base-card salesforce-card">
<div class="card-header salesforce-header">
```

## 🚀 **Best Practices**

1. **Always import BaseCard.css first**
2. **Use both base and component classes**
3. **Only override specific properties**
4. **Maintain naming conventions**
5. **Test responsive breakpoints**
6. **Use CSS custom properties for dynamic values**
7. **Keep component styles focused and minimal**

## 🎨 **Customization Examples**

### **Change Card Background**
```css
.your-card {
  background-color: #NEW_COLOR;
}
```

### **Add Card Animation**
```css
.your-card {
  transition: all 0.3s ease;
}

.your-card:hover {
  transform: translate(-50%, -50%) translateY(-4px) scale(1.02);
}
```

### **Custom Elements**
```css
.your-special-element {
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 10px 0;
}
```

This new system provides a solid foundation for maintaining and extending the card components! 🎉 