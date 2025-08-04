import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ProjectPage.css';

const ChorusPage = () => {
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
          <img src="/images/logos/Chorus.png" alt="Chorus" />
        </div>
      </div>

      <div className="project-content">
        <div className="project-intro">
          <h2>Standardizing Design Systems for Accelerating Enterprise Feature Production</h2>
          <p className="project-subtitle">
            Through a strategic redesign and update to their design system, Chorus AI was able to ship faster, more effectively, and meet requirements set by their eventual acquisition by ZoomInfo.
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2020 - 2021</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">My Role</span>
              <span className="meta-value">Product Designer (Contract)</span>
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
            <p><strong>Through a strategic redesign and update to their design system, Chorus AI was able to ship faster, more effectively, and meet requirements set by their eventual acquisition by ZoomInfo.</strong></p>
          </div>
        </div>

        <div className="project-section problem-section">
          <div className="section-number">01</div>
          <h2>Problem</h2>
          <p>
            <strong>A fragmented UI resulted in slowing development cycles, resulting in a disjointed feature implementation timeline.</strong>
          </p>
          
          <div className="problem-space">
            <h3>Despite strong market traction, the product suffered from a fragmented design system that wasn't truly a system at all</h3>
            <blockquote className="problem-quote">
              Developers rebuilt UI patterns from scratch for nearly every feature.
            </blockquote>
            <div className="problem-results">
              <ul>
                <li>PMs struggled with unclear specs and last-minute design changes.</li>
                <li>Designers kept redrawing the same layouts, introducing inconsistencies.</li>
                <li>CRM plugins looked like entirely separate products.</li>
              </ul>
              <p>This directly impacted our speed-to-market and eroded customer trust in our product quality.</p>
            </div>
          </div>

          <div className="identifying-problem">
            <h3>Based on feedback we received from Engineers and PMs, it was clear that this was a crucial issue</h3>
            <div className="problem-insights">
              <div className="insight-item">
                <h4>Interviews</h4>
                <p>Engineers and PMs reported ~2–3 weeks of extra work per feature just to rebuild UI.</p>
              </div>
              <div className="insight-item">
                <h4>Audit</h4>
                <p>We found 15+ modal styles, 4 different button systems, and over a dozen recurring handoff errors each month.</p>
              </div>
              <div className="insight-item">
                <h4>Competitive Research</h4>
                <p>Our main competitor (Gong) had a more polished, cohesive UI that sales teams cited as "more enterprise-ready."</p>
              </div>
            </div>
            <p className="insight-conclusion">These insights made it impossible to ignore: we needed to fix this to scale.</p>
          </div>
        </div>

        <div className="project-section goals-section">
          <h2>Our goals were clear</h2>
          <div className="goals-grid">
            <div className="goal-item">
              <div className="goal-number">1</div>
              <h3>Speed up development by standardizing reusable components.</h3>
            </div>
            <div className="goal-item">
              <div className="goal-number">2</div>
              <h3>Ensure a consistent, high-quality experience across web and CRM plugins.</h3>
            </div>
            <div className="goal-item">
              <div className="goal-number">3</div>
              <h3>Build a scalable design foundation to support upcoming enterprise integrations.</h3>
            </div>
          </div>
        </div>

        <div className="project-section solution-section">
          <div className="section-number">02</div>
          <h2>My Role</h2>
          <p className="role-intro">
            <strong>As a Product Design contractor, I was responsible for delivering on the features for this new design system, consolidating components, and assisting with handoffs.</strong>
          </p>
          
          <div className="role-details">
            <p><strong>I wasn't just making components in Figma. I was responsible for:</strong></p>
            <div className="role-list">
              <div className="role-item">
                <span className="role-icon">🎯</span>
                <span>Setting the vision and scope.</span>
              </div>
              <div className="role-item">
                <span className="role-icon">🤝</span>
                <span>Building buy-in with PMs, engineers, and leadership.</span>
              </div>
              <div className="role-item">
                <span className="role-icon">🎨</span>
                <span>Designing, documenting, and implementing this system.</span>
              </div>
              <div className="role-item">
                <span className="role-icon">🔄</span>
                <span>Standardizing repeatable patterns.</span>
              </div>
              <div className="role-item">
                <span className="role-icon">📈</span>
                <span>Driving adoption across teams.</span>
              </div>
            </div>
          </div>

          <div className="methodology-section">
            <h3>We followed the Atomic Design Methodology for implementing these systems</h3>
            <p>In order to deliver on these objectives, we followed the following steps as if we were creating a new 0-to-1 product.</p>
          </div>
        </div>

        <div className="project-section process-section">
          <h2>Approach & Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <h3>Audit & Research</h3>
              <ul>
                <li>Catalogued every production UI pattern.</li>
                <li>Ran developer and PM interviews to surface pain points.</li>
                <li>Benchmarked best-in-class design systems (Atlassian, Shopify Polaris).</li>
                <li>Identified critical gaps in coverage and documentation.</li>
              </ul>
            </div>
            <div className="process-step">
              <h3>Prioritization & Scope</h3>
              <ul>
                <li>Partnered with PMs to define must-have vs. nice-to-have components.</li>
                <li>Prioritized high-impact areas like navigation, forms, modals, and CRM plugin consistency.</li>
                <li>Balanced engineering constraints and roadmap needs to avoid blocking feature work.</li>
              </ul>
            </div>
            <div className="process-step">
              <h3>Defining styling patterns</h3>
              <ul>
                <li>Created and documented all corresponding branding guidelines</li>
                <li>Implemented them throughout Figma tokens</li>
                <li>Collaborated with engineering to establish new design tokens (CSS)</li>
              </ul>
            </div>
            <div className="process-step">
              <h3>Design & Build</h3>
              <ul>
                <li>Rebuilt the entire component library in Figma with variants, tokens, and responsive grids.</li>
                <li>Created page templates to ensure consistency beyond atoms and molecules.</li>
                <li>Documented usage guidelines, edge cases, and accessibility considerations.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-section showcase-section">
          <h2>Before & After Showcase</h2>
          <div className="showcase-grid">
            <div className="showcase-item">
              <h3>Meetings</h3>
              <div className="before-after">
                <div className="comparison-placeholder">Before/After comparison coming soon</div>
              </div>
            </div>
            <div className="showcase-item">
              <h3>Playlists</h3>
              <div className="before-after">
                <div className="comparison-placeholder">Before/After comparison coming soon</div>
              </div>
            </div>
            <div className="showcase-item">
              <h3>Recordings</h3>
              <div className="before-after">
                <div className="comparison-placeholder">Before/After comparison coming soon</div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section impact-section">
          <div className="section-number">03</div>
          <h2>Outcomes & Impact</h2>
          <p className="impact-intro">
            <strong>We didn't just ship a new library, we changed how Chorus approaches building software.</strong>
          </p>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Reduced UI bugs and rework</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50%</span>
              <span className="stat-label">Reduced design-to-dev cycle</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">82%</span>
              <span className="stat-label">Success rate across products</span>
            </div>
          </div>
          <div className="acquisition-note">
            <p>This work supported Chorus AI's eventual <strong>$575M acquisition by ZoomInfo</strong>, demonstrating the business value of systematic design operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChorusPage; 