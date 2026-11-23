// Lecture 1: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "What Software Engineering Is, and What Has Changed",
      "slides": "1–6",
      "html": "<!-- Definition & Foundation -->\n        <div class=\"sub-block\">\n          <div class=\"callout lavender\">\n            <strong>Core Principle:</strong> The foundations of software engineering remain essential even though development environments, user expectations, and delivery models have transformed <span class=\"slide-ref\">slides 5–6</span>.\n          </div>\n\n          <div class=\"sub-title\">Definition &amp; Foundation <span class=\"slide-ref\">slide 5</span></div>\n          <p style=\"font-size: 0.94rem; margin-bottom: 0.75rem;\">\n            <strong>Software engineering</strong> is the systematic application of engineering approaches to the development, operation, and maintenance of software <span class=\"slide-ref\">slide 5</span>. “Systematic” means relying on disciplined engineering methods rather than ad-hoc coding. Requirements, design, implementation, testing, operation, and maintenance are still required—what has changed is how rapidly they repeat and how complex their operating environments have become.\n          </p>\n\n          <div class=\"grid-2\">\n            <div class=\"mini-card\" style=\"background: #dcfce7;\">\n              <h4><span>What Stays Constant (Continuity)</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Disciplined engineering rigor, architecture, and quality assurance.</li>\n                <li>Core lifecycle activities: requirements, design, build, verification, and maintenance.</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #fef9c3;\">\n              <h4><span>What Evolves (Change)</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Distributed technologies, rapid release cycles, and diverse stakeholder demands.</li>\n                <li><em>Example:</em> Online banking requires continuous security patching, live monitoring, and rapid adaptation to new user expectations.</li>\n              </ul>\n            </div>\n          </div>\n</div>\n\n        <!-- Yesterday -> Today -> Tomorrow SVG Timeline -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Computing Era Progression: Yesterday → Today → Tomorrow <span class=\"slide-ref\">slide 4</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 175\" aria-label=\"Yesterday Today Tomorrow Software Progression\">\n              <!-- YESTERDAY -->\n              <rect x=\"10\" y=\"18\" width=\"250\" height=\"140\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"10\" y=\"18\" width=\"250\" height=\"34\" rx=\"8\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"135\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">YESTERDAY</text>\n              <text x=\"135\" y=\"80\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">Desktop</text>\n              <text x=\"135\" y=\"102\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">↓</text>\n              <text x=\"135\" y=\"122\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">Client / Server → Web</text>\n\n              <!-- Arrow 1 -->\n              <path d=\"M266 88 L296 88\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"296,81 308,88 296,95\" fill=\"#000\" />\n\n              <!-- TODAY -->\n              <rect x=\"312\" y=\"18\" width=\"250\" height=\"140\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"312\" y=\"18\" width=\"250\" height=\"34\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"437\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">TODAY</text>\n              <text x=\"437\" y=\"78\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">Cloud → Mobile → AI</text>\n              <text x=\"437\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">↓</text>\n              <text x=\"437\" y=\"122\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">IoT → Distributed Systems</text>\n\n              <!-- Arrow 2 -->\n              <path d=\"M568 88 L598 88\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"598,81 610,88 598,95\" fill=\"#000\" />\n\n              <!-- TOMORROW -->\n              <rect x=\"614\" y=\"18\" width=\"236\" height=\"140\" rx=\"10\" fill=\"#18181B\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"614\" y=\"18\" width=\"236\" height=\"34\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"732\" y=\"40\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#000\">TOMORROW?</text>\n              <text x=\"732\" y=\"78\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"700\" fill=\"#FFF\">AI Agents → AI-Gen Software</text>\n              <text x=\"732\" y=\"100\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#FDE047\">↓</text>\n              <text x=\"732\" y=\"122\" text-anchor=\"middle\" font-size=\"13.5\" font-weight=\"700\" fill=\"#FFF\">Intelligent Systems → ???</text>\n            </svg>\n          </div>\n          <p style=\"font-size: 0.88rem; color: var(--ink-muted);\">\n            Older architectures have not vanished, but modern applications (such as a live delivery platform) integrate mobile clients, cloud backends, payments, maps, and real-time data streams simultaneously <span class=\"slide-ref\">slide 4</span>.\n          </p>\n</div>\n\n        <!-- Traditional vs Modern SDLC SVG Diagram -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Traditional Sequence vs. Modern Continuous Lifecycle <span class=\"slide-ref\">slide 6</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 220\" aria-label=\"Traditional vs Modern Software Development Lifecycle\">\n              <!-- TRADITIONAL ROW -->\n              <text x=\"14\" y=\"26\" font-size=\"12\" font-weight=\"700\">TRADITIONAL (LINEAR SEQUENCE)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"38\" width=\"122\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"75\" y=\"62\">Requirements</text>\n                <path d=\"M136 58 L154 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"154,54 160,58 154,62\" fill=\"#000\" />\n\n                <rect x=\"160\" y=\"38\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"215\" y=\"62\">Design</text>\n                <path d=\"M270 58 L288 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"288,54 294,58 288,62\" fill=\"#000\" />\n\n                <rect x=\"294\" y=\"38\" width=\"126\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"357\" y=\"62\">Implementation</text>\n                <path d=\"M420 58 L438 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"438,54 444,58 438,62\" fill=\"#000\" />\n\n                <rect x=\"444\" y=\"38\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"499\" y=\"62\">Testing</text>\n                <path d=\"M554 58 L572 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"572,54 578,58 572,62\" fill=\"#000\" />\n\n                <rect x=\"578\" y=\"38\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"638\" y=\"62\">Deployment</text>\n                <path d=\"M698 58 L716 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"716,54 722,58 716,62\" fill=\"#000\" />\n\n                <rect x=\"722\" y=\"38\" width=\"124\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"784\" y=\"62\">Maintenance</text>\n              </g>\n\n              <!-- MODERN ROW -->\n              <text x=\"14\" y=\"114\" font-size=\"12\" font-weight=\"700\" fill=\"#000\">MODERN (CONTINUOUS FEEDBACK LOOP)</text>\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"126\" width=\"126\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"77\" y=\"145\">Continuous</text>\n                <text x=\"77\" y=\"160\">Requirements</text>\n                <path d=\"M140 148 L156 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"156,144 162,148 156,152\" fill=\"#000\" />\n\n                <rect x=\"162\" y=\"126\" width=\"114\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"219\" y=\"152\">Development</text>\n                <path d=\"M276 148 L292 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"292,144 298,148 292,152\" fill=\"#000\" />\n\n                <rect x=\"298\" y=\"126\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"353\" y=\"152\">Testing</text>\n                <path d=\"M408 148 L424 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"424,144 430,148 424,152\" fill=\"#000\" />\n\n                <rect x=\"430\" y=\"126\" width=\"118\" height=\"44\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"489\" y=\"152\">Deployment</text>\n                <path d=\"M548 148 L564 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"564,144 570,148 564,152\" fill=\"#000\" />\n\n                <rect x=\"570\" y=\"126\" width=\"122\" height=\"44\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"631\" y=\"152\">Monitoring</text>\n                <path d=\"M692 148 L708 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"708,144 714,148 708,152\" fill=\"#000\" />\n\n                <rect x=\"714\" y=\"126\" width=\"132\" height=\"44\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"780\" y=\"152\">Feedback</text>\n              </g>\n\n              <!-- Feedback Return Loop -->\n              <path d=\"M780 170 L780 198 L77 198 L77 174\" fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\" />\n              <polygon points=\"72,176 77,168 82,176\" fill=\"#000\" />\n              <rect x=\"275\" y=\"187\" width=\"310\" height=\"22\" rx=\"4\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"1.5\" />\n              <text x=\"430\" y=\"202\" text-anchor=\"middle\" font-size=\"10.5\" font-weight=\"700\">↻ EACH STAGE FEEDS THE NEXT CONTINUOUSLY</text>\n            </svg>\n          </div>\n          <p style=\"font-size: 0.9rem;\">\n            Rather than treating deployment as a final finish line, modern systems use post-release telemetry and user feedback to trigger continuous requirements, modifications, and automated tests—though real projects often blend linear and iterative elements <span class=\"slide-ref\">slide 6</span>.\n          </p>\n</div>"
    },
    {
      "title": "The Modern Software Environment & Drivers of Change",
      "slides": "7–10",
      "html": "<!-- Modern Tech Stack -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Multi-Disciplinary Modern Stack <span class=\"slide-ref\">slide 7</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.85rem;\">\n            <span class=\"tag cyan\">Cloud Computing</span>\n            <span class=\"tag cyan\">Mobile Platforms</span>\n            <span class=\"tag cyan\">APIs</span>\n            <span class=\"tag cyan\">Microservices</span>\n            <span class=\"tag mint\">DevOps</span>\n            <span class=\"tag lavender\">Artificial Intelligence</span>\n            <span class=\"tag yellow\">IoT</span>\n            <span class=\"tag yellow\">Edge Computing</span>\n            <span class=\"tag coral\">Cybersecurity</span>\n            <span class=\"tag mint\">Big Data</span>\n            <span class=\"tag lavender\">Distributed Teams</span>\n          </div>\n          <div class=\"callout yellow\" style=\"margin-bottom: 0;\">\n            <strong>Engineering Reality &amp; New Mindset <span class=\"slide-ref\">slides 7–8</span>:</strong> No single engineer can master every layer deeply. Modern software engineering shifts from asking only <em>“How do we build software?”</em> to evaluating <strong><em>“What new technology or approach builds better software?”</em></strong> and <strong><em>“When should we use it?”</em></strong>\n          </div>\n</div>\n\n        <!-- 4 Drivers of Change -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Four Forces Shaping Software Engineering <span class=\"slide-ref\">slide 9</span></div>\n          <div class=\"grid-4\">\n            <div class=\"mini-card\" style=\"background: #e0f2fe;\">\n              <h4><span><svg class=\"lucide lucide-zap summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.9 5.96A1 1 0 0 0 14 10h6a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.9-5.96A1 1 0 0 0 11 14z\"/></svg> Technology</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Artificial Intelligence</li>\n                <li>Cloud Computing</li>\n                <li>Internet of Things (IoT)</li>\n                <li>Edge Computing</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #fef9c3;\">\n              <h4><span><svg class=\"lucide lucide-trending-up summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m22 7-8.5 8.5-5-5L2 17\"/><path d=\"M16 7h6v6\"/></svg> Business</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Faster time-to-market</li>\n                <li>Digital transformation</li>\n                <li>Platform economy models</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #dcfce7;\">\n              <h4><span><svg class=\"lucide lucide-smartphone summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/></svg> Users</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Hyper-personalization</li>\n                <li>24/7 high availability</li>\n                <li>Mobile-first experiences</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #ffe4e6;\">\n              <h4><span><svg class=\"lucide lucide-earth summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 3v2a2 2 0 0 0 2 2h0a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2h3a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2v4M3 12h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h0a2 2 0 0 1 2 2v3\"/></svg> Society</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Data privacy &amp; compliance</li>\n                <li>Environmental sustainability</li>\n                <li>Accessibility &amp; digital trust</li>\n              </ul>\n            </div>\n          </div>\n</div>\n\n        <!-- Speed of Change Cycle SVG -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">The Speed of Change Cycle <span class=\"slide-ref\">slide 10</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 120\" aria-label=\"Speed of Change Cycle\">\n              <g font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"12\" y=\"20\" width=\"180\" height=\"52\" rx=\"8\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"102\" y=\"42\">1. New Technology</text>\n                <text x=\"102\" y=\"59\" font-size=\"11\" font-weight=\"500\">(e.g., Accessible AI)</text>\n\n                <path d=\"M192 46 L220 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"220,41 228,46 220,51\" fill=\"#000\" />\n\n                <rect x=\"228\" y=\"20\" width=\"185\" height=\"52\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"320\" y=\"42\">2. New Capability</text>\n                <text x=\"320\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Smart automation)</text>\n\n                <path d=\"M413 46 L441 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"441,41 449,46 441,51\" fill=\"#000\" />\n\n                <rect x=\"449\" y=\"20\" width=\"190\" height=\"52\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"544\" y=\"42\">3. User Expectation</text>\n                <text x=\"544\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Users demand AI features)</text>\n\n                <path d=\"M639 46 L667 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"667,41 675,46 667,51\" fill=\"#000\" />\n\n                <rect x=\"675\" y=\"20\" width=\"173\" height=\"52\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"761\" y=\"42\">4. New SE Problem</text>\n                <text x=\"761\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Safety, cost, reliability)</text>\n              </g>\n              <text x=\"430\" y=\"102\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\">KEY TAKEAWAY: EVERY NEW TECHNOLOGY CREATES BOTH OPPORTUNITIES AND NEW ENGINEERING CHALLENGES.</text>\n            </svg>\n          </div>\n</div>"
    },
    {
      "title": "Current Software Engineering Trends",
      "slides": "11–16",
      "html": "<!-- Top 10 Trends Overview -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Top 10 Industry Trends <span class=\"slide-ref\">slide 11</span></div>\n          <div class=\"grid-2\">\n            <ul class=\"brutal-list\">\n              <li><strong>01.</strong> AI-assisted software development</li>\n              <li><strong>02.</strong> DevOps &amp; continuous delivery</li>\n              <li><strong>03.</strong> Cloud-native development</li>\n              <li><strong>04.</strong> Microservices architecture</li>\n              <li><strong>05.</strong> Platform engineering</li>\n            </ul>\n            <ul class=\"brutal-list\">\n              <li><strong>06.</strong> Low-code / no-code platforms</li>\n              <li><strong>07.</strong> Software supply-chain security</li>\n              <li><strong>08.</strong> Data-driven software engineering</li>\n              <li><strong>09.</strong> Green / sustainable software engineering</li>\n              <li><strong>10.</strong> Human-AI collaboration</li>\n            </ul>\n          </div>\n</div>\n\n        <!-- Trend #1: AI-Assisted SE & Shifting Developer Role -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #1: AI-Assisted Software Engineering &amp; Role Shift <span class=\"slide-ref\">slides 12–13</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.85rem;\">\n            <span class=\"tag lavender\">Code Generation</span>\n            <span class=\"tag lavender\">Code Completion</span>\n            <span class=\"tag lavender\">Test Generation</span>\n            <span class=\"tag lavender\">Bug Detection</span>\n            <span class=\"tag lavender\">Requirements Analysis</span>\n            <span class=\"tag lavender\">Documentation</span>\n            <span class=\"tag lavender\">Code Review</span>\n          </div>\n\n          <div class=\"grid-2\">\n            <div class=\"mini-card\" style=\"background: #f4f4f5;\">\n              <h4><span>Old View: Code Producer</span> <span class=\"slide-ref\">slide 13</span></h4>\n              <p style=\"font-size: 0.9rem;\"><strong>Developer → Writes code</strong> manually line-by-line as the primary bottleneck.</p>\n            </div>\n            <div class=\"mini-card\" style=\"background: #dcfce7;\">\n              <h4><span>Emerging View: System Orchestrator</span> <span class=\"slide-ref\">slide 13</span></h4>\n              <p style=\"font-size: 0.9rem;\"><strong>Developer → Specifies, evaluates, verifies, and orchestrates</strong> AI-assisted workflows. AI shifts where engineering effort is applied rather than eliminating engineers.</p>\n            </div>\n          </div>\n</div>\n\n        <!-- Trend #2: DevOps -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #2: DevOps &amp; Whole-Lifecycle Ownership <span class=\"slide-ref\">slide 14</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Traditional Silos vs Modern DevOps Loop\">\n              <!-- Traditional Silo -->\n              <text x=\"16\" y=\"25\" font-size=\"11.5\" font-weight=\"700\">TRADITIONAL (SILOED HANDOFF)</text>\n              <rect x=\"16\" y=\"36\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"91\" y=\"61\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">Development</text>\n              <line x1=\"182\" y1=\"32\" x2=\"182\" y2=\"82\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-dasharray=\"4,3\" />\n              <rect x=\"198\" y=\"36\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"273\" y=\"61\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">Operations</text>\n              <text x=\"372\" y=\"60\" font-size=\"12.5\" font-weight=\"700\" fill=\"#3F3F46\">→ Software engineering covers the ENTIRE lifecycle, not just coding.</text>\n\n              <!-- Modern DevOps Pipeline -->\n              <text x=\"16\" y=\"104\" font-size=\"11.5\" font-weight=\"700\">MODERN DEVOPS (DEV + OPS CONTINUOUS FLOW)</text>\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"60\" y=\"134\">Plan</text>\n                <text x=\"112\" y=\"134\">→</text>\n                <rect x=\"120\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"164\" y=\"134\">Code</text>\n                <text x=\"216\" y=\"134\">→</text>\n                <rect x=\"224\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"268\" y=\"134\">Build</text>\n                <text x=\"320\" y=\"134\">→</text>\n                <rect x=\"328\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"372\" y=\"134\">Test</text>\n                <text x=\"424\" y=\"134\">→</text>\n                <rect x=\"432\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"478\" y=\"134\">Release</text>\n                <text x=\"532\" y=\"134\">→</text>\n                <rect x=\"540\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"586\" y=\"134\">Deploy</text>\n                <text x=\"640\" y=\"134\">→</text>\n                <rect x=\"648\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"694\" y=\"134\">Monitor</text>\n                <text x=\"748\" y=\"134\">→</text>\n                <rect x=\"756\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"802\" y=\"134\">Feedback</text>\n              </g>\n            </svg>\n          </div>\n</div>\n\n        <!-- Trend #3: Cloud-Native Software -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #3: Cloud-Native Software Architecture <span class=\"slide-ref\">slide 15</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.75rem;\">\n            <span class=\"tag cyan\">Containers</span>\n            <span class=\"tag cyan\">Microservices</span>\n            <span class=\"tag cyan\">APIs</span>\n            <span class=\"tag cyan\">Elasticity</span>\n            <span class=\"tag cyan\">Distributed Systems</span>\n            <span class=\"tag cyan\">Continuous Deployment</span>\n          </div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 150\" aria-label=\"Monolithic vs Microservices Architecture\">\n              <!-- Monolith -->\n              <rect x=\"20\" y=\"16\" width=\"230\" height=\"118\" rx=\"10\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"135\" y=\"42\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">MONOLITHIC APP</text>\n              <rect x=\"42\" y=\"54\" width=\"186\" height=\"64\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"135\" y=\"82\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">User + Payment + Order</text>\n              <text x=\"135\" y=\"100\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">+ Notification + Recs</text>\n\n              <!-- Arrow -->\n              <path d=\"M268 75 L312 75\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"312,69 324,75 312,81\" fill=\"#000\" />\n              <text x=\"296\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\">DECOUPLE</text>\n\n              <!-- Microservices -->\n              <rect x=\"336\" y=\"16\" width=\"504\" height=\"118\" rx=\"10\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"588\" y=\"38\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">CLOUD-NATIVE MICROSERVICES (API-CONNECTED)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"354\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"396\" y=\"87\">User</text>\n                <rect x=\"450\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"492\" y=\"87\">Payment</text>\n                <rect x=\"546\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"588\" y=\"87\">Order</text>\n                <rect x=\"642\" y=\"54\" width=\"90\" height=\"58\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"687\" y=\"87\">Notification</text>\n                <rect x=\"744\" y=\"54\" width=\"82\" height=\"58\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"785\" y=\"87\">Recs AI</text>\n              </g>\n            </svg>\n          </div>\n</div>\n\n        <!-- Trend #4: Low-Code / No-Code -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #4: Low-Code / No-Code Development <span class=\"slide-ref\">slide 16</span></div>\n          <div class=\"grid-2\">\n            <div class=\"mini-card\" style=\"background: #dcfce7;\">\n              <h4><span>Core Capabilities</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Visual model-driven development environments</li>\n                <li>Pre-built drag-and-drop UI and logic components</li>\n                <li>Empowers non-specialist “citizen developers”</li>\n                <li>Rapid application prototyping and delivery</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #ffe4e6;\">\n              <h4><span>Engineering Concerns</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>Security:</strong> Hidden vulnerabilities and access governance</li>\n                <li><strong>Scalability:</strong> Performance ceilings under heavy load</li>\n                <li><strong>Integration:</strong> Friction with legacy or custom enterprise APIs</li>\n                <li><strong>Maintainability &amp; Vendor Lock-In:</strong> Proprietary platform dependency</li>\n              </ul>\n            </div>\n          </div>\n</div>"
    },
    {
      "title": "Emerging Technologies & Architectural Shifts",
      "slides": "17–23",
      "html": "<!-- Current vs Emerging & Taxonomy -->\n        <div class=\"sub-block\">\n          <div class=\"grid-2\" style=\"margin-bottom: 1rem;\">\n            <div class=\"mini-card\" style=\"background: #f4f4f5;\">\n              <h4><span>Current Technology</span> <span class=\"slide-ref\">slide 17</span></h4>\n              <p style=\"font-size: 0.9rem;\">Already widely adopted and established as mainstream industry practice (e.g., standard web/cloud stacks).</p>\n            </div>\n            <div class=\"mini-card\" style=\"background: #fef9c3;\">\n              <h4><span>Emerging Technology</span> <span class=\"slide-ref\">slide 17</span></h4>\n              <p style=\"font-size: 0.9rem;\">Capabilities, use cases, or industry adoption are still actively evolving—such as <strong>Generative AI, AI agents, Digital twins, Edge AI, Extended reality (XR), Autonomous systems,</strong> and <strong>Quantum computing</strong>.</p>\n            </div>\n          </div>\n\n          <div class=\"sub-title\">Emerging Technology Taxonomy (4 Domains) <span class=\"slide-ref\">slide 18</span></div>\n          <div class=\"grid-4\">\n            <div class=\"mini-card\" style=\"background: #eeeeff;\">\n              <h4><span><svg class=\"lucide lucide-brain summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M12 18V5a3 3 0 0 0-5.8-1.1 4 4 0 0 0-3.9 5.7 4 4 0 0 0 .6 7.5A4 4 0 1 0 12 18ZM12 18V5a3 3 0 0 1 5.8-1.1 4 4 0 0 1 3.9 5.7 4 4 0 0 1-.6 7.5A4 4 0 1 1 12 18Z\"/><path d=\"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4M17.6 6.5a3 3 0 0 0 .2-2.6M6.2 3.9a3 3 0 0 0 .2 2.6M3.9 10a4 4 0 0 0-1.6-.4M21.7 9.6a4 4 0 0 0-1.6.4M6 18a4 4 0 0 1-3.1-.9M21.1 17.1A4 4 0 0 1 18 18\"/></svg> AI</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Generative AI</li>\n                <li>AI Agents</li>\n                <li>Multimodal AI</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #e0f2fe;\">\n              <h4><span><svg class=\"lucide lucide-laptop summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12M2 16h20l-1.3 4a2 2 0 0 1-1.9 1.4H5.2A2 2 0 0 1 3.3 20Z\"/></svg> Computing</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Edge Computing</li>\n                <li>Quantum Computing</li>\n                <li>Cloud Infrastructure</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #dcfce7;\">\n              <h4><span><svg class=\"lucide lucide-link summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/></svg> Connected Systems</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Internet of Things (IoT)</li>\n                <li>Digital Twins</li>\n                <li>Autonomous Systems</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: #fef9c3;\">\n              <h4><span><svg class=\"lucide lucide-wrench summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z\"/></svg> Development</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Low-Code Platforms</li>\n                <li>AI-Assisted Dev</li>\n                <li>Platform Engineering</li>\n              </ul>\n            </div>\n          </div>\n</div>\n\n        <!-- Generative AI & AI Agents -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Generative AI Across SDLC &amp; Autonomous AI Agents <span class=\"slide-ref\">slides 19–20</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.75rem;\">\n            <strong>Generative AI</strong> participates across all six lifecycle stages: <strong>Requirements</strong> (drafting specs), <strong>Design</strong>, <strong>Coding</strong> (code synthesis), <strong>Testing</strong> (test case generation), <strong>Documentation</strong>, and <strong>Maintenance</strong> (code review and analysis)—raising critical questions around correctness and reliability <span class=\"slide-ref\">slide 19</span>.\n          </p>\n\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Traditional AI vs Agentic AI System\">\n              <!-- Traditional AI -->\n              <text x=\"16\" y=\"24\" font-size=\"11.5\" font-weight=\"700\">TRADITIONAL AI (SINGLE PROMPT-RESPONSE)</text>\n              <g font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"34\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"81\" y=\"57\">User Prompt</text>\n                <text x=\"164\" y=\"57\">→</text>\n                <rect x=\"182\" y=\"34\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"247\" y=\"57\">AI Model</text>\n                <text x=\"330\" y=\"57\">→</text>\n                <rect x=\"348\" y=\"34\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"418\" y=\"57\">Static Answer</text>\n              </g>\n\n              <!-- Agentic System -->\n              <text x=\"16\" y=\"98\" font-size=\"11.5\" font-weight=\"700\">AGENTIC SYSTEM (AUTONOMOUS GOAL-DRIVEN LOOP)</text>\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"71\" y=\"130\">1. Goal</text>\n                <text x=\"138\" y=\"130\">→</text>\n                <rect x=\"150\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"205\" y=\"130\">2. Plan</text>\n                <text x=\"272\" y=\"130\">→</text>\n                <rect x=\"284\" y=\"108\" width=\"122\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"345\" y=\"130\">3. Use Tools</text>\n                <text x=\"418\" y=\"130\">→</text>\n                <rect x=\"430\" y=\"108\" width=\"142\" height=\"36\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"501\" y=\"130\">4. Perform Actions</text>\n                <text x=\"584\" y=\"130\">→</text>\n                <rect x=\"596\" y=\"108\" width=\"115\" height=\"36\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"653\" y=\"130\">5. Evaluate</text>\n                <text x=\"723\" y=\"130\">→</text>\n                <rect x=\"735\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"790\" y=\"130\">6. Adapt</text>\n              </g>\n            </svg>\n          </div>\n          <p style=\"font-size: 0.88rem; color: var(--ink-muted);\">\n            When AI agents join development workflows as active collaborators, governance, verification boundaries, and human oversight become core engineering concerns <span class=\"slide-ref\">slide 20</span>.\n          </p>\n</div>\n\n        <!-- Digital Twins, Edge & Quantum -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Digital Twins, Edge Computing &amp; Quantum Computing <span class=\"slide-ref\">slides 21–23</span></div>\n\n          <div class=\"grid-2\" style=\"margin-bottom: 1rem;\">\n            <!-- Digital Twins -->\n            <div class=\"mini-card\">\n              <h4><span><svg class=\"lucide lucide-copy summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></svg> Digital Twins</span> <span class=\"slide-ref\">slide 21</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.5rem;\">\n                A live virtual replica of a physical system continuously synchronized using real-world sensor telemetry.\n              </p>\n              <ul class=\"brutal-list\">\n                <li><strong>Domains:</strong> Smart factories, buildings, autonomous vehicles, smart cities, healthcare equipment.</li>\n                <li><strong>Engineering Challenge:</strong> Developing, integrating, testing, and maintaining software coupled to a continuously changing physical environment.</li>\n              </ul>\n            </div>\n\n            <!-- Quantum Computing -->\n            <div class=\"mini-card\">\n              <h4><span><svg class=\"lucide lucide-atom summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2-2-0.1-7.2-4.7-11.7S5.8 1.8 3.8 3.8s.1 7.2 4.7 11.7 9.7 6.7 11.7 4.7Z\"/><path d=\"M15.5 15.5c4.6-4.5 6.7-9.7 4.7-11.7S13 3.9 8.5 8.5 1.8 18.2 3.8 20.2s7.2-.1 11.7-4.7Z\"/></svg> Quantum Computing</span> <span class=\"slide-ref\">slide 23</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.5rem;\">\n                <strong>Critical Distinction:</strong> Quantum computing is <em>not</em> merely a “faster classical computer.” It introduces fundamentally different computational models requiring redesigned algorithms and cryptographic systems.\n              </p>\n              <ul class=\"brutal-list\">\n                <li><strong>Target Domains:</strong> Combinatorial optimization, post-quantum cryptography, molecular/physical simulation, and machine learning.</li>\n              </ul>\n            </div>\n          </div>\n\n          <!-- Edge Computing SVG Topology -->\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Cloud vs Edge Computing Topology\">\n              <!-- Cloud Only -->\n              <text x=\"16\" y=\"24\" font-size=\"11.5\" font-weight=\"700\">CENTRALIZED CLOUD MODEL (HIGHER LATENCY &amp; BANDWIDTH)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"34\" width=\"150\" height=\"36\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"91\" y=\"57\">IoT / Vehicle Device</text>\n                <path d=\"M166 52 L336 52\" stroke=\"#000\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\" /><polygon points=\"336,47 344,52 336,57\" fill=\"#000\" />\n                <text x=\"255\" y=\"45\" font-size=\"10\">Long-haul Internet</text>\n                <rect x=\"344\" y=\"34\" width=\"150\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"419\" y=\"57\">Central Cloud</text>\n              </g>\n\n              <!-- Edge Model -->\n              <text x=\"16\" y=\"98\" font-size=\"11.5\" font-weight=\"700\">EDGE COMPUTING MODEL (SLIDE 22)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"108\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"86\" y=\"130\">Sensor / Vehicle</text>\n                <path d=\"M156 126 L186 126\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"186,121 194,126 186,131\" fill=\"#000\" />\n                <rect x=\"194\" y=\"108\" width=\"175\" height=\"36\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"281\" y=\"130\">Nearby Edge Compute</text>\n                <path d=\"M369 126 L399 126\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"399,121 407,126 399,131\" fill=\"#000\" />\n                <rect x=\"407\" y=\"108\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"472\" y=\"130\">Cloud Sync</text>\n              </g>\n              <text x=\"556\" y=\"122\" font-size=\"11.5\" font-weight=\"700\">✓ Low latency (autonomous braking)</text>\n              <text x=\"556\" y=\"139\" font-size=\"11.5\" font-weight=\"700\">✓ Reduced bandwidth &amp; local privacy</text>\n            </svg>\n          </div>\n</div>"
    },
    {
      "title": "Engineering Trade-Offs, Evaluation Framework & Synthesis",
      "slides": "24–31",
      "html": "<!-- Trade-off Table (Slide 24) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">The Hidden Side of Technology: Benefits vs. New Concerns <span class=\"slide-ref\">slide 24</span></div>\n          <div class=\"table-wrap\">\n            <table class=\"brutal-table\">\n              <thead>\n                <tr>\n                  <th>Technology</th>\n                  <th>Primary Engineering Benefit</th>\n                  <th>New Engineering Concern</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Generative AI</strong></td>\n                  <td>Faster code &amp; artifact development</td>\n                  <td>Hallucinations, subtle bugs &amp; security flaws</td>\n                </tr>\n                <tr>\n                  <td><strong>Cloud Computing</strong></td>\n                  <td>Elastic scalability &amp; global reach</td>\n                  <td>Architectural &amp; operational complexity</td>\n                </tr>\n                <tr>\n                  <td><strong>IoT</strong></td>\n                  <td>Connected physical-digital systems</td>\n                  <td>Expanded attack surface &amp; device security</td>\n                </tr>\n                <tr>\n                  <td><strong>AI Agents</strong></td>\n                  <td>End-to-end task automation</td>\n                  <td>Loss of deterministic control &amp; trust</td>\n                </tr>\n                <tr>\n                  <td><strong>Low-Code</strong></td>\n                  <td>Rapid application delivery</td>\n                  <td>Long-term maintainability &amp; vendor lock-in</td>\n                </tr>\n                <tr>\n                  <td><strong>Edge Computing</strong></td>\n                  <td>Ultra-low latency &amp; local processing</td>\n                  <td>Distributed state &amp; deployment complexity</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n</div>\n\n        <!-- 6 SE Evaluation Questions (Slide 25) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Six Critical Questions for Evaluating Any Emerging Technology <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"grid-3\">\n            <div class=\"mini-card\"><h4><span>Q1 // Problem Fit</span></h4><p style=\"font-size: 0.88rem;\">What concrete engineering problem does it solve?</p></div>\n            <div class=\"mini-card\"><h4><span>Q2 // Mechanism</span></h4><p style=\"font-size: 0.88rem;\">How does it actually work under the hood?</p></div>\n            <div class=\"mini-card\"><h4><span>Q3 // Applicability</span></h4><p style=\"font-size: 0.88rem;\">When is it genuinely useful versus overkill?</p></div>\n            <div class=\"mini-card\"><h4><span>Q4 // Boundaries</span></h4><p style=\"font-size: 0.88rem;\">What are its technical and operational limitations?</p></div>\n            <div class=\"mini-card\"><h4><span>Q5 // Side Effects</span></h4><p style=\"font-size: 0.88rem;\">What new engineering problems or risks does it create?</p></div>\n            <div class=\"mini-card\"><h4><span>Q6 // Feasibility</span></h4><p style=\"font-size: 0.88rem;\">Can our team realistically adopt, test, and maintain it?</p></div>\n          </div>\n</div>\n\n        <!-- Technology Detective & Worked Case Study (Slides 26–27) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Applied Technology Analysis: Generative AI Case Study <span class=\"slide-ref\">slides 26–27</span></div>\n          <div class=\"grid-2\">\n            <div class=\"callout cyan\" style=\"margin-bottom: 0;\">\n              <strong>Technology Detective Analysis Framework <span class=\"slide-ref\">slide 26</span>:</strong><br />\n              Evaluate candidate technologies (<em>Generative AI, AI agents, Cloud, IoT, Digital twins, Low-code, Edge computing</em>) across four dimensions:\n              <ul class=\"brutal-list\" style=\"margin-top: 0.45rem;\">\n                <li><strong>1.</strong> Core problem solved</li>\n                <li><strong>2.</strong> Real-world application context</li>\n                <li><strong>3.</strong> Primary measurable benefit</li>\n                <li><strong>4.</strong> Key engineering challenge</li>\n              </ul>\n            </div>\n\n            <div class=\"mini-card\" style=\"background: #fef9c3;\">\n              <h4><span>Worked Example: Generative AI</span> <span class=\"slide-ref\">slide 27</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>Problem:</strong> Developers spend substantial time writing boilerplate code and documentation.</li>\n                <li><strong>Application:</strong> Synthesizing source code, unit tests, and technical docs.</li>\n                <li><strong>Benefit:</strong> Accelerates initial development velocity.</li>\n                <li><strong>Challenge:</strong> Output may be factually wrong, insecure, or license-inappropriate—requiring mandatory human review and automated testing before trust.</li>\n              </ul>\n            </div>\n          </div>\n</div>\n\n        <!-- Holistic Modern SE Hub SVG & Course Methodology (Slides 28–31) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Holistic Modern Software Engineering &amp; Course Inquiry Cycle <span class=\"slide-ref\">slides 28–31</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 190\" aria-label=\"Modern Software Engineering Ecosystem Hub\">\n              <!-- Center Core -->\n              <rect x=\"305\" y=\"64\" width=\"250\" height=\"62\" rx=\"12\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"3\" />\n              <text x=\"430\" y=\"91\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">MODERN SOFTWARE</text>\n              <text x=\"430\" y=\"111\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">ENGINEERING</text>\n\n              <!-- Top Row Satellites -->\n              <g font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"30\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"85\" y=\"34\">AI &amp; Agents</text>\n                <rect x=\"195\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"250\" y=\"34\">Cloud</text>\n                <rect x=\"375\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"34\">DevOps</text>\n                <rect x=\"555\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"610\" y=\"34\">IoT &amp; Edge</text>\n                <rect x=\"720\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"775\" y=\"34\">Big Data</text>\n\n                <!-- Bottom Row Satellites -->\n                <rect x=\"85\" y=\"144\" width=\"125\" height=\"32\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"147\" y=\"164\">Security</text>\n                <rect x=\"355\" y=\"144\" width=\"150\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"164\">Sustainability</text>\n                <rect x=\"640\" y=\"144\" width=\"145\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"712\" y=\"164\">Human Factors</text>\n              </g>\n\n              <!-- Spokes -->\n              <line x1=\"140\" y1=\"38\" x2=\"305\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"275\" y1=\"46\" x2=\"345\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"430\" y1=\"46\" x2=\"430\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"585\" y1=\"46\" x2=\"515\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"720\" y1=\"38\" x2=\"555\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"210\" y1=\"152\" x2=\"315\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"430\" y1=\"144\" x2=\"430\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"640\" y1=\"152\" x2=\"545\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n            </svg>\n          </div>\n\n          <!-- 6-Stage Course Inquiry Workflow (Slide 29) -->\n          <div style=\"margin: 0.95rem 0;\">\n            <div class=\"sub-title\">6-Stage Engineering Inquiry Workflow <span class=\"slide-ref\">slide 29</span></div>\n            <div class=\"grid-3\">\n              <div class=\"mini-card\"><h4><span>1. EXPLORE</span></h4><p style=\"font-size: 0.85rem;\">What is emerging?</p></div>\n              <div class=\"mini-card\"><h4><span>2. UNDERSTAND</span></h4><p style=\"font-size: 0.85rem;\">How does it work?</p></div>\n              <div class=\"mini-card\"><h4><span>3. ANALYSE</span></h4><p style=\"font-size: 0.85rem;\">What problem does it address?</p></div>\n              <div class=\"mini-card\"><h4><span>4. EVALUATE</span></h4><p style=\"font-size: 0.85rem;\">What are its opportunities &amp; limits?</p></div>\n              <div class=\"mini-card\"><h4><span>5. APPLY</span></h4><p style=\"font-size: 0.85rem;\">Where could it be used?</p></div>\n              <div class=\"mini-card\"><h4><span>6. SYNTHESIZE</span></h4><p style=\"font-size: 0.85rem;\">How can it solve a real-world SE problem?</p></div>\n            </div>\n          </div>\n\n          <!-- Take-Home Summary (Slide 31) -->\n          <div class=\"callout mint\" style=\"margin-bottom: 0;\">\n            <strong>Take-Home Synthesis <span class=\"slide-ref\">slides 28, 31</span>:</strong>\n            <ul class=\"brutal-list\" style=\"margin-top: 0.45rem;\">\n              <li><strong>1.</strong> Software engineering is continuously evolving—not just in tools, but in how systems are architected, verified, and operated.</li>\n              <li><strong>2.</strong> Every emerging technology introduces new capabilities alongside new engineering risks and trade-offs.</li>\n              <li><strong>3.</strong> Effective software engineers understand not only <em>WHAT</em> a technology does, but <em>WHEN</em> and <em>HOW</em> it should be responsibly applied.</li>\n            </ul>\n            <div style=\"margin-top: 0.75rem; font-family: inherit; font-size: 0.78rem; font-weight: 700;\">\n              NEXT UP → Lecture 2: Ethics and Social Responsibility in Software Engineering\n            </div>\n          </div>\n</div>"
    }
  ],
  "essays": [
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 8,
      "slides": "4–5",
      "question": "Define software engineering and explain why its fundamental principles remain relevant despite technological change.",
      "points": [
        "Correct lecture definition",
        "Disciplined development, operation and maintenance",
        "Stable engineering principles",
        "Changing environment and suitable example"
      ],
      "answer": "Software engineering is the systematic application of engineering approaches to the development, operation and maintenance of software. It means using disciplined processes and technical judgement to create software that can work reliably and be maintained over time.\n\nThe fundamental engineering principles remain relevant because every system still needs clearly understood requirements, appropriate design, implementation, testing and maintenance. However, the environment in which those principles are applied has changed. Modern applications may use cloud services, mobile devices, AI, IoT and distributed systems rather than a single desktop program. This increases integration and operational challenges.\n\nFor example, an online service still needs software testing, but it may also need continuous monitoring after deployment because users interact with it throughout the day. Therefore, software engineering has not lost its foundations. Instead, engineers must apply those foundations to newer technologies and continuously evolving systems."
    },
    {
      "topic": "Foundations",
      "kind": "Compare",
      "marks": 10,
      "slides": "4–6",
      "question": "Compare traditional and modern software engineering processes. Explain why continuous feedback has become important.",
      "points": [
        "Traditional sequence",
        "Modern feedback loop",
        "Clear operational distinction",
        "Benefits of repeated feedback",
        "Concrete example"
      ],
      "answer": "The traditional software engineering process shown in the lecture follows a mainly sequential pattern: requirements, design, implementation, testing, deployment and maintenance. This representation suggests that work progresses through successive stages before the product enters long-term use.\n\nThe modern process places continuous requirements, development, testing, deployment, monitoring and feedback within a repeating cycle. After software has been deployed, monitoring may reveal errors or changing user needs. This evidence can generate new requirements and lead to another round of development and testing.\n\nFor example, a mobile banking application might receive feedback that its payment confirmation screen is confusing. The development team can use that feedback to refine requirements, update the interface, test it and deploy an improvement. Continuous feedback helps a system respond to real usage rather than relying only on assumptions made before release. The two models illustrate different approaches; modern practice does not remove the importance of disciplined requirements, testing or maintenance."
    },
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 8,
      "slides": "4, 7",
      "question": "Describe the evolution from yesterday’s software to today’s software and the emerging direction suggested by the lecture.",
      "points": [
        "Yesterday: desktop/client-server/web",
        "Today: cloud/mobile/AI/IoT/distributed",
        "Tomorrow: agents/AI generated/intelligent",
        "Engineering implications"
      ],
      "answer": "The lecture describes yesterday’s software as progressing from desktop applications to client/server systems and then web-based applications. This development expanded software access from a local computer toward connected users and systems.\n\nToday’s environment includes cloud computing, mobile applications, artificial intelligence, the Internet of Things and distributed systems. Many current services combine several of these technologies. For example, a ride-hailing application may use a mobile interface, online maps, cloud processing, digital payment services and data shared between multiple components.\n\nThe lecture identifies AI agents, AI-generated software and intelligent systems as possible future directions. These approaches may automate more complex tasks, but they also create new questions about correctness, control and trust. Overall, software engineering is moving toward increasingly connected and adaptive systems. Engineers still need the core skills of requirements analysis, design, testing and maintenance to manage this complexity."
    },
    {
      "topic": "Drivers",
      "kind": "Analyse",
      "marks": 10,
      "slides": "8–10",
      "question": "Analyse four factors that are driving change in modern software engineering and provide an example of how they interact.",
      "points": [
        "Technology",
        "Business",
        "Users",
        "Society",
        "Integrated scenario"
      ],
      "answer": "Modern software engineering is shaped by four major forces: technology, business needs, user expectations and society. Technology introduces capabilities such as AI, cloud computing, IoT and edge processing. These capabilities allow developers to build functions that were previously difficult or expensive.\n\nBusinesses want faster delivery, digital transformation and participation in platform-based markets, so they often adopt tools and processes that shorten the time needed to deliver useful software. Users increasingly expect personalised, mobile-first and continuously available services. At the same time, society expects attention to privacy, accessibility, sustainability and trust.\n\nThese forces interact. For example, a company may introduce AI recommendations because the technology is available and customers want more personalised experiences. The business expects higher engagement, but engineers must also consider how information is collected and whether recommendations can be trusted. Therefore, engineering decisions cannot be based on technological capability alone; they must balance practical business needs, users and wider concerns."
    },
    {
      "topic": "Drivers",
      "kind": "Apply",
      "marks": 8,
      "slides": "10",
      "question": "Explain the chain “technology → new capability → new user expectation → new software problem” using an AI-based application.",
      "points": [
        "Correct chain",
        "AI capability",
        "New expectation",
        "Engineering difficulty",
        "Conclusion"
      ],
      "answer": "The lecture explains that a new technology often creates a new capability, which changes what users expect from software. Meeting that expectation then introduces a new engineering problem.\n\nFor example, widely available generative AI makes it possible to build applications that answer questions and produce written content. Once users experience this capability, they may expect an educational platform to provide instant explanations and tailored learning support. Developers then face the challenge of integrating an AI feature into the platform.\n\nHowever, the new function introduces concerns about incorrect or misleading outputs, security and whether generated information is suitable for the learner. Engineers must define requirements, evaluate the generated answers and test how the feature behaves. Thus, technological progress creates benefits and additional engineering responsibilities simultaneously. The correct question is not only whether AI is available, but whether it can be integrated dependably to solve the intended problem."
    },
    {
      "topic": "Trends",
      "kind": "Explain",
      "marks": 10,
      "slides": "11",
      "question": "Identify the ten current software engineering trends named in the lecture and explain any four of them.",
      "points": [
        "List all ten lecture terms",
        "Explain AI assistance",
        "Explain DevOps",
        "Explain cloud-native/microservices",
        "Explain one other trend"
      ],
      "answer": "The ten current trends identified in the lecture are AI-assisted software development; DevOps and continuous delivery; cloud-native development; microservices; platform engineering; low-code/no-code; software supply-chain security; data-driven software engineering; green or sustainable software engineering; and human–AI collaboration.\n\nAI-assisted development allows software engineers to use AI in coding, test generation, documentation and related tasks, but the results must still be checked. DevOps and continuous delivery bring development and operational activities together in a lifecycle of planning, building, testing, deploying, monitoring and feedback. Cloud-native development combines capabilities such as containers, APIs, distributed systems and elasticity to support modern deployments. Microservices organise a system into smaller service components, such as separate payment and order functions.\n\nLow-code/no-code is another important trend, allowing rapid visual development through ready-made components. However, security and maintainability remain engineering concerns. All these trends show that current software engineering involves more than writing program code; it also includes selecting approaches and managing their consequences."
    },
    {
      "topic": "AI-assisted",
      "kind": "Explain",
      "marks": 10,
      "slides": "12–13",
      "question": "Explain seven ways AI can assist software development and discuss how AI changes the developer’s role.",
      "points": [
        "Seven uses from slide 12",
        "Old role",
        "New specification/evaluation/verification/orchestration role",
        "Need for human responsibility"
      ],
      "answer": "AI-assisted software engineering can support code generation, code completion, test generation, bug detection, requirements analysis, documentation and code review. For example, AI may suggest code for a common feature or draft tests that the engineer can inspect and improve.\n\nThe lecture contrasts an older view of a developer primarily writing code with an emerging view in which the developer specifies, evaluates, verifies and orchestrates work. Specifying means communicating precise requirements and constraints. Evaluating means deciding whether an output meets the intended need. Verifying means checking accuracy, security and behaviour using suitable engineering methods. Orchestration means coordinating tasks and tools so they contribute to a coherent result.\n\nThis change does not mean software engineers are unnecessary. AI output may be incorrect, insecure or unsuitable. Engineers still need domain understanding, technical competence and accountability to ensure that the software works as required. AI changes where effort is spent, not the need for engineering judgement."
    },
    {
      "topic": "AI-assisted",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "12–13, 24, 27",
      "question": "A team generates most of its application code with AI. Evaluate whether the team can deploy the output without testing.",
      "points": [
        "No automatic trust",
        "Incorrect code and hallucination",
        "Security and suitability",
        "Review/testing steps",
        "Conditional judgement"
      ],
      "answer": "The team should not deploy AI-generated code solely because it was produced quickly or appears functional. The lecture states that generative AI can reduce development effort, but its output may be incorrect, insecure or inappropriate. It also identifies hallucination and security as new concerns.\n\nAI tools can produce convincing explanations or code while misunderstanding requirements or overlooking unusual situations. In a real application, such mistakes may cause failures or security problems. Engineers must verify that the code solves the intended problem and matches the system’s design.\n\nA responsible approach is to review the generated implementation, test its expected behaviour, check how it handles errors and examine relevant security risks before release. The team should also confirm that changes integrate correctly with existing components. AI can be used to speed up parts of development, but it cannot replace human evaluation and verification. Therefore, deployment should depend on sufficient engineering evidence, not on how rapidly the code was generated."
    },
    {
      "topic": "AI-assisted",
      "kind": "Compare",
      "marks": 8,
      "slides": "12–13, 19–20",
      "question": "Differentiate AI-assisted development, generative AI and AI agents in the context of software engineering.",
      "points": [
        "AI assistance as engineering use",
        "GenAI output generation",
        "Agents goal/tool/action cycle",
        "Different risks"
      ],
      "answer": "AI-assisted development refers to using AI to support software engineering activities such as completing code, generating tests, reviewing code or preparing documentation. It describes the use of AI within development work rather than a single specific technology.\n\nGenerative AI is a capability that creates outputs such as code, text or test cases from an input. In the lecture, generative AI may participate across the lifecycle from requirements to maintenance. Its output still needs checking because it may be incorrect or insecure.\n\nAn AI agent goes further by working toward a goal through planning, tool use, actions, evaluation and adaptation. Instead of producing only an answer, an agent may participate in a multi-step workflow. This makes control, authorisation and trust especially important.\n\nAll three concepts are related but not identical. The engineering challenge becomes greater when AI moves from suggesting an output to carrying out actions that change a software project."
    },
    {
      "topic": "AI-assisted",
      "kind": "Analyse",
      "marks": 10,
      "slides": "19, 27",
      "question": "Discuss how generative AI can contribute at different stages of the software development lifecycle and what may go wrong.",
      "points": [
        "Full lifecycle coverage",
        "Concrete tasks",
        "Efficiency benefit",
        "Incorrect/insecure/inappropriate outputs",
        "Safeguards"
      ],
      "answer": "The lecture shows that generative AI can be involved in requirements, design, coding, testing, documentation and maintenance. During requirements work it may help draft or analyse specifications. During implementation it can generate code, while during testing it may produce draft test cases. It may also help prepare documentation and support review and analysis.\n\nThe main opportunity is a potential reduction in time spent producing routine code and written material. For example, engineers may create an initial version of documentation quickly and then refine it to match the real system.\n\nHowever, generated outputs may contain mistakes, unsafe code or explanations that do not fit project requirements. A generated test may also miss an important case. Therefore, engineers must assess the accuracy and suitability of every relevant output through review, testing and comparison with actual requirements. Generative AI can support the full lifecycle, but it does not guarantee the quality of that lifecycle."
    },
    {
      "topic": "DevOps",
      "kind": "Explain",
      "marks": 10,
      "slides": "6, 14",
      "question": "Define DevOps and explain the eight stages of the continuous DevOps flow in the lecture.",
      "points": [
        "Development + operations",
        "Plan/code/build/test",
        "Release/deploy",
        "Monitor/feedback",
        "Continuous loop value"
      ],
      "answer": "DevOps is an approach that brings development and operations into closer collaboration across the software lifecycle. The lecture contrasts the traditional separation between development and operations with a modern integrated approach.\n\nIts continuous flow begins with Plan, in which the team decides what must be delivered. Code involves implementation, followed by Build, where software is prepared for use. Test checks whether the software behaves as required. Release prepares the chosen version for delivery, while Deploy makes it available in the intended environment. Monitor observes software behaviour during operation, and Feedback provides information for the next planning and development cycle.\n\nThese stages matter because software does not become an engineering success simply when it is installed. Users, operational conditions and requirements may change. DevOps encourages teams to learn from deployment and improve software continuously while maintaining appropriate quality checks. In this way, software engineering becomes a lifecycle activity rather than only a coding task."
    },
    {
      "topic": "DevOps",
      "kind": "Compare",
      "marks": 8,
      "slides": "6, 14",
      "question": "Compare the traditional development–operations division with the DevOps approach.",
      "points": [
        "Traditional separation",
        "DevOps collaboration",
        "Continuous flow",
        "Monitoring/feedback",
        "Practical example"
      ],
      "answer": "In the traditional organisation shown in the lecture, development and operations are separated. Developers focus on creating software, while operations personnel take greater responsibility once the software is deployed. This separation may make communication across stages more difficult.\n\nDevOps instead presents development and operations as closely connected. The team considers planning, coding, building, testing, releasing, deploying, monitoring and feedback as parts of one continuous process. Operational information can therefore influence future development decisions.\n\nFor example, after a shopping application is deployed, monitoring may reveal that the checkout function becomes slow during busy periods. Under a collaborative approach, development and operations can use those observations to identify the problem, implement an improvement and test it before the next release.\n\nThe main difference is not that DevOps removes testing or maintenance. It brings those activities into an ongoing cycle so the system can improve in response to real conditions."
    },
    {
      "topic": "Cloud",
      "kind": "Explain",
      "marks": 10,
      "slides": "15",
      "question": "Explain six characteristics of cloud-native software presented in the lecture.",
      "points": [
        "Containers",
        "Microservices",
        "APIs",
        "Elasticity",
        "Distributed systems",
        "Continuous deployment"
      ],
      "answer": "Cloud-native development commonly involves containers, microservices, APIs, elasticity, distributed systems and continuous deployment. Containers help package an application and its runtime needs into a consistent unit. Microservices organise features into smaller, separately defined services, while APIs allow those services or other applications to communicate.\n\nElasticity means adjusting computing resources as demand changes. Distributed systems allow software components to operate across different connected computing environments. Continuous deployment supports ongoing delivery of software updates rather than relying only on infrequent major releases.\n\nFor example, an online commerce platform might separate order processing, payment and notifications into services connected by APIs. The system may need additional resources when many customers shop at once. However, this design also introduces complexity because components must communicate reliably.\n\nTherefore, cloud-native technologies can help a project scale and evolve, but the architecture should be justified by the application’s real needs and engineering capabilities."
    },
    {
      "topic": "Cloud",
      "kind": "Compare",
      "marks": 10,
      "slides": "15, 24",
      "question": "Compare monolithic software and microservices using the lecture’s user, payment, recommendation, notification and order example.",
      "points": [
        "Monolithic grouping",
        "Service separation",
        "Example component names",
        "Potential advantage",
        "Complexity risk"
      ],
      "answer": "A monolithic application contains multiple functions within one application structure. The lecture illustrates a move from a monolithic application toward smaller services labelled User, Payment, Recommendation, Notification and Order.\n\nWith microservices, those capabilities are organised as separate services. For example, the Order service may coordinate order information while the Payment service handles payment-related functionality. Communication between services can occur through APIs. This separation may allow particular services to change or scale independently when the system and team are designed for it.\n\nHowever, the architecture also becomes a distributed system in which several components must communicate. A failure in one service can affect a larger workflow, and integration, testing and maintenance may be more complex. The lecture explicitly pairs cloud scalability with complexity.\n\nTherefore, microservices are not automatically the best architecture for every project. An engineer should consider whether the benefits of independent services justify the added coordination and operational responsibilities."
    },
    {
      "topic": "Cloud",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "15, 24–25",
      "question": "A small campus café wants to split its simple POS system into ten cloud microservices. Evaluate this decision.",
      "points": [
        "Problem and scale",
        "Cloud-native possible benefits",
        "Integration and operations complexity",
        "Skills/resources",
        "Balanced recommendation"
      ],
      "answer": "The decision should be evaluated according to the café’s actual problem rather than assuming that ten microservices are automatically better because they are a modern trend. Cloud-native systems can provide elasticity, distributed deployment and the ability to separate responsibilities into services. These benefits are useful when the application has demanding scale or independently changing components.\n\nHowever, a simple point-of-sale system may have relatively limited requirements. Splitting it into many networked services can create additional communication, deployment, testing and maintenance work. The team must understand distributed-system failures and how the services will be monitored. The lecture specifically warns that cloud scalability comes with complexity.\n\nI would first identify the current performance, integration and maintenance requirements. A simpler architecture may be more realistic if it meets those needs with fewer operational risks. If clear growth or integration requirements arise, selected service boundaries could be considered. The best choice is the one that solves the actual problem with manageable engineering effort."
    },
    {
      "topic": "Low-code",
      "kind": "Explain",
      "marks": 10,
      "slides": "16, 24",
      "question": "Discuss low-code/no-code development, its advantages and five engineering concerns.",
      "points": [
        "Visual drag/drop and citizen developers",
        "Rapid development",
        "Security",
        "Scalability and maintainability",
        "Vendor lock-in and integration"
      ],
      "answer": "Low-code and no-code platforms support application creation using visual development tools and drag-and-drop components. The lecture also refers to citizen developers, meaning people who create applications even though they may not be professional programmers. One advantage is rapid application development because common functions can be assembled without manually writing every line of code.\n\nHowever, the lecture identifies five important engineering concerns. Security remains necessary because an application may process important information. Scalability asks whether the platform can support larger workloads. Maintainability concerns the ability to modify and support the application over time. Vendor lock-in occurs when dependence on a particular platform makes migration difficult. Integration asks whether the application can work properly with existing systems.\n\nFor example, a visual form-based application could be useful for a small internal request process, but the team should investigate whether it can integrate with the organisation’s database and remain supportable later. Thus, rapid development must be balanced with long-term engineering quality."
    },
    {
      "topic": "Low-code",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "16, 25",
      "question": "A department wants to build an internal staff-request app entirely with no-code tools. Should it proceed?",
      "points": [
        "Identify appropriate problem",
        "Rapid visual development",
        "Security/integration/maintenance",
        "Vendor dependence and growth",
        "Conditional decision"
      ],
      "answer": "No-code tools may be suitable if the department needs a straightforward staff-request application with standard forms, approval steps and simple reporting. The lecture highlights rapid development, visual components and citizen developers as strengths of low-code/no-code approaches. These features could reduce initial implementation effort.\n\nHowever, the department should assess the data involved, the number of users and the need to connect with existing systems. Security matters if staff details are collected. Integration matters if requests must flow to other applications. Maintainability is important because approval rules and business requirements may change. The department should also understand vendor lock-in and whether it can move the application to another platform if needed.\n\nI would recommend a limited trial only after checking these requirements and constraints. If the platform supports the required security, integration and future changes, it may be a practical solution. If those risks cannot be managed, another development approach may be more appropriate."
    },
    {
      "topic": "Emerging",
      "kind": "Compare",
      "marks": 8,
      "slides": "17–18",
      "question": "Distinguish between current and emerging technologies, and give examples from the lecture.",
      "points": [
        "Current is mainstream",
        "Emerging developing capabilities/applications/adoption",
        "Several lecture examples",
        "Difference changes over time"
      ],
      "answer": "A current technology is one that has already become widely adopted and is moving into mainstream use. An emerging technology is one whose capabilities, applications or level of adoption are still developing. This does not mean that an emerging technology must have been invented recently; its practical role may still be changing.\n\nThe lecture identifies generative AI, AI agents, digital twins, edge AI, quantum computing, extended reality and autonomous systems as examples of emerging technologies. It also groups technologies across AI, computing, connected systems and software development.\n\nFor example, cloud computing is already used across many software environments, while some forms of agentic AI are still developing in how they plan, use tools and perform actions. The distinction is important because engineers should not assume that a promising technology is already mature enough for every use case.\n\nTherefore, engineers should evaluate capabilities, limitations and realistic adoption rather than selecting tools solely because they are described as new or emerging."
    },
    {
      "topic": "Emerging",
      "kind": "Explain",
      "marks": 10,
      "slides": "18",
      "question": "Describe the four groups in the emerging technology landscape and give relevant examples.",
      "points": [
        "AI examples",
        "Computing examples",
        "Connected systems",
        "Development approaches",
        "Integration implication"
      ],
      "answer": "The lecture divides the emerging technology landscape into four areas: AI, Computing, Connected Systems and Development. The AI category includes generative AI, AI agents and multimodal AI. Computing includes edge computing, quantum computing and cloud. Connected Systems includes IoT, digital twins and autonomous systems. Development includes low-code, AI-assisted development and platform engineering.\n\nThese groupings show that technologies can change different parts of a software system. AI may influence decision-making or content generation. Computing technologies affect where and how processing occurs. Connected systems involve devices and changing physical environments. Development technologies change the way engineers create, test and maintain software.\n\nFor example, a digital twin might use data from IoT devices and process some information at the edge, while its supporting software is developed using modern engineering practices. The categories therefore help organise the landscape, but real applications often combine several technologies. Engineers must evaluate integration as well as the individual benefits of each component."
    },
    {
      "topic": "Agents",
      "kind": "Compare",
      "marks": 10,
      "slides": "20",
      "question": "Compare a traditional AI interaction with an agentic system, focusing on workflow and engineering concerns.",
      "points": [
        "User → AI → Answer",
        "Goal → Plan → Tools → Actions → Evaluate → Adapt",
        "Greater autonomy",
        "Control/trust risk",
        "Appropriate oversight"
      ],
      "answer": "The lecture represents a traditional AI interaction as User → AI → Answer. In this arrangement, a person asks a question and the system returns a response. The main task is generating an answer to the prompt.\n\nAn agentic system is represented as Goal → Plan → Use tools → Perform actions → Evaluate → Adapt. Instead of only providing a response, the system works through several stages to pursue an objective. For example, a development agent might receive a goal, plan tasks, use tools to inspect files, perform selected actions, evaluate results and modify its plan when necessary.\n\nThis creates new opportunities for automation, but it also raises control and trust concerns. An incorrect answer can mislead the user, while an incorrect action may change files or affect a workflow. Therefore, engineers need to consider appropriate permissions, verification and human oversight. AI agents may assist software teams, but their ability to act increases the importance of responsible engineering boundaries."
    },
    {
      "topic": "Agents",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "13, 20, 24–25",
      "question": "Your team wants an AI agent to modify production code without human review. Evaluate the risks and propose an approach.",
      "points": [
        "Benefit: automation",
        "Agent goal/action sequence",
        "Control/trust and wrong actions",
        "Verification/permissions",
        "Conditional deployment"
      ],
      "answer": "An AI agent could make parts of software maintenance more efficient because it can plan, use tools, perform actions and evaluate results toward a goal. However, allowing it to modify production code without review introduces significant control and trust concerns, which the lecture explicitly associates with AI agents.\n\nAn agent might misunderstand a requirement, choose an unsuitable action or produce a change that appears successful but harms another component. Since the system performs actions rather than merely suggesting code, the possible effects may be more direct. The team still has responsibility for evaluating, verifying and orchestrating the engineering process.\n\nI would begin with clearly bounded tasks and require changes to be checked against requirements and relevant tests. Actions affecting important production functions should have suitable approval or review rather than being accepted automatically. The decision to expand automation should depend on evidence that the agent behaves reliably within defined limits.\n\nTherefore, agentic development can be useful, but the degree of autonomy must reflect the risks of the work."
    },
    {
      "topic": "Twins",
      "kind": "Explain",
      "marks": 10,
      "slides": "21",
      "question": "Define a digital twin and explain how it differs from a static digital representation of a physical object.",
      "points": [
        "Digital representation",
        "Updated using real-system data",
        "Examples",
        "Continuous changes",
        "Integration/testing/maintenance"
      ],
      "answer": "A digital twin is a digital representation of a physical system that can be updated using data from the real system. The essential point in the lecture is that the representation is connected to information about a physical object or environment and can change as that system changes.\n\nA static digital drawing may show what a factory, building or vehicle looks like at one moment, but it does not necessarily reflect subsequent changes. A digital twin may be updated when new information arrives from the physical system. The lecture names factories, buildings, vehicles, cities and healthcare equipment as examples.\n\nFor example, a digital twin of a building could be updated using operating information from the real building. Engineers would then need to integrate data sources, test that the representation behaves as intended and maintain the software as the building’s state changes. Therefore, a digital twin is not just a visual model; it is an ongoing software-engineering problem involving a changing physical system."
    },
    {
      "topic": "Twins",
      "kind": "Analyse",
      "marks": 10,
      "slides": "21, 25",
      "question": "A smart factory plans to use a digital twin. Analyse its possible value and engineering challenges.",
      "points": [
        "Appropriate factory application",
        "Real-world data updates",
        "Potential operational value",
        "Integration/testing/maintenance",
        "Recommendation"
      ],
      "answer": "A digital twin could be useful for a smart factory because it provides a digital representation of a physical system that can be updated with information from the real factory. This could help people observe system conditions and reason about how the factory is operating.\n\nThe potential value is that software could reflect changes in the physical environment rather than relying only on a one-time diagram. For example, updated information about a machine could help staff understand its current state. However, the lecture stresses that developing, integrating, testing and maintaining a digital twin is difficult because the physical system continuously changes.\n\nEngineers would need to identify appropriate data sources and ensure the digital representation is updated meaningfully. They would also need to test the integrated software and maintain it as equipment or operating requirements change. I would recommend defining the actual factory problem first, then checking whether the benefits justify the integration and support effort. A digital twin should be adopted because it solves a real problem, not only because it is an emerging technology."
    },
    {
      "topic": "Edge",
      "kind": "Compare",
      "marks": 10,
      "slides": "22",
      "question": "Compare cloud and edge processing using the data paths shown in the lecture.",
      "points": [
        "Cloud path",
        "Edge path",
        "Lower latency",
        "Bandwidth/local processing/privacy",
        "Distributed complexity"
      ],
      "answer": "In the cloud model shown in the lecture, processing follows Device → Internet → Cloud. The device sends information across a network to a remote cloud environment where relevant processing may occur. In the edge model, the path is Device → Nearby computing → Cloud. Some processing happens closer to where the data is generated.\n\nEdge processing can lower latency because it reduces reliance on a long round trip to a remote service for certain tasks. It can also reduce bandwidth requirements when not all raw information needs to be transmitted. The lecture additionally identifies local processing and privacy considerations as reasons to consider edge computing.\n\nFor example, a vehicle requiring rapid decisions may benefit from nearby processing rather than waiting for all decisions to come from a distant cloud. However, edge systems introduce distributed complexity because processing is spread across multiple locations.\n\nThus, cloud and edge approaches should be selected according to timing, connectivity, privacy and operational needs rather than treating one as universally superior."
    },
    {
      "topic": "Edge",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "22, 24–25",
      "question": "An autonomous vehicle needs rapid local decisions. Explain why edge computing may be useful and what risks remain.",
      "points": [
        "Low latency problem",
        "Local processing",
        "Reduced bandwidth",
        "Distributed complexity",
        "Balanced conclusion"
      ],
      "answer": "An autonomous vehicle may need to react quickly to changing conditions, so latency is an important engineering consideration. The lecture specifically uses autonomous vehicles as an example of why rapid local decisions may be required.\n\nEdge computing processes information at or near the device rather than depending entirely on a remote cloud response. This can reduce delay for selected operations and reduce the amount of information that must travel across the network. Some data may also be handled locally, which can be relevant when considering privacy.\n\nHowever, edge computing does not eliminate engineering risk. The lecture identifies distributed complexity as its main new concern. Engineers must still develop, test and maintain components that operate across local and cloud environments, and ensure the overall design meets its intended needs.\n\nTherefore, edge processing may be appropriate for fast local decisions, but adoption should be based on the required response time and the ability to manage the additional distributed-system challenges."
    },
    {
      "topic": "Quantum",
      "kind": "Explain",
      "marks": 8,
      "slides": "23",
      "question": "Why is quantum computing not simply “a faster computer”? Discuss its potential relevance to software engineers.",
      "points": [
        "Correct important distinction",
        "New computing model",
        "Potential application areas",
        "Different algorithm/system designs"
      ],
      "answer": "The lecture explicitly states that quantum computing is not simply a faster version of a conventional computer. It represents a different computing model, so its potential value may depend on how particular problems and algorithms are designed.\n\nSlide 23 identifies optimisation, cryptography, simulation and machine learning as possible areas of interest. These are potential application areas rather than guarantees that quantum computing will outperform current systems in every task. For software engineers, the important implication is that new computing models may require new approaches to algorithm and system design.\n\nFor example, an engineer assessing a difficult optimisation problem should first understand whether a quantum-based method is relevant instead of assuming ordinary application code will automatically execute more quickly. The lecture’s broader principle applies here: engineers must investigate what the technology can do, its limitations and when it is useful. Quantum computing should therefore be evaluated for suitability, not treated as a universal performance upgrade."
    },
    {
      "topic": "Risks",
      "kind": "Analyse",
      "marks": 12,
      "slides": "24",
      "question": "Choose four technologies from the lecture and analyse one benefit and one engineering concern for each.",
      "points": [
        "Four correct technology–benefit pairs",
        "Four correct technology–risk pairs",
        "Explain consequences",
        "Appropriate engineering response"
      ],
      "answer": "Generative AI can accelerate development by producing code, tests and documentation. However, generated outputs may hallucinate or introduce security problems, so engineers must review and verify them.\n\nCloud computing can support scalability as software demand grows. Its concern is increased complexity, particularly when systems are divided into networked components that must communicate and be operated reliably.\n\nIoT allows software to interact with connected devices. The lecture identifies security as a concern because connected systems create additional points where protection must be considered.\n\nAI agents offer automation by planning, using tools and performing actions toward a goal. Their new concern is control and trust, because the engineer must decide which actions the agent should be allowed to take and how results should be assessed.\n\nThe lecture also presents low-code as faster development with maintainability concerns, and edge computing as low-latency processing with distributed complexity. Across all cases, the same pattern applies: a useful capability creates new responsibilities that must be considered before adoption."
    },
    {
      "topic": "Risks",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "24–25",
      "question": "“Every new technology brings benefits and new engineering challenges.” Evaluate the statement with examples.",
      "points": [
        "Explain benefit/challenge principle",
        "At least three accurate examples",
        "Why benefits not enough",
        "Six-question framework",
        "Justified conclusion"
      ],
      "answer": "I agree that emerging technologies create new opportunities and new engineering challenges at the same time. A technology can make a task faster or enable a new feature, but it also changes what engineers must design, integrate, test and maintain.\n\nFor example, generative AI may reduce coding effort, but its outputs can be incorrect or insecure. Cloud systems offer scalability but create distributed complexity. AI agents can automate tasks, but their ability to perform actions raises questions about control and trust. Edge computing can reduce latency for local decisions, but introduces complexity across distributed processing locations.\n\nThese examples show why selecting the newest tool is not sufficient. Engineers should identify the problem it solves, understand how it works, decide when it is useful, recognise its limitations, examine the new engineering difficulties and assess whether realistic adoption is possible.\n\nTherefore, responsible adoption requires balancing the expected benefit against the cost and risk of integration. The strongest engineering decision is one supported by a real need and an explanation of how new problems will be handled."
    },
    {
      "topic": "Evaluation",
      "kind": "Explain",
      "marks": 12,
      "slides": "25",
      "question": "Explain the six questions software engineers should ask before adopting an emerging technology.",
      "points": [
        "Problem",
        "Mechanism",
        "When useful",
        "Limitations",
        "New engineering problems",
        "Realistic adoption"
      ],
      "answer": "The lecture proposes six questions for evaluating any emerging technology. First, what problem does it solve? This ensures that adoption begins with an actual engineering or user need rather than technological excitement. Second, how does it work? Engineers need a basic understanding of the method to assess whether it can fit their system.\n\nThird, when is it useful? A technology may help in some conditions but add unnecessary complexity in others. Fourth, what are its limitations? This helps the team recognise cases in which the solution may fail or perform poorly. Fifth, what new engineering problems does it create? Examples include security concerns, integration difficulties, maintainability and distributed complexity.\n\nSixth, can we realistically adopt it? This requires considering available skills, resources and the work involved in implementation and maintenance. Together, these questions help engineers make justified choices. They shift the discussion from “Is this technology new?” to “Does it solve the problem effectively, and can we manage its consequences?”"
    },
    {
      "topic": "Evaluation",
      "kind": "Apply",
      "marks": 12,
      "slides": "25–27",
      "question": "Apply the six technology-evaluation questions to using generative AI for code and test generation.",
      "points": [
        "Problem and working concept",
        "Useful cases",
        "Limitations",
        "Engineering risks",
        "Realistic adoption conditions"
      ],
      "answer": "Generative AI may solve the problem of developers spending substantial time producing routine code, test cases and documentation. It works by generating proposed outputs from prompts or other inputs, allowing developers to prepare drafts more quickly.\n\nIt may be useful when a team needs assistance with repetitive coding tasks, early documentation drafts or initial test ideas. Its limitations include the possibility that generated code will not match the requirements or that tests will miss important cases. The lecture identifies incorrect, insecure and inappropriate output as challenges, and also names hallucination and security as concerns.\n\nNew engineering work is therefore needed to review, test and integrate generated material safely. To adopt generative AI realistically, a team must have engineers who understand the application well enough to check the output and have time for verification. I would recommend using it as a support tool while retaining professional responsibility for the final code. This approach gains possible efficiency without assuming that generation itself establishes software quality."
    },
    {
      "topic": "Evaluation",
      "kind": "Apply",
      "marks": 12,
      "slides": "25–26",
      "question": "Use the Technology Detective activity to evaluate edge computing for a smart traffic application.",
      "points": [
        "Identify problem",
        "Explain use",
        "Benefit",
        "Engineering challenge",
        "Reasoned recommendation"
      ],
      "answer": "A smart traffic application may need to process information quickly to respond to conditions near a road or junction. Edge computing could help because it allows some processing to take place near the devices that produce the data instead of sending every decision to a distant cloud environment.\n\nA suitable application could be local traffic monitoring that reacts to changing conditions. The expected benefit is lower latency, which may be important when the system must respond quickly. Reduced network bandwidth is another possible advantage because some information can be processed nearby.\n\nHowever, the lecture identifies distributed complexity as an engineering concern. The team may need to operate and maintain computing components across several locations and ensure that they work together appropriately. The engineers must also assess whether local processing is required for the actual application.\n\nI would recommend exploring edge computing if faster local responses are an important requirement and the team can manage its distributed design. Otherwise, a simpler approach may be more practical."
    },
    {
      "topic": "Evaluation",
      "kind": "Compare",
      "marks": 10,
      "slides": "14–16, 25",
      "question": "A team must choose between cloud-native development, DevOps and low-code. Explain why these are not interchangeable solutions.",
      "points": [
        "Different conceptual purposes",
        "Cloud-native architecture",
        "DevOps lifecycle",
        "Low-code creation approach",
        "Choose against problem"
      ],
      "answer": "Cloud-native development, DevOps and low-code/no-code are related software engineering trends, but they address different aspects of building and operating software. Cloud-native development concerns the design and operation of software using patterns such as containers, microservices, APIs, elasticity and distributed systems.\n\nDevOps concerns collaboration and the ongoing lifecycle of planning, coding, building, testing, releasing, deploying, monitoring and feedback. It is an approach to delivering and improving software, not a particular application architecture. Low-code/no-code concerns how applications can be created using visual components and rapid development tools.\n\nFor example, an organisation might use a low-code platform to create a simple internal form, follow DevOps-style monitoring and feedback to improve it, and use cloud services to host parts of the solution. These choices can complement one another, but each introduces distinct questions about integration, maintainability, security or operations.\n\nTherefore, engineers should identify the actual problem first and select the combination of approaches that best fits its requirements and constraints."
    },
    {
      "topic": "Synthesis",
      "kind": "Analyse",
      "marks": 12,
      "slides": "7, 11, 13–15, 28",
      "question": "Discuss why modern software engineering is about more than learning new programming languages or tools.",
      "points": [
        "Systematic engineering foundation",
        "Multiple technologies and teams",
        "Lifecycle and operations",
        "Evaluation and verification",
        "Real-world consequences"
      ],
      "answer": "Modern software engineering is about applying systematic engineering judgement to increasingly complex systems, rather than simply learning the latest programming language. The lecture identifies cloud, mobile platforms, APIs, microservices, DevOps, AI, IoT, edge computing, cybersecurity, big data and distributed teams as parts of the modern environment.\n\nA developer must understand how components work together and how software can be developed, tested, deployed, monitored and maintained. DevOps shows that the engineering lifecycle continues after software is released. AI-assisted development also changes the engineer’s role toward specifying, evaluating, verifying and orchestrating work rather than writing every line manually.\n\nFurthermore, emerging technologies introduce risks alongside benefits. For example, microservices can bring distributed complexity, while AI-generated code may be insecure. Engineers need to choose technologies for suitable problems and manage their limitations.\n\nTherefore, professional capability is demonstrated by understanding requirements, selecting appropriate approaches and delivering dependable solutions. The value lies in how technologies are engineered and applied, not merely in the number of tools a developer knows."
    },
    {
      "topic": "Synthesis",
      "kind": "Propose",
      "marks": 12,
      "slides": "18, 21–22, 25, 28–29",
      "question": "Propose a smart-campus software system using two emerging technologies. Discuss benefits, limitations and realistic adoption.",
      "points": [
        "Specific campus problem",
        "Two correct technology applications",
        "Benefit for each",
        "New engineering challenges",
        "Feasibility decision"
      ],
      "answer": "I propose a smart-campus building-monitoring system that uses IoT sensors and a digital twin. The problem is that campus facilities staff may need better information about changing conditions within different buildings. IoT devices could provide data about selected building conditions, while a digital twin could present an updated digital representation of the physical facilities.\n\nThe main potential benefit is improved visibility into how the buildings are operating. A digital twin can be updated using information from the real system, making it more useful than a static representation. However, the lecture identifies security as a concern for IoT, and it asks how engineers can integrate, test and maintain digital twins that change with the physical environment.\n\nBefore adopting the system, I would clarify which building problem needs solving and whether appropriate sensor data is available. The team would need to evaluate software integration, security and maintenance demands. I would recommend a limited implementation for one building first, followed by testing and evaluation before a wider rollout. This supports practical learning without assuming the technologies automatically provide value."
    },
    {
      "topic": "Synthesis",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "12–13, 19–20, 24–25",
      "question": "“AI will replace software engineers because it can generate code and act as an agent.” Evaluate this statement.",
      "points": [
        "Explain assistance and agents",
        "Role change not elimination",
        "Verification and orchestration",
        "Control/trust/security",
        "Balanced conclusion"
      ],
      "answer": "The statement overlooks the lecture’s distinction between producing software outputs and performing software engineering responsibly. AI can support code generation, code completion, test creation, documentation and review. AI agents can go further by planning, using tools, performing actions, evaluating results and adapting to goals.\n\nHowever, the lecture explicitly states that AI does not remove the need for software engineering. Instead, the developer’s role shifts toward specifying what is needed, evaluating results, verifying correctness and orchestrating tools and activities. Generated code can be incorrect, insecure or unsuitable, and agentic actions raise additional questions about control and trust.\n\nFor example, an AI may rapidly produce an implementation, but an engineer still needs to decide whether it meets requirements, whether it integrates with other components and whether it behaves safely. The ability to automate work may change task allocation and productivity, but it does not automatically solve those engineering questions.\n\nTherefore, AI is more accurately viewed in this lecture as changing the nature of software engineering work, rather than removing the need for skilled engineers and professional judgement."
    },
    {
      "topic": "Synthesis",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "5, 10, 24–25, 30",
      "question": "Explain the lecture’s take-home message: engineers must know not only WHAT a technology does, but WHEN and HOW to apply it.",
      "points": [
        "WHAT = capabilities",
        "WHEN = suitable problem/context",
        "HOW = design/integration/testing",
        "Limitations/new risks",
        "Concluding principle"
      ],
      "answer": "Knowing what a technology does is only the first part of software engineering evaluation. For example, a student may know that edge computing processes information near the device or that generative AI can generate code. These definitions describe capabilities but do not establish whether the technology is suitable for a particular project.\n\nKnowing when to use a technology requires understanding the problem and the circumstances in which its benefits matter. Edge computing may be useful when a system needs rapid local decisions, while a low-code platform may be appropriate for a limited application requiring quick visual development. Knowing how to apply the technology involves designing the system, integrating components, testing behaviour and planning ongoing maintenance.\n\nEngineers must also assess limitations and new challenges. Edge computing introduces distributed complexity, generative AI can produce insecure output, and low-code can raise vendor lock-in and maintainability concerns.\n\nThus, the lecture’s main message is that software engineering is evolving, but responsible technology selection still depends on well-reasoned engineering decisions."
    }
  ],
  "mcq": [
    {
      "question": "Which definition best matches the lecture’s software engineering foundation?",
      "choices": [
        "Ad-hoc code writing only",
        "Systematic engineering approaches to developing, operating and maintaining software",
        "Using the newest programming language",
        "Deploying without maintenance"
      ],
      "correct": 1,
      "explanation": "Slide 5 defines SE as a systematic engineering approach across development, operation and maintenance.",
      "slides": "5"
    },
    {
      "question": "Which sequence matches the traditional process in the lecture?",
      "choices": [
        "Requirements → Design → Implementation → Testing → Deployment → Maintenance",
        "Code → Deploy → Ignore feedback",
        "Monitor → Design → Code",
        "Cloud → AI → IoT"
      ],
      "correct": 0,
      "explanation": "The staged process on slide 6 begins with requirements and ends with maintenance.",
      "slides": "6"
    },
    {
      "question": "Which is a driver of change under the SOCIETY category?",
      "choices": [
        "Only code completion",
        "Only price discounts",
        "Privacy, accessibility, sustainability and trust",
        "Compiler optimisation"
      ],
      "correct": 2,
      "explanation": "Slide 9 lists privacy, sustainability, accessibility and trust under society.",
      "slides": "9"
    },
    {
      "question": "What does slide 10 say normally follows a new technological capability?",
      "choices": [
        "All risks disappear",
        "New user expectations",
        "Guaranteed software quality",
        "No further engineering"
      ],
      "correct": 1,
      "explanation": "The chain is technology → capability → expectation → new software problem.",
      "slides": "10"
    },
    {
      "question": "Which is NOT one of the ten trends on slide 11?",
      "choices": [
        "Platform engineering",
        "Software supply-chain security",
        "Human–AI collaboration",
        "Replacing all software testing"
      ],
      "correct": 3,
      "explanation": "The lecture lists ten trends; it never lists elimination of software testing.",
      "slides": "11"
    },
    {
      "question": "What is the emerging role of a developer in AI-assisted engineering?",
      "choices": [
        "Only manually typing code",
        "Specifying, evaluating, verifying and orchestrating",
        "Avoiding all AI tools",
        "Delegating accountability to AI"
      ],
      "correct": 1,
      "explanation": "Slide 13 emphasises specification, evaluation, verification and orchestration.",
      "slides": "13"
    },
    {
      "question": "Which DevOps sequence is correct?",
      "choices": [
        "Plan → Code → Build → Test → Release → Deploy → Monitor → Feedback",
        "Code → Deploy → Plan → Ignore",
        "Design → Buy → Deploy",
        "Test → Monitor → Stop"
      ],
      "correct": 0,
      "explanation": "Slide 14 explicitly lists the eight-stage continuous flow.",
      "slides": "14"
    },
    {
      "question": "Which is a cloud-native component in the lecture?",
      "choices": [
        "Containers",
        "Paper-only procedures",
        "Manual registers only",
        "No APIs"
      ],
      "correct": 0,
      "explanation": "Slide 15 names containers, microservices, APIs, elasticity, distributed systems and continuous deployment.",
      "slides": "15"
    },
    {
      "question": "Which is an engineering concern of low-code/no-code?",
      "choices": [
        "Guaranteed portability",
        "Vendor lock-in",
        "No need for security",
        "Infinite scalability"
      ],
      "correct": 1,
      "explanation": "Slide 16 identifies vendor lock-in among five engineering concerns.",
      "slides": "16"
    },
    {
      "question": "Which best distinguishes an emerging technology?",
      "choices": [
        "It has never been demonstrated",
        "Its capabilities, applications or adoption are still developing",
        "It must be free",
        "It is always safer"
      ],
      "correct": 1,
      "explanation": "Slide 17 defines emerging technology by still-developing capabilities, applications or adoption.",
      "slides": "17"
    },
    {
      "question": "Which sequence best represents an AI agent?",
      "choices": [
        "User → AI → Answer only",
        "Goal → Plan → Use tools → Perform actions → Evaluate → Adapt",
        "Build → Deploy → Forget",
        "Data → Static image"
      ],
      "correct": 1,
      "explanation": "The agentic workflow on slide 20 includes planning, tool use, actions, evaluation and adaptation.",
      "slides": "20"
    },
    {
      "question": "What makes a digital twin more than a static drawing?",
      "choices": [
        "It is always 3D",
        "It is updated using data from the physical system",
        "It needs no maintenance",
        "It exists only for factories"
      ],
      "correct": 1,
      "explanation": "The slide defines a digital twin using data updates from a real physical system.",
      "slides": "21"
    },
    {
      "question": "Which benefit of edge computing is explicitly identified?",
      "choices": [
        "Guaranteed privacy",
        "Lower latency",
        "Elimination of distributed systems",
        "Universal quantum acceleration"
      ],
      "correct": 1,
      "explanation": "Slide 22 lists lower latency, reduced bandwidth, local processing and privacy considerations.",
      "slides": "22"
    },
    {
      "question": "What warning does the lecture give about quantum computing?",
      "choices": [
        "It is merely a faster ordinary computer",
        "It will replace every cloud service",
        "It is not simply a faster computer; new models may change algorithm design",
        "It is only a mobile app"
      ],
      "correct": 2,
      "explanation": "Slide 23 distinguishes new computing models from general-purpose speed increases.",
      "slides": "23"
    },
    {
      "question": "Which technology-to-concern pairing matches slide 24?",
      "choices": [
        "AI agents → control / trust",
        "IoT → no security issues",
        "Edge → no distributed complexity",
        "GenAI → guaranteed correctness"
      ],
      "correct": 0,
      "explanation": "Slide 24 pairs agentic automation with control/trust concerns.",
      "slides": "24"
    }
  ],
  "flashcards": [
    {
      "front": "What is software engineering?",
      "back": "Systematic engineering applied to software development, operation and maintenance.",
      "slides": "5"
    },
    {
      "front": "What stays constant as software evolves?",
      "back": "Fundamental software engineering principles.",
      "slides": "5"
    },
    {
      "front": "Name the traditional stages.",
      "back": "Requirements, design, implementation, testing, deployment, maintenance.",
      "slides": "6"
    },
    {
      "front": "Name the modern continuous stages.",
      "back": "Requirements, development, testing, deployment, monitoring, feedback.",
      "slides": "6"
    },
    {
      "front": "What technologies represent “today”?",
      "back": "Cloud, mobile, AI, IoT and distributed systems.",
      "slides": "4"
    },
    {
      "front": "What future directions appear on slide 4?",
      "back": "AI agents, AI-generated software and intelligent systems.",
      "slides": "4"
    },
    {
      "front": "Name the four drivers of change.",
      "back": "Technology, business, users and society.",
      "slides": "9"
    },
    {
      "front": "What is the speed-of-change chain?",
      "back": "Technology → capability → expectation → new software problem.",
      "slides": "10"
    },
    {
      "front": "What is AI-assisted development?",
      "back": "Using AI to support code, tests, requirements, documentation and review.",
      "slides": "12"
    },
    {
      "front": "What is the developer’s emerging role?",
      "back": "Specify, evaluate, verify and orchestrate.",
      "slides": "13"
    },
    {
      "front": "Why must AI-generated code be checked?",
      "back": "It can be incorrect, insecure or inappropriate.",
      "slides": "27"
    },
    {
      "front": "What does DevOps integrate?",
      "back": "Development and operations across the software lifecycle.",
      "slides": "14"
    },
    {
      "front": "List the eight DevOps steps.",
      "back": "Plan, Code, Build, Test, Release, Deploy, Monitor, Feedback.",
      "slides": "14"
    },
    {
      "front": "Name the six cloud-native elements.",
      "back": "Containers, microservices, APIs, elasticity, distributed systems, continuous deployment.",
      "slides": "15"
    },
    {
      "front": "What is a microservices architecture?",
      "back": "An application organised into smaller services with distinct responsibilities.",
      "slides": "15"
    },
    {
      "front": "Which five example services appear?",
      "back": "User, Payment, Recommendation, Notification and Order.",
      "slides": "15"
    },
    {
      "front": "What is cloud’s benefit–concern pair?",
      "back": "Scalability versus complexity.",
      "slides": "24"
    },
    {
      "front": "What does low-code/no-code use?",
      "back": "Visual development and drag-and-drop components.",
      "slides": "16"
    },
    {
      "front": "What is a citizen developer?",
      "back": "A person creating applications without necessarily being a professional programmer.",
      "slides": "16"
    },
    {
      "front": "Name five low-code concerns.",
      "back": "Security, scalability, maintainability, vendor lock-in, integration.",
      "slides": "16"
    },
    {
      "front": "What defines an emerging technology?",
      "back": "Its capabilities, applications or adoption are still developing.",
      "slides": "17"
    },
    {
      "front": "Name the four technology landscape areas.",
      "back": "AI, Computing, Connected Systems and Development.",
      "slides": "18"
    },
    {
      "front": "Name three emerging AI examples.",
      "back": "Generative AI, AI agents and multimodal AI.",
      "slides": "18"
    },
    {
      "front": "Which six stages can GenAI support?",
      "back": "Requirements, design, coding, testing, documentation, maintenance.",
      "slides": "19"
    },
    {
      "front": "How does traditional AI interact?",
      "back": "User → AI → Answer.",
      "slides": "20"
    },
    {
      "front": "How does an AI agent operate?",
      "back": "Goal → Plan → Tools → Actions → Evaluate → Adapt.",
      "slides": "20"
    },
    {
      "front": "What concern accompanies AI-agent automation?",
      "back": "Control and trust.",
      "slides": "24"
    },
    {
      "front": "What is a digital twin?",
      "back": "A digital model of a physical system updated using real-system data.",
      "slides": "21"
    },
    {
      "front": "Name three digital-twin examples.",
      "back": "Factory, building, vehicle, city or healthcare equipment.",
      "slides": "21"
    },
    {
      "front": "What is the main digital twin challenge?",
      "back": "Developing, integrating, testing and maintaining continuously updated software.",
      "slides": "21"
    },
    {
      "front": "What is the cloud data path?",
      "back": "Device → Internet → Cloud.",
      "slides": "22"
    },
    {
      "front": "What is the edge data path?",
      "back": "Device → Nearby computing → Cloud.",
      "slides": "22"
    },
    {
      "front": "Why use edge computing?",
      "back": "Lower latency, less bandwidth and local processing.",
      "slides": "22"
    },
    {
      "front": "What concern accompanies edge computing?",
      "back": "Distributed complexity.",
      "slides": "24"
    },
    {
      "front": "What are four potential quantum areas?",
      "back": "Optimisation, cryptography, simulation and machine learning.",
      "slides": "23"
    },
    {
      "front": "What is quantum computing NOT simply?",
      "back": "A faster conventional computer.",
      "slides": "23"
    },
    {
      "front": "What is GenAI’s benefit–concern pair?",
      "back": "Faster development versus hallucination/security.",
      "slides": "24"
    },
    {
      "front": "What is IoT’s benefit–concern pair?",
      "back": "Connected systems versus security risk.",
      "slides": "24"
    },
    {
      "front": "What is low-code’s benefit–concern pair?",
      "back": "Rapid development versus maintainability concerns.",
      "slides": "24"
    },
    {
      "front": "What do the six evaluation questions begin with?",
      "back": "What problem? How does it work? When useful?",
      "slides": "25"
    },
    {
      "front": "What do the final evaluation questions cover?",
      "back": "Limitations, new engineering problems and realistic adoption.",
      "slides": "25"
    },
    {
      "front": "What does the course ask engineers to do?",
      "back": "Explore, understand, analyse, evaluate, apply and synthesise.",
      "slides": "29"
    },
    {
      "front": "What is the lecture’s three-part takeaway?",
      "back": "SE evolves; new technology brings challenges; know what, when and how to apply.",
      "slides": "30"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "Foundations",
    "slides": "4–6",
    "scenario": "A college previously released desktop software once a year. It now operates a mobile platform that receives weekly updates.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO differences between traditional and modern software development.",
        "marks": 4,
        "items": [
          "Traditional development follows a mainly sequential lifecycle, with major activities planned in stages.",
          "Modern development uses an iterative, continuous loop in which feedback can affect requirements and delivery."
        ],
        "model": "Traditional software development generally moves through planned stages such as requirements, design, implementation and testing, with less frequent releases. Modern development is more continuous: teams deliver smaller updates and use monitoring and user feedback to revise requirements and improve the next release. This explains the college’s shift from yearly desktop releases to weekly mobile updates."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons why modern teams need continuous feedback.",
        "marks": 6,
        "items": [
          "Mobile users expect fixes and improvements without waiting for annual releases.",
          "Monitoring exposes production defects and performance problems after deployment.",
          "Feedback helps refine requirements when user needs and technology change."
        ],
        "model": "Continuous feedback is important for three reasons. First, users of the college’s mobile platform expect bugs to be fixed and useful features to be introduced promptly, rather than waiting a year. Second, monitoring shows actual failures, slow responses and reliability problems that pre-release testing may not reveal. Third, user feedback helps the team change requirements when needs or technologies evolve. Together, these practices make development an ongoing improvement cycle."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Foundations",
    "slides": "4–5",
    "scenario": "Your manager argues that AI and cloud computing have made software-engineering principles obsolete.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO engineering principles that remain important.",
        "marks": 4,
        "items": [
          "Systematic requirements and design help teams build software for a known purpose.",
          "Testing and maintenance help ensure software remains reliable throughout its lifetime."
        ],
        "model": "First, systematic requirements and design help teams build software for a known purpose. Second, testing and maintenance help ensure software remains reliable throughout its lifetime. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons the principles are still necessary in modern systems.",
        "marks": 6,
        "items": [
          "AI-generated code still requires verification for correctness and safety.",
          "Cloud services still need architecture, capacity planning and security controls.",
          "Constant updates make disciplined change management and traceability more valuable."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, AI-generated code still requires verification for correctness and safety. Passing an initial demonstration is not enough; testing should cover the requirements and credible failure cases. Second, cloud services still need architecture, capacity planning and security controls. The choice should support the wider system and organisational goals rather than solve only one isolated technical problem. Third, constant updates make disciplined change management and traceability more valuable. Recorded operational evidence makes problems visible and allows the team to investigate what happened. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Drivers",
    "slides": "8–10",
    "scenario": "An e-commerce app adds AI-powered recommendations after competitors introduce personalised experiences.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO forces that can drive this software change.",
        "marks": 4,
        "items": [
          "Technology makes new AI recommendation capabilities possible.",
          "Business competition and changing user expectations create demand for personalisation."
        ],
        "model": "First, technology makes new AI recommendation capabilities possible. Second, business competition and changing user expectations create demand for personalisation. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE new engineering challenges the change can introduce.",
        "marks": 6,
        "items": [
          "Customer data collection creates privacy and consent concerns.",
          "Recommendation quality must be evaluated for misleading or biased results.",
          "Greater infrastructure and monitoring needs can increase operating cost and complexity."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, customer data collection creates privacy and consent concerns. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Second, recommendation quality must be evaluated for misleading or biased results. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Third, greater infrastructure and monitoring needs can increase operating cost and complexity. Recorded operational evidence makes problems visible and allows the team to investigate what happened. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Trends",
    "slides": "11",
    "scenario": "A university software team is preparing a report on trends changing how software is built.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO trends focused on software delivery and development platforms.",
        "marks": 4,
        "items": [
          "DevOps and continuous delivery combine development with frequent release and feedback practices.",
          "Platform engineering provides reusable internal tools and environments for developers."
        ],
        "model": "First, DevOps and continuous delivery combine development with frequent release and feedback practices. Second, platform engineering provides reusable internal tools and environments for developers. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE other trends from the lecture and one purpose of each.",
        "marks": 6,
        "items": [
          "AI-assisted development helps generate or review code, tests and documentation.",
          "Cloud-native development enables containerised, scalable distributed services.",
          "Software supply-chain security reduces risks from dependencies and build artefacts."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, AI-assisted development helps generate or review code, tests and documentation. Clear documentation makes the expected behaviour verifiable and reduces ambiguity during later changes. Second, cloud-native development enables containerised, scalable distributed services. The design must keep operating at expected demand, not only under a small demonstration load. Third, software supply-chain security reduces risks from dependencies and build artefacts. Doing prerequisite work first avoids costly rework and makes changes easier to test."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "AI-assisted",
    "slides": "12–13",
    "scenario": "A development team begins using AI for requirements, coding, tests and documentation.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ways AI may assist the development lifecycle.",
        "marks": 4,
        "items": [
          "Requirements analysis can help organise or draft candidate requirements for human review.",
          "Test generation can propose test cases and potential edge conditions."
        ],
        "model": "First, requirements analysis can help organise or draft candidate requirements for human review. Second, test generation can propose test cases and potential edge conditions. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE responsibilities software engineers still retain.",
        "marks": 6,
        "items": [
          "Developers must define the required behaviour and constraints of the system.",
          "Engineers must review generated outputs for correctness, security and suitability.",
          "Engineers must evaluate results and coordinate tools, people and deployment decisions."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, developers must define the required behaviour and constraints of the system. Second, engineers must review generated outputs for correctness, security and suitability. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, engineers must evaluate results and coordinate tools, people and deployment decisions. A controlled introduction lets the team discover issues before they affect every user. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "AI-assisted",
    "slides": "12–13, 24, 27",
    "scenario": "An AI coding tool generates a working authentication module, and management wants to release it without review.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO risks of accepting the generated code immediately.",
        "marks": 4,
        "items": [
          "The tool could generate insecure code that exposes user accounts.",
          "The output might be incorrect or hallucinate behaviour not supported by the application."
        ],
        "model": "First, the tool could generate insecure code that exposes user accounts. Second, the output might be incorrect or hallucinate behaviour not supported by the application. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions the team should take before deployment.",
        "marks": 6,
        "items": [
          "Conduct human code review against authentication requirements and security controls.",
          "Run functional, automated and security tests, including failure cases.",
          "Document limitations and require accountable approval before release."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, conduct human code review against authentication requirements and security controls. Passing an initial demonstration is not enough; testing should cover the requirements and credible failure cases. Second, run functional, automated and security tests, including failure cases. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, document limitations and require accountable approval before release. Clear decision authority means the team knows who can approve a change and accept its residual risks. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "DevOps",
    "slides": "6, 14",
    "scenario": "A team deploys manually, and operations staff discover defects only after customers complain.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO activities in the DevOps continuous flow.",
        "marks": 4,
        "items": [
          "Automated build and test activities check the software before release.",
          "Monitoring and feedback collect operational information after deployment."
        ],
        "model": "First, automated build and test activities check the software before release. Second, monitoring and feedback collect operational information after deployment. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE benefits of stronger development–operations collaboration.",
        "marks": 6,
        "items": [
          "Shared responsibility helps problems be identified earlier.",
          "Automated release practices reduce repetitive manual errors and improve consistency.",
          "Production feedback guides the next planning and development cycle."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, shared responsibility helps problems be identified earlier. Second, automated release practices reduce repetitive manual errors and improve consistency. Third, production feedback guides the next planning and development cycle. Linking development to real operating conditions helps teams improve the service after each release. The key change is to treat development, deployment and production feedback as a continuous lifecycle."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Cloud-native",
    "slides": "15",
    "scenario": "A shopping platform wants to separate payment, recommendation and notification functions.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO cloud-native concepts applicable to the design.",
        "marks": 4,
        "items": [
          "Microservices can organise distinct business capabilities into independently developed services.",
          "APIs allow those services to exchange information through defined interfaces."
        ],
        "model": "First, microservices can organise distinct business capabilities into independently developed services. Second, aPIs allow those services to exchange information through defined interfaces. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE engineering concerns that the design introduces.",
        "marks": 6,
        "items": [
          "Distributed services require reliable network communication and fault handling.",
          "Shared data and transactions across services can become more complex.",
          "Teams need observability, deployment coordination and secure interfaces."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, distributed services require reliable network communication and fault handling. The service must remain usable, or recover safely, when a component or connection fails. Second, shared data and transactions across services can become more complex. Third, teams need observability, deployment coordination and secure interfaces. The systems can then share necessary updates through controlled connections instead of manual re-entry. The practical choice is the design that meets the service requirements without adding unnecessary operational complexity."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Low-code",
    "slides": "16",
    "scenario": "A department proposes creating an internal approval tool with drag-and-drop software.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO features or benefits of low-code/no-code development.",
        "marks": 4,
        "items": [
          "Visual components can reduce the need for writing traditional code.",
          "Rapid application development lets non-specialist citizen developers prototype workflows."
        ],
        "model": "First, visual components can reduce the need for writing traditional code. Second, rapid application development lets non-specialist citizen developers prototype workflows. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE engineering concerns that should be assessed.",
        "marks": 6,
        "items": [
          "Security and permissions must protect sensitive approval records.",
          "Vendor lock-in can make future migration expensive or difficult.",
          "Maintainability and integration with existing systems may constrain long-term use."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, security and permissions must protect sensitive approval records. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Second, vendor lock-in can make future migration expensive or difficult. Speed of building must be balanced against long-term support, portability and control. Third, maintainability and integration with existing systems may constrain long-term use. The systems can then share necessary updates through controlled connections instead of manual re-entry."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Emerging technology",
    "slides": "17–18",
    "scenario": "A startup asks whether AI agents and digital twins should still be considered emerging technologies.",
    "parts": [
      {
        "letter": "a",
        "question": "Differentiate TWO characteristics of current and emerging technology.",
        "marks": 4,
        "items": [
          "Current technology is already broadly adopted and moving into mainstream practice.",
          "Emerging technology still has developing capabilities, applications or adoption."
        ],
        "model": "First, current technology is already broadly adopted and moving into mainstream practice. Second, emerging technology still has developing capabilities, applications or adoption. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons engineers must evaluate an emerging technology before adoption.",
        "marks": 6,
        "items": [
          "Its capabilities may not yet meet real operational requirements.",
          "Supporting expertise, tools and standards may still be immature.",
          "New safety, security and maintenance risks may offset expected benefits."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, its capabilities may not yet meet real operational requirements. Clear documentation makes the expected behaviour verifiable and reduces ambiguity during later changes. Second, supporting expertise, tools and standards may still be immature. Clear decision authority means the team knows who can approve a change and accept its residual risks. Third, new safety, security and maintenance risks may offset expected benefits. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "AI agents",
    "slides": "19–20",
    "scenario": "A coding assistant can answer questions, while another system plans tasks, runs tools and evaluates the outcome.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO differences between an ordinary AI assistant and an AI agent.",
        "marks": 4,
        "items": [
          "A simple assistant commonly responds to a user prompt with an answer.",
          "An agent may plan, use tools, perform actions, evaluate results and adapt toward a goal."
        ],
        "model": "First, a simple assistant commonly responds to a user prompt with an answer. Second, an agent may plan, use tools, perform actions, evaluate results and adapt toward a goal. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE controls needed when agents participate in software engineering.",
        "marks": 6,
        "items": [
          "Limit tool permissions so an agent cannot modify unauthorised systems.",
          "Keep human review for risky code changes and deployments.",
          "Log and test the agent’s actions so errors can be traced and corrected."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, limit tool permissions so an agent cannot modify unauthorised systems. Only people or services with a genuine need should be allowed to perform sensitive actions. Second, keep human review for risky code changes and deployments. A controlled introduction lets the team discover issues before they affect every user. Third, log and test the agent’s actions so errors can be traced and corrected. Engineers still need to verify the output and keep people accountable for consequential decisions. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Digital twins",
    "slides": "21",
    "scenario": "A factory creates a digital representation of a production machine using live sensor readings.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO defining characteristics of a digital twin.",
        "marks": 4,
        "items": [
          "It represents a real physical system in software.",
          "Its digital state can be updated using data from the physical system."
        ],
        "model": "First, it represents a real physical system in software. Second, its digital state can be updated using data from the physical system. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE difficulties in engineering the digital twin.",
        "marks": 6,
        "items": [
          "Sensor data must be accurate and arrive reliably.",
          "The digital model must remain consistent with real-world changes.",
          "Integration, testing and maintenance must account for physical and software failures."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, sensor data must be accurate and arrive reliably. The service must remain usable, or recover safely, when a component or connection fails. Second, the digital model must remain consistent with real-world changes. The software representation must reflect the changing real-world system to remain useful for decisions. Third, integration, testing and maintenance must account for physical and software failures. The systems can then share necessary updates through controlled connections instead of manual re-entry. The engineering design must reflect what the physical system actually needs in normal and failure conditions."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Edge computing",
    "slides": "22",
    "scenario": "An autonomous vehicle needs to make decisions even when its cloud connection is slow.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO advantages of edge computing.",
        "marks": 4,
        "items": [
          "Processing close to the device can reduce decision latency.",
          "Local handling can reduce the amount of data transmitted to the cloud."
        ],
        "model": "First, processing close to the device can reduce decision latency. Second, local handling can reduce the amount of data transmitted to the cloud. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE design considerations for using an edge–cloud architecture.",
        "marks": 6,
        "items": [
          "Time-critical decisions should operate locally without waiting for internet round trips.",
          "Data synchronisation must handle intermittent connectivity and eventual updates.",
          "Local devices require security, monitoring and reliable recovery procedures."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, time-critical decisions should operate locally without waiting for internet round trips. Second, data synchronisation must handle intermittent connectivity and eventual updates. Third, local devices require security, monitoring and reliable recovery procedures. Recorded operational evidence makes problems visible and allows the team to investigate what happened. The practical choice is the design that meets the service requirements without adding unnecessary operational complexity."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Quantum computing",
    "slides": "23",
    "scenario": "A developer claims that quantum computing will automatically accelerate every existing application.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO potential problem domains mentioned in the lecture.",
        "marks": 4,
        "items": [
          "Optimisation problems may benefit from particular quantum approaches.",
          "Cryptography and simulation are areas where quantum methods may matter."
        ],
        "model": "First, optimisation problems may benefit from particular quantum approaches. Second, cryptography and simulation are areas where quantum methods may matter. Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE reasons the claim is misleading.",
        "marks": 6,
        "items": [
          "Quantum computing uses different computational models rather than simply faster ordinary processors.",
          "Existing algorithms may require redesign to use quantum approaches.",
          "Suitability depends on the task and the maturity and limitations of available systems."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, quantum computing uses different computational models rather than simply faster ordinary processors. Suitability depends on the specific problem; the technology does not automatically improve every existing task. Second, existing algorithms may require redesign to use quantum approaches. Third, suitability depends on the task and the maturity and limitations of available systems. The proposal should be accepted only if the actual problem, limitations and available capabilities support it."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Technology evaluation",
    "slides": "24–30",
    "scenario": "A university proposes deploying a new AI-based service because it is fashionable.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO questions an engineer should ask before choosing it.",
        "marks": 4,
        "items": [
          "What organisational problem does the technology actually solve?",
          "When is it useful compared with existing simpler approaches?"
        ],
        "model": "First, what organisational problem does the technology actually solve? Second, when is it useful compared with existing simpler approaches? Together, these considerations show why engineering choices should reflect the actual project requirements."
      },
      {
        "letter": "b",
        "question": "Explain THREE further checks before adopting the proposal.",
        "marks": 6,
        "items": [
          "Understand how the technology works and its technical limitations.",
          "Identify new engineering challenges such as privacy, security and maintenance.",
          "Assess the realistic availability of skills, resources and supporting infrastructure."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, understand how the technology works and its technical limitations. Second, identify new engineering challenges such as privacy, security and maintenance. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, assess the realistic availability of skills, resources and supporting infrastructure. The service must remain usable, or recover safely, when a component or connection fails. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "University development platform",
    "slides": "6–16",
    "scenario": "A university operates a monolithic student portal with frequent downtime during registration. Management proposes moving directly to cloud-native microservices and AI-assisted development. A small technical team supports the current system.",
    "parts": [
      {
        "letter": "a",
        "question": "List FIVE relevant concerns the engineering team should examine first.",
        "marks": 5,
        "items": [
          "Registration peak loads and service availability.",
          "Accuracy and ownership of student data.",
          "Security of student identities and payments.",
          "Existing team skills and operating capacity.",
          "Integration requirements with current campus systems."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, registration peak loads and service availability. Second, accuracy and ownership of student data. Third, security of student identities and payments. Fourth, existing team skills and operating capacity. Fifth, integration requirements with current campus systems."
      },
      {
        "letter": "b",
        "question": "Explain FIVE engineering decisions required for a responsible architecture.",
        "marks": 10,
        "items": [
          "Choose service boundaries only where independent deployment brings value.",
          "Define API contracts and data exchange before decomposing applications.",
          "Plan capacity, observability and recovery around registration peaks.",
          "Use automated builds, tests and deployment controls.",
          "Require human review and security verification of AI-generated code."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, choose service boundaries only where independent deployment brings value. A controlled introduction lets the team discover issues before they affect every user. Second, define API contracts and data exchange before decomposing applications. The systems can then share necessary updates through controlled connections instead of manual re-entry. Third, plan capacity, observability and recovery around registration peaks. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Fourth, use automated builds, tests and deployment controls. Fifth, require human review and security verification of AI-generated code. Passing an initial demonstration is not enough; testing should cover the requirements and credible failure cases. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      },
      {
        "letter": "c",
        "question": "Propose FIVE steps for a staged adoption and evaluation plan.",
        "marks": 10,
        "items": [
          "Measure current downtime and registration transaction failures.",
          "Pilot a small, low-risk service rather than rewriting everything.",
          "Test security, performance and recovery under realistic load.",
          "Train staff to monitor and operate the new environment.",
          "Expand only when measured reliability and maintainability improve."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, measure current downtime and registration transaction failures. The service must remain usable, or recover safely, when a component or connection fails. Second, pilot a small, low-risk service rather than rewriting everything. A controlled introduction lets the team discover issues before they affect every user. Third, test security, performance and recovery under realistic load. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Fourth, train staff to monitor and operate the new environment. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Fifth, expand only when measured reliability and maintainability improve. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "AI tools and engineering judgement",
    "slides": "12–13, 19–25",
    "scenario": "A software company uses AI agents to modify code, generate tests and create deployment requests. The system has accelerated releases but recently proposed an insecure change.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE opportunities or risks associated with the use of AI agents.",
        "marks": 5,
        "items": [
          "Automated code drafting can reduce repetitive work.",
          "Agent tool execution can operate with insufficient oversight.",
          "Generated tests may miss important requirements.",
          "Security vulnerabilities can be introduced or overlooked.",
          "Traceability and responsibility become more difficult without logs."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, automated code drafting can reduce repetitive work. Second, agent tool execution can operate with insufficient oversight. Third, generated tests may miss important requirements. Fourth, security vulnerabilities can be introduced or overlooked. Fifth, traceability and responsibility become more difficult without logs."
      },
      {
        "letter": "b",
        "question": "Explain FIVE safeguards that should be designed into the workflow.",
        "marks": 10,
        "items": [
          "Restrict agent tools according to least-privilege permissions.",
          "Require human approval for sensitive repository changes and deployment.",
          "Execute tests and security scans independently of generated explanations.",
          "Record tool actions, decisions and evidence for auditing.",
          "Keep rollback procedures for failed changes."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, restrict agent tools according to least-privilege permissions. Only people or services with a genuine need should be allowed to perform sensitive actions. Second, require human approval for sensitive repository changes and deployment. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, execute tests and security scans independently of generated explanations. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Fourth, record tool actions, decisions and evidence for auditing. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Fifth, keep rollback procedures for failed changes. The service must remain usable, or recover safely, when a component or connection fails. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      },
      {
        "letter": "c",
        "question": "Justify FIVE evaluation criteria for deciding whether the approach should continue.",
        "marks": 10,
        "items": [
          "Measure defect rates rather than code volume alone.",
          "Compare release speed without sacrificing security.",
          "Track how often human reviewers reject agent changes.",
          "Evaluate development and operational cost.",
          "Check whether engineers maintain the competence to understand and verify outputs."
        ],
        "model": "For this software project, the following engineering considerations should guide the decision. First, measure defect rates rather than code volume alone. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, compare release speed without sacrificing security. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Third, track how often human reviewers reject agent changes. Engineers still need to verify the output and keep people accountable for consequential decisions. Fourth, evaluate development and operational cost. Including the full lifecycle cost prevents an overly optimistic investment decision. Fifth, check whether engineers maintain the competence to understand and verify outputs. In this case, human verification must remain part of the engineering workflow rather than being replaced by tool output."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='lecture1_v1_';

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
