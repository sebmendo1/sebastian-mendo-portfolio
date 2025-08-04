import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ProjectPage.css';

const ChasePage = () => {
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
          <img src="/images/logos/Chase.png" alt="Chase" />
        </div>
      </div>

      <div className="project-content">
        <div className="project-intro">
          <h2>Chase Digital HELOC: Capturing Untapped Home Equity Through Zero-Friction Origination</h2>
          <p className="project-subtitle">
            In 2023, Chase identified a $2.4 trillion market opportunity in unrealized home equity, with 75% of eligible homeowners unable to access these funds due to process friction. As Lead Product Designer, I built Chase's first fully digital HELOC platform from the ground up—transforming a 6-8 week, multi-channel ordeal into a 12-minute mobile experience.
          </p>
          
          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2023</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">My Role</span>
              <span className="meta-value">Lead Product Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Teams</span>
              <span className="meta-value">FinTech, Legal, Compliance, Engineering</span>
            </div>
          </div>
        </div>

        <div className="project-section summary-section">
          <h2>Executive Summary</h2>
          <div className="summary-highlight">
            <p><strong>This 0-to-1 product captured $120M in loan originations within six months by solving the core friction points that prevented homeowners from accessing their equity: opacity in requirements, fragmented multi-channel experiences, and weeks-long approval uncertainty.</strong></p>
          </div>
        </div>

        <div className="project-section problem-section">
          <div className="section-number">01</div>
          <h2>Problem: Market Friction Preventing Equity Access</h2>
          <p>
            <strong>Chase held relationships with 4.2 million homeowners sitting on substantial unrealized equity, yet HELOC origination remained flat while competitors gained market share.</strong>
          </p>
          
          <div className="problem-space">
            <p>The core issue wasn't demand—post-2023 rate environments had made HELOCs increasingly attractive for debt consolidation and home improvements. The barrier was process friction.</p>
            
            <div className="problem-details">
              <h3>Existing Process Challenges</h3>
              <div className="problem-insights">
                <div className="insight-item">
                  <h4>12+ Touchpoints</h4>
                  <p>Applications required coordination across digital, phone, and branch channels</p>
                </div>
                <div className="insight-item">
                  <h4>45 Minutes</h4>
                  <p>Average time to complete application with 8-12 documents submitted separately</p>
                </div>
                <div className="insight-item">
                  <h4>23% Completion Rate</h4>
                  <p>77% of interested homeowners abandoned the process before reaching underwriting</p>
                </div>
              </div>
            </div>

            <div className="market-opportunity">
              <h3>Strategic Market Opportunity</h3>
              <blockquote className="problem-quote">
                Digital-native lenders were capturing 15-20% market share by solving process friction, but their limited product depth created an opening for a full-service solution.
              </blockquote>
              <p>Chase's regulatory expertise, balance sheet capacity, and existing customer relationships positioned us to dominate this market if we could solve the experience problem.</p>
              <p className="business-case"><strong>The business case was clear: every 10-point improvement in completion rates translated to $40M in annual origination volume.</strong></p>
            </div>
          </div>
        </div>

        <div className="project-section approach-section">
          <div className="section-number">02</div>
          <h2>Strategic Approach: Mobile-Native Architecture for Complex Financial Products</h2>
          <p className="approach-intro">
            <strong>I approached this as a greenfield product opportunity rather than a digital transformation of existing processes.</strong>
          </p>
          
          <div className="strategic-decision">
            <h3>Core Strategic Decision</h3>
            <p>Designing for mobile completion from day one—82% of application starts occurred on mobile devices, but industry mobile completion rates averaged 12%.</p>
            
            <div className="hypothesis">
              <h4>Product Hypothesis</h4>
              <p>HELOC applications failed because they treated complex financial products like simple web forms. Instead, I would design progressive disclosure patterns that matched the cognitive load of financial decision-making while maintaining regulatory compliance.</p>
            </div>
          </div>

          <div className="design-principles">
            <h3>Three Foundational Design Principles</h3>
            <div className="principles-grid">
              <div className="principle-item">
                <div className="principle-number">1</div>
                <div className="principle-content">
                  <h4>Transparency over simplification</h4>
                  <p>Surface complexity intelligently rather than hiding it</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-number">2</div>
                <div className="principle-content">
                  <h4>Real-time validation</h4>
                  <p>Eliminate post-submission rejection through upfront verification</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-number">3</div>
                <div className="principle-content">
                  <h4>Mobile-optimized cognitive load</h4>
                  <p>Design interaction patterns for financial decision-making on mobile devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section solution-section">
          <h2>Solution Architecture: Progressive Disclosure for Financial Complexity</h2>
          
          <div className="solution-components">
            <div className="solution-component">
              <h3>Pre-Qualification Engine</h3>
              <p>Rather than starting with a comprehensive application, I designed a 5-question pre-qualification flow using soft credit pulls and property data APIs. This provided immediate loan amount estimates and personalized documentation requirements before customers invested significant time.</p>
              <div className="technical-details">
                <h4>Technical Implementation</h4>
                <p>Real-time integration with credit bureaus and automated valuation models (AVMs) to provide instant feedback on eligibility and loan terms. This front-loaded underwriting decision-making to reduce downstream friction.</p>
              </div>
            </div>

            <div className="solution-component">
              <h3>Dynamic Documentation Collection</h3>
              <p>The core innovation was contextual document collection based on real-time underwriting analysis. Instead of generic checklists, the system generated personalized documentation requirements with explanations of how each document affected loan terms.</p>
              <div className="technical-details">
                <h4>Innovation</h4>
                <p>Implemented AI-powered OCR with real-time quality assessment, allowing instant document verification and feedback. This eliminated the 3-5 day verification cycle that caused most application abandonment.</p>
              </div>
            </div>

            <div className="solution-component">
              <h3>Integrated Appraisal Workflow</h3>
              <p>Appraisal scheduling represented the largest process bottleneck. I embedded direct scheduling capabilities within the application flow, integrating with appraisal management company APIs to provide real-time availability.</p>
              <div className="technical-details">
                <h4>Business Impact</h4>
                <p>This reduced average appraisal-to-closing time from 21 days to 12 days by eliminating scheduling coordination overhead.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section collaboration-section">
          <h2>Cross-Functional Leadership and Stakeholder Alignment</h2>
          <p>The regulatory complexity of mortgage origination required extensive cross-functional collaboration. I led weekly alignment sessions with legal, compliance, engineering, and business stakeholders to navigate CFPB requirements while maintaining user experience quality.</p>
          
          <div className="stakeholder-decisions">
            <h3>Key Stakeholder Management Decisions</h3>
            <div className="stakeholder-grid">
              <div className="stakeholder-item">
                <h4>Legal/Compliance</h4>
                <p>Designed disclosure timing and language to meet regulatory requirements while maintaining mobile interaction patterns</p>
              </div>
              <div className="stakeholder-item">
                <h4>Engineering</h4>
                <p>Prioritized real-time API integrations over batch processing to enable immediate user feedback</p>
              </div>
              <div className="stakeholder-item">
                <h4>Operations</h4>
                <p>Redesigned underwriting workflows to support real-time decision-making rather than batch processing</p>
              </div>
            </div>
          </div>

          <div className="breakthrough-moment">
            <h3>Organizational Breakthrough</h3>
            <blockquote className="problem-quote">
              The breakthrough moment was demonstrating that clearer communication actually reduced compliance risk by ensuring customers understood loan terms before signing. This shifted organizational mindset from "how do we digitize existing processes" to "how do we design compliant processes for digital interaction."
            </blockquote>
          </div>
        </div>

        <div className="project-section impact-section">
          <div className="section-number">03</div>
          <h2>Results: User Experience Driving Business Outcomes</h2>
          
          <div className="results-categories">
            <div className="results-category">
              <h3>User Experience Metrics</h3>
              <div className="impact-stats">
                <div className="stat-item">
                  <span className="stat-number">67%</span>
                  <span className="stat-label">Application completion rate (from 23%)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12 min</span>
                  <span className="stat-label">Time to complete (from 45 min)</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">89%</span>
                  <span className="stat-label">Mobile completion rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.7/5</span>
                  <span className="stat-label">Customer satisfaction (from 2.8/5)</span>
                </div>
              </div>
            </div>

            <div className="results-category">
              <h3>Business Impact</h3>
              <div className="impact-stats">
                <div className="stat-item">
                  <span className="stat-number">$120M</span>
                  <span className="stat-label">Loan originations in first 6 months</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">40%</span>
                  <span className="stat-label">Reduction in processing costs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">35%</span>
                  <span className="stat-label">Decrease in customer acquisition cost</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3-4 weeks</span>
                  <span className="stat-label">Approval timeline (from 6-8 weeks)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="design-contributions">
            <h3>Design-Specific Contributions</h3>
            <div className="contribution-highlights">
              <div className="contribution-item">
                <span className="contribution-metric">191%</span>
                <span className="contribution-desc">Progressive disclosure patterns directly drove completion improvement by reducing cognitive overhead</span>
              </div>
              <div className="contribution-item">
                <span className="contribution-metric">65%</span>
                <span className="contribution-desc">Real-time document verification eliminated customer service inquiries</span>
              </div>
              <div className="contribution-item">
                <span className="contribution-metric">Industry Leading</span>
                <span className="contribution-desc">Mobile-optimized interaction patterns enabled 89% mobile completion vs 12% industry average</span>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section showcase-section">
          <h2>Product Demo & Workflow</h2>
          <div className="design-placeholder">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
              <p>HELOC Application Flow Demo</p>
              <span>12-minute mobile experience from pre-qualification to approval</span>
            </div>
          </div>
        </div>

        <div className="project-section technical-section">
          <h2>Technical Architecture & Accessibility</h2>
          <div className="technical-overview">
            <p>Built as a progressive web application (PWA) to ensure consistent mobile experience across devices while maintaining native app performance. Implemented WCAG 2.1 AA compliance throughout, with particular attention to financial disclosure accessibility for users with visual or cognitive disabilities.</p>
            
            <div className="architecture-highlights">
              <div className="architecture-item">
                <h4>API-First Architecture</h4>
                <p>Enabled rapid iteration and A/B testing of conversion funnel optimizations. Integration with Chase's existing customer data platform provided personalized pre-population while maintaining security standards.</p>
              </div>
              <div className="architecture-item">
                <h4>Real-Time Integrations</h4>
                <p>Credit bureaus, automated valuation models (AVMs), and appraisal management company APIs for instant feedback and scheduling.</p>
              </div>
              <div className="architecture-item">
                <h4>Progressive Web App</h4>
                <p>Consistent mobile experience across devices with native app performance and offline capability for form completion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section reflection-section">
          <h2>Strategic Impact & Future Opportunities</h2>
          <p className="impact-intro">
            <strong>The core insight that transparency drives conversion rather than hindering it has broader applications across Chase's financial products.</strong>
          </p>
          
          <div className="future-applications">
            <p>This platform architecture now supports Chase's broader home lending digital transformation, with similar progressive disclosure patterns applied to mortgage refinancing and home equity loans. The mobile-first design system established here has become the template for Chase's consumer lending products.</p>
            
            <div className="strategic-opportunity">
              <h3>Strategic Opportunity Ahead</h3>
              <p>Expanding this approach to other complex financial products where process friction prevents market penetration—business lending, wealth management, and investment products all have similar characteristics where superior user experience can drive significant market share gains.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChasePage; 