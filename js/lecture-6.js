// Lecture 6: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "What Integration Means & Practical Integration Architecture",
      "slides": "2, 4–7",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Promising Technology Is Only the Starting Point <span class=\"slide-ref\">slides 4–5</span></div>\n          <div class=\"nb-callout cyan\">\n            <strong>Definition of Technology Integration <span class=\"slide-ref\">slide 5</span>:</strong> Connecting a new technology with <strong>existing systems, data, workflows, and people</strong> so they operate as a coherent solution. It requires both <strong>technical connections</strong> (APIs, data exchange) and <strong>organisational changes</strong> (roles, procedures, skills). <strong>Integration is not simply installing a tool—it is making it work within the wider environment.</strong>\n          </div>\n\n          <div class=\"nb-subhead\">Four Dimensions of Integration <span class=\"slide-ref\">slides 5–7</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>1 // Applications</span></h4>\n              <p style=\"font-size: 0.86rem;\">Connect services, applications, devices, and platforms; define clean interfaces.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>2 // Data</span></h4>\n              <p style=\"font-size: 0.86rem;\">Align formats, meaning, quality, ownership, access rules, and data flows.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>3 // Process</span></h4>\n              <p style=\"font-size: 0.86rem;\">Embed technology into operational workflows, controls, and decisions.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>4 // People</span></h4>\n              <p style=\"font-size: 0.86rem;\">Align staff roles, procedures, responsibilities, and operating skills.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Practical Integration View SVG (Slide 7) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Practical Integration View (5-Layer Stack + Cross-Cutting Controls) <span class=\"slide-ref\">slide 7</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Practical Enterprise Integration Stack (Slide 7)</span>\n              <span>Security • Monitoring • Governance • Change Management</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 310\" role=\"img\" aria-label=\"Five-layer practical integration view with cross-cutting pillars\">\n              <!-- Main 5 Layers on Left -->\n              <rect x=\"14\" y=\"14\" width=\"635\" height=\"48\" rx=\"9\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.3\" />\n              <text x=\"32\" y=\"43\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">1. USER &amp; BUSINESS PROCESSES</text>\n              <text x=\"632\" y=\"43\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\">Workflows, roles &amp; decisions</text>\n\n              <rect x=\"14\" y=\"72\" width=\"635\" height=\"48\" rx=\"9\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.3\" />\n              <text x=\"32\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">2. APPLICATIONS &amp; SERVICES</text>\n              <text x=\"632\" y=\"101\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#0c4a6e\">Portals, ERP, BMS, dashboards</text>\n\n              <rect x=\"14\" y=\"130\" width=\"635\" height=\"52\" rx=\"9\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"32\" y=\"161\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">3. INTEGRATION LAYER (APIs / MESSAGING)</text>\n              <text x=\"632\" y=\"161\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#713f12\">Contracts, events &amp; routing</text>\n\n              <rect x=\"14\" y=\"192\" width=\"635\" height=\"48\" rx=\"9\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2.3\" />\n              <text x=\"32\" y=\"221\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">4. DATA &amp; INFORMATION</text>\n              <text x=\"632\" y=\"221\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#7c2d12\">Authoritative sources &amp; ETL</text>\n\n              <rect x=\"14\" y=\"250\" width=\"635\" height=\"48\" rx=\"9\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.3\" />\n              <text x=\"32\" y=\"279\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">5. INFRASTRUCTURE / CLOUD / DEVICES</text>\n              <text x=\"632\" y=\"279\" text-anchor=\"end\" font-size=\"12\" font-weight=\"700\" fill=\"#1e1b4b\">Sensors, edge nodes, networks</text>\n\n              <!-- Cross-Cutting Vertical Pillars on Right -->\n              <rect x=\"665\" y=\"14\" width=\"241\" height=\"284\" rx=\"10\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"785\" y=\"40\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#9f1239\">CROSS-CUTTING CONTROLS</text>\n              <text x=\"785\" y=\"57\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#3f3f46\">(Span every layer)</text>\n\n              <rect x=\"681\" y=\"72\" width=\"209\" height=\"42\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"785\" y=\"98\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">1. Security &amp; Privacy</text>\n\n              <rect x=\"681\" y=\"124\" width=\"209\" height=\"42\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"785\" y=\"150\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">2. Monitoring &amp; Alerts</text>\n\n              <rect x=\"681\" y=\"176\" width=\"209\" height=\"42\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"785\" y=\"202\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">3. Governance</text>\n\n              <rect x=\"681\" y=\"228\" width=\"209\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"785\" y=\"252\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">4. Change</text>\n              <text x=\"785\" y=\"270\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">Management</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Four Integration Strategies & How to Choose",
      "slides": "8–12",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-subhead\">Interactive Strategy Inspector <span class=\"slide-ref\">slides 8–11</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.75rem;\">Click each integration pattern below to inspect when to use it, required design elements, benefits, and technical watch-outs:</p>\n\n          <div class=\"nb-tab-row-4\" role=\"tablist\">\n            <button type=\"button\" class=\"nb-tab-btn active\" data-integration-strategy=\"0\">\n              <strong>1. APIs &amp; Services</strong>\n              <span>Controlled sync access (Slide 8)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-integration-strategy=\"1\">\n              <strong>2. Event-Driven</strong>\n              <span>Publish / Subscribe (Slide 9)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-integration-strategy=\"2\">\n              <strong>3. Data Integration</strong>\n              <span>ETL/ELT &amp; Truth (Slide 10)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-integration-strategy=\"3\">\n              <strong>4. Cloud / Edge / Hybrid</strong>\n              <span>Workload placement (Slide 11)</span>\n            </button>\n          </div>\n\n          <div class=\"nb-tab-panel\" id=\"int-strategy-panel\">\n            <!-- Populated by JS on load -->\n          </div>\n        </div>\n\n        <!-- How Should an Organisation Choose? (Slide 12) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">How Should an Organisation Choose? (4 Decision Filters) <span class=\"slide-ref\">slide 12</span></div>\n          <div class=\"nb-grid-4\" style=\"margin-bottom: 0.75rem;\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>1 // Business Need</span></h4>\n              <p style=\"font-size: 0.86rem;\">Does the workflow require real-time response, periodic data sharing, automation, or direct user access?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>2 // Existing Env</span></h4>\n              <p style=\"font-size: 0.86rem;\">What constraints exist across legacy systems, vendor platforms, networks, and cloud capabilities?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>3 // Quality Attributes</span></h4>\n              <p style=\"font-size: 0.86rem;\">What levels of security, privacy, availability, scalability, latency, and maintainability are required?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>4 // Ops Capacity</span></h4>\n              <p style=\"font-size: 0.86rem;\">Who will develop, monitor, support, and update the integration over its full lifecycle?</p>\n            </div>\n          </div>\n\n          <div class=\"nb-callout yellow\" style=\"margin-bottom: 0;\">\n            <strong>Selection Principle <span class=\"slide-ref\">slide 12</span>:</strong> <strong>Choose the simplest approach that meets requirements and can be sustained</strong> by the organisation’s operational team.\n          </div>\n        </div>"
    },
    {
      "title": "Technical & Organisational Challenges and Managing Adoption",
      "slides": "13–16",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-callout coral\">\n            <strong>Core Reality Check <span class=\"slide-ref\">slide 13</span>:</strong> Advanced technologies rarely operate in isolation. Legacy systems may be old or poorly documented, data may be inconsistent across departments, and new tools alter work practices and decision rights. <strong>Technical success does not automatically produce organisational adoption.</strong>\n          </div>\n\n          <div class=\"nb-grid-2\">\n            <!-- Technical Challenges (Slide 14) -->\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Technical Challenges to Anticipate</span> <span class=\"slide-ref\">slide 14</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Compatibility:</strong> Mismatches across platforms, network protocols, data formats, and API versions.</li>\n                <li><strong>Security &amp; Privacy:</strong> New interfaces, machine identities, cross-system data flows, and expanded attack surfaces.</li>\n                <li><strong>Reliability:</strong> Latency bottlenecks, service downtime, scaling limits, network dependency, and disaster recovery.</li>\n              </ul>\n            </div>\n\n            <!-- Organisational Challenges (Slide 15) -->\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>Organisational Challenges to Anticipate</span> <span class=\"slide-ref\">slide 15</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Skills &amp; Capacity:</strong> Staff may need hands-on training or specialist operational support.</li>\n                <li><strong>Resistance &amp; Trust:</strong> Users may question the technology, doubt its outputs, or fear role changes.</li>\n                <li><strong>Process Redesign:</strong> Existing manual procedures often do not fit the new automated workflow.</li>\n                <li><strong>Governance:</strong> Data ownership, accountability, policies, and decision rights may be unclear.</li>\n                <li><strong>Change Fatigue:</strong> Competing concurrent projects reduce staff attention and adoption energy.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Managing Adoption Challenges (Slide 16) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Ways to Manage Adoption Challenges <span class=\"slide-ref\">slide 16</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>01 // Dual Owners</span></h4>\n              <p style=\"font-size: 0.85rem;\">Establish both <strong>business and technical owners</strong> with clear decision-making responsibilities.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>02 // Early Co-Design</span></h4>\n              <p style=\"font-size: 0.85rem;\">Engage end users and operational teams early to surface constraints and concerns.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>03 // Bounded Pilot</span></h4>\n              <p style=\"font-size: 0.85rem;\">Start with a small bounded pilot and define measurable success criteria upfront.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>04 // Lifecycle Gates</span></h4>\n              <p style=\"font-size: 0.85rem;\">Run architecture, security, privacy, and data reviews throughout the lifecycle.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>05 // Enablement</span></h4>\n              <p style=\"font-size: 0.85rem;\">Provide training, support desk, communication, and continuous improvement.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Implementation & Rollout Strategies: Pilot, Phased vs. Big-Bang",
      "slides": "17",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-subhead\">Comparing the Three Rollout Approaches <span class=\"slide-ref\">slide 17</span></div>\n\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Rollout Strategy Trade-Offs: Risk vs. Speed vs. Coexistence (Slide 17)</span>\n              <span>Choose Based on Uncertainty &amp; Disruption Tolerance</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 220\" role=\"img\" aria-label=\"Pilot, Phased Rollout, and Big-Bang comparison diagram\">\n              <!-- 1. Pilot -->\n              <rect x=\"14\" y=\"16\" width=\"284\" height=\"188\" rx=\"10\" fill=\"#dcfce7\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"28\" y=\"30\" width=\"95\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"75\" y=\"46\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">1. PILOT</text>\n              <text x=\"28\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">Test in a limited scope</text>\n              <text x=\"28\" y=\"96\" font-size=\"12\" fill=\"#3f3f46\">• Learn before wide spend</text>\n              <text x=\"28\" y=\"114\" font-size=\"12\" fill=\"#3f3f46\">• Validate real KPIs &amp; workflows</text>\n              <rect x=\"28\" y=\"134\" width=\"256\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"38\" y=\"155\" font-size=\"10.5\" font-weight=\"700\" fill=\"#065f46\">BEST WHEN:</text>\n              <text x=\"38\" y=\"174\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">Uncertainty is high &amp; proof needed</text>\n\n              <!-- 2. Phased Rollout -->\n              <rect x=\"318\" y=\"16\" width=\"284\" height=\"188\" rx=\"10\" fill=\"#fef9c3\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"332\" y=\"30\" width=\"145\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"404\" y=\"46\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">2. PHASED ROLLOUT</text>\n              <text x=\"332\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">Introduce by site / group</text>\n              <text x=\"332\" y=\"96\" font-size=\"12\" fill=\"#3f3f46\">• Reduce operational disruption</text>\n              <text x=\"332\" y=\"114\" font-size=\"12\" fill=\"#3f3f46\">• Coordinate &amp; refine each wave</text>\n              <rect x=\"332\" y=\"134\" width=\"256\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"342\" y=\"155\" font-size=\"10.5\" font-weight=\"700\" fill=\"#713f12\">BEST WHEN:</text>\n              <text x=\"342\" y=\"174\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">Multi-building / multi-faculty scale</text>\n\n              <!-- 3. Big-Bang -->\n              <rect x=\"622\" y=\"16\" width=\"284\" height=\"188\" rx=\"10\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"636\" y=\"30\" width=\"110\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"691\" y=\"46\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">3. BIG-BANG</text>\n              <text x=\"636\" y=\"76\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">Switch over at one point</text>\n              <text x=\"636\" y=\"96\" font-size=\"12\" fill=\"#3f3f46\">• Shorter legacy coexistence</text>\n              <text x=\"636\" y=\"114\" font-size=\"12\" fill=\"#9f1239\">• Highest transition &amp; outage risk</text>\n              <rect x=\"636\" y=\"134\" width=\"256\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"646\" y=\"155\" font-size=\"10.5\" font-weight=\"700\" fill=\"#9f1239\">BEST WHEN:</text>\n              <text x=\"646\" y=\"174\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">Systems cannot run in parallel</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Impact Evaluation, Measurable Indicators & Credible Baselines",
      "slides": "18–20",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Does Impact Evaluation Examine? <span class=\"slide-ref\">slide 18</span></div>\n          <div class=\"nb-callout mint\">\n            <strong>Core Evaluation Question <span class=\"slide-ref\">slide 18</span>:</strong> <em>What changed after the technology was introduced—and can the change reasonably be linked to the intervention?</em><br />\n            • Assess <strong>operational performance, service quality, user experience, decision-making, and organisational capability</strong>.<br />\n            • Compare results against a <strong>baseline, target, or suitable alternative</strong>, and check for <strong>unintended effects</strong> alongside intended benefits.\n          </div>\n\n          <div class=\"nb-subhead\">Translate Benefits into Measurable Indicators <span class=\"slide-ref\">slide 19</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>1 // Efficiency KPIs</span> <span class=\"slide-ref\">slide 19</span></h4>\n              <ul class=\"nb-list\">\n                <li>Processing / cycle time</li>\n                <li>Cost per transaction</li>\n                <li>Equipment downtime hours</li>\n                <li>Manual staff effort</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>2 // Quality &amp; Service KPIs</span> <span class=\"slide-ref\">slide 19</span></h4>\n              <ul class=\"nb-list\">\n                <li>Error rate</li>\n                <li>Defect rate</li>\n                <li>Incident / fault response time</li>\n                <li>Customer / user satisfaction</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>3 // Adoption &amp; Capability</span> <span class=\"slide-ref\">slide 19</span></h4>\n              <ul class=\"nb-list\">\n                <li>Active system usage</li>\n                <li>Task completion rate</li>\n                <li>User confidence</li>\n                <li>Staff operational proficiency</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- 5-Step Before-and-After Protocol (Slide 20) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Build a Credible Before-and-After Comparison (5 Steps) <span class=\"slide-ref\">slide 20</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Step 01</span></h4>\n              <p style=\"font-size: 0.85rem;\">Define the <strong>problem and intended outcome</strong> before implementation.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Step 02</span></h4>\n              <p style=\"font-size: 0.85rem;\">Record <strong>baseline performance</strong> using consistent definitions &amp; time windows.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Step 03</span></h4>\n              <p style=\"font-size: 0.85rem;\">Set <strong>realistic targets</strong> and identify authoritative data sources.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Step 04</span></h4>\n              <p style=\"font-size: 0.85rem;\">Measure post-launch and <strong>allow time for processes to stabilise</strong>.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Step 05</span></h4>\n              <p style=\"font-size: 0.85rem;\">Interpret carefully: <strong>other concurrent changes</strong> may also influence results.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Return on Investment (ROI), Full Cost & Balanced Evaluation",
      "slides": "21–25",
      "html": "<!-- ROI Formula & Interactive Calculator (Slides 21, 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Understanding &amp; Calculating Return on Investment (ROI) <span class=\"slide-ref\">slides 21, 23</span></div>\n          <div class=\"nb-callout yellow\">\n            <strong>ROI Equations <span class=\"slide-ref\">slide 21</span>:</strong><br />\n            <code>Net benefit = Financial benefits − Total investment cost</code><br />\n            <code>ROI (%) = (Net benefit ÷ Total investment cost) × 100</code><br />\n            <em>Always state the measurement period and assumptions, and compare like with like.</em>\n          </div>\n\n          <div class=\"nb-roi-box\">\n            <div style=\"display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;\">\n              <strong style=\"font-size:0.95rem;\">Interactive ROI Calculator (Pre-loaded with Slide 23 Manufacturing IoT Case)</strong>\n              <button type=\"button\" class=\"nb-btn\" data-reset-roi>Reset to Slide 23 Example</button>\n            </div>\n\n            <div class=\"nb-roi-inputs\">\n              <div class=\"nb-field\">\n                <label for=\"roi-cost\">TOTAL INVESTMENT COST (RM)</label>\n                <input type=\"number\" id=\"roi-cost\" value=\"120000\" min=\"1\" step=\"1000\" data-roi-input />\n              </div>\n              <div class=\"nb-field\">\n                <label for=\"roi-benefit\">FINANCIAL BENEFITS (RM)</label>\n                <input type=\"number\" id=\"roi-benefit\" value=\"180000\" min=\"0\" step=\"1000\" data-roi-input />\n              </div>\n            </div>\n\n            <div class=\"nb-roi-output\" aria-live=\"polite\" aria-atomic=\"true\">\n              <div class=\"nb-metric-card\">\n                <div class=\"nb-metric-label\">Net Benefit (Benefit − Cost)</div>\n                <div class=\"nb-metric-val\" id=\"roi-net-display\">RM 60,000</div>\n              </div>\n              <div class=\"nb-metric-card\">\n                <div class=\"nb-metric-label\">First-Year ROI (%)</div>\n                <div class=\"nb-metric-val\" id=\"roi-pct-display\" style=\"color:#065f46;\">50.0%</div>\n              </div>\n            </div>\n            <p style=\"font-size: 0.82rem; color: var(--nb-muted); margin-top: 0.65rem;\">\n              <strong>Slide 23 Caveat:</strong> This simplified first-year calculation excludes later-year operating costs, cash-flow timing, and non-financial impacts.\n            </p>\n          </div>\n        </div>\n\n        <!-- Full Cost & Why ROI Is Not the Whole Story (Slides 22, 24) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Full Cost Categories &amp; Limitations of ROI Alone <span class=\"slide-ref\">slides 22, 24</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>Calculate Full Cost (Not Just Purchase Price)</span> <span class=\"slide-ref\">slide 22</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Initial Costs:</strong> Software licences, sensor/server hardware, development &amp; integration, data migration &amp; testing, staff training.</li>\n                <li><strong>Ongoing Costs:</strong> Technical support, cloud &amp; network usage, security patching, upgrades, vendor fees, and transition downtime.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>Why ROI Is Not the Whole Story</span> <span class=\"slide-ref\">slide 24</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Hard-to-Monetise Value:</strong> Safety, system resilience, accessibility, user trust, and regulatory compliance.</li>\n                <li><strong>Time Lag &amp; Dip:</strong> Benefits take time to materialise; early rollout often causes a temporary productivity dip.</li>\n                <li><strong>Attribution Difficulty:</strong> Hard to isolate one system’s impact when multiple changes happen together.</li>\n              </ul>\n            </div>\n          </div>\n\n          <!-- Balanced Post-Adoption Evaluation (Slide 25) -->\n          <div class=\"nb-subhead\">A Balanced Post-Adoption Evaluation (Three Questions) <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>1 // Value</span> <span class=\"slide-ref\">slide 25</span></h4>\n              <p style=\"font-size: 0.87rem;\">Were intended benefits achieved? Did service quality or operational performance measurably improve?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>2 // Sustainability</span> <span class=\"slide-ref\">slide 25</span></h4>\n              <p style=\"font-size: 0.87rem;\">Can the organisation operate and maintain it long term? Are security and operational risks controlled?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>3 // Next Decision</span> <span class=\"slide-ref\">slide 25</span></h4>\n              <p style=\"font-size: 0.87rem;\">Should we <strong>scale up, improve, redesign, pause, or retire</strong>—and what evidence supports that decision?</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Case Study: Smart Facility Monitoring & Mini-Activity Solution",
      "slides": "26–27",
      "html": "<!-- Case Brief & Architecture Sketch SVG (Slide 26) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Brief: University Smart Facility Monitoring <span class=\"slide-ref\">slide 26</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Integration Sketch: University Smart Facility Monitoring (Slides 26–27)</span>\n              <span>Physical Sensors → Integration → Existing Systems &amp; People</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 200\" role=\"img\" aria-label=\"Smart facility monitoring integration sketch\">\n              <defs>\n                <marker id=\"arr-iot\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- 1. Edge / Devices -->\n              <rect x=\"14\" y=\"20\" width=\"196\" height=\"118\" rx=\"10\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"28\" y=\"44\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">1. ROOM SENSORS</text>\n              <text x=\"28\" y=\"68\" font-size=\"12\" font-weight=\"700\">• Energy / power meters</text>\n              <text x=\"28\" y=\"88\" font-size=\"12\" font-weight=\"700\">• Temp &amp; humidity</text>\n              <text x=\"28\" y=\"108\" font-size=\"12\" font-weight=\"700\">• Occupancy / HVAC</text>\n\n              <line x1=\"210\" y1=\"79\" x2=\"240\" y2=\"79\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-iot)\" />\n\n              <!-- 2. Campus Network & Event Broker -->\n              <rect x=\"246\" y=\"20\" width=\"204\" height=\"118\" rx=\"10\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"260\" y=\"44\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">2. INTEGRATION LAYER</text>\n              <text x=\"260\" y=\"68\" font-size=\"12\" font-weight=\"700\">• Secure campus IoT VLAN</text>\n              <text x=\"260\" y=\"88\" font-size=\"12\" font-weight=\"700\">• Event broker + APIs</text>\n              <text x=\"260\" y=\"108\" font-size=\"12\" font-weight=\"700\">• Standard room/meter IDs</text>\n\n              <line x1=\"450\" y1=\"79\" x2=\"480\" y2=\"79\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-iot)\" />\n\n              <!-- 3. Existing Systems -->\n              <rect x=\"486\" y=\"20\" width=\"204\" height=\"118\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"500\" y=\"44\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">3. EXISTING SYSTEMS</text>\n              <text x=\"500\" y=\"68\" font-size=\"12\" font-weight=\"700\">• Building Mgmt System</text>\n              <text x=\"500\" y=\"88\" font-size=\"12\" font-weight=\"700\">• Utility billing records</text>\n              <text x=\"500\" y=\"108\" font-size=\"12\" font-weight=\"700\">• Energy dashboard</text>\n\n              <line x1=\"690\" y1=\"79\" x2=\"720\" y2=\"79\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-iot)\" />\n\n              <!-- 4. People & Workflow -->\n              <rect x=\"726\" y=\"20\" width=\"180\" height=\"118\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"740\" y=\"44\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">4. PEOPLE &amp; ACTION</text>\n              <text x=\"740\" y=\"68\" font-size=\"12\" font-weight=\"700\">• Maintenance workflow</text>\n              <text x=\"740\" y=\"88\" font-size=\"12\" font-weight=\"700\">• Facilities technicians</text>\n              <text x=\"740\" y=\"108\" font-size=\"12\" font-weight=\"700\">• Energy manager</text>\n\n              <!-- Bottom Goal Bar -->\n              <rect x=\"14\" y=\"152\" width=\"892\" height=\"34\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"460\" y=\"174\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">\n                EXPECTED BENEFITS: Faster fault detection • Reduced energy waste • Predictive maintenance planning\n              </text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Mini-Activity 5-Task Interactive Answer (Slide 27) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Mini-Activity: Recommend the Next Step <span class=\"slide-ref\">slide 27</span> <span class=\"nb-tag yellow\">5-Task Case Exam Practice</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <ul class=\"nb-list\" style=\"margin-bottom: 0.85rem;\">\n              <li><strong>Task 1:</strong> Sketch the integration approach: what systems, data, and people must connect?</li>\n              <li><strong>Task 2:</strong> Identify the three most significant technical or organisational challenges.</li>\n              <li><strong>Task 3:</strong> Propose two measurable indicators and explain how to establish a baseline.</li>\n              <li><strong>Task 4:</strong> List major cost and benefit categories; state what further evidence is needed.</li>\n              <li><strong>Task 5:</strong> Recommend pilot, phased rollout, proceed, redesign, or defer—and justify your choice.</li>\n            </ul>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-mini-btn\" data-mini-answer aria-expanded=\"false\" aria-controls=\"mini-answer-drawer\">Reveal Complete 5-Part Model Solution (Slide 27)</button>\n\n            <div class=\"nb-answer-drawer\" id=\"mini-answer-drawer\">\n              <span class=\"nb-answer-title\">Model Answer • Smart Facility Monitoring Next Step</span>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>1. Integration Approach:</strong> Connect room energy/temperature sensors via a secure campus IoT network and event/API broker to the <em>Building Management System (BMS)</em>, <em>utility records</em>, an <em>energy analytics dashboard</em>, and the <em>maintenance ticketing workflow</em>—linking facilities technicians (alert responders), IT network/security staff, and building managers.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>2. Three Most Significant Challenges:</strong> (a) <em>Technical — Device Security &amp; Network Coverage:</em> Securing hundreds of IoT endpoints against unauthorised access and ensuring reliable signal across thick-walled buildings; (b) <em>Data — Quality &amp; Alignment:</em> Mapping inconsistent sensor readings to existing utility billing meters; (c) <em>Organisational — Unclear Response Ownership:</em> Alerts fail if technicians lack clear SLA responsibilities and maintenance workflows.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>3. Two Measurable Indicators &amp; Baselines:</strong> (a) <em>Efficiency KPI:</em> Monthly electricity consumption (kWh) per building — baseline established from the previous 12 months of utility records adjusted for seasonal/semester occupancy; (b) <em>Quality/Service KPI:</em> Mean fault-detection-to-repair time (hours) — baseline extracted from past 6 months of manual maintenance logs.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>4. Major Cost/Benefit Categories &amp; Needed Evidence:</strong> <em>Initial Costs:</em> Sensors, gateways, BMS/ticketing integration, security setup, staff training; <em>Ongoing Costs:</em> Cloud/network telemetry, sensor calibration/battery replacement, support. <em>Benefits:</em> Reduced kWh bills, fewer emergency HVAC repairs, extended equipment lifespan. <em>Further Evidence Needed:</em> Verified kWh savings in a live building and actual false-alarm rate from sensors.</p>\n              <p style=\"margin-bottom: 0;\"><strong>5. Recommendation — PILOT First, Then Phased Rollout:</strong> Start with a <strong>bounded pilot in one high-energy building</strong> (e.g., engineering lab or main lecture block) for one semester to validate network coverage, security controls, alert accuracy, and technician response workflows before scaling building-by-building via a phased rollout.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Key Takeaways, Exit Ticket Answers, Standards & Exam Formulas",
      "slides": "28–30",
      "html": "<!-- Five Key Takeaways (Slide 28) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Key Takeaways <span class=\"slide-ref\">slide 28</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>01 // Holistic Fit</span></h4>\n              <p style=\"font-size: 0.85rem;\">Integration connects technology with systems, data, processes, and people.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>02 // Dual Focus</span></h4>\n              <p style=\"font-size: 0.85rem;\">Adoption challenges are both technical and organisational; manage them together.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>03 // Planned Rollout</span></h4>\n              <p style=\"font-size: 0.85rem;\">Implementation must be planned, tested, and supported—never a one-off install.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>04 // Baseline Proof</span></h4>\n              <p style=\"font-size: 0.85rem;\">Impact evaluation requires clear outcomes, baselines, and meaningful KPIs.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>05 // Beyond ROI</span></h4>\n              <p style=\"font-size: 0.85rem;\">ROI supports decisions alongside strategic alignment and non-financial value.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive Exit Ticket (Slide 29) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Exit Ticket Challenge <span class=\"slide-ref\">slide 29</span> <span class=\"nb-tag yellow\">3 Quick-Fire Exam Questions</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <ol style=\"padding-left: 1.25rem; font-size: 0.9rem; font-weight: 700; display: grid; gap: 0.45rem; margin-bottom: 0.85rem;\">\n              <li>What is one integration decision that could determine whether an advanced technology succeeds?</li>\n              <li>Which adoption challenge would you address first, and why?</li>\n              <li>What evidence would convince you that the investment has created value?</li>\n            </ol>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-exit6-btn\" data-exit-answer aria-expanded=\"false\" aria-controls=\"exit6-answer-drawer\">Reveal Model Exit Ticket Answers</button>\n\n            <div class=\"nb-answer-drawer\" id=\"exit6-answer-drawer\">\n              <span class=\"nb-answer-title\">Exam-Ready Exit Ticket Responses</span>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>1. Critical Integration Decision:</strong> Deciding whether to use <strong>event-driven integration vs. synchronous APIs</strong> (or <strong>edge vs. cloud processing</strong>)—for example, using event-driven messaging for IoT alerts so slow downstream ticketing systems do not block real-time sensor ingestion, and defining an authoritative source of truth for shared identifiers.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>2. First Adoption Challenge to Address:</strong> <strong>Unclear ownership, governance, and process redesign</strong>—because even technically flawless APIs fail to create value if staff do not trust the outputs, lack training, or have no assigned responsibility to act on system alerts.</p>\n              <p style=\"margin-bottom: 0;\"><strong>3. Convincing Evidence of Value:</strong> A credible <strong>before-and-after comparison against a recorded baseline</strong> showing sustained operational gains (e.g., lower downtime hours, faster response time, reduced error rates), positive net financial ROI after accounting for full ongoing costs, and high active staff adoption without severe unintended side effects.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Suggested References & Standards (Slide 30) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Key Standards &amp; Frameworks Referenced <span class=\"slide-ref\">slide 30</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.5rem;\">\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Technical &amp; Security Standards</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>ISO/IEC/IEEE 42010:</strong> Systems and software engineering — Architecture description.</li>\n                <li><strong>ISO/IEC 27001:</strong> Information security management systems (ISMS).</li>\n                <li><strong>NIST Guidance:</strong> Cybersecurity and risk management frameworks.</li>\n              </ul>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Value &amp; Performance Evaluation</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>PMI Benefits Realization Management:</strong> A Practice Guide for tracking outcomes.</li>\n                <li><strong>Kaplan &amp; Norton — The Balanced Scorecard:</strong> Multi-dimensional measures beyond pure financial ROI.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Formula A // ROI &amp; Cost Calculation Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Calculate first-year ROI and evaluate whether the investment is worthwhile...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Step 1 (Full Cost):</strong> Sum all Initial + Ongoing costs (don’t forget integration, training, and support).</li>\n                <li><strong>Step 2 (Math):</strong> Compute <code>Net Benefit = Benefits − Costs</code>, then <code>ROI (%) = (Net ÷ Cost) × 100</code>.</li>\n                <li><strong>Step 3 (Balanced Critique):</strong> State measurement period, later-year costs, early productivity dip, and non-monetary benefits (safety, resilience, compliance).</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Formula B // Integration &amp; Rollout Case Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Propose an integration, rollout, and evaluation plan for System X...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Integration Architecture:</strong> Connect Apps, Data (source of truth), Process, and People via APIs/Events/ETL + cross-cutting security &amp; monitoring.</li>\n                <li><strong>2. Dual Challenges:</strong> Address both Technical (compatibility, security, reliability) and Organisational (skills, trust, process, governance) risks.</li>\n                <li><strong>3. Rollout &amp; KPIs:</strong> Recommend <code>Pilot → Phased Rollout</code> with baseline vs. target KPIs across Efficiency, Quality, and Adoption.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    }
  ],
  "essays": [
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 8,
      "slides": "2–5",
      "question": "Define technology integration and explain why installation alone is insufficient.",
      "points": [
        "Definition",
        "Systems/data/process/people",
        "Technical and organisational aspects",
        "Example"
      ],
      "answer": "Technology integration means connecting a new technology with existing systems, data, workflows and people so that it works as part of a coherent organisational solution. It includes technical interfaces, such as APIs or data exchange, but also responsibilities, procedures and skills. For example, installing sensors in a university building may produce readings, yet the project will not deliver maintenance value unless readings reach the dashboard and responsible staff can act on alerts. Integration therefore considers the whole operational process rather than the presence of a tool. A technically working installation can still fail to create the intended organisational improvement."
    },
    {
      "topic": "Foundations",
      "kind": "Compare",
      "marks": 8,
      "slides": "2–3",
      "question": "Differentiate advanced-technology selection in Part 1 from integration and evaluation in Part 2.",
      "points": [
        "Part 1 applications/feasibility",
        "Part 2 integration/implementation",
        "Challenges",
        "Evidence/value"
      ],
      "answer": "Part 1 focuses on whether a proposed advanced technology is appropriate for a particular problem. It considers capability, use cases, benefits, alternatives and technical, financial, organisational and user-related feasibility. Part 2 examines what happens after the choice: how the technology connects to existing software and data, how people and processes adapt, how rollout risks are managed and how outcomes are evaluated. A technology might be feasible in principle but fail during integration because of incompatible systems or unclear responsibilities. Part 2 therefore adds operational and financial evidence, including key performance indicators and return on investment, to determine whether the adoption delivered value."
    },
    {
      "topic": "Architecture",
      "kind": "Explain",
      "marks": 10,
      "slides": "7",
      "question": "Explain the five layers in the lecture’s practical integration view.",
      "points": [
        "User/business processes",
        "Applications/services",
        "APIs/messaging",
        "Data",
        "Infrastructure",
        "Cross-cutting"
      ],
      "answer": "The top of the integration view contains user and business processes, which describe the activities and outcomes the organisation needs. Applications and services support those activities. The integration layer, including APIs and messaging, connects different software functions and enables them to exchange information. Data and information provide the content those systems use, while infrastructure, cloud platforms and devices support their execution. Security, monitoring, governance and change management cut across all layers. In university facility monitoring, a sensor reading travels through infrastructure and applications into a dashboard or maintenance process. Successful integration requires each part to work consistently with the others."
    },
    {
      "topic": "Architecture",
      "kind": "Analyse",
      "marks": 10,
      "slides": "5–7, 26",
      "question": "Analyse the integration requirements for a university smart-facility monitoring system.",
      "points": [
        "Existing environment",
        "Sensor/data connections",
        "Dashboard/maintenance workflow",
        "Owners",
        "Protection and monitoring"
      ],
      "answer": "The university wants to connect IoT sensors with its existing building management system, utility records and campus network. It needs reliable collection of room and energy measurements and an agreed way to interpret them. Appropriate interfaces or data integration should deliver information to a dashboard and to the maintenance workflow when abnormal conditions appear. The project must also assign owners for responding to alerts and supporting devices. Security, access control, monitoring, data quality and recovery need attention across the architecture. The aim is not simply to display measurements but to support faster fault detection and more useful maintenance decisions. This requires both technical and organisational integration."
    },
    {
      "topic": "APIs",
      "kind": "Explain",
      "marks": 10,
      "slides": "8",
      "question": "Explain API-based integration and five contract elements that must be agreed.",
      "points": [
        "API purpose",
        "Endpoint",
        "Formats",
        "Authentication/permissions",
        "Errors",
        "Versioning"
      ],
      "answer": "API-based integration is appropriate when one application requires controlled access to another application’s information or functionality. The teams should agree on endpoints that identify available operations and on formats for requests and responses. Authentication and permissions determine which callers can perform those operations. Error-handling rules explain how failures are reported and handled rather than silently ignored. Versioning helps consumers prepare for changes to an interface. For example, a dashboard may call a maintenance service to retrieve ticket status. The contract makes the behaviour predictable and reusable, but the team must still secure the interface and monitor availability and rate limits."
    },
    {
      "topic": "APIs",
      "kind": "Analyse",
      "marks": 10,
      "slides": "8, 12",
      "question": "Discuss four advantages and risks of using APIs to integrate new technology.",
      "points": [
        "Modularity",
        "Reuse/ease of connection",
        "Security/rate limits",
        "Availability/version change",
        "Mitigation"
      ],
      "answer": "APIs support modularity by allowing applications to use defined services without relying on their internal implementation. They can also encourage reuse and make approved connections faster. However, new APIs expose interfaces that require suitable authentication, permissions and security controls. They may be constrained by rate limits or fail when the providing service is unavailable. Changes to an interface can break dependent applications unless versioning is handled carefully. An organisation should therefore define contracts, test error handling and monitor service reliability. API integration is useful when controlled service access fits the need, but it does not remove operational or security responsibilities."
    },
    {
      "topic": "APIs",
      "kind": "Apply",
      "marks": 10,
      "slides": "8",
      "question": "A dashboard needs controlled access to the maintenance-ticket system. Propose a suitable integration method.",
      "points": [
        "Choose API",
        "Contract",
        "Access/security",
        "Failure behaviour",
        "Operations"
      ],
      "answer": "I would propose an approved API through which the dashboard can request maintenance-ticket information or create authorised tickets when appropriate. The teams should define endpoints, input and output formats, authentication, permissions and the meaning of response codes. The dashboard must handle an unavailable ticket service without falsely reporting that an action succeeded. Versioning and monitoring should be planned because the interface may evolve while the two applications continue operating. This approach is suitable because the dashboard requires controlled access to a specific application capability. It is preferable to assuming that the new application should directly modify the maintenance system’s internal data."
    },
    {
      "topic": "Events",
      "kind": "Explain",
      "marks": 10,
      "slides": "9",
      "question": "Define event-driven integration and illustrate it using the lecture’s sensor example.",
      "points": [
        "Publish",
        "Subscribe/respond",
        "Non-simultaneous tasks",
        "Sensor alert example",
        "Risks"
      ],
      "answer": "Event-driven integration allows one system to publish a message when a meaningful occurrence happens and other systems to subscribe and respond. It suits activities that need not happen at exactly the same moment. For example, an IoT sensor may publish an event when it detects abnormal temperature. An alerting service can notify relevant staff, while a maintenance service creates a ticket. This reduces the need for every system to be directly coordinated in a single request. However, designers must manage duplicate events, message ordering, possible delays and monitoring so that staff receive reliable information and the workflow does not create inconsistent repeated work."
    },
    {
      "topic": "Events",
      "kind": "Compare",
      "marks": 10,
      "slides": "8–9",
      "question": "Compare API-based and event-driven integration.",
      "points": [
        "API request/service access",
        "Event publish/subscribe",
        "Timing",
        "Examples",
        "Trade-offs"
      ],
      "answer": "API-based integration allows an application to request controlled data or functionality from another application through a defined contract. For example, a dashboard can request the latest status of a maintenance ticket. Event-driven integration instead announces that something meaningful has happened so subscribed systems can respond, such as a sensor publishing an abnormal-temperature event that triggers an alert. Event-driven processes are useful when the resulting activities need not be synchronous. APIs bring concerns such as availability, rate limits and contract versioning, while events introduce duplication, ordering and monitoring concerns. Both can coexist: an event can create a ticket, and an API can later retrieve its current status."
    },
    {
      "topic": "Events",
      "kind": "Analyse",
      "marks": 10,
      "slides": "9",
      "question": "An IoT event is delivered twice and creates two maintenance tickets. Analyse the integration issue.",
      "points": [
        "Duplicate-event risk",
        "Incorrect operational consequence",
        "Event handling/reconciliation",
        "Monitoring",
        "Test"
      ],
      "answer": "The problem illustrates the lecture’s warning about duplicate events in event-driven integration. A sensor may report one physical condition, but the receiving system processes the message more than once and creates two tasks. This wastes staff effort and may confuse reporting. The integration design should ensure duplicate messages are recognised or their effects are handled safely, and the team should test realistic delivery and retry conditions. Monitoring should help detect repeated or delayed processing. A clear maintenance process is also needed so staff can reconcile exceptional cases. The wider lesson is that successful message transport does not automatically mean the business workflow produces a correct result."
    },
    {
      "topic": "Events",
      "kind": "Apply",
      "marks": 10,
      "slides": "9",
      "question": "Why are message ordering and delays important in event-driven facility monitoring?",
      "points": [
        "Out-of-order state",
        "Delayed response",
        "Operational consequences",
        "Design/monitoring",
        "Example"
      ],
      "answer": "A facility-monitoring system may receive several observations as conditions change. If a later message arrives before an earlier one, the dashboard or alert service could display a misleading current state unless the integration has a way to interpret event order. Delays can also weaken the intended value of early warning if staff receive an alert long after the condition occurred. The design should therefore include appropriate event information, handling rules and monitoring, and test how the workflow behaves when messages are late or out of order. This matters because the business objective is timely and accurate action, not simply delivering messages eventually."
    },
    {
      "topic": "Data",
      "kind": "Explain",
      "marks": 12,
      "slides": "10",
      "question": "Explain the major design concerns of data integration.",
      "points": [
        "Authoritative source",
        "Mappings/identifiers",
        "Quality/frequency",
        "ETL/ELT/stores",
        "Lineage/privacy/access/recovery"
      ],
      "answer": "Data integration begins by determining which system is the authoritative source for each important data item. It then maps structures and meanings so that identifiers, formats, quality rules and update frequencies are consistent. The lecture names ETL and ELT pipelines, data warehouses and data lakes as possible approaches for moving or consolidating information. Governance must also address data lineage, privacy, access control, retention and recovery. For example, campus utility records and sensor observations need comparable definitions before they can support energy analysis. An interface that transfers information correctly does not solve inconsistent units, missing values or unclear ownership. These issues must be designed and tested separately."
    },
    {
      "topic": "Data",
      "kind": "Analyse",
      "marks": 10,
      "slides": "10, 26",
      "question": "University sensor totals disagree with utility-billing records. Analyse likely data-integration problems.",
      "points": [
        "Definitions and units",
        "Source/ownership",
        "Frequency/time periods",
        "Quality mapping",
        "Reconciliation"
      ],
      "answer": "The disagreement may result from different definitions, measurement units, update frequencies or incomplete records rather than merely a failed network connection. Data integration should identify which system is authoritative for each measurement and establish how readings and utility records correspond. It should map time periods, identifiers and formats, then check the quality of sensor data before calculating trends. The team also needs a reconciliation process for mismatches and records of how the figures were transformed. Without this work, the dashboard may display persuasive but unreliable comparisons. The university should resolve these data questions before claiming that the new monitoring system has reduced energy use."
    },
    {
      "topic": "Data",
      "kind": "Compare",
      "marks": 8,
      "slides": "8–10",
      "question": "Distinguish data integration from API and event-driven integration.",
      "points": [
        "Data correctness/meaning",
        "API access",
        "Events changes",
        "Interdependence"
      ],
      "answer": "Data integration focuses on how information from different systems is defined, mapped, governed and combined so that it remains meaningful and reliable. API integration is a method for controlled access to an application’s functions or data. Event-driven integration is a method of publishing occurrences so other systems can react. APIs and events may transport information, but they do not automatically make its content accurate or consistent. For example, an event can deliver a temperature reading successfully while its unit is misunderstood by a receiving system. Therefore, an end-to-end integration solution often needs both a communication method and explicit data-quality and ownership rules."
    },
    {
      "topic": "Deployment",
      "kind": "Compare",
      "marks": 10,
      "slides": "11",
      "question": "Compare cloud, edge and hybrid integration approaches.",
      "points": [
        "Cloud centralised",
        "Edge local",
        "Hybrid combination",
        "Trade-offs",
        "Fit to need"
      ],
      "answer": "Cloud deployment uses centralised processing and storage that can support scalable services and shared analytics. Edge computing moves some processing nearer to devices or users to reduce latency and unnecessary data transfer. Hybrid approaches combine cloud and edge, for example allowing local alarms while aggregating campus-wide trends centrally. Hybrid requires careful decisions about which workloads run where and who oversees them. The correct approach depends on response-time needs, network conditions, security, scalability, data handling and operational capacity. A more complicated architecture is not automatically better. The lecture advises selecting the simplest approach that meets requirements and can be sustained."
    },
    {
      "topic": "Deployment",
      "kind": "Apply",
      "marks": 10,
      "slides": "11–12",
      "question": "Recommend a deployment approach for rapid local fault alerts with central campus reporting.",
      "points": [
        "Local latency need",
        "Central analytics",
        "Hybrid recommendation",
        "Workload placement",
        "Operations/security"
      ],
      "answer": "A hybrid approach is plausible because it can place time-sensitive fault detection near building sensors while sending selected readings and results to central services for campus-wide reporting. Local edge processing may continue to support rapid decisions when network access is unstable, while cloud or central facilities can aggregate longer-term energy and maintenance trends. The university must clearly define which workload runs at each location and how information is exchanged. It should also plan access controls, monitoring, updates and operational ownership across both environments. I would validate the design through a pilot, because a hybrid solution adds coordination complexity that must be justified by the latency and reporting benefits."
    },
    {
      "topic": "Deployment",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "12",
      "question": "Explain the criteria for choosing among integration and deployment strategies.",
      "points": [
        "Business need",
        "Existing systems",
        "Quality attributes",
        "Operational capacity",
        "Simplicity"
      ],
      "answer": "The organisation should begin with its business need: whether it requires real-time response, data sharing, automation or convenient access. It must then examine the existing environment, including legacy systems, vendor platforms, networks and cloud capabilities. Quality attributes such as security, privacy, availability, scalability, latency and maintainability determine the acceptable design. Operational capacity also matters because the organisation must develop, monitor and support the integration after deployment. The lecture’s recommendation is to choose the simplest approach that meets the requirements and can be maintained. This prevents selecting a complex architecture for benefits that the organisation does not actually need."
    },
    {
      "topic": "Challenges",
      "kind": "Analyse",
      "marks": 12,
      "slides": "13–14",
      "question": "Discuss the three broad groups of technical integration challenges.",
      "points": [
        "Compatibility",
        "Security/privacy",
        "Reliability",
        "Concrete implications",
        "Mitigations"
      ],
      "answer": "Compatibility challenges occur when existing and new systems use different platforms, protocols, versions or data formats. These differences can prevent correct integration or force additional transformation work. Security and privacy challenges arise from new interfaces, identities and data flows that may expand access or create new attack surfaces. Reliability challenges include latency, downtime, network dependency, scaling and recovery when parts fail. For a university IoT project, all three matter: sensors may speak incompatible protocols, insecure devices may expose information and network outages may delay maintenance alerts. The team should review architecture, test interfaces and recovery, protect data and monitor end-to-end operation before scaling the solution."
    },
    {
      "topic": "Challenges",
      "kind": "Explain",
      "marks": 12,
      "slides": "15",
      "question": "Explain five organisational adoption challenges in Lecture 6.",
      "points": [
        "Skills and capacity",
        "Resistance and trust",
        "Process redesign",
        "Governance",
        "Change fatigue"
      ],
      "answer": "Skills and capacity challenges arise when staff lack time or expertise to operate the new solution. Resistance and trust become important when users doubt outputs or fear changes to their roles. Process redesign is needed when existing procedures no longer fit the automated workflow. Governance challenges appear when ownership, policies and decision rights are unclear. Change fatigue occurs when multiple initiatives compete for employees’ attention, reducing their ability to engage with the new technology. These concerns can undermine an otherwise technically sound integration. The organisation should address them through early engagement, training, clear accountability and realistic support arrangements rather than assuming staff will adapt automatically."
    },
    {
      "topic": "Challenges",
      "kind": "Analyse",
      "marks": 10,
      "slides": "13–16",
      "question": "Why does technical integration success not guarantee organisational adoption?",
      "points": [
        "Working interfaces vs changed behaviour",
        "Trust",
        "Staff responsibility",
        "Training",
        "Evidence of usage/value"
      ],
      "answer": "A working interface proves that certain systems can exchange information, but it does not prove that people and processes can use the resulting capability effectively. Facility sensors may transmit accurate alerts while maintenance staff lack time, trust or authority to respond. Existing procedures may not define how tickets are assigned or closed, and managers may disagree about the intended outcome. Successful adoption therefore requires role clarity, training, support, user engagement and operational measures. The organisation should evaluate whether staff actually use the integrated service and whether response times or maintenance results improve. Technology functionality is necessary but insufficient for organisational value."
    },
    {
      "topic": "Challenges",
      "kind": "Design",
      "marks": 12,
      "slides": "16",
      "question": "Propose a five-part plan for managing adoption challenges in a university IoT rollout.",
      "points": [
        "Business/technical owners",
        "User involvement",
        "Bounded pilot/success criteria",
        "Reviews",
        "Training/support"
      ],
      "answer": "The university should first name business and technical owners who can make decisions about sensors, data and maintenance responses. Second, it should engage facilities staff and affected users early to understand working constraints and privacy concerns. Third, it should implement a bounded pilot with agreed success criteria such as reliable alerts and faster fault detection. Fourth, architecture, security, data quality and privacy reviews should continue throughout development and rollout, not happen only after launch. Finally, it should provide training, support, communication and a process for continuous improvement. These actions address the human and technical conditions needed for sustained adoption."
    },
    {
      "topic": "Challenges",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "14–16",
      "question": "A system is secure but staff do not understand when to act on alarms. Which challenges remain?",
      "points": [
        "Process redesign",
        "Responsibility",
        "Skills/trust",
        "Operational support",
        "Recommended response"
      ],
      "answer": "Good security addresses only part of the integration problem. The university still faces organisational challenges involving process design, decision rights, staff capability and possibly trust. If alarm thresholds are unclear or nobody owns the response, even accurate sensor messages cannot produce reliable maintenance action. The team should define which alerts require investigation, who receives them, how tasks are assigned and what support or escalation is available. Staff should be trained and involved in testing the procedure. Evaluation should include whether alerts lead to timely, correct action. Therefore, a security review is necessary but cannot substitute for operational readiness."
    },
    {
      "topic": "Rollout",
      "kind": "Compare",
      "marks": 12,
      "slides": "17",
      "question": "Compare pilot, phased rollout and big-bang implementation.",
      "points": [
        "Pilot",
        "Phased",
        "Big-bang",
        "Disruption/uncertainty",
        "Recommendation conditions"
      ],
      "answer": "A pilot tests the solution in a limited environment to reduce uncertainty before wider investment. It is appropriate when benefits, technical behaviour or user adoption still require evidence. A phased rollout introduces the solution progressively by site, function or user group, reducing disruption and providing opportunities to learn between stages. However, it requires coordination while old and new arrangements coexist. A big-bang rollout changes over at one planned point, reducing coexistence time but increasing transition risk if defects appear. For campus facility monitoring, a pilot followed by phased expansion is plausible because sensor accuracy, connectivity and response procedures can first be validated. The best strategy depends on risk, readiness and recovery capability."
    },
    {
      "topic": "Rollout",
      "kind": "Analyse",
      "marks": 10,
      "slides": "16–17",
      "question": "A university wants to deploy untested sensors to all buildings in a single weekend. Analyse the risk.",
      "points": [
        "Uncertainty",
        "Technical/device/network risks",
        "Process/training",
        "Big-bang exposure",
        "Alternative plan"
      ],
      "answer": "A single-weekend university-wide deployment resembles a big-bang change and would expose many buildings to failures at once. Sensor placement, network coverage, security, data quality and maintenance-response procedures may not yet have been tested under real conditions. Staff might also lack training to interpret new alerts. If the system fails, the university may struggle to diagnose problems across the whole estate while users lose confidence. I would recommend a bounded pilot, explicit success criteria and a phased rollout after testing and support preparation. This would allow the organisation to resolve major problems before the consequences become widespread."
    },
    {
      "topic": "Evaluation",
      "kind": "Define",
      "marks": 8,
      "slides": "18",
      "question": "Define technology impact evaluation and explain what it examines.",
      "points": [
        "Changes after implementation",
        "Intended and unintended outcomes",
        "Performance/service/users",
        "Baseline/target",
        "Attribution"
      ],
      "answer": "Impact evaluation examines what changed after a technology was introduced and whether the changes can reasonably be linked to that intervention. It covers operational performance, service quality, user experience, decision-making and organisational capability, rather than only technical availability. The organisation should compare results with a relevant baseline, target or alternative and consider unintended effects. For example, faster fault detection after IoT adoption could be a benefit, while increased staff workload from excessive alarms could be a negative outcome. Evaluation must therefore assess both value and limitations with appropriate evidence, not just count devices deployed."
    },
    {
      "topic": "Evaluation",
      "kind": "Explain",
      "marks": 10,
      "slides": "19",
      "question": "Explain three categories of KPIs and provide examples for each.",
      "points": [
        "Efficiency",
        "Quality/service",
        "Adoption/capability",
        "Connection to goal",
        "Interpretation"
      ],
      "answer": "Efficiency indicators measure how much work or resource is required for a result, such as processing time, downtime, cost per transaction or manual effort. Quality and service indicators measure the reliability or experience of outcomes, such as error rate, response time and user satisfaction. Adoption and capability indicators evaluate whether people can use the solution, including active usage, task completion, confidence and staff proficiency. A university IoT project might track time to detect a fault, accuracy of maintenance tasks and how consistently facilities staff respond to alerts. KPI selection should begin with the original problem and be measured against a baseline so numbers explain whether meaningful improvement occurred."
    },
    {
      "topic": "Evaluation",
      "kind": "Analyse",
      "marks": 12,
      "slides": "20",
      "question": "Explain the stages required for a credible before-and-after evaluation.",
      "points": [
        "Define problem/outcome",
        "Measure baseline consistently",
        "Set target/data source",
        "Stabilisation",
        "Control interpretation"
      ],
      "answer": "A credible evaluation begins before implementation by defining the organisational problem and the intended outcome. The team should then record a baseline using consistent metrics, definitions and observation periods. It should set realistic targets and identify where reliable data will come from. After deployment, enough time should be allowed for staff and processes to stabilise before comparing performance. The results must be interpreted carefully because seasonal demand, staffing or other initiatives may also influence the numbers. In facility monitoring, energy use should be compared across meaningful periods rather than assuming that any lower bill proves a sensor system caused the reduction."
    },
    {
      "topic": "Evaluation",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "18–20",
      "question": "An organisation claims a 20% energy saving after installing IoT, but has no baseline method. Evaluate the claim.",
      "points": [
        "Missing comparable baseline",
        "Alternative causes",
        "Measurement definitions",
        "Better comparison",
        "Conditional conclusion"
      ],
      "answer": "A 20% saving sounds positive, but the claim cannot be evaluated confidently without knowing how energy use was measured before installation. The comparison may involve different months, building occupancy or other energy-saving initiatives. The organisation should define the measurement period and units, use trustworthy sensor and utility records and compare like with like. It should also examine whether the monitoring actually led to changed maintenance or energy-management decisions. The claimed improvement may be genuine, but it cannot be attributed confidently to IoT from the information provided. A better evaluation would document the baseline, target, data sources and alternative explanations before drawing a conclusion."
    },
    {
      "topic": "Evaluation",
      "kind": "Apply",
      "marks": 10,
      "slides": "18–20, 26",
      "question": "Propose two KPIs and their baselines for the campus smart-facility case.",
      "points": [
        "Fault-response KPI",
        "Energy-use KPI",
        "How to baseline",
        "Data sources",
        "Interpretation"
      ],
      "answer": "One KPI could be the time between the occurrence or detection of a facility fault and the start of an appropriate maintenance response. The university should record that interval for comparable faults before the IoT pilot and then compare it with response times after staff adopt the alert workflow. A second KPI could be energy consumption for the monitored building over a defined period, using consistent units and relevant utility records. A baseline should reflect comparable operating conditions rather than just a single convenient day. Together these indicators can show whether the system supports faster action and less energy waste, while still requiring consideration of other changes that might explain the results."
    },
    {
      "topic": "ROI",
      "kind": "Define",
      "marks": 10,
      "slides": "21",
      "question": "State and explain the ROI equation used in the lecture.",
      "points": [
        "Net benefit",
        "ROI formula",
        "Units/period",
        "Interpretation",
        "Assumptions"
      ],
      "answer": "The lecture defines net benefit as financial benefits minus total costs. It then calculates Return on Investment as ROI (%) = (net benefit ÷ total investment cost) × 100. This percentage expresses the simplified financial gain relative to the investment for the stated measurement period. For example, if benefits are higher than the relevant costs, net benefit is positive and the ROI is positive. The organisation must compare like with like by stating whether costs and benefits refer to one year or several years. It should also disclose assumptions and included cost categories so the calculation is not mistaken for a complete assessment of every financial and non-financial effect."
    },
    {
      "topic": "ROI",
      "kind": "Calculate",
      "marks": 10,
      "slides": "23",
      "question": "Calculate the first-year ROI when costs are RM120,000 and benefits are RM180,000.",
      "points": [
        "State costs",
        "State benefits",
        "Net benefit RM60k",
        "Formula 50%",
        "Simplified assumptions"
      ],
      "answer": "The example uses initial and first-year costs of RM120,000 and annual financial benefits of RM180,000 from reduced downtime and maintenance. Net benefit is financial benefits minus total costs, so RM180,000 − RM120,000 = RM60,000. ROI is net benefit divided by total investment cost, multiplied by 100. Therefore ROI = (RM60,000 ÷ RM120,000) × 100 = 50%. This is a positive illustrative first-year ROI. However, the lecture explicitly notes that the example does not include later-year costs, cash-flow timing or non-financial impacts. The figure should be interpreted within those assumptions rather than treated as a complete long-term investment analysis."
    },
    {
      "topic": "ROI",
      "kind": "Calculate",
      "marks": 10,
      "slides": "21–23",
      "question": "An organisation spends RM80,000 and receives RM100,000 of financial benefit in the same period. Calculate ROI and interpret it.",
      "points": [
        "Net benefit RM20k",
        "ROI 25%",
        "Correct formula",
        "Same-period interpretation",
        "Caveat"
      ],
      "answer": "The financial benefits for the stated period are RM100,000 and the total costs are RM80,000. Net benefit is therefore RM100,000 − RM80,000 = RM20,000. Using the lecture formula, ROI (%) = (RM20,000 ÷ RM80,000) × 100 = 25%. This means the simplified financial net gain is equivalent to 25% of the stated investment cost during the period. The result is positive, but an investment decision should still examine whether the costs include integration, training, support and maintenance and whether important benefits or risks are non-financial. The numerical answer alone does not establish that adoption is strategically appropriate."
    },
    {
      "topic": "ROI",
      "kind": "Explain",
      "marks": 10,
      "slides": "22",
      "question": "Explain the difference between initial and ongoing costs of advanced technology.",
      "points": [
        "Initial licences/hardware",
        "Development/integration/migration",
        "Training/testing",
        "Ongoing cloud/support",
        "Effect on ROI"
      ],
      "answer": "Initial costs arise while obtaining and implementing a technology, including licences, hardware, development, integration, migration, testing and training. Ongoing costs continue while the solution is operated, including support, cloud and network usage, security maintenance, upgrades, vendor services and downtime. For example, a university may pay once for sensors but continue paying for connectivity, replacement devices and specialist support. The distinction matters because excluding continuing costs can make an investment appear more profitable than it is. An ROI estimate should state the period and include the relevant expenses for that period rather than relying only on the initial purchase invoice."
    },
    {
      "topic": "ROI",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "21–24",
      "question": "Explain why a positive ROI does not automatically justify adopting a technology.",
      "points": [
        "Financial ROI limited",
        "Assumptions/period",
        "Safety/accessibility/trust",
        "Risk/compliance",
        "Strategic fit/KPIs"
      ],
      "answer": "Positive ROI indicates that the measured financial benefits exceed the included costs during the stated period, but it does not prove the technology is the best choice. The calculation may omit later costs, cash-flow timing or uncertain estimates. Some important outcomes, including safety, resilience, accessibility, trust and compliance, are difficult to express in money. There may also be risks or poor user acceptance that reduce the technology’s long-term value. An organisation should therefore consider ROI alongside operational performance, service quality, risk reduction and strategic goals. A positive financial number is useful evidence, but a responsible adoption decision should be based on the wider costs, benefits and sustainability of the integrated solution."
    },
    {
      "topic": "ROI",
      "kind": "Analyse",
      "marks": 12,
      "slides": "21–24",
      "question": "An IoT ROI report includes hardware but ignores integration, training, support and cloud fees. Analyse the problem.",
      "points": [
        "Incomplete investment cost",
        "Understated net cost",
        "Inflated ROI",
        "Cost categories",
        "Recompute with period"
      ],
      "answer": "The report understates the cost of adoption because hardware is only one part of creating and maintaining the integrated service. Additional initial costs may include integration with existing systems, migration or preparation of data, testing and staff training. Continuing expenses may include cloud and network usage, security, maintenance, support and device replacement. If these costs are excluded, net benefit can be overstated and calculated ROI artificially high. The organisation should define a measurement period, collect all relevant expenses and recalculate the net benefit using comparable financial benefits. The corrected ROI should then be assessed with non-financial outcomes and operational risks rather than used in isolation."
    },
    {
      "topic": "ROI",
      "kind": "Compare",
      "marks": 10,
      "slides": "19–24",
      "question": "Compare financial ROI with operational KPIs as methods of evaluating technology value.",
      "points": [
        "ROI financial percentage",
        "Operational outcomes",
        "Examples",
        "Limitations",
        "Combined decision"
      ],
      "answer": "Financial ROI compares monetary benefits with costs to express simplified net gain as a percentage of investment. Operational KPIs measure how the service actually performs, such as equipment downtime, fault-response time, errors or active staff usage. ROI is useful for investment decisions but depends on cost estimates and what benefits can reasonably be monetised. KPIs show whether the technology affects day-to-day performance, but they do not by themselves reveal the full financial consequence. For example, faster fault detection is an operational improvement, while lower maintenance expenditure may contribute to ROI. A balanced evaluation uses both, together with non-financial impacts and risk assessment."
    },
    {
      "topic": "Cases",
      "kind": "Analyse",
      "marks": 12,
      "slides": "26–27",
      "question": "Analyse the smart-facility monitoring case across integration, challenges and expected benefits.",
      "points": [
        "Existing environment",
        "Data-to-workflow integration",
        "Technical challenges",
        "Organisational challenges",
        "Measured benefit"
      ],
      "answer": "The university’s proposed IoT system must integrate with a building management system, separate utility records and the campus network. Sensor data need to be collected accurately and presented in a dashboard, with abnormal conditions connected to the existing maintenance workflow. Technical challenges include network coverage, device security and data quality. Organisational challenges include defining who responds to alerts, providing staff support and keeping the system maintained. The intended outcomes are faster fault detection, reduced energy waste and better maintenance planning. These claims require measurable indicators and a baseline. I would recommend a bounded pilot and a staged decision based on the quality of alerts, staff use and demonstrated improvement rather than installing sensors everywhere immediately."
    },
    {
      "topic": "Cases",
      "kind": "Design",
      "marks": 14,
      "slides": "26–27",
      "question": "Recommend an integration architecture, rollout, KPIs and cost review for campus IoT monitoring.",
      "points": [
        "Architecture/strategy",
        "Security/data",
        "Rollout",
        "Two KPIs/baseline",
        "Costs/decision"
      ],
      "answer": "I would connect building sensors to a monitored collection service, then integrate their readings with utility information and a campus dashboard. An approved API or event-driven flow could connect abnormal conditions to maintenance tickets, with data definitions and access rules agreed in advance. Security, connectivity, device management and response ownership must be reviewed. I would start with one building as a pilot and expand in phases if criteria are met. Two KPIs would be time to detect and respond to faults and comparable energy consumption before and after deployment. The cost review should include devices, development, integration, training, cloud use and ongoing maintenance. The next decision should depend on verified benefits and the university’s ability to sustain the solution."
    },
    {
      "topic": "Cases",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "18–27",
      "question": "After the pilot, energy use improves but staff workload rises because of excessive alerts. Recommend a next step.",
      "points": [
        "Consider benefit and harm",
        "Validate attribution",
        "Alert quality/KPIs",
        "Improve workflow",
        "Conditional scale"
      ],
      "answer": "The pilot shows a possible energy benefit, but the increased workload is an important unintended effect. Before scaling, the university should verify the energy comparison against a consistent baseline and examine whether other changes contributed to the saving. It should then assess alert quality: how many alerts are useful, whether duplicate or low-value messages occur and how staff respond. Improving thresholds, event handling or maintenance procedures may reduce the additional workload. Training and operational ownership should also be reviewed. I would recommend improving and re-evaluating the pilot rather than immediately expanding it. The decision to scale should depend on both sustained value and manageable staff and support costs."
    },
    {
      "topic": "Cases",
      "kind": "Apply",
      "marks": 10,
      "slides": "25–27",
      "question": "Explain how to make a post-adoption decision using value, sustainability and next action.",
      "points": [
        "Value",
        "Sustainability",
        "Evidence",
        "Possible actions",
        "Reasoned conclusion"
      ],
      "answer": "A post-adoption review should first determine whether the intended benefits occurred, such as reduced downtime or better service. It should then assess sustainability: whether the organisation can maintain devices and software, staff can operate the process and risks remain controlled. Finally, it must decide what to do next using the evidence. Options include scaling the technology, improving the design, redesigning part of the solution, pausing expansion or retiring it. For campus IoT, a positive monitoring result might support phased scale-up, whereas unreliable connectivity or excessive maintenance effort could justify redesign. The choice should reflect measured organisational value rather than the fact that money has already been spent."
    },
    {
      "topic": "Recap",
      "kind": "Explain",
      "marks": 10,
      "slides": "28",
      "question": "Explain the five official takeaways of Lecture 6.",
      "points": [
        "Integrated systems/data/people",
        "Technical+organisational challenges",
        "Planned rollout",
        "Baseline/KPIs",
        "ROI plus nonfinancial"
      ],
      "answer": "First, integration connects the new technology with existing systems, data, processes and people. Second, technical issues such as compatibility and security must be managed together with organisational issues such as skills and responsibilities. Third, implementation needs planning, testing and support rather than a one-off installation. Fourth, impact evaluation requires defined outcomes, comparable baselines and meaningful indicators. Fifth, ROI can support financial investment decisions, but must be considered alongside strategic and non-financial value. These takeaways form a complete argument: technology creates sustainable value only when it works within the organisation and its effects are evaluated credibly."
    },
    {
      "topic": "Recap",
      "kind": "Apply",
      "marks": 12,
      "slides": "8–29",
      "question": "A lecturer asks, “Did the technology create value?” Outline a complete structured answer.",
      "points": [
        "Problem/integration",
        "Challenges and rollout",
        "Baseline/KPIs",
        "Costs and ROI",
        "Decision/limits"
      ],
      "answer": "I would first restate the original organisational problem and describe how the technology was integrated with existing systems, data and workflows. I would explain which technical and organisational challenges had to be managed and how rollout was tested or staged. Next, I would compare meaningful operational KPIs with documented baselines and targets, considering any unintended effects or other factors that may explain the change. I would then describe financial benefits, full costs and a correctly scoped ROI calculation. Finally, I would judge whether the organisation can sustain the solution and recommend scaling, improvement, redesign, pause or retirement. This provides a defensible answer rather than treating successful installation as proof of value."
    },
    {
      "topic": "Recap",
      "kind": "Analyse",
      "marks": 10,
      "slides": "13–29",
      "question": "Explain why maintenance support remains important even after a technically successful rollout.",
      "points": [
        "Ongoing operations",
        "Security/updates",
        "Data/alerts",
        "Staff capacity",
        "Sustainability"
      ],
      "answer": "A technically successful rollout confirms that a system worked under the tested conditions, but its operation continues as devices, networks, business needs and staff change. Security updates, monitoring, vendor services and replacement parts may be required. Sensor readings can become unreliable and integration interfaces can change, so data quality and error handling need continued attention. Staff must also maintain the workflow for responding to alerts and resolving failures. These costs and responsibilities affect both sustainability and ROI. Therefore, continued support is necessary to preserve the benefit after installation and should be included in feasibility, rollout planning and post-adoption evaluation."
    },
    {
      "topic": "Recap",
      "kind": "Compare",
      "marks": 10,
      "slides": "5, 17–20",
      "question": "Compare implementation success, user adoption and impact success.",
      "points": [
        "Deployment/technical success",
        "Actual usage",
        "Outcome improvement",
        "Examples",
        "Evaluation"
      ],
      "answer": "Implementation success means the new technology has been deployed and integrated so the technical service operates as intended. User adoption means the relevant people accept and use the new tools and workflows effectively. Impact success means the technology produces meaningful organisational outcomes, such as faster maintenance response or reduced energy waste. These can differ. A sensor platform may transmit accurate readings but be ignored by facilities staff, showing technical success without adoption. Staff may also use a dashboard regularly without reducing downtime, showing adoption without the intended impact. Evaluation therefore needs technical checks, user-related indicators and outcome KPIs rather than relying on any single success claim."
    },
    {
      "topic": "Recap",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "21–28",
      "question": "An organisation has 50% first-year ROI but worsening accessibility and staff trust. Should it scale?",
      "points": [
        "ROI evidence",
        "Accessibility/trust impacts",
        "Long term costs/risks",
        "Remediation",
        "Conditional next step"
      ],
      "answer": "The 50% first-year ROI may indicate a positive financial result, but the organisation should not treat it as sufficient evidence for immediate scale-up. The calculation may omit future costs and does not measure accessibility or trust directly. If some users cannot operate the system or staff no longer trust its results, the service may be creating important non-financial harm and may be difficult to sustain. I would investigate the affected users, review workflows, provide support and adjust the design to address the barriers. Operational KPIs and user adoption indicators should be considered alongside ROI. Scaling should depend on whether the proposed improvements resolve these issues while preserving demonstrated value."
    },
    {
      "topic": "Recap",
      "kind": "Design",
      "marks": 12,
      "slides": "29",
      "question": "Answer all three of the lecture’s exit-ticket questions using the campus IoT case.",
      "points": [
        "Integration decision",
        "Priority adoption challenge",
        "Justification",
        "Evidence and ROI",
        "Conclusion"
      ],
      "answer": "One critical integration decision is whether to use a secure event-driven alert linked to the existing maintenance-ticket service and how sensor data will be reconciled with utility records. I would address data quality and maintenance-response ownership early because inaccurate readings or ignored alerts could undermine both trust and the intended benefit. To decide whether the investment created value, I would compare fault-detection and response times and energy use with credible pre-deployment baselines. I would also assess user adoption, ongoing costs and ROI, while recognising that other changes might influence the measured results. Evidence of sustained improvement and manageable operational burden would support a phased expansion rather than an automatic campus-wide rollout."
    }
  ],
  "mcq": [
    {
      "question": "What does technology integration mean?",
      "choices": [
        "Installing a new application only",
        "Connecting new technology with systems, data, workflows and people",
        "Buying cloud services only",
        "Completing UI screens"
      ],
      "correct": 1,
      "explanation": "Slide 5 includes technical and organisational connections.",
      "slides": "5"
    },
    {
      "question": "Which is NOT one of the practical integration-view layers?",
      "choices": [
        "Applications and services",
        "Data and information",
        "Infrastructure/cloud/devices",
        "Company advertising slogans"
      ],
      "correct": 3,
      "explanation": "Slide 7 gives a complete systems-to-people view.",
      "slides": "7"
    },
    {
      "question": "An API is most suited to:",
      "choices": [
        "Controlled application access to data or functionality",
        "Eliminating service contracts",
        "Preventing all failures",
        "Replacing users"
      ],
      "correct": 0,
      "explanation": "APIs define controlled interfaces.",
      "slides": "8"
    },
    {
      "question": "Which item belongs in an API contract?",
      "choices": [
        "Authentication, permissions and versioning",
        "Only font selection",
        "Only product slogan",
        "Unlimited guaranteed uptime"
      ],
      "correct": 0,
      "explanation": "Slide 8 lists contract elements including formats and errors.",
      "slides": "8"
    },
    {
      "question": "Event-driven integration primarily uses:",
      "choices": [
        "Publish/subscribe reactions to meaningful events",
        "Only periodic printed reports",
        "Direct database editing by every user",
        "Static dashboards with no triggers"
      ],
      "correct": 0,
      "explanation": "Systems publish events and subscribers react.",
      "slides": "9"
    },
    {
      "question": "What is a key event-driven risk?",
      "choices": [
        "Duplicate events and message ordering",
        "Guaranteed perfect ordering",
        "No monitoring requirement",
        "Elimination of delays"
      ],
      "correct": 0,
      "explanation": "Slide 9 lists duplication, ordering, delay and monitoring.",
      "slides": "9"
    },
    {
      "question": "What is a key first step in data integration?",
      "choices": [
        "Choose any data lake",
        "Identify authoritative sources and map meanings",
        "Ignore data quality",
        "Delete all source systems"
      ],
      "correct": 1,
      "explanation": "Data ownership and semantics come before transfer.",
      "slides": "10"
    },
    {
      "question": "What is an advantage of edge processing?",
      "choices": [
        "Lower latency close to devices",
        "A guarantee of zero complexity",
        "No need for security",
        "A single universal architecture"
      ],
      "correct": 0,
      "explanation": "Edge provides local processing and lower latency.",
      "slides": "11"
    },
    {
      "question": "What approach combines central and local processing?",
      "choices": [
        "Only big-bang rollout",
        "Hybrid cloud and edge",
        "Only a spreadsheet",
        "An application logo"
      ],
      "correct": 1,
      "explanation": "Hybrid combines cloud and edge with workload placement and oversight.",
      "slides": "11"
    },
    {
      "question": "Which is a technical adoption challenge?",
      "choices": [
        "Protocol and format incompatibility",
        "Only user excitement",
        "No change to existing systems",
        "Guaranteed network independence"
      ],
      "correct": 0,
      "explanation": "Compatibility includes platforms, formats and versions.",
      "slides": "14"
    },
    {
      "question": "Which is an organisational adoption challenge?",
      "choices": [
        "Undefined roles and change fatigue",
        "Only API endpoint naming",
        "Only network latency",
        "Only database size"
      ],
      "correct": 0,
      "explanation": "Slide 15 covers roles, trust, skills and competing initiatives.",
      "slides": "15"
    },
    {
      "question": "Which rollout style changes at one planned point and has higher transition risk?",
      "choices": [
        "Pilot",
        "Phased",
        "Big-bang",
        "Unit testing"
      ],
      "correct": 2,
      "explanation": "The lecture describes big-bang as shorter coexistence but higher transition risk.",
      "slides": "17"
    },
    {
      "question": "Which is an operational KPI?",
      "choices": [
        "Equipment downtime",
        "Number of presentation slides",
        "Technology age",
        "Logo design"
      ],
      "correct": 0,
      "explanation": "Downtime is named among efficiency indicators.",
      "slides": "19"
    },
    {
      "question": "For RM180,000 benefits and RM120,000 costs, the lecture’s first-year ROI is:",
      "choices": [
        "10%",
        "25%",
        "50%",
        "150%"
      ],
      "correct": 2,
      "explanation": "Net benefit RM60,000 divided by cost RM120,000 gives 50%.",
      "slides": "23"
    },
    {
      "question": "Which statement about ROI matches the lecture?",
      "choices": [
        "ROI includes every safety and social effect",
        "ROI should be used alongside KPIs and non-financial value",
        "ROI needs no cost period",
        "Positive ROI guarantees success"
      ],
      "correct": 1,
      "explanation": "ROI has important non-financial and attribution limitations.",
      "slides": "24"
    }
  ],
  "flashcards": [
    {
      "front": "What is Lecture 6’s big question?",
      "back": "Did the technology become workable and create value?",
      "slides": "2"
    },
    {
      "front": "What does technology integration connect?",
      "back": "Existing systems, data, workflows and people.",
      "slides": "5"
    },
    {
      "front": "Name five practical integration layers.",
      "back": "Processes, applications, integration layer, data, infrastructure.",
      "slides": "7"
    },
    {
      "front": "What cuts across all integration layers?",
      "back": "Security, monitoring, governance and change management.",
      "slides": "7"
    },
    {
      "front": "When are APIs useful?",
      "back": "When one application needs controlled access to another.",
      "slides": "8"
    },
    {
      "front": "Name API contract elements.",
      "back": "Endpoints, formats, authentication, permissions, errors, versioning.",
      "slides": "8"
    },
    {
      "front": "Name two API benefits.",
      "back": "Modularity, reuse and faster connection.",
      "slides": "8"
    },
    {
      "front": "Name three API risks.",
      "back": "Security, rate limits, availability, interface changes.",
      "slides": "8"
    },
    {
      "front": "How does event-driven integration work?",
      "back": "Publish an event; subscribing systems respond.",
      "slides": "9"
    },
    {
      "front": "What is the lecture’s event example?",
      "back": "Abnormal temperature triggers an alert and maintenance ticket.",
      "slides": "9"
    },
    {
      "front": "Name four event-driven risks.",
      "back": "Duplicates, ordering, delays and monitoring.",
      "slides": "9"
    },
    {
      "front": "What comes first in data integration?",
      "back": "Define authoritative sources and agree meanings.",
      "slides": "10"
    },
    {
      "front": "What data details need alignment?",
      "back": "Identifiers, formats, quality rules and update frequency.",
      "slides": "10"
    },
    {
      "front": "Name three data integration approaches.",
      "back": "ETL/ELT, data warehouses and data lakes.",
      "slides": "10"
    },
    {
      "front": "Name four data governance concerns.",
      "back": "Lineage, privacy, access control, retention and recovery.",
      "slides": "10"
    },
    {
      "front": "What is cloud integration good for?",
      "back": "Central processing, scalable services and shared analytics.",
      "slides": "11"
    },
    {
      "front": "What is edge integration good for?",
      "back": "Local processing with lower latency and data transfer.",
      "slides": "11"
    },
    {
      "front": "What is hybrid integration?",
      "back": "Combination of cloud and edge with workload placement oversight.",
      "slides": "11"
    },
    {
      "front": "What should guide architecture selection?",
      "back": "Business need, environment, quality and operational capacity.",
      "slides": "12"
    },
    {
      "front": "What is the simplest-approach principle?",
      "back": "Choose the simplest integration meeting sustainable requirements.",
      "slides": "12"
    },
    {
      "front": "Name three technical challenge groups.",
      "back": "Compatibility, security/privacy and reliability.",
      "slides": "14"
    },
    {
      "front": "What can cause compatibility problems?",
      "back": "Different protocols, platforms, data formats and versions.",
      "slides": "14"
    },
    {
      "front": "Name five organisational challenge groups.",
      "back": "Skills, trust, process redesign, governance, change fatigue.",
      "slides": "15"
    },
    {
      "front": "How should adoption challenges be managed?",
      "back": "Owners, early user engagement, pilot, reviews, training and support.",
      "slides": "16"
    },
    {
      "front": "What is a pilot rollout?",
      "back": "Limited deployment to test and learn before wider investment.",
      "slides": "17"
    },
    {
      "front": "What is a phased rollout?",
      "back": "Deploy progressively by site, function or user group.",
      "slides": "17"
    },
    {
      "front": "What is a big-bang rollout?",
      "back": "One planned switch-over with higher transition risk.",
      "slides": "17"
    },
    {
      "front": "What does impact evaluation examine?",
      "back": "Meaningful changes after adoption and evidence linking them to technology.",
      "slides": "18"
    },
    {
      "front": "Name efficiency KPIs.",
      "back": "Processing time, cost/transaction, downtime, manual effort.",
      "slides": "19"
    },
    {
      "front": "Name quality/service KPIs.",
      "back": "Error rate, response time and user satisfaction.",
      "slides": "19"
    },
    {
      "front": "Name adoption/capability KPIs.",
      "back": "Active use, task completion, confidence and staff proficiency.",
      "slides": "19"
    },
    {
      "front": "What are the before-and-after steps?",
      "back": "Baseline, target, consistent measures, stabilise, evaluate cautiously.",
      "slides": "20"
    },
    {
      "front": "What is net benefit?",
      "back": "Financial benefits minus total costs.",
      "slides": "21"
    },
    {
      "front": "What is the ROI formula?",
      "back": "(Net benefit ÷ total investment cost) × 100%.",
      "slides": "21"
    },
    {
      "front": "What costs does a full calculation include?",
      "back": "Initial integration/training plus ongoing support, security and upgrades.",
      "slides": "22"
    },
    {
      "front": "What are the lecture’s ROI example numbers?",
      "back": "Benefits RM180k, costs RM120k, net benefit RM60k.",
      "slides": "23"
    },
    {
      "front": "What is the lecture’s first-year ROI result?",
      "back": "50%, in a simplified illustrative calculation.",
      "slides": "23"
    },
    {
      "front": "Why is ROI alone insufficient?",
      "back": "It misses hard-to-price safety, trust, access and strategic effects.",
      "slides": "24"
    },
    {
      "front": "What three post-adoption questions matter?",
      "back": "Value achieved? Sustainable? Next decision?",
      "slides": "25"
    },
    {
      "front": "What existing systems appear in the campus case?",
      "back": "Building management, separate utility records and campus network.",
      "slides": "26"
    },
    {
      "front": "What is the campus integration task?",
      "back": "Connect sensor data to dashboard and maintenance workflow.",
      "slides": "26"
    },
    {
      "front": "Name campus technical adoption challenges.",
      "back": "Coverage, device security, data quality and support.",
      "slides": "26"
    },
    {
      "front": "What are the five official lecture takeaways?",
      "back": "Integration, joint challenges, supported rollout, impact evidence, balanced ROI.",
      "slides": "28"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "Integration meaning",
    "slides": "2–5",
    "scenario": "A university installs a smart-monitoring device, but its data never reaches maintenance staff.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO elements required for genuine technology integration.",
        "marks": 4,
        "items": [
          "The device must connect to existing software systems and data flows.",
          "Its alerts must become actionable within people’s normal work processes."
        ],
        "model": "Genuine technology integration requires connecting the new tool to the organisation’s existing systems and data, not simply running it separately. It also requires fitting the tool into the actual workflows and responsibilities of the people who use and maintain it. Both the technical and organisational connections are necessary for a complete service."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons installation alone is insufficient.",
        "marks": 6,
        "items": [
          "The tool may not exchange information with existing applications.",
          "Staff may lack ownership or procedures to respond to results.",
          "Benefits cannot be confirmed without operational outcomes and monitoring."
        ],
        "model": "Installation alone is insufficient for three reasons. First, an installed tool may not exchange information with existing applications, forcing staff to re-enter data. Second, the business workflow may remain unchanged, so the expected improvement in service does not occur. Third, responsibilities for monitoring, security and support may be unclear, leaving failures unresolved. Integration succeeds only when the technology, data, processes and people work together."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Integration architecture",
    "slides": "5–7",
    "scenario": "A university wants a dashboard to combine sensor alerts, maintenance information and staff actions.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO layers from the lecture’s integration view.",
        "marks": 4,
        "items": [
          "The user and business-process layer describes what staff must do.",
          "The applications and services layer provides the dashboard and maintenance functions."
        ],
        "model": "First, the user and business-process layer describes what staff must do. Second, the applications and services layer provides the dashboard and maintenance functions. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE other required architectural layers or cross-cutting concerns.",
        "marks": 6,
        "items": [
          "Integration APIs or messaging connect the software services.",
          "Data and information need correct meaning, quality and access rules.",
          "Infrastructure plus security, monitoring and governance must support every layer."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, integration APIs or messaging connect the software services. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, data and information need correct meaning, quality and access rules. Third, infrastructure plus security, monitoring and governance must support every layer. Clear decision authority means the team knows who can approve a change and accept its residual risks. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "API integration",
    "slides": "8",
    "scenario": "A dashboard needs controlled access to the university maintenance-ticket system.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO elements of an API contract.",
        "marks": 4,
        "items": [
          "Endpoints specify the permitted operations and resources.",
          "Authentication and permissions define who may perform those operations."
        ],
        "model": "First, endpoints specify the permitted operations and resources. Second, authentication and permissions define who may perform those operations. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE other controls needed for safe API integration.",
        "marks": 6,
        "items": [
          "Define input/output formats and error behaviour.",
          "Plan interface versioning when services change.",
          "Manage rate limits, availability and security of API access."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, define input/output formats and error behaviour. Second, plan interface versioning when services change. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, manage rate limits, availability and security of API access. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Events",
    "slides": "9",
    "scenario": "An IoT sensor detects dangerous temperature and publishes an alert to other applications.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO characteristics of event-driven integration.",
        "marks": 4,
        "items": [
          "One system publishes a message when something meaningful occurs.",
          "Subscribing systems react without requiring every activity to happen simultaneously."
        ],
        "model": "First, one system publishes a message when something meaningful occurs. Second, subscribing systems react without requiring every activity to happen simultaneously. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE engineering challenges when using events.",
        "marks": 6,
        "items": [
          "Duplicate messages must not create duplicate repair tickets.",
          "Delivery delays and message ordering can change outcomes.",
          "Monitoring and failure recovery must reveal missing or unprocessed events."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, duplicate messages must not create duplicate repair tickets. Second, delivery delays and message ordering can change outcomes. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Third, monitoring and failure recovery must reveal missing or unprocessed events. Recorded operational evidence makes problems visible and allows the team to investigate what happened. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Data integration",
    "slides": "10",
    "scenario": "Student and facility systems disagree on location identifiers and maintenance statuses.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO data-integration tasks.",
        "marks": 4,
        "items": [
          "Choose an authoritative source for each critical data item.",
          "Map identifiers, structures and meanings between systems."
        ],
        "model": "First, choose an authoritative source for each critical data item. Second, map identifiers, structures and meanings between systems. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE further data-integration controls.",
        "marks": 6,
        "items": [
          "Define data quality validation and update frequency.",
          "Apply privacy, access restrictions and retention policies.",
          "Record data lineage and prepare recovery procedures."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, define data quality validation and update frequency. Second, apply privacy, access restrictions and retention policies. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, record data lineage and prepare recovery procedures. The service must remain usable, or recover safely, when a component or connection fails. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Cloud/edge/hybrid",
    "slides": "11–12",
    "scenario": "A university needs instant local sensor alerts and central reporting across all buildings.",
    "parts": [
      {
        "letter": "a",
        "question": "Distinguish TWO processing strategies from the lecture.",
        "marks": 4,
        "items": [
          "Edge processing handles time-sensitive actions close to the sensors.",
          "Cloud processing supports centralised storage and large-scale reporting or analytics."
        ],
        "model": "First, edge processing handles time-sensitive actions close to the sensors. Second, cloud processing supports centralised storage and large-scale reporting or analytics. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE considerations for a hybrid approach.",
        "marks": 6,
        "items": [
          "Decide which decisions must remain local during network problems.",
          "Define how local and cloud data will synchronise.",
          "Plan security, monitoring and operational ownership across both environments."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, decide which decisions must remain local during network problems. Second, define how local and cloud data will synchronise. The design must keep operating at expected demand, not only under a small demonstration load. Third, plan security, monitoring and operational ownership across both environments. Recorded operational evidence makes problems visible and allows the team to investigate what happened. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Choice of strategy",
    "slides": "8–12",
    "scenario": "A team wants to connect a legacy finance system to a new student-service application.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO requirements used to select an integration strategy.",
        "marks": 4,
        "items": [
          "Business requirements determine whether data sharing is immediate or periodic.",
          "Existing system interfaces, platforms and network limits determine technical compatibility."
        ],
        "model": "First, business requirements determine whether data sharing is immediate or periodic. Second, existing system interfaces, platforms and network limits determine technical compatibility. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE quality or operational factors to consider.",
        "marks": 6,
        "items": [
          "Protect privacy and security at system boundaries.",
          "Check latency, availability and maintainability expectations.",
          "Choose the simplest approach staff can support reliably."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, protect privacy and security at system boundaries. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Second, check latency, availability and maintainability expectations. The service must remain usable, or recover safely, when a component or connection fails. Third, choose the simplest approach staff can support reliably. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Reliable interfaces and operational responsibilities matter as much as the initial connection."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Integration challenges",
    "slides": "13–14",
    "scenario": "A modern cloud platform must connect to an old database that has inconsistent records.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO technical challenges.",
        "marks": 4,
        "items": [
          "Platform, protocol or version incompatibilities may prevent communication.",
          "Poorly defined and inconsistent data complicates mapping."
        ],
        "model": "First, platform, protocol or version incompatibilities may prevent communication. Second, poorly defined and inconsistent data complicates mapping. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE mitigations.",
        "marks": 6,
        "items": [
          "Document interfaces and test compatibility using a controlled pilot.",
          "Clean and reconcile important records before migration.",
          "Review security, access control and recovery for every new data flow."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, document interfaces and test compatibility using a controlled pilot. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, clean and reconcile important records before migration. Third, review security, access control and recovery for every new data flow. Only people or services with a genuine need should be allowed to perform sensitive actions. Reliable interfaces and operational responsibilities matter as much as the initial connection."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Organisational challenges",
    "slides": "13, 15",
    "scenario": "After a new system is installed, staff continue using paper forms because they distrust it.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO organisational barriers.",
        "marks": 4,
        "items": [
          "Resistance and lack of trust limit adoption.",
          "Existing procedures may not support the new tool or staff roles."
        ],
        "model": "First, resistance and lack of trust limit adoption. Second, existing procedures may not support the new tool or staff roles. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE management actions.",
        "marks": 6,
        "items": [
          "Engage users in the design and explain the intended benefits.",
          "Train staff and give them reliable support and escalation routes.",
          "Clarify accountability and adjust processes using feedback."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, engage users in the design and explain the intended benefits. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, train staff and give them reliable support and escalation routes. The service must remain usable, or recover safely, when a component or connection fails. Third, clarify accountability and adjust processes using feedback. Linking development to real operating conditions helps teams improve the service after each release."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Managing adoption",
    "slides": "15–16",
    "scenario": "A hospital wants to introduce smart-monitoring software but has no agreed project owner.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO priority governance actions.",
        "marks": 4,
        "items": [
          "Appoint business and technical owners with defined decision rights.",
          "Establish success criteria for a limited pilot before launch."
        ],
        "model": "First, appoint business and technical owners with defined decision rights. Second, establish success criteria for a limited pilot before launch. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE other adoption actions.",
        "marks": 6,
        "items": [
          "Involve operational staff and users early.",
          "Perform architecture, security, privacy and data reviews throughout delivery.",
          "Provide training, support and continuous improvement after launch."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, involve operational staff and users early. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Second, perform architecture, security, privacy and data reviews throughout delivery. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, provide training, support and continuous improvement after launch. A controlled introduction lets the team discover issues before they affect every user."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Rollout methods",
    "slides": "17",
    "scenario": "A university needs to choose between pilot, phased rollout and big-bang deployment.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO differences among rollout approaches.",
        "marks": 4,
        "items": [
          "A pilot tests the system within a limited environment before broad investment.",
          "A phased rollout introduces the solution progressively by site or function."
        ],
        "model": "First, a pilot tests the system within a limited environment before broad investment. Second, a phased rollout introduces the solution progressively by site or function. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons to avoid a big-bang rollout when uncertainty is high.",
        "marks": 6,
        "items": [
          "Switching everyone at once creates greater transition risk.",
          "Major defects may interrupt all users at the same time.",
          "A pilot and phased rollout allow learning and corrective action before full scale."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, switching everyone at once creates greater transition risk. Second, major defects may interrupt all users at the same time. Third, a pilot and phased rollout allow learning and corrective action before full scale. Doing prerequisite work first avoids costly rework and makes changes easier to test. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Impact evaluation",
    "slides": "18–20",
    "scenario": "Management says the new IoT platform is successful because all sensors are connected.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO outcomes that should be measured beyond installation.",
        "marks": 4,
        "items": [
          "Fault-detection or response time should show service improvement.",
          "Energy use or downtime should show operational improvement."
        ],
        "model": "First, fault-detection or response time should show service improvement. Second, energy use or downtime should show operational improvement. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE elements of a credible evaluation.",
        "marks": 6,
        "items": [
          "Collect a pre-implementation baseline using consistent measurement definitions.",
          "Compare post-implementation results with targets or alternatives.",
          "Examine unintended impacts and other factors that may have affected results."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, collect a pre-implementation baseline using consistent measurement definitions. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, compare post-implementation results with targets or alternatives. Third, examine unintended impacts and other factors that may have affected results. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "ROI formula",
    "slides": "21–23",
    "scenario": "An IoT project costs RM120,000 in its first year and produces RM180,000 in annual financial benefits.",
    "parts": [
      {
        "letter": "a",
        "question": "Calculate TWO financial values: net benefit and ROI.",
        "marks": 4,
        "items": [
          "Net benefit = RM180,000 − RM120,000 = RM60,000.",
          "ROI = (RM60,000 ÷ RM120,000) × 100 = 50%."
        ],
        "model": "The net financial benefit is RM180,000 − RM120,000 = RM60,000. The return on investment is (RM60,000 ÷ RM120,000) × 100 = 50%. This means the simplified first-year net return is equal to 50% of the investment cost."
      },
      {
        "letter": "b",
        "question": "Explain THREE assumptions or limitations of the result.",
        "marks": 6,
        "items": [
          "The time period must match across benefits and costs.",
          "Later-year costs and timing of cash flows are excluded from this simple example.",
          "Safety, resilience and non-financial benefits are not fully captured."
        ],
        "model": "The 50% ROI must be interpreted with three assumptions in mind. First, the RM180,000 benefit and RM120,000 cost must refer to a comparable one-year period. Second, the simplified calculation omits future support costs and the timing of cash flows, which can affect financial value. Third, important outcomes such as improved safety or resilience may not be expressed in money. The university should therefore combine the ROI figure with operational indicators and risk assessment."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Costs",
    "slides": "21–24",
    "scenario": "The business case for a new application includes licence fees but ignores integration and maintenance.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO categories of cost that must be added.",
        "marks": 4,
        "items": [
          "Initial costs include integration, migration, development, tests and training.",
          "Ongoing costs include hosting, support, security and upgrades."
        ],
        "model": "First, the evaluation should include initial costs include integration, migration, development, tests and training. Second, the evaluation should include ongoing costs include hosting, support, security and upgrades. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE problems when full costs are ignored.",
        "marks": 6,
        "items": [
          "Reported ROI may be overstated.",
          "Support and replacement budgets may be insufficient.",
          "Decision-makers may compare options unfairly or miss long-term financial risk."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, reported ROI may be overstated. Including the full lifecycle cost prevents an overly optimistic investment decision. Second, support and replacement budgets may be insufficient. Third, decision-makers may compare options unfairly or miss long-term financial risk. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Any investment decision should use comparable financial periods and consider non-financial outcomes as well."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Post-adoption review",
    "slides": "18–28",
    "scenario": "An advanced monitoring system delivers some savings but users complain about extra manual work.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO dimensions of a balanced post-adoption review.",
        "marks": 4,
        "items": [
          "Value includes measured service or performance improvement.",
          "Sustainability includes whether the organisation can maintain the solution and control risk."
        ],
        "model": "First, value includes measured service or performance improvement. Second, sustainability includes whether the organisation can maintain the solution and control risk. Both matter to whether the new service will work reliably within existing systems and practices."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasonable next decisions and their conditions.",
        "marks": 6,
        "items": [
          "Scale up if benefits and operational readiness are demonstrated.",
          "Redesign if the technology works but workflows cause avoidable burden.",
          "Pause or retire if risks and total costs outweigh credible value."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, scale up if benefits and operational readiness are demonstrated. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, redesign if the technology works but workflows cause avoidable burden. Clarifying who does what is necessary before automating the same activity in software. Third, pause or retire if risks and total costs outweigh credible value. Including the full lifecycle cost prevents an overly optimistic investment decision."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Smart university monitoring",
    "slides": "5–20, 25–27",
    "scenario": "A university deploys IoT sensors for energy and room conditions. It has a building-management system, utility records and a maintenance-ticket workflow. Early tests reveal missing messages, inconsistent room identifiers and unclear staff responsibilities.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE integration requirements.",
        "marks": 5,
        "items": [
          "Data exchange with existing building-management services.",
          "Reliable identifiers for rooms and assets.",
          "Secure network access for devices.",
          "Alert creation in the maintenance workflow.",
          "Named responsibilities for monitoring and incident response."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, data exchange with existing building-management services. Second, reliable identifiers for rooms and assets. Third, secure network access for devices. Fourth, alert creation in the maintenance workflow. Fifth, named responsibilities for monitoring and incident response."
      },
      {
        "letter": "b",
        "question": "Explain FIVE technical or organisational controls needed before rollout.",
        "marks": 10,
        "items": [
          "Use defined APIs or events for data exchange.",
          "Map and validate room identifiers and sensor readings.",
          "Handle duplicate and missing event messages.",
          "Assign staff ownership and provide training.",
          "Test privacy, device security, monitoring and recovery."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, use defined APIs or events for data exchange. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, map and validate room identifiers and sensor readings. This is useful only when the collected readings are accurate and someone can act on the information. Third, handle duplicate and missing event messages. Fourth, assign staff ownership and provide training. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Fifth, test privacy, device security, monitoring and recovery. This reduces unnecessary exposure of personal information and supports more responsible use of the system. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      },
      {
        "letter": "c",
        "question": "Propose FIVE indicators and a justified rollout decision.",
        "marks": 10,
        "items": [
          "Measure baseline energy use before installation.",
          "Compare time to detect and resolve faults.",
          "Record missing-event and sensor error rates.",
          "Track user adoption and maintenance workload.",
          "Start with a bounded pilot and scale only with demonstrated value."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, measure baseline energy use before installation. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, compare time to detect and resolve faults. Third, record missing-event and sensor error rates. This is useful only when the collected readings are accurate and someone can act on the information. Fourth, track user adoption and maintenance workload. The design must keep operating at expected demand, not only under a small demonstration load. Fifth, start with a bounded pilot and scale only with demonstrated value. A controlled introduction lets the team discover issues before they affect every user. The team should verify that alerts lead to timely, accountable actions rather than only displaying more data."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Technology investment and ROI",
    "slides": "17–25",
    "scenario": "A manufacturer proposes a monitoring service. First-year investment is RM120,000 and expected annual financial benefit is RM180,000. The system could reduce downtime but staff need additional training and the supplier charges recurring fees.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE cost or benefit categories for the business case.",
        "marks": 5,
        "items": [
          "Hardware, licences and integration costs.",
          "Data migration, testing and initial training.",
          "Cloud, support and vendor service fees.",
          "Savings from lower downtime and maintenance effort.",
          "Non-financial value such as resilience and safety."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, the evaluation should include hardware, licences and integration costs. Second, the evaluation should include data migration, testing and initial training. Third, the evaluation should include cloud, support and vendor service fees. Fourth, the evaluation should include savings from lower downtime and maintenance effort. Fifth, the evaluation should include non-financial value such as resilience and safety."
      },
      {
        "letter": "b",
        "question": "Calculate and explain FIVE parts of a basic first-year ROI analysis.",
        "marks": 10,
        "items": [
          "Financial benefit: RM180,000 for the stated first year.",
          "Total first-year cost: RM120,000 under the simplified assumption.",
          "Net benefit: RM180,000 − RM120,000 = RM60,000.",
          "ROI: RM60,000 ÷ RM120,000 × 100 = 50%.",
          "State that future costs and uncertain benefits can change the decision."
        ],
        "model": "For the simplified first-year calculation, the monitoring service is expected to produce RM180,000 in financial benefits and incur RM120,000 in total costs. Net benefit = RM180,000 − RM120,000 = RM60,000. ROI = (RM60,000 ÷ RM120,000) × 100 = 50%. Thus, the projected financial benefit exceeds the initial first-year cost, producing a positive 50% return under the stated assumptions. However, the manufacturer must verify the expected savings and account for recurring service fees, later-year spending and uncertainty before approving full deployment."
      },
      {
        "letter": "c",
        "question": "Justify FIVE checks before recommending full deployment.",
        "marks": 10,
        "items": [
          "Verify that predicted downtime reductions are supported by baseline data.",
          "Confirm costs include training and ongoing services.",
          "Compare realised service indicators after a pilot.",
          "Evaluate security, reliability and user readiness.",
          "Combine financial ROI with risk reduction and longer-term operational sustainability."
        ],
        "model": "A workable solution must be integrated, supported and evaluated after implementation. First, verify that predicted downtime reductions are supported by baseline data. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, confirm costs include training and ongoing services. Including the full lifecycle cost prevents an overly optimistic investment decision. Third, compare realised service indicators after a pilot. A controlled introduction lets the team discover issues before they affect every user. Fourth, evaluate security, reliability and user readiness. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Fifth, combine financial ROI with risk reduction and longer-term operational sustainability. A meaningful contribution needs a clear mechanism and measurable real-world effect. Any investment decision should use comparable financial periods and consider non-financial outcomes as well."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='lecture6_v1_';

// Study tools and progress
const $=(x)=>document.getElementById(x);
const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storage={get(k,fallback){try{return JSON.parse(localStorage.getItem(STORAGE_PREFIX+k))??fallback}catch(e){return fallback}},set(k,v){try{localStorage.setItem(STORAGE_PREFIX+k,JSON.stringify(v))}catch(e){}}};
let mcqAnswers=storage.get('mcq',{}),flashStatus=storage.get('flash',{});
const tabNames=['summary','mind','essay','mcq','flash'];
function tab(go){
 if(!tabNames.includes(go))return;
 document.querySelectorAll('[data-go]').forEach(b=>b.classList.toggle('active',b.dataset.go===go));
 document.querySelectorAll('.main-section').forEach(s=>s.classList.toggle('active',s.id===go+'-section'));
 storage.set('activeTab',go);
 storage.set('activeTopic',null);
 if(location.hash!=='#'+go+'-section')history.replaceState(null,'','#'+go+'-section');
 window.scrollTo({top:0,behavior:'instant'});
}
function restoreTab(){
 const topicHash=/^#topic-(\d+)(?:-(?:header|content))?$/.exec(location.hash);
 if(topicHash&&openTopic(Number(topicHash[1])-1))return;
 const hashTab=location.hash.slice(1).replace(/-section$/,'');
 const savedTab=storage.get('activeTab','summary');
 const savedTopic=storage.get('activeTopic',null);
 if(!tabNames.includes(hashTab)&&savedTab==='summary'&&Number.isInteger(savedTopic)&&openTopic(savedTopic))return;
 tab(tabNames.includes(hashTab)?hashTab:tabNames.includes(savedTab)?savedTab:'summary');
}
function openTopic(index){
 if(!Number.isInteger(index)||index<0||index>=DATA.summary.length)return false;
 const card=$('topic-'+(index+1));
 if(!card)return false;
 tab('summary');
 card.open=true;
 storage.set('activeTopic',index);
 history.replaceState(null,'','#topic-'+(index+1)+'-header');
 const scroll=()=>card.scrollIntoView({block:'start',behavior:'instant'});
 scroll();
 requestAnimationFrame(scroll);
 return true;
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>tab(b.dataset.go)));
window.addEventListener('hashchange',restoreTab);
$('topicCount').textContent=DATA.summary.length;$('essayCount').textContent=STRUCTURED.length;$('mcqCount').textContent=DATA.mcq.length;$('flashCount').textContent=DATA.flashcards.length;
// Detailed notes. All topic details start expanded for reading.
$('summary-list').innerHTML=DATA.summary.map((t,i)=>`<details class="summary-card" id="topic-${i+1}" open><summary id="topic-${i+1}-header" aria-controls="topic-${i+1}-content"><span class="number">${String(i+1).padStart(2,'0')}</span><span><h3>${esc(t.title)}</h3><span class="source">Source slides ${esc(t.slides)}</span></span><span class="down" aria-hidden="true"><svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span></summary><div class="inner" id="topic-${i+1}-content" aria-labelledby="topic-${i+1}-header">${t.html}</div></details>`).join('');
$('expand-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=true);
$('collapse-all').onclick=()=>document.querySelectorAll('.summary-card').forEach(e=>e.open=false);
function doPrint(mode){document.body.classList.remove('print-summary','print-questions','print-answers');document.body.classList.add('print-'+mode);document.querySelectorAll('.summary-card').forEach(e=>e.open=true);if(mode==='answers')document.querySelectorAll('.answer-box').forEach(e=>e.classList.remove('hidden'));window.print();}
window.addEventListener('afterprint',()=>document.body.classList.remove('print-summary','print-questions','print-answers'));
$('print-summary').onclick=()=>doPrint('summary');$('print-questions').onclick=()=>doPrint('questions');$('print-answers').onclick=()=>doPrint('answers');
// Exam-style structured questions, patterned on the two uploaded BITP 3423 past papers.
// The past papers contain Part A (five structured questions, 50 marks) and Part B (two case studies, 50 marks).
// Our original scenarios and marking suggestions are revision examples, NOT copied examination questions or official keys.
const examKinds=[...new Set(STRUCTURED.map(x=>x.section))];
const examTopics=[...new Set(STRUCTURED.map(x=>x.topic))];
$('essay-kind').innerHTML+=examKinds.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
$('essay-topic').innerHTML+=examTopics.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join('');
let structAnswers=storage.get('structured_answers_v2',{});
let structReviewed=storage.get('structured_reviewed_v2',{});
function renderStructured(){
 const term=$('essay-search').value.toLowerCase().trim(),topic=$('essay-topic').value,kind=$('essay-kind').value,sel=$('exam-set').value;
 const filtered=STRUCTURED.map((e,i)=>({...e,original:i})).filter(e=>
  (topic==='all'||e.topic===topic) && (kind==='all'||e.section===kind) && (sel==='all'||e.practiceSet===sel) &&
  (!term||[e.scenario,e.topic,e.section,...e.parts.flatMap(p=>[p.question,...p.items,p.model])].join(' ').toLowerCase().includes(term))
 );
 $('essay-filter-count').textContent=`${filtered.length} of ${STRUCTURED.length} practice questions`;
 $('essay-list').innerHTML=filtered.map(e=>{
  const total=e.parts.reduce((s,p)=>s+p.marks,0);
  return `<article class="essay-card st-card" data-structured="${e.original}">
    <div class="qhead"><span class="qnum">${esc(e.display)}</span><div class="pills"><span class="pill">${esc(e.topic)}</span><span class="pill">${esc(e.section)}</span><span class="pill pmarks">${total} marks</span><span class="pill">Lecture slides ${esc(e.slides)}</span></div></div>
    <p class="st-scenario">${esc(e.scenario)}</p>
    ${e.parts.map((p,j)=>{
      const key=e.original+':'+j;
      return `<div class="st-part">
       <div class="st-prompt"><span class="st-letter">(${esc(p.letter)})</span><div class="st-ask">${esc(p.question)}</div><span class="st-mark">(${p.marks} marks)</span></div>
       <label for="struct-${e.original}-${j}">Your answer to (${esc(p.letter)}) · autosaved</label>
       <textarea class="essay-input st-answer-input" id="struct-${e.original}-${j}" data-structured-input="${key}" rows="2" placeholder="Write distinct numbered points. Add a short explanation or case example for each."></textarea>
       <div class="st-guide-actions"><button class="btn" data-guide="${e.original}-${j}" aria-expanded="false">Reveal full suggested answer + marking points</button><span class="model-note">${p.items.length} expected points · indicative allocation only</span></div>
       <div class="answer-box hidden" id="st-guide-${e.original}-${j}">
         <h4>Suggested full answer for (${esc(p.letter)})</h4>
         <div class="st-full-model"><p>${esc(p.model)}</p></div>
         <h4 class="st-points-title">Key marking points</h4>
         <ol class="marking st-marking">${p.items.map(item=>`<li>${esc(item)}</li>`).join('')}</ol>
         <p class="model-note">The model response is an example, not an official answer scheme. Approximately ${p.marks/p.items.length} mark(s) per relevant point for this practice question. Other valid and well-explained answers may earn credit.</p>
       </div>
      </div>`;
    }).join('')}
    <div class="essay-toolbar"><span id="st-review-${e.original}" class="${structReviewed[e.original]?'reviewed':'model-note'}">${structReviewed[e.original]?'✓ Marked reviewed':'Answer all subparts, then reveal the guides'}</span><div class="right"><button class="btn" data-struct-review="${e.original}">${structReviewed[e.original]?'Unmark reviewed':'Mark reviewed'}</button></div></div>
   </article>`;
 }).join('')||'<div class="empty">No structured questions match the selected filters.</div>';
 filtered.forEach(e=>e.parts.forEach((p,j)=>{const el=$('struct-'+e.original+'-'+j);if(el)el.value=structAnswers[e.original+':'+j]||'';}));
}
renderStructured();
$('essay-topic').onchange=renderStructured;
$('essay-kind').onchange=renderStructured;
$('exam-set').onchange=renderStructured;
$('essay-search').oninput=renderStructured;
$('essay-list').addEventListener('input',ev=>{
 if(ev.target.dataset.structuredInput!==undefined){structAnswers[ev.target.dataset.structuredInput]=ev.target.value;storage.set('structured_answers_v2',structAnswers)}
});
$('essay-list').addEventListener('click',ev=>{
 const b=ev.target.closest('button');if(!b)return;
 if(b.dataset.guide!==undefined){
  const el=$('st-guide-'+b.dataset.guide),shown=el.classList.toggle('hidden')===false;
  b.textContent=shown?'Hide suggested answer + marking points':'Reveal full suggested answer + marking points';
  b.setAttribute('aria-expanded',String(shown));
 } else if(b.dataset.structReview!==undefined){
  const i=b.dataset.structReview;structReviewed[i]=!structReviewed[i];storage.set('structured_reviewed_v2',structReviewed);
  $('st-review-'+i).textContent=structReviewed[i]?'✓ Marked reviewed':'Answer all subparts, then reveal the guides';
  $('st-review-'+i).className=structReviewed[i]?'reviewed':'model-note';
  b.textContent=structReviewed[i]?'Unmark reviewed':'Mark reviewed';
 }
});
// MCQ with immediate feedback and reason.
function renderMCQ(){let correct=0,completed=0;let out='';DATA.mcq.forEach((q,i)=>{const selected=mcqAnswers[i],answered=Number.isInteger(selected);if(answered){completed++;if(selected===q.correct)correct++;}out+=`<article class="question-card"><div class="qhead"><span class="qnum">${i+1}</span><div class="qtitle">${esc(q.question)}</div><div class="pills"><span class="pill">Slides ${esc(q.slides)}</span></div></div><div class="choices">${q.choices.map((opt,j)=>`<button class="choice ${answered&&j===q.correct?'right':''} ${answered&&j===selected&&j!==q.correct?'wrong':''}" ${answered?'disabled':''} data-q="${i}" data-choice="${j}"><span class="letter">${'ABCD'[j]}</span>${esc(opt)}</button>`).join('')}</div>${answered?`<div class="explain"><b>${selected===q.correct?'Correct!':'Not quite.'} Answer: ${'ABCD'[q.correct]}.</b> ${esc(q.explanation)}</div>`:''}</article>`});
$('mcq-list').innerHTML=out;$('quiz-summary').innerHTML=`<strong>${completed} / ${DATA.mcq.length}</strong> answered · <strong>${correct}</strong> correct${completed===DATA.mcq.length?' · Quiz complete — revisit any incorrect answers after reset.':''}`;
}
renderMCQ();
$('mcq-list').addEventListener('click',ev=>{const b=ev.target.closest('[data-q]');if(!b)return;const i=Number(b.dataset.q);if(Number.isInteger(mcqAnswers[i]))return;mcqAnswers[i]=Number(b.dataset.choice);storage.set('mcq',mcqAnswers);renderMCQ()});
$('mcq-reset').onclick=()=>{if(confirm('Reset all MCQ answers?')){mcqAnswers={};storage.set('mcq',mcqAnswers);renderMCQ()}};
// Flashcard review. Use index pool to support shuffled and missed-only views.
let flashIndices=DATA.flashcards.map((_,i)=>i),flashPos=0;
function flashRender(){if(!flashIndices.length){$('study-card').classList.add('hidden');$('flash-number').textContent='No missed cards. Great work!';$('flash-source').textContent='';$('flash-front').textContent='';$('flash-back').textContent='';$('flash-progress').textContent='';$('flash-bar').style.width='100%';return;}
$('study-card').classList.remove('hidden','flipped');flashPos=Math.max(0,Math.min(flashIndices.length-1,flashPos));const idx=flashIndices[flashPos],card=DATA.flashcards[idx];$('flash-front').textContent=card.front;$('flash-back').textContent=card.back;$('flash-number').textContent=`Card ${flashPos+1} / ${flashIndices.length}`;$('flash-source').textContent='Slides '+card.slides;const known=Object.values(flashStatus).filter(v=>v==='known').length,missed=Object.values(flashStatus).filter(v=>v==='missed').length;$('flash-progress').textContent=`${known} known · ${missed} need practice`;$('flash-bar').style.width=(known/DATA.flashcards.length*100)+'%';}
function flashMove(delta){if(!flashIndices.length)return;flashPos=(flashPos+delta+flashIndices.length)%flashIndices.length;flashRender()}
function flashRate(rate){if(!flashIndices.length)return;flashStatus[flashIndices[flashPos]]=rate;storage.set('flash',flashStatus);flashMove(1)}
$('study-card').onclick=()=>{$('study-card').classList.toggle('flipped')};$('study-card').onkeydown=ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();$('study-card').click()}};
$('flash-prev').onclick=()=>flashMove(-1);$('flash-next').onclick=()=>flashMove(1);$('flash-know').onclick=()=>flashRate('known');$('flash-again').onclick=()=>flashRate('missed');
$('flash-shuffle').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i);for(let i=flashIndices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flashIndices[i],flashIndices[j]]=[flashIndices[j],flashIndices[i]];}flashPos=0;flashRender()};
$('flash-missed').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i).filter(i=>flashStatus[i]==='missed');flashPos=0;flashRender()};
$('flash-all').onclick=()=>{flashIndices=DATA.flashcards.map((_,i)=>i);flashPos=0;flashRender()};
document.addEventListener('keydown',ev=>{if(!$('flash-section').classList.contains('active')||ev.target.closest('textarea,input,select'))return;if(ev.key==='ArrowRight')flashMove(1);if(ev.key==='ArrowLeft')flashMove(-1)});
flashRender();

// Fast-recall map: toggle question-only review without changing saved answers.
(function(){
 const sec=document.getElementById('mind-section'),drill=document.getElementById('mind-drill'),print=document.getElementById('mind-print');
 if(!sec||!drill||!print)return;
 drill.addEventListener('click',()=>{
   const enabled=sec.classList.toggle('mind-drill');
   sec.querySelectorAll('.mind-node').forEach(el=>el.classList.remove('revealed'));
   drill.textContent=enabled?'Show all key items':'Test my memory';
   drill.setAttribute('aria-pressed',String(enabled));
 });
 sec.querySelectorAll('.mind-node').forEach(node=>{
   const reveal=()=>{if(sec.classList.contains('mind-drill'))node.classList.toggle('revealed')};
   node.addEventListener('click',reveal);
   node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reveal()}});
 });
 print.addEventListener('click',()=>{document.body.classList.add('print-mind');window.print()});
 window.addEventListener('afterprint',()=>document.body.classList.remove('print-mind'));
})();

window.addEventListener('message',event=>{
 const route=event.data;
 if(!route||route.type!=='study-route')return;
 if(route.topic!=null){
  openTopic(Number(route.topic));
 }else if(route.go)tab(route.go);
});

// Restore after the topic cards and the rest of the lecture have rendered.
restoreTab();
window.addEventListener('load',restoreTab);

// Lecture interactions
// Lecture 6 strategy explorer, ROI calculator, and model answers.
(() => {
  const root = document.getElementById('summary-list');
  const escapeText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const intStrategies = [
      {
        badge: "STRATEGY 1 • APIs AND SERVICES (SLIDE 8)",
        bg: "#e0f2fe",
        title: "Strategy 1: APIs and Services (Controlled Synchronous Access)",
        when: "Use when one application needs controlled, on-demand access to another application’s data or functionality.",
        design: "Define explicit API contracts: endpoints, request/response formats, authentication, role permissions, error handling, and versioning.",
        benefits: "Strong modularity, capability reuse across channels, and faster point-to-point connection.",
        watchouts: "API security exposure, rate limits, upstream service availability, and breaking interface changes."
      },
      {
        badge: "STRATEGY 2 • EVENT-DRIVEN INTEGRATION (SLIDE 9)",
        bg: "#fef9c3",
        title: "Strategy 2: Event-Driven Integration (Publish / Subscribe)",
        when: "Systems publish events when something meaningful happens; interested systems subscribe and react asynchronously without needing to run at the exact same moment.",
        design: "Define event schemas, message brokers/topics, retry policies, and subscriber workflows (e.g., IoT sensor detects abnormal temperature → triggers alert + maintenance ticket).",
        benefits: "Loose coupling between producers and consumers, natural scalability for bursty telemetry, and real-time responsiveness.",
        watchouts: "Duplicate event processing (idempotency needed), out-of-order messages, delivery delays, and distributed monitoring."
      },
      {
        badge: "STRATEGY 3 • DATA INTEGRATION (SLIDE 10)",
        bg: "#ffedd5",
        title: "Strategy 3: Data Integration (Authoritative Sources & Pipelines)",
        when: "Use when consolidating, transforming, or synchronising analytical and operational datasets across multiple enterprise repositories.",
        design: "Identify the authoritative source for each data item; align identifiers, formats, quality rules, and update frequency using ETL/ELT pipelines, data warehouses, or data lakes.",
        benefits: "Trusted cross-departmental reporting, unified historical analytics, and governed data lineage.",
        watchouts: "Data lineage complexity, privacy compliance, access control granularity, retention rules, and backup/recovery."
      },
      {
        badge: "STRATEGY 4 • CLOUD, EDGE AND HYBRID (SLIDE 11)",
        bg: "#eeeeff",
        title: "Strategy 4: Cloud, Edge and Hybrid Architecture",
        when: "Determines where compute and storage workloads execute across centralised cloud data centres vs. local edge gateways/devices.",
        design: "Cloud: centralised storage, elastic scaling & shared analytics. Edge: local processing near devices/users for ultra-low latency & lower bandwidth use. Hybrid: combines both with clear workload placement.",
        benefits: "Balances cloud scalability with edge responsiveness and offline resilience.",
        watchouts: "Requires clear workload placement rules, distributed device management, consistent security policies, and operational oversight."
      }
    ];

    function showIntStrategy(index, btnEl) {
      root.querySelectorAll(".nb-tab-btn").forEach((tab) => { tab.classList.remove("active"); tab.setAttribute("aria-pressed", "false"); });
      if (btnEl) { btnEl.classList.add("active"); btnEl.setAttribute("aria-pressed", "true"); }

      const s = intStrategies[index];
      const panel = document.getElementById("int-strategy-panel");
      panel.style.background = s.bg;
      panel.innerHTML = `
        <span class="slide-ref" style="background:#ffffff; margin-bottom:0.55rem;">${escapeText(s.badge)}</span>
        <h4 style="font-size:1.05rem; margin-bottom:0.55rem;">${escapeText(s.title)}</h4>
        <div class="nb-grid-2" style="gap:0.65rem;">
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>1. When to Use:</strong> ${escapeText(s.when)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>2. Key Design Elements:</strong> ${escapeText(s.design)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>3. Key Benefits:</strong> ${escapeText(s.benefits)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>4. Watch-Outs &amp; Risks:</strong> ${escapeText(s.watchouts)}</div>
        </div>
      `;
    }

    // Interactive ROI Calculator (Slides 21, 23)
    function calcRoi() {
      const cost = parseFloat(document.getElementById("roi-cost").value);
      const benefit = parseFloat(document.getElementById("roi-benefit").value);
      const net = benefit - cost;
      const netEl = document.getElementById("roi-net-display");
      const pctEl = document.getElementById("roi-pct-display");

      if (!Number.isFinite(cost) || !Number.isFinite(benefit) || cost <= 0 || benefit < 0) {
        netEl.textContent = "N/A"; pctEl.textContent = "N/A";
        netEl.style.color = "#3f3f46"; pctEl.style.color = "#3f3f46";
        return;
      }
      netEl.textContent = (net < 0 ? "-RM " : "RM ") + Math.abs(net).toLocaleString("en-MY", { maximumFractionDigits: 0 });
      netEl.style.color = net >= 0 ? "#065f46" : "#be123c";

      if (cost <= 0) {
        pctEl.textContent = "N/A";
        pctEl.style.color = "#3f3f46";
      } else {
        const roi = (net / cost) * 100;
        pctEl.textContent = roi.toFixed(1) + "%";
        pctEl.style.color = roi >= 0 ? "#065f46" : "#be123c";
      }
    }

    function resetRoiExample() {
      document.getElementById("roi-cost").value = 120000;
      document.getElementById("roi-benefit").value = 180000;
      calcRoi();
    }

    function toggleMiniAnswer() {
      const drawer = document.getElementById("mini-answer-drawer");
      const btn = document.getElementById("reveal-mini-btn");
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "Hide Model Solution" : "Reveal Complete 5-Part Model Solution (Slide 27)";
    }

    function toggleExit6Answer() {
      const drawer = document.getElementById("exit6-answer-drawer");
      const btn = document.getElementById("reveal-exit6-btn");
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "Hide Exit Ticket Answers" : "Reveal Model Exit Ticket Answers";
    }


  root.querySelectorAll('[data-integration-strategy]').forEach(button => button.addEventListener('click', () => showIntStrategy(Number(button.dataset.integrationStrategy), button)));
  root.querySelectorAll('[data-roi-input]').forEach(input => input.addEventListener('input', calcRoi));
  root.querySelector('[data-reset-roi]').addEventListener('click', resetRoiExample);
  root.querySelector('[data-mini-answer]').addEventListener('click', toggleMiniAnswer);
  root.querySelector('[data-exit-answer]').addEventListener('click', toggleExit6Answer);
  showIntStrategy(0, root.querySelector('.nb-tab-btn'));
  calcRoi();
})();

// Back to top
(() => {
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.type = 'button';
  button.hidden = true;
  button.setAttribute('aria-label', 'Back to top');
  button.title = 'Back to top';
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 12 6-6 6 6M12 6v14"/></svg>';
  document.body.append(button);

  const update = () => { button.hidden = window.scrollY < 300; };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('load', update);
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  });
  update();
})();

})();
