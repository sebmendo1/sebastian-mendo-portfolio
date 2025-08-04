import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ProjectPage.css';

const SalesforcePage = () => {
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
          <img src="/images/logos/Salesforce.png" alt="Salesforce" />
        </div>
      </div>

      <div className="project-content">
        <div className="project-intro">
          <h2>Introducing Contact Support, your personalized AI-driven case resolution assistant</h2>
          <p className="project-subtitle">
            I redesigned Salesforce's Contact Support flow to intelligently recommend the best support channel for each customer, reducing confusion and time-to-resolution. The new experience balances clarity, transparency, and personalization, helping users find the right help, faster.
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2023 - Current</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">My Role</span>
              <span className="meta-value">Product Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Teams</span>
              <span className="meta-value">Design, Product</span>
            </div>
          </div>
        </div>

        <div className="project-section summary-section">
          <h2>Summary (TL;DR)</h2>
          <div className="summary-highlight">
            <p><strong>Contact Support is an AI-driven case recommendation and classification tool for enterprise Salesforce customers.</strong></p>
          </div>
          
          <div className="summary-cards">
            <div className="summary-card problem-card">
              <div className="card-number">01</div>
              <div className="card-content">
                <h3>Problem</h3>
                <p>Salesforce offered many support options, but users faced "information paralysis" with unclear guidance, leading to a 23% completion rate and frustrated customers unable to find the right help channel.</p>
              </div>
            </div>

            <div className="summary-card solution-card">
              <div className="card-number">02</div>
              <div className="card-content">
                <h3>Solution</h3>
                <p>Contact Support provides AI-driven case classification and personalized channel recommendations, transforming a wall of choices into a guided, intelligent experience that routes users to the most effective support option.</p>
              </div>
            </div>

            <div className="summary-card outcomes-card">
              <div className="card-number">03</div>
              <div className="card-content">
                <h3>Outcomes</h3>
                <p>This AI-powered approach achieved a 12% increase in case resolutions, 4.0 Case Submission CSAT score, and transformed support from a reactive necessity into an intuitive, proactive customer experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section problem-section">
          <div className="section-number">01</div>
          <h2>Problem</h2>
          <p>
            <strong>Salesforce offers a wide range of support options, but many users didn't know which option was most effective for their specific issue.</strong>
          </p>
          <blockquote className="problem-quote">
            "A customer hits an issue, Googles around, clicks a few articles, gets stuck, lands on the Contact Support page, and is met with a wall of choices, unclear availability, and no guidance."
          </blockquote>
          <div className="problem-results">
            <p><strong>This results in:</strong></p>
            <ul>
              <li>"Information paralysis" for users</li>
              <li>Higher friction and support case volume</li>
              <li>Missed opportunities to surface helpful content or faster channels (like chat)</li>
            </ul>
            <p>We saw an opportunity to transform this into a <strong>guided, recommendation-based experience</strong>.</p>
          </div>
        </div>

        <div className="project-section solution-section">
          <div className="section-number">02</div>
          <h2>Our Design Approach</h2>
          
          <div className="approach-tabs">
            <div className="approach-tab">
              <h3>User Needs</h3>
              <p>We synthesized feedback from multiple sources—internal data dashboards, support tickets, stakeholder interviews, and a user survey with over <strong>90 responses</strong>.</p>
              <h4>Key Insights:</h4>
              <ul>
                <li>Users were often unsure which support options were available to them</li>
                <li>They preferred a more personalized and visual experience</li>
                <li>Surfacing paid plan details during support moments felt like upselling, creating frustration</li>
              </ul>
            </div>
            
            <div className="approach-tab">
              <h3>Business Goals</h3>
              <p>Based on the product vision and business strategy, we defined the following goals:</p>
              <ul>
                <li>Shorten time to resolution by routing users to the most effective support</li>
                <li>Increase user confidence in the selected support channel</li>
                <li>Improve discoverability of content and tools tied to each support tier</li>
                <li>Avoid friction by softening the presentation of upgrade options</li>
              </ul>
            </div>
          </div>

          <div className="collaboration-note">
            <p><strong>I collaborated with product managers, engineers, and researchers as part of the Experience Design team.</strong></p>
            <h4>Some of my contributions include:</h4>
            <ul>
              <li>Designing across several iterations of the Contact Support flow</li>
              <li>Facilitating a cross-functional design studio to generate and evaluate early concepts</li>
              <li>Learning from Design Leads on how to best approach challenges</li>
              <li>Translating research findings into actionable interaction design</li>
              <li>Building annotated prototypes for stakeholder reviews and implementation</li>
            </ul>
          </div>
        </div>

        <div className="project-section journey-section">
          <h2>User Journey</h2>
          <div className="journey-steps">
            <div className="journey-step">
              <div className="step-number">1</div>
              <h3>You're browsing through Salesforce Help, looking for a solution to your problem.</h3>
            </div>
            <div className="journey-step">
              <div className="step-number">2</div>
              <h3>You land in Contact Support and you tell us about your issue.</h3>
            </div>
            <div className="journey-step">
              <div className="step-number">3</div>
              <h3>AI Case classification will find the most accurate product & topic</h3>
            </div>
            <div className="journey-step">
              <div className="step-number">4</div>
              <h3>Support channels will determine the best solution to your problem</h3>
            </div>
          </div>
        </div>

        <div className="project-section design-showcase">
          <h2>Design Process & Outcomes</h2>
          <div className="design-placeholder">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
              <p>Contact Support Flow Demo</p>
              <span>Interactive prototype showcasing the AI-driven recommendation system</span>
            </div>
          </div>
        </div>

        <div className="project-section impact-section">
          <div className="section-number">03</div>
          <h2>Impact</h2>
          <p className="impact-intro">
            <strong>We transformed support from a reactive necessity into an AI-powered, intuitive experience that empowers customers before they even ask for help.</strong>
          </p>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">12%</span>
              <span className="stat-label">Increase in case resolutions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.0</span>
              <span className="stat-label">Case Submission CSAT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesforcePage; 