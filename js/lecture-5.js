// Lecture 5: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "Positioning: From Awareness to an Adoption Decision",
      "slides": "2, 4–5",
      "html": "<!-- Course Arc (Slide 2) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Where Lecture 5 Fits: From Awareness to an Adoption Decision <span class=\"slide-ref\">slide 2</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #f4f4f5;\">\n              <h4><span>Lecture 1 // Awareness</span></h4>\n              <p style=\"font-size: 0.87rem;\">What technologies are emerging, and what trends are shaping software engineering?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fde047;\">\n              <h4><span>Today (Part 1) // Decision</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>What problem can a technology solve, and is adoption feasible?</strong></p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Part 2 // Execution</span></h4>\n              <p style=\"font-size: 0.87rem;\">How can the technology be integrated, implemented, and evaluated?</p>\n            </div>\n          </div>\n\n          <div class=\"nb-callout coral\">\n            <strong>The Central Question — Should We Adopt It? <span class=\"slide-ref\">slide 4</span></strong><br />\n            1. Start with a <strong>real problem</strong> — not with a technology looking for a use.<br />\n            2. Identify what the technology can do <strong>better than current approaches</strong>.<br />\n            3. Compare <strong>benefits</strong> with <strong>cost, risk, readiness, and alternatives</strong>.<br />\n            4. Make a reasoned recommendation: <strong>Adopt</strong>, <strong>Pilot</strong>, or <strong>Do Not Adopt</strong>.<br />\n            <span style=\"display:inline-block; margin-top:0.4rem; font-weight:700;\">Discussion Rule: A technology can be impressive and still be the wrong choice for a particular organisation.</span>\n          </div>\n        </div>\n\n        <!-- Problem -> Capability -> Evidence SVG (Slide 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Technology Is Useful Only When It Fits the Problem <span class=\"slide-ref\">slide 5</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Problem → Capability → Evidence Alignment Triad (Slide 5)</span>\n              <span>Core Evaluation Filter</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 185\" role=\"img\" aria-label=\"Problem, Capability, and Evidence triad\">\n              <defs>\n                <marker id=\"arr-pce\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- 1. Problem -->\n              <rect x=\"14\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#fda4af\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"28\" y=\"34\" width=\"110\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"83\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">1. PROBLEM</text>\n              <text x=\"28\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">What is painful, slow,</text>\n              <text x=\"28\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">costly, unsafe, or</text>\n              <text x=\"28\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">unreliable today?</text>\n              <text x=\"28\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#881337\">Anchor in baseline facts</text>\n\n              <line x1=\"286\" y1=\"91\" x2=\"318\" y2=\"91\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-pce)\" />\n\n              <!-- 2. Capability -->\n              <rect x=\"324\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"338\" y=\"34\" width=\"128\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"402\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">2. CAPABILITY</text>\n              <text x=\"338\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">What can this</text>\n              <text x=\"338\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">technology enable or</text>\n              <text x=\"338\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">improve over alternatives?</text>\n              <text x=\"338\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#0c4a6e\">Match mechanism to need</text>\n\n              <line x1=\"596\" y1=\"91\" x2=\"628\" y2=\"91\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-pce)\" />\n\n              <!-- 3. Evidence -->\n              <rect x=\"634\" y=\"20\" width=\"272\" height=\"142\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"648\" y=\"34\" width=\"118\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"707\" y=\"50\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">3. EVIDENCE</text>\n              <text x=\"648\" y=\"82\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">How would we know</text>\n              <text x=\"648\" y=\"101\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">the proposed</text>\n              <text x=\"648\" y=\"120\" font-size=\"13.5\" font-weight=\"700\" fill=\"#0f0f0f\">improvement is real?</text>\n              <text x=\"648\" y=\"145\" font-size=\"10.5\" font-weight=\"700\" fill=\"#065f46\">Define measurable KPIs</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Technology in Context: Blockchain, IoT & Extended Reality (XR)",
      "slides": "6–11",
      "html": "<!-- 1. Blockchain (Slides 6-7) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">01 // Blockchain: When Shared Records Matter <span class=\"slide-ref\">slides 6–7</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.75rem;\">\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>Core Mechanism &amp; Gatekeeper Test</span> <span class=\"slide-ref\">slide 6</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>What it does:</strong> A shared ledger helps multiple parties maintain a consistent, tamper-evident record of transactions or events.</li>\n                <li><strong>Applications:</strong> Product provenance, shared asset records, and cross-organisation traceability.</li>\n                <li><strong>Key Question:</strong> <em>Do multiple parties need a shared, tamper-evident record and a governance model?</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Simpler Alternative:</strong> A conventional database is simpler and faster when <strong>one trusted organisation</strong> controls the data.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Illustrative Case: Supply-Chain Traceability</span> <span class=\"slide-ref\">slide 7</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Scenario:</strong> Retailer wants to trace a food product from producer → distribution centre → store.</li>\n                <li><strong>Potential Value:</strong> Shared event history, easier batch tracing, better multi-party coordination.</li>\n                <li><strong>Dependencies:</strong> Participants must record reliable data; identifiers and processes must be consistent.</li>\n                <li><strong>Trade-Offs:</strong> Implementation cost, commercial confidentiality, partner participation, and legacy integration.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answer • “If a supplier enters incorrect information, does blockchain make it true?” (Slide 7)</span>\n            <p><strong>No — “Garbage In, Immutable Garbage Out.”</strong> Blockchain guarantees <em>tamper-evidence</em> once a record is written to the ledger, preventing silent alteration later. It <strong>cannot verify real-world accuracy at the point of entry</strong>; reliable governance, audits, or automated IoT sensors are still required to ensure input integrity.</p>\n          </div>\n        </div>\n\n        <!-- 2. IoT (Slides 8-9) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">02 // Internet of Things (IoT): When Physical Conditions Need Monitoring <span class=\"slide-ref\">slides 8–9</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.75rem;\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Core Mechanism, Requirements &amp; Risks</span> <span class=\"slide-ref\">slide 8</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>What it does:</strong> Connected sensors collect data from equipment, buildings, vehicles, or the environment for real-time alerts, remote monitoring, and predictive maintenance.</li>\n                <li><strong>Requirements:</strong> Reliable connectivity, device management, data storage, and <strong>response procedures</strong>.</li>\n                <li><strong>Risks:</strong> Insecure devices, poor/noisy sensor data, network outages, and ongoing hardware maintenance.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n              <h4><span>Illustrative Case: Predictive Maintenance</span> <span class=\"slide-ref\">slide 9</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Scenario:</strong> A factory experiences costly unplanned machine downtime.</li>\n                <li><strong>Proposed Approach:</strong> Monitor vibration, temperature, or operating conditions using sensors.</li>\n                <li><strong>Expected Value:</strong> Earlier anomaly warnings, planned maintenance windows, fewer unexpected stoppages.</li>\n                <li><strong>Must Check:</strong> Sensor accuracy, connectivity, workflow integration, staff capability, and lifecycle cost.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answers • Actionability &amp; Baseline Metrics (Slides 8–9)</span>\n            <p><strong>1. “A sensor is useful only if someone or something can respond” <span class=\"slide-ref\">slide 8</span>:</strong> Streaming telemetry creates zero value without defined alert thresholds, clear owner responsibility, and maintenance workflows to act on warnings.</p>\n            <p><strong>2. “What baseline data would you collect before claiming downtime has improved?” <span class=\"slide-ref\">slide 9</span>:</strong> Record historical <strong>unplanned downtime hours per month, Mean Time Between Failures (MTBF), Mean Time to Repair (MTTR), and emergency repair costs</strong> prior to sensor installation.</p>\n          </div>\n        </div>\n\n        <!-- 3. XR (Slides 10-11) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">03 // Extended Reality (XR): VR vs. AR vs. MR &amp; Technical Training <span class=\"slide-ref\">slides 10–11</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>VR // Virtual Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\">A <strong>fully simulated environment</strong>, useful for safe, repeatable practice where real-world training is costly or hazardous.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>AR // Augmented Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>Digital information overlaid on the real world</strong>, such as step-by-step repair instructions displayed beside live equipment.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>MR // Mixed Reality</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <p style=\"font-size: 0.87rem;\"><strong>Digital and physical elements interact</strong> dynamically in an integrated environment, depending on system capabilities.</p>\n            </div>\n          </div>\n\n          <div class=\"nb-mini\" style=\"background: #f8fafc; margin-bottom: 0.75rem;\">\n            <h4><span>Illustrative Case: XR for Technical Training</span> <span class=\"slide-ref\">slide 11</span></h4>\n            <ul class=\"nb-list\">\n              <li><strong>Scenario:</strong> Trainees need safe, repeatable practice with a complex or hazardous procedure.</li>\n              <li><strong>Potential Value:</strong> Repeatable practice, visual guidance, and reduced wear/risk on live equipment.</li>\n              <li><strong>Constraints:</strong> Hardware cost, 3D content creation effort, user comfort/motion sickness, accessibility, realism, and content updates when procedures change.</li>\n              <li><strong>Adoption Question:</strong> <em>Does XR improve real-world task performance enough to justify its total cost and effort?</em></li>\n            </ul>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Lecture Discussion Answer • “A visually impressive simulation is not proof of better learning” (Slide 11)</span>\n            <p>Novelty and slick 3D graphics do not guarantee skill transfer. Validate effectiveness by measuring <strong>real-world task completion time, error rates on actual equipment, safety protocol adherence, and knowledge retention</strong> against traditional training methods.</p>\n          </div>\n        </div>"
    },
    {
      "title": "Feasibility: Can We Make It Work and Should We?",
      "slides": "12–16",
      "html": "<!-- 4 Pillars Overview & Technical/Organisational/User (Slides 12-13, 15-16) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Four Dimensions of Adoption Feasibility <span class=\"slide-ref\">slides 12–13, 15–16</span></div>\n          <div class=\"nb-grid-2\">\n            <!-- Technical -->\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>1 // Technical Feasibility</span> <span class=\"slide-ref\">slides 12–13</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Compatibility:</strong> Works with existing software, data formats, devices, and infrastructure.</li>\n                <li><strong>Quality Attributes:</strong> Performance, reliability, scalability, and service availability.</li>\n                <li><strong>Security &amp; Privacy:</strong> Cybersecurity, access control, and data protection.</li>\n                <li><strong>Supportability:</strong> Availability of skills, support, suppliers, and maintainable components.</li>\n                <li><strong>Exit Options:</strong> Ability to replace the technology or migrate data if the supplier becomes unsuitable.</li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Check <span class=\"slide-ref\">slide 13</span>:</strong> <em>“Can the organisation support it after the pilot team leaves?”</em>\n              </div>\n            </div>\n\n            <!-- Financial -->\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>2 // Financial Feasibility</span> <span class=\"slide-ref\">slides 12, 14</span></h4>\n              <p style=\"font-size: 0.87rem; margin-bottom: 0.45rem;\"><strong>Look beyond initial purchase price</strong> to full lifecycle costs vs. measurable value:</p>\n              <ul class=\"nb-list\">\n                <li><strong>Initial Cost:</strong> Devices, licences, infrastructure, implementation, and data preparation.</li>\n                <li><strong>Recurring Cost:</strong> Service fees, maintenance, support, hardware replacement, and upgrades.</li>\n                <li><strong>Change Cost:</strong> Staff training, process redesign, and temporary productivity dip during transition.</li>\n                <li><strong>Expected Value:</strong> Time saved, fewer failures, improved quality, reduced risk, or better service.</li>\n              </ul>\n            </div>\n\n            <!-- Organisational -->\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>3 // Organisational Readiness</span> <span class=\"slide-ref\">slides 12, 15</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Leadership Alignment:</strong> Do leaders agree on the problem and intended outcome?</li>\n                <li><strong>Governance &amp; Roles:</strong> Are responsibilities and decision-making authority clear?</li>\n                <li><strong>Capacity:</strong> Do staff have the skills and time to operate the solution?</li>\n                <li><strong>Workflow Impact:</strong> Will existing work practices need to change?</li>\n                <li><strong>Sustainability:</strong> Can the organisation provide ongoing support after launch?</li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle <span class=\"slide-ref\">slide 15</span>:</strong> <em>Technology adoption often changes work practices — not just software.</em>\n              </div>\n            </div>\n\n            <!-- User, Ethical & Social -->\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>4 // User, Ethical &amp; Social Factors</span> <span class=\"slide-ref\">slides 12, 16</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Usability &amp; Accessibility:</strong> Practical and accessible for all intended user groups.</li>\n                <li><strong>Privacy:</strong> Clear rules on what data is collected, who can access it, and retention duration.</li>\n                <li><strong>Trust:</strong> Users understand the system’s role and limitations.</li>\n                <li><strong>Safety &amp; Fairness:</strong> System errors or unequal access must not disadvantage specific groups.</li>\n                <li><strong>Transparency:</strong> Clear accountability when the technology produces a wrong result.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Financial Lifecycle Cost vs Value SVG (Slide 14) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Visualizing Financial Feasibility: Total Lifecycle Cost vs. Expected Value <span class=\"slide-ref\">slide 14</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Financial Feasibility Balance (Slide 14)</span>\n              <span>Full Lifecycle Cost vs. Measurable Value</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 175\" role=\"img\" aria-label=\"Financial feasibility cost buckets versus expected value\">\n              <!-- Cost Side -->\n              <rect x=\"14\" y=\"16\" width=\"565\" height=\"142\" rx=\"10\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"30\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#9f1239\">TOTAL LIFECYCLE COST (3 BUCKETS)</text>\n\n              <rect x=\"28\" y=\"52\" width=\"170\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"38\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">1. INITIAL</text>\n              <text x=\"38\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Devices, licences,</text>\n              <text x=\"38\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">infra, build &amp;</text>\n              <text x=\"38\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">data prep</text>\n\n              <rect x=\"210\" y=\"52\" width=\"170\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"220\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">2. RECURRING</text>\n              <text x=\"220\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Service fees,</text>\n              <text x=\"220\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">maintenance,</text>\n              <text x=\"220\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">support &amp; upgrades</text>\n\n              <rect x=\"392\" y=\"52\" width=\"172\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"402\" y=\"73\" font-size=\"11\" font-weight=\"700\" fill=\"#0f0f0f\">3. CHANGE COST</text>\n              <text x=\"402\" y=\"92\" font-size=\"11.5\" fill=\"#3f3f46\">Training, workflow</text>\n              <text x=\"402\" y=\"108\" font-size=\"11.5\" fill=\"#3f3f46\">redesign &amp; temp</text>\n              <text x=\"402\" y=\"124\" font-size=\"11.5\" fill=\"#3f3f46\">productivity dip</text>\n\n              <!-- VS Badge -->\n              <rect x=\"591\" y=\"65\" width=\"38\" height=\"44\" rx=\"8\" fill=\"#000000\" />\n              <text x=\"610\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#fde047\">VS</text>\n\n              <!-- Value Side -->\n              <rect x=\"641\" y=\"16\" width=\"265\" height=\"142\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"657\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#065f46\">EXPECTED VALUE</text>\n              <rect x=\"657\" y=\"52\" width=\"233\" height=\"92\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"669\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Time saved &amp; fewer failures</text>\n              <text x=\"669\" y=\"96\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Improved output quality</text>\n              <text x=\"669\" y=\"117\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Reduced operational risk</text>\n              <text x=\"669\" y=\"136\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Better user service</text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Early Risks, Constraints & The 7-Step Feasibility Checklist",
      "slides": "17–18",
      "html": "<!-- Risks & Constraints to Check Early (Slide 17) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Four Risks &amp; Constraints to Check Early <span class=\"slide-ref\">slide 17</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>1 // Integration</span></h4>\n              <p style=\"font-size: 0.86rem;\">Does it connect cleanly with existing applications and daily workflows?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>2 // Security &amp; Privacy</span></h4>\n              <p style=\"font-size: 0.86rem;\">Could devices, data, or services be exposed or misused?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>3 // Supplier Lock-In</span></h4>\n              <p style=\"font-size: 0.86rem;\">Can the organisation change supplier or export its data cleanly?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>4 // Maturity &amp; Standards</span></h4>\n              <p style=\"font-size: 0.86rem;\">Are tools, skills, support, and interoperability standards sufficiently mature?</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive 7-Step Practical Feasibility Checklist (Slide 18) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">A Practical 7-Step Feasibility Checklist (Click Steps to Tick Off) <span class=\"slide-ref\">slide 18</span></div>\n          <div class=\"nb-check-grid\" id=\"feasibility-checklist\">\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 01</span>\n              <div><strong>Define the problem and current baseline:</strong> Document what is broken, slow, or costly today using concrete numbers.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 02</span>\n              <div><strong>Identify the expected benefit and how it will be measured:</strong> Set clear success KPIs before choosing a vendor or platform.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 03</span>\n              <div><strong>Check technical fit, data needs, security, and integration:</strong> Verify compatibility, data quality/ownership, cybersecurity, and APIs.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 04</span>\n              <div><strong>Estimate total cost and available resources:</strong> Include initial, recurring, and change/training costs against budget.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 05</span>\n              <div><strong>Assess staff readiness, user needs, and operational support:</strong> Ensure workflow fit, accessibility, and post-pilot support capacity.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 06</span>\n              <div><strong>Compare with simpler alternatives and identify major risks:</strong> Test whether a standard database, scheduled inspection, or video achieves 80% of the value at lower risk.</div>\n            </div>\n            <div class=\"nb-check-item\" data-feasibility-step role=\"checkbox\" tabindex=\"0\" aria-checked=\"false\">\n              <span class=\"nb-check-num\">STEP 07</span>\n              <div><strong>Make a reasoned recommendation:</strong> Conclude with <code>Adopt</code>, <code>Pilot</code>, <code>Defer</code>, or <code>Reject</code> backed by conditions.</div>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Analysing Real-World Adoption Cases (Cases A, B & C)",
      "slides": "19–23",
      "html": "<!-- 4-Question Case Lens (Slide 19) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Analysis: Use the Same Four Questions Each Time <span class=\"slide-ref\">slide 19</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: #fda4af;\">\n              <h4><span>1 // Problem</span></h4>\n              <p style=\"font-size: 0.86rem;\">What needs to improve, and what is the current baseline?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #7dd3fc;\">\n              <h4><span>2 // Technology Fit</span></h4>\n              <p style=\"font-size: 0.86rem;\">Why might this help more than a simpler alternative?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>3 // Feasibility</span></h4>\n              <p style=\"font-size: 0.86rem;\">What must be true for adoption to work?</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #86efac;\">\n              <h4><span>4 // Evidence</span></h4>\n              <p style=\"font-size: 0.86rem;\">What outcome would show value, and what are the limitations?</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive Case Explorer (Slides 20–22) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Interactive Case Explorer: Cases A, B &amp; C <span class=\"slide-ref\">slides 20–22</span></div>\n          <div class=\"nb-tab-row\" role=\"tablist\">\n            <button type=\"button\" class=\"nb-tab-btn active\" data-adoption-case=\"0\">\n              <strong>Case A · Blockchain</strong>\n              <span>Supply-chain traceability (Slide 20)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-adoption-case=\"1\">\n              <strong>Case B · IoT</strong>\n              <span>University facility monitoring (Slide 21)</span>\n            </button>\n            <button type=\"button\" class=\"nb-tab-btn\" data-adoption-case=\"2\">\n              <strong>Case C · XR</strong>\n              <span>Hazardous equipment training (Slide 22)</span>\n            </button>\n          </div>\n\n          <div class=\"nb-tab-panel\" id=\"adoption-case-panel\">\n            <!-- Populated by JS on load -->\n          </div>\n        </div>\n\n        <!-- Compare the Cases Matrix (Slide 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Compare the Cases: What Determines the Adoption Decision? <span class=\"slide-ref\">slide 23</span></div>\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Technology</th>\n                  <th>What Determines Real Value (Slide 23)</th>\n                  <th>Simpler Alternative to Benchmark Against</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Blockchain</strong></td>\n                  <td>Value depends on <strong>multi-party shared records, governance, trusted inputs, and active partner participation</strong>.</td>\n                  <td>Centralised shared database, standard supply-chain platform, or stricter data-entry controls.</td>\n                </tr>\n                <tr>\n                  <td><strong>IoT</strong></td>\n                  <td>Value depends on <strong>useful/accurate measurements, reliable connectivity, and timely human or automated action on the data</strong>.</td>\n                  <td>Scheduled manual inspections, basic smart meters, or targeted high-risk-only monitoring.</td>\n                </tr>\n                <tr>\n                  <td><strong>XR (VR/AR/MR)</strong></td>\n                  <td>Value depends on whether the immersive experience <strong>measurably improves learning or real-world task performance</strong>.</td>\n                  <td>Instructional video, desktop interactive 3D, physical mock-ups, or supervised live practice.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "Key Takeaways, Evidence Verification & Exam Practice",
      "slides": "24–25",
      "html": "<!-- Five Key Takeaways (Slide 24) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Key Takeaways <span class=\"slide-ref\">slide 24</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #fda4af;\">\n              <h4><span>01 // Problem First</span></h4>\n              <p style=\"font-size: 0.85rem;\">Start with a real operational problem, never with a hyped technology.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #7dd3fc;\">\n              <h4><span>02 // Measurable Value</span></h4>\n              <p style=\"font-size: 0.85rem;\">Technology capabilities must translate into concrete, measurable outcomes.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>03 // 4-Pillar Fit</span></h4>\n              <p style=\"font-size: 0.85rem;\">Feasibility spans technical, financial, organisational, and user-related factors.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>04 // Alternatives</span></h4>\n              <p style=\"font-size: 0.85rem;\">Always benchmark the proposal against simpler, lower-risk alternatives.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>05 // Pilot Evidence</span></h4>\n              <p style=\"font-size: 0.85rem;\">Use evidence from small pilots and real outcomes to guide adoption decisions.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Case Preparation & Evidence Standards (Slide 25) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Preparation &amp; Evidence Verification Rules <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"nb-callout yellow\" style=\"margin-bottom: 0.85rem;\">\n            <strong>Critical Source Check <span class=\"slide-ref\">slide 25</span>:</strong><br />\n            • Use credible standards (such as <strong>NIST publications</strong> on IoT cybersecurity and information-system security) to ground risk and readiness discussions.<br />\n            • For named organisational cases, rely on credible case reports or peer-reviewed studies—and <strong>verify whether reported outcomes are independently measured or come only from a vendor</strong>.<br />\n            • Record 6 mandatory items for every case: <code>Organisation</code>, <code>Problem</code>, <code>Technology</code>, <code>Outcome</code>, <code>Limitations</code>, and <code>Source</code>.\n          </div>\n        </div>\n\n        <!-- Interactive Exam Practice Question -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Exam Practice Scenario <span class=\"nb-tag yellow\">8-Mark Structured Case Evaluation</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <p style=\"font-size: 0.92rem; font-weight: 700; margin-bottom: 0.75rem;\">\n              “A university facilities manager proposes installing IoT sensors across every classroom and lab on campus immediately to reduce high electricity bills and late maintenance repairs. Using the feasibility and case-analysis principles from Lecture 5, evaluate this proposal and state your recommendation.”\n            </p>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-l5-btn\" data-model-answer aria-expanded=\"false\" aria-controls=\"l5-answer-drawer\">Reveal Model 8-Mark Exam Answer</button>\n\n            <div class=\"nb-answer-drawer\" id=\"l5-answer-drawer\">\n              <span class=\"nb-answer-title\">Model Exam Answer • IoT Facility Monitoring Evaluation</span>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>1. Problem &amp; Baseline (2 marks):</strong> High energy consumption and late fault detection are valid problems, but the university must first record baseline electricity usage, fault response times, and repair costs per building before deploying sensors.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>2. Four-Pillar Feasibility &amp; Risks (3 marks):</strong> <em>Technical:</em> Requires reliable campus Wi-Fi/LoRaWAN coverage, device security (NIST IoT security baselines), and integration with maintenance ticketing systems. <em>Financial:</em> Campus-wide rollout carries high initial hardware cost plus recurring sensor maintenance/battery replacement. <em>Organisational:</em> Sensors only create value if facilities staff have clear alert workflows and ownership to respond. <em>User/Privacy:</em> Occupancy sensors must respect staff and student privacy.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>3. Simpler Alternatives (1 mark):</strong> Compare against scheduled preventive inspections or sub-metering only high-consumption buildings (e.g., server rooms, HVAC chillers, labs).</p>\n              <p style=\"margin-bottom: 0;\"><strong>4. Recommendation — PILOT, Do Not Roll Out Campus-Wide Yet (2 marks):</strong> Recommend a <strong>targeted small pilot</strong> in one high-energy building to validate sensor accuracy, alert response workflows, and actual kWh/cost savings before scaling.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Formula A // 4-Mark Concept Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Explain two feasibility pillars / financial cost types / early risks...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Name the factor + explain what it checks + give a concrete failure if ignored.</li>\n                <li><strong>Point 2 (2 marks):</strong> Name distinct second factor + explain what it checks + give a concrete failure if ignored.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Formula B // 8–10 Mark Adoption Recommendations</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Should Organisation X adopt Blockchain / IoT / XR?”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Problem &amp; Baseline:</strong> State real pain point + baseline metric to beat.</li>\n                <li><strong>2. Fit vs. Simpler Alternative:</strong> Explain why the tech helps (or why a simpler tool wins).</li>\n                <li><strong>3. 4-Pillar Feasibility:</strong> Cover Technical, Financial (total lifecycle cost), Organisational, and User/Ethical factors.</li>\n                <li><strong>4. Verdict &amp; Evidence:</strong> Recommend <code>Adopt / Pilot / Defer / Reject</code> + define KPIs to prove value.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    }
  ],
  "essays": [
    {
      "topic": "Principles",
      "kind": "Explain",
      "marks": 8,
      "slides": "2–5",
      "question": "Explain the central rule “start with the problem, not the technology.”",
      "points": [
        "Problem first",
        "Specific improvement",
        "Capability and fit",
        "Evidence",
        "Avoid technology hype"
      ],
      "answer": "The lecture argues that adoption should begin with a real organisational problem rather than a technology looking for a use. The organisation should identify what is currently slow, expensive, unreliable or unsafe, then ask which technology capability could improve the situation. It must also decide how the improvement will be measured. For example, a university should investigate high energy consumption before ordering IoT sensors and should compare sensor monitoring with simpler options. A technology can be impressive without being appropriate. The most defensible recommendation is the one that connects the problem, the expected outcome, feasibility and evidence instead of relying on novelty."
    },
    {
      "topic": "Principles",
      "kind": "Explain",
      "marks": 8,
      "slides": "2–5",
      "question": "Describe the relationship between problem, capability and evidence.",
      "points": [
        "Define three terms",
        "Cause of change",
        "Practical example",
        "Importance of measurement"
      ],
      "answer": "The problem describes an existing difficulty, such as unplanned equipment downtime. Capability is what a proposed technology might enable, such as sensor-based monitoring that identifies abnormal machine conditions earlier. Evidence is the measurement needed to establish whether that capability improves the problem, such as a reduction in downtime compared with a relevant baseline. The three elements form a logical chain: technology selection should be justified by a needed improvement, and the claimed improvement should be tested. Without a real problem, the technology lacks purpose; without evidence, the proposed benefit remains an assumption rather than a demonstrated result."
    },
    {
      "topic": "Principles",
      "kind": "Analyse",
      "marks": 10,
      "slides": "4–5, 12",
      "question": "A manager wants blockchain because competitors are discussing it. Evaluate the proposal.",
      "points": [
        "Identify the underlying problem",
        "Shared-record fit",
        "Feasibility dimensions",
        "Alternative database",
        "Evidence-based decision"
      ],
      "answer": "The manager has proposed a technology without establishing a problem it would solve. I would first ask whether several independent organisations need a shared history of transactions or provenance and whether they can agree on governance. If the records belong to one trusted organisation, a conventional database may be more appropriate. Technical feasibility would include integration, security and data quality, while financial and organisational feasibility would include cost, ongoing support and participation from partners. The organisation should define a traceability outcome and compare alternatives before committing. I would not recommend immediate adoption solely because competitors discuss the technology; a targeted pilot may be appropriate if a genuine multi-party need is established."
    },
    {
      "topic": "Principles",
      "kind": "Compare",
      "marks": 8,
      "slides": "2–4, 18",
      "question": "Differentiate adoption, pilot, deferment and rejection as technology decisions.",
      "points": [
        "Adopt",
        "Pilot",
        "Defer",
        "Reject",
        "Decision conditions"
      ],
      "answer": "Adoption is appropriate when a technology is sufficiently justified and the organisation is ready to implement it. A pilot is a limited trial used to reduce uncertainty about value, reliability, cost or user acceptance before a wider investment. Deferring means the idea may still be relevant but important conditions, such as data quality, funding or staffing, are not yet met. Rejection is appropriate when the technology does not fit the problem or when simpler alternatives provide adequate value at lower risk or cost. The lecture’s checklist ends with these options to encourage a reasoned recommendation rather than assuming every new technology must be deployed."
    },
    {
      "topic": "Blockchain",
      "kind": "Define",
      "marks": 8,
      "slides": "6",
      "question": "Explain blockchain’s proposed role in cross-organisation record sharing.",
      "points": [
        "Shared ledger",
        "Tamper-evident history",
        "Multi-party provenance",
        "Governance and alternatives"
      ],
      "answer": "In the lecture, blockchain is presented as a shared ledger that can help several parties maintain a consistent, tamper-evident history of transactions or events. Possible uses include product provenance, shared assets and traceability across organisations. The value depends on a real need for those parties to share records and on an agreed governance model. Blockchain is not automatically the correct choice for storing information. When one trusted organisation controls the data, a conventional database may be simpler. Therefore, an engineer should explain the multi-party problem and the role of governance before claiming blockchain adds value."
    },
    {
      "topic": "Blockchain",
      "kind": "Compare",
      "marks": 10,
      "slides": "6, 20",
      "question": "Compare blockchain with a conventional shared database for product traceability.",
      "points": [
        "Multi-party need",
        "Shared tamper-evident record",
        "Trusted central operator",
        "Cost/governance/integration",
        "Decision"
      ],
      "answer": "Blockchain may be useful when several organisations need a shared history of product movements and no single party’s database is an adequate coordination arrangement. Its proposed value in the lecture is a shared, tamper-evident record. However, it still requires participating organisations, agreed governance, appropriate data quality, confidentiality and integration. A conventional database or supply-chain platform may be simpler where one trusted organisation can operate the record on behalf of the parties. I would compare total costs and achievable traceability outcomes rather than assuming one technology is always superior. The correct choice depends on who controls the records and what cross-organisation trust problem actually exists."
    },
    {
      "topic": "Blockchain",
      "kind": "Analyse",
      "marks": 12,
      "slides": "20",
      "question": "Analyse Case A: adopting blockchain for supply-chain traceability.",
      "points": [
        "Problem",
        "Why blockchain might fit",
        "Participant/data risks",
        "Costs/integration",
        "Alternatives and decision"
      ],
      "answer": "Case A involves several organisations that need consistent product movement and provenance records. Blockchain may add value by maintaining a shared history that is tamper-evident, potentially improving the ability to trace events across parties. However, adoption depends on each participant contributing reliable information and agreeing how the ledger is governed. Privacy, confidentiality, integration with existing systems and cost also affect feasibility. The organisation should compare blockchain with a shared database, established supply-chain platform or better data-entry controls. I would recommend a bounded pilot only if the multi-party record problem is genuine and participants are committed. Its success should be judged by traceability quality and operational effort, not by the existence of a blockchain system."
    },
    {
      "topic": "Blockchain",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "6, 20, 23",
      "question": "Explain why blockchain does not automatically guarantee trustworthy supply-chain data.",
      "points": [
        "Tamper-evident is not truthful input",
        "Data quality",
        "Participant responsibilities",
        "Verification and governance",
        "Conditional judgement"
      ],
      "answer": "A tamper-evident record can help show whether stored information has been altered, but it does not necessarily prove that each original entry was correct. This follows from the lecture’s explicit emphasis on data quality and governance as prerequisites to the traceability case. If a supplier enters an incorrect product origin, sharing the entry may preserve the error rather than correct it. The participating organisations therefore need reliable input procedures, clear responsibilities and ways to resolve inaccuracies. They must also assess confidentiality and integration. Blockchain can improve record-sharing arrangements under appropriate conditions, but it should not be described as removing all data-quality or trust problems."
    },
    {
      "topic": "Blockchain",
      "kind": "Apply",
      "marks": 8,
      "slides": "6, 20",
      "question": "A single university department controls all its asset records. Would you recommend blockchain?",
      "points": [
        "Single trusted owner",
        "Alternative conventional database",
        "Cost/complexity",
        "Conditional answer"
      ],
      "answer": "I would not recommend blockchain merely because the university department wants modern technology. The lecture states that a conventional database may be simpler when one trusted organisation controls the records. In this case, there is no clear requirement for multiple independent parties to maintain a shared tamper-evident history. A well-managed database and improved data-entry controls could likely address asset tracking with less governance and integration complexity. I would first define the actual accuracy or traceability problem and compare the cost and expected improvement of the available options. Blockchain should be reconsidered only if a genuine multi-party record-sharing requirement emerges."
    },
    {
      "topic": "IoT",
      "kind": "Explain",
      "marks": 10,
      "slides": "8",
      "question": "Explain how IoT can support monitoring and predictive maintenance.",
      "points": [
        "Connected sensors",
        "Collect relevant measurements",
        "Alert/predict",
        "Data/integration needs",
        "Act on outputs"
      ],
      "answer": "Internet of Things systems use connected sensors to collect information about physical equipment, buildings, vehicles or the environment. These observations can support remote monitoring and alerts when conditions become abnormal. In predictive maintenance, measurements such as vibration or temperature may help identify developing faults before a machine stops unexpectedly. However, the system also requires accurate sensors, dependable connectivity, data storage, integration and a clear maintenance response procedure. Poor readings or network outages can undermine the intended value. The lecture emphasises that data collection alone is not enough: the organisation must be ready to act on what the sensors reveal."
    },
    {
      "topic": "IoT",
      "kind": "Analyse",
      "marks": 10,
      "slides": "9",
      "question": "Apply the lecture’s predictive-maintenance example to a factory with unexpected stoppages.",
      "points": [
        "Problem and baseline",
        "Sensor application",
        "Value",
        "Feasibility",
        "Evidence"
      ],
      "answer": "A factory facing unplanned equipment downtime should first record how frequently machines stop and how much production time is lost. A possible IoT solution is to monitor vibration, temperature or other operating conditions and use abnormal readings as early warning signals. The expected value is better maintenance planning and fewer unexpected failures. Adoption feasibility depends on sensor placement and accuracy, reliable networks, integration with maintenance workflows, trained staff and total cost. The factory should compare downtime after a pilot with its baseline and examine whether technicians can actually respond to alerts. A decrease in stoppages supported by reliable evidence would be stronger than a claim that monitoring itself guarantees improvement."
    },
    {
      "topic": "IoT",
      "kind": "Analyse",
      "marks": 12,
      "slides": "21",
      "question": "Analyse Case B: IoT monitoring for a university building.",
      "points": [
        "Energy/maintenance problem",
        "Proposed monitoring",
        "Technical and privacy feasibility",
        "Alternatives",
        "Pilot decision"
      ],
      "answer": "The university experiences high building energy consumption and maintenance problems that are noticed too late. IoT sensors may identify usage patterns and trigger alerts when conditions become abnormal. The intended outcome is lower energy waste or faster maintenance response, but the university must examine sensor accuracy and placement, connectivity, data handling, privacy, system integration and continuing upkeep. It must also name the team responsible for acting on alerts. Alternatives include scheduled inspections, smart meters and targeted monitoring. Because blanket installation would be costly without evidence, I would begin with a bounded pilot and compare relevant energy or maintenance indicators with the current baseline before considering wider rollout."
    },
    {
      "topic": "IoT",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "8, 21",
      "question": "Why is installing sensors in every university room not automatically the best choice?",
      "points": [
        "Cost and maintenance",
        "Meaningful readings",
        "Privacy",
        "Action ownership",
        "Alternative/pilot"
      ],
      "answer": "Installing sensors everywhere can increase device, network, data-storage and maintenance costs without guaranteeing useful improvement. Some measurements may be inaccurate, unnecessary or difficult for staff to act upon. Occupancy-related monitoring may also create privacy considerations. The university should first identify which facility problem it needs to solve, whether a smart meter, scheduled inspection or targeted sensor set can provide the required evidence, and who will respond when an alert is raised. A pilot in selected areas would help test the relationship between measurements and action. Wider adoption is justified only if this smaller trial demonstrates a credible benefit relative to its cost and risks."
    },
    {
      "topic": "IoT",
      "kind": "Apply",
      "marks": 8,
      "slides": "8–9",
      "question": "Explain the phrase “a sensor is useful only if someone or something can respond.”",
      "points": [
        "Sensors measure, not solve",
        "Alert/action link",
        "Ownership",
        "Practical example"
      ],
      "answer": "A sensor can detect and report a physical condition, but a measurement does not by itself repair a fault or reduce energy consumption. The organisation must connect the information to a response, such as notifying a maintenance team and ensuring that someone has responsibility for investigation. For example, a sensor might detect abnormal temperature in a university equipment room. If its alerts are ignored or fail to reach the responsible staff, the technology may not prevent damage. Therefore, IoT feasibility includes operational workflows, response ownership and support as well as devices and connectivity. This is why adoption success should be measured by improved outcomes rather than by the number of sensors installed."
    },
    {
      "topic": "XR",
      "kind": "Compare",
      "marks": 10,
      "slides": "10",
      "question": "Differentiate Virtual Reality, Augmented Reality and Mixed Reality.",
      "points": [
        "VR simulation",
        "AR overlays",
        "MR interaction",
        "Illustrative use",
        "Relate to learning"
      ],
      "answer": "Virtual Reality, or VR, places the user in a simulated environment and can support rehearsal of tasks that are dangerous or expensive to practise live. Augmented Reality, or AR, adds digital information to the real environment; for instance, repair guidance can appear beside a physical machine. Mixed Reality, or MR, combines digital and physical elements in an environment where they can interact, depending on the system. All three are forms of extended reality, but they support different types of interaction with the real world. The most appropriate choice depends on the training task and evidence that it improves performance, safety or learning."
    },
    {
      "topic": "XR",
      "kind": "Analyse",
      "marks": 12,
      "slides": "11, 22",
      "question": "Analyse Case C: adopting XR for hazardous equipment training.",
      "points": [
        "Training problem",
        "Potential value",
        "Financial and usability constraints",
        "Alternatives",
        "Training evidence"
      ],
      "answer": "The training problem is that staff need safe, repeatable practice with equipment that is expensive or hazardous to operate. XR could provide simulated or contextual guidance before trainees work with live machines, allowing repeated attempts without every attempt consuming equipment time. Nevertheless, feasibility involves hardware and content-development costs, realism, updates, comfort and accessibility. A visually attractive simulation may fail to improve actual task performance. The organisation should compare XR with videos, interactive 3D material, mock-ups and supervised practice. A limited trial should measure task accuracy, confidence or safe procedure completion using consistent criteria. I would recommend wider adoption only where the training benefits justify the full cost and upkeep."
    },
    {
      "topic": "XR",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "11, 22",
      "question": "An XR vendor shows a stunning simulation. Evaluate whether this proves the training is effective.",
      "points": [
        "Visual quality vs learning",
        "Training objectives",
        "Realism/usability",
        "Measurement vs baseline",
        "Decision"
      ],
      "answer": "A visually impressive XR demonstration is not evidence that learners can perform the target procedure safely or accurately. The lecture explicitly warns that simulation appearance does not prove better learning. Effectiveness requires an agreed training objective and suitable measurements, such as procedural accuracy or safe task completion after training. The organisation must also consider whether the simulation is realistic enough, comfortable and accessible to the intended learners. Total costs include content updates and hardware support. I would test the XR approach against a credible alternative, such as supervised practice or interactive 3D training, before deciding whether it provides enough additional value to justify adoption."
    },
    {
      "topic": "XR",
      "kind": "Apply",
      "marks": 10,
      "slides": "10–11, 22",
      "question": "Choose a plausible XR approach for equipment repair guidance and justify it.",
      "points": [
        "Identify actual task",
        "Choose AR or suitable XR",
        "Guidance mechanism",
        "Constraints",
        "Evidence"
      ],
      "answer": "For a maintenance task where workers need instructions while viewing real equipment, AR may be a suitable approach because it can overlay digital guidance beside the physical components. The proposed value is clearer contextual instruction without requiring the worker to leave the task area. However, the organisation should examine hardware suitability, readability, comfort, accessibility, content accuracy and how frequently instructions need updating. It should compare this option with ordinary documentation or an interactive video. A pilot could measure task completion, error rates or training time. The decision should depend on improvement in the actual repair process rather than the appeal of the display technology."
    },
    {
      "topic": "Feasibility",
      "kind": "Explain",
      "marks": 12,
      "slides": "12",
      "question": "Explain the four major dimensions of technology adoption feasibility.",
      "points": [
        "Technical",
        "Financial",
        "Organisational",
        "User-related",
        "Combined decision"
      ],
      "answer": "Technical feasibility asks whether the solution can function reliably with existing infrastructure, applications, data and security requirements. Financial feasibility asks whether acquisition, integration, training, operation and maintenance are affordable relative to the expected benefit. Organisational feasibility considers leadership, roles, staff skills, processes and support capacity. User-related feasibility asks whether the intended users can access, understand, trust and use the technology effectively. These dimensions are interdependent. For example, an IoT system may be technically reliable but still fail if no maintenance team owns the alerts or users reject inappropriate monitoring. The organisation should make an adoption decision only after considering the complete set."
    },
    {
      "topic": "Feasibility",
      "kind": "Analyse",
      "marks": 10,
      "slides": "13",
      "question": "Explain five key technical feasibility questions for adopting advanced technology.",
      "points": [
        "Compatibility",
        "Reliability/scalability",
        "Security/privacy",
        "Skills/suppliers",
        "Exit options"
      ],
      "answer": "A technical feasibility review should first assess compatibility with existing software, data, devices and infrastructure. Next, it should examine performance, reliability, scalability and availability under expected conditions. Security and privacy requirements must also be considered, including appropriate access and data protection. The organisation needs skills, suppliers and support arrangements that can maintain the technology after initial deployment. Finally, it should consider whether components or vendors can be replaced if the selected solution stops being suitable. Together these questions test whether adoption is workable for the organisation over time, not simply whether a vendor can run a successful demonstration."
    },
    {
      "topic": "Feasibility",
      "kind": "Compare",
      "marks": 10,
      "slides": "14",
      "question": "Distinguish initial, recurring and change costs in financial feasibility.",
      "points": [
        "Initial costs",
        "Recurring costs",
        "Change costs",
        "Value assessment",
        "Example"
      ],
      "answer": "Initial costs are the resources required to start using the technology, such as devices, licences, infrastructure, implementation and data preparation. Recurring costs continue after adoption, including service fees, maintenance, support, upgrades and replacements. Change costs arise from altered ways of working, including training, process redesign and a temporary loss of productivity. For an IoT project, buying sensors is only part of the investment; the organisation must also maintain connectivity, respond to alerts and train its staff. Financial feasibility compares these complete costs with expected benefits such as reduced downtime or improved service, rather than judging only the advertised purchase price."
    },
    {
      "topic": "Feasibility",
      "kind": "Analyse",
      "marks": 10,
      "slides": "15",
      "question": "Explain why organisational readiness can be a bigger obstacle than technical feasibility.",
      "points": [
        "Leadership support",
        "Decision rights",
        "Skills/time",
        "Workflow changes",
        "Sustained operation"
      ],
      "answer": "A system may be technically compatible with the organisation yet fail because the people and processes needed to operate it are not ready. Leaders may disagree about the problem or intended outcome, staff may lack training, and nobody may have authority to respond to alerts or approve data changes. New technology can require process redesign and continuing operational support. For example, IoT monitoring has limited value if there is no maintenance procedure for abnormal readings. Organisational readiness therefore asks whether responsibilities, capability and support can be sustained beyond a pilot. Technical success should be evaluated alongside the organisation’s practical ability to turn technology output into action."
    },
    {
      "topic": "Feasibility",
      "kind": "Explain",
      "marks": 10,
      "slides": "16",
      "question": "Discuss five user, ethical and social considerations in adoption.",
      "points": [
        "Usability/accessibility",
        "Privacy",
        "Trust",
        "Safety/fairness",
        "Transparency/accountability"
      ],
      "answer": "User-related evaluation includes usability and accessibility, because a solution should work for the people expected to use it. Privacy asks what information is collected, who can access it and how long it is retained. Trust concerns whether users understand the technology’s role and limitations. Safety and fairness require assessing whether errors or unequal access could disadvantage some groups. Transparency and accountability require clear responsibility when an automated or technology-supported outcome is wrong. These questions matter even if a technology is inexpensive and technically reliable. A responsible adoption recommendation should identify foreseeable harms and the safeguards needed to manage them."
    },
    {
      "topic": "Feasibility",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "12–16",
      "question": "An IoT pilot works technically but maintenance staff refuse to use it. Evaluate adoption readiness.",
      "points": [
        "Technical success not enough",
        "Staff concerns",
        "Workflow/ownership",
        "Training/support",
        "Decision"
      ],
      "answer": "The pilot demonstrates some technical feasibility but does not establish organisational readiness. Staff may not trust the readings, understand the alerts or have enough time to act. The project team should investigate their concerns and identify whether work procedures, responsibilities or training need to change. It should also evaluate the accuracy and usefulness of the sensor information and confirm that leaders support the intended outcome. I would not scale the deployment simply because devices transmit data correctly. Adoption should be deferred or improved through a focused pilot until the maintenance workflow and support arrangements show that technology alerts lead to useful action."
    },
    {
      "topic": "Checklist",
      "kind": "Explain",
      "marks": 12,
      "slides": "18",
      "question": "Explain the seven-step practical feasibility checklist.",
      "points": [
        "Problem/baseline",
        "Expected measured benefit",
        "Technical/security/integration",
        "Total cost",
        "Users/staff/support",
        "Alternatives/risks",
        "Recommendation"
      ],
      "answer": "The feasibility process begins by defining the actual problem and measuring the current baseline. The team then identifies the desired benefit and how it would be measured. Next, it checks whether the technology fits existing systems and can meet data, security and integration needs. It estimates all relevant costs and resource requirements, assesses staff readiness and user needs, and checks whether support can be maintained. It then compares simpler alternatives and identifies major risks. Finally, it recommends adoption, a pilot, deferment or rejection according to the evidence. This checklist prevents organisations from committing to technology before demonstrating a convincing reason and practical capacity to use it."
    },
    {
      "topic": "Checklist",
      "kind": "Apply",
      "marks": 10,
      "slides": "18–19",
      "question": "Build an adoption assessment for a university IoT pilot using the lecture’s case-analysis headings.",
      "points": [
        "Problem/baseline",
        "Technology fit",
        "Feasibility",
        "Evidence",
        "Recommendation"
      ],
      "answer": "The problem is high energy use and late detection of building faults; the baseline should include energy consumption and response times before monitoring. IoT may fit because sensors can reveal conditions and trigger alerts more frequently than occasional inspection. Feasibility covers sensor placement, data accuracy, connectivity, integration, privacy, maintenance cost and responsibility for responses. Evidence could include energy use, time to detect faults and maintenance outcomes measured consistently after the pilot. Scheduled inspections, smart meters and targeted monitoring should be considered as alternatives. I would begin with a limited pilot because its usefulness and costs need to be established before university-wide deployment."
    },
    {
      "topic": "Checklist",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "18, 24",
      "question": "Explain the role of simpler alternatives in a reasoned adoption recommendation.",
      "points": [
        "Identify functional outcome",
        "Compare alternatives",
        "Cost/risk/effort",
        "Avoid novelty bias",
        "Decision"
      ],
      "answer": "An adoption decision should compare the proposed technology with realistic alternatives that could solve the same problem. Otherwise, a team may overestimate the benefit of a sophisticated system because it has no reference point. For example, a university considering IoT sensors everywhere should compare the outcome with smart meters or targeted inspection. A product-traceability consortium should compare blockchain with a shared database. Similarly, XR should be compared with videos or supervised practice for training. The correct recommendation depends on the additional value provided relative to cost, complexity and risk. Simpler solutions should not be dismissed merely because they are less novel."
    },
    {
      "topic": "Cases",
      "kind": "Compare",
      "marks": 12,
      "slides": "20–23",
      "question": "Compare the value conditions of blockchain, IoT and XR across the three adoption cases.",
      "points": [
        "Blockchain shared records/governance",
        "IoT measurements/action",
        "XR learning improvement",
        "Respective limits",
        "Conditional decision"
      ],
      "answer": "Blockchain’s value in the traceability case depends on multiple organisations needing shared records, agreeing on governance and supplying trustworthy data. IoT’s value in facility monitoring depends on accurate measurements, connectivity and staff responding to meaningful readings. XR’s value in technical training depends on improving learning and real task performance, with suitable realism, accessibility and support. These technologies therefore solve different types of problems and have different practical constraints. All must be compared with simpler alternatives and evaluated against a current baseline. The strongest adoption decision is not the one that favours the newest technology but the one supported by credible benefit, feasibility and organisational readiness."
    },
    {
      "topic": "Cases",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "19–23",
      "question": "A university has funds for one pilot: facility IoT or XR training. Propose how to decide fairly.",
      "points": [
        "Define distinct problems",
        "Measure baseline",
        "Compare benefits/costs",
        "Feasibility",
        "Pilot choice/criteria"
      ],
      "answer": "The university should not choose between IoT and XR solely by novelty because they address different needs. It should first establish the severity of each problem: energy waste and late maintenance on one side, and unsafe or ineffective practical training on the other. It should identify measurable outcomes such as energy use and maintenance response time for IoT, or safe task completion and training effectiveness for XR. Costs, data/privacy risks, staff readiness and operational support should be assessed for both. Alternatives, including smart meters or supervised training, also matter. I would select the pilot with the clearer unmet need, credible expected value and manageable constraints, then define success criteria before spending the budget."
    },
    {
      "topic": "Cases",
      "kind": "Apply",
      "marks": 10,
      "slides": "19–25",
      "question": "Explain how to evaluate the credibility of a published technology adoption case.",
      "points": [
        "Organisation/problem",
        "Technology and outcome",
        "Measured evidence",
        "Limitations",
        "Independent versus vendor claims"
      ],
      "answer": "A useful case report should identify the organisation and the problem it faced, explain the technology adopted and state what outcome was reported. It should also disclose limitations and provide a credible source. The lecture advises checking whether claimed benefits were independently measured or merely stated by a technology vendor. For example, a claim that IoT reduced downtime is more convincing when it explains the baseline period, how downtime was defined and what changed after adoption. The evaluator should consider alternative causes and missing information instead of treating a percentage in marketing material as conclusive proof. This supports more responsible adoption decisions."
    },
    {
      "topic": "Cases",
      "kind": "Discuss",
      "marks": 12,
      "slides": "4–24",
      "question": "Discuss why a successful technology demonstration may still fail as an organisational adoption.",
      "points": [
        "Demo narrow scope",
        "Technical limits in production",
        "Costs and scale",
        "Organisation/user",
        "Evidence and follow-through"
      ],
      "answer": "A demonstration shows that a technology can operate under selected conditions, but organisations must use it within more complex systems, workflows and constraints. Technical problems can emerge at scale, such as unreliable connectivity or integration failures. Total costs include support, maintenance and staff change rather than just the demonstration equipment. Users may not trust the new workflow or understand their responsibilities. A visually impressive XR simulation may not improve learning, while an IoT dashboard may not reduce downtime unless alerts lead to action. Adoption therefore requires measured outcomes, organisational readiness and comparison with alternatives. A pilot should test these uncertainties before a wider rollout is approved."
    },
    {
      "topic": "Recap",
      "kind": "Explain",
      "marks": 10,
      "slides": "24",
      "question": "Explain the lecture’s five takeaways and their implications for engineers.",
      "points": [
        "Problem first",
        "Measurable value",
        "Four feasibilities",
        "Simpler alternatives",
        "Evidence"
      ],
      "answer": "The first takeaway is to begin with a real problem rather than adopting technology because it is fashionable. Second, technical capability must be translated into a measurable organisational benefit. Third, feasibility includes technical, financial, organisational and user-related conditions. Fourth, engineers must compare the proposal with simpler alternatives that could address the same need with less cost or risk. Fifth, adoption decisions should use evidence from pilots and real outcomes rather than unsupported promises. Together these lessons make technology choice a reasoned engineering and organisational decision. They also explain why recommending a pilot or even rejecting a proposal can be more responsible than immediate implementation."
    },
    {
      "topic": "Recap",
      "kind": "Apply",
      "marks": 10,
      "slides": "5, 18–24",
      "question": "Write an exam-ready conclusion for a technology adoption scenario with promising benefits but unknown user acceptance.",
      "points": [
        "Acknowledge potential benefit",
        "Identify uncertainty",
        "Pilot instead of automatic rollout",
        "Measurement and criteria",
        "Conditional next step"
      ],
      "answer": "The proposed technology may offer genuine value if its capabilities address a clearly defined organisational problem. However, its technical promise does not establish user-related feasibility. If staff or end users cannot access, understand or trust the solution, the intended benefit may not be realised. I would recommend a bounded pilot rather than immediate full adoption, with agreed measures of performance and user acceptance, appropriate training and a comparison with a simpler alternative. The organisation should also review ongoing cost, privacy or safety implications. Wider rollout should occur only if the evidence shows that the solution improves the intended outcome and can be operated sustainably."
    },
    {
      "topic": "Recap",
      "kind": "Analyse",
      "marks": 10,
      "slides": "6–24",
      "question": "Explain why an adoption decision should be conditional rather than purely “yes” or “no.”",
      "points": [
        "Benefits and uncertainties",
        "Different feasibility dimensions",
        "Pilots reduce uncertainty",
        "Dependencies",
        "Reasoned recommendation"
      ],
      "answer": "Technology adoption involves several conditions that may not all be known at the beginning. A proposal may offer a plausible benefit while leaving uncertainties about cost, integration, user acceptance or data quality. A conditional decision can explain what evidence or action is required before adoption is justified. For example, blockchain traceability may require partner commitment, while an IoT project may need accurate readings and reliable maintenance responses. A pilot can test these conditions at limited scale. If the problems cannot be resolved, deferment or rejection may be appropriate. This is more rigorous than making an unconditional decision based on technological enthusiasm or a single positive demonstration."
    },
    {
      "topic": "Recap",
      "kind": "Design",
      "marks": 12,
      "slides": "4–24",
      "question": "Construct a reusable essay framework for analysing any advanced-technology adoption case.",
      "points": [
        "Problem/current baseline",
        "Capability/fit",
        "Four feasibility dimensions",
        "Alternatives/risks",
        "Evidence/recommendation"
      ],
      "answer": "I would begin by naming the organisation’s problem and describing the current baseline so the need is clear. Next, I would identify what the proposed technology can do and explain why that capability could improve the situation. I would then examine technical compatibility and security, financial costs and expected value, organisational readiness, and user accessibility and trust. The answer should identify significant limitations and compare one or more simpler alternatives. I would state what evidence, such as pilot measurements, would show that the expected outcome is achieved. Finally, I would recommend adoption, a pilot, deferment or rejection and justify the decision through the identified risks, benefits and constraints."
    },
    {
      "topic": "Recap",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "13–16, 20–22",
      "question": "A vendor promises fast deployment but offers no ongoing support. Analyse the feasibility implications.",
      "points": [
        "Technical support/maintenance",
        "Financial recurring cost",
        "Organisational capacity",
        "User consequences",
        "Decision"
      ],
      "answer": "Fast initial deployment does not establish long-term feasibility if the organisation cannot maintain the technology. Technical feasibility requires available skills, support and maintainable components, as well as exit options when a supplier becomes unsuitable. Financial feasibility must include ongoing service, upgrade and replacement costs. Organisational readiness also depends on staff having the capacity to operate and respond to the solution after the pilot team leaves. A system that breaks without support can harm users and undermine trust. I would require a credible support and maintenance arrangement and compare alternative providers before recommending adoption. Otherwise, deferring the decision may be more responsible than accepting a quick installation."
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

// Topic reading progress is stored separately from practice performance.
function loadReadTopics(){
 const saved=storage.get('topics_read_v1',{});
 if(!saved||typeof saved!=='object'||Array.isArray(saved))return{};
 return Object.fromEntries(DATA.summary.flatMap((_,index)=>saved[index]===true?[[index,true]]:[]));
}
let topicsRead=loadReadTopics();
function updateReadingProgress(){
 const count=Object.keys(topicsRead).length;
 $('reading-progress').textContent=`${count} / ${DATA.summary.length} topics read${count===DATA.summary.length?' ? lecture complete':''}`;
}

// Detailed notes. All topic details start expanded for reading.
$('summary-list').innerHTML=DATA.summary.map((t,i)=>`<details class="summary-card${topicsRead[i]===true?' topic-read':''}" id="topic-${i+1}" open><summary id="topic-${i+1}-header" aria-controls="topic-${i+1}-content"><span class="number">${String(i+1).padStart(2,'0')}</span><span class="topic-heading"><h3 class="topic-title">${esc(t.title)}</h3><span class="source">Source slides ${esc(t.slides)}</span></span><label class="topic-read-control" data-topic-read-control><input type="checkbox" id="topic-read-${i+1}" data-topic-read="${i}" aria-label="Mark topic ${i+1} as read: ${esc(t.title)}" ${topicsRead[i]===true?'checked':''}/><span class="topic-read-label">Read</span></label><span class="down" aria-hidden="true"><svg class="lucide" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span></summary><div class="inner" id="topic-${i+1}-content" aria-labelledby="topic-${i+1}-header">${t.html}</div></details>`).join('');

$('summary-list').addEventListener('click',event=>{
 if(event.target.closest('[data-topic-read-control]'))event.stopPropagation();
});
$('summary-list').addEventListener('keydown',event=>{
 if(event.target.closest('[data-topic-read-control]'))event.stopPropagation();
});
$('summary-list').addEventListener('change',event=>{
 const checkbox=event.target.closest('[data-topic-read]');
 if(!checkbox)return;
 const index=Number(checkbox.dataset.topicRead);
 if(!Number.isInteger(index)||index<0||index>=DATA.summary.length)return;
 if(checkbox.checked)topicsRead[index]=true;else delete topicsRead[index];
 storage.set('topics_read_v1',topicsRead);
 $('topic-'+(index+1)).classList.toggle('topic-read',checkbox.checked);
 updateReadingProgress();
});
window.addEventListener('storage',event=>{
 if(event.key!==STORAGE_PREFIX+'topics_read_v1'&&event.key!==null)return;
 topicsRead=loadReadTopics();
 DATA.summary.forEach((_,index)=>{
  const checkbox=$('topic-read-'+(index+1));
  checkbox.checked=topicsRead[index]===true;
  $('topic-'+(index+1)).classList.toggle('topic-read',checkbox.checked);
 });
 updateReadingProgress();
});
updateReadingProgress();

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
// Interactive case explorer, feasibility checklist, and model answer for Lecture 5.
(() => {
  const root = document.getElementById('summary-list');
  const escapeText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const adoptionCases = [
      {
        badge: "CASE A • BLOCKCHAIN FOR SUPPLY-CHAIN TRACEABILITY (SLIDE 20)",
        bg: "#eeeeff",
        title: "Case A: Multi-Party Food & Product Provenance",
        problem: "Several independent organisations (producers, distributors, retailers) need to share product movement and provenance records.",
        rationale: "A shared, tamper-evident event history improves batch traceability and coordination without a single party unilaterally editing history.",
        feasibility: "Requires active partner participation, accurate data entry at the source, shared governance rules, commercial confidentiality controls, system integration, and justifiable cost.",
        alternatives: "Centralised shared database, commercial supply-chain visibility platform, or stricter data-entry validation controls.",
        decision: "Adopt/Pilot ONLY when multiple independent parties genuinely require shared tamper-evident provenance and agree on governance—otherwise use a conventional shared database."
      },
      {
        badge: "CASE B • IoT FOR UNIVERSITY FACILITY MONITORING (SLIDE 21)",
        bg: "#dcfce7",
        title: "Case B: University Building Energy & Maintenance Monitoring",
        problem: "A university building suffers from high electricity usage and equipment maintenance issues that are detected too late.",
        rationale: "Connected sensors reveal real-time usage patterns and trigger early alerts when temperature, power, or equipment conditions become abnormal.",
        feasibility: "Requires accurate sensor placement, reliable network connectivity, occupancy privacy safeguards, integration with maintenance workflows, ongoing sensor upkeep, and clear response ownership.",
        alternatives: "Scheduled manual inspections, basic utility smart meters, or targeted monitoring of high-load equipment only.",
        decision: "Begin with a small, targeted pilot in one high-consumption building rather than instrumenting every room on campus at once."
      },
      {
        badge: "CASE C • XR FOR TECHNICAL EQUIPMENT TRAINING (SLIDE 22)",
        bg: "#fef9c3",
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
        <span class="slide-ref" style="background:#ffffff; margin-bottom:0.55rem;">${escapeText(c.badge)}</span>
        <h4 style="font-size:1.05rem; margin-bottom:0.55rem;">${escapeText(c.title)}</h4>
        <div class="nb-grid-2" style="gap:0.65rem; margin-bottom:0.65rem;">
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>1. Problem:</strong> ${escapeText(c.problem)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>2. Rationale:</strong> ${escapeText(c.rationale)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>3. Feasibility Needs:</strong> ${escapeText(c.feasibility)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>4. Simpler Alternatives:</strong> ${escapeText(c.alternatives)}</div>
        </div>
        <div class="nb-example" style="margin-top:0; background:#ffffff; border-width:2px;">
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
