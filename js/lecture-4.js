// Lecture 4: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "Baseline vs. Target-State Architecture & Defining Success",
      "slides": "2–3, 5–9",
      "html": "<!-- Where We Stopped & Story Continues (Slides 2–3, 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Continuing the University Case: What Does “Better” Look Like? <span class=\"slide-ref\">slides 2–3, 5</span></div>\n          <div class=\"nb-callout coral\">\n            <strong>Core Rule <span class=\"slide-ref\">slide 5</span>:</strong> <strong>“Buy a new system” is a solution idea — NOT a target state.</strong> A target state describes the <strong>desired organisational capability</strong>, starting from measurable outcomes for students, staff, and management (e.g., <em>one reliable enrolment status across all systems</em>).\n          </div>\n\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #f4f4f5;\">\n              <h4><span>Baseline Architecture (Current State)</span> <span class=\"slide-ref\">slides 3, 6</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.45rem;\"><strong>How the organisation works today</strong> across Business, Data, Applications, and Technology:</p>\n              <ul class=\"nb-list\">\n                <li>Students face long queues and repeated data entry across portals.</li>\n                <li>Finance and Student Affairs hold conflicting student records.</li>\n                <li>No shared integration or authoritative status across systems.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Target-State Architecture (Future State)</span> <span class=\"slide-ref\">slides 6–7</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.45rem;\"><strong>The agreed future way of working</strong> responding to business goals and constraints:</p>\n              <ul class=\"nb-list\">\n                <li><strong>Business:</strong> Clear ownership and simpler registration steps.</li>\n                <li><strong>Data:</strong> Agreed definitions and authoritative student records.</li>\n                <li><strong>Applications:</strong> Portal and core systems exchange data reliably.</li>\n                <li><strong>Technology:</strong> Resilient, secure, scalable hosting &amp; connectivity.</li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>More Than a Diagram <span class=\"slide-ref\">slide 7</span>:</strong> People, policy, and operational support are integral parts of the target state.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Example Target-State View SVG (Slide 9) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Example Target-State View: Connected Registration <span class=\"slide-ref\">slide 9</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Target-State Operational Flow: Connected Course Registration (Slide 9)</span>\n              <span>End-to-End Capability</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 205\" role=\"img\" aria-label=\"Target-state connected registration diagram\">\n              <defs>\n                <marker id=\"arr-black\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Step 1 -->\n              <rect x=\"14\" y=\"18\" width=\"196\" height=\"110\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"28\" y=\"30\" width=\"28\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"42\" y=\"47\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">1</text>\n              <text x=\"64\" y=\"47\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">SINGLE PORTAL</text>\n              <text x=\"28\" y=\"74\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Student uses one</text>\n              <text x=\"28\" y=\"92\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">unified registration</text>\n              <text x=\"28\" y=\"110\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">portal.</text>\n\n              <line x1=\"210\" y1=\"73\" x2=\"238\" y2=\"73\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-black)\" />\n\n              <!-- Step 2 -->\n              <rect x=\"244\" y=\"18\" width=\"204\" height=\"110\" rx=\"10\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"258\" y=\"30\" width=\"28\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"272\" y=\"47\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">2</text>\n              <text x=\"294\" y=\"47\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">SOURCE OF TRUTH</text>\n              <text x=\"258\" y=\"74\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Portal checks</text>\n              <text x=\"258\" y=\"92\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">authoritative student</text>\n              <text x=\"258\" y=\"110\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">&amp; course data.</text>\n\n              <line x1=\"448\" y1=\"73\" x2=\"476\" y2=\"73\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-black)\" />\n\n              <!-- Step 3 -->\n              <rect x=\"482\" y=\"18\" width=\"204\" height=\"110\" rx=\"10\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"496\" y=\"30\" width=\"28\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"510\" y=\"47\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">3</text>\n              <text x=\"532\" y=\"47\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">CONTROLLED API</text>\n              <text x=\"496\" y=\"74\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Finance status is</text>\n              <text x=\"496\" y=\"92\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">exchanged through</text>\n              <text x=\"496\" y=\"110\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">approved integration.</text>\n\n              <line x1=\"686\" y1=\"73\" x2=\"714\" y2=\"73\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-black)\" />\n\n              <!-- Step 4 -->\n              <rect x=\"720\" y=\"18\" width=\"186\" height=\"110\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <rect x=\"734\" y=\"30\" width=\"28\" height=\"24\" rx=\"5\" fill=\"#000000\" />\n              <text x=\"748\" y=\"47\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">4</text>\n              <text x=\"770\" y=\"47\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">SHARED STATUS</text>\n              <text x=\"734\" y=\"74\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">One consistent status</text>\n              <text x=\"734\" y=\"92\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">is visible to all</text>\n              <text x=\"734\" y=\"110\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">authorised users.</text>\n\n              <!-- Operational Foundation Bar -->\n              <rect x=\"14\" y=\"144\" width=\"892\" height=\"44\" rx=\"8\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.2\" />\n              <text x=\"460\" y=\"171\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">\n                BUILT-IN FOUNDATION: Monitoring, access control, backup and support are designed in from day one\n              </text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Define Success Before Designing (Slide 8) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Define Success Before Designing (Baseline vs. Target Metrics) <span class=\"slide-ref\">slide 8</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Student</span></h4>\n              <p style=\"font-size: 0.86rem;\">Confirm course enrolment online without repeated counter visits.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Staff</span></h4>\n              <p style=\"font-size: 0.86rem;\">Fewer duplicate data entries and manual record corrections.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>Management</span></h4>\n              <p style=\"font-size: 0.86rem;\">Trustworthy, timely headcount and fee-clearance reporting.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>Service</span></h4>\n              <p style=\"font-size: 0.86rem;\">Reliable uptime and fast response during peak registration.</p>\n            </div>\n          </div>\n          <div class=\"nb-example\">\n            <strong>Measurement Principle <span class=\"slide-ref\">slide 8</span>:</strong> Set a measurable <strong>baseline</strong> (today’s metric) and a concrete <strong>target</strong> for each outcome before picking software tools.\n          </div>\n        </div>"
    },
    {
      "title": "Transition Architecture, Roadmaps & Dependency Sequencing",
      "slides": "10–13",
      "html": "<!-- Target State vs Transition Architecture SVG (Slide 10 & 11) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Target State vs. Transition Architecture &amp; What a Roadmap Is <span class=\"slide-ref\">slides 10–11</span></div>\n          <div class=\"nb-callout mint\">\n            <strong>Architecture Roadmap <span class=\"slide-ref\">slide 11</span>:</strong> A sequenced plan for moving from baseline to target. It shows <strong>initiatives, timing, dependencies, and milestones</strong>, connects technical work to business outcomes, and covers <strong>people, process, data, application, and technology changes</strong>.\n          </div>\n\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Incremental Transformation Path: Baseline → Transitions → Target State (Slide 10)</span>\n              <span>Deliver Value &amp; Reduce Risk</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 165\" role=\"img\" aria-label=\"Baseline to Transition to Target State path\">\n              <defs>\n                <marker id=\"arr-trans\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Baseline -->\n              <rect x=\"14\" y=\"20\" width=\"190\" height=\"86\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"109\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">BASELINE</text>\n              <text x=\"109\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#3f3f46\">Current siloed</text>\n              <text x=\"109\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#3f3f46\">processes &amp; systems</text>\n\n              <line x1=\"204\" y1=\"63\" x2=\"238\" y2=\"63\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-trans)\" />\n\n              <!-- Transition 1 -->\n              <rect x=\"244\" y=\"20\" width=\"200\" height=\"86\" rx=\"10\" fill=\"#fef9c3\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"344\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">TRANSITION 1</text>\n              <text x=\"344\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Safe intermediate stage</text>\n              <text x=\"344\" y=\"84\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#3f3f46\">(e.g., clean data + pilot)</text>\n\n              <line x1=\"444\" y1=\"63\" x2=\"478\" y2=\"63\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-trans)\" />\n\n              <!-- Transition 2 -->\n              <rect x=\"484\" y=\"20\" width=\"200\" height=\"86\" rx=\"10\" fill=\"#e0f2fe\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"584\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">TRANSITION 2</text>\n              <text x=\"584\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Wave rollout &amp; legacy</text>\n              <text x=\"584\" y=\"84\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#3f3f46\">coexistence while migrating</text>\n\n              <line x1=\"684\" y1=\"63\" x2=\"718\" y2=\"63\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-trans)\" />\n\n              <!-- Target State -->\n              <rect x=\"724\" y=\"20\" width=\"182\" height=\"86\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"815\" y=\"45\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">TARGET STATE</text>\n              <text x=\"815\" y=\"67\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Intended end point</text>\n              <text x=\"815\" y=\"84\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#065f46\">Full connected capability</text>\n\n              <!-- Bottom Rule -->\n              <rect x=\"14\" y=\"120\" width=\"892\" height=\"32\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"460\" y=\"140\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">\n                Why Transitions Matter: Not every legacy system can be replaced at once — each transition must deliver value and reduce risk.\n              </text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Build the Roadmap Around Dependencies (Slide 12) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Build the Roadmap Around Dependencies (Mandatory Order) <span class=\"slide-ref\">slide 12</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>01 // Ownership</span></h4>\n              <p style=\"font-size: 0.85rem;\">Agree <strong>data ownership</strong> before automating data exchange.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>02 // Clean Data</span></h4>\n              <p style=\"font-size: 0.85rem;\">Clean <strong>critical records</strong> before migration.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>03 // Integration</span></h4>\n              <p style=\"font-size: 0.85rem;\">Design <strong>integration</strong> before connecting production systems.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>04 // Resilience</span></h4>\n              <p style=\"font-size: 0.85rem;\">Test <strong>security, load and recovery</strong> before peak registration.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>05 // Readiness</span></h4>\n              <p style=\"font-size: 0.85rem;\">Prepare <strong>staff and student support</strong> before launch.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Sample Three-Stage Roadmap Interactive Stepper (Slide 13) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Sample Three-Stage Roadmap &amp; Stage Gate Checklist <span class=\"slide-ref\">slide 13</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.75rem;\">\n            Click each stage below to inspect its focus and the <strong>5 mandatory controls</strong> required at every stage (<code>Owner</code>, <code>Deliverable</code>, <code>Risk</code>, <code>Measure</code>, <code>Decision Gate</code>):\n          </p>\n\n          <div class=\"nb-stage-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"nb-stage-tab active\" data-roadmap-stage=\"0\">\n              <strong>Stage 1 · Stabilise</strong>\n              <span>Processes, ownership &amp; baseline</span>\n            </button>\n            <button type=\"button\" class=\"nb-stage-tab\" data-roadmap-stage=\"1\">\n              <strong>Stage 2 · Connect</strong>\n              <span>Build integrations &amp; faculty pilot</span>\n            </button>\n            <button type=\"button\" class=\"nb-stage-tab\" data-roadmap-stage=\"2\">\n              <strong>Stage 3 · Expand</strong>\n              <span>Wave rollout &amp; retire legacy steps</span>\n            </button>\n          </div>\n\n          <div class=\"nb-stage-panel\" id=\"roadmap-stage-panel\">\n            <!-- Populated by JS on load -->\n          </div>\n        </div>"
    },
    {
      "title": "Prioritising Initiatives (Value vs. Feasibility) & Change Readiness",
      "slides": "14–15",
      "html": "<!-- 2x2 Value vs Feasibility Matrix SVG (Slide 14) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Prioritise Initiatives: Value vs. Feasibility Matrix <span class=\"slide-ref\">slide 14</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Initiative Prioritisation Matrix (Slide 14)</span>\n              <span>Value × Feasibility + Risk, Urgency, Compliance &amp; Dependencies</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 275\" role=\"img\" aria-label=\"Value versus Feasibility 2x2 Prioritisation Matrix\">\n              <!-- Column Headers -->\n              <rect x=\"95\" y=\"10\" width=\"395\" height=\"28\" rx=\"6\" fill=\"#000000\" />\n              <text x=\"292\" y=\"29\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">DIFFICULT (HIGH COMPLEXITY / EFFORT)</text>\n\n              <rect x=\"505\" y=\"10\" width=\"400\" height=\"28\" rx=\"6\" fill=\"#000000\" />\n              <text x=\"705\" y=\"29\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#ffffff\">FEASIBLE (READY / LOWER EFFORT)</text>\n\n              <!-- Row Headers -->\n              <rect x=\"14\" y=\"46\" width=\"70\" height=\"84\" rx=\"6\" fill=\"#000000\" />\n              <text x=\"49\" y=\"84\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">HIGH</text>\n              <text x=\"49\" y=\"101\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#fde047\">VALUE</text>\n\n              <rect x=\"14\" y=\"138\" width=\"70\" height=\"84\" rx=\"6\" fill=\"#000000\" />\n              <text x=\"49\" y=\"176\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#ffffff\">LOW</text>\n              <text x=\"49\" y=\"193\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#d4d4d8\">VALUE</text>\n\n              <!-- Quadrant 1: High Value + Difficult -->\n              <rect x=\"95\" y=\"46\" width=\"395\" height=\"84\" rx=\"10\" fill=\"#fef9c3\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"115\" y=\"74\" font-size=\"15\" font-weight=\"700\" fill=\"#0f0f0f\">High Value + Difficult</text>\n              <text x=\"115\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#713f12\">→ Plan carefully, de-risk, or split into stages</text>\n              <text x=\"115\" y=\"116\" font-size=\"11.5\" fill=\"#3f3f46\">e.g., Full legacy Finance-to-Records real-time sync</text>\n\n              <!-- Quadrant 2: High Value + Feasible -->\n              <rect x=\"505\" y=\"46\" width=\"400\" height=\"84\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"525\" y=\"74\" font-size=\"15\" font-weight=\"700\" fill=\"#0f0f0f\">High Value + Feasible</text>\n              <text x=\"525\" y=\"96\" font-size=\"13\" font-weight=\"700\" fill=\"#065f46\">→ Prioritise early (immediate strategic wins)</text>\n              <text x=\"525\" y=\"116\" font-size=\"11.5\" fill=\"#0f0f0f\">e.g., Naming data owners &amp; standardising status codes</text>\n\n              <!-- Quadrant 3: Low Value + Difficult -->\n              <rect x=\"95\" y=\"138\" width=\"395\" height=\"84\" rx=\"10\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"115\" y=\"166\" font-size=\"15\" font-weight=\"700\" fill=\"#0f0f0f\">Low Value + Difficult</text>\n              <text x=\"115\" y=\"188\" font-size=\"13\" font-weight=\"700\" fill=\"#9f1239\">→ Challenge or defer</text>\n              <text x=\"115\" y=\"208\" font-size=\"11.5\" fill=\"#3f3f46\">e.g., Custom AI timetable recommender before core data works</text>\n\n              <!-- Quadrant 4: Low Value + Easy -->\n              <rect x=\"505\" y=\"138\" width=\"400\" height=\"84\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"525\" y=\"166\" font-size=\"15\" font-weight=\"700\" fill=\"#0f0f0f\">Low Value + Easy</text>\n              <text x=\"525\" y=\"188\" font-size=\"13\" font-weight=\"700\" fill=\"#3f3f46\">→ Do only if it supports a real need</text>\n              <text x=\"525\" y=\"208\" font-size=\"11.5\" fill=\"#3f3f46\">e.g., Minor UI theme tweaks on existing portal</text>\n\n              <!-- Bottom Bar -->\n              <rect x=\"14\" y=\"232\" width=\"891\" height=\"32\" rx=\"6\" fill=\"#e0f2fe\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"460\" y=\"252\" text-anchor=\"middle\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0f0f0f\">\n                BEYOND 2×2: Always factor in risk, urgency, regulatory compliance, and technical dependencies.\n              </text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Roadmap Risks & Change Readiness (Slide 15) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Roadmap Risks &amp; Change Readiness <span class=\"slide-ref\">slide 15</span></div>\n          <div class=\"nb-grid-2\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>Key Transformation Risks</span> <span class=\"slide-ref\">slide 15</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Data Risk:</strong> Data quality and ownership remain unclear across units.</li>\n                <li><strong>Legacy Constraint:</strong> Older systems have limited API or integration options.</li>\n                <li><strong>Operational Window:</strong> Peak registration weeks leave almost zero room for downtime or disruption.</li>\n                <li><strong>Adoption Risk:</strong> Staff need training; students need clear, early communication.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Change Readiness Safeguards</span> <span class=\"slide-ref\">slide 15</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Fallback Plans:</strong> Keep an approved manual/assisted backup workflow during cutover.</li>\n                <li><strong>Support Desk Readiness:</strong> Brief IT helpdesk and faculty admins on common errors before go-live.</li>\n                <li><strong>Rollback Plans:</strong> Define clear triggers and tested procedures to revert safely if critical integration fails.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Gap Analysis: Identifying Missing Capabilities & Dependencies",
      "slides": "16–18",
      "html": "<!-- What is Gap Analysis SVG (Slide 16) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Gap Analysis: What Is Missing? <span class=\"slide-ref\">slide 16</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Gap Analysis Method: Comparing Baseline vs. Target State (Slide 16)</span>\n              <span>Missing Capabilities, Not Just Missing Software</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 145\" role=\"img\" aria-label=\"Baseline versus Target State Gap Analysis\">\n              <rect x=\"14\" y=\"18\" width=\"230\" height=\"90\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"129\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">BASELINE</text>\n              <text x=\"129\" y=\"70\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"700\" fill=\"#3f3f46\">Where we are today</text>\n              <text x=\"129\" y=\"89\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#3f3f46\">(Current capabilities)</text>\n\n              <text x=\"272\" y=\"70\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#0f0f0f\">VS</text>\n\n              <rect x=\"300\" y=\"18\" width=\"230\" height=\"90\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"415\" y=\"46\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">TARGET STATE</text>\n              <text x=\"415\" y=\"70\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Where we need to be</text>\n              <text x=\"415\" y=\"89\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#065f46\">(Desired capabilities)</text>\n\n              <text x=\"558\" y=\"70\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"700\" fill=\"#0f0f0f\">=</text>\n\n              <rect x=\"586\" y=\"14\" width=\"320\" height=\"98\" rx=\"10\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"746\" y=\"39\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">GAP (ACTIONABLE WORK)</text>\n              <text x=\"746\" y=\"61\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Classify across 6 dimensions</text>\n              <text x=\"746\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Record evidence, impact &amp; priority</text>\n              <text x=\"746\" y=\"97\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">• Define concrete action &amp; dependency</text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Look Beyond Technology Gaps (Slide 18) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Look Beyond Technology Gaps (Five Core Gap Dimensions) <span class=\"slide-ref\">slides 16, 18</span></div>\n          <div class=\"nb-grid-5\" style=\"margin-bottom: 1rem;\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>1 // Business</span></h4>\n              <p style=\"font-size: 0.85rem;\">Unclear process ownership across faculties and admin units.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>2 // Data</span></h4>\n              <p style=\"font-size: 0.85rem;\">Duplicate or inconsistent student and enrolment records.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Application</span></h4>\n              <p style=\"font-size: 0.85rem;\">No reliable automated system-to-system exchange.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>4 // Technology</span></h4>\n              <p style=\"font-size: 0.85rem;\">Weak monitoring, peak load handling, or recovery capability.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>5 // Governance</span></h4>\n              <p style=\"font-size: 0.85rem;\">No formal approval route for policy or architecture exceptions (+ <em>people/training gaps</em>).</p>\n            </div>\n          </div>\n\n          <!-- Registration Case Simple Gap Table (Slide 17) -->\n          <div class=\"nb-subhead\">Registration Case: Worked Gap Table <span class=\"slide-ref\">slide 17</span></div>\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Dimension</th>\n                  <th>Registration Case Analysis</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Current (Baseline)</strong></td>\n                  <td>Each system (Admissions, Student Records, Finance, LMS) stores a different enrolment status.</td>\n                </tr>\n                <tr>\n                  <td><strong>Target State</strong></td>\n                  <td>One agreed enrolment status with a clearly defined authoritative source of truth.</td>\n                </tr>\n                <tr>\n                  <td><strong>Identified Gap</strong></td>\n                  <td>Shared data definition, named data ownership, and automated integration rules are missing.</td>\n                </tr>\n                <tr>\n                  <td><strong>Required Action</strong></td>\n                  <td>Agree status meaning and owner; design controlled API exchange; test reconciliation across systems.</td>\n                </tr>\n                <tr>\n                  <td><strong>Critical Dependency</strong></td>\n                  <td><strong>Resolve data definitions and ownership rules BEFORE building full automation.</strong></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "Architecture Governance: Decision Rights, Roles & Review Gate",
      "slides": "19–22",
      "html": "<!-- What Governance Is & Roles (Slides 19–20) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Architecture Governance: Who Decides? <span class=\"slide-ref\">slides 19–20</span></div>\n          <div class=\"nb-callout lavender\">\n            <strong>Purpose of Governance <span class=\"slide-ref\">slide 19</span>:</strong> Sets <strong>principles, decision rights, and review points</strong> to check proposed changes against agreed architecture—balancing business value, cost, risk, security, and standards, while recording exceptions and who accepted the risk. <strong>Governance should enable good decisions, not create bureaucracy.</strong>\n          </div>\n\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Business Owner</span></h4>\n              <p style=\"font-size: 0.85rem;\">Accountable for business outcomes and end-to-end process rules.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>Data Owner</span></h4>\n              <p style=\"font-size: 0.85rem;\">Defines data meaning, quality standards, and access rules.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>Architect</span></h4>\n              <p style=\"font-size: 0.85rem;\">Checks cross-layer alignment across Business, Data, App &amp; Tech.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>IT / Security</span></h4>\n              <p style=\"font-size: 0.85rem;\">Assesses integration design, operations, and security controls.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>Steering Group</span></h4>\n              <p style=\"font-size: 0.85rem;\">Resolves major cross-unit trade-offs and formal policy exceptions.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Principles & Architecture Review SVG (Slide 21) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Principles &amp; Architecture Review Flow <span class=\"slide-ref\">slide 21</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Governance Gate: From Principles to Review Criteria &amp; Decisions (Slide 21)</span>\n              <span>Approve • Revise • Documented Exception</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 205\" role=\"img\" aria-label=\"Principles and Architecture Review Decision Gate\">\n              <defs>\n                <marker id=\"arr-gov\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Column 1: Example Principles -->\n              <rect x=\"14\" y=\"16\" width=\"275\" height=\"172\" rx=\"10\" fill=\"#eeeeff\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"30\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">1. AGREED PRINCIPLES</text>\n\n              <rect x=\"28\" y=\"54\" width=\"247\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"38\" y=\"75\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Principle A:</text>\n              <text x=\"38\" y=\"94\" font-size=\"11.5\" fill=\"#3f3f46\">Authoritative student data has a named owner.</text>\n\n              <rect x=\"28\" y=\"118\" width=\"247\" height=\"54\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"38\" y=\"139\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Principle B:</text>\n              <text x=\"38\" y=\"158\" font-size=\"11.5\" fill=\"#3f3f46\">Integrate via approved, documented interfaces.</text>\n\n              <line x1=\"289\" y1=\"102\" x2=\"323\" y2=\"102\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-gov)\" />\n\n              <!-- Column 2: 6-Point Review Checklist -->\n              <rect x=\"329\" y=\"16\" width=\"280\" height=\"172\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"345\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">2. ARCHITECTURE REVIEW</text>\n\n              <rect x=\"345\" y=\"54\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"404\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Business Fit</text>\n\n              <rect x=\"475\" y=\"54\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"534\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Data</text>\n\n              <rect x=\"345\" y=\"96\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"404\" y=\"117\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Integration</text>\n\n              <rect x=\"475\" y=\"96\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"534\" y=\"117\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Security</text>\n\n              <rect x=\"345\" y=\"138\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"404\" y=\"159\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Operations</text>\n\n              <rect x=\"475\" y=\"138\" width=\"118\" height=\"34\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1.8\" />\n              <text x=\"534\" y=\"159\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">Cost</text>\n\n              <line x1=\"609\" y1=\"102\" x2=\"643\" y2=\"102\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-gov)\" />\n\n              <!-- Column 3: 3 Possible Decisions -->\n              <rect x=\"649\" y=\"16\" width=\"257\" height=\"172\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"665\" y=\"40\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">3. REVIEW DECISION</text>\n\n              <rect x=\"665\" y=\"52\" width=\"225\" height=\"36\" rx=\"7\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2\" />\n              <svg class=\"lucide lucide-check summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\" x=\"735\" y=\"59\"><path d=\"M20 6 9 17l-5-5\"/></svg><text x=\"786\" y=\"74\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"700\">Approve</text>\n\n              <rect x=\"665\" y=\"96\" width=\"225\" height=\"36\" rx=\"7\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"777\" y=\"118\" text-anchor=\"middle\" font-size=\"12.5\" font-weight=\"700\">↺ Revise &amp; Resubmit</text>\n\n              <rect x=\"665\" y=\"140\" width=\"225\" height=\"38\" rx=\"7\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2\" />\n              <text x=\"777\" y=\"163\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">! Documented Exception</text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- What Happens When Governance Is Absent (Slide 22) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Happens When Governance Is Absent? <span class=\"slide-ref\">slide 22</span></div>\n          <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n            <ul class=\"nb-list\">\n              <li><strong>Duplicate Purchasing:</strong> Similar software tools are purchased repeatedly across departments.</li>\n              <li><strong>Semantic Drift:</strong> Data definitions drift apart across units (e.g., conflicting student status codes).</li>\n              <li><strong>Accountability Gaps:</strong> Security and operational support responsibilities are unclear when incidents happen.</li>\n              <li><strong>Technical Debt:</strong> Short-term point-to-point hacks make future system changes significantly harder.</li>\n              <li><strong>Lost Rationale:</strong> Nobody can explain why a key architectural decision or exception was made.</li>\n            </ul>\n          </div>\n        </div>"
    },
    {
      "title": "TOGAF ADM in Practice: Iterative Path from Vision to Change",
      "slides": "23–25",
      "html": "<!-- TOGAF ADM Core Traits (Slide 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">TOGAF &amp; the Architecture Development Method (ADM) <span class=\"slide-ref\">slide 23</span></div>\n          <div class=\"nb-callout cyan\">\n            <strong>How TOGAF ADM Works <span class=\"slide-ref\">slide 23</span>:</strong> TOGAF is an EA standard/framework and <strong>ADM</strong> is its central development method. It organises architecture work from vision to governed change, is <strong>iterative</strong> (teams revisit phases as they learn), and must be <strong>adapted to scope, scale, risk, and organisational capacity</strong>.\n          </div>\n\n          <!-- Simplified ADM Journey SVG (Slide 24) -->\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Simplified TOGAF ADM Journey (Slide 24)</span>\n              <span>Iterative Loop Around Continuous Requirements Management</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 265\" role=\"img\" aria-label=\"Simplified TOGAF ADM Iterative Cycle\">\n              <defs>\n                <marker id=\"arr-adm\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Preliminary Bar at Top -->\n              <rect x=\"14\" y=\"12\" width=\"892\" height=\"36\" rx=\"8\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2.2\" />\n              <text x=\"460\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">\n                PRELIMINARY PHASE: Prepare &amp; agree how architecture work will be governed\n              </text>\n\n              <!-- 4 Core Phase Blocks -->\n              <!-- Phase A -->\n              <rect x=\"14\" y=\"62\" width=\"204\" height=\"118\" rx=\"10\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"116\" y=\"86\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">PHASE A</text>\n              <text x=\"116\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f0f0f\">Architecture Vision</text>\n              <text x=\"116\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">Define scope,</text>\n              <text x=\"116\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">stakeholders &amp;</text>\n              <text x=\"116\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">target outcomes</text>\n\n              <line x1=\"218\" y1=\"121\" x2=\"244\" y2=\"121\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-adm)\" />\n\n              <!-- Phases B-D -->\n              <rect x=\"250\" y=\"62\" width=\"208\" height=\"118\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"354\" y=\"86\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">PHASES B–D</text>\n              <text x=\"354\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f0f0f\">Core Architectures</text>\n              <text x=\"354\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">Define Business,</text>\n              <text x=\"354\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">Information Systems</text>\n              <text x=\"354\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">&amp; Tech architectures</text>\n\n              <line x1=\"458\" y1=\"121\" x2=\"484\" y2=\"121\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-adm)\" />\n\n              <!-- Phases E-F -->\n              <rect x=\"490\" y=\"62\" width=\"204\" height=\"118\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"592\" y=\"86\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">PHASES E–F</text>\n              <text x=\"592\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f0f0f\">Solutions &amp; Plan</text>\n              <text x=\"592\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">Identify viable</text>\n              <text x=\"592\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">solutions &amp; plan</text>\n              <text x=\"592\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">migration roadmap</text>\n\n              <line x1=\"694\" y1=\"121\" x2=\"720\" y2=\"121\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-adm)\" />\n\n              <!-- Phases G-H -->\n              <rect x=\"726\" y=\"62\" width=\"180\" height=\"118\" rx=\"10\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\" />\n              <text x=\"816\" y=\"86\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">PHASES G–H</text>\n              <text x=\"816\" y=\"106\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#0f0f0f\">Govern &amp; Change</text>\n              <text x=\"816\" y=\"130\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">Govern delivery</text>\n              <text x=\"816\" y=\"147\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">&amp; manage ongoing</text>\n              <text x=\"816\" y=\"164\" text-anchor=\"middle\" font-size=\"12\" fill=\"#0f0f0f\">change requests</text>\n\n              <!-- Continuous Requirements Management Anchor -->\n              <path d=\"M 816 180 L 816 232 L 116 232 L 116 186\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\" marker-end=\"url(#arr-adm)\" />\n              <rect x=\"240\" y=\"212\" width=\"440\" height=\"36\" rx=\"8\" fill=\"#fda4af\" stroke=\"#000000\" stroke-width=\"2.2\" />\n              <text x=\"460\" y=\"235\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">\n                REQUIREMENTS MANAGEMENT CONTINUES THROUGHOUT (ITERATIVE)\n              </text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Apply ADM to the University Case (Slide 25) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Applying Simplified ADM to the University Case (6 Steps) <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>1 // Vision</span></h4>\n              <p style=\"font-size: 0.87rem;\">Reduce student registration friction and improve record consistency across units.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>2 // Architecture</span></h4>\n              <p style=\"font-size: 0.87rem;\">Agree streamlined processes, named data ownership, API integrations, and platform capacity needs.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Solutions</span></h4>\n              <p style=\"font-size: 0.87rem;\">Compare portal/integration options and sequence a low-risk pilot with one faculty.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>4 // Migration</span></h4>\n              <p style=\"font-size: 0.87rem;\">Plan transition stages, data-cleaning dependencies, and peak-safe cutover windows.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>5 // Governance</span></h4>\n              <p style=\"font-size: 0.87rem;\">Review delivery milestones against approved architecture principles and security controls.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>6 // Change</span></h4>\n              <p style=\"font-size: 0.87rem;\">Assess new academic/policy requirements and update the architecture roadmap iteratively.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Architecture Work Products & Common Mistakes to Avoid",
      "slides": "26–27",
      "html": "<!-- Five Useful Architecture Work Products (Slide 26) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Useful Architecture Work Products <span class=\"slide-ref\">slide 26</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>1 // Vision</span></h4>\n              <p style=\"font-size: 0.85rem;\">Captures the business problem, scope, stakeholders, and measurable target outcomes.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>2 // Views</span></h4>\n              <p style=\"font-size: 0.85rem;\">Baseline and target-state views showing what exists today vs. what is intended.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>3 // Gap Analysis</span></h4>\n              <p style=\"font-size: 0.85rem;\">Identifies missing capabilities and required cross-layer changes.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>4 // Roadmap</span></h4>\n              <p style=\"font-size: 0.85rem;\">Sequences initiatives, dependency order, accountable owners, and milestones.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>5 // Governance Log</span></h4>\n              <p style=\"font-size: 0.85rem;\">Records architectural decisions, approved exceptions, risk owners, and follow-ups.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Six Common Mistakes to Avoid (Slide 27) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Common Mistakes to Avoid (Anti-Patterns vs. Good EA Practice) <span class=\"slide-ref\">slide 27</span></div>\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th><svg class=\"lucide lucide-x summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg> Common Mistake (Slide 27)</th>\n                  <th><svg class=\"lucide lucide-check summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M20 6 9 17l-5-5\"/></svg> Architecture-Led Alternative</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Jumping straight to buying a software product before agreeing on the target state.</td>\n                  <td>Define desired organisational capabilities and measurable outcomes first.</td>\n                </tr>\n                <tr>\n                  <td>Treating the target state as an unrealistic, perfect “wish list.”</td>\n                  <td>Ground the target state in real business priorities, budget, and operational constraints.</td>\n                </tr>\n                <tr>\n                  <td>Ignoring data ownership and business process change while focusing only on UI/code.</td>\n                  <td>Assign named data owners and simplify business rules before automating.</td>\n                </tr>\n                <tr>\n                  <td>Making a roadmap with no dependencies or accountable owners.</td>\n                  <td>Sequence work around dependencies and assign an owner, deliverable, measure, and gate to every stage.</td>\n                </tr>\n                <tr>\n                  <td>Treating governance as a one-time final sign-off gate only.</td>\n                  <td>Use lightweight, continuous review points throughout design, pilot, and rollout.</td>\n                </tr>\n                <tr>\n                  <td>Following TOGAF or any framework mechanically without adapting it.</td>\n                  <td>Tailor the depth and pace of ADM phases to project scope, risk, and team capacity.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "Student Challenge Worked Answer, Key Takeaways & Exam Formulas",
      "slides": "28–30",
      "html": "<!-- Five Key Takeaways (Slide 30) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Key Takeaways <span class=\"slide-ref\">slide 30</span></div>\n          <div class=\"nb-grid-5\">\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>01 // Target State</span></h4>\n              <p style=\"font-size: 0.85rem;\">Defines the intended future capability — not just a new software system.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>02 // Roadmaps</span></h4>\n              <p style=\"font-size: 0.85rem;\">Sequence change around business value, dependencies, and risk.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>03 // Gap Analysis</span></h4>\n              <p style=\"font-size: 0.85rem;\">Turns baseline-to-target differences into structured, actionable work.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>04 // Governance</span></h4>\n              <p style=\"font-size: 0.85rem;\">Clarifies principles, decision rights, review criteria, and exceptions.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>05 // TOGAF ADM</span></h4>\n              <p style=\"font-size: 0.85rem;\">Offers a structured yet adaptable path from vision to governed change.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive Student Challenge Drawer (Slides 28–29) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Student Challenge: Advise the University <span class=\"slide-ref\">slides 28–29</span> <span class=\"nb-tag yellow\">5-Task Case Exam Practice</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <p style=\"font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem;\">Your Advisory Brief (Slide 28):</p>\n            <ul class=\"nb-list\" style=\"margin-bottom: 0.85rem;\">\n              <li><strong>Task 1:</strong> Propose a target state across all four EA layers.</li>\n              <li><strong>Task 2:</strong> Identify three important gaps.</li>\n              <li><strong>Task 3:</strong> Build a three-stage roadmap with dependencies.</li>\n              <li><strong>Task 4:</strong> Name two governance decisions and their owners.</li>\n              <li><strong>Task 5:</strong> Show how simplified TOGAF ADM supports your approach.</li>\n            </ul>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-challenge-btn\" data-challenge-answer aria-expanded=\"false\" aria-controls=\"challenge-answer-drawer\">Reveal Model 5-Part Advisory Solution (Slide 29)</button>\n\n            <div class=\"nb-answer-drawer\" id=\"challenge-answer-drawer\">\n              <span class=\"nb-answer-title\">Complete Model Answer • University Transformation Plan</span>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>1. Target State (All 4 Layers):</strong> <em>Business:</em> Clear registration rules &amp; single-step student flow; <em>Data:</em> Governed, authoritative student &amp; course records; <em>Applications:</em> One unified portal connected via approved APIs to Student Records &amp; Finance; <em>Technology:</em> Monitored, secure, peak-scalable hosting.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>2. Three Important Gaps:</strong> (a) <em>Data Gap:</em> Unclear data owner and inconsistent enrolment status across Finance and Student Affairs; (b) <em>Application Gap:</em> Missing automated integration between portal, records, and finance; (c) <em>Technology/Ops Gap:</em> Untested peak-load performance and recovery procedures.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>3. Three-Stage Roadmap with Dependencies:</strong> <em>Stage 1 (Stabilise):</em> Agree data ownership, status definitions, and baseline metrics → <em>Stage 2 (Connect):</em> Clean records, build APIs, and pilot with one faculty → <em>Stage 3 (Expand):</em> Roll out in waves, monitor success metrics, and retire redundant manual steps.</p>\n              <p style=\"margin-bottom: 0.45rem;\"><strong>4. Two Governance Decisions &amp; Owners:</strong> (a) Approve authoritative enrolment data definitions and access rules (<em>Owner: Data Owner + Business Owner</em>); (b) Approve integration interface standards and security/load test sign-off before cutover (<em>Owner: Architect + IT/Security Teams, escalated to Steering Group if exceptions arise</em>).</p>\n              <p style=\"margin-bottom: 0;\"><strong>5. How Simplified TOGAF ADM Supports This:</strong> <em>Phase A (Vision)</em> aligns stakeholders on reducing registration friction and sets success measures (completion time, error rate, failed transactions, support volume); <em>Phases B–D</em> define the 4-layer baseline/target views and gaps; <em>Phases E–F</em> sequence the 3-stage pilot-to-rollout roadmap; <em>Phases G–H</em> enforce architecture review gates and manage ongoing changes iteratively.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Structured Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Formula A // 4-Mark Concept Comparisons</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Distinguish baseline vs target / target vs transition / gap types...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Define first concept clearly + anchor in the university registration example.</li>\n                <li><strong>Point 2 (2 marks):</strong> Define second concept + explain <em>why</em> the distinction prevents transformation failure.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Formula B // 6–10 Mark Architecture-Led Change Cases</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Propose a transformation plan / roadmap / governance setup...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Target &amp; Metrics:</strong> State desired capability (not just software) + baseline/target KPIs.</li>\n                <li><strong>2. Multi-Layer Gaps:</strong> Identify non-tech gaps (Business/Data/Governance) alongside App/Tech.</li>\n                <li><strong>3. Dependency Roadmap:</strong> Sequence <code>Stabilise → Connect → Expand</code> with owners &amp; stage gates.</li>\n                <li><strong>4. Governance &amp; ADM:</strong> Name decision rights/review checks and tie back to iterative ADM phases.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    }
  ],
  "essays": [
    {
      "topic": "Targets",
      "kind": "Explain",
      "marks": 8,
      "slides": "5–7",
      "question": "Differentiate baseline architecture and target-state architecture.",
      "points": [
        "Baseline=current operation",
        "Target=agreed future",
        "Both cover four layers",
        "Business constraints"
      ],
      "answer": "Baseline architecture describes how the organisation currently operates, including its business processes, data, applications and technology. It provides evidence about existing problems and dependencies. Target-state architecture describes the agreed future way of working that can deliver desired business outcomes within practical constraints. For a university, the baseline may involve conflicting enrolment statuses across separate systems, while the target has an agreed source of truth and reliable exchange. Both views cover the same four architectural layers so they can be compared. Defining the target does not mean choosing a new product immediately; it means describing the capability the university needs to achieve."
    },
    {
      "topic": "Targets",
      "kind": "Analyse",
      "marks": 10,
      "slides": "5–9",
      "question": "Explain why “buy a new registration system” is not a valid target-state description by itself.",
      "points": [
        "Solution versus capability",
        "Stakeholder outcomes",
        "Four EA layers",
        "Measures"
      ],
      "answer": "Buying a system describes a potential solution, not the future capability the university wants. A new portal could be purchased while student records, finance status and reporting remain inconsistent. A useful target should first specify outcomes, such as fewer repeated visits, clear enrolment information, less manual correction and reliable access during peak demand. It should then describe the necessary business ownership, data definitions, application integration and technology foundations. Only after the future state is understood should the university compare technology options. This prevents procurement from replacing architectural analysis and provides measurable criteria for deciding whether the investment delivered value."
    },
    {
      "topic": "Targets",
      "kind": "Apply",
      "marks": 12,
      "slides": "7–9",
      "question": "Propose a target state for online university registration using the four EA layers.",
      "points": [
        "Business ownership/process",
        "Data authoritative source",
        "Applications/interface",
        "Technology qualities",
        "Student outcome"
      ],
      "answer": "At the business layer, the university should establish clear registration responsibilities and a simpler process for students and staff. At the data layer, it should agree on definitions and trusted sources for student, course and enrolment status. The application layer should allow the portal and core systems, including student records and finance, to exchange approved information so authorised users see one reliable status. The technology layer should provide monitoring, secure access, backup and enough capacity for busy registration periods. The resulting target state is not simply a new website; it is a coherent student service that reduces confusion and manual reconciliation. Success can be evaluated through completion time, errors and support demand."
    },
    {
      "topic": "Targets",
      "kind": "Explain",
      "marks": 10,
      "slides": "8–9",
      "question": "Explain why success measures should be defined before target-state design.",
      "points": [
        "Stakeholder outcomes",
        "Baseline/target",
        "Guides architecture",
        "Examples and feedback"
      ],
      "answer": "Success measures clarify what the organisation intends to improve and help prevent technology choices from becoming ends in themselves. Before designing registration, the university should record current student waiting or completion time, staff correction workload, reliability of reporting and failed transactions during peaks. It can then set realistic targets for improvement. The architecture can be designed around those outcomes, including better data sharing and infrastructure capacity. After rollout, the same definitions and measures can be used to evaluate whether the new service created the expected value. Without early measurement, a visually improved portal could be declared successful even when organisational problems remain unchanged."
    },
    {
      "topic": "Roadmaps",
      "kind": "Define",
      "marks": 8,
      "slides": "11",
      "question": "Define an architecture roadmap and describe its essential components.",
      "points": [
        "Sequence baseline to target",
        "Initiatives/timing/milestones",
        "Dependencies/owners",
        "Business and technical change"
      ],
      "answer": "An architecture roadmap is a sequenced plan that moves an organisation from its baseline state toward an agreed target state. It identifies the initiatives needed, their order, timing, dependencies and milestones, including responsibility for delivery. A complete roadmap covers business processes and people as well as data, applications and technology. For example, a registration roadmap might begin by agreeing data ownership, continue with integration testing and finish with a phased launch and student support. Its value is that it connects technical tasks to organisational outcomes and reduces avoidable risk from implementing dependent changes in the wrong order."
    },
    {
      "topic": "Roadmaps",
      "kind": "Explain",
      "marks": 10,
      "slides": "12",
      "question": "Explain five dependencies that should influence the university registration roadmap.",
      "points": [
        "Data ownership before exchange",
        "Clean records before migration",
        "Design integration before production",
        "Test before peak demand",
        "Support before launch"
      ],
      "answer": "The university should first agree on who owns important data, because automated exchange cannot resolve conflicting definitions. It should then clean critical student records before migration to avoid transferring known errors into the new service. Third, the team must design the integration between registration, finance and student records before connecting production systems. Fourth, it should test security, peak load and recovery before the busiest registration period, when a failure would affect many students. Finally, staff and student support must be prepared before launch so users can complete tasks and resolve problems. These dependencies explain why a roadmap must be sequenced rather than a list of unrelated deliverables."
    },
    {
      "topic": "Roadmaps",
      "kind": "Design",
      "marks": 12,
      "slides": "11–12, 29",
      "question": "Create a justified three-stage roadmap for improving university course registration.",
      "points": [
        "Stage 1 baseline/rules",
        "Stage 2 pilot/integration",
        "Stage 3 phased launch",
        "Dependencies",
        "Owners and success"
      ],
      "answer": "In Stage 1, the university should document the current registration problems, identify business and data owners, agree data definitions and collect performance baselines. This prepares a reliable foundation for technical work. In Stage 2, the team should clean critical records, design approved interfaces and run a bounded integration pilot between the portal, student records and finance. This allows important problems to be detected before wide deployment. In Stage 3, it should test load, security and recovery, train staff, prepare student support and roll out in phases. Each stage should have an accountable owner and milestone. The order is justified because data rules and tested interfaces are prerequisites to dependable full automation."
    },
    {
      "topic": "Roadmaps",
      "kind": "Analyse",
      "marks": 10,
      "slides": "11–12, 27",
      "question": "A roadmap schedules full integration before data ownership is agreed. Analyse why this is risky.",
      "points": [
        "Wrong dependency order",
        "Inconsistent definitions",
        "Rework and errors",
        "Recommended rescheduling"
      ],
      "answer": "The roadmap violates an important dependency: the organisation needs an agreed meaning and owner for shared enrolment status before it can automate exchange reliably. If teams connect systems that interpret the same field differently, they may distribute incorrect information more quickly. Late discovery of the inconsistency can cause interface redesign, rework, delayed delivery and loss of trust in reports. I would revise the roadmap so the process and data owners first agree definitions, authoritative sources and reconciliation rules. Integration design and pilot testing should follow, with production rollout only after the exchanged information is proven consistent. This shows why sequencing is an architecture decision, not merely a scheduling preference."
    },
    {
      "topic": "Roadmaps",
      "kind": "Compare",
      "marks": 8,
      "slides": "6, 11",
      "question": "Differentiate target-state architecture from an architecture roadmap.",
      "points": [
        "Target=destination",
        "Roadmap=journey",
        "Dependencies",
        "Example"
      ],
      "answer": "Target-state architecture describes how the organisation intends to work in the future. For registration, it may specify a single trustworthy enrolment status, consistent data meanings, integrated applications and reliable infrastructure. An architecture roadmap describes how to reach that target through timed and sequenced initiatives. It might first clarify data ownership, then test integration and finally roll out the connected service. The target provides a common destination against which options are judged; the roadmap provides an executable route that recognises dependencies, responsibilities and risk. The two are related but cannot replace one another."
    },
    {
      "topic": "Gaps",
      "kind": "Explain",
      "marks": 10,
      "slides": "16–18",
      "question": "Define gap analysis and explain how to make it actionable.",
      "points": [
        "Current/target comparison",
        "Missing capabilities",
        "Categories",
        "Evidence/priority/action",
        "Dependency"
      ],
      "answer": "Gap analysis compares the baseline architecture with the target state to identify missing or inadequate capabilities. The lecture advises examining business, data, application, technology, people and governance gaps rather than listing software products alone. Each gap should be supported by evidence and described in terms of its impact and priority. An action is then proposed, with any dependencies needed before implementation. For example, if two systems show different enrolment statuses, the gap concerns the shared definition and ownership of the status as well as integration rules. Agreeing those rules becomes an actionable prerequisite to full automation."
    },
    {
      "topic": "Gaps",
      "kind": "Apply",
      "marks": 12,
      "slides": "17",
      "question": "Reconstruct the lecture’s enrolment-status gap analysis from current state to action and dependency.",
      "points": [
        "Current inconsistent status",
        "Target source of truth",
        "Missing definitions/owners/rules",
        "Actions",
        "Dependency order"
      ],
      "answer": "In the current state, the university’s separate systems store different enrolment statuses, so staff and students cannot always rely on a consistent answer. The target state is one agreed status with a defined source of truth. The gaps include missing status definitions, unclear data ownership and absent integration rules. The university should therefore agree what each status means, name the authoritative owner, design the required exchange and test how records are reconciled across systems. The critical dependency is to settle the data rules before enabling full automation. Otherwise, connecting the systems may only make inconsistent information spread faster."
    },
    {
      "topic": "Gaps",
      "kind": "Compare",
      "marks": 10,
      "slides": "16–18",
      "question": "Give one concrete example of each of five non-identical architecture gap categories.",
      "points": [
        "Business",
        "Data",
        "Application",
        "Technology",
        "Governance"
      ],
      "answer": "A business gap occurs when nobody clearly owns the process for handling registration exceptions. A data gap exists when student status is duplicated or has different meanings in separate systems. An application gap occurs when the registration portal cannot exchange updates reliably with finance. A technology gap arises when monitoring or recovery capabilities are too weak for a critical service. A governance gap exists when the organisation has no route for reviewing or approving architecture exceptions. Each category needs a different type of action. Buying a new portal alone will not resolve missing process ownership or absent governance rules, which explains why gap analysis must look beyond software components."
    },
    {
      "topic": "Gaps",
      "kind": "Analyse",
      "marks": 10,
      "slides": "16–18",
      "question": "Explain why gap analysis should include people and governance as well as technical gaps.",
      "points": [
        "Adoption requires people",
        "Process ownership",
        "Decision rights",
        "Technical-only fixes inadequate"
      ],
      "answer": "Technology is implemented within an organisation, so its success depends on people making decisions and operating changed processes. Even after a registration portal is integrated, staff may lack the training or authority to resolve an inconsistent enrolment status. Similarly, without governance, teams may use unapproved interfaces or ignore agreed data standards. Gap analysis should therefore identify missing skills, responsibilities, approval routes and support arrangements alongside data, application and infrastructure gaps. This creates an actionable change plan that addresses the whole service, not merely its software installation. A technically correct platform can still fail organisationally if these non-technical capabilities are missing."
    },
    {
      "topic": "Gaps",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "16–18",
      "question": "An architecture team reports only “we need a new database” as its gap analysis. Evaluate the adequacy.",
      "points": [
        "Product is not a gap definition",
        "Need evidence of current/target",
        "Ownership/definition",
        "Alternative actions",
        "Rewrite a proper gap"
      ],
      "answer": "The analysis is inadequate because “need a new database” is already a proposed solution and does not explain what the organisation cannot do. A useful gap analysis should compare the baseline and target and identify the missing capability, supported by evidence. For example, the actual gap may be inconsistent student-status definitions, poor data ownership or unreliable exchange between applications. A database replacement may not fix any of those issues. I would first describe the observed inconsistency, its impact and the agreed target, then compare actions such as better data definitions, reconciliation controls and approved integration. Only if the evidence shows the database itself is the constraint would replacement become a justified roadmap initiative."
    },
    {
      "topic": "Governance",
      "kind": "Explain",
      "marks": 10,
      "slides": "19–21",
      "question": "Explain architecture governance and why decision rights matter.",
      "points": [
        "Principles",
        "Decision rights",
        "Architecture review",
        "Risk/exception records",
        "Purpose"
      ],
      "answer": "Architecture governance is the arrangement of principles, decision rights and review points used to guide important architectural changes. It ensures proposals are checked against business value, cost, security, standards and the agreed architecture. Decision rights clarify who is authorised to approve a data definition, integration design or risk exception. This reduces confusion and prevents teams from silently making incompatible local decisions. An exception can be accepted when properly justified, but it should be documented together with the responsible person and associated risk. The lecture stresses that governance should enable good decisions rather than create paperwork for its own sake."
    },
    {
      "topic": "Governance",
      "kind": "Apply",
      "marks": 8,
      "slides": "21",
      "question": "Describe two example architecture principles for a university and their practical effects.",
      "points": [
        "Named data owner",
        "Approved documented interfaces",
        "Consistent decisions",
        "Review implications"
      ],
      "answer": "One principle is that every authoritative student-data item has a named owner. This means the university must identify who defines, validates and approves changes to information such as enrolment status. A second principle is that systems should integrate through approved and documented interfaces. This reduces undocumented connections and helps teams understand how information flows between student records and finance. Together the principles establish expectations before different departments develop solutions. Reviewers can use them to decide whether a proposal should be approved, revised or handled through a documented exception."
    },
    {
      "topic": "Governance",
      "kind": "Analyse",
      "marks": 10,
      "slides": "19–21",
      "question": "A faculty wants to bypass an approved interface for a quick deadline. Analyse the governance decision.",
      "points": [
        "Business benefit",
        "Integration/security risk",
        "Principles",
        "Decision options",
        "Accountability"
      ],
      "answer": "The faculty may have a legitimate need to deliver quickly, but bypassing an approved interface can create security, maintenance and data-consistency risks. Architecture governance should review the proposal using business fit, data, integration, security, operations and cost. If it can meet the need using the approved approach, the team should revise its plan accordingly. If a temporary alternative is justified, the appropriate authority may approve a documented exception, record who accepts the risk and define any follow-up conditions. This protects accountability while allowing proportionate flexibility. Silently ignoring the principle is not equivalent to a governed exception."
    },
    {
      "topic": "Governance",
      "kind": "Compare",
      "marks": 10,
      "slides": "19–21",
      "question": "Distinguish approval, revision and a documented architecture exception.",
      "points": [
        "Approval",
        "Revision",
        "Exception",
        "Risk owner",
        "Practical scenario"
      ],
      "answer": "Approval means the architecture proposal satisfies the agreed principles and review requirements sufficiently to proceed. Revision means the proposal has important deficiencies that must be corrected, for example missing evidence of secure integration. A documented exception permits a justified departure from a principle, provided an authorised decision-maker accepts and records the resulting risk and follow-up requirements. For a registration platform, a standard interface design could be approved, while an insecure direct database connection might require revision. A temporary deviation might be considered only with clear justification and accountability. These alternatives show that governance is a decision process, not merely a yes-or-no form."
    },
    {
      "topic": "Governance",
      "kind": "Design",
      "marks": 12,
      "slides": "19–21, 28–29",
      "question": "Propose two architecture governance decisions and appropriate owners for the registration project.",
      "points": [
        "Data definition approval",
        "Interface/security design approval",
        "Proposed owner roles",
        "Decision criteria and records"
      ],
      "answer": "The first decision is to approve the definition and authoritative source of enrolment status. A designated university data owner, working with the responsible student administration and finance process owners, should be accountable for agreeing what the status means and who may update it. The second decision is to approve the interface and security design connecting the portal, student records and finance. An appointed architecture or integration authority, supported by security specialists, should review the design for compatibility, access controls and operational reliability. Both decisions should be recorded with responsible owners and any conditions or exceptions. These are illustrative role assignments applying the lecture’s governance requirements rather than official university posts."
    },
    {
      "topic": "ADM",
      "kind": "Define",
      "marks": 8,
      "slides": "23",
      "question": "Explain TOGAF ADM’s role in architecture work and the meaning of iteration.",
      "points": [
        "TOGAF framework",
        "ADM central method",
        "Vision to change",
        "Revisiting phases",
        "Tailoring"
      ],
      "answer": "TOGAF is an Enterprise Architecture framework or standard, and ADM is its central method for organising architecture development. It helps teams move from a vision through architecture decisions and implementation toward ongoing change. ADM is iterative: work may be revisited when new requirements, constraints or evidence appear. For example, an integration pilot may reveal that student-status definitions are unclear, requiring the team to reconsider data architecture before deployment. The lecture also advises tailoring the method to project scope, risk, scale and organisational capacity. The simplified steps taught in the lecture are a practical teaching view rather than a substitute for every formal ADM detail."
    },
    {
      "topic": "ADM",
      "kind": "Explain",
      "marks": 12,
      "slides": "25",
      "question": "Explain the six simplified TOGAF ADM activities using the university registration case.",
      "points": [
        "Vision",
        "Architecture",
        "Solutions",
        "Migration",
        "Governance",
        "Change"
      ],
      "answer": "First, Vision defines the intended value, such as reducing registration friction and improving record consistency. Second, Architecture agrees the business process, data ownership, required interfaces and platform capabilities. Third, Solutions compares possible approaches and plans a pilot. Fourth, Migration sequences dependencies, rollout stages and cutover. Fifth, Governance checks whether delivery follows approved principles and designs, recording decisions or exceptions where needed. Sixth, Change assesses new requirements or findings and updates the roadmap. These activities form an iterative approach: if a pilot reveals new problems, the team can revisit earlier architectural decisions. Thus, ADM provides a structured but adaptable route from outcomes to governed change."
    },
    {
      "topic": "ADM",
      "kind": "Analyse",
      "marks": 10,
      "slides": "23–25",
      "question": "Explain why a team should not treat simplified TOGAF ADM as a rigid one-way checklist.",
      "points": [
        "Iterative lifecycle",
        "Feedback from pilots",
        "Tailoring to scope",
        "Revised designs/roadmap",
        "Value"
      ],
      "answer": "The lecture describes ADM as iterative and adaptable, not a fixed sequence that can never be revisited. In the university case, a pilot might reveal that the finance system uses a different meaning for payment confirmation. Continuing straight to rollout would create predictable inconsistency. Instead, the team should revisit data definitions and integration design, then adjust the migration plan. The method should also be tailored to the project’s size, risks and available capacity, avoiding excessive process for a small, bounded change. The purpose is to improve architectural decisions while responding to evidence, not to satisfy a checklist regardless of what the organisation learns."
    },
    {
      "topic": "ADM",
      "kind": "Apply",
      "marks": 10,
      "slides": "23–26",
      "question": "Show how a gap discovered during a pilot can change the ADM-based roadmap.",
      "points": [
        "Pilot observation",
        "Return to architecture",
        "Revise solution",
        "Update migration",
        "Governance review"
      ],
      "answer": "Suppose an integration pilot reveals that a payment status reaches the portal several hours after finance confirms it. The team should first record the issue and assess its effect on the target outcome of reliable enrolment status. It would then revisit the data and application architecture to clarify the source, meaning and timing of updates. The solution design may need an improved interface or reconciliation mechanism. Migration should be rescheduled so the issue is tested before wider rollout. Governance should review and approve the changed approach. This demonstrates the iterative relationship between architecture, solutions, deployment plans and ongoing change."
    },
    {
      "topic": "ADM",
      "kind": "Compare",
      "marks": 8,
      "slides": "23–26",
      "question": "Explain how an architecture vision and a governance record support different stages of architecture-led change.",
      "points": [
        "Vision problem/goal/stakeholders",
        "Governance decisions/exceptions",
        "Different functions",
        "Connection through implementation"
      ],
      "answer": "An architecture vision describes the problem, scope, stakeholders and intended organisational outcomes at the beginning of the work. In registration, it might establish the goal of reliable status information and fewer manual corrections. A governance record captures important decisions, approved approaches, justified exceptions and follow-up during development and rollout. The vision helps everyone understand why the change is needed; the governance record shows how decisions were controlled as that vision was implemented. They are complementary. Without a vision, decisions can lack direction; without governance, the chosen direction can be undermined by inconsistent local changes."
    },
    {
      "topic": "Cases",
      "kind": "Analyse",
      "marks": 12,
      "slides": "5–29",
      "question": "Using the running case, propose a target, three gaps, and a three-stage roadmap.",
      "points": [
        "Four-layer target",
        "Three distinct gaps",
        "Three stages",
        "Dependencies",
        "Governance/metrics"
      ],
      "answer": "The target state is a student-centred registration service with clear business ownership, trusted student data, approved links between the portal and core systems, and reliable secure infrastructure. Three gaps are unclear ownership of enrolment status, inconsistent records across departments and untested integration or recovery behaviour. Stage 1 should clarify processes, data meanings and current performance. Stage 2 should clean important records, design integration and pilot the connection. Stage 3 should test security, load and recovery, train staff, provide student support and roll out in phases. The order is essential because agreed data rules precede dependable automation. Governance should approve definitions and interface designs, while success should be measured through errors, completion time and failed transactions."
    },
    {
      "topic": "Cases",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "6–29",
      "question": "Evaluate a university roadmap that has milestones but no owners, dependencies or success measures.",
      "points": [
        "Incomplete roadmap",
        "Unclear accountability",
        "Wrong order risk",
        "No outcome evidence",
        "Improved roadmap"
      ],
      "answer": "The roadmap is incomplete because milestones alone do not show who is responsible, what must happen first or how success will be judged. If data migration is scheduled before authoritative data definitions are agreed, the university may transfer inconsistent records into the new service. Without owners, teams may delay decisions or assume another department is responsible. Without success measures, the project may claim success simply because the portal launches, even if students still face delays. I would add accountable owners, dependency links, stage acceptance checks and a baseline and target for service outcomes. This turns a calendar of tasks into a credible architecture roadmap."
    },
    {
      "topic": "Cases",
      "kind": "Discuss",
      "marks": 12,
      "slides": "5–30",
      "question": "Discuss how baseline/target views, gap analysis, roadmap and governance work together.",
      "points": [
        "Baseline",
        "Target",
        "Gaps",
        "Roadmap",
        "Governance and feedback"
      ],
      "answer": "Baseline architecture describes current processes, information, applications and infrastructure, establishing the starting point. Target-state architecture describes the agreed future capability based on organisational goals. Gap analysis then identifies the differences and converts them into actions, including missing data ownership, integration and recovery. The roadmap sequences these actions according to value, dependencies and risk, assigning milestones and owners. Governance checks important proposals against principles, reviews exceptions and records accountability throughout implementation. Together these work products create a traceable change story. If a pilot reveals new evidence, the target, gaps or roadmap can be revisited through the iterative architecture process."
    },
    {
      "topic": "Cases",
      "kind": "Apply",
      "marks": 10,
      "slides": "8, 17, 29",
      "question": "Propose four practical performance indicators for the university registration improvement.",
      "points": [
        "Completion time",
        "Error/duplicate rate",
        "Failed transaction rate",
        "Support volume",
        "Baseline/target"
      ],
      "answer": "Registration completion time measures how efficiently students can finish the process. The error or duplicate-entry rate measures whether data definitions and integration have improved information consistency. Failed transactions indicate how reliably the portal and related systems operate, especially during peak demand. The volume of helpdesk or student-support requests can show whether the service is easier to use and manage. The university should record a baseline before the change, agree realistic targets and use the same definitions during evaluation. These indicators connect the architecture work to outcomes that matter for students, staff and management instead of measuring only whether software was installed."
    },
    {
      "topic": "Cases",
      "kind": "Analyse",
      "marks": 10,
      "slides": "7–8, 18, 27",
      "question": "Explain why people, policy and support must be part of a target-state architecture.",
      "points": [
        "Technology alone insufficient",
        "Role clarity",
        "Policy/process",
        "Training/support",
        "Sustainable adoption"
      ],
      "answer": "A target state describes how the organisation is intended to operate, not just what software it will own. Registration policies may need clarification so students receive consistent decisions, while process ownership determines who handles disputes or unusual situations. Staff need training to operate new interfaces and reconcile exceptional records, and students need support during the transition. Without these changes, a technically integrated portal may still create confusion or produce inconsistent service. Therefore, people, policy and support should be designed alongside the four architectural layers. This reflects the lecture’s warning not to ignore business process change when planning a new target."
    },
    {
      "topic": "Recap",
      "kind": "Explain",
      "marks": 10,
      "slides": "27, 30",
      "question": "Explain the five official takeaways of the lecture and how they relate to one another.",
      "points": [
        "Target future",
        "Roadmap sequencing",
        "Gap analysis actions",
        "Governance choices",
        "ADM structured adaptable"
      ],
      "answer": "The first takeaway is that the target state describes a desired organisational future rather than just a new system. Second, a roadmap sequences the transition according to value, dependencies and risk. Third, gap analysis compares the current and desired states and identifies the actions required to bridge them. Fourth, governance establishes principles, decision rights and documented exceptions so changes remain accountable. Fifth, TOGAF ADM provides a structured but adaptable method for moving from a vision to governed change. These ideas work as one process: define the future, understand what is missing, plan the work, make controlled decisions and revisit the approach as new evidence appears."
    },
    {
      "topic": "Recap",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "27–30",
      "question": "A manager says “We followed TOGAF, so our registration project must be successful.” Evaluate the claim.",
      "points": [
        "Method not guarantee",
        "Target outcomes",
        "Evidence",
        "Risks/feedback",
        "Governance and iteration"
      ],
      "answer": "Using TOGAF or ADM does not guarantee success because a framework structures work rather than automatically solving an organisation’s problems. A project may follow formal activities yet choose an unrealistic target, ignore data ownership or fail to measure student outcomes. The university must still determine whether registration became more reliable, whether manual corrections decreased and whether peak access works. Governance should review important decisions and exceptions, while feedback should lead to changes when the intended value is not achieved. The lecture explicitly advises tailoring ADM instead of following it mechanically. Success depends on the quality of organisational decisions and demonstrated results, not merely the name of the method used."
    },
    {
      "topic": "Recap",
      "kind": "Apply",
      "marks": 10,
      "slides": "6–30",
      "question": "Outline a complete answer structure for a structured exam question about EA transformation.",
      "points": [
        "Goal/target",
        "Current baseline",
        "Four-layer view",
        "Gaps/roadmap",
        "Governance/value"
      ],
      "answer": "I would begin by stating the university’s business goal and describing the desired registration capability, rather than immediately proposing a platform. Next, I would summarise the baseline and target across business, data, application and technology architecture. I would identify evidence-based gaps and explain their impact. I would then propose a staged roadmap that respects dependencies, especially the need to agree data ownership before automation. Finally, I would name suitable governance decisions and responsible owners, and explain how completion time, error rates and support requests could measure the results. This structure demonstrates both conceptual understanding and practical application to the case."
    },
    {
      "topic": "Recap",
      "kind": "Compare",
      "marks": 8,
      "slides": "16–21",
      "question": "Differentiate an architecture gap, an implementation dependency and a governance exception.",
      "points": [
        "Define gap",
        "Define dependency",
        "Define exception",
        "Example"
      ],
      "answer": "An architecture gap is the difference between the current and desired capability, such as missing authoritative enrolment data. An implementation dependency is a required order of work, such as agreeing the data definition before configuring automated exchange. A governance exception is a formally authorised and documented departure from an architectural principle or standard, with a named person accepting the related risk. These concepts describe different aspects of architecture-led change: what is missing, what must happen first and how deviations are controlled. Distinguishing them prevents a team from treating a schedule problem or an unapproved shortcut as if it were simply another feature request."
    },
    {
      "topic": "Recap",
      "kind": "Analyse",
      "marks": 10,
      "slides": "19–30",
      "question": "Why must governance continue after a solution is approved?",
      "points": [
        "Changing requirements",
        "Delivery deviations",
        "Security/operations risks",
        "Exceptions and accountability",
        "Feedback"
      ],
      "answer": "Initial approval only checks the proposed direction against information available at that moment. During implementation, integration tests may reveal incompatible data, security concerns or operational limitations. Staff requirements and business priorities may also change. Ongoing governance checks whether delivery remains consistent with agreed principles, and ensures that revisions or exceptions are reviewed by accountable owners. It also connects findings from testing and rollout with updates to the roadmap. If governance stops at sign-off, teams may introduce undocumented shortcuts or overlook new risks. Therefore, architecture governance should enable responsible decisions across the change lifecycle, not just at its beginning."
    }
  ],
  "mcq": [
    {
      "question": "A target state primarily describes:",
      "choices": [
        "A vendor product",
        "A desired future organisational capability",
        "Only a database migration",
        "Current software defects"
      ],
      "correct": 1,
      "explanation": "Slide 5 distinguishes desired capability from a purchase idea.",
      "slides": "5"
    },
    {
      "question": "Baseline architecture is:",
      "choices": [
        "An ideal future wish list",
        "The current state of business, data, applications and technology",
        "A marketing brochure",
        "A roadmap with dates only"
      ],
      "correct": 1,
      "explanation": "Baseline describes how the organisation operates now.",
      "slides": "6"
    },
    {
      "question": "Which is a valid student-centred target outcome?",
      "choices": [
        "Buy any new portal",
        "One reliable enrolment status across systems",
        "Choose a new logo",
        "Replace all staff immediately"
      ],
      "correct": 1,
      "explanation": "The lecture gives reliable shared status as a target example.",
      "slides": "5, 9"
    },
    {
      "question": "What must be set before target design?",
      "choices": [
        "Only product branding",
        "Current performance and intended outcomes",
        "Only the vendor contract",
        "No measures are required"
      ],
      "correct": 1,
      "explanation": "Slide 8 says define success and establish baseline/target measures.",
      "slides": "8"
    },
    {
      "question": "What is an architecture roadmap?",
      "choices": [
        "A list of technologies with no order",
        "A sequenced plan from baseline to target with dependencies",
        "A complete EA framework",
        "A department email"
      ],
      "correct": 1,
      "explanation": "Roadmaps organise initiatives, timing, dependencies and milestones.",
      "slides": "11"
    },
    {
      "question": "Which roadmap dependency comes first?",
      "choices": [
        "Automate before defining the data",
        "Agree data ownership before automated exchange",
        "Release before security tests",
        "Disable support before launch"
      ],
      "correct": 1,
      "explanation": "Slide 12 specifically names this dependency.",
      "slides": "12"
    },
    {
      "question": "Gap analysis compares:",
      "choices": [
        "Price with branding",
        "Baseline with target state",
        "DevOps with AI agents",
        "Two CSS styles"
      ],
      "correct": 1,
      "explanation": "Gap analysis identifies missing capabilities between states.",
      "slides": "16"
    },
    {
      "question": "Which is primarily a governance gap?",
      "choices": [
        "No approval route for architecture exceptions",
        "Slow server response",
        "Duplicate student data",
        "Missing API"
      ],
      "correct": 0,
      "explanation": "Slide 18 identifies no exception approval route as a governance gap.",
      "slides": "18"
    },
    {
      "question": "What is a valid gap-analysis action for inconsistent status?",
      "choices": [
        "Ignore definitions",
        "Agree meaning and owner, design exchange and test reconciliation",
        "Buy hardware only",
        "Hide status from students"
      ],
      "correct": 1,
      "explanation": "Slide 17 shows these actions.",
      "slides": "17"
    },
    {
      "question": "Architecture governance defines:",
      "choices": [
        "Only user-interface designs",
        "Principles, decision rights and review points",
        "Programming language syntax",
        "Guaranteed project success"
      ],
      "correct": 1,
      "explanation": "Governance clarifies how decisions are made and reviewed.",
      "slides": "19"
    },
    {
      "question": "Which is an example architecture principle?",
      "choices": [
        "Every field has random owners",
        "Authoritative student data has a named owner",
        "Avoid documentation completely",
        "Interfaces must remain secret"
      ],
      "correct": 1,
      "explanation": "Slide 21 states this example.",
      "slides": "21"
    },
    {
      "question": "An approved architecture exception should:",
      "choices": [
        "Remain secret",
        "Record the deviation and who accepted its risk",
        "Automatically override all security controls",
        "Avoid all review"
      ],
      "correct": 1,
      "explanation": "Exceptions require documented accountability.",
      "slides": "19–21"
    },
    {
      "question": "TOGAF ADM is presented as:",
      "choices": [
        "A rigid never-revisited checklist",
        "Iterative and adaptable architecture development",
        "A scripting language",
        "A data storage format"
      ],
      "correct": 1,
      "explanation": "Slide 23 emphasises iteration and tailoring.",
      "slides": "23"
    },
    {
      "question": "Which belongs to the simplified ADM application?",
      "choices": [
        "Vision, Architecture, Solutions, Migration, Governance, Change",
        "Code only, Deploy only",
        "Buy, Advertise, Ignore",
        "Design UI, Count views"
      ],
      "correct": 0,
      "explanation": "The lecture uses these six activities in the university case.",
      "slides": "25"
    },
    {
      "question": "Which is NOT a lecture takeaway?",
      "choices": [
        "Roadmaps need dependencies",
        "Gap analysis creates actionable work",
        "Governance clarifies decisions",
        "Target state always means buying a new system"
      ],
      "correct": 3,
      "explanation": "The lecture rejects product-first targets.",
      "slides": "30"
    }
  ],
  "flashcards": [
    {
      "front": "What is the baseline architecture?",
      "back": "The organisation’s current business, data, applications and technology.",
      "slides": "6"
    },
    {
      "front": "What is the target-state architecture?",
      "back": "The agreed future way of working, based on goals and constraints.",
      "slides": "6"
    },
    {
      "front": "Why is “buy a new system” not a target?",
      "back": "It describes a solution, not an intended organisational capability.",
      "slides": "5"
    },
    {
      "front": "What is the sample registration target?",
      "back": "One reliable enrolment status across systems.",
      "slides": "5"
    },
    {
      "front": "Name four target-state EA layers.",
      "back": "Business, data, applications and technology.",
      "slides": "6–7"
    },
    {
      "front": "Business target for registration?",
      "back": "Clear ownership and simpler steps.",
      "slides": "7"
    },
    {
      "front": "Data target for registration?",
      "back": "Agreed definitions and authoritative student records.",
      "slides": "7"
    },
    {
      "front": "Application target for registration?",
      "back": "Reliable exchange between portal and core systems.",
      "slides": "7"
    },
    {
      "front": "Technology target for registration?",
      "back": "Resilient, secure, scalable and monitored service.",
      "slides": "7"
    },
    {
      "front": "Give a student success measure.",
      "back": "Enrolment confirmation without repeated visits.",
      "slides": "8"
    },
    {
      "front": "Give a staff success measure.",
      "back": "Fewer duplicate entries and manual corrections.",
      "slides": "8"
    },
    {
      "front": "Give a management success measure.",
      "back": "Trustworthy, timely reporting.",
      "slides": "8"
    },
    {
      "front": "Define an architecture roadmap.",
      "back": "A sequenced plan from baseline to target with dependencies and milestones.",
      "slides": "11"
    },
    {
      "front": "Name three roadmap elements.",
      "back": "Initiatives, timing, dependencies, milestones and owners.",
      "slides": "11"
    },
    {
      "front": "What precedes automated data exchange?",
      "back": "Agreement on data ownership and definitions.",
      "slides": "12"
    },
    {
      "front": "What precedes migration?",
      "back": "Cleaning critical records.",
      "slides": "12"
    },
    {
      "front": "What should be tested before peak registration?",
      "back": "Security, load and recovery.",
      "slides": "12"
    },
    {
      "front": "What should be prepared before launch?",
      "back": "Staff and student support.",
      "slides": "12"
    },
    {
      "front": "What does gap analysis compare?",
      "back": "Baseline to target, identifying missing capabilities.",
      "slides": "16"
    },
    {
      "front": "Name five gap categories.",
      "back": "Business, data, application, technology and governance.",
      "slides": "18"
    },
    {
      "front": "What is the case study’s data gap?",
      "back": "Missing agreed enrolment status, ownership and exchange rules.",
      "slides": "17"
    },
    {
      "front": "What does governance establish?",
      "back": "Principles, decision rights and review points.",
      "slides": "19"
    },
    {
      "front": "What three governance results appear?",
      "back": "Approve, revise or approve a documented exception.",
      "slides": "21"
    },
    {
      "front": "What must a documented exception record?",
      "back": "The decision and who accepted its risk.",
      "slides": "19"
    },
    {
      "front": "Example university data principle?",
      "back": "Authoritative student data has a named owner.",
      "slides": "21"
    },
    {
      "front": "Example integration principle?",
      "back": "Use approved, documented interfaces.",
      "slides": "21"
    },
    {
      "front": "What aspects are reviewed?",
      "back": "Business fit, data, integration, security, operations and cost.",
      "slides": "21"
    },
    {
      "front": "What is TOGAF ADM?",
      "back": "TOGAF’s central, iterative architecture development method.",
      "slides": "23"
    },
    {
      "front": "What must ADM be adapted to?",
      "back": "Scope, scale, risk and organisational capacity.",
      "slides": "23"
    },
    {
      "front": "Name six simplified ADM steps.",
      "back": "Vision, Architecture, Solutions, Migration, Governance, Change.",
      "slides": "25"
    },
    {
      "front": "What does Vision do in the case?",
      "back": "Defines reduced registration friction and more consistent records.",
      "slides": "25"
    },
    {
      "front": "What does Migration do?",
      "back": "Plans stages, dependencies and cutover.",
      "slides": "25"
    },
    {
      "front": "What does Change do?",
      "back": "Assesses new requirements and updates the roadmap.",
      "slides": "25"
    },
    {
      "front": "Name five architecture work products.",
      "back": "Vision, baseline/target views, gaps, roadmap, governance record.",
      "slides": "26"
    },
    {
      "front": "What is a product-first mistake?",
      "back": "Selecting a system before agreeing desired outcomes.",
      "slides": "27"
    },
    {
      "front": "What is an unrealistic target mistake?",
      "back": "Treating the target as a perfect wish list.",
      "slides": "27"
    },
    {
      "front": "What did the activity suggest as a roadmap?",
      "back": "Agree rules/baseline → pilot integration → phased rollout.",
      "slides": "29"
    },
    {
      "front": "What measures are used in the activity answer?",
      "back": "Completion time, error rate, failed transactions and support volume.",
      "slides": "29"
    },
    {
      "front": "What are the five lecture takeaways?",
      "back": "Target, roadmap, gaps, governance and adaptable ADM.",
      "slides": "30"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "Baseline and target",
    "slides": "5–7",
    "scenario": "The university currently has inconsistent enrolment status across the student, course and finance systems.",
    "parts": [
      {
        "letter": "a",
        "question": "Differentiate TWO architectural states needed for planning.",
        "marks": 4,
        "items": [
          "Baseline architecture describes how the university currently works across the four EA layers.",
          "Target-state architecture describes the agreed future operations and capabilities."
        ],
        "model": "The baseline architecture describes how the university operates now, including current registration processes, data, applications and infrastructure. The target-state architecture describes the agreed future arrangement needed to meet the university’s goals, such as a reliable enrolment status shared across systems. Both views should cover the business, data, application and technology layers."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons both states are needed.",
        "marks": 6,
        "items": [
          "The baseline gives evidence of current weaknesses and constraints.",
          "The target clarifies the desired student and staff outcomes.",
          "Comparing them reveals changes that can be sequenced and evaluated."
        ],
        "model": "A useful target state begins with the outcome, not with a product purchase. First, the university should define a consistent registration process with clear responsibilities. Second, it should agree on an authoritative enrolment record and controlled exchange between the registration and finance systems. Third, it should provide secure, resilient hosting capable of handling peak registration demand. These requirements describe the capabilities the university needs, regardless of the particular vendor selected."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Business outcomes",
    "slides": "5, 8–9",
    "scenario": "A university department defines its target as “buy a modern registration portal.”",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO reasons this is not a sufficient target state.",
        "marks": 4,
        "items": [
          "Purchasing a product does not define a desired business capability.",
          "A new portal does not automatically resolve inconsistent processes or data."
        ],
        "model": "First, purchasing a product does not define a desired business capability. Second, a new portal does not automatically resolve inconsistent processes or data. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE measurable target outcomes for the university.",
        "marks": 6,
        "items": [
          "Students should confirm enrolment without repeated visits.",
          "Staff should perform fewer manual record corrections.",
          "The service should remain reliable under peak registration demand."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, students should confirm enrolment without repeated visits. For the university, consistent enrolment information prevents contradictory statuses and repeated manual corrections. Second, staff should perform fewer manual record corrections. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Third, the service should remain reliable under peak registration demand. The service must remain usable, or recover safely, when a component or connection fails. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Four-layer target",
    "slides": "6–9",
    "scenario": "The university wants one reliable course-registration status visible across departments.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO proposed target-state changes in EA layers.",
        "marks": 4,
        "items": [
          "Business: define one registration process and accountable process owners.",
          "Data: agree consistent enrolment status and authoritative student records."
        ],
        "model": "First, business: define one registration process and accountable process owners. Second, data: agree consistent enrolment status and authoritative student records. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE further implementation design requirements.",
        "marks": 6,
        "items": [
          "Applications must exchange status through approved interfaces.",
          "Technology must support secure, scalable and monitored service delivery.",
          "Staff procedures and support arrangements must align with the target process."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, applications must exchange status through approved interfaces. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, technology must support secure, scalable and monitored service delivery. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Third, staff procedures and support arrangements must align with the target process. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Architecture roadmap",
    "slides": "11–12",
    "scenario": "A project team has described an ideal target state but has not planned how to reach it.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO purposes of an architecture roadmap.",
        "marks": 4,
        "items": [
          "It sequences initiatives needed to move from baseline to target.",
          "It makes dependencies, owners and milestones visible."
        ],
        "model": "First, it sequences initiatives needed to move from baseline to target. Second, it makes dependencies, owners and milestones visible. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE important dependencies in university registration.",
        "marks": 6,
        "items": [
          "Agree data ownership before automating exchange.",
          "Clean critical records before migration.",
          "Test integration, security and recovery before full peak-period rollout."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, agree data ownership before automating exchange. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Second, clean critical records before migration. Third, test integration, security and recovery before full peak-period rollout. The systems can then share necessary updates through controlled connections instead of manual re-entry."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Roadmap stages",
    "slides": "11–12, 29",
    "scenario": "The university wants to modernise registration without interrupting the next enrolment period.",
    "parts": [
      {
        "letter": "a",
        "question": "Propose TWO activities for an initial preparation stage.",
        "marks": 4,
        "items": [
          "Map the current business process and capture baseline performance.",
          "Assign data owners and agree shared definitions and priorities."
        ],
        "model": "First, map the current business process and capture baseline performance. Clarifying who does what is necessary before automating the same activity in software. Second, assign data owners and agree shared definitions and priorities. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE later actions for controlled delivery.",
        "marks": 6,
        "items": [
          "Pilot the integration using a limited set of services.",
          "Test performance and recovery before a phased rollout.",
          "Train staff and evaluate error rates and student experience after launch."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, pilot the integration using a limited set of services. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, test performance and recovery before a phased rollout. Doing prerequisite work first avoids costly rework and makes changes easier to test. Third, train staff and evaluate error rates and student experience after launch. A controlled introduction lets the team discover issues before they affect every user. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Gap analysis",
    "slides": "16–18",
    "scenario": "The student portal and finance system report different enrolment status for the same person.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO relevant gaps.",
        "marks": 4,
        "items": [
          "Data gap: enrolment status has inconsistent definitions or no trusted source.",
          "Application gap: there is no dependable exchange between systems."
        ],
        "model": "First, data gap: enrolment status has inconsistent definitions or no trusted source. Second, application gap: there is no dependable exchange between systems. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE parts of a useful gap-analysis record.",
        "marks": 6,
        "items": [
          "Describe baseline evidence and the desired target capability.",
          "State the impact, urgency and responsible owner.",
          "Specify the corrective action and its dependency on agreeing data rules."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, describe baseline evidence and the desired target capability. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, state the impact, urgency and responsible owner. Third, specify the corrective action and its dependency on agreeing data rules. Doing prerequisite work first avoids costly rework and makes changes easier to test. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Beyond technology gaps",
    "slides": "16–18",
    "scenario": "A team solves software integration but staff are still unsure who may approve registration exceptions.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO non-technical gap categories.",
        "marks": 4,
        "items": [
          "Business gap: process responsibilities and approval rules remain unclear.",
          "Governance gap: decision rights and exception approval routes have not been defined."
        ],
        "model": "First, business gap: process responsibilities and approval rules remain unclear. Second, governance gap: decision rights and exception approval routes have not been defined. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons technology fixes alone will not succeed.",
        "marks": 6,
        "items": [
          "Different staff may continue to apply conflicting business rules.",
          "Users may lose trust when decisions are inconsistent.",
          "Unclear owners make future incidents and changes difficult to resolve."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, different staff may continue to apply conflicting business rules. Clarifying who does what is necessary before automating the same activity in software. Second, users may lose trust when decisions are inconsistent. Third, unclear owners make future incidents and changes difficult to resolve. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Governance",
    "slides": "19–21",
    "scenario": "A faculty requests a custom interface that conflicts with university-wide standards.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO functions of architecture governance.",
        "marks": 4,
        "items": [
          "Governance establishes principles and decision-making responsibilities.",
          "It reviews proposed changes against business value, risk and architecture standards."
        ],
        "model": "First, governance establishes principles and decision-making responsibilities. Second, it reviews proposed changes against business value, risk and architecture standards. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE possible review outcomes and their conditions.",
        "marks": 6,
        "items": [
          "Approve when requirements and standards are satisfied.",
          "Request revision when security, integration or business fit is inadequate.",
          "Approve a documented exception only with identified risk acceptance and owner."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, approve when requirements and standards are satisfied. Clear decision authority means the team knows who can approve a change and accept its residual risks. Second, request revision when security, integration or business fit is inadequate. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, approve a documented exception only with identified risk acceptance and owner. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Architecture principles",
    "slides": "19–21",
    "scenario": "The university has no agreed rules for student-data ownership or how systems integrate.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO architecture principles it could adopt.",
        "marks": 4,
        "items": [
          "Each authoritative student-data item must have a named owner.",
          "New integrations should use approved and documented interfaces."
        ],
        "model": "First, each authoritative student-data item must have a named owner. Second, new integrations should use approved and documented interfaces. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways those principles influence project review.",
        "marks": 6,
        "items": [
          "They enable reviewers to check data consistency and accountability.",
          "They reduce unsafe ad hoc connections between applications.",
          "They create evidence for approving, revising or documenting exceptions."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, they enable reviewers to check data consistency and accountability. Second, they reduce unsafe ad hoc connections between applications. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, they create evidence for approving, revising or documenting exceptions. Clear decision authority means the team knows who can approve a change and accept its residual risks. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "TOGAF ADM",
    "slides": "23–25",
    "scenario": "A campus project manager wants to apply TOGAF mechanically without considering available staff or project size.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ideas behind TOGAF ADM.",
        "marks": 4,
        "items": [
          "ADM is a structured method for architecture development.",
          "ADM is iterative, so teams can revisit decisions as new evidence appears."
        ],
        "model": "First, aDM is a structured method for architecture development. Second, aDM is iterative, so teams can revisit decisions as new evidence appears. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways ADM can be used appropriately in the campus case.",
        "marks": 6,
        "items": [
          "Begin with a vision and business outcomes for registration.",
          "Develop architecture and possible solutions before migration.",
          "Adapt reviews and governance to the university’s scope, risk and capacity."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, begin with a vision and business outcomes for registration. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, develop architecture and possible solutions before migration. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, adapt reviews and governance to the university’s scope, risk and capacity. Clear decision authority means the team knows who can approve a change and accept its residual risks."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "ADM application",
    "slides": "23–26",
    "scenario": "The university wants to introduce a connected course-registration service.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO early activities in a simplified ADM.",
        "marks": 4,
        "items": [
          "Vision: agree the goal of reducing registration friction.",
          "Architecture: define business, data, application and platform requirements."
        ],
        "model": "First, the next step is vision: agree the goal of reducing registration friction. Second, the next step is architecture: define business, data, application and platform requirements. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE later activities of the simplified approach.",
        "marks": 6,
        "items": [
          "Solutions: compare implementation options and pilot choices.",
          "Migration: plan stages and dependencies for cutover.",
          "Governance and change: verify compliance and update architecture when needs change."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, solutions: compare implementation options and pilot choices. A controlled introduction lets the team discover issues before they affect every user. Second, the next step is migration: plan stages and dependencies for cutover. Doing prerequisite work first avoids costly rework and makes changes easier to test. Third, governance and change: verify compliance and update architecture when needs change. Clear decision authority means the team knows who can approve a change and accept its residual risks. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Work products",
    "slides": "16–21, 26",
    "scenario": "The rector asks the EA team to present tangible outputs from the planning exercise.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO essential architecture work products.",
        "marks": 4,
        "items": [
          "Architecture vision records the scope, problem, stakeholders and outcomes.",
          "Baseline and target views document current and intended architecture."
        ],
        "model": "First, architecture vision records the scope, problem, stakeholders and outcomes. Second, baseline and target views document current and intended architecture. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE further work products and their uses.",
        "marks": 6,
        "items": [
          "Gap analysis identifies missing capabilities and required actions.",
          "Roadmap sequences initiatives, owners and milestones.",
          "Governance record documents approvals, exceptions and follow-up decisions."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, gap analysis identifies missing capabilities and required actions. Second, roadmap sequences initiatives, owners and milestones. Doing prerequisite work first avoids costly rework and makes changes easier to test. Third, governance record documents approvals, exceptions and follow-up decisions. Clear decision authority means the team knows who can approve a change and accept its residual risks."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Mistakes",
    "slides": "27",
    "scenario": "The project buys a product first, creates a roadmap without dependencies and only asks for governance sign-off at the end.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO mistakes made by the team.",
        "marks": 4,
        "items": [
          "It selected a product before agreeing the future business capability.",
          "The roadmap ignores work dependencies and accountable owners."
        ],
        "model": "First, it selected a product before agreeing the future business capability. Second, the roadmap ignores work dependencies and accountable owners. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE corrections consistent with the lecture.",
        "marks": 6,
        "items": [
          "Define target outcomes and constraints before vendor selection.",
          "Order changes so ownership, data and integration readiness come first.",
          "Use governance reviews throughout rather than as final paperwork."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, define target outcomes and constraints before vendor selection. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, order changes so ownership, data and integration readiness come first. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, use governance reviews throughout rather than as final paperwork. Clear decision authority means the team knows who can approve a change and accept its residual risks. The decision, its owner and any accepted exception should be recorded and reviewed."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Success measures",
    "slides": "8, 20, 29",
    "scenario": "After a pilot, the student portal seems quicker, but management cannot establish whether outcomes improved.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO possible baseline indicators.",
        "marks": 4,
        "items": [
          "Average time required to complete registration.",
          "Number of failed transactions or manual corrections."
        ],
        "model": "First, average time required to complete registration. Second, number of failed transactions or manual corrections. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways to assess value after the pilot.",
        "marks": 6,
        "items": [
          "Compare measured results against the same pre-implementation definitions.",
          "Review student and staff experience rather than performance alone.",
          "Decide whether further rollout is justified by evidence and risk."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, compare measured results against the same pre-implementation definitions. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, review student and staff experience rather than performance alone. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Third, decide whether further rollout is justified by evidence and risk. A controlled introduction lets the team discover issues before they affect every user. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "End-to-end scenario",
    "slides": "5–9, 16–29",
    "scenario": "A new university learning platform is proposed, but the student-record and finance interfaces are not tested.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO high-priority risks for the target state.",
        "marks": 4,
        "items": [
          "Enrolment and fee status may remain inconsistent between applications.",
          "Untested integrations may fail during peak registration."
        ],
        "model": "First, enrolment and fee status may remain inconsistent between applications. Second, untested integrations may fail during peak registration. Both are relevant when defining a feasible route from the current state to the desired future state."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions before the institution approves rollout.",
        "marks": 6,
        "items": [
          "Resolve authoritative data definitions and interface contracts.",
          "Complete performance, security and recovery tests.",
          "Assign architecture governance owners to review risks and rollout dependencies."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, resolve authoritative data definitions and interface contracts. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Second, complete performance, security and recovery tests. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, assign architecture governance owners to review risks and rollout dependencies. Doing prerequisite work first avoids costly rework and makes changes easier to test. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "University EA transformation",
    "slides": "5–29",
    "scenario": "A university operates a fragmented course-registration process. Students repeat data entry, staff reconcile records manually and the portal fails at peak hours. The CIO requests a target state and change plan.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE elements of the desired target state.",
        "marks": 5,
        "items": [
          "One clearer student registration process.",
          "Named owners for critical student and enrolment data.",
          "Approved integration between portal, finance and academic systems.",
          "Secure resilient infrastructure under high demand.",
          "Staff support and reliable status reporting."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, one clearer student registration process. Second, named owners for critical student and enrolment data. Third, approved integration between portal, finance and academic systems. Fourth, secure resilient infrastructure under high demand. Fifth, staff support and reliable status reporting."
      },
      {
        "letter": "b",
        "question": "Explain FIVE priority gaps with corresponding actions.",
        "marks": 10,
        "items": [
          "Unclear process ownership: assign accountable offices.",
          "Inconsistent status definitions: agree shared data rules.",
          "Missing interface contracts: design and test integration.",
          "Weak monitoring and recovery: improve operations and resilience.",
          "No exception approval process: establish governance decision rights."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, unclear process ownership: assign accountable offices. Clarifying who does what is necessary before automating the same activity in software. Second, inconsistent status definitions: agree shared data rules. Third, missing interface contracts: design and test integration. The systems can then share necessary updates through controlled connections instead of manual re-entry. Fourth, weak monitoring and recovery: improve operations and resilience. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Fifth, no exception approval process: establish governance decision rights. Clear decision authority means the team knows who can approve a change and accept its residual risks. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      },
      {
        "letter": "c",
        "question": "Propose FIVE roadmap and governance decisions.",
        "marks": 10,
        "items": [
          "Stage 1: map baseline, agree owners, define KPIs.",
          "Stage 2: clean data and pilot controlled integration.",
          "Stage 3: test and roll out in phases with training.",
          "Govern student-data definitions and integration/security reviews.",
          "Compare outcomes against baseline and revise architecture when necessary."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, stage 1: map baseline, agree owners, define KPIs. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, stage 2: clean data and pilot controlled integration. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, stage 3: test and roll out in phases with training. Doing prerequisite work first avoids costly rework and makes changes easier to test. Fourth, govern student-data definitions and integration/security reviews. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Fifth, compare outcomes against baseline and revise architecture when necessary. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Architecture governance under pressure",
    "slides": "16–27",
    "scenario": "The registration team is under deadline pressure. A vendor wants to launch despite inconsistent student records, no recovery test and an unreviewed integration exception.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE weaknesses of the current plan.",
        "marks": 5,
        "items": [
          "Inconsistent records prevent reliable status exchange.",
          "Unclear data ownership leaves corrections unaccountable.",
          "Unreviewed integration creates security and compatibility risk.",
          "Missing recovery testing threatens availability.",
          "Deadline pressure is overriding governed decision-making."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, inconsistent records prevent reliable status exchange. Second, unclear data ownership leaves corrections unaccountable. Third, unreviewed integration creates security and compatibility risk. Fourth, missing recovery testing threatens availability. Fifth, deadline pressure is overriding governed decision-making."
      },
      {
        "letter": "b",
        "question": "Explain FIVE architecture-governance responses.",
        "marks": 10,
        "items": [
          "Require a named business and technical owner for critical decisions.",
          "Apply agreed principles to data and interface design.",
          "Review business fit, cost, security and operational risks.",
          "Document any approved exception and accepted risk.",
          "Defer unsafe release until important controls are demonstrated."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, require a named business and technical owner for critical decisions. Second, apply agreed principles to data and interface design. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, review business fit, cost, security and operational risks. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Fourth, document any approved exception and accepted risk. Clear decision authority means the team knows who can approve a change and accept its residual risks. Fifth, defer unsafe release until important controls are demonstrated. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      },
      {
        "letter": "c",
        "question": "Justify FIVE changes to the roadmap and review process.",
        "marks": 10,
        "items": [
          "Prioritise data definitions and cleaning before full migration.",
          "Integrate through a limited pilot with measurable exit criteria.",
          "Test peak-load behaviour and recovery before cutover.",
          "Prepare users and support staff for the new workflows.",
          "Maintain continuous review, feedback and updates after deployment."
        ],
        "model": "The change should be managed against the agreed target state and its dependencies. First, prioritise data definitions and cleaning before full migration. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Second, integrate through a limited pilot with measurable exit criteria. A controlled introduction lets the team discover issues before they affect every user. Third, test peak-load behaviour and recovery before cutover. The service must remain usable, or recover safely, when a component or connection fails. Fourth, prepare users and support staff for the new workflows. Clarifying who does what is necessary before automating the same activity in software. Fifth, maintain continuous review, feedback and updates after deployment. Linking development to real operating conditions helps teams improve the service after each release. The roadmap should make university registration more reliable through coordinated process, data and system changes."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='lecture4_v1_';

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
// Interactive roadmap and challenge answer for Lecture 4.
(() => {
  const root = document.getElementById('summary-list');
  const escapeText = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const roadmapStages = [
      {
        badge: "STAGE 1 OF 3 • STABILISE (SLIDE 13)",
        bg: "#fef9c3",
        title: "Stage 1: Stabilise — Map Processes, Fix Data Ownership & Baseline Service",
        focus: "Clarify registration business rules across faculties, name authoritative owners for student/course/fee data, clean critical records, and measure baseline wait times and error rates.",
        owner: "Business Owner & Data Owner (supported by Enterprise Architect)",
        deliverable: "Agreed registration workflow, data dictionary with named owners, and baseline KPI report",
        risk: "Faculties disagree on exception rules or legacy data takes longer than expected to clean",
        measure: "100% of core student/enrolment fields assigned an owner; baseline error rate recorded",
        gate: "Steering Group & Data Owner sign off on status definitions before any integration code is built"
      },
      {
        badge: "STAGE 2 OF 3 • CONNECT (SLIDE 13)",
        bg: "#e0f2fe",
        title: "Stage 2: Connect — Build Integrations & Pilot with One Faculty",
        focus: "Design and build controlled APIs between the unified portal, Student Records, and Finance; test security, peak load, and recovery; run a live pilot with a single faculty.",
        owner: "Enterprise Architect & IT / Security Teams",
        deliverable: "Tested integration interfaces, monitoring dashboards, support playbook, and single-faculty pilot",
        risk: "Legacy Finance system has limited API options or peak-load bottlenecks appear under stress tests",
        measure: "Zero status mismatches between Finance and Records during pilot; <2s portal response time",
        gate: "Architecture Review passes Business Fit, Data, Integration, Security, Operations & Cost checks"
      },
      {
        badge: "STAGE 3 OF 3 • EXPAND (SLIDE 13)",
        bg: "#dcfce7",
        title: "Stage 3: Expand — Roll Out in Waves, Monitor Outcomes & Retire Legacy Steps",
        focus: "Onboard remaining faculties in planned waves outside peak registration weeks, track student/staff outcome targets, and decommission duplicate manual forms and shadow spreadsheets.",
        owner: "Business Owner, IT Operations & Steering Group",
        deliverable: "University-wide connected registration service, active rollback/support desk, and retired legacy steps",
        risk: "Staff revert to manual workarounds during peak traffic if training or support desk readiness lags",
        measure: "Reduced registration completion time, lower manual correction volume, and high system availability",
        gate: "Post-rollout governance review verifies target KPIs and transitions to ongoing ADM Phase H change management"
      }
    ];

    function showRoadmapStage(index, btnEl) {
      root.querySelectorAll(".nb-stage-tab").forEach((tab) => { tab.classList.remove("active"); tab.setAttribute("aria-pressed", "false"); });
      if (btnEl) { btnEl.classList.add("active"); btnEl.setAttribute("aria-pressed", "true"); }

      const s = roadmapStages[index];
      const panel = document.getElementById("roadmap-stage-panel");
      panel.style.background = s.bg;
      panel.innerHTML = `
        <span class="slide-ref" style="background:#ffffff; margin-bottom:0.55rem;">${escapeText(s.badge)}</span>
        <h4 style="font-size:1.05rem; margin-bottom:0.5rem;">${escapeText(s.title)}</h4>
        <p style="margin-bottom:0.75rem;"><strong>Core Focus:</strong> ${escapeText(s.focus)}</p>
        <div class="nb-grid-2" style="gap:0.65rem;">
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>1. Owner:</strong> ${escapeText(s.owner)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>2. Deliverable:</strong> ${escapeText(s.deliverable)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>3. Key Risk:</strong> ${escapeText(s.risk)}</div>
          <div class="nb-example" style="margin-top:0; background:#ffffff;"><strong>4. Measure:</strong> ${escapeText(s.measure)}</div>
        </div>
        <div class="nb-example" style="margin-top:0.65rem; background:#ffffff; border-width:2px;">
          <strong>5. Decision Gate:</strong> ${escapeText(s.gate)}
        </div>
      `;
    }

    function toggleChallengeAnswer() {
      const drawer = document.getElementById("challenge-answer-drawer");
      const btn = document.getElementById("reveal-challenge-btn");
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "Hide Model Advisory Solution" : "Reveal Model 5-Part Advisory Solution (Slide 29)";
    }


  root.querySelectorAll('[data-roadmap-stage]').forEach(button => button.addEventListener('click', () => showRoadmapStage(Number(button.dataset.roadmapStage), button)));
  root.querySelector('[data-challenge-answer]').addEventListener('click', toggleChallengeAnswer);
  showRoadmapStage(0, root.querySelector('.nb-stage-tab'));
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
