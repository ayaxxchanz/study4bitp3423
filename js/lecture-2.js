// Lecture 2: study content, practice tools, summary interactions, and navigation.
(() => {
'use strict';

// Study content
const DATA = {
  "summary": [
    {
      "title": "Technical Success vs. Ethical Risk: The Three Engineer Questions Unpacked",
      "slides": "1–6",
      "html": "<!-- The 92% Problem (Slides 3–4) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Study: The 92% Student Dropout Predictor <span class=\"slide-ref\">slides 3–4</span></div>\n          <div class=\"nb-callout coral\">\n            <strong>Scenario:</strong> A university builds an AI model predicting students at risk of dropping out. It achieves <strong>92% accuracy</strong>, works reliably, and features an impressive management dashboard—yet technical accuracy alone does not answer whether it is safe to deploy <span class=\"slide-ref\">slide 3</span>.\n          </div>\n\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <div class=\"nb-mini\"><h4><span>1. Data Exposure</span></h4><p style=\"font-size: 0.86rem;\">Collects and centralizes sensitive personal, financial, and academic student records <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>2. False Positives</span></h4><p style=\"font-size: 0.86rem;\">An 8% error rate still misclassifies real, thriving students (8 out of 100) as “at risk” <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>3. Unfair Labeling</span></h4><p style=\"font-size: 0.86rem;\">Algorithmic scores can stereotype or unfairly label vulnerable demographic cohorts <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>4. Lecturer Bias</span></h4><p style=\"font-size: 0.86rem;\">Risk flags may subconsciously alter how lecturers grade or mentor flagged students <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>5. Anxiety &amp; Stigma</span></h4><p style=\"font-size: 0.86rem;\">Being tagged as a likely dropout damages student confidence and creates social stigma <span class=\"slide-ref\">slide 4</span>.</p></div>\n            <div class=\"nb-mini\"><h4><span>6. Lack of Recourse</span></h4><p style=\"font-size: 0.86rem;\">Opaque model predictions are difficult for students to inspect or challenge <span class=\"slide-ref\">slide 4</span>.</p></div>\n          </div>\n\n          <div class=\"nb-answer-box\">\n            <span class=\"nb-answer-title\">Model Exam Answer • “Would you deploy it?”</span>\n            <p><strong>Verdict:</strong> Do <strong>not</strong> deploy as an automated decision-maker; deploy only as a human-assisted support tool after safeguards are added.</p>\n            <p><strong>Reasoning:</strong> Even at 92% accuracy, 8% of students are misclassified, risking unfair labeling, student anxiety, and lecturer confirmation bias without a clear appeal process.</p>\n            <p><strong>Engineering Action:</strong> Restrict risk flags to trained academic counselors rather than grading lecturers, explain why a student was flagged, provide an appeal channel, and minimize sensitive data retention.</p>\n          </div>\n        </div>\n\n        <!-- Three Core Questions Unpacked with Concrete Examples (Slide 5) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Software Engineer’s Three Core Questions — Explained with Examples <span class=\"slide-ref\">slide 5</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Three Software Engineering Questions\">\n              <rect x=\"12\" y=\"14\" width=\"256\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"12\" y=\"14\" width=\"256\" height=\"34\" rx=\"8\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"140\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">1. CAN WE BUILD IT?</text>\n              <text x=\"140\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Technical Feasibility</text>\n              <text x=\"140\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Available Technology</text>\n              <text x=\"140\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Time &amp; Resources</text>\n\n              <path d=\"M272 77 L296 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"296,71 306,77 296,83\" fill=\"#000\" />\n\n              <rect x=\"308\" y=\"14\" width=\"256\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"308\" y=\"14\" width=\"256\" height=\"34\" rx=\"8\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"436\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">2. SHOULD WE BUILD IT?</text>\n              <text x=\"436\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Genuine Purpose</text>\n              <text x=\"436\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Validated Need</text>\n              <text x=\"436\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Ethical Concerns</text>\n\n              <path d=\"M568 77 L592 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"592,71 602,77 592,83\" fill=\"#000\" />\n\n              <rect x=\"604\" y=\"14\" width=\"244\" height=\"126\" rx=\"10\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <rect x=\"604\" y=\"14\" width=\"244\" height=\"34\" rx=\"8\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2.5\" />\n              <text x=\"726\" y=\"36\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\">3. WHAT COULD HAPPEN?</text>\n              <text x=\"726\" y=\"68\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Intended Benefits</text>\n              <text x=\"726\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Foreseeable Risks</text>\n              <text x=\"726\" y=\"116\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\">• Unintended Effects</text>\n            </svg>\n          </div>\n\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.85rem;\">\n            <!-- Column 1: Can We Build It -->\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>1 // Can We Build It?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Technical Feasibility:</strong> Can the problem be solved reliably under real-world constraints?\n                  <div class=\"nb-example\"><em>Example:</em> Scoring credit-card fraud in &lt;50ms without blocking legitimate shoppers, or syncing a rural clinic app offline when internet drops.</div>\n                </li>\n                <li>\n                  <strong>Available Technology:</strong> Do mature, dependable tools, APIs, or hardware exist?\n                  <div class=\"nb-example\"><em>Example:</em> Choosing an audited payment gateway vs. an experimental AI that hallucinates 15% of the time, or realizing users’ older phones lack biometric sensors.</div>\n                </li>\n                <li>\n                  <strong>Time &amp; Resources:</strong> Are budget, skilled staff, and schedule sufficient to build and test safely?\n                  <div class=\"nb-example\"><em>Example:</em> A 4-person team given only 5 weeks and minimal server budget to ship an exam portal—leaving zero time for penetration testing or bias audits.</div>\n                </li>\n              </ul>\n            </div>\n\n            <!-- Column 2: Should We Build It -->\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>2 // Should We Build It?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Purpose:</strong> Does the core intent respect user autonomy and human dignity?\n                  <div class=\"nb-example\"><em>Example:</em> Employee wellness software that reminds staff to rest (supportive) vs. covertly snapping webcam photos every 3 minutes to punish remote workers (coercive).</div>\n                </li>\n                <li>\n                  <strong>Need:</strong> Does it solve a real problem rather than adding unnecessary surveillance?\n                  <div class=\"nb-example\"><em>Example:</em> Replacing a simple, privacy-safe QR attendance check-in with permanent facial-recognition cameras when roll-call speed was never a bottleneck.</div>\n                </li>\n                <li>\n                  <strong>Ethical Concerns:</strong> Does it compromise fairness, privacy, safety, or honesty?\n                  <div class=\"nb-example\"><em>Example:</em> An automated CV-screening model trained on past hiring records that systematically downgrades female or minority applicants.</div>\n                </li>\n              </ul>\n            </div>\n\n            <!-- Column 3: What Could Happen -->\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>3 // What Could Happen?</span></h4>\n              <ul class=\"nb-list\">\n                <li>\n                  <strong>Benefits:</strong> Positive, intended value delivered to users and organizations.\n                  <div class=\"nb-example\"><em>Example:</em> An early-warning dashboard helps academic advisors spot struggling students early and offer free tutoring before final exams.</div>\n                </li>\n                <li>\n                  <strong>Risks:</strong> Foreseeable harms from breaches, downtime, or model errors.\n                  <div class=\"nb-example\"><em>Example:</em> Centralizing sensitive student counseling and grade records creates a prime hacker target, while an 8% false-positive rate mislabels thriving students.</div>\n                </li>\n                <li>\n                  <strong>Unintended Effects:</strong> Second-order human behaviors triggered after deployment.\n                  <div class=\"nb-example\"><em>Example:</em> Lecturers see an “At-Risk” badge and subconsciously grade that student more strictly—turning the prediction into a self-fulfilling prophecy.</div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"nb-callout cyan\" style=\"margin-bottom: 0;\">\n            <strong>Exam Answering Format (4–6 Marks):</strong> Define the distinction clearly, explain two sub-factors, and anchor each in a concrete example.<br />\n            <em>Sample Phrasing:</em> “Technical feasibility asks whether a system can operate reliably under constraints—such as processing mobile payments within two seconds—whereas ethical justification asks whether deploying it is responsible, such as refusing to harvest unnecessary user contacts even when technically easy.”\n          </div>\n        </div>\n\n        <!-- High-Stakes Domains (Slide 6) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Why Ethics Belongs in Software Engineering <span class=\"slide-ref\">slide 6</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.65rem;\">Software systems directly govern high-consequence human infrastructure:</p>\n          <div class=\"nb-tags\">\n            <span class=\"nb-tag cyan\">Education</span>\n            <span class=\"nb-tag coral\">Healthcare</span>\n            <span class=\"nb-tag yellow\">Banking &amp; Finance</span>\n            <span class=\"nb-tag mint\">Employment</span>\n            <span class=\"nb-tag lavender\">Transportation</span>\n            <span class=\"nb-tag orange\">Public Services</span>\n            <span class=\"nb-tag cyan\">Communication</span>\n            <span class=\"nb-tag yellow\">Everyday Decisions</span>\n          </div>\n        </div>"
    },
    {
      "title": "Ethical Foundations, Consent & What Is ACM/IEEE?",
      "slides": "7–11",
      "html": "<!-- Definition & 6 Dimensions (Slide 7) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Ethics Means in Software Engineering <span class=\"slide-ref\">slide 7</span></div>\n          <p style=\"font-size: 0.94rem; margin-bottom: 0.75rem;\">\n            <strong>Ethics</strong> is concerned with principles and reasoning about what is responsible, fair, and appropriate when decisions affect others <span class=\"slide-ref\">slide 7</span>. In software engineering, ethical reasoning evaluates six core dimensions:\n          </p>\n          <div class=\"nb-tags\">\n            <span class=\"nb-tag mint\">Harm &amp; Benefit</span>\n            <span class=\"nb-tag coral\">Safety</span>\n            <span class=\"nb-tag yellow\">Fairness</span>\n            <span class=\"nb-tag cyan\">Privacy</span>\n            <span class=\"nb-tag lavender\">Honesty</span>\n            <span class=\"nb-tag orange\">Accountability</span>\n          </div>\n        </div>\n\n        <!-- Ethics != Law != Policy SVG (Slide 8) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Ethics ≠ Law ≠ Company Policy <span class=\"slide-ref\">slide 8</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 140\" aria-label=\"Legal vs Professional vs Ethical Standards\">\n              <g text-anchor=\"middle\">\n                <rect x=\"14\" y=\"18\" width=\"256\" height=\"104\" rx=\"10\" fill=\"#E4E4E7\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"142\" y=\"46\" font-size=\"13\" font-weight=\"700\">1. LEGAL</text>\n                <text x=\"142\" y=\"72\" font-size=\"13\" font-weight=\"700\">What the law permits</text>\n                <text x=\"142\" y=\"92\" font-size=\"13\" font-weight=\"700\">or requires</text>\n\n                <text x=\"292\" y=\"76\" font-size=\"20\" font-weight=\"700\">≠</text>\n\n                <rect x=\"314\" y=\"18\" width=\"256\" height=\"104\" rx=\"10\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"442\" y=\"46\" font-size=\"13\" font-weight=\"700\">2. PROFESSIONAL</text>\n                <text x=\"442\" y=\"72\" font-size=\"13\" font-weight=\"700\">What engineering codes</text>\n                <text x=\"442\" y=\"92\" font-size=\"13\" font-weight=\"700\">&amp; standards expect</text>\n\n                <text x=\"592\" y=\"76\" font-size=\"20\" font-weight=\"700\">≠</text>\n\n                <rect x=\"614\" y=\"18\" width=\"232\" height=\"104\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"730\" y=\"46\" font-size=\"13\" font-weight=\"700\">3. ETHICAL</text>\n                <text x=\"730\" y=\"72\" font-size=\"13\" font-weight=\"700\">What responsible</text>\n                <text x=\"730\" y=\"92\" font-size=\"13\" font-weight=\"700\">judgement requires</text>\n              </g>\n            </svg>\n          </div>\n          <p style=\"font-size: 0.88rem; color: var(--nb-muted);\">\n            <strong>Why the distinction matters:</strong> An action can be technically legal (e.g., hidden inside a 30-page Terms of Service) and approved by company policy, yet still fail professional and ethical standards if it deceives or harms users.\n          </p>\n        </div>\n\n        <!-- Case: \"I Agree\" (Slide 9) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case: The “I Agree” Permissions Fallacy <span class=\"slide-ref\">slide 9</span></div>\n          <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n            <p style=\"font-size: 0.9rem;\">\n              A mobile app asks for <strong>Location, Contacts, Microphone,</strong> and <strong>Usage data</strong>, and the user taps <em>“I Agree.”</em>\n            </p>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Model Exam Answer • “Does consent remove the engineer’s responsibility?”</span>\n              <p><strong>Verdict:</strong> <strong>No.</strong> User consent does not absolve software engineers of ethical responsibility.</p>\n              <p><strong>Reasoning:</strong> Users routinely click “I Agree” because privacy policies are long and unreadable or because the app refuses to function unless they accept (“forced consent”). Legal permission does not justify invasive data harvesting.</p>\n              <p><strong>Engineering Action:</strong> Apply <strong>data minimization</strong>—request only permissions strictly necessary for core functionality (e.g., a calculator or flashlight app should never request Contacts or Microphone access).</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- What is ACM/IEEE? Spotlight + 8-Area Vector Hub (Slides 10–11) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">What Is ACM/IEEE &amp; the Software Engineering Code of Ethics? <span class=\"slide-ref\">slides 10–11</span></div>\n          <div class=\"nb-callout lavender\">\n            <p style=\"margin-bottom: 0.55rem;\">\n              <strong>What are ACM and IEEE?</strong> They are the two premier international professional organizations in computing and engineering:\n            </p>\n            <ul class=\"nb-list\">\n              <li><strong>ACM (Association for Computing Machinery):</strong> The world’s largest educational and scientific computing society, advancing computing as a science and profession.</li>\n              <li><strong>IEEE (Institute of Electrical and Electronics Engineers) / IEEE Computer Society:</strong> The world’s largest technical professional organization dedicated to advancing technology, electronics, and computer engineering.</li>\n              <li><strong>Joint ACM/IEEE Software Engineering Code of Ethics and Professional Practice:</strong> A global professional standard co-developed by ACM and the IEEE Computer Society. It provides structured ethical principles across <strong>eight areas of responsibility</strong> to guide software engineers whenever technical, business, and social interests conflict—establishing that <strong>public interest always comes first</strong>.</li>\n            </ul>\n          </div>\n\n          <!-- Vector Hub of the 8 ACM/IEEE Areas -->\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 195\" aria-label=\"ACM IEEE Eight Areas of Responsibility Hub\">\n              <!-- Center Hub -->\n              <rect x=\"295\" y=\"64\" width=\"270\" height=\"66\" rx=\"12\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"3\" />\n              <text x=\"430\" y=\"92\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\">ACM / IEEE CODE</text>\n              <text x=\"430\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\">8 AREAS OF RESPONSIBILITY</text>\n\n              <!-- Top 4 Areas -->\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"24\" y=\"12\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"106\" y=\"34\">1. Public Interest</text>\n                <rect x=\"224\" y=\"12\" width=\"185\" height=\"36\" rx=\"7\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"316\" y=\"34\">2. Client &amp; Employer</text>\n                <rect x=\"444\" y=\"12\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"526\" y=\"34\">3. Product</text>\n                <rect x=\"644\" y=\"12\" width=\"192\" height=\"36\" rx=\"7\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"740\" y=\"34\">4. Judgment</text>\n\n                <!-- Bottom 4 Areas -->\n                <rect x=\"24\" y=\"146\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"106\" y=\"168\">5. Management</text>\n                <rect x=\"224\" y=\"146\" width=\"185\" height=\"36\" rx=\"7\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"316\" y=\"168\">6. Profession</text>\n                <rect x=\"444\" y=\"146\" width=\"165\" height=\"36\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"526\" y=\"168\">7. Colleagues</text>\n                <rect x=\"644\" y=\"146\" width=\"192\" height=\"36\" rx=\"7\" fill=\"#FEF9C3\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"740\" y=\"168\">8. Self (Learning)</text>\n              </g>\n\n              <!-- Spokes -->\n              <line x1=\"145\" y1=\"48\" x2=\"295\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"330\" y1=\"48\" x2=\"365\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"515\" y1=\"48\" x2=\"495\" y2=\"64\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"705\" y1=\"48\" x2=\"565\" y2=\"82\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"145\" y1=\"146\" x2=\"295\" y2=\"112\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"330\" y1=\"146\" x2=\"365\" y2=\"130\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"515\" y1=\"146\" x2=\"495\" y2=\"130\" stroke=\"#000\" stroke-width=\"2\" />\n              <line x1=\"705\" y1=\"146\" x2=\"565\" y2=\"112\" stroke=\"#000\" stroke-width=\"2\" />\n            </svg>\n          </div>\n        </div>"
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
      "html": "<!-- 5 Trade-off Pairs SVG + Concrete Table (Slide 20) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Five Core Ethical Trade-Offs Made Concrete <span class=\"slide-ref\">slide 20</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 145\" aria-label=\"Five Ethical Trade-offs in Software Engineering\">\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"12\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"90\" y=\"38\">Speed</text>\n                <text x=\"90\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"12\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"90\" y=\"114\">Safety</text>\n\n                <rect x=\"182\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"260\" y=\"38\">Cost</text>\n                <text x=\"260\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"182\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"260\" y=\"114\">Quality</text>\n\n                <rect x=\"352\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"38\">Convenience</text>\n                <text x=\"430\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"352\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"430\" y=\"114\">Privacy</text>\n\n                <rect x=\"522\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"600\" y=\"38\">Personalisation</text>\n                <text x=\"600\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"522\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"600\" y=\"114\">Data Collection</text>\n\n                <rect x=\"692\" y=\"14\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"770\" y=\"38\">Automation</text>\n                <text x=\"770\" y=\"75\" font-size=\"12\">↕ VS ↕</text>\n                <rect x=\"692\" y=\"90\" width=\"156\" height=\"40\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"770\" y=\"114\">Human Control</text>\n              </g>\n            </svg>\n          </div>\n\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Trade-Off Pair</th>\n                  <th>Concrete Software Situation</th>\n                  <th>Balanced Engineering Mitigation</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Speed vs. Safety</strong></td>\n                  <td>Pushing a rapid hotfix to a hospital booking app without regression tests to hit a Friday deadline.</td>\n                  <td>Automate core safety &amp; security test suites in CI/CD so fast releases still pass mandatory checks.</td>\n                </tr>\n                <tr>\n                  <td><strong>Cost vs. Quality</strong></td>\n                  <td>Picking an unencrypted database tier to trim startup cloud bills while storing user IC and health records.</td>\n                  <td>Prioritize encryption-at-rest and role-based access in the MVP budget while deferring cosmetic UI polish.</td>\n                </tr>\n                <tr>\n                  <td><strong>Convenience vs. Privacy</strong></td>\n                  <td>Auto-uploading a user’s entire phone contact book so they can “find friends in one tap.”</td>\n                  <td>Offer manual username search or hash contact identifiers locally on-device rather than uploading raw contacts.</td>\n                </tr>\n                <tr>\n                  <td><strong>Personalisation vs. Data Collection</strong></td>\n                  <td>Tracking every click, search, and GPS ping 24/7 to serve hyper-targeted shopping recommendations.</td>\n                  <td>Use anonymized session-level preferences and let users inspect, pause, or wipe their profile data.</td>\n                </tr>\n                <tr>\n                  <td><strong>Automation vs. Human Control</strong></td>\n                  <td>Letting an AI loan-approval or grading model issue automatic rejections with zero human review.</td>\n                  <td>Keep a <strong>human-in-the-loop</strong> for borderline or negative outcomes and provide clear explanations.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n        <!-- 7-Step Checklist (Slide 21) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Seven-Question Pre-Deployment Ethical Check <span class=\"slide-ref\">slide 21</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\"><h4><span>01 // Reach</span></h4><p style=\"font-size: 0.85rem;\">Who could be affected (users &amp; non-users)?</p></div>\n            <div class=\"nb-mini\"><h4><span>02 // Failure</span></h4><p style=\"font-size: 0.85rem;\">What could go wrong if misused or breached?</p></div>\n            <div class=\"nb-mini\"><h4><span>03 // Value</span></h4><p style=\"font-size: 0.85rem;\">Who actually benefits from this feature?</p></div>\n            <div class=\"nb-mini\"><h4><span>04 // Exposure</span></h4><p style=\"font-size: 0.85rem;\">Who carries the risk when errors happen?</p></div>\n            <div class=\"nb-mini\"><h4><span>05 // Transparency</span></h4><p style=\"font-size: 0.85rem;\">Do users genuinely understand what happens to their data?</p></div>\n            <div class=\"nb-mini\"><h4><span>06 // Alternatives</span></h4><p style=\"font-size: 0.85rem;\">Is there a safer, less invasive way to solve the problem?</p></div>\n            <div class=\"nb-mini\" style=\"grid-column: span 2; background: #fef9c3;\"><h4><span>07 // Accountability &amp; Defensibility</span></h4><p style=\"font-size: 0.85rem;\">Can the engineering team openly explain and defend this design decision to the public?</p></div>\n          </div>\n        </div>\n\n        <!-- Applied Mini Case: Facial Attendance (Slide 22) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Applied Case Analysis: Facial Recognition Attendance <span class=\"slide-ref\">slide 22</span></div>\n          <div class=\"nb-mini\" style=\"background: #f8fafc;\">\n            <p style=\"font-size: 0.9rem;\"><strong>Prompt:</strong> A university plans to use facial recognition cameras to record lecture attendance automatically.</p>\n            <div class=\"nb-answer-box\">\n              <span class=\"nb-answer-title\">Model Exam Answer • 4-Point Breakdown</span>\n              <p><strong>1. Benefit:</strong> Automates classroom roll-call speed and eliminates manual attendance sheets.</p>\n              <p><strong>2. Affected Stakeholders:</strong> Students, lecturers, university IT administrators, and classroom visitors.</p>\n              <p><strong>3. Ethical Concern:</strong> Biometric leaks are irreversible (unlike a password, you cannot change your face), and cameras may show accuracy bias across skin tones or lighting.</p>\n              <p><strong>4. Key Engineer Question:</strong> <em>“How are facial templates encrypted and purged after graduation, and is a non-biometric check-in option available for students who opt out?”</em></p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Social Responsibility, Ripple Effects & Stakeholder Mapping",
      "slides": "23–31",
      "html": "<!-- Ethics vs Social Responsibility (Slide 23) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-callout lavender\" style=\"margin-bottom: 0;\">\n              <strong>ETHICS asks <span class=\"slide-ref\">slide 23</span>:</strong><br />\n              <em>“What is the responsible thing to do?”</em> — Focuses on professional duties, integrity, and moral boundaries.\n            </div>\n            <div class=\"nb-callout cyan\" style=\"margin-bottom: 0;\">\n              <strong>SOCIAL RESPONSIBILITY asks <span class=\"slide-ref\">slide 23</span>:</strong><br />\n              <em>“What impact does our software have on people, communities, and society?”</em> — Focuses on collective, systemic outcomes.\n            </div>\n          </div>\n        </div>\n\n        <!-- Ripple Effect & Stakeholder Tiers SVG (Slides 24–25) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">The Ripple Effect &amp; Stakeholder Impact Tiers <span class=\"slide-ref\">slides 24–25</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 165\" aria-label=\"Ripple Effect of Software Solutions\">\n              <text x=\"14\" y=\"24\" font-size=\"11.5\" font-weight=\"700\">6-STAGE RIPPLE EFFECT PROPAGATION (SLIDE 24)</text>\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"34\" width=\"122\" height=\"42\" rx=\"6\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"75\" y=\"59\">Software Solution</text>\n                <text x=\"146\" y=\"59\">→</text>\n                <rect x=\"156\" y=\"34\" width=\"118\" height=\"42\" rx=\"6\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"215\" y=\"59\">Direct Users</text>\n                <text x=\"284\" y=\"59\">→</text>\n                <rect x=\"294\" y=\"34\" width=\"118\" height=\"42\" rx=\"6\" fill=\"#7DD3FC\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"353\" y=\"59\">Organisation</text>\n                <text x=\"422\" y=\"59\">→</text>\n                <rect x=\"432\" y=\"34\" width=\"134\" height=\"42\" rx=\"6\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"499\" y=\"59\">Other Stakeholders</text>\n                <text x=\"576\" y=\"59\">→</text>\n                <rect x=\"586\" y=\"34\" width=\"114\" height=\"42\" rx=\"6\" fill=\"#FDBA74\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"643\" y=\"59\">Community</text>\n                <text x=\"710\" y=\"59\">→</text>\n                <rect x=\"720\" y=\"34\" width=\"128\" height=\"42\" rx=\"6\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"784\" y=\"52\">Society &amp;</text><text x=\"784\" y=\"67\">Environment</text>\n              </g>\n\n              <text x=\"14\" y=\"104\" font-size=\"11.5\" font-weight=\"700\">STAKEHOLDER IMPACT TIERS (SLIDE 25)</text>\n              <g font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"109\" y=\"137\">Software (Solution)</text>\n                <text x=\"218\" y=\"137\">→</text>\n                <rect x=\"232\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#DCFCE7\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"327\" y=\"137\">Users (Direct Impact)</text>\n                <text x=\"436\" y=\"137\">→</text>\n                <rect x=\"450\" y=\"114\" width=\"190\" height=\"38\" rx=\"6\" fill=\"#FEF9C3\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"545\" y=\"137\">Others (Indirect Impact)</text>\n                <text x=\"654\" y=\"137\">→</text>\n                <rect x=\"668\" y=\"114\" width=\"180\" height=\"38\" rx=\"6\" fill=\"#FFE4E6\" stroke=\"#000\" stroke-width=\"2\" /><text x=\"758\" y=\"137\">Society (Wider Impact)</text>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Invisible Stakeholders & Digital Exclusion Case (Slides 26–28) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Invisible Stakeholders &amp; Digital Exclusion <span class=\"slide-ref\">slides 26–28</span></div>\n          <p style=\"font-size: 0.9rem; margin-bottom: 0.6rem;\">\n            <strong>Invisible Stakeholders <span class=\"slide-ref\">slide 26</span>:</strong> Groups affected by a system even though they never touch its screen (e.g., delivery riders’ families affected by algorithmic shift quotas, or neighborhood residents affected by navigation apps routing highway traffic onto quiet residential streets):\n          </p>\n          <div class=\"nb-tags\" style=\"margin-bottom: 1rem;\">\n            <span class=\"nb-tag\">Family Members</span>\n            <span class=\"nb-tag\">Employees</span>\n            <span class=\"nb-tag\">Non-Users</span>\n            <span class=\"nb-tag coral\">Vulnerable Groups</span>\n            <span class=\"nb-tag\">Communities</span>\n            <span class=\"nb-tag\">Future Users</span>\n            <span class=\"nb-tag mint\">The Environment</span>\n          </div>\n\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span>Case: 100% Digital Government Service</span> <span class=\"slide-ref\">slide 27</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">Moving a public service strictly online delivers faster processing, but creates <strong>five exclusion barriers</strong>:</p>\n              <ul class=\"nb-list\">\n                <li>Poor rural internet connectivity</li>\n                <li>Low digital literacy (e.g., elderly citizens)</li>\n                <li>Disability &amp; screen-reader accessibility barriers</li>\n                <li>Lack of suitable smartphones or computers</li>\n                <li>Language and complex UI usability barriers</li>\n              </ul>\n              <div class=\"nb-answer-box\">\n                <span class=\"nb-answer-title\">Model Answer • “Is digital automatically progress?”</span>\n                <p><strong>No.</strong> Eliminating offline options excludes vulnerable citizens. True progress requires accessible, multilingual design plus physical counter or phone-assisted alternatives.</p>\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Seven Pathways to Positive Social Impact</span> <span class=\"slide-ref\">slide 28</span></h4>\n              <ul class=\"nb-list\">\n                <li><strong>Accessibility:</strong> Screen-reader &amp; voice-assisted public apps</li>\n                <li><strong>Healthcare:</strong> Telemedicine &amp; early diagnostic triage</li>\n                <li><strong>Education:</strong> Open, low-bandwidth learning platforms</li>\n                <li><strong>Disaster Response:</strong> Real-time flood alerts &amp; shelter routing</li>\n                <li><strong>Resource Efficiency:</strong> Smart grid &amp; water-leak monitoring</li>\n                <li><strong>Financial Inclusion:</strong> Micro-loans &amp; digital wallets for unbanked users</li>\n                <li><strong>Community Services:</strong> Civic issue reporting &amp; local aid matching</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Stakeholder Impact Map & Worked Matrix (Slides 29–31) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Stakeholder Impact Map &amp; Worked Matrix <span class=\"slide-ref\">slides 29–31</span></div>\n          <div class=\"nb-callout yellow\">\n            <strong>5-Step Stakeholder Impact Flow <span class=\"slide-ref\">slides 29, 31</span>:</strong>\n            1. Who benefits? → 2. Who may be harmed? → 3. What could go wrong? → 4. Who is accountable? → 5. How can negative impact be reduced?\n          </div>\n\n          <div class=\"nb-table-wrap\">\n            <table class=\"nb-table\">\n              <thead>\n                <tr>\n                  <th>Stakeholder <span class=\"slide-ref\">slide 30</span></th>\n                  <th>Potential Benefit</th>\n                  <th>Ethical / Social Concern</th>\n                  <th>Engineering &amp; Governance Responsibility</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Students</strong></td>\n                  <td>Early academic tutoring and timely counseling support</td>\n                  <td>False-positive stigma, anxiety, loss of privacy</td>\n                  <td>Provide clear explanations, human appeal channels, and strict data minimization</td>\n                </tr>\n                <tr>\n                  <td><strong>Lecturers</strong></td>\n                  <td>Actionable visibility into struggling cohorts</td>\n                  <td>Confirmation bias lowering expectations for flagged students</td>\n                  <td>Train staff to treat flags as supportive prompts rather than fixed labels</td>\n                </tr>\n                <tr>\n                  <td><strong>University Management</strong></td>\n                  <td>Higher retention rates and targeted resource allocation</td>\n                  <td>Blind over-reliance on opaque 92% accuracy metrics</td>\n                  <td>Audit model fairness across cohorts and mandate human-in-the-loop review</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>"
    },
    {
      "title": "UN Sustainable Development Goals (SDGs) & Mechanism Proof",
      "slides": "32–34",
      "html": "<!-- Key SDGs (Slide 32) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Software-Relevant UN SDGs (2030 Agenda — 17 Global Goals) <span class=\"slide-ref\">slide 32</span></div>\n          <div class=\"nb-grid-4\">\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\"><h4><span>SDG 3</span></h4><p style=\"font-size: 0.85rem;\">Good Health &amp; Well-being (e.g., remote triage apps)</p></div>\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\"><h4><span>SDG 4</span></h4><p style=\"font-size: 0.85rem;\">Quality Education (e.g., adaptive open learning hubs)</p></div>\n            <div class=\"nb-mini\" style=\"background: #ffedd5;\"><h4><span>SDG 9</span></h4><p style=\"font-size: 0.85rem;\">Industry, Innovation &amp; Infrastructure</p></div>\n            <div class=\"nb-mini\" style=\"background: #fce7f3;\"><h4><span>SDG 10</span></h4><p style=\"font-size: 0.85rem;\">Reduced Inequalities (e.g., accessible assistive tech)</p></div>\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\"><h4><span>SDG 11</span></h4><p style=\"font-size: 0.85rem;\">Sustainable Cities &amp; Communities</p></div>\n            <div class=\"nb-mini\" style=\"background: #fef3c7;\"><h4><span>SDG 12</span></h4><p style=\"font-size: 0.85rem;\">Responsible Consumption &amp; Production</p></div>\n            <div class=\"nb-mini\" style=\"background: #d1fae5; grid-column: span 2;\"><h4><span>SDG 13</span></h4><p style=\"font-size: 0.85rem;\">Climate Action (emission reduction &amp; environmental resilience)</p></div>\n          </div>\n        </div>\n\n        <!-- Case: Smart Waste Management & Mechanism Diagram (Slides 33–34) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Case Study: Smart Waste Management &amp; Causal Mechanism <span class=\"slide-ref\">slides 33–34</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 155\" aria-label=\"Smart Waste Management SDG Mechanism\">\n              <g font-size=\"11.5\" font-weight=\"700\" text-anchor=\"middle\">\n                <rect x=\"14\" y=\"16\" width=\"240\" height=\"122\" rx=\"10\" fill=\"#E0F2FE\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"134\" y=\"38\" font-size=\"11.5\">1. SOFTWARE / IOT INPUTS</text>\n                <text x=\"134\" y=\"62\">• IoT Bin Capacity Sensors</text>\n                <text x=\"134\" y=\"82\">• Demand Prediction AI</text>\n                <text x=\"134\" y=\"102\">• Recycling Guidance App</text>\n                <text x=\"134\" y=\"122\">• Waste Pattern Analytics</text>\n\n                <path d=\"M258 77 L292 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"292,71 304,77 292,83\" fill=\"#000\" />\n\n                <rect x=\"306\" y=\"16\" width=\"248\" height=\"122\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"430\" y=\"38\" font-size=\"11.5\">2. OPERATIONAL MECHANISM</text>\n                <text x=\"430\" y=\"66\">• Optimised collection routes</text>\n                <text x=\"430\" y=\"88\">• Prevents overflowing bins</text>\n                <text x=\"430\" y=\"110\">• Cuts unnecessary truck trips</text>\n\n                <path d=\"M558 77 L592 77\" stroke=\"#000\" stroke-width=\"3\" /><polygon points=\"592,71 604,77 592,83\" fill=\"#000\" />\n\n                <rect x=\"606\" y=\"16\" width=\"240\" height=\"122\" rx=\"10\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"726\" y=\"38\" font-size=\"11.5\">3. MEASURABLE SDG OUTCOME</text>\n                <text x=\"726\" y=\"66\">• SDG 11: Cleaner urban areas</text>\n                <text x=\"726\" y=\"88\">• SDG 12: Higher recycling rates</text>\n                <text x=\"726\" y=\"110\">• SDG 13: Lower fuel emissions</text>\n              </g>\n            </svg>\n          </div>\n\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #ffe4e6;\">\n              <h4><span><svg class=\"lucide lucide-x summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg> Weak Exam Answer (Name-Dropping)</span></h4>\n              <p style=\"font-size: 0.87rem;\">“This IoT smart bin project supports SDG 11, SDG 12, and SDG 13 because it helps the environment and cities.”</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span><svg class=\"lucide lucide-check summary-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m9 12 2 2 4-4\"/></svg> Full-Mark Exam Answer (Mechanism Proof)</span> <span class=\"slide-ref\">slide 34</span></h4>\n              <p style=\"font-size: 0.87rem;\">“IoT fill-level sensors and route optimization prevent overflowing street bins (<strong>SDG 11</strong>), app-based sorting guides increase household recycling (<strong>SDG 12</strong>), and eliminating half-empty truck runs directly cuts fuel burn and CO₂ emissions (<strong>SDG 13</strong>).”</p>\n            </div>\n          </div>\n        </div>"
    },
    {
      "title": "Malaysian Frameworks (With Applied Examples) & Exam Answer Formulas",
      "slides": "35–43",
      "html": "<!-- 3 Malaysian Frameworks with Concrete Examples (Slides 35–37) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Aligning Software with Malaysia’s National Priorities <span class=\"slide-ref\">slides 35–37</span></div>\n          <div class=\"nb-grid-3\">\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>10-10 MySTIE Framework</span> <span class=\"slide-ref\">slide 35</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">\n                Bridges <strong>10 Science &amp; Technology drivers</strong> with <strong>10 Socioeconomic drivers</strong> (Academy of Sciences Malaysia) to connect R&amp;D with national needs.\n              </p>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> Pairing <strong>AI Computer Vision</strong> (tech driver) with <strong>Smart Agriculture</strong> (socioeconomic driver) in a mobile leaf-disease scanner that helps Malaysian smallholder farmers cut pesticide waste and protect crop yields.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>MyDIGITAL Blueprint</span> <span class=\"slide-ref\">slide 36</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">Malaysia Digital Economy Blueprint spans <strong>7 core themes</strong>:</p>\n              <div class=\"nb-tags\" style=\"margin-bottom: 0.5rem;\">\n                <span class=\"nb-tag\">Digital Services</span>\n                <span class=\"nb-tag\">Digital Talent</span>\n                <span class=\"nb-tag\">Digital Adoption</span>\n                <span class=\"nb-tag\">Inclusion</span>\n                <span class=\"nb-tag\">Data</span>\n                <span class=\"nb-tag\">Cybersecurity</span>\n                <span class=\"nb-tag\">Innovation</span>\n              </div>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> A lightweight Bahasa Melayu/English bookkeeping app advances <strong>Digital Adoption</strong> and <strong>Inclusion</strong> by helping rural micro-vendors digitize cash flow and qualify for micro-financing.\n              </div>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #fef9c3;\">\n              <h4><span>Industry4WRD</span> <span class=\"slide-ref\">slide 37</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\">National Policy on Industry 4.0 (MITI Malaysia) driving smart manufacturing, automation, and digital industrial competitiveness.</p>\n              <div class=\"nb-example\">\n                <em>Applied Example:</em> IoT predictive-maintenance software on factory assembly lines reduces unplanned downtime for Malaysian manufacturing SMEs while alerting technicians to worn machinery before workplace accidents occur.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Four Perspectives SVG (Slide 38) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Four Perspectives — Evaluating One Software Solution <span class=\"slide-ref\">slide 38</span></div>\n          <div class=\"nb-diagram\">\n            <svg viewBox=\"0 0 860 150\" aria-label=\"Four Perspectives for Evaluating One Software Solution\">\n              <g text-anchor=\"middle\">\n                <rect x=\"14\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#B8B8FF\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"112\" y=\"42\" font-size=\"12\" font-weight=\"700\">1. ETHICS</text>\n                <text x=\"112\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">Is it responsible?</text>\n                <text x=\"112\" y=\"98\" font-size=\"11.5\">(Fair, safe, honest)</text>\n\n                <rect x=\"226\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#FDA4AF\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"324\" y=\"42\" font-size=\"12\" font-weight=\"700\">2. SOCIAL IMPACT</text>\n                <text x=\"324\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">Who is affected?</text>\n                <text x=\"324\" y=\"98\" font-size=\"11.5\">(Users &amp; non-users)</text>\n\n                <rect x=\"438\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#86EFAC\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"536\" y=\"42\" font-size=\"12\" font-weight=\"700\">3. GLOBAL SDGs</text>\n                <text x=\"536\" y=\"74\" font-size=\"13.5\" font-weight=\"700\">What societal problem</text>\n                <text x=\"536\" y=\"94\" font-size=\"13.5\" font-weight=\"700\">does it address?</text>\n\n                <rect x=\"650\" y=\"14\" width=\"196\" height=\"122\" rx=\"10\" fill=\"#FDE047\" stroke=\"#000\" stroke-width=\"2.5\" />\n                <text x=\"748\" y=\"42\" font-size=\"11\" font-weight=\"700\">4. NATIONAL PRIORITIES</text>\n                <text x=\"748\" y=\"70\" font-size=\"12.5\" font-weight=\"700\">How does it fit MySTIE,</text>\n                <text x=\"748\" y=\"90\" font-size=\"12.5\" font-weight=\"700\">MyDIGITAL &amp;</text>\n                <text x=\"748\" y=\"110\" font-size=\"12.5\" font-weight=\"700\">Industry4WRD?</text>\n              </g>\n            </svg>\n          </div>\n        </div>\n\n        <!-- Plug-and-Play Structured Exam Formulas -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Plug-and-Play Structured Exam Formulas</div>\n          <div class=\"nb-grid-2\">\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>Formula A // 4-Mark Short Questions</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Explain two ethical concerns / principles...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>Point 1 (2 marks):</strong> Name principle/concern + explain <em>why</em> it matters in the scenario + state concrete harm/impact.</li>\n                <li><strong>Point 2 (2 marks):</strong> Name a distinct second principle/concern + explain <em>why</em> it matters + state concrete harm/impact.</li>\n              </ul>\n            </div>\n\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>Formula B // 6–10 Mark Case Studies</span></h4>\n              <p style=\"font-size: 0.86rem; margin-bottom: 0.45rem;\"><em>Prompt style: “Discuss / Justify whether to deploy...”</em></p>\n              <ul class=\"nb-list\">\n                <li><strong>1. Stakeholder:</strong> Identify direct users &amp; invisible non-users affected.</li>\n                <li><strong>2. Benefit vs. Harm:</strong> Pair intended gain with specific risk/unintended effect.</li>\n                <li><strong>3. ACM/IEEE Principle:</strong> Anchor reasoning in a code area (e.g., <em>Public Interest</em> or <em>Product</em>).</li>\n                <li><strong>4. Mitigation &amp; Verdict:</strong> Propose a technical safeguard + state clear deployment decision.</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <!-- Final Synthesis & Three Takeaways (Slides 39–43) -->\n        <div class=\"nb-block\">\n          <div class=\"nb-subhead\">Deployment Gate, Three Pillars &amp; Official References <span class=\"slide-ref\">slides 39–43</span></div>\n          <div class=\"nb-grid-3\" style=\"margin-bottom: 0.9rem;\">\n            <div class=\"nb-mini\" style=\"background: #eeeeff;\">\n              <h4><span>1 // Build It Right</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Ensure technical quality, safety, security, and operational reliability.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #dcfce7;\">\n              <h4><span>2 // Build the Right Thing</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Understand users, stakeholders, genuine purpose, and human consequences.</p>\n            </div>\n            <div class=\"nb-mini\" style=\"background: #e0f2fe;\">\n              <h4><span>3 // Think Beyond the System</span> <span class=\"slide-ref\">slides 40–41</span></h4>\n              <p style=\"font-size: 0.88rem;\">Account for societal impact, environmental sustainability, and wider national/global context.</p>\n            </div>\n          </div>\n\n          <div class=\"nb-callout mint\" style=\"margin-bottom: 0;\">\n            <strong>Core Principle &amp; Reference Standards <span class=\"slide-ref\">slides 42–43</span>:</strong> A software system can succeed technically while still causing social harm; software engineers bear a continuous duty to anticipate, mitigate, and govern those effects. Key standards: <em>ACM Code of Ethics and Professional Conduct, ACM/IEEE Software Engineering Code of Ethics and Professional Practice, UN SDGs, ASM 10-10 MySTIE Framework, Malaysia Digital Economy Blueprint (MyDIGITAL),</em> and <em>MITI Industry4WRD</em>.\n          </div>\n        </div>"
    }
  ],
  "essays": [
    {
      "topic": "Foundations",
      "kind": "Analyse",
      "marks": 10,
      "slides": "3–5",
      "question": "A university AI predicts at-risk students with 92% accuracy. Analyse why technical accuracy alone is insufficient to justify deployment.",
      "points": [
        "Separate technical performance from ethical acceptability",
        "Sensitive data and privacy",
        "False positives, stigmatisation and lecturer treatment",
        "Fairness and right to challenge results",
        "Conditional deployment with safeguards"
      ],
      "answer": "A system achieving 92% accuracy may be technically promising, but its overall accuracy does not prove that its decisions are fair, harmless or appropriate for real students. The university must evaluate what happens when the system produces incorrect predictions and how those predictions influence the people who receive them.\n\nFor example, a false positive could wrongly label a student as likely to drop out. If a lecturer sees that label, it may change how the student is treated, even though the student is performing well. The student could also experience anxiety or stigma. Because the model may use sensitive student information, privacy and responsible data collection are essential. Students should understand how results are used and have a meaningful way to question incorrect classifications.\n\nTherefore, I would not deploy the system solely on the basis of accuracy. I would require checks for fairness, privacy, harmful consequences and accountability, followed by safeguards and human review before responsible deployment."
    },
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 8,
      "slides": "1, 5–6",
      "question": "Distinguish “Can we build it?”, “Should we build it?” and “What could happen?” using a software engineering example.",
      "points": [
        "Feasibility, technology and resources",
        "Purpose, need and ethical appropriateness",
        "Benefits, risks and unintended consequences",
        "One integrated example"
      ],
      "answer": "“Can we build it?” concerns technical feasibility: whether the available technology, resources and expertise are sufficient to create a system. “Should we build it?” considers whether the solution serves a justified purpose and whether its ethical concerns are acceptable. “What could happen?” considers its positive outcomes, risks and unintended effects after implementation.\n\nConsider a facial-recognition attendance application. Engineers may be capable of developing an accurate recognition model and integrating it with a university database. That establishes only that the system can be built. They must then decide whether capturing students’ facial data is necessary for attendance, especially when other methods may work. They must also evaluate what happens if a student is misidentified, excluded or uncomfortable with biometric monitoring.\n\nThe three questions should be answered together because successful implementation does not automatically mean the system should be deployed."
    },
    {
      "topic": "Foundations",
      "kind": "Explain",
      "marks": 10,
      "slides": "6–7",
      "question": "Define ethics in software engineering and explain six considerations that ethical reasoning should include.",
      "points": [
        "Definition of ethics",
        "Harm and benefit",
        "Fairness",
        "Privacy and safety",
        "Honesty and accountability"
      ],
      "answer": "Ethics in software engineering is the use of principles and reasoned judgement to determine what is responsible, fair and appropriate when software decisions affect others. It requires looking beyond whether the software meets technical specifications.\n\nFirst, engineers evaluate harm and benefit to understand who gains from a system and who might suffer negative outcomes. Second, fairness requires them to consider whether certain users or groups are treated unequally. Third, privacy concerns whether personal information is collected and handled responsibly. Fourth, safety requires attention to potential harm caused by failures or misuse. Fifth, honesty means communicating the system’s capabilities, limitations and known risks truthfully. Sixth, accountability means identifying who is responsible for decisions, failures and corrective action.\n\nTaken together, these principles help engineers make defensible decisions throughout software design, development and deployment, especially where users or the wider public could be harmed."
    },
    {
      "topic": "Foundations",
      "kind": "Compare",
      "marks": 10,
      "slides": "8–9",
      "question": "Explain how legal requirements, professional obligations and ethical judgement differ. Apply your answer to an app that collects excessive user data.",
      "points": [
        "Legal means permitted or required by law",
        "Professional means expected conduct in software engineering",
        "Ethical means responsible judgement beyond minimum compliance",
        "Apply all three",
        "Give a defensible action"
      ],
      "answer": "Legal requirements describe what relevant laws permit or require. Professional obligations describe what responsible members of software engineering are expected to do, such as protecting the public interest and acting competently. Ethical judgement asks whether the decision is fair and responsible even when the law or workplace policy does not prohibit it.\n\nSuppose a mobile application asks for microphone, location and contact access despite needing only basic user details. The team may argue that the user has accepted the permissions or that the company allows this practice. However, consent and internal authorisation do not automatically make excessive collection ethically justified. The engineer should ask whether each permission serves the product’s real purpose and whether collecting third-party contacts affects people who have never agreed to use the app.\n\nThe responsible approach is to challenge unnecessary collection, communicate the concern and recommend collecting only the information the application genuinely needs."
    },
    {
      "topic": "Foundations",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "9",
      "question": "A mobile app requests access to location, contacts, microphone and usage data. The user clicks “I Agree.” Evaluate whether the engineer’s ethical responsibility ends there.",
      "points": [
        "Clearly state that consent is not the end of responsibility",
        "Necessity and proportionality of collection",
        "Clarity and user understanding",
        "Possible impact on non-users and privacy",
        "Practical improvement"
      ],
      "answer": "The engineer’s responsibility does not end when the user clicks “I Agree.” The lecture asks this question because a technical record of consent is not the same as an ethical justification for collecting information. The engineer must still consider the purpose of each permission, whether the request is understandable and which people may be affected.\n\nFor example, an app may legitimately need location to provide nearby services but have no clear reason to collect the user’s contacts or use the microphone. Contact collection can also affect people who are not app users. If data is gathered beyond the product’s purpose, users may lose privacy while receiving little additional benefit.\n\nTherefore, the team should examine whether each permission is essential and communicate clearly how any necessary information will be used. In practical design, unnecessary permissions should be removed and users should have meaningful control wherever possible. Responsible design requires more than obtaining agreement."
    },
    {
      "topic": "Professional code",
      "kind": "Explain",
      "marks": 12,
      "slides": "10–11",
      "question": "Describe all eight areas of responsibility in the ACM/IEEE Software Engineering Code of Ethics and explain why the code matters.",
      "points": [
        "Public; Client & Employer; Product; Judgment",
        "Management; Profession; Colleagues; Self",
        "Brief explanation of each area",
        "Purpose when business and social interests conflict"
      ],
      "answer": "The ACM/IEEE Software Engineering Code of Ethics and Professional Practice provides guidance when technical, business and social interests conflict. It identifies eight areas of responsibility.\n\nThe Public area requires engineers to consider possible harm to society. Client & Employer concerns serving those parties responsibly while remaining consistent with the public interest. Product means delivering software that is fit for purpose, safe and reliable. Judgment requires independent and objective professional decisions. Management concerns realistic schedules, fair work practices, honest reporting and adequate quality resources. Profession asks engineers to uphold the integrity and reputation of software engineering. Colleagues means offering fair treatment, appropriate credit and constructive support to fellow professionals. Self requires lifelong learning and an awareness of personal competence.\n\nThese principles matter because software work is not only a business or programming activity. An engineer may face pressure to release defective software or collect unnecessary data. The code gives a professional basis for recognising the conflict and defending a more responsible decision."
    },
    {
      "topic": "Professional code",
      "kind": "Analyse",
      "marks": 10,
      "slides": "12–13",
      "question": "A client instructs an engineer to collect extra personal data secretly for future marketing. Discuss the conflict between public interest and responsibility to the client/employer.",
      "points": [
        "State client/employer duties and public-interest limit",
        "Identify the privacy concern",
        "Explain why quiet collection is inappropriate",
        "Propose honest discussion and alternative",
        "Explain the effect on trust"
      ],
      "answer": "Software engineers should act in the best interests of their clients and employers, but the lecture explicitly states that this responsibility must remain consistent with the public interest. Therefore, a request from a paying client is not automatically acceptable.\n\nIn this case, secretly collecting personal data for possible future marketing creates an ethical conflict. Users could be exposed to privacy risks without understanding why the information was gathered. The collection is also beyond what the application needs, making its necessity difficult to defend. The engineer has a responsibility to be honest and to consider whether non-users or other stakeholders could also be affected.\n\nI would raise the issue with the client, explain the risks to users and organisational trust, and recommend limiting collection to data required for the current service. If the business later develops a genuine additional purpose, its data practices should be reviewed transparently. Protecting public interest supports responsible client service rather than contradicting it."
    },
    {
      "topic": "Professional code",
      "kind": "Explain",
      "marks": 10,
      "slides": "14",
      "question": "Explain why “the software passed testing” is not enough to meet product responsibility.",
      "points": [
        "Fit for purpose",
        "Known limitations",
        "Safety and security",
        "Intended use context",
        "Error recovery"
      ],
      "answer": "Passing a test suite is useful evidence that certain expected behaviours work, but it does not prove that the entire product is responsible. Under the ACM/IEEE Product area, engineers should evaluate whether the system is fit for purpose and whether important limitations are understood.\n\nFor example, a system may pass ordinary functional tests but still behave dangerously when users enter unexpected information or when it is deployed outside its intended context. It may also create security risks or leave users unable to recover from an incorrect action. These issues matter because the real consequences of failure may extend beyond what developers initially tested.\n\nResponsible product thinking therefore includes reviewing safety and security, considering how the system will actually be used, explaining known limitations and ensuring that errors can be corrected where appropriate. Testing is part of professional product responsibility, but not its conclusion."
    },
    {
      "topic": "Professional code",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "15",
      "question": "A serious security vulnerability is found one day before release. Management says, “Launch now. We will fix it later.” What should the engineer do?",
      "points": [
        "Identify relevant judgment and public/product duties",
        "Assess severity and potential harm",
        "Communicate honestly and document",
        "Recommend remediation, mitigation or postponement",
        "Justify priority over commercial pressure"
      ],
      "answer": "The engineer should apply objective professional judgement rather than accept the launch instruction without assessing its consequences. The vulnerability creates potential risks for users, so the Product and Public areas of responsibility are also relevant.\n\nFirst, I would establish the vulnerability’s severity, the likelihood of exploitation and the possible impact on data, system safety or reliability. Second, I would report those findings clearly to management instead of concealing them to protect the release schedule. If the issue creates an unacceptable risk, I would recommend fixing it and repeating relevant tests before deployment. Any proposed temporary mitigation should be assessed rather than assumed to be safe.\n\nA delayed launch can create cost and scheduling problems, but those concerns do not automatically outweigh foreseeable harm to users. The engineer’s decision should be explainable, evidence-based and consistent with public interest. “We will fix it later” is not a sufficient ethical justification on its own."
    },
    {
      "topic": "Professional code",
      "kind": "Analyse",
      "marks": 10,
      "slides": "16",
      "question": "A manager tells developers to skip testing and report an already-delayed project as “on track.” Analyse the ethical responsibilities of the manager and team.",
      "points": [
        "Management duties for realistic schedules",
        "Honest reporting",
        "Safety/security/quality resources",
        "Fair workload and pressure",
        "Actions by the team"
      ],
      "answer": "Management responsibility requires leaders to use realistic estimates, treat their teams fairly, communicate problems honestly and allocate sufficient resources for safety, security and quality. Asking developers to skip testing and misrepresent progress conflicts with these responsibilities.\n\nIf the project is already delayed, claiming that it is “on track” misleads stakeholders who need accurate information to make decisions. Removing testing also transfers risk to users, who may experience failures that could have been found before release. The team may feel pressure to comply, but professional judgement and product responsibility still apply to individual engineers.\n\nThe manager should report the real status, identify the causes of delay and propose a revised plan that retains appropriate testing. Engineers should document technical risks and communicate them constructively. The aim is not simply to protect a timetable; it is to deliver a trustworthy product while treating staff and affected users responsibly."
    },
    {
      "topic": "Professional code",
      "kind": "Evaluate",
      "marks": 8,
      "slides": "17",
      "question": "A company advertises its product as “100% secure” and “bias-free” despite known limitations. Should an engineer approve this claim?",
      "points": [
        "Do not approve unsupported absolutes",
        "Honesty and limitations",
        "Profession and public interest",
        "Recommend accurate wording and evidence"
      ],
      "answer": "An engineer should not approve claims of “100% secure” or “bias-free” when important limitations are already known. The ACM/IEEE Profession area requires engineers to protect professional integrity and avoid misleading claims about what software can and cannot do.\n\nThe statements are problematic because customers and users may rely on them when deciding whether to trust or adopt the system. A promise of perfect security could cause organisations to underestimate remaining threats, while a claim of zero bias could hide unequal outcomes for some groups. Such advertising could damage public trust in software engineering.\n\nI would explain the known limitations to the relevant decision-makers and recommend wording that accurately describes what was tested, what safeguards exist and what risks remain. Claims should be supported by appropriate evidence. Honest communication benefits users and protects the reputation of both the product and profession."
    },
    {
      "topic": "Professional code",
      "kind": "Apply",
      "marks": 8,
      "slides": "18",
      "question": "A junior developer is publicly blamed for a bug, but you know the code-review process also missed it. How should you respond?",
      "points": [
        "Colleague fairness and constructive feedback",
        "Recognise shared process failure",
        "Avoid scapegoating",
        "Propose review and learning"
      ],
      "answer": "I would avoid adding to the public blame because the ACM/IEEE Colleagues area requires engineers to treat teammates fairly and provide constructive support. Although the junior developer wrote code containing the bug, the review process also failed to detect it, so presenting the incident as one person’s failure would be misleading.\n\nI would address the factual situation respectfully, preferably in a suitable team or private discussion, and explain that both implementation and review should be examined. The aim should be to find the cause and improve future work, such as by clarifying review checks or adding a test that catches the same defect. Feedback to the developer should be specific and helpful rather than humiliating.\n\nThis approach protects fairness, encourages learning and makes it more likely that teammates will report mistakes honestly. Public blame may discourage openness and prevent the team from correcting the underlying weakness."
    },
    {
      "topic": "Professional code",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "19",
      "question": "You are asked to build an AI health-diagnosis feature using a technique you have never used, under a tight deadline. Should you accept?",
      "points": [
        "Self/competence and high-stakes context",
        "Disclose experience honestly",
        "Seek expertise and realistic schedule",
        "Safety checks and validation",
        "Conditional decision or decline"
      ],
      "answer": "I should not accept the task unconditionally or pretend that I am already competent in an unfamiliar technique. The ACM/IEEE Self area requires ongoing learning, awareness of personal limitations and knowing when to seek help or decline a task.\n\nA health-diagnosis feature is especially sensitive because a wrong result could influence a person’s health decisions. The tight deadline increases the risk that important limitations, testing and safety requirements will be overlooked. I would tell the project leader about my current experience and propose involving appropriately qualified specialists, allowing time for training and evaluating the system’s performance and risks.\n\nIf sufficient expertise, safeguards and a realistic plan can be provided, I could contribute under appropriate supervision while learning. If the project cannot be completed responsibly, I should recommend postponing or declining that responsibility. Admitting limits is professional judgement, not a failure to support the team."
    },
    {
      "topic": "Ethical decisions",
      "kind": "Compare",
      "marks": 10,
      "slides": "20",
      "question": "Discuss the five ethical trade-offs in the lecture and illustrate any two with concrete software examples.",
      "points": [
        "Speed vs safety",
        "Cost vs quality",
        "Convenience vs privacy",
        "Personalisation vs data collection",
        "Automation vs human control",
        "Two well-explained examples"
      ],
      "answer": "Software engineers frequently balance competing goals. The lecture identifies five trade-offs: speed versus safety, cost versus quality, convenience versus privacy, personalisation versus data collection, and automation versus human control. In each case, improving one desirable outcome may increase a risk elsewhere.\n\nFor example, a company can accelerate release by reducing testing time, but this may expose users to failures or security vulnerabilities. The engineer should examine whether the shortened process creates unacceptable harm rather than treating the deadline as the only priority. A second example is an AI tool that automatically identifies students considered at risk. Automation may help lecturers provide support sooner, but it may also reduce students’ ability to challenge an incorrect judgement.\n\nThe responsible decision is not always to reject new technology. Instead, engineers should identify the trade-off, evaluate who bears the risk and choose safeguards that preserve benefits without imposing unnecessary harm."
    },
    {
      "topic": "Ethical decisions",
      "kind": "Apply",
      "marks": 12,
      "slides": "21–22",
      "question": "Use all seven questions in the lecture’s ethical decision check to assess a university facial-recognition attendance system.",
      "points": [
        "All seven named questions addressed",
        "Benefit and stakeholder",
        "Risks and risk bearer",
        "Understanding and alternative",
        "Explain defensibility"
      ],
      "answer": "First, I would ask who could be affected: students, lecturers, administrators and people whose facial information is stored. Second, I would ask what could go wrong, such as incorrect recognition, inappropriate access to biometric data or students being unable to register attendance. Third, the university and lecturers may benefit through a faster attendance process. Fourth, students may carry privacy or misidentification risks even when they receive little direct benefit.\n\nFifth, I would ask whether students genuinely understand what information the system captures and how it will be used. Sixth, I would compare a less intrusive method, such as a non-biometric attendance process, especially for those who cannot use facial recognition. Seventh, I would consider whether the chosen design can be explained and defended as proportionate, fair and necessary.\n\nI would recommend proceeding only if those questions receive satisfactory answers and the university adopts safeguards for privacy, accuracy, accountability and reasonable alternatives. Convenience should not automatically outweigh students’ interests."
    },
    {
      "topic": "Ethical decisions",
      "kind": "Analyse",
      "marks": 10,
      "slides": "22",
      "question": "For facial-recognition attendance, identify one main benefit, at least two ethical concerns, two stakeholders and a key question for the engineer.",
      "points": [
        "Clear operational benefit",
        "Two relevant ethical concerns",
        "Two stakeholders including indirectly affected if possible",
        "Ethical engineering question",
        "Mitigation"
      ],
      "answer": "A major benefit of facial-recognition attendance is that a university could record attendance more quickly and reduce manual administrative work. However, the system creates ethical concerns because facial data are sensitive and an incorrect recognition result could misrecord a student’s attendance.\n\nStudents are directly affected because they must interact with the system and may suffer from incorrect records or intrusive data collection. Lecturers and university administrators are also affected because they rely on the records to monitor attendance. A student who cannot use the biometric system reliably may face exclusion or extra difficulties.\n\nThe engineer should ask: “Is facial recognition necessary to achieve the intended purpose, or could a less intrusive method provide similar benefits?” I would compare the alternatives, assess accuracy and privacy risks, and ensure that students have a workable way to correct mistakes. The system’s convenience does not remove the need for ethical judgement."
    },
    {
      "topic": "Social responsibility",
      "kind": "Compare",
      "marks": 8,
      "slides": "23–24",
      "question": "Differentiate professional ethics from social responsibility, and explain the ripple effect of a software solution.",
      "points": [
        "Ethics asks what is responsible",
        "Social responsibility examines wider impacts",
        "Ripple from users to society/environment",
        "Illustrative consequence"
      ],
      "answer": "Ethics in software engineering asks what decision is responsible, fair and appropriate. Social responsibility broadens that question by asking how software affects people, communities and society, including people who do not directly use the product.\n\nThe lecture illustrates this with a ripple effect: a software solution affects its direct users, then the organisation, other stakeholders, the surrounding community, and ultimately society or the environment. For example, automating a public service might help users complete tasks more quickly and reduce administrative effort for a government organisation. However, people without suitable devices or reliable internet access could be excluded even though they do not benefit from the change.\n\nTherefore, a responsible engineer should evaluate not only the immediate user experience but also indirect effects, unequal burdens and long-term consequences. Social responsibility is the wider impact dimension of making ethical software decisions."
    },
    {
      "topic": "Social responsibility",
      "kind": "Explain",
      "marks": 10,
      "slides": "24–26",
      "question": "What is an “invisible stakeholder”? Identify four such stakeholders and explain why software engineers must consider them.",
      "points": [
        "Definition: affected even without system use",
        "Four examples from lecture",
        "Show the impact mechanism",
        "Link to responsible design"
      ],
      "answer": "An invisible stakeholder is a person, group or entity that can be affected by software even without using it directly. The lecture gives examples including family members, employees, non-users, vulnerable groups, communities, future users and the environment.\n\nFamily members might be affected when an automated decision about one person changes household opportunities or responsibilities. Employees may experience changed workloads when their organisation adopts software. Vulnerable groups could face exclusion if services are designed around users with strong digital skills or suitable devices. The environment can also be affected through the resource use or operational changes associated with a digital service.\n\nEngineers must consider these stakeholders because direct users and paying clients do not represent everyone who carries risk. Analysing indirect impacts helps teams detect harm that might otherwise remain invisible and select more inclusive and responsible designs."
    },
    {
      "topic": "Social responsibility",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "27",
      "question": "A government service becomes 100% digital. Is this automatically social progress? Evaluate benefits, barriers and ways to reduce exclusion.",
      "points": [
        "Convenience and speed benefit",
        "Connectivity and device barriers",
        "Digital literacy and accessibility barriers",
        "Language and usability barriers",
        "Practical inclusive mitigation"
      ],
      "answer": "Making a government service fully digital may improve speed and convenience, but it is not automatically social progress. A service is socially beneficial only when its advantages are available to the people who depend on it.\n\nThe lecture identifies several barriers. Rural or underserved users may have poor connectivity. Some people may have limited digital literacy, while others may lack a suitable device. People with disabilities may need accessible interfaces, and language or usability problems may prevent eligible users from completing the service. A digital-only approach may therefore improve the experience for confident internet users while making access more difficult for vulnerable groups.\n\nA responsible implementation should include accessibility testing, clearer language, user support and workable alternatives for people who cannot access the digital channel. The engineer should assess who benefits, who is excluded and how the burden can be reduced. Digital transformation becomes meaningful progress when it improves services without unfairly leaving people behind."
    },
    {
      "topic": "Social responsibility",
      "kind": "Apply",
      "marks": 12,
      "slides": "29–30",
      "question": "Create a stakeholder impact map for the 92%-accurate AI student-risk system, including three stakeholders and an appropriate responsibility for each.",
      "points": [
        "Identify at least three distinct stakeholders",
        "Benefit to each",
        "Risk or concern to each",
        "Responsible action for each",
        "Overall accountable decision"
      ],
      "answer": "The first stakeholder is the student. The potential benefit is earlier academic support, but the student may be falsely labelled, experience stigma or lose privacy. The university should explain how the prediction is used, protect student information and provide a way to question incorrect decisions.\n\nThe second stakeholder is the lecturer. The prediction may help lecturers identify students needing assistance, but an inaccurate label could influence the lecturer’s expectations or treatment of a student. Lecturers should use the result carefully, avoid treating it as a final judgement and consider the student’s circumstances.\n\nThe third stakeholder is university management. The system may support planning and allocation of student-support resources, but its decisions can create institutional unfairness or reputational harm. Management should be accountable for oversight, reviewing model limitations and ensuring that the system serves students’ interests.\n\nThe overall decision should be based on demonstrated benefit, fairness and effective safeguards, not on the 92% figure alone. This follows the stakeholder map’s questions about benefits, harm, risk, accountability and mitigation."
    },
    {
      "topic": "Social responsibility",
      "kind": "Analyse",
      "marks": 10,
      "slides": "28–31",
      "question": "Explain how software can create positive social impact while also producing negative indirect consequences.",
      "points": [
        "At least three positive areas from lecture",
        "Direct and indirect effects",
        "Example with unintended disadvantage",
        "Safeguards to reduce harms"
      ],
      "answer": "Software can improve people’s lives through better accessibility, healthcare, education, disaster response, resource efficiency, financial inclusion and community services. These benefits can arise when a software feature removes an existing barrier or helps resources reach people more effectively.\n\nHowever, beneficial software can also produce indirect harm. For example, an online learning platform may expand educational access for students with good internet connections but disadvantage those who have weak connectivity or unsuitable devices. Direct users may report an improved experience even while other students become less able to participate. The ripple effect means that engineers must consider organisations, communities and other stakeholders beyond their initial target users.\n\nA responsible approach is to identify intended benefits alongside potential exclusion, consult affected groups and test whether the proposed software actually reduces the problem. Positive intentions do not replace evidence and consideration of unintended consequences."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Explain",
      "marks": 10,
      "slides": "32",
      "question": "What are the SDGs? Explain how software could contribute to four SDGs highlighted in the lecture.",
      "points": [
        "17 UN goals under 2030 Agenda",
        "Correctly name four slide-listed SDGs",
        "Give a plausible software mechanism for each",
        "Avoid automatic impact claims"
      ],
      "answer": "The United Nations Sustainable Development Goals are 17 global goals under the 2030 Agenda. They provide a way to connect software development with wider social, economic and environmental problems.\n\nSoftware may support SDG 3, Good Health and Well-being, by helping people access a healthcare service more effectively. It may support SDG 4, Quality Education, by improving access to learning resources. SDG 9, Industry, Innovation and Infrastructure, may be supported when software strengthens useful digital infrastructure or industrial capability. SDG 10, Reduced Inequalities, may be supported when a service is designed to reduce barriers faced by underserved users.\n\nThe lecture also highlights SDGs 11, 12 and 13. The important point is that an SDG connection must be explained, not merely stated. An engineer should identify the actual software function, show how it addresses a real problem, and consider evidence of the claimed improvement."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Analyse",
      "marks": 12,
      "slides": "33–34",
      "question": "A smart waste platform monitors bin capacity, predicts demand and optimises routes. Explain its contribution to SDGs 11, 12 and 13, including how the contributions could be demonstrated.",
      "points": [
        "Describe system functions from lecture",
        "SDG 11 mechanism",
        "SDG 12 mechanism",
        "SDG 13 mechanism",
        "Distinguish expected outcome from evidence"
      ],
      "answer": "The smart waste platform uses IoT sensors to monitor bin capacity, predicts collection demand, optimises collection routes, provides recycling information and analyses waste patterns. Its social value depends on how these functions improve waste management rather than simply on using IoT.\n\nFor SDG 11, Sustainable Cities and Communities, timely collection and better route planning may support cleaner, better-managed local areas. For SDG 12, Responsible Consumption and Production, recycling information and analysis of waste patterns may help communities and service operators use resources more responsibly. For SDG 13, Climate Action, eliminating unnecessary collection journeys may reduce fuel consumption and associated emissions.\n\nThese are plausible contribution mechanisms, not guaranteed results. The project should compare actual operational outcomes with an appropriate baseline. For example, the team could examine collection efficiency, recycling participation and transport fuel use before and after implementation. This follows the lecture’s instruction to explain exactly how a project contributes to an SDG."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Explain",
      "marks": 8,
      "slides": "35",
      "question": "Explain the purpose of the 10-10 MySTIE Framework and how a software project could relate to it.",
      "points": [
        "Name MySTIE correctly",
        "10 socioeconomic and 10 science/technology drivers",
        "Align innovation with Malaysian needs",
        "Concrete aligned software illustration",
        "Do not invent named drivers"
      ],
      "answer": "The 10-10 MySTIE Framework is presented in the lecture as a way to connect technology with Malaysia’s socioeconomic needs and opportunities. Its structure links ten key socioeconomic drivers with ten science and technology drivers. The central idea is that scientific and technological innovation should respond to real national needs rather than exist only as a technical exercise.\n\nFor example, a smart waste-management project could use software, sensors and data analysis to respond to the practical need for better public services and resource use. The project team would first identify the relevant social or economic problem, then explain how its chosen technology could help address it.\n\nThe lecture does not list the individual MySTIE drivers, so an exam answer based only on these slides should not invent or claim specific driver names. The supported takeaway is the need for alignment between innovation and socioeconomic value."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Explain",
      "marks": 8,
      "slides": "36",
      "question": "What is MyDIGITAL, and which themes from the lecture are relevant to responsible software development?",
      "points": [
        "Malaysia Digital Economy Blueprint",
        "Seven broad lecture themes",
        "Explain at least three themes in context",
        "Include inclusion/cybersecurity"
      ],
      "answer": "MyDIGITAL is the Malaysia Digital Economy Blueprint. In the lecture, it provides a national context for how software engineering contributes to Malaysia’s digital economy. The seven broad themes are digital services, digital adoption, data, cybersecurity, digital talent, inclusion and innovation.\n\nA software engineer may contribute to digital services by building useful online systems, but responsible development also requires addressing cybersecurity so users can trust those services. Digital adoption depends on whether people and organisations are capable of using the solution, while inclusion asks whether different groups can benefit from it. Attention to data and digital talent supports responsible implementation and continuing capability.\n\nTherefore, aligning a project with MyDIGITAL should not mean simply calling it “digital”. The developer should explain how the solution creates a useful service and consider whether it can be adopted safely and inclusively."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Compare",
      "marks": 10,
      "slides": "35–38",
      "question": "Compare the roles of SDGs, MySTIE, MyDIGITAL and Industry4WRD when justifying a software project.",
      "points": [
        "SDGs as global societal goals",
        "MySTIE as national socioeconomic/technology alignment",
        "MyDIGITAL as digital-economy themes",
        "Industry4WRD as industry priority named but not detailed",
        "Integrate in one example"
      ],
      "answer": "The SDGs provide a global framework for explaining which societal or environmental problem a project addresses. MySTIE asks how science, technology and innovation can connect with Malaysia’s socioeconomic needs. MyDIGITAL provides the national digital-economy context, including digital services, adoption, data, cybersecurity, talent, inclusion and innovation. Industry4WRD is identified in the lecture as a Malaysian industry-related priority, although its detailed components are not described.\n\nFor example, a smart waste platform could be connected to SDGs 11, 12 and 13 through better collection, resource use and possibly lower emissions. Its use of data and software to respond to an identified national need reflects the MySTIE idea. Reliable digital services and responsible data handling relate to MyDIGITAL. If the system is implemented in an industrial operating context, Industry4WRD may be relevant as a broader industry-facing priority.\n\nThese are complementary perspectives, not interchangeable labels. A strong answer explains the concrete link to each rather than assuming every software project supports all frameworks automatically."
    },
    {
      "topic": "SDGs and priorities",
      "kind": "Evaluate",
      "marks": 12,
      "slides": "37–38",
      "question": "Apply the lecture’s four perspectives—ethics, social responsibility, SDGs and Malaysian priorities—to the smart waste-management system.",
      "points": [
        "Ethical responsibility and potential risk",
        "Stakeholders and wider effects",
        "Correct SDGs",
        "MySTIE and MyDIGITAL links",
        "Careful Industry4WRD claim",
        "Evidence or evaluation"
      ],
      "answer": "From an ethics perspective, the smart waste platform should be evaluated for reliability, honest reporting and responsible handling of the information it collects. A failed prediction or poorly designed route could create operational problems, so benefits should not be assumed without testing.\n\nFrom a social-responsibility perspective, the system affects residents, waste-collection employees, service operators, local communities and potentially the environment. Better collection may benefit neighbourhoods, but the project should examine whether some areas or groups are underserved.\n\nFor SDGs, improved urban waste services relate to SDG 11. Recycling support and waste-pattern analysis relate to SDG 12, while more efficient routes may support SDG 13 if they actually reduce emissions. In Malaysia, the project reflects MySTIE’s alignment of innovation with socioeconomic needs and MyDIGITAL’s themes of digital services, data and innovation. Industry4WRD may provide a relevant industrial context, but the lecture gives no detailed criteria for claiming specific Industry4WRD outcomes.\n\nThe project’s impact should be tested using actual service and environmental results, not just the presence of technical features."
    },
    {
      "topic": "Synthesis",
      "kind": "Evaluate",
      "marks": 10,
      "slides": "39–42",
      "question": "“A software system can be technically successful and still create social harm.” Discuss this statement and explain what an engineer should do.",
      "points": [
        "Explain gap between functionality and impact",
        "Mention users and non-users",
        "Risk, fairness and transparency",
        "Professional accountability and safeguards",
        "Three-part takeaway"
      ],
      "answer": "I agree with the statement because software can perform its intended functions while creating harmful consequences for users or society. A system may achieve high accuracy, automate work efficiently or reduce costs, yet still collect unnecessary data, treat some groups unfairly or exclude people who cannot use it.\n\nThe lecture’s student-risk AI illustrates the problem. Even with 92% accuracy, incorrect labels may cause stigma or change the way lecturers treat students. The engineer should identify everyone affected, assess benefits and risks, communicate limitations honestly and ensure there is accountability for harmful outcomes. Where possible, the team should redesign the system or introduce safeguards, such as ways to correct errors and review important decisions.\n\nUltimately, responsible software engineers must build it right through quality, safety and reliability; build the right thing by understanding people and consequences; and think beyond the system by considering society, sustainability and the wider context."
    },
    {
      "topic": "Synthesis",
      "kind": "Propose",
      "marks": 12,
      "slides": "28, 31–38",
      "question": "Propose a software solution that addresses a Malaysian societal problem, and explain the ethics, stakeholders, SDG and national-priority connections.",
      "points": [
        "Define one specific social problem",
        "Concrete software functions",
        "Direct and invisible stakeholders",
        "At least two ethical risks/mitigations",
        "Relevant SDG with mechanism",
        "MySTIE and/or MyDIGITAL connection"
      ],
      "answer": "I propose an accessible community flood-alert application to help residents receive timely information about local flood risks. It could display alerts, provide safety instructions and allow community officers to communicate updates. The intended benefit is to make important information easier to receive and act upon during an emergency.\n\nDirect stakeholders include residents and local response teams. Indirect stakeholders include family members, nearby communities and people who cannot access smartphones. Ethical risks include inaccurate alerts, privacy concerns if location information is used, and the exclusion of people with limited connectivity or accessibility needs. The design should make uncertainty clear, protect necessary data and provide alternative notification methods where feasible.\n\nThe project could contribute to SDG 11, Sustainable Cities and Communities, through improved community preparedness. Its use of software to address a practical national need reflects the MySTIE principle. As a digital public-facing service, it also relates to MyDIGITAL themes such as digital services, inclusion and cybersecurity.\n\nThe team should evaluate whether alerts reach intended users in a timely, understandable and inclusive manner before claiming success."
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
