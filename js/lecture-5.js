// Lecture 5: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "Positioning: From Awareness to an Adoption Decision",
      "slides": "2, 4–5",
      "html": "<!-- Course Arc (Slide 2) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Where Lecture 5 Fits: From Awareness to an Adoption Decision <span class=\"slide-ref\">slide 2</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f4f4f5);\">\n              <h4><span>Lecture 1 // Awareness</span></h4>\n              <p style=\"font-size: 0.87rem;\">What technologies are emerging, and what trends are shaping software engineering?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fde047);\">\n              <h4><span>Today (Part 1) // Decision</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>What problem can a technology solve, and is adoption feasible?</strong></p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Part 2 // Execution</span></h4>\n              <p style=\"font-size: 0.87rem;\">How can the technology be integrated, implemented, and evaluated?</p>\n            </div>\n          </div>\n\n          <div class=\"nb-callout coral\">\n            <strong>The Central Question — Should We Adopt It? <span class=\"slide-ref\">slide 4</span></strong><br />\n            1. Start with a <strong>real problem</strong> — not with a technology looking for a use.<br />\n            2. Identify what the technology can do <strong>better than current approaches</strong>.<br />\n            3. Compare <strong>benefits</strong> with <strong>cost, risk, readiness, and alternatives</strong>.<br />\n            4. Make a reasoned recommendation: <strong>Adopt</strong>, <strong>Pilot</strong>, or <strong>Do Not Adopt</strong>.<br />\n            <span style=\"display:inline-block; margin-top:0.4rem; font-weight:700;\">Discussion Rule: A technology can be impressive and still be the wrong choice for a particular organisation.</span>\n          </div>\n        </div>\n\n        <!-- Problem -> Capability -> Evidence SVG (Slide 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Technology Is Useful Only When It Fits the Problem <span class=\"slide-ref\">slide 5</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Problem → Capability → Evidence Alignment Triad (Slide 5)</span>\n              <span>Core Evaluation Filter</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 185\" role=\"img\" aria-label=\"Problem, Capability, and Evidence triad\">\n              <defs>\n                <marker id=\"arr-pce\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- 1. Problem -->\n              <rect x=\"14\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#fda4af\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"28\" y=\"34\" width=\"110\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"83\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">1. PROBLEM</text>\n              <text x=\"28\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">What is painful, slow,</text>\n              <text x=\"28\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">costly, unsafe, or</text>\n              <text x=\"28\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">unreliable today?</text>\n              <text x=\"28\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#881337\">Anchor in baseline facts</text>\n\n              <line x1=\"286\" y1=\"91\" x2=\"318\" y2=\"91\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-pce)\" />\n\n              <!-- 2. Capability -->\n              <rect x=\"324\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"338\" y=\"34\" width=\"128\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"402\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">2. CAPABILITY</text>\n              <text x=\"338\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">What can this</text>\n              <text x=\"338\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">technology enable or</text>\n              <text x=\"338\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">improve over alternatives?</text>\n              <text x=\"338\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#0c4a6e\">Match mechanism to need</text>\n\n              <line x1=\"596\" y1=\"91\" x2=\"628\" y2=\"91\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-pce)\" />\n\n              <!-- 3. Evidence -->\n              <rect x=\"634\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"648\" y=\"34\" width=\"118\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"707\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">3. EVIDENCE</text>\n              <text x=\"648\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">How would we know</text>\n              <text x=\"648\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">the proposed</text>\n              <text x=\"648\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">improvement is real?</text>\n              <text x=\"648\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#065f46\">Define measurable KPIs</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Technology in Context: Blockchain, IoT & Extended Reality (XR)",
      "slides": "6–11",
      "html": "<!-- 1. Blockchain (Slides 6-7) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">01 // Blockchain: When Shared Records Matter <span class=\"slide-ref\">slides 6–7</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.75rem;\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>Core Mechanism &amp; Gatekeeper Test</span> <span class=\"slide-ref\">slide 6</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>What it does:</strong> A shared ledger helps multiple parties maintain a consistent, tamper-evident record of transactions or events.</li>\n                <li><strong>Applications:</strong> Product provenance, shared asset records, and cross-organisation traceability.</li>\n                <li><strong>Key Question:</strong> <em>Do multiple parties need a shared, tamper-evident record and a governance model?</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Simpler Alternative:</strong> A conventional database is simpler and faster when <strong>one trusted organisation</strong> controls the data.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f8fafc);\">\n              <h4><span>Illustrative Case: Supply-Chain Traceability</span> <span class=\"slide-ref\">slide 7</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Scenario:</strong> Retailer wants to trace a food product from producer → distribution centre → store.</li>\n                <li><strong>Potential Value:</strong> Shared event history, easier batch tracing, better multi-party coordination.</li>\n                <li><strong>Dependencies:</strong> Participants must record reliable data; identifiers and processes must be consistent.</li>\n                <li><strong>Trade-Offs:</strong> Implementation cost, commercial confidentiality, partner participation, and legacy integration.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answer • “If a supplier enters incorrect information, does blockchain make it true?” (Slide 7)</span>\n            <p><strong>No — “Garbage In, Immutable Garbage Out.”</strong> Blockchain guarantees <em>tamper-evidence</em> once a record is written to the ledger, preventing silent alteration later. It <strong>cannot verify real-world accuracy at the point of entry</strong>; reliable governance, audits, or automated IoT sensors are still required to ensure input integrity.</p>\n          </div>\n        </div>\n\n        <!-- 2. IoT (Slides 8-9) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">02 // Internet of Things (IoT): When Physical Conditions Need Monitoring <span class=\"slide-ref\">slides 8–9</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.75rem;\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Core Mechanism, Requirements &amp; Risks</span> <span class=\"slide-ref\">slide 8</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>What it does:</strong> Connected sensors collect data from equipment, buildings, vehicles, or the environment for real-time alerts, remote monitoring, and predictive maintenance.</li>\n                <li><strong>Requirements:</strong> Reliable connectivity, device management, data storage, and <strong>response procedures</strong>.</li>\n                <li><strong>Risks:</strong> Insecure devices, poor/noisy sensor data, network outages, and ongoing hardware maintenance.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f8fafc);\">\n              <h4><span>Illustrative Case: Predictive Maintenance</span> <span class=\"slide-ref\">slide 9</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Scenario:</strong> A factory experiences costly unplanned machine downtime.</li>\n                <li><strong>Proposed Approach:</strong> Monitor vibration, temperature, or operating conditions using sensors.</li>\n                <li><strong>Expected Value:</strong> Earlier anomaly warnings, planned maintenance windows, fewer unexpected stoppages.</li>\n                <li><strong>Must Check:</strong> Sensor accuracy, connectivity, workflow integration, staff capability, and lifecycle cost.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answers • Actionability &amp; Baseline Metrics (Slides 8–9)</span>\n            <p><strong>1. “A sensor is useful only if someone or something can respond” <span class=\"slide-ref\">slide 8</span>:</strong> Streaming telemetry creates zero value without defined alert thresholds, clear owner responsibility, and maintenance workflows to act on warnings.</p>\n            <p><strong>2. “What baseline data would you collect before claiming downtime has improved?” <span class=\"slide-ref\">slide 9</span>:</strong> Record historical <strong>unplanned downtime hours per month, Mean Time Between Failures (MTBF), Mean Time to Repair (MTTR), and emergency repair costs</strong> prior to sensor installation.</p>\n          </div>\n        </div>\n\n        <!-- 3. XR (Slides 10-11) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">03 // Extended Reality (XR): VR vs. AR vs. MR &amp; Technical Training <span class=\"slide-ref\">slides 10–11</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>VR // Virtual Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\">A <strong>fully simulated environment</strong>, useful for safe, repeatable practice where real-world training is costly or hazardous.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>AR // Augmented Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>Digital information overlaid on the real world</strong>, such as step-by-step repair instructions displayed beside live equipment.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-orange, #ffedd5);\">\n              <h4><span>MR // Mixed Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>Digital and physical elements interact</strong> dynamically in an integrated environment, depending on system capabilities.</p>\n            </div>\n          </div>\n\n          <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f8fafc); margin-bottom: 0.75rem;\">\n            <h4><span>Illustrative Case: XR for Technical Training</span> <span class=\"slide-ref\">slide 11</span></h4>\n            <ul class=\"nb-list\">\n              <li><strong>Scenario:</strong> Trainees need safe, repeatable practice with a complex or hazardous procedure.</li>\n              <li><strong>Potential Value:</strong> Repeatable practice, visual guidance, and reduced wear/risk on live equipment.</li>\n              <li><strong>Constraints:</strong> Hardware cost, 3D content creation effort, user comfort/motion sickness, accessibility, realism, and content updates when procedures change.</li>\n              <li><strong>Adoption Question:</strong> <em>Does XR improve real-world task performance enough to justify its total cost and effort?</em></li>\n            </ul>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answer • “A visually impressive simulation is not proof of better learning” (Slide 11)</span>\n            <p>Novelty and slick 3D graphics do not guarantee skill transfer. Validate effectiveness by measuring <strong>real-world task completion time, error rates on actual equipment, safety protocol adherence, and knowledge retention</strong> against traditional training methods.</p>\n          </div>\n        </div>"
    },
    {
      "title": "Feasibility: Can We Make It Work and Should We?",
      "slides": "12–16",
      "html": "<!-- 4 Pillars Overview & Technical/Organisational/User (Slides 12-13, 15-16) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Four Dimensions of Adoption Feasibility <span class=\"slide-ref\">slides 12–13, 15–16</span></div>\n          <div class=\"nb-grid-2\">\n            <!-- Technical -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>1 // Technical Feasibility</span> <span class=\"slide-ref\">slides 12–13</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Compatibility:</strong> Works with existing software, data formats, devices, and infrastructure.</li>\n                <li><strong>Quality Attributes:</strong> Performance, reliability, scalability, and service availability.</li>\n                <li><strong>Security &amp; Privacy:</strong> Cybersecurity, access control, and data protection.</li>\n                <li><strong>Supportability:</strong> Availability of skills, support, suppliers, and maintainable components.</li>\n                <li><strong>Exit Options:</strong> Ability to replace the technology or migrate data if the supplier becomes unsuitable.</li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Check <span class=\"slide-ref\">slide 13</span>:</strong> <em>“Can the organisation support it after the pilot team leaves?”</em>\n              </div>\n            </div>\n\n            <!-- Financial -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>2 // Financial Feasibility</span> <span class=\"slide-ref\">slides 12, 14</span></h4>\n              <p style=\"font-size: 0.87rem; margin-bottom: 0.45rem;\"><strong>Look beyond initial purchase price</strong> to full lifecycle costs vs. measurable value:</p>\n              <ul class=\"nb-list\">\n                <li><strong>Initial Cost:</strong> Devices, licences, infrastructure, implementation, and data preparation.</li>\n                <li><strong>Recurring Cost:</strong> Service fees, maintenance, support, hardware replacement, and upgrades.</li>\n                <li><strong>Change Cost:</strong> Staff training, process redesign, and temporary productivity dip during transition.</li>\n                <li><strong>Expected Value:</strong> Time saved, fewer failures, improved quality, reduced risk, or better service.</li>\n              </ul>\n            </div>\n\n            <!-- Organisational -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>3 // Organisational Readiness</span> <span class=\"slide-ref\">slides 12, 15</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Leadership Alignment:</strong> Do leaders agree on the problem and intended outcome?</li>\n                <li><strong>Governance &amp; Roles:</strong> Are responsibilities and decision-making authority clear?</li>\n                <li><strong>Capacity:</strong> Do staff have the skills and time to operate the solution?</li>\n                <li><strong>Workflow Impact:</strong> Will existing work practices need to change?</li>\n                <li><strong>Sustainability:</strong> Can the organisation provide ongoing support after launch?</li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle <span class=\"slide-ref\">slide 15</span>:</strong> <em>Technology adoption often changes work practices — not just software.</em>\n              </div>\n            </div>\n\n            <!-- User, Ethical & Social -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>4 // User, Ethical &amp; Social Factors</span> <span class=\"slide-ref\">slides 12, 16</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Usability &amp; Accessibility:</strong> Practical and accessible for all intended user groups.</li>\n                <li><strong>Privacy:</strong> Clear rules on what data is collected, who can access it, and retention duration.</li>\n                <li><strong>Trust:</strong> Users understand the system’s role and limitations.</li>\n                <li><strong>Safety &amp; Fairness:</strong> System errors or unequal access must not disadvantage specific groups.</li>\n                <li><strong>Transparency:</strong> Clear accountability when the technology produces a wrong result.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Financial Lifecycle Cost vs Value SVG (Slide 14) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Visualizing Financial Feasibility: Total Lifecycle Cost vs. Expected Value <span class=\"slide-ref\">slide 14</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Financial Feasibility Balance (Slide 14)</span>\n              <span>Full Lifecycle Cost vs. Measurable Value</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 175\" role=\"img\" aria-label=\"Financial feasibility cost buckets versus expected value\">\n              <!-- Cost Side -->\n              <rect x=\"14\" y=\"16\" width=\"565\" height=\"142\" rx=\"10\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"30\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#9f1239\">TOTAL LIFECYCLE COST (3 BUCKETS)</text>\n\n              <rect x=\"28\" y=\"52\" width=\"170\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"38\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">1. INITIAL</text>\n              <text x=\"38\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Devices, licences,</text>\n              <text x=\"38\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">infra, build &amp;</text>\n              <text x=\"38\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">data prep</text>\n\n              <rect x=\"210\" y=\"52\" width=\"170\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"220\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">2. RECURRING</text>\n              <text x=\"220\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Service fees,</text>\n              <text x=\"220\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">maintenance,</text>\n              <text x=\"220\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">support &amp; upgrades</text>\n\n              <rect x=\"392\" y=\"52\" width=\"172\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"402\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">3. CHANGE COST</text>\n              <text x=\"402\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Training, workflow</text>\n              <text x=\"402\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">redesign &amp; temp</text>\n              <text x=\"402\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">productivity dip</text>\n\n              <!-- VS Badge -->\n              <rect x=\"591\" y=\"65\" width=\"38\" height=\"44\" rx=\"8\" fill=\"#000000\" />\n              <text x=\"610\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#fde047\">VS</text>\n\n              <!-- Value Side -->\n              <rect x=\"641\" y=\"16\" width=\"265\" height=\"142\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"657\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\">EXPECTED VALUE</text>\n              <rect x=\"657\" y=\"52\" width=\"233\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"669\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Time saved &amp; fewer failures</text>\n              <text x=\"669\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Improved output quality</text>\n              <text x=\"669\" y=\"117\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Reduced operational risk</text>\n              <text x=\"669\" y=\"136\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Better user service</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Early Risks, Constraints & The 7-Step Feasibility Checklist",
      "slides": "17–18",
      "html": "<!-- Risks & Constraints to Check Early (Slide 17) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Four Risks &amp; Constraints to Check Early <span class=\"slide-ref\">slide 17</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>1 // Integration</span></h4>\n              <p style=\"font-size: 0.86rem;\">Does it connect cleanly with existing applications and daily workflows?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span>2 // Security &amp; Privacy</span></h4>\n              <p style=\"font-size: 0.86rem;\">Could devices, data, or services be exposed or misused?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>3 // Supplier Lock-In</span></h4>\n              <p style=\"font-size: 0.86rem;\">Can the organisation change supplier or export its data cleanly?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>4 // Maturity &amp; Standards</span></h4>\n              <p style=\"font-size: 0.86rem;\">Are tools, skills, support, and interoperability standards sufficiently mature?</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive 7-Step Practical Feasibility Checklist (Slide 18) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Practical 7-Step Feasibility Checklist (Click Steps to Tick Off) <span class=\"slide-ref\">slide 18</span></div>\n          <div class=\"nb-check-grid\" id=\"feasibility-checklist\">\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 01</span>\n              <div><strong>Define the problem and current baseline:</strong> Document what is broken, slow, or costly today using concrete numbers.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 02</span>\n              <div><strong>Identify the expected benefit and how it will be measured:</strong> Set clear success KPIs before choosing a vendor or platform.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 03</span>\n              <div><strong>Check technical fit, data needs, security, and integration:</strong> Verify compatibility, data quality/ownership, cybersecurity, and APIs.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 04</span>\n              <div><strong>Estimate total cost and available resources:</strong> Include initial, recurring, and change/training costs against budget.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 05</span>\n              <div><strong>Assess staff readiness, user needs, and operational support:</strong> Ensure workflow fit, accessibility, and post-pilot support capacity.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 06</span>\n              <div><strong>Compare with simpler alternatives and identify major risks:</strong> Test whether a standard database, scheduled inspection, or video achieves 80% of the value at lower risk.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 07</span>\n              <div><strong>Make a reasoned recommendation:</strong> Conclude with <code>Adopt</code>, <code>Pilot</code>, <code>Defer</code>, or <code>Reject</code> backed by conditions.</div>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Analysing Real-World Adoption Cases (Cases A, B & C)",
      "slides": "19–23",
      "html": "<!-- 4-Question Case Lens (Slide 19) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Analysis: Use the Same Four Questions Each Time <span class=\"slide-ref\">slide 19</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #fda4af);\">\n              <h4><span>1 // Problem</span></h4>\n              <p style=\"font-size: 0.86rem;\">What needs to improve, and what is the current baseline?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #7dd3fc);\">\n              <h4><span>2 // Technology Fit</span></h4>\n              <p style=\"font-size: 0.86rem;\">Why might this help more than a simpler alternative?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>3 // Feasibility</span></h4>\n              <p style=\"font-size: 0.86rem;\">What must be true for adoption to work?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #86efac);\">\n              <h4><span>4 // Evidence</span></h4>\n              <p style=\"font-size: 0.86rem;\">What outcome would show value, and what are the limitations?</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive Case Explorer (Slides 20–22) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Interactive Case Explorer: Cases A, B &amp; C <span class=\"slide-ref\">slides 20–22</span></div>\n          <div class=\"nb-tab-row\" role=\"tablist\">\n            <button type=\"button\" class=\"nb-tab-btn active\" data-adoption-case=\"0\">\n              <strong>Case A · Blockchain</strong>\n              <span>Supply-chain traceability (Slide 20)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-adoption-case=\"1\">\n              <strong>Case B · IoT</strong>\n              <span>University facility monitoring (Slide 21)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-adoption-case=\"2\">\n              <strong>Case C · XR</strong>\n              <span>Hazardous equipment training (Slide 22)</span>\n            </button>\n          </div>\n\n          <div class=\"nb-tab-panel\" id=\"adoption-case-panel\">\n            <!-- Populated by JS on load -->\n          </div>\n        </div>\n\n        <!-- Compare the Cases Matrix (Slide 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Compare the Cases: What Determines the Adoption Decision? <span class=\"slide-ref\">slide 23</span></div>\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Technology</th>\n                  <th>What Determines Real Value (Slide 23)</th>\n                  <th>Simpler Alternative to Benchmark Against</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Blockchain</strong></td>\n                  <td>Value depends on <strong>multi-party shared records, governance, trusted inputs, and active partner participation</strong>.</td>\n                  <td>Centralised shared database, standard supply-chain platform, or stricter data-entry controls.</td>\n                </tr>\n                <tr>\n                  <td><strong>IoT</strong></td>\n                  <td>Value depends on <strong>useful/accurate measurements, reliable connectivity, and timely human or automated action on the data</strong>.</td>\n                  <td>Scheduled manual inspections, basic smart meters, or targeted high-risk-only monitoring.</td>\n                </tr>\n                <tr>\n                  <td><strong>XR (VR/AR/MR)</strong></td>\n                  <td>Value depends on whether the immersive experience <strong>measurably improves learning or real-world task performance</strong>.</td>\n                  <td>Instructional video, desktop interactive 3D, physical mock-ups, or supervised live practice.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "Key Takeaways, Evidence Verification & Exam Practice",
      "slides": "24–25",
      "html": "<!-- Five Key Takeaways (Slide 24) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Key Takeaways <span class=\"slide-ref\">slide 24</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #fda4af);\">\n              <h4><span>01 // Problem First</span></h4>\n              <p style=\"font-size: 0.85rem;\">Start with a real operational problem, never with a hyped technology.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #7dd3fc);\">\n              <h4><span>02 // Measurable Value</span></h4>\n              <p style=\"font-size: 0.85rem;\">Technology capabilities must translate into concrete, measurable outcomes.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>03 // 4-Pillar Fit</span></h4>\n              <p style=\"font-size: 0.85rem;\">Feasibility spans technical, financial, organisational, and user-related factors.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>04 // Alternatives</span></h4>\n              <p style=\"font-size: 0.85rem;\">Always benchmark the proposal against simpler, lower-risk alternatives.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>05 // Pilot Evidence</span></h4>\n              <p style=\"font-size: 0.85rem;\">Use evidence from small pilots and real outcomes to guide adoption decisions.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Case Preparation & Evidence Standards (Slide 25) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Preparation &amp; Evidence Verification Rules <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"nb-callout yellow\" style=\"margin-bottom: 0.85rem;\">\n            <strong>Critical Source Check <span class=\"slide-ref\">slide 25</span>:</strong><br />\n            • Use credible standards (such as <strong>NIST publications</strong> on IoT cybersecurity and information-system security) to ground risk and readiness discussions.<br />\n            • For named organisational cases, rely on credible case reports or peer-reviewed studies—and <strong>verify whether reported outcomes are independently measured or come only from a vendor</strong>.<br />\n            • Record 6 mandatory items for every case: <code>Organisation</code>, <code>Problem</code>, <code>Technology</code>, <code>Outcome</code>, <code>Limitations</code>, and <code>Source</code>.\n          </div>\n        </div>\n\n        <!-- Interactive Exam Practice Question -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Exam Practice Scenario <span class=\"nb-tag yellow\">8-Mark Structured Case Evaluation</span></div>\n          <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f8fafc);\">\n            <p style=\"font-size: 0.92rem; font-weight: 700; margin-bottom: 0.75rem;\">\n              “A university facilities manager proposes installing IoT sensors across every classroom and lab on campus immediately to reduce high electricity bills and late maintenance repairs. Using the feasibility and case-analysis principles from Lecture 5, evaluate this proposal and state your recommendation.”\n            </p>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-l5-btn\" data-model-answer aria-expanded=\"false\" aria-controls=\"l5-answer-drawer\">Reveal Model 8-Mark Exam Answer</button>\n\n            <div class=\"nb-answer-drawer\" id=\"l5-answer-drawer\">\n              <span class=\"nb-answer-title\">Model Exam Answer • IoT Facility Monitoring Evaluation</span>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>1. Problem &amp; Baseline (2 marks):</strong> High energy consumption and late fault detection are valid problems, but the university must first record baseline electricity usage, fault response times, and repair costs per building before deploying sensors.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>2. Four-Pillar Feasibility &amp; Risks (3 marks):</strong> <em>Technical:</em> Requires reliable campus Wi-Fi/LoRaWAN coverage, device security (NIST IoT security baselines), and integration with maintenance ticketing systems. <em>Financial:</em> Campus-wide rollout carries high initial hardware cost plus recurring sensor maintenance/battery replacement. <em>Organisational:</em> Sensors only create value if facilities staff have clear alert workflows and ownership to respond. <em>User/Privacy:</em> Occupancy sensors must respect staff and student privacy.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>3. Simpler Alternatives (1 mark):</strong> Compare against scheduled preventive inspections or sub-metering only high-consumption buildings (e.g., server rooms, HVAC chillers, labs).</p>\n              <p style=\"margin-bottom: 0;\"><strong>4. Recommendation — PILOT, Do Not Roll Out Campus-Wide Yet (2 marks):</strong> Recommend a <strong>targeted small pilot</strong> in one high-energy building to validate sensor accuracy, alert response workflows, and actual kWh/cost savings before scaling.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Formula A // 4-Mark Concept Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Explain two feasibility pillars / financial cost types / early risks...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Name the factor + explain what it checks + give a concrete failure if ignored.</li>\n                <li><strong>Point 2 (2 marks):</strong> Name distinct second factor + explain what it checks + give a concrete failure if ignored.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Formula B // 8–10 Mark Adoption Recommendations</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Should Organisation X adopt Blockchain / IoT / XR?”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Problem &amp; Baseline:</strong> State real pain point + baseline metric to beat.</li>\n                <li><strong>2. Fit vs. Simpler Alternative:</strong> Explain why the tech helps (or why a simpler tool wins).</li>\n                <li><strong>3. 4-Pillar Feasibility:</strong> Cover Technical, Financial (total lifecycle cost), Organisational, and User/Ethical factors.</li>\n                <li><strong>4. Verdict &amp; Evidence:</strong> Recommend <code>Adopt / Pilot / Defer / Reject</code> + define KPIs to prove value.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    }
  ],
  "mcq": [
    {
      "question": "Which is the central rule of Lecture 5?",
      "choices": [
        "Adopt new technology immediately",
        "Start with the problem, not the technology",
        "Choose by advertising",
        "Avoid comparing alternatives"
      ],
      "correct": 1,
      "explanation": "The lecture centres adoption decisions on a real need.",
      "slides": "4–5"
    },
    {
      "question": "What is the “problem → capability → evidence” idea?",
      "choices": [
        "Choose based on budget alone",
        "Connect an actual problem to a technological ability and measurable outcome",
        "List technology brands",
        "Replace testing with prediction"
      ],
      "correct": 1,
      "explanation": "Slide 5 connects organisational pain, capability and evidence.",
      "slides": "5"
    },
    {
      "question": "Blockchain is most relevant when:",
      "choices": [
        "One trusted organisation simply wants local records",
        "Several organisations need shared tamper-evident records and governance",
        "All data must be public",
        "No one owns data"
      ],
      "correct": 1,
      "explanation": "Multi-party shared traceability is the focus.",
      "slides": "6, 20"
    },
    {
      "question": "Which alternative to blockchain is identified?",
      "choices": [
        "Conventional shared database",
        "VR headset",
        "Temperature sensor",
        "Manual screen recording"
      ],
      "correct": 0,
      "explanation": "A shared database can be simpler under one trusted controller.",
      "slides": "6, 20"
    },
    {
      "question": "IoT sensor value depends on:",
      "choices": [
        "Collecting data that no one uses",
        "Useful measurements and a response to them",
        "Maximum device count",
        "No maintenance staff"
      ],
      "correct": 1,
      "explanation": "A sensor is useful only if someone or something can respond.",
      "slides": "8"
    },
    {
      "question": "Which is an example of an IoT application?",
      "choices": [
        "Predictive maintenance using vibration and temperature",
        "Programming syntax highlighting",
        "Only document formatting",
        "Static company logo"
      ],
      "correct": 0,
      "explanation": "Slide 9 presents sensor-based predictive maintenance.",
      "slides": "9"
    },
    {
      "question": "Which XR mode overlays information on real equipment?",
      "choices": [
        "VR",
        "AR",
        "Only blockchain",
        "A data lake"
      ],
      "correct": 1,
      "explanation": "AR places digital guidance in the real-world view.",
      "slides": "10"
    },
    {
      "question": "The XR training case should be judged mainly by:",
      "choices": [
        "Visual spectacle",
        "Measured task or learning improvement",
        "Number of colours",
        "Number of vendors"
      ],
      "correct": 1,
      "explanation": "The slides warn attractive simulations are not proof of learning.",
      "slides": "11, 22"
    },
    {
      "question": "Which is NOT a feasibility dimension from slide 12?",
      "choices": [
        "Technical",
        "Financial",
        "Organisational",
        "Fashion popularity"
      ],
      "correct": 3,
      "explanation": "The four dimensions include user-related, not fashion.",
      "slides": "12"
    },
    {
      "question": "Which is a recurring cost?",
      "choices": [
        "Ongoing maintenance and service fees",
        "Only initial device purchase",
        "Only proposal writing",
        "No cost after purchase"
      ],
      "correct": 0,
      "explanation": "Recurring costs continue after adoption.",
      "slides": "14"
    },
    {
      "question": "Which is a user-related consideration?",
      "choices": [
        "Accessibility and trust",
        "Only CPU clock speed",
        "Server rack colour",
        "Marketing logo"
      ],
      "correct": 0,
      "explanation": "User feasibility considers ability to use and trust the solution.",
      "slides": "12, 16"
    },
    {
      "question": "Which is part of the practical feasibility checklist?",
      "choices": [
        "Ignore current baseline",
        "Compare simpler alternatives and major risks",
        "Skip data security",
        "Reject all pilots"
      ],
      "correct": 1,
      "explanation": "Slide 18 names this step explicitly.",
      "slides": "18"
    },
    {
      "question": "What is a sensible first step for uncertain university-wide IoT monitoring?",
      "choices": [
        "Full deployment without a trial",
        "A bounded pilot with measurable criteria",
        "Buy sensors for every room immediately",
        "Ignore maintenance costs"
      ],
      "correct": 1,
      "explanation": "The case asks whether to begin with a small pilot.",
      "slides": "21"
    },
    {
      "question": "What limits an XR training decision?",
      "choices": [
        "Comfort, accessibility, realism and content updates",
        "Only internet branding",
        "A blockchain transaction ID",
        "No other training methods"
      ],
      "correct": 0,
      "explanation": "The lecture names these XR constraints.",
      "slides": "11, 22"
    },
    {
      "question": "What evidence source issue does the lecture flag?",
      "choices": [
        "Vendor claims may not be independently measured",
        "Any press statement is sufficient",
        "All pilots are unbiased",
        "All videos are peer-reviewed"
      ],
      "correct": 0,
      "explanation": "Slide 25 advises checking independent measurement and credible sources.",
      "slides": "25"
    }
  ],
  "flashcards": [
    {
      "front": "What is the key Lecture 5 rule?",
      "back": "Start with the problem, not the technology.",
      "slides": "4"
    },
    {
      "front": "What three steps connect a proposal to value?",
      "back": "Problem → Capability → Evidence.",
      "slides": "5"
    },
    {
      "front": "What adoption decisions can the checklist produce?",
      "back": "Adopt, pilot, defer or reject.",
      "slides": "18"
    },
    {
      "front": "What does blockchain support?",
      "back": "Shared, tamper-evident transaction or event records.",
      "slides": "6"
    },
    {
      "front": "When might a conventional database be simpler?",
      "back": "When one trusted organisation controls the data.",
      "slides": "6"
    },
    {
      "front": "Name three blockchain applications.",
      "back": "Product provenance, shared assets, cross-organisation traceability.",
      "slides": "6"
    },
    {
      "front": "What does blockchain Case A require?",
      "back": "Participant commitment, data quality, governance and integration.",
      "slides": "20"
    },
    {
      "front": "What is a blockchain traceability alternative?",
      "back": "Shared database, supply-chain platform or better data controls.",
      "slides": "20"
    },
    {
      "front": "What does IoT collect?",
      "back": "Sensor data about physical equipment, buildings or environments.",
      "slides": "8"
    },
    {
      "front": "Name three IoT uses.",
      "back": "Alerts, remote monitoring and predictive maintenance.",
      "slides": "8"
    },
    {
      "front": "Name three IoT risks.",
      "back": "Insecure devices, bad readings, outages and maintenance needs.",
      "slides": "8"
    },
    {
      "front": "Why must IoT alerts be actionable?",
      "back": "Measurements create value only when something responds.",
      "slides": "8"
    },
    {
      "front": "What sensors appear in predictive maintenance?",
      "back": "Vibration, temperature and operating-condition sensors.",
      "slides": "9"
    },
    {
      "front": "What is the factory’s desired benefit?",
      "back": "Earlier warnings and fewer unexpected stoppages.",
      "slides": "9"
    },
    {
      "front": "What is IoT Case B about?",
      "back": "University building energy use and late maintenance detection.",
      "slides": "21"
    },
    {
      "front": "Name IoT facility alternatives.",
      "back": "Scheduled inspections, smart meters or targeted monitoring.",
      "slides": "21"
    },
    {
      "front": "What is VR?",
      "back": "A simulated environment for immersive practice.",
      "slides": "10"
    },
    {
      "front": "What is AR?",
      "back": "Digital information overlaid on the real world.",
      "slides": "10"
    },
    {
      "front": "What is MR?",
      "back": "Physical and digital elements interacting in an integrated environment.",
      "slides": "10"
    },
    {
      "front": "What is XR Case C about?",
      "back": "Safe, repeatable practice with expensive or hazardous equipment.",
      "slides": "22"
    },
    {
      "front": "What are key XR limits?",
      "back": "Hardware cost, realism, comfort, accessibility and content updates.",
      "slides": "11, 22"
    },
    {
      "front": "What is the XR value test?",
      "back": "Whether task performance or learning measurably improves.",
      "slides": "11"
    },
    {
      "front": "Name four feasibility dimensions.",
      "back": "Technical, financial, organisational and user-related.",
      "slides": "12"
    },
    {
      "front": "What does technical feasibility test?",
      "back": "Compatibility, performance, security, support and exit options.",
      "slides": "13"
    },
    {
      "front": "Name initial cost examples.",
      "back": "Devices, licences, infrastructure and implementation.",
      "slides": "14"
    },
    {
      "front": "Name recurring cost examples.",
      "back": "Service fees, maintenance, support and upgrades.",
      "slides": "14"
    },
    {
      "front": "Name change cost examples.",
      "back": "Training, process redesign and temporary productivity loss.",
      "slides": "14"
    },
    {
      "front": "What does organisational readiness require?",
      "back": "Leadership alignment, roles, skills, workflow fit and support.",
      "slides": "15"
    },
    {
      "front": "What does user feasibility require?",
      "back": "Access, usability, trust, safety, privacy and fairness.",
      "slides": "16"
    },
    {
      "front": "What privacy questions matter?",
      "back": "What is collected, who accesses it, and for how long?",
      "slides": "16"
    },
    {
      "front": "What is step 1 of feasibility?",
      "back": "Define the problem and current baseline.",
      "slides": "18"
    },
    {
      "front": "What is step 2 of feasibility?",
      "back": "Identify measurable expected benefits.",
      "slides": "18"
    },
    {
      "front": "What follows cost and technical assessment?",
      "back": "Assess people, alternatives and major risks.",
      "slides": "18"
    },
    {
      "front": "Name four case-analysis headings.",
      "back": "Problem, technology fit, feasibility and evidence.",
      "slides": "19"
    },
    {
      "front": "What must a case study record?",
      "back": "Organisation, problem, technology, outcome, limitations, source.",
      "slides": "25"
    },
    {
      "front": "Why verify adoption evidence?",
      "back": "Vendor claims may lack independent measurement.",
      "slides": "25"
    },
    {
      "front": "What determines blockchain value?",
      "back": "Shared governance, participation and reliable multi-party records.",
      "slides": "23"
    },
    {
      "front": "What determines IoT value?",
      "back": "Accurate measurements, connectivity and action.",
      "slides": "23"
    },
    {
      "front": "What determines XR value?",
      "back": "Measured improvement in learning or task performance.",
      "slides": "23"
    },
    {
      "front": "Name the five final takeaways.",
      "back": "Problem, measurable value, full feasibility, alternatives, pilot evidence.",
      "slides": "24"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "Adoption principles",
    "slides": "2–5",
    "scenario": "A technology vendor offers blockchain services to a university although no problem has been specified.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO reasons to begin with the problem.",
        "marks": 4,
        "items": [
          "The current weakness must be defined before any technology choice is justified.",
          "New features only have value when they improve a relevant outcome."
        ],
        "model": "The organisation should begin with the problem because a new technology has value only when it addresses a genuine operational need. Starting with a fashionable tool can lead to unnecessary expense, whereas defining the current weakness allows the team to compare whether the proposal performs better than a simpler alternative."
      },
      {
        "letter": "b",
        "question": "Explain THREE checks before recommending adoption.",
        "marks": 6,
        "items": [
          "Clarify the baseline cost, delay or quality problem to be solved.",
          "Compare proposed capability against simpler alternatives.",
          "Specify measurable evidence that would demonstrate improvement."
        ],
        "model": "Before recommending adoption, the team should check three things. First, it should identify the specific capability that the technology offers and link it to a measurable outcome. Second, it should assess feasibility, including compatibility, full cost, staff readiness and user needs. Third, it should compare the proposal with less complex solutions and identify its major risks. A recommendation to adopt or pilot should be supported by evidence rather than novelty."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Problem–capability–evidence",
    "slides": "4–5",
    "scenario": "A factory frequently stops production because equipment failures are discovered too late.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO elements of a problem-to-solution statement.",
        "marks": 4,
        "items": [
          "Problem: unplanned downtime creates disruption and maintenance cost.",
          "Capability: sensors could monitor abnormal vibration or temperature."
        ],
        "model": "First, problem: unplanned downtime creates disruption and maintenance cost. Second, capability: sensors could monitor abnormal vibration or temperature. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE types of evidence needed to justify the solution.",
        "marks": 6,
        "items": [
          "Measure downtime before and after the pilot.",
          "Record the accuracy and usefulness of sensor alerts.",
          "Compare maintenance costs and operating effort against the baseline."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, measure downtime before and after the pilot. A controlled introduction lets the team discover issues before they affect every user. Second, record the accuracy and usefulness of sensor alerts. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Third, compare maintenance costs and operating effort against the baseline. Including the full lifecycle cost prevents an overly optimistic investment decision."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Blockchain",
    "slides": "6, 20",
    "scenario": "Several supply-chain businesses need a shared record of product origin and movement.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO proposed benefits of blockchain in this scenario.",
        "marks": 4,
        "items": [
          "A shared ledger may support a consistent record across parties.",
          "Tamper-evident history may improve traceability of reported transactions."
        ],
        "model": "First, a shared ledger may support a consistent record across parties. Second, tamper-evident history may improve traceability of reported transactions. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE risks or limitations the team should assess.",
        "marks": 6,
        "items": [
          "False entries can remain false even when later tampering is detectable.",
          "Data-sharing governance and confidentiality need agreement across organisations.",
          "Integration and ongoing costs may exceed the benefit of a conventional shared database."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, false entries can remain false even when later tampering is detectable. A shared ledger is useful only if the parties, data quality and governance support reliable traceability. Second, data-sharing governance and confidentiality need agreement across organisations. Clear decision authority means the team knows who can approve a change and accept its residual risks. Third, integration and ongoing costs may exceed the benefit of a conventional shared database. The systems can then share necessary updates through controlled connections instead of manual re-entry. If a shared database can meet the same requirements at lower cost and complexity, blockchain may not be justified."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Blockchain alternatives",
    "slides": "6, 20, 23",
    "scenario": "One hospital department wants to use blockchain for an internal asset register.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO reasons a normal database might be suitable.",
        "marks": 4,
        "items": [
          "A single trusted organisation already controls the asset records.",
          "A conventional database may be simpler to manage and integrate."
        ],
        "model": "First, a single trusted organisation already controls the asset records. Second, a conventional database may be simpler to manage and integrate. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE questions needed before deciding on blockchain.",
        "marks": 6,
        "items": [
          "Do several independent parties require shared control over records?",
          "Is a tamper-evident history genuinely necessary for this task?",
          "Can participants maintain good input data and an agreed governance process?"
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, do several independent parties require shared control over records? Second, is a tamper-evident history genuinely necessary for this task? A shared ledger is useful only if the parties, data quality and governance support reliable traceability. Third, can participants maintain good input data and an agreed governance process? Clear decision authority means the team knows who can approve a change and accept its residual risks. If a shared database can meet the same requirements at lower cost and complexity, blockchain may not be justified."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "IoT",
    "slides": "8–9",
    "scenario": "A university installs sensors to detect abnormal temperatures in server rooms.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO IoT capabilities relevant to the problem.",
        "marks": 4,
        "items": [
          "Connected sensors can measure room and equipment conditions.",
          "Automated alerts can notify staff about abnormal readings."
        ],
        "model": "First, connected sensors can measure room and equipment conditions. Second, automated alerts can notify staff about abnormal readings. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE conditions for the project to deliver value.",
        "marks": 6,
        "items": [
          "Sensors and networks must provide sufficiently accurate, timely data.",
          "A responsible person or workflow must respond when an alert arrives.",
          "Devices need cybersecurity controls and ongoing calibration and maintenance."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, sensors and networks must provide sufficiently accurate, timely data. This is useful only when the collected readings are accurate and someone can act on the information. Second, a responsible person or workflow must respond when an alert arrives. Clarifying who does what is necessary before automating the same activity in software. Third, devices need cybersecurity controls and ongoing calibration and maintenance. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. The project should begin with a limited pilot and demonstrate measurable improvement against a baseline."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Predictive maintenance",
    "slides": "9",
    "scenario": "A factory proposes monitoring machine vibration and operating temperature to predict failures.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO potential benefits of the proposal.",
        "marks": 4,
        "items": [
          "Early warnings may reduce unexpected machine downtime.",
          "Maintenance can be planned more efficiently around detected conditions."
        ],
        "model": "First, early warnings may reduce unexpected machine downtime. Second, maintenance can be planned more efficiently around detected conditions. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE feasibility factors to check.",
        "marks": 6,
        "items": [
          "Sensor placement and measurement accuracy affect prediction quality.",
          "Reliable connectivity and integration are needed for usable alerts.",
          "Staff capacity and total operating cost determine whether action is sustainable."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, sensor placement and measurement accuracy affect prediction quality. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Second, reliable connectivity and integration are needed for usable alerts. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, staff capacity and total operating cost determine whether action is sustainable. The design must keep operating at expected demand, not only under a small demonstration load. The project should begin with a limited pilot and demonstrate measurable improvement against a baseline."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "XR concepts",
    "slides": "10–11",
    "scenario": "A manufacturing college wants trainees to practise hazardous repairs in a simulation.",
    "parts": [
      {
        "letter": "a",
        "question": "Differentiate TWO extended-reality approaches from the lecture.",
        "marks": 4,
        "items": [
          "VR places learners in a simulated environment for practising procedures.",
          "AR overlays contextual digital guidance onto the physical environment."
        ],
        "model": "First, VR places learners in a simulated environment for practising procedures. Second, AR overlays contextual digital guidance onto the physical environment. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE factors for deciding whether XR is worthwhile.",
        "marks": 6,
        "items": [
          "Training performance must improve compared with existing methods.",
          "Hardware, software and content updates create lifecycle costs.",
          "Comfort, realism and accessibility affect whether learners can use it effectively."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, training performance must improve compared with existing methods. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Second, hardware, software and content updates create lifecycle costs. Including the full lifecycle cost prevents an overly optimistic investment decision. Third, comfort, realism and accessibility affect whether learners can use it effectively. Otherwise, people who are meant to benefit may be unable to access the service at all. Training effectiveness should be tested against simpler methods rather than judged from the visual experience."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "XR evaluation",
    "slides": "11, 22",
    "scenario": "A vendor shows visually impressive XR equipment training, but no learning outcome measurements.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO weaknesses in the adoption proposal.",
        "marks": 4,
        "items": [
          "Visual appeal does not prove that trainees learn the task better.",
          "No baseline or comparison shows whether XR adds value over ordinary instruction."
        ],
        "model": "First, visual appeal does not prove that trainees learn the task better. Second, no baseline or comparison shows whether XR adds value over ordinary instruction. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE pilot measures to collect before rollout.",
        "marks": 6,
        "items": [
          "Time required to complete a representative repair procedure.",
          "Error or safety-incident rates during supervised practice.",
          "Trainee confidence, accessibility problems and long-term retention of skills."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, time required to complete a representative repair procedure. Second, error or safety-incident rates during supervised practice. Third, trainee confidence, accessibility problems and long-term retention of skills. Otherwise, people who are meant to benefit may be unable to access the service at all. Training effectiveness should be tested against simpler methods rather than judged from the visual experience."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Feasibility categories",
    "slides": "12",
    "scenario": "A hospital plans a new telehealth platform but has limited budget and IT support.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO feasibility categories and their main concerns.",
        "marks": 4,
        "items": [
          "Technical feasibility checks systems, data, reliability and security.",
          "Financial feasibility checks acquisition, integration and continuing cost."
        ],
        "model": "First, technical feasibility checks systems, data, reliability and security. Second, financial feasibility checks acquisition, integration and continuing cost. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE additional adoption questions.",
        "marks": 6,
        "items": [
          "Are managers and employees ready to change their workflows?",
          "Can different groups of users access and trust the service?",
          "Is reliable post-launch support available within organisational capacity?"
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, are managers and employees ready to change their workflows? Clarifying who does what is necessary before automating the same activity in software. Second, can different groups of users access and trust the service? Third, is reliable post-launch support available within organisational capacity? A controlled introduction lets the team discover issues before they affect every user."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Technical feasibility",
    "slides": "12–13",
    "scenario": "A proposed clinical-data repository must connect to existing hospital records and a mobile app.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO technical compatibility needs.",
        "marks": 4,
        "items": [
          "Data formats and identifiers must match the existing systems.",
          "Approved, secure interfaces must support authorised exchange."
        ],
        "model": "First, data formats and identifiers must match the existing systems. Second, approved, secure interfaces must support authorised exchange. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE other technical feasibility considerations.",
        "marks": 6,
        "items": [
          "Performance and availability must meet the clinical service requirements.",
          "Privacy and access controls must protect patient information.",
          "Supplier support, maintainability and possible exit options need assessment."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, performance and availability must meet the clinical service requirements. The service must remain usable, or recover safely, when a component or connection fails. Second, privacy and access controls must protect patient information. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, supplier support, maintainability and possible exit options need assessment."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Financial feasibility",
    "slides": "12, 14",
    "scenario": "A proposal lists only the purchase price of IoT devices as its project cost.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO missing cost categories.",
        "marks": 4,
        "items": [
          "Recurring costs include support, subscriptions, repairs and replacement.",
          "Change costs include training and temporary productivity disruption."
        ],
        "model": "First, recurring costs include support, subscriptions, repairs and replacement. Second, change costs include training and temporary productivity disruption. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE financial questions before adoption.",
        "marks": 6,
        "items": [
          "What are the full costs over the intended lifecycle?",
          "What measurable benefit such as time saved or downtime reduced is expected?",
          "Are benefits sufficient compared with cheaper alternatives and risks?"
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, the team should determine the full costs over the intended lifecycle. Including the full lifecycle cost prevents an overly optimistic investment decision. Second, the team should quantify the expected benefit, such as time saved or downtime reduced. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Third, the team should assess whether benefits are sufficient compared with cheaper alternatives and risks. The comparison should show why the proposed option is worth its extra complexity or cost. The project should begin with a limited pilot and demonstrate measurable improvement against a baseline."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Organisational readiness",
    "slides": "15",
    "scenario": "Staff at a university clinic oppose an AI-assisted workflow because responsibilities are unclear.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO signs that organisational readiness is low.",
        "marks": 4,
        "items": [
          "Staff lack clarity about who decides and maintains the service.",
          "Users are concerned about how new technology will change their roles."
        ],
        "model": "First, staff lack clarity about who decides and maintains the service. Second, users are concerned about how new technology will change their roles. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE readiness actions.",
        "marks": 6,
        "items": [
          "Agree ownership and desired outcomes with leadership.",
          "Provide training, communication and opportunities for staff input.",
          "Ensure there is ongoing support after the pilot is completed."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, agree ownership and desired outcomes with leadership. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, provide training, communication and opportunities for staff input. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Third, ensure there is ongoing support after the pilot is completed. A controlled introduction lets the team discover issues before they affect every user."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "User & ethics",
    "slides": "16",
    "scenario": "An AI-enabled service is technically compatible but difficult for elderly users to navigate.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO user-related feasibility concerns.",
        "marks": 4,
        "items": [
          "Accessibility and usability may prevent intended users from completing tasks.",
          "Users may not trust or understand the system’s decisions and limitations."
        ],
        "model": "First, accessibility and usability may prevent intended users from completing tasks. Second, users may not trust or understand the system’s decisions and limitations. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE ethical requirements for the adoption decision.",
        "marks": 6,
        "items": [
          "Limit personal data collection and clarify access and retention.",
          "Assess whether errors or unequal access disadvantage any group.",
          "Provide transparent responsibilities and appropriate human assistance."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, limit personal data collection and clarify access and retention. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Second, assess whether errors or unequal access disadvantage any group. Third, provide transparent responsibilities and appropriate human assistance."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Decision checklist",
    "slides": "17–18",
    "scenario": "A university has not decided whether to adopt, pilot, defer or reject an advanced technology.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO early steps in the lecture’s feasibility checklist.",
        "marks": 4,
        "items": [
          "Define the current problem and measurable baseline.",
          "Identify the expected benefit and how it will be measured."
        ],
        "model": "First, define the current problem and measurable baseline. Second, identify the expected benefit and how it will be measured. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE checks leading to a defensible decision.",
        "marks": 6,
        "items": [
          "Assess technical fit, data, security and integration needs.",
          "Estimate full costs and user or staff readiness.",
          "Compare alternatives and recommend a proportionate next step."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, assess technical fit, data, security and integration needs. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, estimate full costs and user or staff readiness. Including the full lifecycle cost prevents an overly optimistic investment decision. Third, compare alternatives and recommend a proportionate next step."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Three adoption cases",
    "slides": "19–23",
    "scenario": "A review committee compares blockchain traceability, IoT facility monitoring and XR technical training.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO different factors that determine success in these cases.",
        "marks": 4,
        "items": [
          "Blockchain requires multi-party cooperation, good records and governance.",
          "IoT requires useful sensor measurements, connectivity and action on alerts."
        ],
        "model": "First, blockchain requires multi-party cooperation, good records and governance. Second, IoT requires useful sensor measurements, connectivity and action on alerts. These considerations should be checked against measurable results and the simpler available alternatives."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways the committee should evaluate case evidence.",
        "marks": 6,
        "items": [
          "XR must show better learning or task performance, not merely an impressive demo.",
          "Each option should be compared with a less complex alternative.",
          "Pilot results, limitations and independently checked outcomes should guide the decision."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, XR must show better learning or task performance, not merely an impressive demo. Its value should be judged by better task performance, not by how impressive the demonstration looks. Second, each option should be compared with a less complex alternative. The comparison should show why the proposed option is worth its extra complexity or cost. Third, pilot results, limitations and independently checked outcomes should guide the decision. A controlled introduction lets the team discover issues before they affect every user. If a shared database can meet the same requirements at lower cost and complexity, blockchain may not be justified."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Blockchain for supply chain",
    "slides": "6, 12–20, 23–24",
    "scenario": "Four manufacturers want to share product-provenance records. Their current spreadsheets disagree. A vendor proposes blockchain, but one manufacturer has poor data-entry quality and another refuses to share confidential information.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE factors to examine before selecting a solution.",
        "marks": 5,
        "items": [
          "Number of independent parties needing shared information.",
          "Integrity and accuracy of original data entry.",
          "Confidentiality of commercially sensitive records.",
          "Integration with existing inventory platforms.",
          "Costs of governance, setup and support."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, number of independent parties needing shared information. Second, integrity and accuracy of original data entry. Third, confidentiality of commercially sensitive records. Fourth, integration with existing inventory platforms. Fifth, costs of governance, setup and support."
      },
      {
        "letter": "b",
        "question": "Explain FIVE possible controls or alternatives.",
        "marks": 10,
        "items": [
          "Define common identifiers and product-data definitions.",
          "Set governance rules for who may write and view records.",
          "Improve validation and entry controls at the source.",
          "Compare a governed shared database or supply-chain platform.",
          "Pilot a limited number of participants and products."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, define common identifiers and product-data definitions. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Second, set governance rules for who may write and view records. Clear decision authority means the team knows who can approve a change and accept its residual risks. Third, improve validation and entry controls at the source. Fourth, compare a governed shared database or supply-chain platform. Fifth, pilot a limited number of participants and products. A controlled introduction lets the team discover issues before they affect every user. If a shared database can meet the same requirements at lower cost and complexity, blockchain may not be justified."
      },
      {
        "letter": "c",
        "question": "Justify FIVE elements of a decision recommendation.",
        "marks": 10,
        "items": [
          "Do not assume blockchain fixes inaccurate source records.",
          "Require clear evidence for multi-party, tamper-evident history.",
          "Examine whether participants will cooperate in practice.",
          "Use measurable traceability outcomes and total-cost comparison.",
          "Adopt only if benefits justify complexity and risk."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, do not assume blockchain fixes inaccurate source records. A shared ledger is useful only if the parties, data quality and governance support reliable traceability. Second, require clear evidence for multi-party, tamper-evident history. Third, examine whether participants will cooperate in practice. Fourth, use measurable traceability outcomes and total-cost comparison. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Fifth, adopt only if benefits justify complexity and risk. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. If a shared database can meet the same requirements at lower cost and complexity, blockchain may not be justified."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Smart building and training adoption",
    "slides": "8–18, 21–24",
    "scenario": "A university wants to reduce building energy use with IoT sensors and train maintenance staff using XR headsets. Budget is limited and staff have little experience with either technology.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE expected benefits or adoption challenges.",
        "marks": 5,
        "items": [
          "IoT may detect wasteful energy usage.",
          "Sensors may reveal faults earlier.",
          "XR may provide safe repeated equipment practice.",
          "Staff need new technical and operational skills.",
          "Hardware, content and support create ongoing cost."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, IoT may detect wasteful energy usage. Second, sensors may reveal faults earlier. Third, XR may provide safe repeated equipment practice. Fourth, staff need new technical and operational skills. Fifth, hardware, content and support create ongoing cost."
      },
      {
        "letter": "b",
        "question": "Explain FIVE feasibility investigations.",
        "marks": 10,
        "items": [
          "Review sensor coverage and accuracy in a limited building area.",
          "Confirm network reliability, security and maintenance ownership.",
          "Compare XR training with video and supervised practice.",
          "Assess trainee comfort, accessibility and task relevance.",
          "Estimate lifecycle costs and alternative use of available funds."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, review sensor coverage and accuracy in a limited building area. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Second, confirm network reliability, security and maintenance ownership. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, compare XR training with video and supervised practice. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Fourth, assess trainee comfort, accessibility and task relevance. Otherwise, people who are meant to benefit may be unable to access the service at all. Fifth, estimate lifecycle costs and alternative use of available funds. Including the full lifecycle cost prevents an overly optimistic investment decision. The project should begin with a limited pilot and demonstrate measurable improvement against a baseline."
      },
      {
        "letter": "c",
        "question": "Propose FIVE measures and next-step decisions.",
        "marks": 10,
        "items": [
          "Collect baseline energy use and maintenance response times.",
          "Pilot sensors in selected rooms with responsible alert responders.",
          "Measure training error rates and time to task completion.",
          "Review costs, adoption and user feedback.",
          "Scale only demonstrated value; revise or defer weak elements."
        ],
        "model": "The proposal should be evaluated against the real problem and evidence of value. First, collect baseline energy use and maintenance response times. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, pilot sensors in selected rooms with responsible alert responders. A controlled introduction lets the team discover issues before they affect every user. Third, measure training error rates and time to task completion. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Fourth, review costs, adoption and user feedback. Linking development to real operating conditions helps teams improve the service after each release. Fifth, scale only demonstrated value; revise or defer weak elements. The project should begin with a limited pilot and demonstrate measurable improvement against a baseline."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='lecture5_v1_';

window.initStudyLecture(DATA, STRUCTURED, STORAGE_PREFIX);

// Lecture interactions
// Interactive case explorer, feasibility checklist, and model answer for Lecture 5.
(() => {
  const root = document.getElementById('summary-list');
  const escapeText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const adoptionCases = [
      {
        badge: "CASE A • BLOCKCHAIN FOR SUPPLY-CHAIN TRACEABILITY (SLIDE 20)",
        bg: "var(--study-surface-lavender, #eeeeff)",
        title: "Case A: Multi-Party Food & Product Provenance",
        problem: "Several independent organisations (producers, distributors, retailers) need to share product movement and provenance records.",
        rationale: "A shared, tamper-evident event history improves batch traceability and coordination without a single party unilaterally editing history.",
        feasibility: "Requires active partner participation, accurate data entry at the source, shared governance rules, commercial confidentiality controls, system integration, and justifiable cost.",
        alternatives: "Centralised shared database, commercial supply-chain visibility platform, or stricter data-entry validation controls.",
        decision: "Adopt/Pilot ONLY when multiple independent parties genuinely require shared tamper-evident provenance and agree on governance—otherwise use a conventional shared database."
      },
      {
        badge: "CASE B • IoT FOR UNIVERSITY FACILITY MONITORING (SLIDE 21)",
        bg: "var(--study-surface-mint, #dcfce7)",
        title: "Case B: University Building Energy & Maintenance Monitoring",
        problem: "A university building suffers from high electricity usage and equipment maintenance issues that are detected too late.",
        rationale: "Connected sensors reveal real-time usage patterns and trigger early alerts when temperature, power, or equipment conditions become abnormal.",
        feasibility: "Requires accurate sensor placement, reliable network connectivity, occupancy privacy safeguards, integration with maintenance workflows, ongoing sensor upkeep, and clear response ownership.",
        alternatives: "Scheduled manual inspections, basic utility smart meters, or targeted monitoring of high-load equipment only.",
        decision: "Begin with a small, targeted pilot in one high-consumption building rather than instrumenting every room on campus at once."
      },
      {
        badge: "CASE C • XR FOR TECHNICAL EQUIPMENT TRAINING (SLIDE 22)",
        bg: "var(--study-surface-yellow, #fef9c3)",
        title: "Case C: Immersive Training for Expensive or Hazardous Equipment",
        problem: "Trainees need safe, repeatable practice operating complex, expensive, or hazardous machinery.",
        rationale: "VR simulation or AR contextual overlays allow risk-free, repeatable practice and visual guidance before trainees touch live equipment.",
        feasibility: "Depends on proven training effectiveness, 3D content development budget, headset hardware & hygiene, user comfort/accessibility, and effort required to update simulations when procedures change.",
        alternatives: "Instructional videos, desktop interactive 3D modules, physical mock-ups, or closely supervised live practice.",
        decision: "Pilot on high-risk or high-cost bottleneck tasks first, measuring real-world error reduction and task speed against simpler alternatives."
      }
    ];

    function showAdoptionCase(index, btnEl) {
      root.querySelectorAll(".nb-tab-btn").forEach((tab) => { tab.classList.remove("active"); tab.setAttribute("aria-pressed", "false"); });
      if (btnEl) { btnEl.classList.add("active"); btnEl.setAttribute("aria-pressed", "true"); }

      const c = adoptionCases[index];
      const panel = document.getElementById("adoption-case-panel");
      panel.style.background = c.bg;
      panel.innerHTML = `
        <span class="slide-ref" style="background:var(--study-surface-neutral, #ffffff); margin-bottom:0.55rem;">${escapeText(c.badge)}</span>
        <h4 style="font-size:1.05rem; margin-bottom:0.55rem;">${escapeText(c.title)}</h4>
        <div class="nb-grid-2" style="gap:0.65rem; margin-bottom:0.65rem;">
          <div class="nb-example" style="margin-top:0; background:var(--study-surface-neutral, #ffffff);"><strong>1. Problem:</strong> ${escapeText(c.problem)}</div>
          <div class="nb-example" style="margin-top:0; background:var(--study-surface-neutral, #ffffff);"><strong>2. Rationale:</strong> ${escapeText(c.rationale)}</div>
          <div class="nb-example" style="margin-top:0; background:var(--study-surface-neutral, #ffffff);"><strong>3. Feasibility Needs:</strong> ${escapeText(c.feasibility)}</div>
          <div class="nb-example" style="margin-top:0; background:var(--study-surface-neutral, #ffffff);"><strong>4. Simpler Alternatives:</strong> ${escapeText(c.alternatives)}</div>
        </div>
        <div class="nb-example" style="margin-top:0; background:var(--study-surface-neutral, #ffffff); border-width:2px;">
          <strong>5. Decision Guidance:</strong> ${escapeText(c.decision)}
        </div>
      `;
    }

    function toggleL5Answer() {
      const drawer = document.getElementById("l5-answer-drawer");
      const btn = document.getElementById("reveal-l5-btn");
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "Hide Model Answer" : "Reveal Model 8-Mark Exam Answer";
    }


  root.querySelectorAll('[data-adoption-case]').forEach(button => button.addEventListener('click', () => showAdoptionCase(Number(button.dataset.adoptionCase), button)));
  root.querySelector('[data-model-answer]').addEventListener('click', toggleL5Answer);
  root.querySelectorAll('[data-feasibility-step]').forEach(step => {
    const toggle = () => step.setAttribute('aria-checked', String(step.classList.toggle('checked')));
    step.addEventListener('click', toggle);
    step.addEventListener('keydown', event => {
      if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); toggle(); }
    });
  });
  showAdoptionCase(0, root.querySelector('.nb-tab-btn'));
})();



})();
