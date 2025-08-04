import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ProjectPage.css';

const WriterPage = () => {
  const { scrollToBottom } = useScrollPosition();

  const handleBackClick = () => {
    scrollToBottom();
  };

  return (
    <div className="project-page">
      <div className="project-header">
        <Link to="/" className="back-button" onClick={handleBackClick}>
          ← Back to Portfolio
        </Link>
        <div className="project-logo">
          <img src="/images/logos/WRITER.png" alt="Writer" />
        </div>
      </div>

      <div className="project-content">
        <div className="project-intro">
          <h2>Writer AI Platform</h2>
          <p className="project-subtitle">
            Designing the next generation of AI-powered writing assistance for enterprise teams
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Lead Product Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">12 months</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">AI/ML, Product, Engineering</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">2024</span>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h2>Challenge</h2>
          <p>
            Enterprise teams needed an AI writing tool that could maintain brand voice consistency 
            while scaling content creation across multiple departments. Existing solutions lacked 
            the sophistication to handle complex business requirements and compliance standards.
          </p>
        </div>

        <div className="project-section">
          <h2>Solution</h2>
          <p>
            We built an AI-first writing platform that learns from company-specific style guides, 
            maintains brand consistency, and provides real-time collaboration features. The interface 
            seamlessly integrates AI suggestions with human creativity.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Brand Voice Training</h3>
              <p>AI model customization based on company style guides and tone</p>
            </div>
            <div className="feature-item">
              <h3>Real-time Collaboration</h3>
              <p>Multi-user editing with AI-powered suggestion consensus</p>
            </div>
            <div className="feature-item">
              <h3>Compliance Checking</h3>
              <p>Automated review for legal, regulatory, and brand guidelines</p>
            </div>
            <div className="feature-item">
              <h3>Content Analytics</h3>
              <p>Performance tracking and optimization recommendations</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h2>Impact</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">Faster content creation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Brand consistency score</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Enterprise customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriterPage; 