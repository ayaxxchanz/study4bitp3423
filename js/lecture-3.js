// Lecture 3: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "One University, Five Separate Systems: Why Organisations Need EA",
      "slides": "2, 5 & 17",
      "html": "<!-- Interactive University Systems Map (Slide 2) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Scenario: Five Separate University Systems <span class=\"slide-ref\">slide 2</span></div>\n          <div class=\"nb-callout coral\">\n            <strong>Core Insight:</strong> Organisational IT failures rarely happen because a single program has bad code. They happen because <strong>separate departments optimise their own tools locally without coordinating across the enterprise</strong>. Five software systems can each function fine on their own yet fail together as a university <span class=\"slide-ref\">slide 2</span>.\n          </div>\n\n          <div class=\"nb-toggle-bar\">\n            <button type=\"button\" class=\"nb-btn active\" id=\"btn-silo\" data-university-mode=\"silo\">Mode A: Siloed University (Without EA)</button>\n            <button type=\"button\" class=\"nb-btn\" id=\"btn-ea\" data-university-mode=\"ea\">Mode B: Coordinated University (With EA)</button>\n          </div>\n\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span id=\"uni-diagram-title\">Visual Map: Five Disconnected University Systems (Slide 2)</span>\n              <span>Interactive State Diagram</span>\n            </div>\n\n            <svg id=\"uni-svg\" viewBox=\"0 0 920 310\" role=\"img\" aria-label=\"Five university systems comparison diagram\">\n              <defs>\n                <marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#e11d48\" />\n                </marker>\n                <marker id=\"arrow-green\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#059669\" />\n                </marker>\n              </defs>\n\n              <!-- Central Hub (Switches between chaos and EA backbone) -->\n              <rect id=\"hub-box\" x=\"315\" y=\"112\" width=\"290\" height=\"86\" rx=\"12\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/>\n              <text id=\"hub-title\" x=\"460\" y=\"146\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"14.5\" fill=\"#be123c\">NO SHARED COORDINATION</text>\n              <text id=\"hub-sub\" x=\"460\" y=\"170\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">Manual re-entry · Conflicting numbers</text>\n\n              <!-- System 1: Admissions -->\n              <g transform=\"translate(25, 22)\">\n                <rect width=\"235\" height=\"82\" rx=\"10\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2.2\"/>\n                <rect width=\"235\" height=\"26\" rx=\"8\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2\"/>\n                <text x=\"12\" y=\"18\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">1. ADMISSIONS</text>\n                <text id=\"sys1-desc\" x=\"12\" y=\"48\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Applicant details entered here</text>\n                <text id=\"sys1-sub\" x=\"12\" y=\"67\" font-size=\"11.5\" fill=\"#3f3f46\">Isolated intake database</text>\n              </g>\n\n              <!-- System 2: Student Records -->\n              <g transform=\"translate(660, 22)\">\n                <rect width=\"235\" height=\"82\" rx=\"10\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2.2\"/>\n                <rect width=\"235\" height=\"26\" rx=\"8\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2\"/>\n                <text x=\"12\" y=\"18\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">2. STUDENT RECORDS</text>\n                <text id=\"sys2-desc\" x=\"12\" y=\"48\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Same student registered again</text>\n                <text id=\"sys2-sub\" x=\"12\" y=\"67\" font-size=\"11.5\" fill=\"#3f3f46\">Duplicated manual entry</text>\n              </g>\n\n              <!-- System 3: Finance -->\n              <g transform=\"translate(25, 205)\">\n                <rect width=\"235\" height=\"82\" rx=\"10\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2.2\"/>\n                <rect width=\"235\" height=\"26\" rx=\"8\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2\"/>\n                <text x=\"12\" y=\"18\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">3. FINANCE</text>\n                <text id=\"sys3-desc\" x=\"12\" y=\"48\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Payment status stored elsewhere</text>\n                <text id=\"sys3-sub\" x=\"12\" y=\"67\" font-size=\"11.5\" fill=\"#3f3f46\">Blocks timely registration checks</text>\n              </g>\n\n              <!-- System 4: Learning Platform -->\n              <g transform=\"translate(660, 205)\">\n                <rect width=\"235\" height=\"82\" rx=\"10\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2.2\"/>\n                <rect width=\"235\" height=\"26\" rx=\"8\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2\"/>\n                <text x=\"12\" y=\"18\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">4. LEARNING PLATFORM</text>\n                <text id=\"sys4-desc\" x=\"12\" y=\"48\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Course enrolment updates arrive late</text>\n                <text id=\"sys4-sub\" x=\"12\" y=\"67\" font-size=\"11.5\" fill=\"#3f3f46\">Students locked out of class portals</text>\n              </g>\n\n              <!-- System 5: Reporting -->\n              <g transform=\"translate(342, 14)\">\n                <rect width=\"236\" height=\"72\" rx=\"10\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2.2\"/>\n                <rect width=\"236\" height=\"24\" rx=\"8\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2\"/>\n                <text x=\"12\" y=\"16\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">5. EXECUTIVE REPORTING</text>\n                <text id=\"sys5-desc\" x=\"12\" y=\"43\" font-size=\"12\" font-weight=\"700\" fill=\"#be123c\">Numbers differ across departments</text>\n                <text id=\"sys5-sub\" x=\"12\" y=\"60\" font-size=\"11\" fill=\"#3f3f46\">Leaders cannot trust headcount reports</text>\n              </g>\n\n              <!-- Connectors -->\n              <line id=\"conn1\" x1=\"260\" y1=\"80\" x2=\"312\" y2=\"128\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\" marker-end=\"url(#arrow-red)\"/>\n              <line id=\"conn2\" x1=\"660\" y1=\"80\" x2=\"608\" y2=\"128\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\" marker-end=\"url(#arrow-red)\"/>\n              <line id=\"conn3\" x1=\"260\" y1=\"225\" x2=\"312\" y2=\"182\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\" marker-end=\"url(#arrow-red)\"/>\n              <line id=\"conn4\" x1=\"660\" y1=\"225\" x2=\"608\" y2=\"182\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\" marker-end=\"url(#arrow-red)\"/>\n              <line id=\"conn5\" x1=\"460\" y1=\"86\" x2=\"460\" y2=\"110\" stroke=\"#e11d48\" stroke-width=\"2.5\" stroke-dasharray=\"5 5\" marker-end=\"url(#arrow-red)\"/>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Three Structural Problems EA Solves (Slide 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Three Structural Problems EA Solves <span class=\"slide-ref\">slide 5</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>1 // Duplication</span></h4>\n              <p style=\"font-size: 0.87rem;\">Different departments independently buy or build similar systems (e.g., separate student contact databases in Admissions, Faculty, and Hostel offices), wasting budget and staff effort.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>2 // Disconnected Data</span></h4>\n              <p style=\"font-size: 0.87rem;\">Systems define, format, and store the same entity differently (e.g., “Active Student” means paid fees in Finance, but registered courses in Academic Records), causing conflicting reports.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Costly Change</span></h4>\n              <p style=\"font-size: 0.87rem;\">Because hidden dependencies exist, a small business policy change (like adjusting credit-hour rules) requires expensive, brittle modifications across multiple disconnected systems.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- The Unaligned IT Domino Effect (Slide 17) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Unaligned IT Domino Effect (Cause → Effect Chain) <span class=\"slide-ref\">slide 17</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\" style=\"background: #f4f4f5;\">\n              <h4><span>Step 1 // Local Decisions</span></h4>\n              <p style=\"font-size: 0.87rem;\">Departments choose software tools independently based only on their own immediate departmental needs.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>Step 2 // Enterprise Problems</span></h4>\n              <p style=\"font-size: 0.87rem;\">Duplicated records, incompatible platforms, extra licensing/maintenance cost, and slow change cycles emerge.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>Step 3 // Business Consequences</span></h4>\n              <p style=\"font-size: 0.87rem;\">Students suffer registration delays, staff waste hours re-entering data, and university leaders cannot trust reports.</p>\n            </div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Exam Takeaway &amp; Model Answer</span>\n            <p><strong>Core Principle:</strong> EA makes cross-system dependencies visible <strong>before</strong> local departmental decisions turn into expensive organisation-wide failures.</p>\n          </div>\n        </div>"
    },
    {
      "title": "What Is Enterprise Architecture? Think of a City Plan",
      "slides": "4 & 6",
      "html": "<!-- Definition & 3 Questions (Slide 4) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Definition of Enterprise Architecture <span class=\"slide-ref\">slide 4</span></div>\n          <div class=\"nb-callout lavender\">\n            <strong>Definition:</strong> Enterprise Architecture is a <strong>whole-organisation view</strong> of how business and technology fit together. It maps how <strong>business goals, processes, information, applications, and technology</strong> relate to one another—connecting organisational purpose with the systems that support it <span class=\"slide-ref\">slide 4</span>.\n          </div>\n\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Business Question</span></h4>\n              <p style=\"font-size: 0.88rem;\"><strong>“What are we trying to achieve?”</strong><br />Defines organisational strategy, goals, and core operational workflows.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>Info &amp; Systems Question</span></h4>\n              <p style=\"font-size: 0.88rem;\"><strong>“What information and applications are needed?”</strong><br />Defines required data entities and software capabilities.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Technology Question</span></h4>\n              <p style=\"font-size: 0.88rem;\"><strong>“What platforms support them?”</strong><br />Defines servers, cloud, networks, and security foundations.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Visual Analogy: City Planning vs Enterprise Architecture (Slide 6) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Visual Analogy: City Planning vs. Enterprise Planning <span class=\"slide-ref\">slide 6</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>City Planning vs. Enterprise Architecture (Slide 6)</span>\n              <span>Macro Coordination vs. Micro Implementation</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 250\" role=\"img\" aria-label=\"City plan compared to Enterprise Architecture\">\n              <!-- Left: City Plan -->\n              <rect x=\"15\" y=\"15\" width=\"415\" height=\"220\" rx=\"12\" fill=\"#fef9c3\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"35\" y=\"46\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">CITY PLANNING</text>\n              <text x=\"35\" y=\"68\" font-size=\"13\" font-weight=\"700\" fill=\"#3f3f46\">A city needs more than isolated buildings:</text>\n\n              <rect x=\"35\" y=\"84\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"47\" y=\"107\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">1. Land Use &amp; Zoning</text>\n\n              <rect x=\"230\" y=\"84\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"242\" y=\"107\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">2. Water &amp; Power Grid</text>\n\n              <rect x=\"35\" y=\"132\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"47\" y=\"155\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">3. Public Services</text>\n\n              <rect x=\"230\" y=\"132\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"242\" y=\"155\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">4. Roads &amp; Utilities</text>\n\n              <text x=\"35\" y=\"198\" font-size=\"12.5\" font-weight=\"700\" fill=\"#92400e\">Defines zoning &amp; utility rules—not how to lay every brick.</text>\n\n              <!-- Center Connector -->\n              <rect x=\"442\" y=\"95\" width=\"36\" height=\"60\" rx=\"8\" fill=\"#000000\"/>\n              <text x=\"460\" y=\"131\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"18\" fill=\"#ffffff\">≡</text>\n\n              <!-- Right: Enterprise Planning -->\n              <rect x=\"490\" y=\"15\" width=\"415\" height=\"220\" rx=\"12\" fill=\"#eeeeff\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"510\" y=\"46\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">ENTERPRISE ARCHITECTURE</text>\n              <text x=\"510\" y=\"68\" font-size=\"13\" font-weight=\"700\" fill=\"#3f3f46\">An enterprise needs four coordinated layers:</text>\n\n              <rect x=\"510\" y=\"84\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"522\" y=\"107\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">1. Business Processes</text>\n\n              <rect x=\"705\" y=\"84\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"717\" y=\"107\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">2. Shared Data</text>\n\n              <rect x=\"510\" y=\"132\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"522\" y=\"155\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">3. Applications</text>\n\n              <rect x=\"705\" y=\"132\" width=\"180\" height=\"36\" rx=\"7\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"717\" y=\"155\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">4. Infrastructure</text>\n\n              <text x=\"510\" y=\"198\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4338ca\">Guides coordination—does NOT prescribe every line of code.</text>\n            </svg>\n          </div>\n\n          <div class=\"nb-callout yellow\" style=\"margin-bottom: 0;\">\n            <strong>Boundary Rule <span class=\"slide-ref\">slides 4, 6</span>:</strong> EA is <strong>not</strong> just an IT network diagram, and it does <strong>not</strong> micromanage software developers by prescribing every line of code. It sets shared rules so individual systems fit together cleanly.\n          </div>\n        </div>"
    },
    {
      "title": "EA Frameworks: TOGAF vs. Zachman (and Domain Frameworks)",
      "slides": "7 & 8",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-callout yellow\">\n            <strong>Crucial Distinction <span class=\"slide-ref\">slide 7</span>:</strong> A framework is <strong>not</strong> the Enterprise Architecture itself—just as a recipe book is not the meal. A framework is a structured tool that helps teams organise <strong>how</strong> they build the architecture and <strong>what</strong> viewpoints they document.\n          </div>\n\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Comparison: Process-Oriented vs. Classification-Oriented Frameworks (Slide 8)</span>\n              <span>HOW vs. WHAT</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 265\" role=\"img\" aria-label=\"TOGAF versus Zachman framework comparison\">\n              <!-- Left Card: TOGAF -->\n              <rect x=\"15\" y=\"15\" width=\"430\" height=\"235\" rx=\"12\" fill=\"#ffe4e6\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <rect x=\"32\" y=\"30\" width=\"125\" height=\"28\" rx=\"6\" fill=\"#000000\"/>\n              <text x=\"94\" y=\"49\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"13.5\" fill=\"#ffffff\">TOGAF</text>\n              <text x=\"170\" y=\"49\" font-weight=\"700\" font-size=\"12\" fill=\"#9d174d\">PROCESS-ORIENTED (HOW)</text>\n\n              <text x=\"32\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">Core Mechanism: Architecture Development Method (ADM)</text>\n              <text x=\"32\" y=\"106\" font-size=\"12\" fill=\"#3f3f46\">Structures the step-by-step lifecycle of creating &amp; evolving EA.</text>\n\n              <!-- Cycle Pills -->\n              <rect x=\"32\" y=\"124\" width=\"90\" height=\"36\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"77\" y=\"147\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">1. Vision</text>\n\n              <text x=\"131\" y=\"147\" font-weight=\"700\" font-size=\"16\" fill=\"#0f0f0f\">→</text>\n\n              <rect x=\"148\" y=\"124\" width=\"115\" height=\"36\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"205\" y=\"147\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">2. Design Layers</text>\n\n              <text x=\"272\" y=\"147\" font-weight=\"700\" font-size=\"16\" fill=\"#0f0f0f\">→</text>\n\n              <rect x=\"288\" y=\"124\" width=\"138\" height=\"36\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"357\" y=\"147\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">3. Plan &amp; Govern</text>\n\n              <rect x=\"32\" y=\"178\" width=\"394\" height=\"52\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"45\" y=\"199\" font-weight=\"700\" font-size=\"11.5\" fill=\"#9d174d\">QUESTION IT ANSWERS:</text>\n              <text x=\"45\" y=\"218\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">“What steps and activities guide the architecture work?”</text>\n\n              <!-- Right Card: Zachman -->\n              <rect x=\"475\" y=\"15\" width=\"430\" height=\"235\" rx=\"12\" fill=\"#eeeeff\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <rect x=\"492\" y=\"30\" width=\"125\" height=\"28\" rx=\"6\" fill=\"#000000\"/>\n              <text x=\"554\" y=\"49\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"13.5\" fill=\"#ffffff\">ZACHMAN</text>\n              <text x=\"630\" y=\"49\" font-weight=\"700\" font-size=\"11.5\" fill=\"#3730a3\">CLASSIFICATION-ORIENTED (WHAT)</text>\n\n              <text x=\"492\" y=\"84\" font-size=\"13\" font-weight=\"700\" fill=\"#0f0f0f\">Core Mechanism: Structured Viewpoint Matrix</text>\n              <text x=\"492\" y=\"106\" font-size=\"12\" fill=\"#3f3f46\">Organises architectural descriptions across perspectives &amp; questions.</text>\n\n              <!-- Mini Grid -->\n              <g transform=\"translate(492, 122)\">\n                <rect x=\"0\" y=\"0\" width=\"128\" height=\"20\" fill=\"#000000\"/>\n                <text x=\"64\" y=\"14\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\">PERSPECTIVE</text>\n                <rect x=\"130\" y=\"0\" width=\"88\" height=\"20\" fill=\"#000000\"/>\n                <text x=\"174\" y=\"14\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\">WHAT (Data)</text>\n                <rect x=\"220\" y=\"0\" width=\"88\" height=\"20\" fill=\"#000000\"/>\n                <text x=\"264\" y=\"14\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\">HOW (Func)</text>\n                <rect x=\"310\" y=\"0\" width=\"84\" height=\"20\" fill=\"#000000\"/>\n                <text x=\"352\" y=\"14\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#ffffff\">WHO/WHERE</text>\n\n                <rect x=\"0\" y=\"22\" width=\"128\" height=\"20\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1\"/>\n                <text x=\"8\" y=\"36\" font-size=\"10.5\" font-weight=\"700\" fill=\"#0f0f0f\">Executive / Owner</text>\n                <rect x=\"130\" y=\"22\" width=\"88\" height=\"20\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1\"/>\n                <text x=\"174\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#3f3f46\">Business Entities</text>\n                <rect x=\"220\" y=\"22\" width=\"88\" height=\"20\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1\"/>\n                <text x=\"264\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#3f3f46\">Core Processes</text>\n                <rect x=\"310\" y=\"22\" width=\"84\" height=\"20\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"1\"/>\n                <text x=\"352\" y=\"36\" text-anchor=\"middle\" font-size=\"10\" fill=\"#3f3f46\">Roles / Sites</text>\n              </g>\n\n              <rect x=\"492\" y=\"178\" width=\"394\" height=\"52\" rx=\"8\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"505\" y=\"199\" font-weight=\"700\" font-size=\"11.5\" fill=\"#3730a3\">QUESTION IT ANSWERS:</text>\n              <text x=\"505\" y=\"218\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">“What aspects and viewpoints must be represented?”</text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Other Recognised Frameworks & Model Answer (Slides 7–8) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Other Recognised EA Frameworks <span class=\"slide-ref\">slide 7</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc; margin-bottom: 0.85rem;\">\n            <p style=\"font-size: 0.88rem; margin-bottom: 0.45rem;\">Besides TOGAF and Zachman, sector-specific frameworks are widely used in public and defence sectors:</p>\n            <ul class=\"nb-list\">\n              <li><strong>FEAF</strong> — Federal Enterprise Architecture Framework (government context).</li>\n              <li><strong>DoDAF</strong> — Department of Defense Architecture Framework (defence context).</li>\n              <li><strong>MODAF</strong> — Ministry of Defence Architecture Framework (defence context).</li>\n            </ul>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Model Exam Answer • “Distinguish TOGAF and Zachman (4 Marks)”</span>\n            <p><strong>1. TOGAF (Process-oriented):</strong> Focuses on <em>how</em> to develop and evolve an enterprise architecture using a structured sequence of steps known as the Architecture Development Method (ADM).</p>\n            <p><strong>2. Zachman (Classification-oriented):</strong> Focuses on <em>what</em> architectural descriptions must be captured, organising enterprise artefacts into a structured matrix of stakeholder viewpoints and questions.</p>\n          </div>\n        </div>"
    },
    {
      "title": "The Four Core EA Layers & How They Depend on One Another",
      "slides": "9–13",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-callout mint\">\n            <strong>Mental Model <span class=\"slide-ref\">slide 9</span>:</strong> The four layers are <strong>connected views of one organisation—not four independent IT projects</strong>. Strategy and purpose flow downward (Business → Data → Application → Technology), while operational capability flows upward (Technology supports Applications, which process Data to deliver Business outcomes).\n          </div>\n\n          <!-- 4-Layer Bidirectional Stack SVG -->\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>The Four-Layer Enterprise Architecture Stack (Slides 9–13)</span>\n              <span>Bidirectional Dependencies</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 315\" role=\"img\" aria-label=\"Four core Enterprise Architecture layers stack\">\n              <!-- Left Direction Arrow (Top-Down Purpose) -->\n              <rect x=\"18\" y=\"20\" width=\"122\" height=\"275\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"79\" y=\"50\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">PURPOSE &amp;</text>\n              <text x=\"79\" y=\"66\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">REQUIREMENTS</text>\n              <line x1=\"79\" y1=\"84\" x2=\"79\" y2=\"255\" stroke=\"#000000\" stroke-width=\"3\"/>\n              <polygon points=\"79,270 70,252 88,252\" fill=\"#000000\"/>\n              <text x=\"79\" y=\"286\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"10.5\" fill=\"#3f3f46\">TOP-DOWN</text>\n\n              <!-- Layer 1: Business -->\n              <rect x=\"160\" y=\"20\" width=\"600\" height=\"58\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"180\" y=\"45\" font-weight=\"700\" font-size=\"14.5\" fill=\"#0f0f0f\">1. BUSINESS ARCHITECTURE</text>\n              <text x=\"180\" y=\"65\" font-size=\"12.5\" font-weight=\"700\" fill=\"#065f46\">Goals, capabilities, workflows, roles &amp; accountability · “What must we do?”</text>\n\n              <!-- Layer 2: Data -->\n              <rect x=\"160\" y=\"92\" width=\"600\" height=\"58\" rx=\"10\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"180\" y=\"117\" font-weight=\"700\" font-size=\"14.5\" fill=\"#0f0f0f\">2. DATA ARCHITECTURE</text>\n              <text x=\"180\" y=\"137\" font-size=\"12.5\" font-weight=\"700\" fill=\"#7c2d12\">Definitions, meaning, ownership, source of truth &amp; flow · “Which data is trusted?”</text>\n\n              <!-- Layer 3: Application -->\n              <rect x=\"160\" y=\"164\" width=\"600\" height=\"58\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"180\" y=\"189\" font-weight=\"700\" font-size=\"14.5\" fill=\"#0f0f0f\">3. APPLICATION ARCHITECTURE</text>\n              <text x=\"180\" y=\"209\" font-size=\"12.5\" font-weight=\"700\" fill=\"#164e63\">Software systems, core functions &amp; interfaces/APIs · “Which systems interact?”</text>\n\n              <!-- Layer 4: Technology -->\n              <rect x=\"160\" y=\"236\" width=\"600\" height=\"58\" rx=\"10\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"180\" y=\"261\" font-weight=\"700\" font-size=\"14.5\" fill=\"#0f0f0f\">4. TECHNOLOGY ARCHITECTURE</text>\n              <text x=\"180\" y=\"281\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1e1b4b\">Hosting, cloud, networks, databases, devices &amp; security · “What runs the service?”</text>\n\n              <!-- Right Direction Arrow (Bottom-Up Support) -->\n              <rect x=\"780\" y=\"20\" width=\"122\" height=\"275\" rx=\"10\" fill=\"#f4f4f5\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"841\" y=\"50\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">EXECUTION &amp;</text>\n              <text x=\"841\" y=\"66\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">SUPPORT</text>\n              <line x1=\"841\" y1=\"255\" x2=\"841\" y2=\"95\" stroke=\"#000000\" stroke-width=\"3\"/>\n              <polygon points=\"841,80 832,98 850,98\" fill=\"#000000\"/>\n              <text x=\"841\" y=\"286\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"10.5\" fill=\"#3f3f46\">BOTTOM-UP</text>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Detailed 4 Layer Cards (Slides 10–13) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Deep Dive into Each Architectural Layer <span class=\"slide-ref\">slides 10–13</span></div>\n          <div class=\"nb-grid-2\">\n            <!-- Layer 1: Business -->\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>01 // Business Architecture</span> <span class=\"slide-ref\">slide 10</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Core Focus:</strong> Business goals, organisational capabilities, end-to-end processes, staff roles, and decision responsibilities.</li>\n                <li><strong>University Example:</strong> Mapping how a student moves cleanly from application → admission → enrolment → graduation, and who approves exceptions.</li>\n                <li><strong>Diagnostic Question:</strong> <em>“Are the processes clear and consistent before we automate them?”</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle:</strong> If you automate a confusing, broken business process, you simply make the confusion happen faster.\n              </div>\n            </div>\n\n            <!-- Layer 2: Data -->\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\">\n              <h4><span>02 // Data Architecture</span> <span class=\"slide-ref\">slide 11</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Core Focus:</strong> What information exists, what terms mean (shared semantics), who owns each dataset, and how data flows across units.</li>\n                <li><strong>University Example:</strong> Ensuring <code>student_id</code>, <code>programme_code</code>, and <code>payment_status</code> share identical definitions across Admissions, Finance, and Records.</li>\n                <li><strong>Diagnostic Question:</strong> <em>“Which system is the trusted source (authoritative source of truth) for each important data item?”</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle:</strong> Connecting two systems technically is not enough if they interpret the meaning of data differently.\n              </div>\n            </div>\n\n            <!-- Layer 3: Application -->\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>03 // Application Architecture</span> <span class=\"slide-ref\">slide 12</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Core Focus:</strong> What software applications are required, what each system is responsible for, and how they exchange data via interfaces.</li>\n                <li><strong>University Example:</strong> Admissions, Student Records, Finance, and the Learning Management System (LMS) automatically exchanging enrolment and fee updates.</li>\n                <li><strong>Diagnostic Question:</strong> <em>“Can systems share information without fragile duplication and manual staff re-entry?”</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle:</strong> The goal is a coherent, integrated set of applications—not necessarily replacing everything with one giant monolith.\n              </div>\n            </div>\n\n            <!-- Layer 4: Technology -->\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>04 // Technology Architecture</span> <span class=\"slide-ref\">slide 13</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Core Focus:</strong> Servers, hosting environments, networks, database engines, cloud platforms, end-user devices, and security foundations.</li>\n                <li><strong>University Example:</strong> Where student portals run, how campus and remote users authenticate securely, and how uptime is maintained during peak weeks.</li>\n                <li><strong>Diagnostic Question:</strong> <em>“Can the environment meet security, availability, performance, and future growth needs?”</em></li>\n              </ul>\n              <div class=\"nb-example\">\n                <strong>Key Principle:</strong> Choosing a cloud vendor or server stack is just one technical decision inside the wider four-layer architecture.\n              </div>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "One Change, Four Layers: Online Course Registration",
      "slides": "14 & 19",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-callout cyan\">\n            <strong>Scenario <span class=\"slide-ref\">slides 14 &amp; 19</span>:</strong> The university wants to replace manual form-based registration with <strong>one reliable online course-registration experience</strong>. Click each layer tab below to inspect what must be designed and how two layers depend directly on each other.\n          </div>\n\n          <!-- Interactive Layer Stepper -->\n          <div class=\"nb-reg-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"nb-reg-tab active\" data-registration-layer=\"0\">\n              <strong>1. Business Layer</strong>\n              <span>Rules, windows &amp; policies</span>\n            </button>\n            <button type=\"button\" class=\"nb-reg-tab\" data-registration-layer=\"1\">\n              <strong>2. Data Layer</strong>\n              <span>Accuracy &amp; single source</span>\n            </button>\n            <button type=\"button\" class=\"nb-reg-tab\" data-registration-layer=\"2\">\n              <strong>3. Application Layer</strong>\n              <span>Cross-system sync</span>\n            </button>\n            <button type=\"button\" class=\"nb-reg-tab\" data-registration-layer=\"3\">\n              <strong>4. Technology Layer</strong>\n              <span>Peak load &amp; security</span>\n            </button>\n          </div>\n\n          <div class=\"nb-reg-panel\" id=\"reg-panel\">\n            <!-- Populated by JS on load -->\n          </div>\n        </div>\n\n        <!-- Mini-Activity Solution Map SVG (Slide 19) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Mini-Activity: Explaining Cross-Layer Dependencies <span class=\"slide-ref\">slide 19</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Mini-Activity Solution Map: Cross-Layer Dependency Chain (Slide 19)</span>\n              <span>How to Explain a Layer Dependency in Exams</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 215\" role=\"img\" aria-label=\"Cross-layer dependency trace for online course registration\">\n              <defs>\n                <marker id=\"arr-dark\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Box 1 -->\n              <rect x=\"15\" y=\"25\" width=\"195\" height=\"115\" rx=\"10\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"28\" y=\"48\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">BUSINESS RULE</text>\n              <text x=\"28\" y=\"70\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Students cannot enrol</text>\n              <text x=\"28\" y=\"87\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">without passed prereqs</text>\n              <text x=\"28\" y=\"104\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">&amp; cleared fee holds.</text>\n\n              <line x1=\"210\" y1=\"82\" x2=\"242\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-dark)\"/>\n\n              <!-- Box 2 -->\n              <rect x=\"248\" y=\"25\" width=\"195\" height=\"115\" rx=\"10\" fill=\"#fdba74\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"261\" y=\"48\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">DATA NEEDED</text>\n              <text x=\"261\" y=\"70\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Trusted grade history,</text>\n              <text x=\"261\" y=\"87\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">live seat counts &amp;</text>\n              <text x=\"261\" y=\"104\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">fee-clearance flag.</text>\n\n              <line x1=\"443\" y1=\"82\" x2=\"475\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-dark)\"/>\n\n              <!-- Box 3 -->\n              <rect x=\"481\" y=\"25\" width=\"195\" height=\"115\" rx=\"10\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"494\" y=\"48\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">APP INTERACTION</text>\n              <text x=\"494\" y=\"70\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Registration API queries</text>\n              <text x=\"494\" y=\"87\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Student Records &amp;</text>\n              <text x=\"494\" y=\"104\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Finance in real time.</text>\n\n              <line x1=\"676\" y1=\"82\" x2=\"708\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#arr-dark)\"/>\n\n              <!-- Box 4 -->\n              <rect x=\"714\" y=\"25\" width=\"191\" height=\"115\" rx=\"10\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"727\" y=\"48\" font-weight=\"700\" font-size=\"12\" fill=\"#0f0f0f\">TECH CAPACITY</text>\n              <text x=\"727\" y=\"70\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">Auto-scaling servers &amp;</text>\n              <text x=\"727\" y=\"87\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">low-latency network</text>\n              <text x=\"727\" y=\"104\" font-size=\"12\" font-weight=\"700\" fill=\"#0f0f0f\">handle 9 AM traffic spike.</text>\n\n              <!-- Bottom Dependency Callout Bar -->\n              <rect x=\"15\" y=\"158\" width=\"890\" height=\"42\" rx=\"8\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"30\" y=\"184\" font-weight=\"700\" font-size=\"12.5\" fill=\"#0f0f0f\">\n                Example Dependency: Application ↔ Technology — Even if Registration &amp; Finance APIs integrate cleanly, insufficient server/network capacity at 9:00 AM causes timeouts and double-booked seats.\n              </text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "Business–IT Alignment & The Continuous Conversation",
      "slides": "15 & 16",
      "html": "<!-- Alignment Chain (Slide 15) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Alignment Means <span class=\"slide-ref\">slide 15</span></div>\n          <div class=\"nb-callout lavender\">\n            <strong>Alignment Rule:</strong> IT choices should exist to advance organisational goals—never just to chase trendy software. True alignment means you can trace any IT decision directly to a <strong>business goal</strong> and prove it worked through <strong>measurable evidence of value</strong> <span class=\"slide-ref\">slide 15</span>.\n          </div>\n\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>1 // Business Goal</span></h4>\n              <p style=\"font-size: 0.87rem;\">Improve the student registration experience and reduce avoidable administrative delays during enrolment week.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>2 // IT Response</span></h4>\n              <p style=\"font-size: 0.87rem;\">Connect registration, course catalogue data, and finance payment status, while provisioning infrastructure for peak traffic.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>3 // Evidence of Value</span></h4>\n              <p style=\"font-size: 0.87rem;\">Fewer manual staff corrections, real-time status visibility for students, and a faster, more reliable registration cycle.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- 4-Stage Continuous Feedback Loop SVG (Slide 16) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Alignment Is a Continuous Conversation <span class=\"slide-ref\">slide 16</span></div>\n          <div class=\"nb-diagram\">\n            <div class=\"nb-diagram-caption\">\n              <span>Alignment Is a Continuous Conversation — Not a One-Time Sign-Off (Slide 16)</span>\n              <span>4-Stage Feedback Loop</span>\n            </div>\n\n            <svg viewBox=\"0 0 920 220\" role=\"img\" aria-label=\"Four-stage continuous business-IT alignment loop\">\n              <defs>\n                <marker id=\"loop-arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n                  <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#000000\" />\n                </marker>\n              </defs>\n\n              <!-- Stage 1 -->\n              <rect x=\"20\" y=\"30\" width=\"190\" height=\"105\" rx=\"12\" fill=\"#86efac\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"35\" y=\"55\" font-weight=\"700\" font-size=\"11.5\" fill=\"#065f46\">STAGE 01</text>\n              <text x=\"35\" y=\"77\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">Business Goals</text>\n              <text x=\"35\" y=\"100\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">What outcome matters</text>\n              <text x=\"35\" y=\"117\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">to the organisation?</text>\n\n              <line x1=\"210\" y1=\"82\" x2=\"245\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#loop-arr)\"/>\n\n              <!-- Stage 2 -->\n              <rect x=\"252\" y=\"30\" width=\"190\" height=\"105\" rx=\"12\" fill=\"#b8b8ff\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"267\" y=\"55\" font-weight=\"700\" font-size=\"11.5\" fill=\"#1e1b4b\">STAGE 02</text>\n              <text x=\"267\" y=\"77\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">Architecture</text>\n              <text x=\"267\" y=\"100\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">What capabilities, data</text>\n              <text x=\"267\" y=\"117\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">&amp; systems are needed?</text>\n\n              <line x1=\"442\" y1=\"82\" x2=\"477\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#loop-arr)\"/>\n\n              <!-- Stage 3 -->\n              <rect x=\"484\" y=\"30\" width=\"190\" height=\"105\" rx=\"12\" fill=\"#7dd3fc\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"499\" y=\"55\" font-weight=\"700\" font-size=\"11.5\" fill=\"#164e63\">STAGE 03</text>\n              <text x=\"499\" y=\"77\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">Delivery</text>\n              <text x=\"499\" y=\"100\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Build, integrate, test,</text>\n              <text x=\"499\" y=\"117\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">and deploy solutions.</text>\n\n              <line x1=\"674\" y1=\"82\" x2=\"709\" y2=\"82\" stroke=\"#000000\" stroke-width=\"2.5\" marker-end=\"url(#loop-arr)\"/>\n\n              <!-- Stage 4 -->\n              <rect x=\"716\" y=\"30\" width=\"184\" height=\"105\" rx=\"12\" fill=\"#fde047\" stroke=\"#000000\" stroke-width=\"2.5\"/>\n              <text x=\"731\" y=\"55\" font-weight=\"700\" font-size=\"11.5\" fill=\"#713f12\">STAGE 04</text>\n              <text x=\"731\" y=\"77\" font-weight=\"700\" font-size=\"15.5\" fill=\"#0f0f0f\">Feedback</text>\n              <text x=\"731\" y=\"100\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">Did the solution actually</text>\n              <text x=\"731\" y=\"117\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f0f0f\">deliver business value?</text>\n\n              <!-- Return Feedback Path -->\n              <path d=\"M 808 135 L 808 182 L 115 182 L 115 142\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\" marker-end=\"url(#loop-arr)\"/>\n              <rect x=\"265\" y=\"166\" width=\"390\" height=\"30\" rx=\"6\" fill=\"#ffffff\" stroke=\"#000000\" stroke-width=\"2\"/>\n              <text x=\"460\" y=\"186\" text-anchor=\"middle\" font-weight=\"700\" font-size=\"11.5\" fill=\"#0f0f0f\">\n                Feedback reshapes priorities &amp; architecture continuously\n              </text>\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "How EA Guides Technology Choices",
      "slides": "18",
      "html": "<div class=\"nb-block\">\n          <div class=\"nb-callout cyan\">\n            <strong>Decision Rule <span class=\"slide-ref\">slide 18</span>:</strong> A popular or hyped technology is <strong>not automatically the right choice</strong> for an enterprise. EA forces decision-makers to evaluate any new software, platform, or cloud tool across three balanced dimensions instead of buying based on vendor hype alone.\n          </div>\n\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.9rem;\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>1 // Business Fit</span> <span class=\"slide-ref\">slide 18</span></h4>\n              <ul class=\"nb-list\">\n                <li>Does it support the required business capabilities and daily workflows?</li>\n                <li>Does it fit actual user needs (students, lecturers, admin staff)?</li>\n                <li>Does it align with the organisation’s long-term strategic direction?</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>2 // Cost &amp; Lifecycle</span> <span class=\"slide-ref\">slide 18</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">Look beyond the initial purchase sticker price to total lifecycle cost:</p>\n              <ul class=\"nb-list\">\n                <li><strong>Acquisition</strong> (licenses / subscriptions)</li>\n                <li><strong>Integration</strong> (connecting to existing apps)</li>\n                <li><strong>Maintenance &amp; Support</strong></li>\n                <li><strong>Staff Training</strong></li>\n                <li><strong>Exit Costs</strong> (migrating off later)</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Technical &amp; Org Fit</span> <span class=\"slide-ref\">slide 18</span></h4>\n              <ul class=\"nb-list\">\n                <li>Can it integrate cleanly with current systems and data formats?</li>\n                <li>Does the internal IT team have the skills to maintain it?</li>\n                <li>Are vendor support, reliability, and security controls adequate?</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-callout yellow\" style=\"margin-bottom: 0;\">\n            <strong>Balancing Act:</strong> Sound architecture selection balances <strong>business value, total lifecycle cost, operational risk, and fit with the wider architecture</strong>.\n          </div>\n        </div>"
    },
    {
      "title": "Three Core Takeaways, Exit Question Practice & Exam Formulas",
      "slides": "20 & 21",
      "html": "<!-- Three Core Takeaways (Slide 20) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Three Ideas to Take Away <span class=\"slide-ref\">slide 20</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>1 // EA Gives the Whole View</span></h4>\n              <p style=\"font-size: 0.88rem;\">It connects business goals, processes, information, applications, and technology into one coherent picture—never documentation for its own sake.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>2 // Layers Depend on Each Other</span></h4>\n              <p style=\"font-size: 0.88rem;\">A change in one layer (such as a new policy or platform) creates ripple requirements across the other three layers.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Alignment Is About Value</span></h4>\n              <p style=\"font-size: 0.88rem;\">Every IT decision must be traceable to a business goal and continuously verified through operational feedback.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Interactive Exit Question Box (Slide 21) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Exit Question Challenge <span class=\"slide-ref\">slide 21</span> <span class=\"nb-tag yellow\">Constraint: ONE SENTENCE • ONE CLEAR REASON</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <p style=\"font-size: 0.92rem; font-weight: 700; margin-bottom: 0.85rem;\">\n              “A university buys a new learning platform, but it cannot share enrolment data with the student-record system. Which EA layer or layers should have been considered—and how could EA have helped?”\n            </p>\n\n            <button type=\"button\" class=\"nb-btn\" id=\"reveal-exit-btn\" data-exit-answer aria-expanded=\"false\" aria-controls=\"exit-answer-drawer\">Reveal Model 1-Sentence Answer &amp; Breakdown</button>\n\n            <div class=\"nb-answer-drawer\" id=\"exit-answer-drawer\">\n              <span class=\"nb-answer-title\">Exam-Ready One-Sentence Answer</span>\n              <div class=\"nb-one-sentence\">\n                The university should have considered the Application and Data layers before purchasing the platform, because Enterprise Architecture would have defined shared student-enrolment data standards and required system integration interfaces upfront so the two systems could exchange data automatically.\n              </div>\n\n              <p style=\"font-weight: 700; margin-bottom: 0.4rem;\">Why Both Layers Matter Here:</p>\n              <ul class=\"nb-list\">\n                <li><strong>Application Architecture <span class=\"slide-ref\">slide 12</span>:</strong> Ensures new software is evaluated for how it interacts and integrates (via APIs/interfaces) with the existing Student Record system rather than operating as an isolated silo.</li>\n                <li><strong>Data Architecture <span class=\"slide-ref\">slide 11</span>:</strong> Establishes consistent definitions, formats, and ownership for enrolment records so both systems interpret student and course data the exact same way.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Structured Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Formula A // 4-Mark Short Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Explain two EA layers / problems / framework differences...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Name layer/concept + state its core focus + give a concrete scenario impact.</li>\n                <li><strong>Point 2 (2 marks):</strong> Name distinct second layer/concept + state its core focus + give a concrete scenario impact.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Formula B // 6–10 Mark Cross-Layer Case Studies</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Analyse a proposed system change across EA layers...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Business:</strong> Clarify rules, workflows, and roles before automating.</li>\n                <li><strong>2. Data:</strong> Identify trusted source of truth and consistent definitions.</li>\n                <li><strong>3. Application &amp; Tech:</strong> Specify system interfaces + peak capacity/security needs.</li>\n                <li><strong>4. Alignment Proof:</strong> Trace choice to business goal and measurable feedback metric.</li>\n              </ul>\n            </div>\n          </div>\n        </div>"
    }
  ],
  "essays": [
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 8,
      "slides": "2–5",
      "question": "Define Enterprise Architecture and explain why an organisation needs it.",
      "points": [
        "Definition of EA",
        "Relationships across five areas",
        "Duplicate systems and disconnected data",
        "Costly change and coordinated decisions"
      ],
      "answer": "Enterprise Architecture (EA) is a whole-organisation view of how business goals, processes, information, applications and technology relate to one another. It provides context for decisions that affect more than one department. A university may operate admissions, student-record, finance and learning systems that work separately but fail to communicate. This can lead to duplicate data entry, inconsistent information and slow changes. EA makes these dependencies visible so technology decisions support a shared organisational purpose. Therefore, its value is not simply creating diagrams; it helps the organisation coordinate investments, avoid unnecessary inconsistency and provide a more reliable student service."
    },
    {
      "topic": "Foundations",
      "kind": "Analyse",
      "marks": 10,
      "slides": "2, 4–5",
      "question": "Five university applications work independently, but students still experience delays. Analyse the enterprise-level problem.",
      "points": [
        "Identify disconnected business processes",
        "Duplication and inconsistent data",
        "Application integration needs",
        "Operational consequences",
        "How EA helps"
      ],
      "answer": "The situation illustrates an enterprise coordination problem rather than necessarily five defective applications. Admissions, student records, finance, enrolment and reporting may each fulfil their local functions but maintain separate or inconsistent information. Staff then repeat data entry, students experience delayed course updates, and leaders receive reports that do not agree. EA would investigate the complete student journey, clarify shared definitions and determine how applications should exchange information. It would also ensure the supporting technology can handle the intended services. By making these cross-department dependencies visible, the university can address the cause of the delays rather than buying yet another isolated application."
    },
    {
      "topic": "Foundations",
      "kind": "Compare",
      "marks": 8,
      "slides": "4–5",
      "question": "Differentiate a whole-organisation architecture from a diagram of a single application.",
      "points": [
        "EA covers organisational outcomes",
        "Includes multiple systems and processes",
        "Single-app scope is narrower",
        "University example"
      ],
      "answer": "A diagram of a single application describes the components and interactions within that application. It may explain its database, interfaces or services but does not necessarily explain how it supports the organisation as a whole. Enterprise Architecture is broader because it links business goals, people and processes with information, applications and infrastructure across departments. For example, an online-registration portal diagram may show the login page and course-selection service. EA additionally asks whether student eligibility rules are consistent, which system owns enrolment data, how finance receives updates and whether users obtain a reliable service. These enterprise-level questions cannot be answered by a portal diagram alone."
    },
    {
      "topic": "Frameworks",
      "kind": "Explain",
      "marks": 8,
      "slides": "7–8",
      "question": "Explain what an EA framework is and why a framework is not the architecture itself.",
      "points": [
        "Framework purpose",
        "Organises process or views",
        "Organisation-specific decisions still required",
        "Example"
      ],
      "answer": "An Enterprise Architecture framework provides a structure for developing or describing architecture. It helps practitioners organise activities, viewpoints and documents so the work is understandable and repeatable. However, a framework is not the finished architecture because it does not automatically supply the organisation's actual goals, data meanings, applications or decisions. For example, a university may use a framework to guide an architecture assessment, but it still has to discover registration problems and choose how records should be shared. The distinction matters because following a framework mechanically is not a substitute for understanding real organisational needs."
    },
    {
      "topic": "Frameworks",
      "kind": "Compare",
      "marks": 8,
      "slides": "7–8",
      "question": "Compare the different emphases of TOGAF and Zachman.",
      "points": [
        "TOGAF process-oriented",
        "ADM",
        "Zachman classification-oriented",
        "Question each answers"
      ],
      "answer": "TOGAF and Zachman are both Enterprise Architecture frameworks, but the lecture emphasises different purposes. TOGAF is process-oriented: its Architecture Development Method helps teams structure the steps and activities involved in developing and evolving architecture. It asks how architecture work should proceed. Zachman is classification-oriented: it helps organise descriptions of an enterprise from different aspects and viewpoints. It asks which aspects need to be represented. A university could use TOGAF to guide an architecture initiative while using a classification approach to check whether important views have been considered. The lecture introduces their purposes; it does not require detailed mechanics of either framework."
    },
    {
      "topic": "Frameworks",
      "kind": "Identify",
      "marks": 6,
      "slides": "7",
      "question": "Identify three other frameworks named in the lecture and explain their relevance at the level presented.",
      "points": [
        "FEAF",
        "DoDAF",
        "MODAF",
        "Government/defence association"
      ],
      "answer": "The lecture names FEAF, DoDAF and MODAF as additional examples of Enterprise Architecture frameworks. It associates them with government or defence contexts. Their presence shows that architectural approaches vary according to organisational needs and environments. They should not be treated as finished architectures, because a framework is only a structure that assists the work. The slides do not explain each framework’s full processes or detailed components, so an answer grounded in this lecture should name them correctly and limit the comparison to the stated contexts."
    },
    {
      "topic": "Layers",
      "kind": "Explain",
      "marks": 10,
      "slides": "9–14",
      "question": "Define all four EA layers and provide one university example for each.",
      "points": [
        "Business",
        "Data",
        "Application",
        "Technology",
        "Cross-layer dependency"
      ],
      "answer": "Business architecture describes goals, capabilities, processes and responsibilities, such as the registration rules determining whether a student may enrol. Data architecture concerns information, meaning, ownership and sharing, such as consistent student IDs, prerequisites and payment status. Application architecture concerns the systems that support the process and their interactions, such as a registration portal exchanging updates with student records and finance. Technology architecture covers hosting, networks, databases, devices and security foundations needed for dependable operation. These are not four unrelated diagrams. If an online-registration process changes, the information, software interfaces and infrastructure may all need to change so the complete service works."
    },
    {
      "topic": "Layers",
      "kind": "Compare",
      "marks": 8,
      "slides": "10–11",
      "question": "Differentiate business architecture from data architecture using registration as an example.",
      "points": [
        "Business process and ownership",
        "Data definition and ownership",
        "Registration example for both",
        "Interdependence"
      ],
      "answer": "Business architecture identifies what the university needs to do and how people and processes are organised. It asks who approves registration, what prerequisites apply and which office handles exceptions. Data architecture instead asks what information those activities require, what it means and who is responsible for keeping it accurate. It might define enrolment status and specify the trusted student-record source. Both layers must agree: a registration rule cannot be applied consistently if the supporting data is unreliable, while accurate data alone will not solve unclear responsibility for decisions. The business layer defines the workflow; the data layer supports that workflow with trustworthy information."
    },
    {
      "topic": "Layers",
      "kind": "Compare",
      "marks": 8,
      "slides": "11–13",
      "question": "Differentiate application architecture from technology architecture.",
      "points": [
        "Application functionality and connections",
        "Technology hosting and foundations",
        "University example",
        "Cross-layer quality concerns"
      ],
      "answer": "Application architecture describes which software applications support business capabilities and how they communicate. For example, it determines how the registration portal, student-record system and finance system exchange course and payment updates. Technology architecture describes the infrastructure that enables those applications to run, such as networks, hosting, databases, access controls and security foundations. A strong registration system requires both: its interfaces must deliver correct information, and its infrastructure must cope with peak demand and security requirements. Buying faster servers will not fix a missing application interface, while correct interfaces alone cannot compensate for unavailable infrastructure."
    },
    {
      "topic": "Layers",
      "kind": "Analyse",
      "marks": 10,
      "slides": "10–14",
      "question": "Analyse an online course-registration proposal from all four architectural layers.",
      "points": [
        "Business registration period/rules",
        "Data accuracy",
        "Application exchange",
        "Technology peak capacity",
        "Explain links"
      ],
      "answer": "The university should first examine business architecture by agreeing registration periods, prerequisites, seat limits and responsibility for resolving exceptions. Data architecture must ensure the student record, course offering, prerequisites and available seats are accurate and consistently defined. Application architecture then specifies how the registration portal, student system and finance system exchange relevant updates. Technology architecture must provide secure access and enough hosting and network capacity when many students register simultaneously. These layers depend on one another: a correct interface is not useful if the payment status has a different meaning in two systems. Therefore, deployment should be assessed as a coordinated enterprise change, not just completion of a portal."
    },
    {
      "topic": "Layers",
      "kind": "Apply",
      "marks": 8,
      "slides": "10, 14",
      "question": "Explain why automating an unclear registration process might make matters worse.",
      "points": [
        "Business processes precede automation",
        "Unclear responsibilities/rules",
        "Errors propagate faster",
        "Recommended action"
      ],
      "answer": "Automating a registration process can make an existing problem faster and more widespread if the process itself is unclear. For example, departments may apply conflicting prerequisite rules or disagree about who can approve a late enrolment. A new portal would then reproduce these inconsistencies automatically, potentially generating more errors and complaints. Business architecture should therefore clarify workflows, responsibilities and exceptions before development. After agreeing these rules, data architecture can define the necessary information and applications can implement the agreed process. This follows the lecture’s warning that automating confusion does not automatically create improvement."
    },
    {
      "topic": "Data",
      "kind": "Explain",
      "marks": 8,
      "slides": "11, 14",
      "question": "Explain the meaning of a trusted or authoritative data source in Enterprise Architecture.",
      "points": [
        "Data meanings",
        "Ownership",
        "Single trusted reference",
        "Example",
        "Why it matters"
      ],
      "answer": "A trusted or authoritative data source is the system or owner recognised as responsible for the correct value of a particular important data item. In university systems, the student-record system may be responsible for student status while finance confirms whether payment has been received. Data architecture establishes these responsibilities and common definitions so different applications do not independently invent conflicting values. Without an agreed source, one department may report that a student is enrolled while another shows the status as pending. Defining authority helps other applications exchange and interpret the same information consistently, reducing duplicate corrections and unreliable reporting."
    },
    {
      "topic": "Data",
      "kind": "Analyse",
      "marks": 10,
      "slides": "11–12, 17",
      "question": "A learning platform receives enrolment updates late and displays the wrong student list. Analyse the EA issues.",
      "points": [
        "Data quality/semantics",
        "Application exchange",
        "Business impact",
        "Responsibility",
        "Mitigation"
      ],
      "answer": "The university should examine both data and application architecture. The data layer must establish which system maintains enrolment status and which identifiers and definitions are shared with the learning platform. The application layer must establish a reliable method and timing for exchanging approved enrolment changes. These issues have business consequences because students may lose access to learning materials, lecturers may use outdated class lists and staff must make manual corrections. The organisation should agree data ownership, define the update interface and test how changes are reconciled. EA helps expose the dependencies before the new learning platform is purchased or released."
    },
    {
      "topic": "Data",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "11, 21",
      "question": "A vendor promises “easy integration” but cannot explain how its platform handles student IDs or payment status. Evaluate the claim.",
      "points": [
        "Vendor claim insufficient",
        "Data semantics/authority",
        "Application interface requirements",
        "Testing and conditional decision"
      ],
      "answer": "The vendor's statement is insufficient because technical connectivity does not establish correct information exchange. Data architecture must define student identifiers, payment-status meanings and their trusted sources. Application architecture must specify how the platform reads or updates those values, including the timing and expected behaviour of an interface. If the vendor cannot explain these requirements, the university risks duplicate students or incorrect eligibility decisions. I would ask for documented data mappings and integration capabilities, then test representative registration scenarios before approving the purchase. This is an Enterprise Architecture decision because the choice affects several systems and the reliability of the entire student service."
    },
    {
      "topic": "Technology",
      "kind": "Explain",
      "marks": 8,
      "slides": "13–14",
      "question": "Explain the considerations covered by technology architecture for a university registration system.",
      "points": [
        "Hosting/network/database",
        "Security/access",
        "Availability and performance",
        "Peak demand",
        "Fit with rest of EA"
      ],
      "answer": "Technology architecture considers the infrastructure and operational foundations that allow applications to function reliably. It includes hosting, networks, databases, devices and security. For online registration, students need dependable access and the system must support high traffic at the beginning of the registration period. Architects should therefore examine availability, performance, security and future growth, not simply choose a fashionable cloud provider. The technology must support the application integrations and the required student experience. A technically powerful platform may still be inappropriate if it is difficult for the university to operate, support or integrate with existing systems."
    },
    {
      "topic": "Technology",
      "kind": "Analyse",
      "marks": 10,
      "slides": "13–14",
      "question": "The registration portal works during testing but fails when all students log in at once. Explain the affected EA layers.",
      "points": [
        "Technology capacity",
        "Business peak process",
        "Application behaviour",
        "Data integrity",
        "Remediation"
      ],
      "answer": "The immediate problem concerns technology architecture because hosting, network capacity and operational availability may be inadequate for peak registration demand. However, the necessary capacity follows from business architecture: the university knows that students register during a limited period and compete for available seats. Application architecture may also need to control simultaneous requests and ensure that registration and finance updates are handled reliably. Data architecture must protect accurate seat availability and enrolment status during failures. I would review the peak-load requirements, test the end-to-end service under expected demand and update both infrastructure and application design as necessary. EA shows why the failure cannot be assessed by looking at servers alone."
    },
    {
      "topic": "Alignment",
      "kind": "Define",
      "marks": 8,
      "slides": "15",
      "question": "Explain business–IT alignment using a goal, an IT response and evidence of value.",
      "points": [
        "Definition of alignment",
        "Business goal",
        "IT response",
        "Value evidence"
      ],
      "answer": "Business–IT alignment means that technology decisions should support the organisation's goals rather than exist only as IT projects. For a university, the business goal may be to improve registration and reduce avoidable delays. An aligned IT response would connect registration, course information and payment status through suitable applications, while also planning for busy periods. Evidence of value would include fewer manual corrections, clear enrolment status and a more reliable process. This answer is stronger than simply saying that the university should buy a portal because it explains how the proposed technology contributes to a desired organisational outcome."
    },
    {
      "topic": "Alignment",
      "kind": "Explain",
      "marks": 10,
      "slides": "15–16",
      "question": "Explain why business–IT alignment is a continuous process.",
      "points": [
        "Business goals",
        "Architecture choices",
        "Delivery",
        "Feedback",
        "Adaptation"
      ],
      "answer": "The lecture presents business–IT alignment as a continuous cycle of business goals, architecture, delivery and feedback. First, the university defines what matters, such as reducing registration errors. Next, architecture identifies the processes, information and systems necessary to achieve it. The university then develops, integrates and deploys the chosen solution. Finally, feedback is used to determine whether the expected value was delivered. If the new service creates difficulties or the university changes its policies, architecture and priorities can be revised. Alignment is therefore not a one-time sign-off; it is an ongoing relationship between strategy, implementation and measured outcomes."
    },
    {
      "topic": "Alignment",
      "kind": "Analyse",
      "marks": 10,
      "slides": "15–17",
      "question": "Departments independently buy new tools. Analyse the business and IT consequences of poor alignment.",
      "points": [
        "Local decision-making",
        "Duplicate/isolated applications",
        "Information inconsistencies",
        "Costs and delays",
        "Enterprise coordination"
      ],
      "answer": "Independent purchases may satisfy immediate departmental needs but cause enterprise-level problems. Different departments may acquire overlapping applications, store student information with different definitions and choose tools that cannot exchange information. Staff then repeat work to reconcile data, students face delays and management cannot trust reports. Costs increase because integration and future changes become more difficult. The solution is not necessarily to ban local initiatives. EA provides a common view of business objectives and technology dependencies so each purchase can be assessed for fit, cost, compatibility and organisational value before it is approved."
    },
    {
      "topic": "Alignment",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "15–18",
      "question": "A university wants to replace its student system because a new platform is popular. Evaluate the decision using EA.",
      "points": [
        "Business fit",
        "Full lifecycle cost",
        "Integration/security/support",
        "Alternative and evidence",
        "Conditional recommendation"
      ],
      "answer": "Popularity is not a sufficient reason to replace an enterprise system. EA requires the university to ask which business capability or outcome needs improvement and whether the new platform can deliver it. The assessment should include acquisition, integration, maintenance, training and exit costs. It should also consider compatibility with finance and learning systems, data ownership, security, availability and the staff skills needed for continued operation. If the existing system can meet the business need through a smaller change, replacement may be unnecessary. I would recommend adoption only when the expected benefits, technical fit and lifecycle implications are demonstrated clearly enough to justify the risk."
    },
    {
      "topic": "Alignment",
      "kind": "Apply",
      "marks": 8,
      "slides": "15–16",
      "question": "Suggest three kinds of evidence that an EA-aligned registration solution is valuable.",
      "points": [
        "Operational efficiency indicator",
        "Data quality indicator",
        "User/service indicator",
        "Relate indicators to business goals"
      ],
      "answer": "One kind of evidence is operational efficiency, such as fewer manual corrections or a reduction in time needed to complete registration. A second is information quality, such as fewer disagreements between finance and student-record enrolment status. A third is user and service quality, such as clearer status information and fewer failed registrations during busy periods. These indicators matter because they relate directly to the university's stated business goal of improving the student registration experience. Technical implementation alone cannot establish alignment; the organisation should collect feedback and compare actual results with its expected outcomes."
    },
    {
      "topic": "Selection",
      "kind": "Explain",
      "marks": 10,
      "slides": "18",
      "question": "Explain the three groups of considerations used by EA to guide technology choices.",
      "points": [
        "Business fit",
        "Cost and lifecycle",
        "Technical/organisational fit",
        "Balance all",
        "Practical example"
      ],
      "answer": "Enterprise Architecture guides technology selection through business fit, cost and lifecycle, and technical and organisational fit. Business fit asks whether a technology supports the university’s users, required capabilities and strategy. Cost and lifecycle consider acquisition, integration, maintenance, training and eventual replacement or exit. Technical and organisational fit examines compatibility, security, support and staff skills. These questions must be balanced rather than answered independently. For example, a registration platform may be feature-rich but unsuitable if it cannot connect to student records or if the university cannot maintain it. EA gives a defensible basis for selecting a technology rather than choosing what is currently popular."
    },
    {
      "topic": "Selection",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "18",
      "question": "Compare two proposed registration platforms using EA criteria rather than their advertising claims.",
      "points": [
        "Functional/business outcome",
        "Total costs",
        "Integration/data",
        "Security/operability",
        "Decision method"
      ],
      "answer": "I would first identify the university's actual registration goals and compare how each platform meets the necessary business capabilities. Next, I would examine the complete costs, including acquisition, integration with finance and student records, training, maintenance and exit. I would also require evidence that each option supports agreed student-data definitions and reliable application interfaces. Security, peak performance, availability and ongoing support would be reviewed. The better option is not automatically the one with the largest feature list or the cheapest purchase price. It is the option that provides the strongest balance of organisational value, manageable risk, interoperability and sustainable lifecycle cost."
    },
    {
      "topic": "Selection",
      "kind": "Analyse",
      "marks": 8,
      "slides": "17–18",
      "question": "Explain how EA can prevent a local software decision from becoming an enterprise-wide problem.",
      "points": [
        "See dependencies early",
        "Cross-layer assessment",
        "Business and data concerns",
        "Procurement checkpoint"
      ],
      "answer": "When a department purchases software independently, it may overlook systems used by other departments. For instance, a faculty could choose a learning platform that cannot accept the university's enrolment identifiers. EA reveals this dependency by examining the shared business process, data requirements, application interfaces and technology environment before a commitment is made. It also evaluates total costs and support needs. An enterprise review can therefore identify changes that would otherwise become expensive after deployment. This prevents local convenience from creating organisation-wide duplication, inconsistent reporting and delayed services."
    },
    {
      "topic": "Cases",
      "kind": "Analyse",
      "marks": 12,
      "slides": "2, 10–18",
      "question": "Design a cross-layer response to delayed course-enrolment updates at a university.",
      "points": [
        "Map student business flow",
        "Agree authoritative data",
        "Design applications/interfaces",
        "Technology reliability",
        "Metrics and governance"
      ],
      "answer": "A cross-layer response starts by mapping the student journey and identifying when an approved enrolment must appear in the learning platform. The university should define responsible offices and the process for handling changes or exceptions. Data architecture must establish the authoritative enrolment record, agreed student identifiers and consistent status meanings. Application architecture should define the exchange between the registration system and learning platform and test the handling of updates. Technology architecture must provide secure and reliable hosting and connectivity. Finally, the organisation should monitor update delays, failed transactions and correction requests to judge whether the change has improved service. The solution is therefore a coordinated architecture change rather than simply buying a new interface."
    },
    {
      "topic": "Cases",
      "kind": "Apply",
      "marks": 10,
      "slides": "14–16",
      "question": "Explain how a prerequisite-rule change can affect all four architectural layers.",
      "points": [
        "Business change",
        "Data needs",
        "Application rules/exchange",
        "Technology operational needs",
        "Test dependencies"
      ],
      "answer": "At the business layer, the university must define the revised prerequisite policy and specify who can authorise exceptions. The data layer must maintain accurate course-completion and eligibility information using agreed meanings and trusted records. The application layer must enforce the updated rule in the registration process and ensure related systems receive consistent results. The technology layer must continue supporting secure access and reliable performance when the new rule is applied, especially during peak registration. Because the change crosses layers, testing only the registration screen is insufficient. EA would identify these dependencies and help coordinate a consistent release."
    },
    {
      "topic": "Cases",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "21",
      "question": "Answer the lecture exit question: a new learning platform cannot share enrolment data with student records. How could EA have helped?",
      "points": [
        "Application layer",
        "Data layer",
        "Early requirements and procurement",
        "Cross-system benefit"
      ],
      "answer": "The main affected layers are application architecture and data architecture. Application architecture should have identified the need for the learning platform to exchange enrolment updates with the student-record system and required suitable interfaces. Data architecture should have clarified common student identifiers, enrolment-status definitions and the authoritative source of this information. By evaluating these requirements before the platform was purchased, EA could have exposed an integration gap and guided either the selection of a compatible product or a planned interface solution. The wider benefit would be fewer delayed updates, less manual correction and more reliable access to learning services."
    },
    {
      "topic": "Cases",
      "kind": "Discuss",
      "marks": 12,
      "slides": "2, 14–18",
      "question": "Discuss whether buying a single new campus platform would automatically solve the five-system university problem.",
      "points": [
        "New software not equal alignment",
        "Process and ownership",
        "Data standards",
        "Integration and infrastructure",
        "Measure value"
      ],
      "answer": "Buying a new campus platform may reduce the number of separate applications, but it does not automatically solve an enterprise coordination problem. The university must first agree how student registration, payments, enrolment and reporting should work and who owns each decision. It must then define shared data so that status and identifiers have consistent meanings. Application architecture should determine which functions can be combined and which still require controlled integration. Technology architecture should consider security, availability and performance. The change should be assessed against business outcomes such as fewer duplicate entries and clearer information. A successful enterprise solution depends on coordinated decisions, not merely a larger product purchase."
    },
    {
      "topic": "Cases",
      "kind": "Design",
      "marks": 12,
      "slides": "2, 9–18",
      "question": "Propose a simple EA-based improvement for student reporting that currently produces conflicting departmental totals.",
      "points": [
        "Understand business reporting need",
        "Data definition/authority",
        "Application sharing",
        "Operational controls",
        "Value evidence"
      ],
      "answer": "The university should begin with a business definition of which enrolment or payment totals managers actually need and how the figures are used. Next, data architecture should agree the meaning and authoritative source of each metric, including when a student counts as enrolled. Application architecture should specify how admissions, registration and finance systems deliver the needed information without inconsistent manual copying. Technology architecture should provide dependable, controlled access and appropriate security for reports. The university should then compare reports across departments and monitor how often manual reconciliation is required. This approach improves reporting through shared meaning and coordinated integration rather than adding an isolated dashboard."
    },
    {
      "topic": "Recap",
      "kind": "Explain",
      "marks": 8,
      "slides": "20",
      "question": "Explain the three main takeaways from Lecture 3.",
      "points": [
        "EA whole view",
        "Interdependence of layers",
        "Alignment/value/feedback",
        "Overall implication"
      ],
      "answer": "First, Enterprise Architecture provides a whole-organisation view by linking business goals, processes, information, applications and technology. Second, the layers depend on one another, so changing an application or business rule may also require changes to information and infrastructure. Third, alignment concerns organisational value: technology decisions must be traceable to business goals and tested through feedback. Together, these messages show that EA is not documentation for its own sake. It helps organisations make coordinated decisions that improve services and avoid costly inconsistency between departments."
    },
    {
      "topic": "Recap",
      "kind": "Apply",
      "marks": 10,
      "slides": "4–20",
      "question": "A manager says “EA creates too much documentation; developers should just start building.” Respond with a reasoned argument.",
      "points": [
        "Acknowledge delivery need",
        "Early dependency discovery",
        "Cross-system change cost",
        "Focus on decisions, not paperwork",
        "University example"
      ],
      "answer": "Starting implementation quickly may appear efficient, but an organisation with several connected systems faces risks that cannot be discovered by looking at one application alone. If the university builds a registration portal without agreeing data ownership or finance integration, it may later spend much more time fixing inconsistent records and delayed updates. EA is valuable because it identifies business goals and cross-layer dependencies before local decisions create organisational problems. The lecture does not describe EA as producing documents for their own sake. Its purpose is coordinated decision-making. A practical approach would prepare enough architecture to guide the important choices, then refine it using feedback as the work progresses."
    },
    {
      "topic": "Recap",
      "kind": "Compare",
      "marks": 10,
      "slides": "4–5, 15–16",
      "question": "Compare technical system success with business–IT alignment in the university case.",
      "points": [
        "Technical function",
        "Business outcome",
        "User/organisational consequences",
        "Feedback",
        "Conclusion"
      ],
      "answer": "Technical success means a system performs its intended software functions, such as accepting course selections and storing records. Business–IT alignment is broader: it asks whether that system contributes to an important organisational goal, such as reducing registration delays and giving students a reliable enrolment status. A portal could pass technical tests yet still force staff to reconcile payments manually because the systems are disconnected. EA connects the business process, data, applications and technology, then uses feedback to determine whether value was achieved. Therefore, technical success is necessary for a useful service, but it is not enough to demonstrate enterprise-level alignment."
    },
    {
      "topic": "Recap",
      "kind": "Apply",
      "marks": 8,
      "slides": "9–16",
      "question": "Use a four-row conceptual impact map to describe a change from manual to online registration.",
      "points": [
        "Business rules/owners",
        "Data definitions",
        "Application integration",
        "Technology load/security",
        "Overall relationship"
      ],
      "answer": "In business architecture, the university must define the online registration workflow, registration period, prerequisites and responsibility for handling exceptions. In data architecture, it must maintain consistent student status, course offerings, seat counts and payment information. In application architecture, it must connect the portal with relevant student-record and finance services. In technology architecture, it must support secure, reliable access and expected peak traffic. The map is valuable because each row creates requirements for the next. If a course becomes full, for example, the relevant business rule, seat data and application behaviour must remain consistent within the available technology capacity."
    }
  ],
  "mcq": [
    {
      "question": "What best describes EA?",
      "choices": [
        "A single software diagram",
        "A whole-organisation view linking goals, processes, information, applications and technology",
        "A programming methodology",
        "Cloud hosting only"
      ],
      "correct": 1,
      "explanation": "Slide 4 defines EA as a whole-organisation view.",
      "slides": "4"
    },
    {
      "question": "Why does the university case illustrate a need for EA?",
      "choices": [
        "The computers are always broken",
        "Every department uses identical data",
        "Separate systems create duplication, delays and inconsistent reports",
        "Software cannot be maintained"
      ],
      "correct": 2,
      "explanation": "The central problem is organisation-wide coordination.",
      "slides": "2–5"
    },
    {
      "question": "Which statement about frameworks is correct?",
      "choices": [
        "A framework automatically contains the final architecture",
        "Frameworks replace business analysis",
        "Frameworks structure architecture work and views",
        "Every framework is a cloud provider"
      ],
      "correct": 2,
      "explanation": "The lecture distinguishes frameworks from the architecture itself.",
      "slides": "7"
    },
    {
      "question": "TOGAF is introduced as primarily:",
      "choices": [
        "Classification-oriented",
        "Process-oriented through ADM",
        "A network protocol",
        "A data warehouse"
      ],
      "correct": 1,
      "explanation": "TOGAF offers a structured Architecture Development Method.",
      "slides": "7–8"
    },
    {
      "question": "Zachman focuses primarily on:",
      "choices": [
        "An implementation sprint",
        "Classification of architectural descriptions and viewpoints",
        "Cloud migration",
        "A single database schema"
      ],
      "correct": 1,
      "explanation": "Zachman asks which aspects and perspectives should be represented.",
      "slides": "8"
    },
    {
      "question": "Which belongs mainly in business architecture?",
      "choices": [
        "Registration rules and responsibilities",
        "Server RAM",
        "Database hosting",
        "Network cables"
      ],
      "correct": 0,
      "explanation": "Business architecture covers processes and responsibilities.",
      "slides": "10"
    },
    {
      "question": "Which belongs mainly in data architecture?",
      "choices": [
        "Who owns enrolment status and what it means",
        "Server failover hardware",
        "A web browser design",
        "Budget approval only"
      ],
      "correct": 0,
      "explanation": "Data architecture addresses meaning, ownership and sharing.",
      "slides": "11"
    },
    {
      "question": "What is the main role of application architecture?",
      "choices": [
        "Purchase physical devices",
        "Define which applications support capabilities and interact",
        "Define only business policies",
        "Maintain electrical supply"
      ],
      "correct": 1,
      "explanation": "Applications and their interactions connect business work to software services.",
      "slides": "12–14"
    },
    {
      "question": "Which is a technology architecture consideration?",
      "choices": [
        "Programme eligibility criteria",
        "Source of truth for status",
        "Hosting, security and peak-load capacity",
        "Staff organisational hierarchy"
      ],
      "correct": 2,
      "explanation": "Technology covers infrastructure and operational foundations.",
      "slides": "13–14"
    },
    {
      "question": "What happens when systems exchange data with different meanings?",
      "choices": [
        "The integration always succeeds",
        "Information may remain inconsistent despite connectivity",
        "All applications become identical",
        "No data ownership is necessary"
      ],
      "correct": 1,
      "explanation": "The slide states connecting systems is not enough when meanings differ.",
      "slides": "11"
    },
    {
      "question": "Which is the lecture’s alignment cycle?",
      "choices": [
        "Purchase → Stop",
        "Business goals → Architecture → Delivery → Feedback",
        "Code → Code → Code",
        "Network → Cloud → Device"
      ],
      "correct": 1,
      "explanation": "Slide 16 gives an iterative alignment cycle.",
      "slides": "16"
    },
    {
      "question": "Which is evidence that registration alignment succeeded?",
      "choices": [
        "A more colourful portal",
        "A higher advertising budget",
        "Fewer manual corrections and clearer status",
        "The newest programming language"
      ],
      "correct": 2,
      "explanation": "Slide 15 links IT response to organisational outcomes.",
      "slides": "15"
    },
    {
      "question": "What should EA technology selection consider?",
      "choices": [
        "Popularity only",
        "Features only",
        "Business fit, lifecycle costs and technical/organisational fit",
        "Price only"
      ],
      "correct": 2,
      "explanation": "Slide 18 gives these three perspectives.",
      "slides": "18"
    },
    {
      "question": "A learning platform cannot receive student enrolment. Which EA layers need urgent attention?",
      "choices": [
        "Only technology",
        "Application and data",
        "Only business",
        "None"
      ],
      "correct": 1,
      "explanation": "Interfaces and shared definitions are central.",
      "slides": "21"
    },
    {
      "question": "Which is NOT one of the lecture’s takeaways?",
      "choices": [
        "EA gives a whole view",
        "Layers depend on one another",
        "Alignment is about value",
        "EA exists to produce documentation for its own sake"
      ],
      "correct": 3,
      "explanation": "The lecture explicitly rejects documentation for its own sake.",
      "slides": "20"
    }
  ],
  "flashcards": [
    {
      "front": "Define Enterprise Architecture.",
      "back": "Whole-organisation relationships between business, information, applications and technology.",
      "slides": "4"
    },
    {
      "front": "Name the university’s five disconnected areas.",
      "back": "Admissions, student records, finance, learning platform, reporting.",
      "slides": "2"
    },
    {
      "front": "Name three problems EA addresses.",
      "back": "Duplication, disconnected data and costly change.",
      "slides": "5"
    },
    {
      "front": "What does an EA framework provide?",
      "back": "Structure for architecture work or descriptions; not the architecture itself.",
      "slides": "7"
    },
    {
      "front": "What is TOGAF’s emphasis?",
      "back": "Process-oriented architecture development using ADM.",
      "slides": "7–8"
    },
    {
      "front": "What is Zachman’s emphasis?",
      "back": "Classifying enterprise descriptions across viewpoints.",
      "slides": "7–8"
    },
    {
      "front": "Name three other frameworks in the slides.",
      "back": "FEAF, DoDAF and MODAF.",
      "slides": "7"
    },
    {
      "front": "Name the four EA layers in order.",
      "back": "Business, Data, Application, Technology.",
      "slides": "9–14"
    },
    {
      "front": "What does Business Architecture cover?",
      "back": "Goals, capabilities, processes, roles and responsibilities.",
      "slides": "10"
    },
    {
      "front": "What warning applies to automating unclear processes?",
      "back": "Automation may simply make confusion faster.",
      "slides": "10"
    },
    {
      "front": "What does Data Architecture cover?",
      "back": "Information meaning, ownership and sharing.",
      "slides": "11"
    },
    {
      "front": "What is an authoritative data source?",
      "back": "The trusted source responsible for an important data item.",
      "slides": "11"
    },
    {
      "front": "Why is technical data connection insufficient?",
      "back": "Different systems may interpret the data differently.",
      "slides": "11"
    },
    {
      "front": "What does Application Architecture cover?",
      "back": "Software applications and how they interact to support capabilities.",
      "slides": "12–14"
    },
    {
      "front": "What does Technology Architecture cover?",
      "back": "Hosting, networks, databases, cloud, devices and security foundations.",
      "slides": "13"
    },
    {
      "front": "What demand affects online course registration?",
      "back": "Peak registration traffic and service availability.",
      "slides": "14"
    },
    {
      "front": "Business registration example?",
      "back": "Periods, prerequisites, seat limits and roles.",
      "slides": "14"
    },
    {
      "front": "Data registration example?",
      "back": "Accurate student status, prerequisites, courses and seats.",
      "slides": "14"
    },
    {
      "front": "Application registration example?",
      "back": "Portal, student records and finance exchanging updates.",
      "slides": "14"
    },
    {
      "front": "Technology registration example?",
      "back": "Secure, scalable hosting and network for peak traffic.",
      "slides": "14"
    },
    {
      "front": "What is business–IT alignment?",
      "back": "IT choices should support organisational goals.",
      "slides": "15"
    },
    {
      "front": "Give the example alignment business goal.",
      "back": "Improve student registration and reduce delays.",
      "slides": "15"
    },
    {
      "front": "Give the example alignment IT response.",
      "back": "Connect registration, course data and payment status.",
      "slides": "15"
    },
    {
      "front": "What shows registration value?",
      "back": "Fewer manual corrections and clearer status.",
      "slides": "15"
    },
    {
      "front": "Name the alignment cycle.",
      "back": "Business goals → Architecture → Delivery → Feedback.",
      "slides": "16"
    },
    {
      "front": "Is alignment a one-time sign-off?",
      "back": "No, feedback can change goals or architecture.",
      "slides": "16"
    },
    {
      "front": "What happens when departments select tools independently?",
      "back": "Duplicated records, incompatibility, increased costs and delays.",
      "slides": "17"
    },
    {
      "front": "Which three criteria guide EA technology selection?",
      "back": "Business fit, lifecycle costs, technical and organisational fit.",
      "slides": "18"
    },
    {
      "front": "Name three lifecycle costs.",
      "back": "Acquisition, integration, maintenance, training or exit.",
      "slides": "18"
    },
    {
      "front": "What should a technology recommendation balance?",
      "back": "Business value, cost, risk and architecture fit.",
      "slides": "18"
    },
    {
      "front": "What is the learning-platform exit question’s main answer?",
      "back": "Application and data layers must define integration and shared enrolment data.",
      "slides": "21"
    },
    {
      "front": "What are Lecture 3’s three takeaways?",
      "back": "Whole view; interdependent layers; alignment through value and feedback.",
      "slides": "20"
    },
    {
      "front": "What does EA NOT exist for?",
      "back": "Documentation for its own sake.",
      "slides": "20"
    },
    {
      "front": "Why do shared enrolment definitions matter?",
      "back": "They keep information consistent between systems.",
      "slides": "11, 14"
    },
    {
      "front": "What is the difference between goal and IT response?",
      "back": "Goal is desired outcome; response is technology supporting it.",
      "slides": "15"
    },
    {
      "front": "What question does technology architecture ask?",
      "back": "Can the infrastructure meet performance, security and availability needs?",
      "slides": "13"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "EA foundations",
    "slides": "2–5",
    "scenario": "A university has separate admissions, finance, student-record and learning systems. Students are repeatedly asked for the same data.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO organisation-level problems shown by the case.",
        "marks": 4,
        "items": [
          "Duplicated student data entry wastes time and creates inconsistent records.",
          "Independent departmental applications do not coordinate the whole student journey."
        ],
        "model": "The first problem is duplicated information. Admissions, finance and student-record systems ask students to enter the same details, which wastes time and creates inconsistent copies. The second problem is poor coordination: departments operate separate applications, so changes to student status do not reach other systems reliably. Both problems affect the entire student journey rather than one individual application."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons Enterprise Architecture (EA) is relevant.",
        "marks": 6,
        "items": [
          "EA connects business objectives and processes with information, applications and technology.",
          "EA exposes dependencies and duplication across systems rather than looking at one app.",
          "EA guides coordinated decisions and reduces avoidable change cost."
        ],
        "model": "Enterprise Architecture (EA) helps in three ways. First, it links university objectives and processes to the data, applications and technology needed to support them. Second, it reveals duplication and dependencies among admissions, finance and learning systems so that gaps can be addressed together. Third, it guides coordinated investment and integration decisions, reducing repeated data entry and the cost of incompatible changes. EA therefore provides a whole-organisation view rather than a collection of isolated IT diagrams."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "EA definitions",
    "slides": "4–5",
    "scenario": "A manager believes an organisation only needs an architecture diagram for its student portal.",
    "parts": [
      {
        "letter": "a",
        "question": "Distinguish TWO views of architecture.",
        "marks": 4,
        "items": [
          "Application architecture describes functions and interfaces of a particular software solution.",
          "Enterprise Architecture includes organisational goals, processes, data, applications and technology across departments."
        ],
        "model": "First, application architecture describes functions and interfaces of a particular software solution. Second, enterprise Architecture includes organisational goals, processes, data, applications and technology across departments. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE benefits of using the enterprise-level view.",
        "marks": 6,
        "items": [
          "It clarifies who owns a shared business process.",
          "It identifies inconsistent definitions of important data.",
          "It coordinates investments and integrations for organisation-wide value."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, it clarifies who owns a shared business process. Clarifying who does what is necessary before automating the same activity in software. Second, it identifies inconsistent definitions of important data. Third, it coordinates investments and integrations for organisation-wide value. The systems can then share necessary updates through controlled connections instead of manual re-entry. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "EA frameworks",
    "slides": "7–8",
    "scenario": "A university wants a framework to organise its architectural planning activities.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO different emphases of TOGAF and Zachman.",
        "marks": 4,
        "items": [
          "TOGAF is process-oriented and provides the Architecture Development Method.",
          "Zachman is classification-oriented and organises viewpoints and descriptions."
        ],
        "model": "First, TOGAF is process-oriented and provides the Architecture Development Method. Second, Zachman is classification-oriented and organises viewpoints and descriptions. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE appropriate uses or limitations of EA frameworks.",
        "marks": 6,
        "items": [
          "Use TOGAF to guide the work needed to develop and evolve the architecture.",
          "Use Zachman to check whether important viewpoints have been described.",
          "Do not confuse framework templates with the real architecture of the university."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, use TOGAF to guide the work needed to develop and evolve the architecture. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Second, use Zachman to check whether important viewpoints have been described. It helps the team organise architecture work and communicate decisions without treating a template as the architecture itself. Third, do not confuse framework templates with the real architecture of the university. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Four layers",
    "slides": "9–14",
    "scenario": "A university plans online course registration that will involve students, finance and academic departments.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO EA layers and what each describes.",
        "marks": 4,
        "items": [
          "Business architecture covers registration rules, roles, goals and responsibilities.",
          "Data architecture covers course prerequisites, student status and authorised sources of information."
        ],
        "model": "First, business architecture covers registration rules, roles, goals and responsibilities. Second, data architecture covers course prerequisites, student status and authorised sources of information. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE requirements belonging to the remaining layers and their dependencies.",
        "marks": 6,
        "items": [
          "Application architecture connects registration, finance and student-record systems.",
          "Technology architecture provides secure hosting, networking and peak-load capacity.",
          "Successful registration requires consistency across all four layers, not isolated improvements."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, application architecture connects registration, finance and student-record systems. For the university, consistent enrolment information prevents contradictory statuses and repeated manual corrections. Second, technology architecture provides secure hosting, networking and peak-load capacity. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, successful registration requires consistency across all four layers, not isolated improvements. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Business architecture",
    "slides": "10, 14",
    "scenario": "Staff disagree about who approves late registrations, but management plans to automate the existing process.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO business-architecture questions that must be answered first.",
        "marks": 4,
        "items": [
          "Which office is accountable for approving late registration?",
          "Which prerequisites, deadlines and exception rules apply to students?"
        ],
        "model": "First, which office is accountable for approving late registration? Second, which prerequisites, deadlines and exception rules apply to students? Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE risks of automating the unclear process.",
        "marks": 6,
        "items": [
          "A system may apply inconsistent rules between departments.",
          "Students may receive contradictory approval messages.",
          "Automation can spread incorrect decisions faster rather than solving the root cause."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, a system may apply inconsistent rules between departments. Second, students may receive contradictory approval messages. Clear decision authority means the team knows who can approve a change and accept its residual risks. Third, automation can spread incorrect decisions faster rather than solving the root cause. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Data architecture",
    "slides": "11, 14",
    "scenario": "Student-record and finance systems store different values for the same student’s fee clearance.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO data-architecture concerns.",
        "marks": 4,
        "items": [
          "There is no agreed definition of what fee clearance means.",
          "The authoritative source and owner of the payment status are unclear."
        ],
        "model": "First, there is no agreed definition of what fee clearance means. Second, the authoritative source and owner of the payment status are unclear. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions needed before system integration.",
        "marks": 6,
        "items": [
          "Agree common identifiers, definitions and valid values.",
          "Assign owners to maintain trusted data.",
          "Test reconciliation and update rules so both systems display consistent information."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, agree common identifiers, definitions and valid values. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, assign owners to maintain trusted data. Third, test reconciliation and update rules so both systems display consistent information. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Application architecture",
    "slides": "12, 14",
    "scenario": "An online registration portal must obtain student details and payment status from other systems.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO responsibilities of application architecture.",
        "marks": 4,
        "items": [
          "Describe what each application does and its role in the registration journey.",
          "Define the interfaces and interactions between applications."
        ],
        "model": "First, describe what each application does and its role in the registration journey. Second, define the interfaces and interactions between applications. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE design decisions for this integration.",
        "marks": 6,
        "items": [
          "Identify which system provides the trusted student record.",
          "Design controlled data exchange with finance and academic systems.",
          "Prevent duplicated functions and ensure updates remain reliable."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, identify which system provides the trusted student record. Second, design controlled data exchange with finance and academic systems. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, prevent duplicated functions and ensure updates remain reliable. The service must remain usable, or recover safely, when a component or connection fails. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Technology architecture",
    "slides": "13–14",
    "scenario": "The university registration portal fails every semester during the first hour of enrolment.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO aspects of technology architecture involved.",
        "marks": 4,
        "items": [
          "Hosting and network capacity determine whether the portal can handle peak traffic.",
          "Availability and security infrastructure must keep the service accessible and protected."
        ],
        "model": "First, hosting and network capacity determine whether the portal can handle peak traffic. Second, availability and security infrastructure must keep the service accessible and protected. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE improvements the architecture team should consider.",
        "marks": 6,
        "items": [
          "Plan capacity for predictable registration peaks.",
          "Add monitoring, recovery and backup arrangements.",
          "Test resilience and access controls as part of the end-to-end service."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, plan capacity for predictable registration peaks. The design must keep operating at expected demand, not only under a small demonstration load. Second, add monitoring, recovery and backup arrangements. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Third, test resilience and access controls as part of the end-to-end service. Only people or services with a genuine need should be allowed to perform sensitive actions. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Business–IT alignment",
    "slides": "15–16",
    "scenario": "A department asks for a new cloud platform without describing any business benefit.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO questions showing whether the proposal is aligned.",
        "marks": 4,
        "items": [
          "Which student or staff outcome is the platform expected to improve?",
          "How will the organisation measure whether the proposed change delivers that outcome?"
        ],
        "model": "First, which student or staff outcome is the platform expected to improve? Second, how will the organisation measure whether the proposed change delivers that outcome? Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE stages of continuous alignment.",
        "marks": 6,
        "items": [
          "Start from a business goal such as fewer registration delays.",
          "Design and deliver the architecture and systems needed for that goal.",
          "Collect feedback, measure benefits and revise priorities when necessary."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, start from a business goal such as fewer registration delays. Second, design and deliver the architecture and systems needed for that goal. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, collect feedback, measure benefits and revise priorities when necessary. Linking development to real operating conditions helps teams improve the service after each release."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Local versus enterprise",
    "slides": "2, 5, 17",
    "scenario": "Every faculty buys a separate reporting system because it suits its own immediate needs.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO potential consequences of these local decisions.",
        "marks": 4,
        "items": [
          "Reports may disagree because each unit uses different data definitions.",
          "Separate purchases and duplicated functionality increase overall operating cost."
        ],
        "model": "First, reports may disagree because each unit uses different data definitions. Second, separate purchases and duplicated functionality increase overall operating cost. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE EA responses.",
        "marks": 6,
        "items": [
          "Define enterprise-level reporting needs and common information definitions.",
          "Agree shared interfaces or services where appropriate.",
          "Review proposed local investments for broader dependencies and value."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, define enterprise-level reporting needs and common information definitions. Second, agree shared interfaces or services where appropriate. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, review proposed local investments for broader dependencies and value. Doing prerequisite work first avoids costly rework and makes changes easier to test."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Technology choices",
    "slides": "18",
    "scenario": "A vendor offers an advanced analytics platform to the university.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO categories of evaluation beyond popularity.",
        "marks": 4,
        "items": [
          "Business fit asks whether analytics supports a needed organisational capability.",
          "Lifecycle cost includes integration, training, maintenance and possible exit costs."
        ],
        "model": "First, business fit asks whether analytics supports a needed organisational capability. Second, lifecycle cost includes integration, training, maintenance and possible exit costs. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE technical and organisational suitability checks.",
        "marks": 6,
        "items": [
          "Confirm integration with existing records and reports.",
          "Evaluate available skills, vendor support and maintainability.",
          "Examine privacy, security and operational reliability requirements."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, confirm integration with existing records and reports. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, evaluate available skills, vendor support and maintainability. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Third, examine privacy, security and operational reliability requirements. This reduces unnecessary exposure of personal information and supports more responsible use of the system. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Layer dependencies",
    "slides": "9–14",
    "scenario": "A new course registration policy changes who can register for restricted subjects.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO layers directly affected by the policy.",
        "marks": 4,
        "items": [
          "Business architecture changes eligibility rules and approval responsibilities.",
          "Data architecture must reflect accurate prerequisites and student status."
        ],
        "model": "First, business architecture changes eligibility rules and approval responsibilities. Second, data architecture must reflect accurate prerequisites and student status. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE effects on the other layers.",
        "marks": 6,
        "items": [
          "Application logic must check revised eligibility.",
          "Interfaces may need to exchange new status information.",
          "Hosting, logging and access-control configurations may require testing and adjustment."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, application logic must check revised eligibility. Second, interfaces may need to exchange new status information. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, hosting, logging and access-control configurations may require testing and adjustment. Recorded operational evidence makes problems visible and allows the team to investigate what happened. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "EA and feedback",
    "slides": "15–20",
    "scenario": "A redesigned student-registration service is launched but still causes manual corrections.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ways EA should evaluate whether the project delivered value.",
        "marks": 4,
        "items": [
          "Compare registration delay and manual correction rates with the business target.",
          "Collect student and staff feedback about the end-to-end journey."
        ],
        "model": "First, compare registration delay and manual correction rates with the business target. Second, collect student and staff feedback about the end-to-end journey. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions after the evaluation.",
        "marks": 6,
        "items": [
          "Trace continuing errors to process, data, application or technology causes.",
          "Update architecture priorities based on evidence.",
          "Coordinate fixes with accountable business and IT owners."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, trace continuing errors to process, data, application or technology causes. Second, update architecture priorities based on evidence. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, coordinate fixes with accountable business and IT owners. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Framework selection",
    "slides": "7–8",
    "scenario": "A learner claims that TOGAF and Zachman are competing programming languages.",
    "parts": [
      {
        "letter": "a",
        "question": "Correct TWO misunderstandings in the claim.",
        "marks": 4,
        "items": [
          "Both are enterprise-architecture frameworks, not coding languages.",
          "They have different emphases: method versus classification."
        ],
        "model": "First, both are enterprise-architecture frameworks, not coding languages. Second, they have different emphases: method versus classification. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE other frameworks or qualifications in the lecture.",
        "marks": 6,
        "items": [
          "FEAF is another framework associated with government contexts.",
          "DoDAF is associated with defence architecture contexts.",
          "MODAF is also a defence-context framework and should not be confused with a finished architecture."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, fEAF is another framework associated with government contexts. It helps the team organise architecture work and communicate decisions without treating a template as the architecture itself. Second, doDAF is associated with defence architecture contexts. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, mODAF is also a defence-context framework and should not be confused with a finished architecture. A framework should support practical architectural understanding, not replace decisions about the real organisation."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "University exit case",
    "slides": "14–20",
    "scenario": "A new university learning platform cannot share enrolment data with the student-record system.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO EA layers that should have been considered.",
        "marks": 4,
        "items": [
          "Data architecture defines the agreed enrolment data and its ownership.",
          "Application architecture defines interfaces between the learning and student-record systems."
        ],
        "model": "First, data architecture defines the agreed enrolment data and its ownership. Second, application architecture defines interfaces between the learning and student-record systems. Considering both helps prevent a local technical fix from overlooking wider organisational needs."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways EA could have prevented this problem.",
        "marks": 6,
        "items": [
          "Define integration requirements before selecting the platform.",
          "Assess compatibility against the university’s wider architecture.",
          "Test end-to-end enrolment updates and ownership arrangements before launch."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, define integration requirements before selecting the platform. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, assess compatibility against the university’s wider architecture. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, test end-to-end enrolment updates and ownership arrangements before launch. For the university, consistent enrolment information prevents contradictory statuses and repeated manual corrections. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Registration system architectural review",
    "slides": "2–20",
    "scenario": "A university plans a single online portal connecting admissions, course registration and finance. Today, each department stores separate student information, updates are late and reporting is inconsistent.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE stakeholders or business outcomes to include in an EA review.",
        "marks": 5,
        "items": [
          "Students need clear and timely enrolment status.",
          "Faculty administrators need consistent registration rules.",
          "Finance staff need accurate fee information.",
          "IT operations staff need secure reliable services.",
          "University management needs trusted enterprise reporting."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, students need clear and timely enrolment status. Second, faculty administrators need consistent registration rules. Third, finance staff need accurate fee information. Fourth, iT operations staff need secure reliable services. Fifth, university management needs trusted enterprise reporting."
      },
      {
        "letter": "b",
        "question": "Explain FIVE requirements drawn from the four architectural layers.",
        "marks": 10,
        "items": [
          "Business: define accountable registration and payment processes.",
          "Data: agree master student identifiers and authoritative sources.",
          "Application: connect portals and departmental systems through defined interfaces.",
          "Technology: provide scalable hosting and secure access.",
          "Cross-layer: ensure dependencies and change ownership are reviewed together."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, business: define accountable registration and payment processes. Second, data: agree master student identifiers and authoritative sources. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Third, application: connect portals and departmental systems through defined interfaces. The systems can then share necessary updates through controlled connections instead of manual re-entry. Fourth, technology: provide scalable hosting and secure access. The design must keep operating at expected demand, not only under a small demonstration load. Fifth, cross-layer: ensure dependencies and change ownership are reviewed together. Doing prerequisite work first avoids costly rework and makes changes easier to test. This would help the university provide more consistent services and reduce avoidable work across departments."
      },
      {
        "letter": "c",
        "question": "Propose FIVE EA-guided steps for coordinated improvement.",
        "marks": 10,
        "items": [
          "Map the current processes and system dependencies.",
          "Agree shared target outcomes across departments.",
          "Document data ownership and exchange agreements.",
          "Select integration approaches that match the target architecture.",
          "Measure delays, corrections and reporting accuracy after delivery."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, map the current processes and system dependencies. Doing prerequisite work first avoids costly rework and makes changes easier to test. Second, agree shared target outcomes across departments. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Third, document data ownership and exchange agreements. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Fourth, select integration approaches that match the target architecture. The systems can then share necessary updates through controlled connections instead of manual re-entry. Fifth, measure delays, corrections and reporting accuracy after delivery. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Selecting a new learning platform",
    "slides": "7–8, 11–20",
    "scenario": "A university receives three offers for a new learning management system. The cheapest cannot exchange registration data, another is secure but expensive, and the third supports integration but requires staff training.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE architecture and business criteria for comparing the offers.",
        "marks": 5,
        "items": [
          "Support for learning and registration business goals.",
          "Consistent student and enrolment data.",
          "Compatibility with current systems.",
          "Security and availability requirements.",
          "Total lifecycle costs and staff readiness."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, support for learning and registration business goals. Second, consistent student and enrolment data. Third, compatibility with current systems. Fourth, security and availability requirements. Fifth, total lifecycle costs and staff readiness."
      },
      {
        "letter": "b",
        "question": "Explain FIVE risks of choosing on purchase price alone.",
        "marks": 10,
        "items": [
          "Missing integration causes duplicate data entry.",
          "Unclear data definitions undermine reporting.",
          "Weak reliability disrupts student access.",
          "Training and maintenance costs may be overlooked.",
          "Replacement and migration can become more expensive later."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, missing integration causes duplicate data entry. The systems can then share necessary updates through controlled connections instead of manual re-entry. Second, unclear data definitions undermine reporting. A named source and clear meaning prevent different departments from treating conflicting copies as correct. Third, weak reliability disrupts student access. The service must remain usable, or recover safely, when a component or connection fails. Fourth, training and maintenance costs may be overlooked. Including the full lifecycle cost prevents an overly optimistic investment decision. Fifth, replacement and migration can become more expensive later. This would help the university provide more consistent services and reduce avoidable work across departments."
      },
      {
        "letter": "c",
        "question": "Justify FIVE steps in a defensible procurement recommendation.",
        "marks": 10,
        "items": [
          "Define measurable student and staff outcomes first.",
          "Compare all offers against the four EA layers.",
          "Ask vendors to demonstrate real enrolment-data exchange.",
          "Examine security, support and total cost over time.",
          "Choose the option that best balances value, risk and maintainability."
        ],
        "model": "The university should treat this as an organisation-wide architecture issue. First, define measurable student and staff outcomes first. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, compare all offers against the four EA layers. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, ask vendors to demonstrate real enrolment-data exchange. For the university, consistent enrolment information prevents contradictory statuses and repeated manual corrections. Fourth, examine security, support and total cost over time. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Fifth, choose the option that best balances value, risk and maintainability. This would help the university provide more consistent services and reduce avoidable work across departments."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='lecture3_v1_';

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
// Interactive diagrams for Lecture 3's detailed summary.
(() => {
  const root = document.getElementById('summary-list');
    function setUniMode(mode) {
      const btnSilo = document.getElementById("btn-silo");
      const btnEa = document.getElementById("btn-ea");
      const title = document.getElementById("uni-diagram-title");
      const hubBox = document.getElementById("hub-box");
      const hubTitle = document.getElementById("hub-title");
      const hubSub = document.getElementById("hub-sub");

      const connectors = ["conn1", "conn2", "conn3", "conn4", "conn5"].map((id) => document.getElementById(id));

      if (mode === "silo") {
        btnSilo.classList.add("active");
        btnSilo.setAttribute("aria-pressed", "true"); btnEa.setAttribute("aria-pressed", "false");
        btnEa.classList.remove("active");
        title.textContent = "Visual Map: Five Disconnected University Systems (Slide 2)";

        hubBox.setAttribute("fill", "#ffe4e6");
        hubBox.setAttribute("stroke-dasharray", "6 4");
        hubTitle.setAttribute("fill", "#be123c");
        hubTitle.textContent = "NO SHARED COORDINATION";
        hubSub.textContent = "Manual re-entry · Conflicting numbers";

        document.getElementById("sys1-desc").textContent = "Applicant details entered here";
        document.getElementById("sys1-sub").textContent = "Isolated intake database";
        document.getElementById("sys2-desc").textContent = "Same student registered again";
        document.getElementById("sys2-sub").textContent = "Duplicated manual entry";
        document.getElementById("sys3-desc").textContent = "Payment status stored elsewhere";
        document.getElementById("sys3-sub").textContent = "Blocks timely registration checks";
        document.getElementById("sys4-desc").textContent = "Course enrolment updates arrive late";
        document.getElementById("sys4-sub").textContent = "Students locked out of class portals";
        document.getElementById("sys5-desc").setAttribute("fill", "#be123c");
        document.getElementById("sys5-desc").textContent = "Numbers differ across departments";
        document.getElementById("sys5-sub").textContent = "Leaders cannot trust headcount reports";

        connectors.forEach((line) => {
          line.setAttribute("stroke", "#e11d48");
          line.setAttribute("stroke-dasharray", "5 5");
          line.setAttribute("marker-end", "url(#arrow-red)");
        });
      } else {
        btnEa.classList.add("active");
        btnEa.setAttribute("aria-pressed", "true"); btnSilo.setAttribute("aria-pressed", "false");
        btnSilo.classList.remove("active");
        title.textContent = "Visual Map: Enterprise Architecture Coordinated University (Slides 4–5, 14)";

        hubBox.setAttribute("fill", "#dcfce7");
        hubBox.removeAttribute("stroke-dasharray");
        hubTitle.setAttribute("fill", "#065f46");
        hubTitle.textContent = "ENTERPRISE ARCHITECTURE BACKBONE";
        hubSub.textContent = "Single source of truth · Connected APIs";

        document.getElementById("sys1-desc").textContent = "Applicant record created once";
        document.getElementById("sys1-sub").textContent = "Flows automatically upon offer acceptance";
        document.getElementById("sys2-desc").textContent = "Authoritative student ID & profile";
        document.getElementById("sys2-sub").textContent = "Single source of truth across campus";
        document.getElementById("sys3-desc").textContent = "Real-time fee clearance status";
        document.getElementById("sys3-sub").textContent = "Instantly verified during enrolment";
        document.getElementById("sys4-desc").textContent = "Instant course roster sync";
        document.getElementById("sys4-sub").textContent = "Immediate LMS access on registration";
        document.getElementById("sys5-desc").setAttribute("fill", "#065f46");
        document.getElementById("sys5-desc").textContent = "Consistent numbers across all units";
        document.getElementById("sys5-sub").textContent = "Reliable executive decision-making";

        connectors.forEach((line) => {
          line.setAttribute("stroke", "#059669");
          line.removeAttribute("stroke-dasharray");
          line.setAttribute("marker-end", "url(#arrow-green)");
        });
      }
    }

    // Interactive Layer Stepper for Module 05 (Online Course Registration)
    const regLayers = [
      {
        badge: "LAYER 1 · BUSINESS ARCHITECTURE (SLIDE 14)",
        bg: "#dcfce7",
        title: "Define Registration Policies, Windows & Responsibilities",
        what: "Students register within a defined academic add/drop period; prerequisite rules, credit-hour caps, and class seat limits govern eligibility.",
        why: "If registration rules and approval exceptions are unclear across faculties, building an online portal simply automates confusion.",
        dep: "Depends on Data Architecture to enforce prerequisite and seat-limit rules accurately."
      },
      {
        badge: "LAYER 2 · DATA ARCHITECTURE (SLIDE 14)",
        bg: "#ffedd5",
        title: "Establish Trusted Course, Student & Seat Data",
        what: "Student academic standing, passed prerequisites, active course offerings, and remaining available seats must be accurate, consistently defined, and owned by a trusted source.",
        why: "If two databases disagree on remaining seats or course codes, students get over-enrolled or wrongly blocked.",
        dep: "Depends on Application Architecture to keep seat counts and payment flags synchronised across modules."
      },
      {
        badge: "LAYER 3 · APPLICATION ARCHITECTURE (SLIDE 14)",
        bg: "#e0f2fe",
        title: "Integrate Registration, Student Records, Finance & LMS",
        what: "The online registration portal, Student Records system, Finance billing system, and Learning Platform exchange real-time updates without manual re-entry.",
        why: "Prevents students from having to queue at Finance to prove payment before registering or waiting days to appear in their online class.",
        dep: "Depends on Technology Architecture for fast, reliable network communication between application services."
      },
      {
        badge: "LAYER 4 · TECHNOLOGY ARCHITECTURE (SLIDE 14)",
        bg: "#eeeeff",
        title: "Provision Peak Traffic Capacity, Security & Availability",
        what: "Hosting infrastructure, database servers, network bandwidth, and authentication controls must handle thousands of students logging in simultaneously when registration opens.",
        why: "A well-designed registration workflow still fails if the server crashes under peak 9:00 AM enrolment load.",
        dep: "Directly enables Application Architecture uptime and responsiveness for end users."
      }
    ];

    function showRegLayer(index, btnEl) {
      root.querySelectorAll(".nb-reg-tab").forEach((tab) => { tab.classList.remove("active"); tab.setAttribute("aria-pressed", "false"); });
      if (btnEl) { btnEl.classList.add("active"); btnEl.setAttribute("aria-pressed", "true"); }

      const item = regLayers[index];
      const panel = document.getElementById("reg-panel");
      panel.style.background = item.bg;
      panel.innerHTML = `
        <span class="slide-ref" style="background:#ffffff; margin-bottom:0.55rem;">${item.badge}</span>
        <h4 style="font-size:1.05rem; margin-bottom:0.55rem;">${item.title}</h4>
        <p style="margin-bottom:0.45rem;"><strong>What is required:</strong> ${item.what}</p>
        <p style="margin-bottom:0.55rem;"><strong>Why it matters:</strong> ${item.why}</p>
        <div class="nb-example" style="margin-top:0; background:#ffffff;">
          <strong>Cross-Layer Link:</strong> ${item.dep}
        </div>
      `;
    }

    function toggleExitAnswer() {
      const drawer = document.getElementById("exit-answer-drawer");
      const btn = document.getElementById("reveal-exit-btn");
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.textContent = isOpen ? "Hide Model Answer" : "Reveal Model 1-Sentence Answer & Breakdown";
    }


  root.querySelectorAll('[data-university-mode]').forEach(button => button.addEventListener('click', () => setUniMode(button.dataset.universityMode)));
  root.querySelectorAll('[data-registration-layer]').forEach(button => button.addEventListener('click', () => showRegLayer(Number(button.dataset.registrationLayer), button)));
  root.querySelector('[data-exit-answer]').addEventListener('click', toggleExitAnswer);
  setUniMode('silo');
  showRegLayer(0, root.querySelector('.nb-reg-tab'));
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
