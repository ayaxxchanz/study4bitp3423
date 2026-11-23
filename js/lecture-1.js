// Lecture 1: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "What Software Engineering Is, and What Has Changed",
      "slides": "1–6",
      "html": "      <!-- Everyday Systems Context + Model Answer (Slide 3) -->\n      <div style=\"margin-top: 1.15rem; padding-top: 1rem; border-top: 2px dashed #d4d4d8;\">\n        <div class=\"sub-title\">Everyday Benchmark Systems — Then vs. Now <span class=\"slide-ref\">slide 3</span></div>\n        <div class=\"pill-cloud\" style=\"margin-bottom: 0.7rem;\">\n          <span class=\"tag mint\">WhatsApp</span>\n          <span class=\"tag yellow\">Grab</span>\n          <span class=\"tag coral\">TikTok</span>\n          <span class=\"tag cyan\">Google Maps</span>\n          <span class=\"tag lavender\">Online Banking</span>\n          <span class=\"tag mint\">ChatGPT</span>\n          <span class=\"tag yellow\">E-Commerce</span>\n        </div>\n\n        <div class=\"answer-box\" style=\"margin-top: 0;\">\n          <span class=\"answer-title\">Plain-English Answer • “What makes these different from software built 10–20 years ago?” <span class=\"slide-ref\">slide 3</span></span>\n          <p><strong>20 Years Ago (Standalone &amp; Static):</strong> Software was installed from a CD or single EXE file onto one desktop PC, worked mostly offline or on a local office network, served fixed menus, and received updates once a year.</p>\n          <p><strong>Today (Connected, Live &amp; Intelligent):</strong> Apps like <strong>Grab</strong> or <strong>Online Banking</strong> run 24/7 across cloud servers, sync GPS and payment APIs across millions of phones in milliseconds, update features weekly without reinstalling, and embed AI to predict traffic, fraud, or personalized feeds.</p>\n        </div>\n      </div>\n\n\n        <!-- Definition & Foundation -->\n        <div class=\"sub-block\">\n          <div class=\"callout lavender\">\n            <strong>Big Picture in Simple Words <span class=\"slide-ref\">slides 5–6</span>:</strong> Imagine building a treehouse vs. building a 60-story skyscraper while people already live inside it. The basic laws of physics (requirements, design, testing) never disappear—but modern apps run 24/7 for millions of users, so engineers must update and monitor them continuously.\n          </div>\n\n          <div class=\"sub-title\">Definition &amp; Foundation <span class=\"slide-ref\">slide 5</span></div>\n          <p style=\"font-size: 0.94rem; margin-bottom: 0.75rem;\">\n            <strong>Software engineering</strong> is the systematic application of engineering approaches to the development, operation, and maintenance of software <span class=\"slide-ref\">slide 5</span>. In plain English, <strong>“systematic”</strong> means following structured plans, blueprints, version control, and automated tests rather than guessing and hacking code together at midnight.\n          </p>\n\n          <div class=\"grid-2\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>What Stays Constant (Continuity)</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>Engineering Discipline:</strong> Clear requirements, clean architecture, code review, and testing before release.</li>\n                <li><strong>Core Lifecycle Steps:</strong> You still have to understand user needs, design modules, write code, verify quality, and fix bugs.</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> Even with modern AI tools, an online banking transfer feature still requires strict requirements, database design, and security testing so money is never lost or double-charged.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>What Evolves (Change)</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>Operating Environment:</strong> Apps no longer live on one hard drive—they span mobile phones, cloud servers, and third-party APIs.</li>\n                <li><strong>Release Speed:</strong> Instead of shipping Version 2.0 once a year, teams push updates daily or weekly.</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> A university registration portal must survive 10,000 students logging in at 9:00 AM on Monday, scale cloud servers automatically, and patch security bugs live without taking the whole site offline.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Yesterday -> Today -> Tomorrow SVG Timeline -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Computing Era Progression: Yesterday → Today → Tomorrow <span class=\"slide-ref\">slide 4</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 175\" aria-label=\"Yesterday Today Tomorrow Software Progression\">\n              <rect x=\"10\" y=\"18\" width=\"250\" height=\"140\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"10\" y=\"18\" width=\"250\" height=\"34\" rx=\"8\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"135\" y=\"40\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\">YESTERDAY</text>\n              <text x=\"135\" y=\"80\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">Desktop</text>\n              <text x=\"135\" y=\"102\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\">↓</text>\n              <text x=\"135\" y=\"122\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">Client / Server → Web</text>\n\n              <path d=\"M266 88 L296 88\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"296,81 308,88 296,95\" fill=\"#000\" />\n\n              <rect x=\"312\" y=\"18\" width=\"250\" height=\"140\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"312\" y=\"18\" width=\"250\" height=\"34\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"437\" y=\"40\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\">TODAY</text>\n              <text x=\"437\" y=\"78\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">Cloud → Mobile → AI</text>\n              <text x=\"437\" y=\"100\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\">↓</text>\n              <text x=\"437\" y=\"122\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">IoT → Distributed Systems</text>\n\n              <path d=\"M568 88 L598 88\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"598,81 610,88 598,95\" fill=\"#000\" />\n\n              <rect x=\"614\" y=\"18\" width=\"236\" height=\"140\" rx=\"10\" fill=\"#18181B\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"614\" y=\"18\" width=\"236\" height=\"34\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"732\" y=\"40\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\" fill=\"#000\">TOMORROW?</text>\n              <text x=\"732\" y=\"78\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"13.5\" font-weight=\"700\" fill=\"#FFF\">AI Agents → AI-Gen Software</text>\n              <text x=\"732\" y=\"100\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"13\" font-weight=\"700\" fill=\"#FDE047\">↓</text>\n              <text x=\"732\" y=\"122\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"13.5\" font-weight=\"700\" fill=\"#FFF\">Intelligent Systems → ???</text>\n            </svg>\n          </div>\n\n          <div class=\"grid-3\">\n            <div class=\"mini-card\">\n              <h4><span>Yesterday Example</span></h4>\n              <p style=\"font-size: 0.85rem;\">An old clinic billing system installed on a single reception PC, or an early static university website that only displayed text brochures.</p>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Today Example</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>Grab:</strong> Combines a mobile app, cloud servers, live GPS sensors (IoT) on drivers' phones, e-wallet APIs, and AI surge-pricing models at once.</p>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>Tomorrow Example</span></h4>\n              <p style=\"font-size: 0.85rem;\">Autonomous <strong>AI agents</strong> that read bug tickets, write patches, run automated tests, and propose pull requests alongside human engineers.</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Traditional vs Modern SDLC SVG Diagram -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Traditional Sequence vs. Modern Continuous Lifecycle <span class=\"slide-ref\">slide 6</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 220\" aria-label=\"Traditional vs Modern Software Development Lifecycle\">\n              <text x=\"14\" y=\"26\" font-family=\"JetBrains Mono, monospace\" font-size=\"12\" font-weight=\"700\">TRADITIONAL (LINEAR SEQUENCE)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"38\" width=\"122\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"75\" y=\"62\">Requirements</text>\n                <path d=\"M136 58 L154 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"154,54 160,58 154,62\" fill=\"#000\" />\n\n                <rect x=\"160\" y=\"38\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"215\" y=\"62\">Design</text>\n                <path d=\"M270 58 L288 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"288,54 294,58 288,62\" fill=\"#000\" />\n\n                <rect x=\"294\" y=\"38\" width=\"126\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"357\" y=\"62\">Implementation</text>\n                <path d=\"M420 58 L438 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"438,54 444,58 438,62\" fill=\"#000\" />\n\n                <rect x=\"444\" y=\"38\" width=\"110\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"499\" y=\"62\">Testing</text>\n                <path d=\"M554 58 L572 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"572,54 578,58 572,62\" fill=\"#000\" />\n\n                <rect x=\"578\" y=\"38\" width=\"120\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"638\" y=\"62\">Deployment</text>\n                <path d=\"M698 58 L716 58\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"716,54 722,58 716,62\" fill=\"#000\" />\n\n                <rect x=\"722\" y=\"38\" width=\"124\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"784\" y=\"62\">Maintenance</text>\n              </g>\n\n              <text x=\"14\" y=\"114\" font-family=\"JetBrains Mono, monospace\" font-size=\"12\" font-weight=\"700\" fill=\"#000\">MODERN (CONTINUOUS FEEDBACK LOOP)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"126\" width=\"126\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"77\" y=\"145\">Continuous</text>\n                <text x=\"77\" y=\"160\">Requirements</text>\n                <path d=\"M140 148 L156 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"156,144 162,148 156,152\" fill=\"#000\" />\n\n                <rect x=\"162\" y=\"126\" width=\"114\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"219\" y=\"152\">Development</text>\n                <path d=\"M276 148 L292 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"292,144 298,148 292,152\" fill=\"#000\" />\n\n                <rect x=\"298\" y=\"126\" width=\"110\" height=\"44\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"353\" y=\"152\">Testing</text>\n                <path d=\"M408 148 L424 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"424,144 430,148 424,152\" fill=\"#000\" />\n\n                <rect x=\"430\" y=\"126\" width=\"118\" height=\"44\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"489\" y=\"152\">Deployment</text>\n                <path d=\"M548 148 L564 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"564,144 570,148 564,152\" fill=\"#000\" />\n\n                <rect x=\"570\" y=\"126\" width=\"122\" height=\"44\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"631\" y=\"152\">Monitoring</text>\n                <path d=\"M692 148 L708 148\" stroke=\"#000\" stroke-width=\"2\" /><polygon points=\"708,144 714,148 708,152\" fill=\"#000\" />\n\n                <rect x=\"714\" y=\"126\" width=\"132\" height=\"44\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"780\" y=\"152\">Feedback</text>\n              </g>\n\n              <path d=\"M780 170 L780 198 L77 198 L77 174\" fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\" />\n              <polygon points=\"72,176 77,168 82,176\" fill=\"#000\" />\n              <rect x=\"275\" y=\"187\" width=\"310\" height=\"22\" rx=\"4\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"1.5\" />\n              <text x=\"430\" y=\"202\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"10.5\" font-weight=\"700\">↻ EACH STAGE FEEDS THE NEXT CONTINUOUSLY</text>\n            </svg>\n          </div>\n          <div class=\"example-box\">\n            <span class=\"example-kicker\">How This Works in Real Life</span> Suppose an e-commerce app launches a new “1-Tap Checkout” button (<strong>Deployment</strong>). Live logs (<strong>Monitoring</strong>) reveal that 18% of Android users abandon checkout because the button is hidden below the keyboard (<strong>Feedback</strong>). That data immediately becomes a new priority ticket (<strong>Continuous Requirements</strong>) for next week's sprint.\n          </div>\n        </div>\n      ",
      "sourceLabel": "Source slides 1–6 • Plain-English Breakdown & Era Examples"
    },
    {
      "title": "The Modern Software Environment &amp; Drivers of Change",
      "slides": "7–10",
      "html": "\n        <!-- Modern Tech Stack -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Multi-Disciplinary Modern Stack — Beginner Decoder <span class=\"slide-ref\">slide 7</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.85rem;\">\n            <span class=\"tag cyan\">Cloud Computing</span>\n            <span class=\"tag cyan\">Mobile Platforms</span>\n            <span class=\"tag cyan\">APIs</span>\n            <span class=\"tag cyan\">Microservices</span>\n            <span class=\"tag mint\">DevOps</span>\n            <span class=\"tag lavender\">Artificial Intelligence</span>\n            <span class=\"tag yellow\">IoT</span>\n            <span class=\"tag yellow\">Edge Computing</span>\n            <span class=\"tag coral\">Cybersecurity</span>\n            <span class=\"tag mint\">Big Data</span>\n            <span class=\"tag lavender\">Distributed Teams</span>\n          </div>\n\n          <div class=\"grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"mini-card\">\n              <h4><span>APIs &amp; Microservices</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>APIs</strong> are digital bridges letting apps talk (e.g., an app calling Google Maps). <strong>Microservices</strong> split one huge app into small independent services (Auth, Cart, Payment).</p>\n            </div>\n            <div class=\"mini-card\">\n              <h4><span>IoT &amp; Edge Computing</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>IoT</strong> connects physical sensors (smartwatches, traffic cameras) to the internet. <strong>Edge</strong> processes sensor data locally near the device instead of waiting for distant cloud servers.</p>\n            </div>\n            <div class=\"mini-card\">\n              <h4><span>DevOps &amp; Big Data</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>DevOps</strong> automates building, testing, and deploying code. <strong>Big Data</strong> processes massive streams of user clicks and logs for analytics and AI training.</p>\n            </div>\n          </div>\n\n          <div class=\"answer-box\">\n            <span class=\"answer-title\">Model Answer • “Can one software engineer realistically understand everything?” <span class=\"slide-ref\">slides 7–8</span></span>\n            <p><strong>Verdict:</strong> <strong>No.</strong> No individual can master all 11 layers at expert depth because each domain evolves rapidly.</p>\n            <p><strong>Engineering Solution (“T-Shaped” Skills):</strong> Engineers specialize deeply in 1–2 core areas (e.g., backend APIs or mobile UI) while maintaining broad working literacy across security, cloud, and testing—shifting their mindset from <em>“How do I code this?”</em> to <em>“When should we adopt a new technology, and is it worth the trade-off?”</em></p>\n          </div>\n        </div>\n\n        <!-- 4 Drivers of Change -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Four Forces Shaping Software Engineering (With Real Examples) <span class=\"slide-ref\">slide 9</span></div>\n          <div class=\"grid-4\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span><svg class=\"lucide lucide-zap summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m13 2-3 8H4l7 12 3-8h6L13 2z\"/></svg> Technology</span></h4>\n              <ul class=\"brutal-list\">\n                <li>AI, Cloud, IoT, Edge</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> Cheap cloud GPUs &amp; LLM APIs allow small teams to add voice transcription or smart search in days.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span><svg class=\"lucide lucide-trending-up summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m22 7-8.5 8.5-5-5L2 17\"/><path d=\"M16 7h6v6\"/></svg> Business</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Faster delivery, digital transformation, platform economy</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> Retailers launch mobile loyalty apps quickly to compete with Shopee/Lazada platform ecosystems.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span><svg class=\"lucide lucide-smartphone summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"/><path d=\"M12 18h.01\"/></svg> Users</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Personalization, 24/7 availability, mobile-first</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> Students expect instant mobile notifications and zero downtime when checking exam results at midnight.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span><svg class=\"lucide lucide-globe summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20\"/></svg> Society</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Privacy, sustainability, accessibility, trust</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> Data protection laws (PDPA/GDPR) force engineers to encrypt personal data and let users delete accounts.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Speed of Change Cycle SVG -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">The Speed of Change Cycle — Step-by-Step Story <span class=\"slide-ref\">slide 10</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 120\" aria-label=\"Speed of Change Cycle\">\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"12\" y=\"20\" width=\"180\" height=\"52\" rx=\"8\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"102\" y=\"42\">1. New Technology</text>\n                <text x=\"102\" y=\"59\" font-size=\"11\" font-weight=\"500\">(e.g., Accessible AI)</text>\n\n                <path d=\"M192 46 L220 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"220,41 228,46 220,51\" fill=\"#000\" />\n\n                <rect x=\"228\" y=\"20\" width=\"185\" height=\"52\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"320\" y=\"42\">2. New Capability</text>\n                <text x=\"320\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Smart automation)</text>\n\n                <path d=\"M413 46 L441 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"441,41 449,46 441,51\" fill=\"#000\" />\n\n                <rect x=\"449\" y=\"20\" width=\"190\" height=\"52\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"544\" y=\"42\">3. User Expectation</text>\n                <text x=\"544\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Users demand AI features)</text>\n\n                <path d=\"M639 46 L667 46\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"667,41 675,46 667,51\" fill=\"#000\" />\n\n                <rect x=\"675\" y=\"20\" width=\"173\" height=\"52\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" />\n                <text x=\"761\" y=\"42\">4. New SE Problem</text>\n                <text x=\"761\" y=\"59\" font-size=\"11\" font-weight=\"500\">(Safety, cost, reliability)</text>\n              </g>\n              <text x=\"430\" y=\"102\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"11\" font-weight=\"700\">KEY TAKEAWAY: EVERY NEW TECHNOLOGY CREATES BOTH OPPORTUNITIES AND NEW ENGINEERING CHALLENGES.</text>\n            </svg>\n          </div>\n          <div class=\"example-box\">\n            <span class=\"example-kicker\">Concrete Walkthrough</span> (1) <strong>New Tech:</strong> ChatGPT-style AI APIs become affordable → (2) <strong>Capability:</strong> Apps can answer natural-language questions → (3) <strong>Expectation:</strong> Bank customers now expect an instant AI assistant instead of waiting on hold → (4) <strong>New SE Problem:</strong> What if the AI hallucinates a fake bank policy or leaks another user's account data via prompt injection?\n          </div>\n        </div>\n      ",
      "sourceLabel": "Source slides 7–10 • Buzzword Decoder & Worked Answers"
    },
    {
      "title": "Current Software Engineering Trends (All 10 Explained)",
      "slides": "11–16",
      "html": "\n        <!-- Top 10 Trends Overview with Beginner Explanations -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Top 10 Industry Trends — What Each One Actually Means <span class=\"slide-ref\">slide 11</span></div>\n          <div class=\"grid-2\">\n            <ul class=\"brutal-list\">\n              <li><strong>01. AI-assisted software development:</strong> Using AI copilots to draft code, unit tests, and docs faster (covered below).</li>\n              <li><strong>02. DevOps &amp; continuous delivery:</strong> Automating build, test, and deployment pipelines so updates ship safely in minutes.</li>\n              <li><strong>03. Cloud-native development:</strong> Designing apps specifically for elastic cloud containers rather than fixed physical servers.</li>\n              <li><strong>04. Microservices architecture:</strong> Splitting a giant app into small, independently deployable services (e.g., Auth, Cart, Payment).</li>\n              <li><strong>05. Platform engineering:</strong> Building self-service internal developer portals (templates, one-click databases &amp; CI/CD) so dev teams don't waste weeks configuring infrastructure.</li>\n            </ul>\n            <ul class=\"brutal-list\">\n              <li><strong>06. Low-code / no-code platforms:</strong> Building business apps with visual drag-and-drop blocks instead of hand-writing every line.</li>\n              <li><strong>07. Software supply-chain security:</strong> Auditing third-party open-source packages (npm, Maven, pip) so hackers cannot sneak malware into your app via a compromised library.</li>\n              <li><strong>08. Data-driven software engineering:</strong> Using real telemetry, A/B testing, and crash metrics—rather than guesswork—to decide which features to keep or fix.</li>\n              <li><strong>09. Green / sustainable software engineering:</strong> Optimizing algorithms, caching, and server usage to cut electricity and carbon emissions.</li>\n              <li><strong>10. Human-AI collaboration:</strong> Designing workflows where humans and AI agents divide work safely with clear human oversight.</li>\n            </ul>\n          </div>\n        </div>\n\n        <!-- Trend #1: AI-Assisted SE & Shifting Developer Role -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #1: AI-Assisted Software Engineering &amp; Role Shift <span class=\"slide-ref\">slides 12–13</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.85rem;\">\n            <span class=\"tag lavender\">Code Generation</span>\n            <span class=\"tag lavender\">Code Completion</span>\n            <span class=\"tag lavender\">Test Generation</span>\n            <span class=\"tag lavender\">Bug Detection</span>\n            <span class=\"tag lavender\">Requirements Analysis</span>\n            <span class=\"tag lavender\">Documentation</span>\n            <span class=\"tag lavender\">Code Review</span>\n          </div>\n\n          <div class=\"grid-2\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-neutral, #f4f4f5);\">\n              <h4><span>Old View: Code Producer</span> <span class=\"slide-ref\">slide 13</span></h4>\n              <p style=\"font-size: 0.9rem;\"><strong>Developer → Writes code</strong> manually line-by-line, spending hours typing repetitive boilerplate CRUD functions.</p>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Emerging View: System Orchestrator</span> <span class=\"slide-ref\">slide 13</span></h4>\n              <p style=\"font-size: 0.9rem;\"><strong>Developer → Specifies, evaluates, verifies, and orchestrates</strong> AI-assisted workflows—acting like a lead architect inspecting AI drafts.</p>\n            </div>\n          </div>\n\n          <div class=\"answer-box\" style=\"margin-top: 0;\">\n            <span class=\"answer-title\">Model Answer • “Does AI mean software engineers are no longer needed?” <span class=\"slide-ref\">slides 12–13</span></span>\n            <p><strong>Verdict:</strong> <strong>No.</strong> AI does not eliminate software engineers; it shifts <em>where</em> engineering effort is spent.</p>\n            <p><strong>Why:</strong> Even if AI generates 70% of routine code, humans are still required to clarify ambiguous client needs (<strong>specify</strong>), choose scalable architecture (<strong>orchestrate</strong>), catch subtle security flaws or hallucinations (<strong>evaluate &amp; verify</strong>), and take accountability when systems fail.</p>\n          </div>\n        </div>\n\n        <!-- Trend #2: DevOps -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #2: DevOps &amp; Whole-Lifecycle Ownership <span class=\"slide-ref\">slide 14</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Traditional Silos vs Modern DevOps Loop\">\n              <text x=\"16\" y=\"25\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">TRADITIONAL (SILOED HANDOFF)</text>\n              <rect x=\"16\" y=\"36\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"91\" y=\"61\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"13\" font-weight=\"700\">Development</text>\n              <line x1=\"182\" y1=\"32\" x2=\"182\" y2=\"82\" stroke=\"#EF4444\" stroke-width=\"3\" stroke-dasharray=\"4,3\" />\n              <rect x=\"198\" y=\"36\" width=\"150\" height=\"40\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"273\" y=\"61\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"13\" font-weight=\"700\">Operations</text>\n              <text x=\"372\" y=\"60\" font-family=\"Space Grotesk, sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#3F3F46\">→ Software engineering covers the ENTIRE lifecycle, not just coding.</text>\n\n              <text x=\"16\" y=\"104\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">MODERN DEVOPS (DEV + OPS CONTINUOUS FLOW)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"60\" y=\"134\">Plan</text>\n                <text x=\"112\" y=\"134\">→</text>\n                <rect x=\"120\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"164\" y=\"134\">Code</text>\n                <text x=\"216\" y=\"134\">→</text>\n                <rect x=\"224\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"268\" y=\"134\">Build</text>\n                <text x=\"320\" y=\"134\">→</text>\n                <rect x=\"328\" y=\"114\" width=\"88\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"372\" y=\"134\">Test</text>\n                <text x=\"424\" y=\"134\">→</text>\n                <rect x=\"432\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"478\" y=\"134\">Release</text>\n                <text x=\"532\" y=\"134\">→</text>\n                <rect x=\"540\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"586\" y=\"134\">Deploy</text>\n                <text x=\"640\" y=\"134\">→</text>\n                <rect x=\"648\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"694\" y=\"134\">Monitor</text>\n                <text x=\"748\" y=\"134\">→</text>\n                <rect x=\"756\" y=\"114\" width=\"92\" height=\"32\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"802\" y=\"134\">Feedback</text>\n              </g>\n            </svg>\n          </div>\n          <div class=\"example-box\">\n            <span class=\"example-kicker\">Plain-English Analogy</span> In the old days, developers wrote code on their laptop, threw it over a wall to the IT Operations team, and said <em>“It worked on my machine!”</em> when the server crashed. With <strong>DevOps</strong>, automated CI/CD pipelines test, deploy, and monitor the live app together as one continuous loop.\n          </div>\n        </div>\n\n        <!-- Trend #3: Cloud-Native Software -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #3: Cloud-Native Software Architecture <span class=\"slide-ref\">slide 15</span></div>\n          <div class=\"pill-cloud\" style=\"margin-bottom: 0.75rem;\">\n            <span class=\"tag cyan\">Containers</span>\n            <span class=\"tag cyan\">Microservices</span>\n            <span class=\"tag cyan\">APIs</span>\n            <span class=\"tag cyan\">Elasticity</span>\n            <span class=\"tag cyan\">Distributed Systems</span>\n            <span class=\"tag cyan\">Continuous Deployment</span>\n          </div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 150\" aria-label=\"Monolithic vs Microservices Architecture\">\n              <rect x=\"20\" y=\"16\" width=\"230\" height=\"118\" rx=\"10\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"135\" y=\"42\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"12\" font-weight=\"700\">MONOLITHIC APP</text>\n              <rect x=\"42\" y=\"54\" width=\"186\" height=\"64\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" />\n              <text x=\"135\" y=\"82\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\">User + Payment + Order</text>\n              <text x=\"135\" y=\"100\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\">+ Notification + Recs</text>\n\n              <path d=\"M268 75 L312 75\" stroke=\"#000\" stroke-width=\"3\" />\n              <polygon points=\"312,69 324,75 312,81\" fill=\"#000\" />\n              <text x=\"296\" y=\"62\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"10\" font-weight=\"700\">DECOUPLE</text>\n\n              <rect x=\"336\" y=\"16\" width=\"504\" height=\"118\" rx=\"10\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"588\" y=\"38\" text-anchor=\"middle\" font-family=\"JetBrains Mono, monospace\" font-size=\"12\" font-weight=\"700\">CLOUD-NATIVE MICROSERVICES (API-CONNECTED)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"354\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"396\" y=\"87\">User</text>\n                <rect x=\"450\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"492\" y=\"87\">Payment</text>\n                <rect x=\"546\" y=\"54\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"588\" y=\"87\">Order</text>\n                <rect x=\"642\" y=\"54\" width=\"90\" height=\"58\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"687\" y=\"87\">Notification</text>\n                <rect x=\"744\" y=\"54\" width=\"82\" height=\"58\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"785\" y=\"87\">Recs AI</text>\n              </g>\n            </svg>\n          </div>\n          <div class=\"example-box\">\n            <span class=\"example-kicker\">Why This Matters (11.11 Flash Sale Example)</span> In a <strong>Monolith</strong>, if a bug crashes the <em>Recommendation</em> engine, the entire shopping app goes down. In <strong>Cloud-Native Microservices</strong>, each box runs in its own container—so <em>Order</em> and <em>Payment</em> stay online and automatically scale up (<strong>elasticity</strong>) during midnight flash sales even if <em>Recs AI</em> slows down.\n          </div>\n        </div>\n\n        <!-- Trend #4: Low-Code / No-Code -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Trend #4: Low-Code / No-Code Development <span class=\"slide-ref\">slide 16</span></div>\n          <div class=\"grid-2\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Core Capabilities</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Visual model-driven development environments</li>\n                <li>Pre-built drag-and-drop UI and logic components</li>\n                <li>Empowers non-specialist “citizen developers”</li>\n                <li>Rapid application prototyping and delivery</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> An HR manager uses Microsoft PowerApps or Bubble to drag-and-drop an internal staff leave-approval app in 3 days without waiting 6 months for the IT department.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span>Engineering Concerns</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>Security:</strong> Hidden vulnerabilities and access governance</li>\n                <li><strong>Scalability:</strong> Performance ceilings under heavy load</li>\n                <li><strong>Integration:</strong> Friction with legacy or custom enterprise APIs</li>\n                <li><strong>Maintainability &amp; Vendor Lock-In:</strong> Proprietary platform dependency</li>\n              </ul>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> That HR app works great for 50 staff—but when 20,000 customers use it or the vendor doubles subscription fees, you cannot export clean source code to move elsewhere (<strong>vendor lock-in</strong>).\n              </div>\n            </div>\n          </div>\n        </div>\n      ",
      "sourceLabel": "Source slides 11–16 • Plain-English Explanations & Real Examples"
    },
    {
      "title": "Emerging Technologies &amp; Architectural Shifts",
      "slides": "17–23",
      "html": "\n        <!-- Current vs Emerging & Taxonomy -->\n        <div class=\"sub-block\">\n          <div class=\"grid-2\" style=\"margin-bottom: 1rem;\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-neutral, #f4f4f5);\">\n              <h4><span>Current Technology</span> <span class=\"slide-ref\">slide 17</span></h4>\n              <p style=\"font-size: 0.9rem;\">Already widely adopted and established as mainstream industry practice.</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Example</span> REST APIs, relational databases (MySQL/PostgreSQL), standard web/mobile frameworks, and basic cloud hosting.\n              </div>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>Emerging Technology</span> <span class=\"slide-ref\">slide 17</span></h4>\n              <p style=\"font-size: 0.9rem;\">Capabilities, use cases, or industry adoption are still actively evolving:</p>\n              <ul class=\"brutal-list\" style=\"margin-top: 0.4rem;\">\n                <li><strong>Generative AI &amp; AI Agents:</strong> AI that creates content or autonomously executes multi-step tasks.</li>\n                <li><strong>Digital Twins &amp; Edge AI:</strong> Live virtual mirrors of physical machines; AI models running directly on local devices.</li>\n                <li><strong>Extended Reality (XR), Autonomous Systems &amp; Quantum:</strong> VR/AR spatial interfaces, self-driving robotics, and quantum-bit processors.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"sub-title\">Emerging Technology Taxonomy (4 Domains) <span class=\"slide-ref\">slide 18</span></div>\n          <div class=\"grid-4\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span><svg class=\"lucide lucide-cpu summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\"/><rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\"/><path d=\"M9 1v3m6-3v3M9 20v3m6-3v3M20 9h3m-3 5h3M1 9h3m-3 5h3\"/></svg> AI</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Generative AI</li>\n                <li>AI Agents</li>\n                <li>Multimodal AI (text + image + audio)</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span><svg class=\"lucide lucide-laptop summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12M2 16h20l1 4H1l1-4z\"/></svg> Computing</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Edge Computing</li>\n                <li>Quantum Computing</li>\n                <li>Cloud Infrastructure</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span><svg class=\"lucide lucide-link summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/></svg> Connected Systems</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Internet of Things (IoT)</li>\n                <li>Digital Twins</li>\n                <li>Autonomous Systems</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span><svg class=\"lucide lucide-wrench summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z\"/></svg> Development</span></h4>\n              <ul class=\"brutal-list\">\n                <li>Low-Code Platforms</li>\n                <li>AI-Assisted Dev</li>\n                <li>Platform Engineering</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Generative AI & AI Agents -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Generative AI Across SDLC &amp; Autonomous AI Agents <span class=\"slide-ref\">slides 19–20</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.75rem;\">\n            <strong>Generative AI</strong> participates across all six lifecycle stages: <strong>Requirements</strong> (drafting user stories), <strong>Design</strong> (suggesting database schemas), <strong>Coding</strong> (writing functions), <strong>Testing</strong> (generating edge-case unit tests), <strong>Documentation</strong> (explaining APIs), and <strong>Maintenance</strong> (summarizing bug logs) <span class=\"slide-ref\">slide 19</span>.\n          </p>\n\n          <div class=\"answer-box\" style=\"margin-top: 0; margin-bottom: 1rem;\">\n            <span class=\"answer-title\">Slide 19 Question • “What could go wrong with GenAI in SDLC?” <span class=\"slide-ref\">slide 19</span></span>\n            <p><strong>1. Hallucinations &amp; Subtle Logic Bugs:</strong> GenAI can invent non-existent library methods or produce code that passes basic happy-path tests but fails on edge cases.</p>\n            <p><strong>2. Security &amp; License Risks:</strong> Models trained on public code may suggest outdated, insecure patterns (like raw SQL concatenation) or copy-paste restricted open-source snippets.</p>\n          </div>\n\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Traditional AI vs Agentic AI System\">\n              <text x=\"16\" y=\"24\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">TRADITIONAL AI (SINGLE PROMPT-RESPONSE)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"34\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"81\" y=\"57\">User Prompt</text>\n                <text x=\"164\" y=\"57\">→</text>\n                <rect x=\"182\" y=\"34\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"247\" y=\"57\">AI Model</text>\n                <text x=\"330\" y=\"57\">→</text>\n                <rect x=\"348\" y=\"34\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"418\" y=\"57\">Static Answer</text>\n              </g>\n\n              <text x=\"16\" y=\"98\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">AGENTIC SYSTEM (AUTONOMOUS GOAL-DRIVEN LOOP)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"71\" y=\"130\">1. Goal</text>\n                <text x=\"138\" y=\"130\">→</text>\n                <rect x=\"150\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"205\" y=\"130\">2. Plan</text>\n                <text x=\"272\" y=\"130\">→</text>\n                <rect x=\"284\" y=\"108\" width=\"122\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"345\" y=\"130\">3. Use Tools</text>\n                <text x=\"418\" y=\"130\">→</text>\n                <rect x=\"430\" y=\"108\" width=\"142\" height=\"36\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"501\" y=\"130\">4. Perform Actions</text>\n                <text x=\"584\" y=\"130\">→</text>\n                <rect x=\"596\" y=\"108\" width=\"115\" height=\"36\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"653\" y=\"130\">5. Evaluate</text>\n                <text x=\"723\" y=\"130\">→</text>\n                <rect x=\"735\" y=\"108\" width=\"110\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"790\" y=\"130\">6. Adapt</text>\n              </g>\n            </svg>\n          </div>\n\n          <div class=\"answer-box\" style=\"margin-top: 0;\">\n            <span class=\"answer-title\">Slide 20 Question • “What happens when AI agents join the software development team?” <span class=\"slide-ref\">slide 20</span></span>\n            <p><strong>Real Example:</strong> Instead of just answering a chat question, an AI coding agent given the goal <em>“Fix login bug #42”</em> inspects the repo, plans a fix, edits files, runs the test suite, sees a failed test, adapts its patch, and opens a pull request.</p>\n            <p><strong>New Engineering Governance Needed:</strong> Because agents can execute real terminal/API commands, engineers must enforce strict sandbox permissions, API spending limits, audit logs, and mandatory human approval before merging to production.</p>\n          </div>\n        </div>\n\n        <!-- Digital Twins, Edge & Quantum -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Digital Twins, Edge Computing &amp; Quantum Computing — Beginner Guide <span class=\"slide-ref\">slides 21–23</span></div>\n\n          <div class=\"grid-2\" style=\"margin-bottom: 1rem;\">\n            <!-- Digital Twins -->\n            <div class=\"mini-card\">\n              <h4><span><svg class=\"lucide lucide-copy summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></svg> Digital Twins</span> <span class=\"slide-ref\">slide 21</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.5rem;\">\n                A live virtual replica of a physical object or system that updates continuously from real-world sensors.\n              </p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Plain-English Example</span> Think of a live “video-game mirror” of a real factory floor or wind turbine. IoT sensors stream real temperature and vibration data into the digital twin so engineers can safely simulate <em>“What happens if we speed up the assembly belt by 20%?”</em> without breaking real machines.\n              </div>\n              <p style=\"font-size: 0.85rem; margin-top: 0.5rem;\">\n                <strong>SE Challenge:</strong> Keeping software synchronized with messy, noisy physical sensors in real time and testing edge cases safely.\n              </p>\n            </div>\n\n            <!-- Quantum Computing -->\n            <div class=\"mini-card\">\n              <h4><span><svg class=\"lucide lucide-atom summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2.04-2.03.01-7.36-4.53-11.9-4.54-4.54-9.87-6.57-11.9-4.53-2.04 2.03-.01 7.36 4.53 11.9 4.54 4.54 9.87 6.57 11.9 4.53Z\"/><path d=\"M15.67 15.67c4.54-4.54 6.57-9.87 4.53-11.9-2.03-2.04-7.36-.01-11.9 4.53-4.54 4.54-6.57 9.87-4.53 11.9 2.03 2.04 7.36.01 11.9-4.53Z\"/></svg> Quantum Computing</span> <span class=\"slide-ref\">slide 23</span></h4>\n              <p style=\"font-size: 0.88rem; margin-bottom: 0.5rem;\">\n                <strong>Key Distinction:</strong> Quantum computing is <em>not</em> just a “faster gaming PC” that makes normal web apps load quicker. It uses quantum physics (qubits) to solve specific mathematical structures in completely new ways—requiring redesigned algorithms.\n              </p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">4 Concrete Uses</span>\n                <strong>Optimization:</strong> Finding the fastest delivery routes across thousands of stops.<br />\n                <strong>Cryptography:</strong> Upgrading banking encryption (post-quantum crypto) before quantum computers break RSA.<br />\n                <strong>Simulation &amp; ML:</strong> Simulating battery chemicals and accelerating pattern search.\n              </div>\n            </div>\n          </div>\n\n          <!-- Edge Computing SVG Topology -->\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Cloud vs Edge Computing Topology\">\n              <text x=\"16\" y=\"24\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">CENTRALIZED CLOUD MODEL (HIGHER LATENCY &amp; BANDWIDTH)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"34\" width=\"150\" height=\"36\" rx=\"6\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"91\" y=\"57\">IoT / Vehicle Device</text>\n                <path d=\"M166 52 L336 52\" stroke=\"#000\" stroke-width=\"2.5\" stroke-dasharray=\"5,4\" /><polygon points=\"336,47 344,52 336,57\" fill=\"#000\" />\n                <text x=\"255\" y=\"45\" font-family=\"JetBrains Mono, monospace\" font-size=\"10\">Long-haul Internet</text>\n                <rect x=\"344\" y=\"34\" width=\"150\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"419\" y=\"57\">Central Cloud</text>\n              </g>\n\n              <text x=\"16\" y=\"98\" font-family=\"JetBrains Mono, monospace\" font-size=\"11.5\" font-weight=\"700\">EDGE COMPUTING MODEL (SLIDE 22)</text>\n              <g font-family=\"Space Grotesk, sans-serif\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"16\" y=\"108\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"86\" y=\"130\">Sensor / Vehicle</text>\n                <path d=\"M156 126 L186 126\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"186,121 194,126 186,131\" fill=\"#000\" />\n                <rect x=\"194\" y=\"108\" width=\"175\" height=\"36\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"281\" y=\"130\">Nearby Edge Compute</text>\n                <path d=\"M369 126 L399 126\" stroke=\"#000\" stroke-width=\"2.5\" /><polygon points=\"399,121 407,126 399,131\" fill=\"#000\" />\n                <rect x=\"407\" y=\"108\" width=\"130\" height=\"36\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"472\" y=\"130\">Cloud Sync</text>\n              </g>\n              <text x=\"556\" y=\"122\" font-family=\"Space Grotesk, sans-serif\" font-size=\"11.5\" font-weight=\"700\">✓ Low latency (autonomous braking)</text>\n              <text x=\"556\" y=\"139\" font-family=\"Space Grotesk, sans-serif\" font-size=\"11.5\" font-weight=\"700\">✓ Reduced bandwidth &amp; local privacy</text>\n            </svg>\n          </div>\n          <div class=\"example-box\">\n            <span class=\"example-kicker\">Why Edge Matters (Self-Driving Car Example)</span> If an autonomous car spots a child stepping onto the road, it has <strong>milliseconds</strong> to brake. If it had to send camera footage over 5G to a distant cloud server and wait for a reply, it would crash—and if the car enters a tunnel with zero internet, cloud-only control would fail completely. <strong>Edge computing</strong> runs the AI decision directly inside the car's onboard computer.\n          </div>\n        </div>\n      ",
      "sourceLabel": "Source slides 17–23 • Beginner Definitions, Examples & Risk Answers"
    },
    {
      "title": "Trade-Offs, Six Critical Evaluation Questions &amp; Exam Formulas",
      "slides": "24–31",
      "html": "\n        <!-- Trade-off Table with Concrete Examples (Slide 24) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">The Hidden Side of Technology: Benefits vs. New Concerns (With Examples) <span class=\"slide-ref\">slide 24</span></div>\n          <div class=\"table-wrap\">\n            <table class=\"brutal-table\">\n              <thead>\n                <tr>\n                  <th>Technology</th>\n                  <th>Primary Benefit</th>\n                  <th>New Engineering Concern</th>\n                  <th>Concrete Beginner Example</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Generative AI</strong></td>\n                  <td>Faster development</td>\n                  <td>Hallucination &amp; security flaws</td>\n                  <td>AI generates a login API in 10 seconds, but accidentally forgets password hashing or invents a fake library method.</td>\n                </tr>\n                <tr>\n                  <td><strong>Cloud Computing</strong></td>\n                  <td>Elastic scalability</td>\n                  <td>Architectural complexity</td>\n                  <td>App auto-scales to 50 servers during a flash sale, but a misconfigured cloud storage bucket exposes customer receipts.</td>\n                </tr>\n                <tr>\n                  <td><strong>IoT</strong></td>\n                  <td>Connected systems</td>\n                  <td>Expanded security attack surface</td>\n                  <td>1,000 campus smart-lock sensors improve convenience, but one unpatched sensor gives hackers a backdoor into the network.</td>\n                </tr>\n                <tr>\n                  <td><strong>AI Agents</strong></td>\n                  <td>End-to-end automation</td>\n                  <td>Loss of control &amp; trust</td>\n                  <td>An autonomous support agent issues unauthorized RM500 refunds because a clever user tricked it via prompt injection.</td>\n                </tr>\n                <tr>\n                  <td><strong>Low-Code</strong></td>\n                  <td>Faster delivery</td>\n                  <td>Maintainability &amp; vendor lock-in</td>\n                  <td>A drag-and-drop prototype ships in a week, but complex custom business rules become a tangled mess impossible to export.</td>\n                </tr>\n                <tr>\n                  <td><strong>Edge Computing</strong></td>\n                  <td>Ultra-low latency</td>\n                  <td>Distributed deployment complexity</td>\n                  <td>Smart cameras detect safety-helmet violations locally in real time, but pushing software updates to 500 remote devices is hard.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <!-- 6 SE Evaluation Questions — UNPACKED WITH EXPLANATIONS & WORKED EXAMPLES (Slide 25) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Six Critical Questions for Evaluating Any Emerging Technology — Unpacked with Examples <span class=\"slide-ref\">slide 25</span></div>\n          <div class=\"callout yellow\">\n            <strong>How to Use This Framework (Beginner Guide):</strong> Whenever a client, boss, or exam question asks <em>“Should we use [Emerging Tech X] in this project?”</em>, do not jump straight to hype. Walk through these <strong>6 questions</strong> in order. Below each question is a plain-English guide plus a worked example using <strong>Edge AI Smart Safety Cameras</strong> on a construction site.\n          </div>\n\n          <div class=\"grid-3\" style=\"margin-bottom: 1rem;\">\n            <!-- Q1 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Q1 // What problem does it solve?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Identify the specific pain point (slow speed, human error, high cost) rather than adopting tech just because it sounds trendy.</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> Human safety officers cannot watch 40 construction zones 24/7 to spot workers entering danger zones without hardhats.\n              </div>\n            </div>\n\n            <!-- Q2 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Q2 // How does it work?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Explain the core technical mechanism under the hood—inputs, processing location, and outputs.</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> A lightweight computer-vision model runs directly on a local Edge processor attached to each camera, analyzing video frames on-site and sending only text alerts to the supervisor's dashboard.\n              </div>\n            </div>\n\n            <!-- Q3 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>Q3 // When is it useful?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Define the conditions where this tech beats simpler alternatives (and when a simpler tool would be better).</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> Useful when instant (&lt;1 second) local alerts are needed and site Wi-Fi/5G is too weak to stream 40 HD video feeds to the cloud. Overkill for a tiny 3-person indoor office.\n              </div>\n            </div>\n\n            <!-- Q4 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span>Q4 // What are its limitations?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Be honest about accuracy boundaries, hardware limits, or environmental edge cases where the tech struggles.</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> Heavy rain, dust, or night glare can trigger false alarms, and small edge chips cannot run massive, ultra-complex AI models.\n              </div>\n            </div>\n\n            <!-- Q5 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>Q5 // What new SE problems does it create?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Spot the second-order engineering headaches introduced by adopting the technology (updates, security, maintenance).</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> Engineers must now build an over-the-air (OTA) fleet updater for 40 remote devices, monitor hardware overheating, and protect worker face privacy.\n              </div>\n            </div>\n\n            <!-- Q6 -->\n            <div class=\"mini-card\" style=\"background: var(--study-surface-orange, #ffedd5);\">\n              <h4><span>Q6 // Can we realistically adopt it?</span></h4>\n              <p style=\"font-size: 0.85rem;\"><strong>What it means:</strong> Check real-world feasibility—does our team have the budget, timeline, skills, and maintenance plan to sustain it?</p>\n              <div class=\"example-box\">\n                <span class=\"example-kicker\">Worked Example</span> Yes, if budget covers rugged edge hardware and engineers already know Python/Docker—otherwise start with a 3-camera pilot before full rollout.\n              </div>\n            </div>\n          </div>\n\n          <!-- Second Worked Example Table for Q1-Q6 -->\n          <div class=\"table-wrap\">\n            <table class=\"brutal-table\">\n              <thead>\n                <tr>\n                  <th style=\"width: 28%;\">Evaluation Question <span class=\"slide-ref\">slide 25</span></th>\n                  <th>Second Worked Example: Adopting AI Coding Assistants (e.g., Copilot) in a Dev Team</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>1. What problem does it solve?</strong></td>\n                  <td>Reduces repetitive boilerplate coding, SQL query writing, and unit-test setup time for developers.</td>\n                </tr>\n                <tr>\n                  <td><strong>2. How does it work?</strong></td>\n                  <td>An IDE plugin sends surrounding file context to a large language model, which predicts and autocompletes code blocks in real time.</td>\n                </tr>\n                <tr>\n                  <td><strong>3. When is it useful?</strong></td>\n                  <td>Most useful for standard CRUD endpoints, regex patterns, documentation, and unit tests; less useful for novel, undocumented proprietary algorithms.</td>\n                </tr>\n                <tr>\n                  <td><strong>4. What are its limitations?</strong></td>\n                  <td>Cannot see the entire organization's undocumented business context and may hallucinate outdated API signatures.</td>\n                </tr>\n                <tr>\n                  <td><strong>5. What new SE problems does it create?</strong></td>\n                  <td>Risk of leaking proprietary source code to external APIs, subtle security bugs, and developers blindly accepting code they don't understand.</td>\n                </tr>\n                <tr>\n                  <td><strong>6. Can we realistically adopt it?</strong></td>\n                  <td>Yes, provided the company funds enterprise zero-data-retention licenses and enforces mandatory human code review + automated CI tests.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <!-- Technology Detective & Worked Case Study (Slides 26–27) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Technology Detective Case Studies &amp; Model Exam Answer <span class=\"slide-ref\">slides 26–27</span></div>\n          <div class=\"grid-2\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>Case A: Generative AI (From Slide)</span> <span class=\"slide-ref\">slide 27</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>1. Problem:</strong> Developers spend substantial time writing repetitive code and documentation.</li>\n                <li><strong>2. Application:</strong> Generating source code, unit tests, and technical documentation inside the IDE.</li>\n                <li><strong>3. Benefit:</strong> Accelerates initial development velocity and reduces boilerplate effort.</li>\n                <li><strong>4. Challenge:</strong> Generated output may be incorrect, insecure, or license-inappropriate.</li>\n              </ul>\n            </div>\n\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Case B: IoT + Digital Twin (Bonus Worked Example)</span> <span class=\"slide-ref\">slide 26</span></h4>\n              <ul class=\"brutal-list\">\n                <li><strong>1. Problem:</strong> Unexpected factory machine breakdowns halt production and cost thousands per hour.</li>\n                <li><strong>2. Application:</strong> Streaming live vibration and heat sensor data into a virtual Digital Twin of the assembly line.</li>\n                <li><strong>3. Benefit:</strong> Predicts worn parts early (predictive maintenance) and tests schedule changes safely before physical execution.</li>\n                <li><strong>4. Challenge:</strong> Synchronizing noisy real-time sensor streams and securing connected factory devices from cyberattacks.</li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"answer-box\" style=\"margin-top: 0;\">\n            <span class=\"answer-title\">Slide 27 Discussion Answer • “Would you trust AI-generated code without testing it?” <span class=\"slide-ref\">slide 27</span></span>\n            <p><strong>Verdict:</strong> <strong>Never.</strong> AI-generated code must always be treated as an unverified draft from a fast junior assistant.</p>\n            <p><strong>Reasoning &amp; Action:</strong> LLMs optimize for plausible-looking syntax rather than guaranteed correctness or security. Before merging any AI-written code, engineers must run automated unit/integration tests, execute static security scanners, and perform human code review.</p>\n          </div>\n        </div>\n\n        <!-- Holistic Modern SE Hub SVG & Course Methodology (Slides 28–31) -->\n        <div class=\"sub-block\">\n          <div class=\"sub-title\">Holistic Modern SE Hub, 6-Stage Inquiry Cycle &amp; Exam Formulas <span class=\"slide-ref\">slides 28–31</span></div>\n          <div class=\"diagram-frame\">\n            <svg viewBox=\"0 0 860 190\" aria-label=\"Modern Software Engineering Ecosystem Hub\">\n              <rect x=\"305\" y=\"64\" width=\"250\" height=\"62\" rx=\"12\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"3\" />\n              <text x=\"430\" y=\"91\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">MODERN SOFTWARE</text>\n              <text x=\"430\" y=\"111\" text-anchor=\"middle\" font-family=\"Space Grotesk, sans-serif\" font-size=\"14\" font-weight=\"700\">ENGINEERING</text>\n\n              <g font-family=\"JetBrains Mono, monospace\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"30\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"85\" y=\"34\">AI &amp; Agents</text>\n                <rect x=\"195\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"250\" y=\"34\">Cloud</text>\n                <rect x=\"375\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"34\">DevOps</text>\n                <rect x=\"555\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"610\" y=\"34\">IoT &amp; Edge</text>\n                <rect x=\"720\" y=\"14\" width=\"110\" height=\"32\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"775\" y=\"34\">Big Data</text>\n\n                <rect x=\"85\" y=\"144\" width=\"125\" height=\"32\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"147\" y=\"164\">Security</text>\n                <rect x=\"355\" y=\"144\" width=\"150\" height=\"32\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"164\">Sustainability</text>\n                <rect x=\"640\" y=\"144\" width=\"145\" height=\"32\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"712\" y=\"164\">Human Factors</text>\n              </g>\n\n              <line x1=\"140\" y1=\"38\" x2=\"305\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"275\" y1=\"46\" x2=\"345\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"430\" y1=\"46\" x2=\"430\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"585\" y1=\"46\" x2=\"515\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"720\" y1=\"38\" x2=\"555\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"210\" y1=\"152\" x2=\"315\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"430\" y1=\"144\" x2=\"430\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"640\" y1=\"152\" x2=\"545\" y2=\"126\" stroke=\"#000\" stroke-width=\"2\" />\n            </svg>\n          </div>\n\n          <!-- 6-Stage Course Inquiry Workflow with Mini-Example (Slide 29) -->\n          <div style=\"margin: 0.95rem 0;\">\n            <div class=\"sub-title\">6-Stage Engineering Inquiry Workflow (With Mini-Example) <span class=\"slide-ref\">slide 29</span></div>\n            <div class=\"grid-3\">\n              <div class=\"mini-card\"><h4><span>1. EXPLORE</span></h4><p style=\"font-size: 0.85rem;\">What is emerging? <em>(e.g., Spot Edge AI on microcontrollers)</em></p></div>\n              <div class=\"mini-card\"><h4><span>2. UNDERSTAND</span></h4><p style=\"font-size: 0.85rem;\">How does it work? <em>(e.g., Quantized models running locally without cloud)</em></p></div>\n              <div class=\"mini-card\"><h4><span>3. ANALYSE</span></h4><p style=\"font-size: 0.85rem;\">What problem does it address? <em>(e.g., High latency &amp; offline rural clinics)</em></p></div>\n              <div class=\"mini-card\"><h4><span>4. EVALUATE</span></h4><p style=\"font-size: 0.85rem;\">Opportunities &amp; limits? <em>(e.g., Instant alerts vs. limited device RAM)</em></p></div>\n              <div class=\"mini-card\"><h4><span>5. APPLY</span></h4><p style=\"font-size: 0.85rem;\">Where could it be used? <em>(e.g., Portable diabetic eye-screening scanner)</em></p></div>\n              <div class=\"mini-card\"><h4><span>6. SYNTHESIZE</span></h4><p style=\"font-size: 0.85rem;\">How does it solve a real SE problem? <em>(e.g., Full offline-first triage architecture)</em></p></div>\n            </div>\n          </div>\n\n          <!-- Plug-and-Play Exam Formulas -->\n          <div class=\"grid-2\" style=\"margin-bottom: 0.95rem;\">\n            <div class=\"mini-card\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Exam Formula A // 4-Mark Short Questions</span></h4>\n              <p style=\"font-size: 0.85rem; margin-bottom: 0.4rem;\"><em>Prompt style: “Compare Traditional vs. Modern SE” or “Explain two challenges of [Tech]...”</em></p>\n              <ul class=\"brutal-list\">\n                <li><strong>Point 1 (2 marks):</strong> Define the concept clearly + contrast before/after or benefit/risk + give 1 concrete software example.</li>\n                <li><strong>Point 2 (2 marks):</strong> State a distinct second point + explain why it affects engineering quality/cost + give 1 example.</li>\n              </ul>\n            </div>\n            <div class=\"mini-card\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Exam Formula B // 6–10 Mark Tech Evaluation</span></h4>\n              <p style=\"font-size: 0.85rem; margin-bottom: 0.4rem;\"><em>Prompt style: “Evaluate whether a team should adopt [Emerging Tech]...”</em></p>\n              <ul class=\"brutal-list\">\n                <li><strong>1. Problem &amp; Mechanism:</strong> State what problem it solves and how it works (Q1–Q2).</li>\n                <li><strong>2. Fit &amp; Limits:</strong> Explain when it is useful vs. its boundaries (Q3–Q4).</li>\n                <li><strong>3. New SE Risks &amp; Verdict:</strong> Identify new engineering concerns (Q5), assess team readiness (Q6), and state a clear adoption recommendation.</li>\n              </ul>\n            </div>\n          </div>\n\n          <!-- Take-Home Summary (Slide 31) -->\n          <div class=\"callout mint\" style=\"margin-bottom: 0;\">\n            <strong>Take-Home Synthesis <span class=\"slide-ref\">slides 28, 31</span>:</strong>\n            <ul class=\"brutal-list\" style=\"margin-top: 0.45rem;\">\n              <li><strong>1.</strong> Software engineering is continuously evolving—not just in tools, but in how systems are architected, verified, and operated.</li>\n              <li><strong>2.</strong> Every emerging technology introduces new capabilities alongside new engineering risks and trade-offs.</li>\n              <li><strong>3.</strong> Effective software engineers understand not only <em>WHAT</em> a technology does, but <em>WHEN</em> and <em>HOW</em> it should be responsibly applied.</li>\n            </ul>\n            <div style=\"margin-top: 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700;\">\n              NEXT UP → Lecture 2: Ethics and Social Responsibility in Software Engineering\n            </div>\n          </div>\n        </div>\n      ",
      "sourceLabel": "Source slides 24–31 • Full Worked Examples for All 6 Questions"
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

window.initStudyLecture(DATA, STRUCTURED, STORAGE_PREFIX);



})();
