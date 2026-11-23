// Lecture 2: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "Technical Success vs. Ethical Risk: The Three Engineer Questions Unpacked",
      "slides": "1–6",
      "html": "<!-- The 92% Problem (Slides 3–4) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Study: The 92% Student Dropout Predictor <span class=\"slide-ref\">slides 3–4</span></div>\n          <div class=\"nb-callout coral\">\n            <strong>Scenario:</strong> A university builds an AI model predicting students at risk of dropping out. It achieves <strong>92% accuracy</strong>, works reliably, and features an impressive management dashboard—yet technical accuracy alone does not answer whether it is safe to deploy <span class=\"slide-ref\">slide 3</span>.\n          </div>\n\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\"><h4><span>1. Data Exposure</span></h4><p style=\"font-size: 0.86rem;\">Collects and centralizes sensitive personal, financial, and academic student records <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>2. False Positives</span></h4><p style=\"font-size: 0.86rem;\">An 8% error rate still misclassifies real, thriving students (8 out of 100) as “at risk” <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>3. Unfair Labeling</span></h4><p style=\"font-size: 0.86rem;\">Algorithmic scores can stereotype or unfairly label vulnerable demographic cohorts <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>4. Lecturer Bias</span></h4><p style=\"font-size: 0.86rem;\">Risk flags may subconsciously alter how lecturers grade or mentor flagged students <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>5. Anxiety &amp; Stigma</span></h4><p style=\"font-size: 0.86rem;\">Being tagged as a likely dropout damages student confidence and creates social stigma <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>6. Lack of Recourse</span></h4><p style=\"font-size: 0.86rem;\">Opaque model predictions are difficult for students to inspect or challenge <span class=\"slide-ref\">slide 4</span>.</p></div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Model Exam Answer • “Would you deploy it?”</span>\n            <p><strong>Verdict:</strong> Do <strong>not</strong> deploy as an automated decision-maker; deploy only as a human-assisted support tool after safeguards are added.</p>\n            <p><strong>Reasoning:</strong> Even at 92% accuracy, 8% of students are misclassified, risking unfair labeling, student anxiety, and lecturer confirmation bias without a clear appeal process.</p>\n            <p><strong>Engineering Action:</strong> Restrict risk flags to trained academic counselors rather than grading lecturers, explain why a student was flagged, provide an appeal channel, and minimize sensitive data retention.</p>\n          </div>\n        </div>\n\n        <!-- Three Core Questions Unpacked with Concrete Examples (Slide 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Software Engineer’s Three Core Questions — Explained with Examples <span class=\"slide-ref\">slide 5</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Three Software Engineering Questions\">\n              <rect x=\"12\" y=\"14\" width=\"256\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"12\" y=\"14\" width=\"256\" height=\"34\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"140\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">1. CAN WE BUILD IT?</text>\n              <text x=\"140\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Technical Feasibility</text>\n              <text x=\"140\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Available Technology</text>\n              <text x=\"140\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Time &amp; Resources</text>\n\n              <path d=\"M272 77 L296 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"296,71 306,77 296,83\" fill=\"#000\" />\n\n              <rect x=\"308\" y=\"14\" width=\"256\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"308\" y=\"14\" width=\"256\" height=\"34\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"436\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">2. SHOULD WE BUILD IT?</text>\n              <text x=\"436\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Genuine Purpose</text>\n              <text x=\"436\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Validated Need</text>\n              <text x=\"436\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Ethical Concerns</text>\n\n              <path d=\"M568 77 L592 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"592,71 602,77 592,83\" fill=\"#000\" />\n\n              <rect x=\"604\" y=\"14\" width=\"244\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"604\" y=\"14\" width=\"244\" height=\"34\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"726\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">3. WHAT COULD HAPPEN?</text>\n              <text x=\"726\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Intended Benefits</text>\n              <text x=\"726\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Foreseeable Risks</text>\n              <text x=\"726\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Unintended Effects</text>\n            </svg>\n          </div>\n\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <!-- Column 1: Can We Build It -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>1 // Can We Build It?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Technical Feasibility:</strong> Can the problem be solved reliably under real-world constraints?\n                  <div class=\"nb-example\"><em>Example:</em> Scoring credit-card fraud in &lt;50ms without blocking legitimate shoppers, or syncing a rural clinic app offline when internet drops.</div>\n                </li>\n                <li>\n                  <strong>Available Technology:</strong> Do mature, dependable tools, APIs, or hardware exist?\n                  <div class=\"nb-example\"><em>Example:</em> Choosing an audited payment gateway vs. an experimental AI that hallucinates 15% of the time, or realizing users’ older phones lack biometric sensors.</div>\n                </li>\n                <li>\n                  <strong>Time &amp; Resources:</strong> Are budget, skilled staff, and schedule sufficient to build and test safely?\n                  <div class=\"nb-example\"><em>Example:</em> A 4-person team given only 5 weeks and minimal server budget to ship an exam portal—leaving zero time for penetration testing or bias audits.</div>\n                </li>\n              </ul>\n            </div>\n\n            <!-- Column 2: Should We Build It -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>2 // Should We Build It?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Purpose:</strong> Does the core intent respect user autonomy and human dignity?\n                  <div class=\"nb-example\"><em>Example:</em> Employee wellness software that reminds staff to rest (supportive) vs. covertly snapping webcam photos every 3 minutes to punish remote workers (coercive).</div>\n                </li>\n                <li>\n                  <strong>Need:</strong> Does it solve a real problem rather than adding unnecessary surveillance?\n                  <div class=\"nb-example\"><em>Example:</em> Replacing a simple, privacy-safe QR attendance check-in with permanent facial-recognition cameras when roll-call speed was never a bottleneck.</div>\n                </li>\n                <li>\n                  <strong>Ethical Concerns:</strong> Does it compromise fairness, privacy, safety, or honesty?\n                  <div class=\"nb-example\"><em>Example:</em> An automated CV-screening model trained on past hiring records that systematically downgrades female or minority applicants.</div>\n                </li>\n              </ul>\n            </div>\n\n            <!-- Column 3: What Could Happen -->\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span>3 // What Could Happen?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Benefits:</strong> Positive, intended value delivered to users and organizations.\n                  <div class=\"nb-example\"><em>Example:</em> An early-warning dashboard helps academic advisors spot struggling students early and offer free tutoring before final exams.</div>\n                </li>\n                <li>\n                  <strong>Risks:</strong> Foreseeable harms from breaches, downtime, or model errors.\n                  <div class=\"nb-example\"><em>Example:</em> Centralizing sensitive student counseling and grade records creates a prime hacker target, while an 8% false-positive rate mislabels thriving students.</div>\n                </li>\n                <li>\n                  <strong>Unintended Effects:</strong> Second-order human behaviors triggered after deployment.\n                  <div class=\"nb-example\"><em>Example:</em> Lecturers see an “At-Risk” badge and subconsciously grade that student more strictly—turning the prediction into a self-fulfilling prophecy.</div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-callout cyan\" style=\"margin-bottom: 0;\">\n            <strong>Exam Answering Format (4–6 Marks):</strong> Define the distinction clearly, explain two sub-factors, and anchor each in a concrete example.<br />\n            <em>Sample Phrasing:</em> “Technical feasibility asks whether a system can operate reliably under constraints—such as processing mobile payments within two seconds—whereas ethical justification asks whether deploying it is responsible, such as refusing to harvest unnecessary user contacts even when technically easy.”\n          </div>\n        </div>\n\n        <!-- High-Stakes Domains (Slide 6) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Why Ethics Belongs in Software Engineering <span class=\"slide-ref\">slide 6</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.65rem;\">Software systems directly govern high-consequence human infrastructure:</p>\n          <div class=\"nb-tags\">\n            <span class=\"nb-tag cyan\">Education</span>\n            <span class=\"nb-tag coral\">Healthcare</span>\n            <span class=\"nb-tag yellow\">Banking &amp; Finance</span>\n            <span class=\"nb-tag mint\">Employment</span>\n            <span class=\"nb-tag lavender\">Transportation</span>\n            <span class=\"nb-tag orange\">Public Services</span>\n            <span class=\"nb-tag cyan\">Communication</span>\n            <span class=\"nb-tag yellow\">Everyday Decisions</span>\n          </div>\n        </div>"
    },
    {
      "title": "Ethical Foundations, Consent & What Is ACM/IEEE?",
      "slides": "7–11",
      "html": "<!-- Definition & 6 Dimensions (Slide 7) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Ethics Means in Software Engineering <span class=\"slide-ref\">slide 7</span></div>\n          <p style=\"font-size: 0.94rem; margin-bottom: 0.75rem;\">\n            <strong>Ethics</strong> is concerned with principles and reasoning about what is responsible, fair, and appropriate when decisions affect others <span class=\"slide-ref\">slide 7</span>. In software engineering, ethical reasoning evaluates six core dimensions:\n          </p>\n          <div class=\"nb-tags\">\n            <span class=\"nb-tag mint\">Harm &amp; Benefit</span>\n            <span class=\"nb-tag coral\">Safety</span>\n            <span class=\"nb-tag yellow\">Fairness</span>\n            <span class=\"nb-tag cyan\">Privacy</span>\n            <span class=\"nb-tag lavender\">Honesty</span>\n            <span class=\"nb-tag orange\">Accountability</span>\n          </div>\n        </div>\n\n        <!-- Ethics != Law != Policy SVG (Slide 8) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Ethics ≠ Law ≠ Company Policy <span class=\"slide-ref\">slide 8</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 140\" aria-label=\"Legal vs Professional vs Ethical Standards\">\n              <g text-anchor=\"middle\">\n                <rect x=\"14\" y=\"18\" width=\"256\" height=\"104\" rx=\"10\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"142\" y=\"46\" font-size=\"13\" font-weight=\"700\">1. LEGAL</text>\n                <text x=\"142\" y=\"72\" font-size=\"13\" font-weight=\"700\">What the law permits</text>\n                <text x=\"142\" y=\"92\" font-size=\"13\" font-weight=\"700\">or requires</text>\n\n                <text x=\"292\" y=\"76\" font-size=\"20\" font-weight=\"700\">≠</text>\n\n                <rect x=\"314\" y=\"18\" width=\"256\" height=\"104\" rx=\"10\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"442\" y=\"46\" font-size=\"13\" font-weight=\"700\">2. PROFESSIONAL</text>\n                <text x=\"442\" y=\"72\" font-size=\"13\" font-weight=\"700\">What engineering codes</text>\n                <text x=\"442\" y=\"92\" font-size=\"13\" font-weight=\"700\">&amp; standards expect</text>\n\n                <text x=\"592\" y=\"76\" font-size=\"20\" font-weight=\"700\">≠</text>\n\n                <rect x=\"614\" y=\"18\" width=\"232\" height=\"104\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"730\" y=\"46\" font-size=\"13\" font-weight=\"700\">3. ETHICAL</text>\n                <text x=\"730\" y=\"72\" font-size=\"13\" font-weight=\"700\">What responsible</text>\n                <text x=\"730\" y=\"92\" font-size=\"13\" font-weight=\"700\">judgement requires</text>\n              </g>\n            </svg>\n          </div>\n          <p style=\"font-size: 0.88rem; color: var(--nb-muted);\">\n            <strong>Why the distinction matters:</strong> An action can be technically legal (e.g., hidden inside a 30-page Terms of Service) and approved by company policy, yet still fail professional and ethical standards if it deceives or harms users.\n          </p>\n        </div>\n\n        <!-- Case: \"I Agree\" (Slide 9) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case: The “I Agree” Permissions Fallacy <span class=\"slide-ref\">slide 9</span></div>\n          <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n            <p style=\"font-size: 0.9rem;\">\n              A mobile app asks for <strong>Location, Contacts, Microphone,</strong> and <strong>Usage data</strong>, and the user taps <em>“I Agree.”</em>\n            </p>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Model Exam Answer • “Does consent remove the engineer’s responsibility?”</span>\n              <p><strong>Verdict:</strong> <strong>No.</strong> User consent does not absolve software engineers of ethical responsibility.</p>\n              <p><strong>Reasoning:</strong> Users routinely click “I Agree” because privacy policies are long and unreadable or because the app refuses to function unless they accept (“forced consent”). Legal permission does not justify invasive data harvesting.</p>\n              <p><strong>Engineering Action:</strong> Apply <strong>data minimization</strong>—request only permissions strictly necessary for core functionality (e.g., a calculator or flashlight app should never request Contacts or Microphone access).</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- What is ACM/IEEE? Spotlight + 8-Area Vector Hub (Slides 10–11) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Is ACM/IEEE &amp; the Software Engineering Code of Ethics? <span class=\"slide-ref\">slides 10–11</span></div>\n          <div class=\"nb-callout lavender\">\n            <p style=\"margin-bottom: 0.55rem;\">\n              <strong>What are ACM and IEEE?</strong> They are the two premier international professional organizations in computing and engineering:\n            </p>\n            <ul class=\"nb-list\">\n              <li><strong>ACM (Association for Computing Machinery):</strong> The world’s largest educational and scientific computing society, advancing computing as a science and profession.</li>\n              <li><strong>IEEE (Institute of Electrical and Electronics Engineers) / IEEE Computer Society:</strong> The world’s largest technical professional organization dedicated to advancing technology, electronics, and computer engineering.</li>\n              <li><strong>Joint ACM/IEEE Software Engineering Code of Ethics and Professional Practice:</strong> A global professional standard co-developed by ACM and the IEEE Computer Society. It provides structured ethical principles across <strong>eight areas of responsibility</strong> to guide software engineers whenever technical, business, and social interests conflict—establishing that <strong>public interest always comes first</strong>.</li>\n            </ul>\n          </div>\n\n          <!-- Vector Hub of the 8 ACM/IEEE Areas -->\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 195\" aria-label=\"ACM IEEE Eight Areas of Responsibility Hub\">\n              <!-- Center Hub -->\n              <rect x=\"295\" y=\"64\" width=\"270\" height=\"66\" rx=\"12\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"3\" />\n              <text x=\"430\" y=\"92\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">ACM / IEEE CODE</text>\n              <text x=\"430\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\">8 AREAS OF RESPONSIBILITY</text>\n\n              <!-- Top 4 Areas -->\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"24\" y=\"12\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"106\" y=\"34\">1. Public Interest</text>\n                <rect x=\"224\" y=\"12\" width=\"185\" height=\"36\" rx=\"7\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"316\" y=\"34\">2. Client &amp; Employer</text>\n                <rect x=\"444\" y=\"12\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"526\" y=\"34\">3. Product</text>\n                <rect x=\"644\" y=\"12\" width=\"192\" height=\"36\" rx=\"7\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"740\" y=\"34\">4. Judgment</text>\n\n                <!-- Bottom 4 Areas -->\n                <rect x=\"24\" y=\"146\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"106\" y=\"168\">5. Management</text>\n                <rect x=\"224\" y=\"146\" width=\"185\" height=\"36\" rx=\"7\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"316\" y=\"168\">6. Profession</text>\n                <rect x=\"444\" y=\"146\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"526\" y=\"168\">7. Colleagues</text>\n                <rect x=\"644\" y=\"146\" width=\"192\" height=\"36\" rx=\"7\" fill=\"#FEF9C3\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"740\" y=\"168\">8. Self (Learning)</text>\n              </g>\n\n              <!-- Spokes -->\n              <line x1=\"145\" y1=\"48\" x2=\"295\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"330\" y1=\"48\" x2=\"365\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"515\" y1=\"48\" x2=\"495\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"705\" y1=\"48\" x2=\"565\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"145\" y1=\"146\" x2=\"295\" y2=\"112\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"330\" y1=\"146\" x2=\"365\" y2=\"130\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"515\" y1=\"146\" x2=\"495\" y2=\"130\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"705\" y1=\"146\" x2=\"565\" y2=\"112\" stroke=\"#000\" stroke-width=\"2\" />\n            </svg>\n          </div>\n        </div>"
    },
    {
      "title": "ACM/IEEE Code (Areas 1–4): Public, Client, Product & Judgment",
      "slides": "10–15",
      "html": "<div class=\"nb-callout mint\">\n          <strong>Foundational Rule:</strong> Public interest overrides narrow commercial or convenience pressures across all eight areas of the ACM/IEEE Code <span class=\"slide-ref\">slides 11–12</span>.\n        </div>\n\n        <div class=\"nb-grid-2\">\n          <!-- Area 1: Public -->\n          <div class=\"nb-mini\">\n            <h4><span>01 // Public Interest Comes First</span> <span class=\"slide-ref\">slides 11–12</span></h4>\n            <p style=\"font-size: 0.87rem; margin-bottom: 0.5rem;\">Evaluate impacts beyond the paying client:</p>\n            <ul class=\"nb-list\">\n              <li>Who could be harmed by this system?</li>\n              <li>Who might be excluded from access or benefit?</li>\n              <li>What happens if the system fails in production?</li>\n              <li>Are known risks communicated honestly?</li>\n            </ul>\n            <div class=\"nb-example\">\n              <em>Concrete Example:</em> Designing a public transit payment app that accepts only credit cards excludes unbanked citizens and students unless cash/e-wallet top-ups are supported.\n            </div>\n          </div>\n\n          <!-- Area 2: Client & Employer -->\n          <div class=\"nb-mini\">\n            <h4><span>02 // Client &amp; Employer Responsibility</span> <span class=\"slide-ref\">slides 11, 15</span></h4>\n            <p style=\"font-size: 0.87rem; margin-bottom: 0.5rem;\">Serve client/employer interests honestly, consistent with the public interest:</p>\n            <ul class=\"nb-list\">\n              <li>Whose interests am I serving, and do they conflict?</li>\n              <li>Am I honest about realistic deliverables and limits?</li>\n              <li>Am I protecting confidential information?</li>\n              <li>Am I working within my competence and authorisation?</li>\n            </ul>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Scenario Answer • Covert Marketing Data <span class=\"slide-ref\">slide 15</span></span>\n              <p><strong>Scenario:</strong> A client asks you to quietly harvest extra user data “for future marketing” beyond app needs.</p>\n              <p><strong>Response:</strong> Decline covert data collection. Explain privacy/compliance risks and implement explicit, optional opt-in consent if marketing analytics are added.</p>\n            </div>\n          </div>\n\n          <!-- Area 3: Product -->\n          <div class=\"nb-mini\">\n            <h4><span>03 // Product Responsibility</span> <span class=\"slide-ref\">slides 11, 13</span></h4>\n            <p style=\"font-size: 0.87rem; margin-bottom: 0.5rem;\">Passing QA tests is only the baseline, not the finish line:</p>\n            <ul class=\"nb-list\">\n              <li>Is the software genuinely fit for its real-world purpose?</li>\n              <li>Are model or system limitations clearly documented?</li>\n              <li>Are safety and security risks thoroughly mitigated?</li>\n              <li>Is the system deployed only within its intended context?</li>\n              <li>Can users safely recover from errors without data loss?</li>\n            </ul>\n            <div class=\"nb-example\">\n              <em>Concrete Example:</em> Adding an “Undo Transfer” grace window and clear confirmation prompts in a banking app so a typo does not permanently send money to the wrong account.\n            </div>\n          </div>\n\n          <!-- Area 4: Judgment -->\n          <div class=\"nb-mini\">\n            <h4><span>04 // Professional Judgment</span> <span class=\"slide-ref\">slides 11, 14</span></h4>\n            <p style=\"font-size: 0.87rem; margin-bottom: 0.5rem;\">Maintain independent, objective engineering judgment under deadline or management pressure:</p>\n            <div class=\"nb-answer-box\" style=\"margin-top: 0;\">\n              <span class=\"nb-answer-title\">Scenario Answer • Pre-Launch Vulnerability <span class=\"slide-ref\">slide 14</span></span>\n              <p><strong>Scenario:</strong> A security vulnerability is found one day before release; management says, <em>“Launch now. We will fix it later.”</em></p>\n              <p><strong>Verdict &amp; Action:</strong> Refuse to silently ship an exploitable flaw. Document the severity and user exposure, propose delaying release or disabling the vulnerable module until patched, and escalate in writing.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "ACM/IEEE Code (Areas 5–8): Management, Profession, Colleagues & Self",
      "slides": "11, 16–19",
      "html": "<div class=\"nb-grid-2\">\n          <!-- Area 5: Management -->\n          <div class=\"nb-mini\">\n            <h4><span>05 // Management Responsibility</span> <span class=\"slide-ref\">slides 11, 16</span></h4>\n            <ul class=\"nb-list\">\n              <li>Are estimates and deadlines realistic?</li>\n              <li>Are workload and expectations fair to the team?</li>\n              <li>Are risks and blockers reported honestly?</li>\n              <li>Do safety, security, and quality receive adequate time and budget?</li>\n            </ul>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Scenario Answer • Skipping Testing <span class=\"slide-ref\">slide 16</span></span>\n              <p><strong>Scenario:</strong> Facing an unrealistic schedule, a manager tells the team to skip testing and report status as “on track.”</p>\n              <p><strong>Response:</strong> Refuse falsified reporting. Present accurate risk estimates and propose cutting non-essential features rather than skipping quality/safety testing.</p>\n            </div>\n          </div>\n\n          <!-- Area 6: Profession -->\n          <div class=\"nb-mini\">\n            <h4><span>06 // Responsibility to the Profession</span> <span class=\"slide-ref\">slides 11, 17</span></h4>\n            <ul class=\"nb-list\">\n              <li>Does my work uphold the integrity of software engineering?</li>\n              <li>Am I honest about what software can and cannot do?</li>\n              <li>Do I speak up against unethical technical practices?</li>\n              <li>Do I share knowledge and avoid misleading claims?</li>\n            </ul>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Scenario Answer • Exaggerated Claims <span class=\"slide-ref\">slide 17</span></span>\n              <p><strong>Scenario:</strong> A company markets its software as “100% secure” and “bias-free” despite known limitations, and asks you to approve the claim.</p>\n              <p><strong>Response:</strong> Decline signing off on false claims. Replace them with accurate statements detailing tested security controls and known boundaries.</p>\n            </div>\n          </div>\n\n          <!-- Area 7: Colleagues -->\n          <div class=\"nb-mini\">\n            <h4><span>07 // Responsibility to Colleagues</span> <span class=\"slide-ref\">slides 11, 18</span></h4>\n            <ul class=\"nb-list\">\n              <li>Do I give fair credit for teammates’ contributions?</li>\n              <li>Do I support colleagues’ learning and well-being?</li>\n              <li>Do I give and accept honest, constructive feedback?</li>\n              <li>Do I avoid scapegoating or undermining others?</li>\n            </ul>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Scenario Answer • Blaming a Junior Dev <span class=\"slide-ref\">slide 18</span></span>\n              <p><strong>Scenario:</strong> A junior teammate’s code caused a bug and the lead blames them publicly, even though code review also missed it.</p>\n              <p><strong>Response:</strong> Acknowledge shared team accountability in the review process, mentor the junior teammate on the fix, and add automated regression tests.</p>\n            </div>\n          </div>\n\n          <!-- Area 8: Self -->\n          <div class=\"nb-mini\">\n            <h4><span>08 // Self: Lifelong Learning</span> <span class=\"slide-ref\">slides 11, 19</span></h4>\n            <ul class=\"nb-list\">\n              <li>Do I possess the competence required for this task?</li>\n              <li>Am I keeping my technical and ethical skills current?</li>\n              <li>Do I learn from mistakes and share post-mortem lessons?</li>\n              <li>Do I know when to ask for specialist help or decline work?</li>\n            </ul>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Scenario Answer • Unfamiliar Health AI <span class=\"slide-ref\">slide 19</span></span>\n              <p><strong>Scenario:</strong> Asked to build a medical-diagnosis feature using an unfamiliar AI technique on a tight deadline.</p>\n              <p><strong>Response:</strong> Do not accept blindly. Disclose your competence gap, request medical domain oversight and extended validation time, or decline if safety cannot be assured.</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Ethical Trade-Offs (With Real Examples) & Decision Checklists",
      "slides": "20–22",
      "html": "<!-- 5 Trade-off Pairs SVG + Concrete Table (Slide 20) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Core Ethical Trade-Offs Made Concrete <span class=\"slide-ref\">slide 20</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 145\" aria-label=\"Five Ethical Trade-offs in Software Engineering\">\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"12\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"90\" y=\"38\">Speed</text>\n                <text x=\"90\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"12\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"90\" y=\"114\">Safety</text>\n\n                <rect x=\"182\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"260\" y=\"38\">Cost</text>\n                <text x=\"260\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"182\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"260\" y=\"114\">Quality</text>\n\n                <rect x=\"352\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"38\">Convenience</text>\n                <text x=\"430\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"352\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"114\">Privacy</text>\n\n                <rect x=\"522\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"600\" y=\"38\">Personalisation</text>\n                <text x=\"600\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"522\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"600\" y=\"114\">Data Collection</text>\n\n                <rect x=\"692\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"770\" y=\"38\">Automation</text>\n                <text x=\"770\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"692\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"770\" y=\"114\">Human Control</text>\n              </g>\n            </svg>\n          </div>\n\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Trade-Off Pair</th>\n                  <th>Concrete Software Situation</th>\n                  <th>Balanced Engineering Mitigation</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Speed vs. Safety</strong></td>\n                  <td>Pushing a rapid hotfix to a hospital booking app without regression tests to hit a Friday deadline.</td>\n                  <td>Automate core safety &amp; security test suites in CI/CD so fast releases still pass mandatory checks.</td>\n                </tr>\n                <tr>\n                  <td><strong>Cost vs. Quality</strong></td>\n                  <td>Picking an unencrypted database tier to trim startup cloud bills while storing user IC and health records.</td>\n                  <td>Prioritize encryption-at-rest and role-based access in the MVP budget while deferring cosmetic UI polish.</td>\n                </tr>\n                <tr>\n                  <td><strong>Convenience vs. Privacy</strong></td>\n                  <td>Auto-uploading a user’s entire phone contact book so they can “find friends in one tap.”</td>\n                  <td>Offer manual username search or hash contact identifiers locally on-device rather than uploading raw contacts.</td>\n                </tr>\n                <tr>\n                  <td><strong>Personalisation vs. Data Collection</strong></td>\n                  <td>Tracking every click, search, and GPS ping 24/7 to serve hyper-targeted shopping recommendations.</td>\n                  <td>Use anonymized session-level preferences and let users inspect, pause, or wipe their profile data.</td>\n                </tr>\n                <tr>\n                  <td><strong>Automation vs. Human Control</strong></td>\n                  <td>Letting an AI loan-approval or grading model issue automatic rejections with zero human review.</td>\n                  <td>Keep a <strong>human-in-the-loop</strong> for borderline or negative outcomes and provide clear explanations.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <!-- 7-Step Checklist (Slide 21) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Seven-Question Pre-Deployment Ethical Check <span class=\"slide-ref\">slide 21</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\"><h4><span>01 // Reach</span></h4><p style=\"font-size: 0.85rem;\">Who could be affected (users &amp; non-users)?</p></div>\n            <div class=\"nb-mini\"><h4><span>02 // Failure</span></h4><p style=\"font-size: 0.85rem;\">What could go wrong if misused or breached?</p></div>\n            <div class=\"nb-mini\"><h4><span>03 // Value</span></h4><p style=\"font-size: 0.85rem;\">Who actually benefits from this feature?</p></div>\n            <div class=\"nb-mini\"><h4><span>04 // Exposure</span></h4><p style=\"font-size: 0.85rem;\">Who carries the risk when errors happen?</p></div>\n            <div class=\"nb-mini\"><h4><span>05 // Transparency</span></h4><p style=\"font-size: 0.85rem;\">Do users genuinely understand what happens to their data?</p></div>\n            <div class=\"nb-mini\"><h4><span>06 // Alternatives</span></h4><p style=\"font-size: 0.85rem;\">Is there a safer, less invasive way to solve the problem?</p></div>\n            <div class=\"nb-mini\" style=\"grid-column: span 2; background: var(--study-surface-yellow, #fef9c3);\"><h4><span>07 // Accountability &amp; Defensibility</span></h4><p style=\"font-size: 0.85rem;\">Can the engineering team openly explain and defend this design decision to the public?</p></div>\n          </div>\n        </div>\n\n        <!-- Applied Mini Case: Facial Attendance (Slide 22) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Applied Case Analysis: Facial Recognition Attendance <span class=\"slide-ref\">slide 22</span></div>\n          <div class=\"nb-mini\" style=\"background: var(--study-surface-neutral, #f8fafc);\">\n            <p style=\"font-size: 0.9rem;\"><strong>Prompt:</strong> A university plans to use facial recognition cameras to record lecture attendance automatically.</p>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Model Exam Answer • 4-Point Breakdown</span>\n              <p><strong>1. Benefit:</strong> Automates classroom roll-call speed and eliminates manual attendance sheets.</p>\n              <p><strong>2. Affected Stakeholders:</strong> Students, lecturers, university IT administrators, and classroom visitors.</p>\n              <p><strong>3. Ethical Concern:</strong> Biometric leaks are irreversible (unlike a password, you cannot change your face), and cameras may show accuracy bias across skin tones or lighting.</p>\n              <p><strong>4. Key Engineer Question:</strong> <em>“How are facial templates encrypted and purged after graduation, and is a non-biometric check-in option available for students who opt out?”</em></p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Social Responsibility, Ripple Effects & Stakeholder Mapping",
      "slides": "23–31",
      "html": "<!-- Ethics vs Social Responsibility (Slide 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-callout lavender\" style=\"margin-bottom: 0;\">\n              <strong>ETHICS asks <span class=\"slide-ref\">slide 23</span>:</strong><br />\n              <em>“What is the responsible thing to do?”</em> — Focuses on professional duties, integrity, and moral boundaries.\n            </div>\n            <div class=\"nb-callout cyan\" style=\"margin-bottom: 0;\">\n              <strong>SOCIAL RESPONSIBILITY asks <span class=\"slide-ref\">slide 23</span>:</strong><br />\n              <em>“What impact does our software have on people, communities, and society?”</em> — Focuses on collective, systemic outcomes.\n            </div>\n          </div>\n        </div>\n\n        <!-- Ripple Effect & Stakeholder Tiers SVG (Slides 24–25) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Ripple Effect &amp; Stakeholder Impact Tiers <span class=\"slide-ref\">slides 24–25</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 165\" aria-label=\"Ripple Effect of Software Solutions\">\n              <text x=\"14\" y=\"24\" font-size=\"11.5\" font-weight=\"700\">6-STAGE RIPPLE EFFECT PROPAGATION (SLIDE 24)</text>\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"34\" width=\"122\" height=\"42\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"75\" y=\"59\">Software Solution</text>\n                <text x=\"146\" y=\"59\">→</text>\n                <rect x=\"156\" y=\"34\" width=\"118\" height=\"42\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"215\" y=\"59\">Direct Users</text>\n                <text x=\"284\" y=\"59\">→</text>\n                <rect x=\"294\" y=\"34\" width=\"118\" height=\"42\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"353\" y=\"59\">Organisation</text>\n                <text x=\"422\" y=\"59\">→</text>\n                <rect x=\"432\" y=\"34\" width=\"134\" height=\"42\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"499\" y=\"59\">Other Stakeholders</text>\n                <text x=\"576\" y=\"59\">→</text>\n                <rect x=\"586\" y=\"34\" width=\"114\" height=\"42\" rx=\"6\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"643\" y=\"59\">Community</text>\n                <text x=\"710\" y=\"59\">→</text>\n                <rect x=\"720\" y=\"34\" width=\"128\" height=\"42\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"784\" y=\"52\">Society &amp;</text><text x=\"784\" y=\"67\">Environment</text>\n              </g>\n\n              <text x=\"14\" y=\"104\" font-size=\"11.5\" font-weight=\"700\">STAKEHOLDER IMPACT TIERS (SLIDE 25)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"109\" y=\"137\">Software (Solution)</text>\n                <text x=\"218\" y=\"137\">→</text>\n                <rect x=\"232\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#DCFCE7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"327\" y=\"137\">Users (Direct Impact)</text>\n                <text x=\"436\" y=\"137\">→</text>\n                <rect x=\"450\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#FEF9C3\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"545\" y=\"137\">Others (Indirect Impact)</text>\n                <text x=\"654\" y=\"137\">→</text>\n                <rect x=\"668\" y=\"114\" width=\"180\" height=\"38\" rx=\"6\" fill=\"#FFE4E6\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"758\" y=\"137\">Society (Wider Impact)</text>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Invisible Stakeholders & Digital Exclusion Case (Slides 26–28) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Invisible Stakeholders &amp; Digital Exclusion <span class=\"slide-ref\">slides 26–28</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.6rem;\">\n            <strong>Invisible Stakeholders <span class=\"slide-ref\">slide 26</span>:</strong> Groups affected by a system even though they never touch its screen (e.g., delivery riders’ families affected by algorithmic shift quotas, or neighborhood residents affected by navigation apps routing highway traffic onto quiet residential streets):\n          </p>\n          <div class=\"nb-tags\" style=\"margin-bottom: 1rem;\">\n            <span class=\"nb-tag\">Family Members</span>\n            <span class=\"nb-tag\">Employees</span>\n            <span class=\"nb-tag\">Non-Users</span>\n            <span class=\"nb-tag coral\">Vulnerable Groups</span>\n            <span class=\"nb-tag\">Communities</span>\n            <span class=\"nb-tag\">Future Users</span>\n            <span class=\"nb-tag mint\">The Environment</span>\n          </div>\n\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span>Case: 100% Digital Government Service</span> <span class=\"slide-ref\">slide 27</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">Moving a public service strictly online delivers faster processing, but creates <strong>five exclusion barriers</strong>:</p>\n              <ul class=\"nb-list\">\n                <li>Poor rural internet connectivity</li>\n                <li>Low digital literacy (e.g., elderly citizens)</li>\n                <li>Disability &amp; screen-reader accessibility barriers</li>\n                <li>Lack of suitable smartphones or computers</li>\n                <li>Language and complex UI usability barriers</li>\n              </ul>\n              <div class=\"nb-answer-box\">\n                <span class=\"nb-answer-title\">Model Answer • “Is digital automatically progress?”</span>\n                <p><strong>No.</strong> Eliminating offline options excludes vulnerable citizens. True progress requires accessible, multilingual design plus physical counter or phone-assisted alternatives.</p>\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Seven Pathways to Positive Social Impact</span> <span class=\"slide-ref\">slide 28</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Accessibility:</strong> Screen-reader &amp; voice-assisted public apps</li>\n                <li><strong>Healthcare:</strong> Telemedicine &amp; early diagnostic triage</li>\n                <li><strong>Education:</strong> Open, low-bandwidth learning platforms</li>\n                <li><strong>Disaster Response:</strong> Real-time flood alerts &amp; shelter routing</li>\n                <li><strong>Resource Efficiency:</strong> Smart grid &amp; water-leak monitoring</li>\n                <li><strong>Financial Inclusion:</strong> Micro-loans &amp; digital wallets for unbanked users</li>\n                <li><strong>Community Services:</strong> Civic issue reporting &amp; local aid matching</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Stakeholder Impact Map & Worked Matrix (Slides 29–31) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Stakeholder Impact Map &amp; Worked Matrix <span class=\"slide-ref\">slides 29–31</span></div>\n          <div class=\"nb-callout yellow\">\n            <strong>5-Step Stakeholder Impact Flow <span class=\"slide-ref\">slides 29, 31</span>:</strong>\n            1. Who benefits? → 2. Who may be harmed? → 3. What could go wrong? → 4. Who is accountable? → 5. How can negative impact be reduced?\n          </div>\n\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Stakeholder <span class=\"slide-ref\">slide 30</span></th>\n                  <th>Potential Benefit</th>\n                  <th>Ethical / Social Concern</th>\n                  <th>Engineering &amp; Governance Responsibility</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Students</strong></td>\n                  <td>Early academic tutoring and timely counseling support</td>\n                  <td>False-positive stigma, anxiety, loss of privacy</td>\n                  <td>Provide clear explanations, human appeal channels, and strict data minimization</td>\n                </tr>\n                <tr>\n                  <td><strong>Lecturers</strong></td>\n                  <td>Actionable visibility into struggling cohorts</td>\n                  <td>Confirmation bias lowering expectations for flagged students</td>\n                  <td>Train staff to treat flags as supportive prompts rather than fixed labels</td>\n                </tr>\n                <tr>\n                  <td><strong>University Management</strong></td>\n                  <td>Higher retention rates and targeted resource allocation</td>\n                  <td>Blind over-reliance on opaque 92% accuracy metrics</td>\n                  <td>Audit model fairness across cohorts and mandate human-in-the-loop review</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "UN Sustainable Development Goals (SDGs) & Mechanism Proof",
      "slides": "32–34",
      "html": "<!-- Key SDGs (Slide 32) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Software-Relevant UN SDGs (2030 Agenda — 17 Global Goals) <span class=\"slide-ref\">slide 32</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\"><h4><span>SDG 3</span></h4><p style=\"font-size: 0.85rem;\">Good Health &amp; Well-being (e.g., remote triage apps)</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\"><h4><span>SDG 4</span></h4><p style=\"font-size: 0.85rem;\">Quality Education (e.g., adaptive open learning hubs)</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-orange, #ffedd5);\"><h4><span>SDG 9</span></h4><p style=\"font-size: 0.85rem;\">Industry, Innovation &amp; Infrastructure</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #fce7f3);\"><h4><span>SDG 10</span></h4><p style=\"font-size: 0.85rem;\">Reduced Inequalities (e.g., accessible assistive tech)</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\"><h4><span>SDG 11</span></h4><p style=\"font-size: 0.85rem;\">Sustainable Cities &amp; Communities</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef3c7);\"><h4><span>SDG 12</span></h4><p style=\"font-size: 0.85rem;\">Responsible Consumption &amp; Production</p></div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #d1fae5); grid-column: span 2;\"><h4><span>SDG 13</span></h4><p style=\"font-size: 0.85rem;\">Climate Action (emission reduction &amp; environmental resilience)</p></div>\n          </div>\n        </div>\n\n        <!-- Case: Smart Waste Management & Mechanism Diagram (Slides 33–34) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Study: Smart Waste Management &amp; Causal Mechanism <span class=\"slide-ref\">slides 33–34</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Smart Waste Management SDG Mechanism\">\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"16\" width=\"240\" height=\"122\" rx=\"10\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"134\" y=\"38\" font-size=\"11.5\">1. SOFTWARE / IOT INPUTS</text>\n                <text x=\"134\" y=\"62\">• IoT Bin Capacity Sensors</text>\n                <text x=\"134\" y=\"82\">• Demand Prediction AI</text>\n                <text x=\"134\" y=\"102\">• Recycling Guidance App</text>\n                <text x=\"134\" y=\"122\">• Waste Pattern Analytics</text>\n\n                <path d=\"M258 77 L292 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"292,71 304,77 292,83\" fill=\"#000\" />\n\n                <rect x=\"306\" y=\"16\" width=\"248\" height=\"122\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"430\" y=\"38\" font-size=\"11.5\">2. OPERATIONAL MECHANISM</text>\n                <text x=\"430\" y=\"66\">• Optimised collection routes</text>\n                <text x=\"430\" y=\"88\">• Prevents overflowing bins</text>\n                <text x=\"430\" y=\"110\">• Cuts unnecessary truck trips</text>\n\n                <path d=\"M558 77 L592 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"592,71 604,77 592,83\" fill=\"#000\" />\n\n                <rect x=\"606\" y=\"16\" width=\"240\" height=\"122\" rx=\"10\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"726\" y=\"38\" font-size=\"11.5\">3. MEASURABLE SDG OUTCOME</text>\n                <text x=\"726\" y=\"66\">• SDG 11: Cleaner urban areas</text>\n                <text x=\"726\" y=\"88\">• SDG 12: Higher recycling rates</text>\n                <text x=\"726\" y=\"110\">• SDG 13: Lower fuel emissions</text>\n              </g>\n            </svg>\n          </div>\n\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-coral, #ffe4e6);\">\n              <h4><span><svg class=\"lucide lucide-x summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg> Weak Exam Answer (Name-Dropping)</span></h4>\n              <p style=\"font-size: 0.87rem;\">“This IoT smart bin project supports SDG 11, SDG 12, and SDG 13 because it helps the environment and cities.”</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span><svg class=\"lucide lucide-check summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m9 12 2 2 4-4\"/></svg> Full-Mark Exam Answer (Mechanism Proof)</span> <span class=\"slide-ref\">slide 34</span></h4>\n              <p style=\"font-size: 0.87rem;\">“IoT fill-level sensors and route optimization prevent overflowing street bins (<strong>SDG 11</strong>), app-based sorting guides increase household recycling (<strong>SDG 12</strong>), and eliminating half-empty truck runs directly cuts fuel burn and CO₂ emissions (<strong>SDG 13</strong>).”</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Malaysian Frameworks (With Applied Examples) & Exam Answer Formulas",
      "slides": "35–43",
      "html": "<!-- 3 Malaysian Frameworks with Concrete Examples (Slides 35–37) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Aligning Software with Malaysia’s National Priorities <span class=\"slide-ref\">slides 35–37</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>10-10 MySTIE Framework</span> <span class=\"slide-ref\">slide 35</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">\n                Bridges <strong>10 Science &amp; Technology drivers</strong> with <strong>10 Socioeconomic drivers</strong> (Academy of Sciences Malaysia) to connect R&amp;D with national needs.\n              </p>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> Pairing <strong>AI Computer Vision</strong> (tech driver) with <strong>Smart Agriculture</strong> (socioeconomic driver) in a mobile leaf-disease scanner that helps Malaysian smallholder farmers cut pesticide waste and protect crop yields.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>MyDIGITAL Blueprint</span> <span class=\"slide-ref\">slide 36</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">Malaysia Digital Economy Blueprint spans <strong>7 core themes</strong>:</p>\n              <div class=\"nb-tags\" style=\"margin-bottom: 0.5rem;\">\n                <span class=\"nb-tag\">Digital Services</span>\n                <span class=\"nb-tag\">Digital Talent</span>\n                <span class=\"nb-tag\">Digital Adoption</span>\n                <span class=\"nb-tag\">Inclusion</span>\n                <span class=\"nb-tag\">Data</span>\n                <span class=\"nb-tag\">Cybersecurity</span>\n                <span class=\"nb-tag\">Innovation</span>\n              </div>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> A lightweight Bahasa Melayu/English bookkeeping app advances <strong>Digital Adoption</strong> and <strong>Inclusion</strong> by helping rural micro-vendors digitize cash flow and qualify for micro-financing.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-yellow, #fef9c3);\">\n              <h4><span>Industry4WRD</span> <span class=\"slide-ref\">slide 37</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">National Policy on Industry 4.0 (MITI Malaysia) driving smart manufacturing, automation, and digital industrial competitiveness.</p>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> IoT predictive-maintenance software on factory assembly lines reduces unplanned downtime for Malaysian manufacturing SMEs while alerting technicians to worn machinery before workplace accidents occur.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Four Perspectives SVG (Slide 38) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Four Perspectives — Evaluating One Software Solution <span class=\"slide-ref\">slide 38</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 150\" aria-label=\"Four Perspectives for Evaluating One Software Solution\">\n              <g text-anchor=\"middle\">\n                <rect x=\"14\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"112\" y=\"42\" font-size=\"12\" font-weight=\"700\">1. ETHICS</text>\n                <text x=\"112\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">Is it responsible?</text>\n                <text x=\"112\" y=\"98\" font-size=\"11.5\">(Fair, safe, honest)</text>\n\n                <rect x=\"226\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"324\" y=\"42\" font-size=\"12\" font-weight=\"700\">2. SOCIAL IMPACT</text>\n                <text x=\"324\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">Who is affected?</text>\n                <text x=\"324\" y=\"98\" font-size=\"11.5\">(Users &amp; non-users)</text>\n\n                <rect x=\"438\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"536\" y=\"42\" font-size=\"12\" font-weight=\"700\">3. GLOBAL SDGs</text>\n                <text x=\"536\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">What societal problem</text>\n                <text x=\"536\" y=\"94\" font-size=\"13.5\" font-weight=\"700\">does it address?</text>\n\n                <rect x=\"650\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"748\" y=\"42\" font-size=\"11\" font-weight=\"700\">4. NATIONAL PRIORITIES</text>\n                <text x=\"748\" y=\"70\" font-size=\"12.5\" font-weight=\"700\">How does it fit MySTIE,</text>\n                <text x=\"748\" y=\"90\" font-size=\"12.5\" font-weight=\"700\">MyDIGITAL &amp;</text>\n                <text x=\"748\" y=\"110\" font-size=\"12.5\" font-weight=\"700\">Industry4WRD?</text>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Structured Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>Formula A // 4-Mark Short Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Explain two ethical concerns / principles...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Name principle/concern + explain <em>why</em> it matters in the scenario + state concrete harm/impact.</li>\n                <li><strong>Point 2 (2 marks):</strong> Name a distinct second principle/concern + explain <em>why</em> it matters + state concrete harm/impact.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>Formula B // 6–10 Mark Case Studies</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Discuss / Justify whether to deploy...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Stakeholder:</strong> Identify direct users &amp; invisible non-users affected.</li>\n                <li><strong>2. Benefit vs. Harm:</strong> Pair intended gain with specific risk/unintended effect.</li>\n                <li><strong>3. ACM/IEEE Principle:</strong> Anchor reasoning in a code area (e.g., <em>Public Interest</em> or <em>Product</em>).</li>\n                <li><strong>4. Mitigation &amp; Verdict:</strong> Propose a technical safeguard + state clear deployment decision.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Final Synthesis & Three Takeaways (Slides 39–43) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Deployment Gate, Three Pillars &amp; Official References <span class=\"slide-ref\">slides 39–43</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.9rem;\">\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-lavender, #eeeeff);\">\n              <h4><span>1 // Build It Right</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Ensure technical quality, safety, security, and operational reliability.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-mint, #dcfce7);\">\n              <h4><span>2 // Build the Right Thing</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Understand users, stakeholders, genuine purpose, and human consequences.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: var(--study-surface-cyan, #e0f2fe);\">\n              <h4><span>3 // Think Beyond the System</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Account for societal impact, environmental sustainability, and wider national/global context.</p>\n            </div>\n          </div>\n\n          <div class=\"nb-callout mint\" style=\"margin-bottom: 0;\">\n            <strong>Core Principle &amp; Reference Standards <span class=\"slide-ref\">slides 42–43</span>:</strong> A software system can succeed technically while still causing social harm; software engineers bear a continuous duty to anticipate, mitigate, and govern those effects. Key standards: <em>ACM Code of Ethics and Professional Conduct, ACM/IEEE Software Engineering Code of Ethics and Professional Practice, UN SDGs, ASM 10-10 MySTIE Framework, Malaysia Digital Economy Blueprint (MyDIGITAL),</em> and <em>MITI Industry4WRD</em>.\n          </div>\n        </div>"
    }
  ],
  "mcq": [
    {
      "question": "A university AI predicts student dropout risk with 92% accuracy. What is the strongest ethical conclusion?",
      "choices": [
        "Accuracy proves it is fair",
        "Deploy immediately because it works",
        "Evaluate privacy, bias and unintended harms before deciding",
        "Students have no right to question the model"
      ],
      "correct": 2,
      "explanation": "Accuracy measures one aspect of technical performance, not fairness, consent, social impact or accountability.",
      "slides": "3–4"
    },
    {
      "question": "Which question examines purpose, need and ethical concerns?",
      "choices": [
        "Can we build it?",
        "Should we build it?",
        "How quickly can we ship it?",
        "What language should we use?"
      ],
      "correct": 1,
      "explanation": "“Should we build it?” evaluates ethical justification, rather than technical feasibility.",
      "slides": "5"
    },
    {
      "question": "Which option best describes ethics in software engineering?",
      "choices": [
        "Only following company policy",
        "Only complying with law",
        "Reasoning about responsible, fair and appropriate actions affecting others",
        "Building software that customers will pay for"
      ],
      "correct": 2,
      "explanation": "The slide defines ethics through responsible, fair and appropriate judgement.",
      "slides": "7–8"
    },
    {
      "question": "A user clicks “I Agree” to unnecessary microphone and contacts permissions. What follows?",
      "choices": [
        "The engineer has no further duty",
        "Consent alone makes data collection ethical",
        "Only the marketing team is accountable",
        "The engineer must still question necessity and impact"
      ],
      "correct": 3,
      "explanation": "User agreement does not automatically eliminate professional ethical responsibility.",
      "slides": "9"
    },
    {
      "question": "Which ACM/IEEE area asks whether software is fit, safe and reliable?",
      "choices": [
        "Product",
        "Profession",
        "Colleagues",
        "Self"
      ],
      "correct": 0,
      "explanation": "Area 3 (Product) concerns product suitability, safety, security and reliability.",
      "slides": "11, 14"
    },
    {
      "question": "An engineer refuses to approve an unsupported “100% secure” claim. Which area is most directly relevant?",
      "choices": [
        "Management",
        "Profession",
        "Colleagues",
        "Self"
      ],
      "correct": 1,
      "explanation": "Area 6 includes honest claims and the integrity of the profession.",
      "slides": "17"
    },
    {
      "question": "Which ethical trade-off most directly concerns automated AI decisions that cannot be challenged?",
      "choices": [
        "Cost vs quality",
        "Convenience vs privacy",
        "Automation vs human control",
        "Speed vs safety"
      ],
      "correct": 2,
      "explanation": "Automation can reduce opportunities for human review and control.",
      "slides": "20"
    },
    {
      "question": "What is the first question in the lecture’s simple ethical decision check?",
      "choices": [
        "Who could be affected?",
        "Can we deliver tomorrow?",
        "Will management approve?",
        "What programming language is preferred?"
      ],
      "correct": 0,
      "explanation": "The checklist begins by identifying affected parties.",
      "slides": "21"
    },
    {
      "question": "An individual never uses an app but is negatively affected by decisions made using it. They are best described as:",
      "choices": [
        "A direct user only",
        "An invisible or indirect stakeholder",
        "A software tester",
        "An irrelevant outsider"
      ],
      "correct": 1,
      "explanation": "The lecture explicitly considers people harmed or helped without directly using the system.",
      "slides": "25–26"
    },
    {
      "question": "Why is a 100% digital government service not automatically social progress?",
      "choices": [
        "Digital services are always insecure",
        "Physical services must always be faster",
        "Every user has a suitable device",
        "Connectivity, literacy, accessibility and language barriers may exclude people"
      ],
      "correct": 3,
      "explanation": "The slide highlights several inclusion barriers, despite gains in convenience.",
      "slides": "27"
    },
    {
      "question": "How many Sustainable Development Goals are in the UN 2030 Agenda?",
      "choices": [
        "7",
        "10",
        "17",
        "20"
      ],
      "correct": 2,
      "explanation": "The SDG framework contains 17 global goals; the lecture highlights seven.",
      "slides": "32"
    },
    {
      "question": "Which SDGs are explicitly connected to the smart waste-management case?",
      "choices": [
        "SDGs 3, 4 and 9",
        "SDGs 11, 12 and 13",
        "SDGs 1, 2 and 5",
        "SDGs 6, 8 and 16"
      ],
      "correct": 1,
      "explanation": "The lecture highlights sustainable communities, responsible consumption and climate action.",
      "slides": "33–34"
    },
    {
      "question": "The 10-10 MySTIE Framework connects:",
      "choices": [
        "Ten universities to ten private firms",
        "Ten SDGs to ten digital services",
        "Ten socioeconomic drivers to ten science-and-technology drivers",
        "Ten data centres to ten networks"
      ],
      "correct": 2,
      "explanation": "MySTIE relates national socioeconomic needs to science, technology and innovation.",
      "slides": "35"
    },
    {
      "question": "Which is NOT a theme explicitly listed under MyDIGITAL in the lecture?",
      "choices": [
        "Cybersecurity",
        "Inclusion",
        "Digital talent",
        "100% guaranteed AI accuracy"
      ],
      "correct": 3,
      "explanation": "The seven listed themes are digital services, adoption, data, cybersecurity, talent, inclusion and innovation.",
      "slides": "36"
    },
    {
      "question": "The lecture’s three final messages are:",
      "choices": [
        "Code, test, ship",
        "Build it right; build the right thing; think beyond the system",
        "Automate everything; minimise costs; protect profits",
        "Use AI; adopt cloud; replace manual systems"
      ],
      "correct": 1,
      "explanation": "These are the exact concluding principles on slides 40–41.",
      "slides": "40–41"
    }
  ],
  "flashcards": [
    {
      "front": "What are the three main engineering questions?",
      "back": "Can we build it? Should we build it? What could happen?",
      "slides": "5"
    },
    {
      "front": "What does “Can we build it?” assess?",
      "back": "Technical feasibility, technology and resources.",
      "slides": "5"
    },
    {
      "front": "What does “Should we build it?” assess?",
      "back": "Purpose, need and ethical concerns.",
      "slides": "5"
    },
    {
      "front": "Why is 92% accuracy not enough?",
      "back": "It does not prove fairness, privacy, accountability or lack of harm.",
      "slides": "3–4"
    },
    {
      "front": "What is ethics in this lecture?",
      "back": "Reasoning about responsible, fair and appropriate decisions affecting others.",
      "slides": "7"
    },
    {
      "front": "Name the six ethical considerations.",
      "back": "Harm/benefit, fairness, privacy, safety, honesty and accountability.",
      "slides": "7"
    },
    {
      "front": "What is the difference between law and ethics?",
      "back": "Law sets permissions/duties; ethics asks what responsible judgement requires.",
      "slides": "8"
    },
    {
      "front": "Does clicking “I Agree” end ethical responsibility?",
      "back": "No. Necessity, informed choice and effects on others still matter.",
      "slides": "9"
    },
    {
      "front": "What is the purpose of a professional code?",
      "back": "To guide judgement when technical, business and social interests conflict.",
      "slides": "10"
    },
    {
      "front": "List the eight ACM/IEEE areas in order.",
      "back": "Public; Client & Employer; Product; Judgment; Management; Profession; Colleagues; Self.",
      "slides": "11"
    },
    {
      "front": "What is ACM/IEEE Area 1?",
      "back": "Public: consider harm, exclusion, failures and honest risk communication.",
      "slides": "12"
    },
    {
      "front": "What is ACM/IEEE Area 2?",
      "back": "Client & Employer: serve them responsibly, consistent with public interest.",
      "slides": "13"
    },
    {
      "front": "What is ACM/IEEE Area 3?",
      "back": "Product: ensure fit, safety, security, reliability and error recovery.",
      "slides": "14"
    },
    {
      "front": "What is ACM/IEEE Area 4?",
      "back": "Judgment: maintain objective professional judgement under pressure.",
      "slides": "15"
    },
    {
      "front": "What is ACM/IEEE Area 5?",
      "back": "Management: realistic plans, fair workloads, honest reporting and quality.",
      "slides": "16"
    },
    {
      "front": "What is ACM/IEEE Area 6?",
      "back": "Profession: uphold integrity and avoid misleading software claims.",
      "slides": "17"
    },
    {
      "front": "What is ACM/IEEE Area 7?",
      "back": "Colleagues: give credit, support learning and avoid unfair blame.",
      "slides": "18"
    },
    {
      "front": "What is ACM/IEEE Area 8?",
      "back": "Self: keep learning, know your limits and ask for help.",
      "slides": "19"
    },
    {
      "front": "Name two trade-offs involving privacy.",
      "back": "Convenience vs privacy; personalisation vs data collection.",
      "slides": "20"
    },
    {
      "front": "What is the automation trade-off?",
      "back": "Automation vs human control.",
      "slides": "20"
    },
    {
      "front": "What are ethical-check questions 1–4?",
      "back": "Who is affected? What can go wrong? Who benefits? Who carries risk?",
      "slides": "21"
    },
    {
      "front": "What are ethical-check questions 5–7?",
      "back": "Do users understand? Safer/fairer alternative? Can it be defended?",
      "slides": "21"
    },
    {
      "front": "How do ethics and social responsibility differ?",
      "back": "Ethics asks what is responsible; social responsibility asks who is affected.",
      "slides": "23"
    },
    {
      "front": "What is the ripple effect of software?",
      "back": "Direct users → organisation → other stakeholders → community → society/environment.",
      "slides": "24"
    },
    {
      "front": "What is an invisible stakeholder?",
      "back": "Someone affected by software despite not directly using it.",
      "slides": "26"
    },
    {
      "front": "Name two barriers to digital-only public services.",
      "back": "Examples: poor connectivity, low digital literacy or inaccessible design.",
      "slides": "27"
    },
    {
      "front": "What are five stakeholder-impact map prompts?",
      "back": "Benefits, harms, failures, accountability and mitigation.",
      "slides": "29"
    },
    {
      "front": "How many UN SDGs are there?",
      "back": "17 global goals in the 2030 Agenda.",
      "slides": "32"
    },
    {
      "front": "Which SDGs are linked to smart waste?",
      "back": "SDG 11, SDG 12 and SDG 13.",
      "slides": "34"
    },
    {
      "front": "What is the lesson of the smart waste SDG case?",
      "back": "Explain the actual mechanism and seek evidence of contribution.",
      "slides": "34"
    },
    {
      "front": "What is 10-10 MySTIE?",
      "back": "Ten socioeconomic drivers linked to ten science and technology drivers.",
      "slides": "35"
    },
    {
      "front": "Name the MyDIGITAL themes.",
      "back": "Services, adoption, data, cybersecurity, talent, inclusion, innovation.",
      "slides": "36"
    },
    {
      "front": "What does the lecture establish about Industry4WRD?",
      "back": "It names an industry-facing Malaysian priority; details are not supplied.",
      "slides": "37–38"
    },
    {
      "front": "What are the four final project perspectives?",
      "back": "Ethics, social responsibility, SDGs and Malaysian priorities.",
      "slides": "38"
    },
    {
      "front": "What are the three final engineering takeaways?",
      "back": "Build it right; build the right thing; think beyond the system.",
      "slides": "40–41"
    }
  ]
};

const STRUCTURED = [
  {
    "section": "Part A · Structured",
    "topic": "Ethical foundations",
    "slides": "3–5",
    "scenario": "A university AI model predicts student dropout with 92% accuracy.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ethical risks despite its technical accuracy.",
        "marks": 4,
        "items": [
          "Predicted at-risk labels may be wrong, causing false positives and stigma.",
          "The system may collect or expose sensitive personal student information."
        ],
        "model": "Two ethical risks remain even when the AI system reports high accuracy. First, false predictions may incorrectly label some students as likely to drop out, causing stigma or unfair treatment. Second, the system may collect sensitive educational or personal data, creating privacy risks. Therefore, technical performance alone does not demonstrate that deployment is responsible."
      },
      {
        "letter": "b",
        "question": "Explain THREE conditions to check before deployment.",
        "marks": 6,
        "items": [
          "Evaluate fairness and accuracy across different student groups.",
          "Provide transparency, human review and a way for students to challenge decisions.",
          "Restrict data collection and ensure the system serves a clear supportive purpose."
        ],
        "model": "Before deployment, the university should first examine whether the model treats different student groups fairly, because an overall accuracy figure can hide unequal errors. Second, it should minimise and secure the sensitive data used to make predictions. Third, it should provide transparency and a way for students to challenge or correct incorrect predictions. Deployment should proceed only when these safeguards and the expected educational benefit are justified."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Ethical foundations",
    "slides": "5–8",
    "scenario": "A new customer service app is technically feasible and lawful to operate.",
    "parts": [
      {
        "letter": "a",
        "question": "Distinguish TWO types of judgement needed beyond feasibility.",
        "marks": 4,
        "items": [
          "Professional responsibility asks whether the software meets the profession’s expectations.",
          "Ethical judgement asks whether the software is fair and responsible for affected people."
        ],
        "model": "First, professional responsibility asks whether the software meets the profession’s expectations. Second, ethical judgement asks whether the software is fair and responsible for affected people. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE questions the team should ask before building it.",
        "marks": 6,
        "items": [
          "Who will benefit from or be harmed by the service?",
          "Are any users excluded or disadvantaged by the chosen design?",
          "What foreseeable unintended consequences may occur after launch?"
        ],
        "model": "The decision must balance technical performance with its effects on people. First, who will benefit from or be harmed by the service? The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, are any users excluded or disadvantaged by the chosen design? Otherwise, people who are meant to benefit may be unable to access the service at all. Third, what foreseeable unintended consequences may occur after launch? Doing prerequisite work first avoids costly rework and makes changes easier to test. Success requires that intended users can genuinely access the service without being disadvantaged by the change."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Privacy and consent",
    "slides": "8–9",
    "scenario": "An app requests location, contacts, microphone and usage data before allowing users to sign up.",
    "parts": [
      {
        "letter": "a",
        "question": "State TWO reasons a user clicking “I Agree” may be insufficient.",
        "marks": 4,
        "items": [
          "Consent may not be fully informed if purposes are not understandable.",
          "Some permissions may be unnecessary for the app’s actual function."
        ],
        "model": "First, consent may not be fully informed if purposes are not understandable. Second, some permissions may be unnecessary for the app’s actual function. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE responsibilities engineers retain after obtaining consent.",
        "marks": 6,
        "items": [
          "Minimise collection to what is needed for the declared purpose.",
          "Protect stored and transmitted information with appropriate access controls.",
          "Clearly explain retention, use, risks and meaningful user choices."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, minimise collection to what is needed for the declared purpose. Second, protect stored and transmitted information with appropriate access controls. Only people or services with a genuine need should be allowed to perform sensitive actions. Third, clearly explain retention, use, risks and meaningful user choices. Success requires that intended users can genuinely access the service without being disadvantaged by the change."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Code of ethics",
    "slides": "10–11",
    "scenario": "A project team wants a quick checklist of software-engineering ethical responsibilities.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ACM/IEEE responsibility areas involving the public and the product.",
        "marks": 4,
        "items": [
          "Public responsibility prioritises possible harm to society and those affected.",
          "Product responsibility requires software that is fit, safe and reliable."
        ],
        "model": "First, public responsibility prioritises possible harm to society and those affected. Second, product responsibility requires software that is fit, safe and reliable. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE other ACM/IEEE areas and their purposes.",
        "marks": 6,
        "items": [
          "Judgment requires objective professional advice rather than surrendering to pressure.",
          "Management promotes realistic deadlines and quality-focused project practices.",
          "Self requires continuing competence and knowing when to seek help."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, judgment requires objective professional advice rather than surrendering to pressure. Open, accurate communication helps stakeholders make informed decisions and share responsibility. Second, management promotes realistic deadlines and quality-focused project practices. Third, self requires continuing competence and knowing when to seek help."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Client & Employer",
    "slides": "12–13",
    "scenario": "A client asks a developer to collect customer data secretly for future marketing.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO conflicting responsibilities in this scenario.",
        "marks": 4,
        "items": [
          "The engineer should serve the client or employer responsibly.",
          "This duty is limited by public interest and protection of users’ privacy."
        ],
        "model": "First, the engineer should serve the client or employer responsibly. Second, this duty is limited by public interest and protection of users’ privacy. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE appropriate responses by the engineer.",
        "marks": 6,
        "items": [
          "Clarify whether the extra data is needed for a legitimate function.",
          "Raise the privacy and transparency concerns with the client and team.",
          "Propose minimal, disclosed data collection instead of covert collection."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, clarify whether the extra data is needed for a legitimate function. Second, raise the privacy and transparency concerns with the client and team. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Third, propose minimal, disclosed data collection instead of covert collection. Consent or technical compliance does not eliminate the duty to minimise foreseeable harm."
      }
    ],
    "practiceSet": "Set 1",
    "display": "Set 1 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Product & Judgment",
    "slides": "14–15",
    "scenario": "A critical software release has passed functional tests, but a serious security weakness is found one day before launch.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ethical principles involved in the decision.",
        "marks": 4,
        "items": [
          "Product responsibility requires security and safe operation beyond passing a test suite.",
          "Professional judgment requires an independent assessment of the discovered vulnerability."
        ],
        "model": "First, product responsibility requires security and safe operation beyond passing a test suite. Second, professional judgment requires an independent assessment of the discovered vulnerability. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions the engineer should take.",
        "marks": 6,
        "items": [
          "Document and assess severity and potential impact on users.",
          "Inform decision-makers honestly and recommend delay when the risk is unacceptable.",
          "Fix and verify the weakness before approving a safe release."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, document and assess severity and potential impact on users. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, inform decision-makers honestly and recommend delay when the risk is unacceptable. Open, accurate communication helps stakeholders make informed decisions and share responsibility. Third, fix and verify the weakness before approving a safe release."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Management",
    "slides": "16",
    "scenario": "A manager orders the team to skip testing and report an unrealistic project schedule as “on track.”",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO management practices that are ethically problematic.",
        "marks": 4,
        "items": [
          "Skipping necessary testing puts safety and product quality at risk.",
          "Reporting a false project status misleads stakeholders about delivery risk."
        ],
        "model": "First, skipping necessary testing puts safety and product quality at risk. Second, reporting a false project status misleads stakeholders about delivery risk. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE responsible management responses.",
        "marks": 6,
        "items": [
          "Report progress, defects and remaining risks honestly.",
          "Negotiate feasible milestones, scope and staffing rather than hiding delays.",
          "Allocate sufficient time for essential verification and security."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, report progress, defects and remaining risks honestly. Open, accurate communication helps stakeholders make informed decisions and share responsibility. Second, negotiate feasible milestones, scope and staffing rather than hiding delays. Doing prerequisite work first avoids costly rework and makes changes easier to test. Third, allocate sufficient time for essential verification and security. Passing an initial demonstration is not enough; testing should cover the requirements and credible failure cases."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Profession & Colleagues",
    "slides": "17–18",
    "scenario": "A company claims its software is “100% secure,” while a junior developer is blamed publicly for a bug that code review also missed.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO professional responsibilities involved.",
        "marks": 4,
        "items": [
          "Profession requires avoiding misleading claims about software quality and limits.",
          "Colleagues requires fair treatment and constructive feedback to team members."
        ],
        "model": "First, profession requires avoiding misleading claims about software quality and limits. Second, colleagues requires fair treatment and constructive feedback to team members. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE actions a responsible engineer should take.",
        "marks": 6,
        "items": [
          "Challenge absolute marketing claims and accurately state known limitations.",
          "Acknowledge that review processes also contributed to the defect.",
          "Use a blameless analysis and give the junior developer constructive support."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, challenge absolute marketing claims and accurately state known limitations. Second, acknowledge that review processes also contributed to the defect. Processing near the source is particularly important where waiting for a remote response would delay action. Third, use a blameless analysis and give the junior developer constructive support."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Self and competence",
    "slides": "19",
    "scenario": "You are asked to build an AI health-diagnosis feature using unfamiliar methods under a tight deadline.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO questions about professional competence.",
        "marks": 4,
        "items": [
          "Do I have enough expertise to build and verify this safety-sensitive feature?",
          "Do I know when to ask for qualified assistance or decline the work?"
        ],
        "model": "First, do I have enough expertise to build and verify this safety-sensitive feature? Second, do I know when to ask for qualified assistance or decline the work? Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE responsible ways to proceed.",
        "marks": 6,
        "items": [
          "Disclose the skill gap and unrealistic scope to the project owner.",
          "Involve qualified domain and AI experts in design and testing.",
          "Continue learning while limiting deployment until safety and performance are validated."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, disclose the skill gap and unrealistic scope to the project owner. Second, involve qualified domain and AI experts in design and testing. Passing an initial demonstration is not enough; testing should cover the requirements and credible failure cases. Third, continue learning while limiting deployment until safety and performance are validated. A controlled introduction lets the team discover issues before they affect every user. A responsible decision should protect affected students even when the software performs well in a technical test."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "Trade-offs",
    "slides": "20–21",
    "scenario": "A business wants an automated app that is fast, convenient and highly personalised.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO ethical trade-offs the design creates.",
        "marks": 4,
        "items": [
          "Convenience can conflict with users’ privacy.",
          "Automation can reduce direct human control over significant decisions."
        ],
        "model": "First, convenience can conflict with users’ privacy. Second, automation can reduce direct human control over significant decisions. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE steps in the lecture’s ethical decision check.",
        "marks": 6,
        "items": [
          "Identify both direct and indirect stakeholders affected by the system.",
          "Ask who gains the benefits and who carries the risks.",
          "Compare safer alternatives and ensure the decision can be explained and defended."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, identify both direct and indirect stakeholders affected by the system. The assessment must account for people who carry the risk, including those who never directly use the application. Second, ask who gains the benefits and who carries the risks. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Third, compare safer alternatives and ensure the decision can be explained and defended. Success requires that intended users can genuinely access the service without being disadvantaged by the change."
      }
    ],
    "practiceSet": "Set 2",
    "display": "Set 2 · Q5"
  },
  {
    "section": "Part A · Structured",
    "topic": "Facial attendance",
    "slides": "21–22",
    "scenario": "A university proposes facial recognition to record student attendance automatically.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO likely benefits or ethical concerns.",
        "marks": 4,
        "items": [
          "Automated attendance may reduce manual administrative effort.",
          "Collection of biometric information can create privacy and exclusion concerns."
        ],
        "model": "First, automated attendance may reduce manual administrative effort. Second, collection of biometric information can create privacy and exclusion concerns. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE safeguards that should be considered.",
        "marks": 6,
        "items": [
          "Assess recognition errors and unequal effects on different students.",
          "Limit data access and retention for biometric records.",
          "Provide a usable alternative and a process for correcting false attendance results."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, assess recognition errors and unequal effects on different students. Second, limit data access and retention for biometric records. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Third, provide a usable alternative and a process for correcting false attendance results. A responsible decision should protect affected students even when the software performs well in a technical test."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q1"
  },
  {
    "section": "Part A · Structured",
    "topic": "Social responsibility",
    "slides": "23–26",
    "scenario": "A university app directly serves students but also changes staff workload and family communication.",
    "parts": [
      {
        "letter": "a",
        "question": "Distinguish TWO types of software stakeholders.",
        "marks": 4,
        "items": [
          "Direct stakeholders actively use or operate the system.",
          "Invisible or indirect stakeholders may be affected despite not using the app."
        ],
        "model": "First, direct stakeholders actively use or operate the system. Second, invisible or indirect stakeholders may be affected despite not using the app. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE levels of the software ripple effect.",
        "marks": 6,
        "items": [
          "Organisational impacts include workload and business-process changes.",
          "Community effects may influence access to education or support services.",
          "Wider social and environmental effects include equality and resource use."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, organisational impacts include workload and business-process changes. The design must keep operating at expected demand, not only under a small demonstration load. Second, community effects may influence access to education or support services. Third, wider social and environmental effects include equality and resource use. A meaningful contribution needs a clear mechanism and measurable real-world effect. A responsible decision should protect affected students even when the software performs well in a technical test."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q2"
  },
  {
    "section": "Part A · Structured",
    "topic": "Digital inclusion",
    "slides": "26–28",
    "scenario": "A government office moves every public service online and closes all in-person channels.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO groups or barriers that could limit access.",
        "marks": 4,
        "items": [
          "People with weak internet connections or unsuitable devices may be excluded.",
          "People with disabilities or low digital literacy may struggle to use the service."
        ],
        "model": "First, people with weak internet connections or unsuitable devices may be excluded. Second, people with disabilities or low digital literacy may struggle to use the service. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE improvements to make the transformation socially responsible.",
        "marks": 6,
        "items": [
          "Provide accessible, language-appropriate interfaces and usable instructions.",
          "Maintain assisted or alternative channels for people who cannot use the digital route.",
          "Test services with vulnerable users and measure access outcomes."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, provide accessible, language-appropriate interfaces and usable instructions. Otherwise, people who are meant to benefit may be unable to access the service at all. Second, maintain assisted or alternative channels for people who cannot use the digital route. Third, test services with vulnerable users and measure access outcomes. Without this safeguard, a technically functional feature could still expose the organisation and its users to harm. Success requires that intended users can genuinely access the service without being disadvantaged by the change."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q3"
  },
  {
    "section": "Part A · Structured",
    "topic": "Stakeholder mapping",
    "slides": "29–31",
    "scenario": "The university is reconsidering the AI student-risk prediction tool.",
    "parts": [
      {
        "letter": "a",
        "question": "Name TWO stakeholders and a potential concern for each.",
        "marks": 4,
        "items": [
          "Students may face unfair labelling or stigma from incorrect predictions.",
          "Lecturers may form biased expectations when shown risk scores."
        ],
        "model": "First, students may face unfair labelling or stigma from incorrect predictions. Second, lecturers may form biased expectations when shown risk scores. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE questions required by the stakeholder impact map.",
        "marks": 6,
        "items": [
          "Who benefits and who may be harmed by the tool?",
          "What could go wrong and who is accountable for correcting it?",
          "Which design or policy changes can reduce the possible negative impact?"
        ],
        "model": "The decision must balance technical performance with its effects on people. First, who benefits and who may be harmed by the tool? The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Second, what could go wrong and who is accountable for correcting it? Third, which design or policy changes can reduce the possible negative impact? Clear decision authority means the team knows who can approve a change and accept its residual risks. A responsible decision should protect affected students even when the software performs well in a technical test."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q4"
  },
  {
    "section": "Part A · Structured",
    "topic": "SDGs and Malaysia",
    "slides": "32–38",
    "scenario": "A city wants to build a smart waste collection platform with sensors and route optimisation.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify TWO SDGs the platform may support.",
        "marks": 4,
        "items": [
          "SDG 11 addresses sustainable cities and communities through improved services.",
          "SDG 12 addresses responsible consumption and production through better waste management."
        ],
        "model": "First, SDG 11 addresses sustainable cities and communities through improved services. Second, SDG 12 addresses responsible consumption and production through better waste management. Both points should be considered when judging whether the software is responsible for its affected users."
      },
      {
        "letter": "b",
        "question": "Explain THREE ways to justify the wider value of this software.",
        "marks": 6,
        "items": [
          "Show evidence that efficient routes reduce fuel use or emissions, relating to SDG 13.",
          "Explain how MySTIE connects technology with socioeconomic needs in Malaysia.",
          "Identify relevant MyDIGITAL themes such as digital services, data and inclusion."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, show evidence that efficient routes reduce fuel use or emissions, relating to SDG 13. A meaningful contribution needs a clear mechanism and measurable real-world effect. Second, explain how MySTIE connects technology with socioeconomic needs in Malaysia. Third, identify relevant MyDIGITAL themes such as digital services, data and inclusion. Otherwise, people who are meant to benefit may be unable to access the service at all. The claimed wider benefit should be supported by a clear and measurable contribution."
      }
    ],
    "practiceSet": "Set 3",
    "display": "Set 3 · Q5"
  },
  {
    "section": "Part B · Case Study",
    "topic": "AI prediction and public interest",
    "slides": "3–13, 20–31",
    "scenario": "A university plans to deploy a student dropout prediction dashboard. The model is 92% accurate but collects sensitive records and sometimes wrongly labels students. Lecturers may change how they treat flagged students.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE issues or stakeholders to include in an ethical assessment.",
        "marks": 5,
        "items": [
          "Affected students and their privacy expectations.",
          "Lecturers who may act on model scores.",
          "University management accountable for intervention policies.",
          "Students who are falsely identified as at risk.",
          "Vulnerable students who may be excluded or stigmatised."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, affected students and their privacy expectations. Second, lecturers who may act on model scores. Third, university management accountable for intervention policies. Fourth, students who are falsely identified as at risk. Fifth, vulnerable students who may be excluded or stigmatised."
      },
      {
        "letter": "b",
        "question": "Explain FIVE controls before a decision to deploy.",
        "marks": 10,
        "items": [
          "Test false-positive rates and potential bias across student groups.",
          "Restrict collection to justified, protected student data.",
          "Explain model limits and intended supportive use to staff and students.",
          "Provide human review, correction and appeal routes.",
          "Define ownership and monitor harm after deployment."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, test false-positive rates and potential bias across student groups. Second, restrict collection to justified, protected student data. Third, explain model limits and intended supportive use to staff and students. The organisation will not gain the intended benefit if people are unable or unwilling to use the new process. Fourth, provide human review, correction and appeal routes. Fifth, define ownership and monitor harm after deployment. Recorded operational evidence makes problems visible and allows the team to investigate what happened. A responsible decision should protect affected students even when the software performs well in a technical test."
      },
      {
        "letter": "c",
        "question": "Justify FIVE parts of your deployment recommendation.",
        "marks": 10,
        "items": [
          "Treat 92% accuracy as insufficient on its own.",
          "Require a documented public-interest purpose.",
          "Choose a limited, evaluated pilot instead of unrestricted rollout.",
          "Stop or redesign if harm exceeds demonstrated benefits.",
          "Review outcomes continuously with student feedback and accountability."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, treat 92% accuracy as insufficient on its own. The outcome must be checked across affected groups because an apparently accurate model can still make harmful individual decisions. Second, require a documented public-interest purpose. Third, choose a limited, evaluated pilot instead of unrestricted rollout. A controlled introduction lets the team discover issues before they affect every user. Fourth, stop or redesign if harm exceeds demonstrated benefits. The result should be demonstrated with comparable evidence, not simply asserted as a benefit. Fifth, review outcomes continuously with student feedback and accountability. Linking development to real operating conditions helps teams improve the service after each release. A responsible decision should protect affected students even when the software performs well in a technical test."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 1"
  },
  {
    "section": "Part B · Case Study",
    "topic": "Digital service and social priorities",
    "slides": "23–38",
    "scenario": "A Malaysian local authority plans to move appointment booking, welfare applications and service requests into one mobile app. Several users have limited internet access, visual impairments or low digital literacy.",
    "parts": [
      {
        "letter": "a",
        "question": "Identify FIVE categories of impact to investigate.",
        "marks": 5,
        "items": [
          "Convenience for frequent digital users.",
          "Connectivity and device barriers.",
          "Accessibility for disabled residents.",
          "Privacy of personal application data.",
          "Public trust and reliability of service delivery."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, convenience for frequent digital users. Second, connectivity and device barriers. Third, accessibility for disabled residents. Fourth, privacy of personal application data. Fifth, public trust and reliability of service delivery."
      },
      {
        "letter": "b",
        "question": "Explain FIVE measures to reduce negative impacts.",
        "marks": 10,
        "items": [
          "Use accessible navigation, clear text and assistive-technology testing.",
          "Provide multiple language and plain-language guidance.",
          "Retain assisted and alternative application channels.",
          "Apply data minimisation and strong security controls.",
          "Test with affected groups and monitor service completion rates."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, use accessible navigation, clear text and assistive-technology testing. Otherwise, people who are meant to benefit may be unable to access the service at all. Second, provide multiple language and plain-language guidance. Third, retain assisted and alternative application channels. Fourth, apply data minimisation and strong security controls. This reduces unnecessary exposure of personal information and supports more responsible use of the system. Fifth, test with affected groups and monitor service completion rates. Recorded operational evidence makes problems visible and allows the team to investigate what happened. Success requires that intended users can genuinely access the service without being disadvantaged by the change."
      },
      {
        "letter": "c",
        "question": "Connect the project to FIVE relevant societal or national considerations.",
        "marks": 10,
        "items": [
          "SDG 10 through reduced inequality in public-service access.",
          "SDG 11 through inclusive community services.",
          "MyDIGITAL through digital adoption and inclusion.",
          "MySTIE through solutions aligned with socioeconomic needs.",
          "Environmental and long-term public-service sustainability rather than digitisation alone."
        ],
        "model": "The decision must balance technical performance with its effects on people. First, SDG 10 through reduced inequality in public-service access. Second, SDG 11 through inclusive community services. Third, MyDIGITAL through digital adoption and inclusion. Fourth, MySTIE through solutions aligned with socioeconomic needs. Fifth, environmental and long-term public-service sustainability rather than digitisation alone."
      }
    ],
    "practiceSet": "Case studies",
    "display": "Case Study 2"
  }
];

const STORAGE_PREFIX='ethics_v2_';

window.initStudyLecture(DATA, STRUCTURED, STORAGE_PREFIX);



})();
