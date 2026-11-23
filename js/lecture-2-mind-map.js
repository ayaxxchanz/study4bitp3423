(() => {
    // Lecture 2 knowledge graph from the supplied mind map.
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 2 • SLIDES 1–43",
      title: "Ethics & Social Responsibility",
      sub: "ACM/IEEE Code, Stakeholders, SDGs & Malaysia",
      slides: "Slides 1–43",
      summary: "Examines why software engineers must move beyond 'Can we build it?' to 'Should we build it?' and 'What happens next?'—applying the ACM/IEEE Code of Ethics, stakeholder ripple analysis, UN SDGs, and Malaysia's national frameworks (10-10 MySTIE, MyDIGITAL, Industry4WRD).",
      points: [
        "Outcome 1: Explain key principles of professional ethics (ACM/IEEE Code) in software engineering.",
        "Outcome 2: Analyze ethical and social impacts of software solutions on direct and indirect stakeholders.",
        "Outcome 3: Propose how software solutions contribute to UN SDGs, 10-10 MySTIE, MyDIGITAL, and Industry4WRD.",
        "Core Principle: A software system can succeed technically while still creating social harm; engineers bear continuous responsibility."
      ],
      examTip: "Structure 6–10 mark case answers around four steps: (1) Identify direct & invisible stakeholders, (2) Pair benefit with specific harm/risk, (3) Anchor in an ACM/IEEE Code area, and (4) Propose a safeguard + clear deployment verdict."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#fda4af",
        badge: "01 • CORE QUESTIONS",
        title: "Technical Success vs. Ethical Risk",
        sub: "92% Case & 3 Engineer Questions",
        slides: "Slides 1, 3–6",
        summary: "Demonstrates through the 92% student dropout predictor that high technical accuracy alone does not make a system safe to deploy, introducing the three core questions every software engineer must ask.",
        points: [
          "Big Question: 'Can we build it?' (technical feasibility) vs. Bigger Question: 'Should we build it?' (ethical justification & downstream consequences).",
          "Software directly shapes high-stakes domains: Education, Healthcare, Banking & Finance, Employment, Transportation, Public Services, Communication, and Everyday Decisions."
        ],
        examTip: "Never equate '92% model accuracy' with 'safe to deploy'—always surface false positives, unfair labeling, and lack of student appeal.",
        children: [
          {
            id: "b1_1",
            color: "#ffe4e6",
            badge: "CASE STUDY",
            title: "The 92% Dropout Predictor Problem",
            sub: "6 hidden harms despite high accuracy",
            slides: "Slides 3–4",
            summary: "A university AI predicts dropout risk with 92% accuracy and a polished dashboard, yet creates six serious ethical and social risks if deployed blindly.",
            points: [
              "1. Collects sensitive personal, financial, and academic student data.",
              "2. Produces false positives (an 8% error rate still mislabels 8 out of 100 thriving students).",
              "3. Labels vulnerable student cohorts unfairly.",
              "4. Influences how lecturers treat or grade flagged students (confirmation bias).",
              "5. Creates student anxiety and social stigma.",
              "6. Difficult for students to inspect, understand, or challenge."
            ],
            examTip: "Verdict for 'Would you deploy it?': Deploy only as human-assisted advisor support—not automated judgment—with explainability, appeal channels, and restricted lecturer visibility."
          },
          {
            id: "b1_2",
            color: "#ffe4e6",
            badge: "3 QUESTIONS",
            title: "The Software Engineer's 3 Questions",
            sub: "Feasibility, Purpose & Consequences",
            slides: "Slide 5",
            summary: "Provides a three-stage filter moving from technical capability to moral justification and second-order societal effects.",
            points: [
              "1. Can we build it? — Technical feasibility, available technology, and time/resource constraints.",
              "2. Should we build it? — Genuine purpose, validated user need, and ethical concerns (fairness, privacy, dignity).",
              "3. What could happen? — Intended benefits, foreseeable risks (breaches/errors), and unintended second-order effects."
            ],
            examTip: "Contrast 'Can we build it?' (technical constraints) with 'Should we build it?' (ethical purpose & harm) using a concrete software example for full 4-mark credit."
          },
          {
            id: "b1_3",
            color: "#ffe4e6",
            badge: "SCOPE",
            title: "Why Ethics Belongs in SE",
            sub: "8 high-consequence life domains",
            slides: "Slide 6",
            summary: "Explains why software engineering is inherently a moral and social profession rather than purely mechanical coding.",
            points: [
              "Software systems mediate critical life decisions across Education, Healthcare, Banking & Finance, and Employment.",
              "Software also governs Transportation, Public Services, Communication, and Everyday Decisions—meaning bugs or bias directly affect human rights and livelihoods."
            ],
            examTip: "Cite at least three high-stakes domains (e.g., Healthcare, Banking, Employment) when justifying why ethical review is mandatory before release."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#7dd3fc",
        badge: "02 • ETHICS & CONSENT",
        title: "Foundations, Law & ACM/IEEE",
        sub: "6 Dimensions, Consent & Code Overview",
        slides: "Slides 7–11",
        summary: "Defines ethical reasoning across six core dimensions, separates legal compliance from professional ethics, debunks the 'I Agree' consent excuse, and introduces the ACM/IEEE Code.",
        points: [
          "Ethics evaluates what is responsible, fair, and appropriate when software decisions affect others.",
          "Legal compliance is the bare minimum floor—not the ceiling of responsible engineering."
        ],
        examTip: "Always distinguish Legal ('what the law permits') from Ethical ('what responsible judgement requires') when analyzing invasive data collection.",
        children: [
          {
            id: "b2_1",
            color: "#e0f2fe",
            badge: "DEFINITION",
            title: "What Ethics Means (6 Dimensions)",
            sub: "Harm, Safety, Fairness, Privacy, Honesty, Acc.",
            slides: "Slide 7",
            summary: "Defines software engineering ethics and lists the six core lenses used to evaluate technical decisions.",
            points: [
              "Definition: Principles and reasoning about what is responsible, fair, and appropriate when decisions affect others.",
              "Six Core Dimensions: (1) Harm and benefit, (2) Safety, (3) Fairness, (4) Privacy, (5) Honesty, and (6) Accountability."
            ],
            examTip: "Use these 6 dimensions as a quick checklist to name specific ethical concerns in short-answer questions."
          },
          {
            id: "b2_2",
            color: "#e0f2fe",
            badge: "LAW VS ETHICS",
            title: "Ethics ≠ Law ≠ Policy & 'I Agree' Case",
            sub: "Why user consent ≠ engineer absolution",
            slides: "Slides 8–9",
            summary: "Separates Legal, Professional, and Ethical standards, and shows why a user tapping 'I Agree' does not excuse excessive data harvesting.",
            points: [
              "Legal (what law permits/requires) ≠ Professional (what engineering codes expect) ≠ Ethical (what responsible judgement requires).",
              "Case ('I Agree'): App requests Location, Contacts, Microphone, and Usage data; user taps 'I Agree'.",
              "Rule: Consent does NOT remove engineer responsibility because policies are unreadable and access is often forced; apply data minimization instead."
            ],
            examTip: "Quote 'forced or uninformed consent' and 'data minimization' when answering the 'I Agree' mobile permissions question."
          },
          {
            id: "b2_3",
            color: "#e0f2fe",
            badge: "CODE STRUCTURE",
            title: "ACM/IEEE Code of Ethics (8 Areas)",
            sub: "Global standard & Public Interest rule",
            slides: "Slides 10–11",
            summary: "Introduces the joint ACM/IEEE Software Engineering Code of Ethics and Professional Practice across eight responsibility areas.",
            points: [
              "Purpose: Guides professional judgement whenever technical, business, and social interests conflict.",
              "8 Areas: (1) Public, (2) Client & Employer, (3) Product, (4) Judgment, (5) Management, (6) Profession, (7) Colleagues, (8) Self.",
              "Overarching Priority: Area 1 (Public Interest) always comes first above client, employer, or commercial pressure."
            ],
            examTip: "Explicitly state that 'Public Interest overrides client/employer requests whenever a conflict arises.'"
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#86efac",
        badge: "03 • ACM/IEEE 8 AREAS",
        title: "8 Code Areas, Trade-Offs & Checks",
        sub: "Scenarios, 5 Trade-Offs & 7-Step Check",
        slides: "Slides 11–22",
        summary: "Applies all eight ACM/IEEE areas to realistic workplace dilemmas, maps five recurring engineering trade-offs, and provides a seven-question pre-deployment ethical check.",
        points: [
          "Covers Areas 1–4 (Public, Client/Employer, Product, Judgment) and Areas 5–8 (Management, Profession, Colleagues, Self).",
          "Equips engineers with a 7-step decision check before deploying sensitive features like facial recognition attendance."
        ],
        examTip: "Match each workplace dilemma to its exact ACM/IEEE area name (e.g., skipping tests = Management; exaggerated marketing = Profession).",
        children: [
          {
            id: "b3_1",
            color: "#dcfce7",
            badge: "AREAS 1–4",
            title: "Public, Client, Product & Judgment",
            sub: "External duty, quality & pre-launch flaws",
            slides: "Slides 11–15",
            summary: "Covers the first four ACM/IEEE responsibility areas with concrete software workplace scenarios.",
            points: [
              "1. Public: Evaluate harm, exclusion, failure impact, and honest risk communication beyond the paying client.",
              "2. Client & Employer: Act in client interest consistent with public interest—decline covert marketing data collection.",
              "3. Product: 'Passed testing is not the end'—ensure fitness for purpose, documented limits, safety, and error recovery.",
              "4. Judgment: Refuse management pressure ('Launch now, fix later') when a pre-launch security vulnerability is found."
            ],
            examTip: "Remember the exact quote for Area 3 (Product): '\"Passed testing\" is not the end.'"
          },
          {
            id: "b3_2",
            color: "#dcfce7",
            badge: "AREAS 5–8",
            title: "Management, Profession, Colleagues & Self",
            sub: "Schedules, truth, teamwork & competence",
            slides: "Slides 11, 16–19",
            summary: "Covers internal leadership, professional integrity, peer fairness, and personal competence boundaries.",
            points: [
              "5. Management: Refuse skipping testing or falsifying status as 'on track' under unrealistic deadlines.",
              "6. Profession: Decline signing off on false '100% secure' or 'bias-free' marketing claims.",
              "7. Colleagues: Share team accountability when code review missed a bug instead of scapegoating a junior developer.",
              "8. Self (Lifelong Learning): Disclose competence gaps and seek domain oversight before building an unfamiliar health-diagnosis AI."
            ],
            examTip: "For Area 8 (Self), state that ethical engineers know when to ask for specialist help or decline unsafe deadlines."
          },
          {
            id: "b3_3",
            color: "#dcfce7",
            badge: "DECISION TOOLS",
            title: "5 Trade-Offs, 7-Step Check & Facial Case",
            sub: "Balancing values & pre-release audit",
            slides: "Slides 20–22",
            summary: "Provides structured frameworks for resolving competing engineering values and evaluating biometric systems.",
            points: [
              "5 Trade-Offs (Slide 20): Speed vs. Safety | Cost vs. Quality | Convenience vs. Privacy | Personalisation vs. Data Collection | Automation vs. Human Control.",
              "7-Step Check (Slide 21): (1) Who is affected? (2) What goes wrong? (3) Who benefits? (4) Who carries risk? (5) Do users understand? (6) Safer alternative? (7) Can decision be defended?",
              "Facial Attendance Case (Slide 22): Balances fast roll-call against irreversible biometric leak risk, skin-tone bias, and opt-out rights."
            ],
            examTip: "Memorise all 5 trade-off pairs from Slide 20—they frequently appear in short structured questions."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • SOCIAL IMPACT",
        title: "Social Responsibility & Stakeholders",
        sub: "Ripple Effect, Exclusion & Impact Map",
        slides: "Slides 23–31",
        summary: "Expands focus from individual ethical duties to wider societal consequences—tracing six-stage ripple effects, invisible non-users, digital exclusion barriers, and stakeholder impact matrices.",
        points: [
          "Ethics asks: 'What is the responsible thing to do?' | Social Responsibility asks: 'What impact does our software have on people, communities, and society?'",
          "Engineers must account for invisible stakeholders who never touch the UI yet bear system consequences."
        ],
        examTip: "Distinguish Direct Impact (Users), Indirect Impact (Others), and Wider Impact (Society) using Slide 25's exact tiers.",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "RIPPLE EFFECT",
            title: "Ethics vs. Social Responsibility & Ripple",
            sub: "6-stage propagation & 4 impact tiers",
            slides: "Slides 23–25",
            summary: "Maps how software decisions radiate outward from immediate screen users to entire communities and the environment.",
            points: [
              "6-Stage Ripple (Slide 24): Software Solution → Direct Users → Organisation → Other Stakeholders → Community → Society / Environment.",
              "4 Stakeholder Tiers (Slide 25): Software (Solution) → Users (Direct impact) → Others (Indirect impact) → Society (Wider impact)."
            ],
            examTip: "Draw or list the 6-stage ripple chain to show systemic thinking in essay questions."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "INCLUSION",
            title: "Invisible Stakeholders & Digital Exclusion",
            sub: "Non-users, 5 barriers & 7 positive paths",
            slides: "Slides 26–28",
            summary: "Highlights groups affected without using the app, exposes risks of 100% digital public services, and lists seven positive social impact domains.",
            points: [
              "Invisible Stakeholders (Slide 26): Family members, employees, non-users, vulnerable groups, communities, future users, and the environment.",
              "100% Digital Gov Case (Slide 27): Excludes citizens via poor connectivity, low digital literacy, disability/accessibility gaps, lack of devices, and language barriers.",
              "7 Positive Impact Areas (Slide 28): Accessibility, healthcare, education, disaster response, resource efficiency, financial inclusion, and community services."
            ],
            examTip: "Answer 'Is digital transformation automatically social progress?' with 'No—eliminating offline options excludes vulnerable groups unless accessible multi-channel support is kept.'"
          },
          {
            id: "b4_3",
            color: "#ffedd5",
            badge: "IMPACT MATRIX",
            title: "Stakeholder Impact Map & Case Matrix",
            sub: "5-step flow & dropout AI stakeholders",
            slides: "Slides 29–31",
            summary: "Applies a five-question stakeholder impact map to evaluate benefits, harms, accountability, and mitigations.",
            points: [
              "5-Step Impact Map (Slides 29, 31): Who benefits? → Who may be harmed? → What could go wrong? → Who is accountable? → How can negative impact be reduced?",
              "Dropout AI Matrix (Slide 30): Evaluates Benefit, Concern, and Responsibility across Students (tutoring vs. stigma), Lecturers (visibility vs. bias), and Management (retention vs. blind metric reliance)."
            ],
            examTip: "Use the 4-column table (Stakeholder | Benefit | Concern | Responsibility) whenever asked to analyze multiple stakeholders."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#fde047",
        badge: "05 • UN SDGs",
        title: "UN SDGs & Causal Mechanism Proof",
        sub: "2030 Agenda & Smart Waste Case",
        slides: "Slides 32–34",
        summary: "Connects software engineering projects to seven key UN Sustainable Development Goals and enforces the rule that engineers must prove the exact operational mechanism rather than merely listing SDG numbers.",
        points: [
          "The UN 2030 Agenda defines 17 global Sustainable Development Goals.",
          "High-scoring exam answers explain HOW a software feature creates measurable environmental or social change."
        ],
        examTip: "Never just write 'This project supports SDG 11 and 13.' Always state the causal mechanism: Sensor/Feature → Operational Change → Measurable SDG Outcome.",
        children: [
          {
            id: "b5_1",
            color: "#fef9c3",
            badge: "GLOBAL GOALS",
            title: "7 Software-Relevant UN SDGs",
            sub: "SDGs 3, 4, 9, 10, 11, 12 & 13",
            slides: "Slide 32",
            summary: "Identifies the seven UN Sustainable Development Goals most frequently advanced by software and digital systems.",
            points: [
              "SDG 3: Good Health and Well-being | SDG 4: Quality Education.",
              "SDG 9: Industry, Innovation and Infrastructure | SDG 10: Reduced Inequalities.",
              "SDG 11: Sustainable Cities and Communities | SDG 12: Responsible Consumption and Production | SDG 13: Climate Action."
            ],
            examTip: "Match the exact SDG number with its official title (e.g., SDG 12 = Responsible Consumption and Production)."
          },
          {
            id: "b5_2",
            color: "#fef9c3",
            badge: "EVIDENCE RULE",
            title: "Smart Waste Case & Mechanism Proof",
            sub: "IoT + Route AI → SDGs 11, 12 & 13",
            slides: "Slides 33–34",
            summary: "Uses an IoT smart waste platform to demonstrate how to prove causal contribution to SDGs 11, 12, and 13.",
            points: [
              "Platform Features: IoT bin capacity sensors, collection demand prediction, route optimisation, recycling guidance app, and waste pattern analytics.",
              "Mechanism Proof: Prevents overflowing bins for cleaner cities (SDG 11); guides household sorting to boost recycling (SDG 12); eliminates half-empty truck trips to cut fuel burn and CO₂ emissions (SDG 13)."
            ],
            examTip: "Quote Slide 34's diagnostic question: '\"What exactly is the mechanism of contribution?\"'"
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#b8b8ff",
        badge: "06 • MALAYSIA & PILLARS",
        title: "Malaysian Frameworks & 3 Pillars",
        sub: "MySTIE, MyDIGITAL, Industry4WRD & Gate",
        slides: "Slides 35–43",
        summary: "Aligns software engineering with Malaysia's national development policies (10-10 MySTIE, MyDIGITAL, Industry4WRD), synthesises the four evaluation perspectives, and closes with the three pillars of a responsible software engineer.",
        points: [
          "Evaluates every software system across four lenses: Ethics, Social Responsibility, Global SDGs, and Malaysian National Priorities.",
          "Closes with the deployment gate ('Does it work?' is not enough) and three guiding pillars."
        ],
        examTip: "Connect national frameworks to specific Malaysian use cases (e.g., MySTIE = S&T + socioeconomic driver; MyDIGITAL = 7 digital economy themes; Industry4WRD = MITI smart manufacturing).",
        children: [
          {
            id: "b6_1",
            color: "#eeeeff",
            badge: "NATIONAL POLICY",
            title: "10-10 MySTIE, MyDIGITAL & Industry4WRD",
            sub: "Malaysia's S&T, Digital & Industry 4.0",
            slides: "Slides 35–37",
            summary: "Summarises the three Malaysian frameworks linking software engineering to national socioeconomic growth.",
            points: [
              "10-10 MySTIE (ASM): Connects 10 Science & Technology drivers with 10 socioeconomic drivers to align R&D with Malaysian needs.",
              "MyDIGITAL Blueprint: Spans 7 themes—Digital services, Digital talent, Digital adoption, Inclusion, Data, Cybersecurity, and Innovation.",
              "Industry4WRD (MITI Malaysia): National Policy on Industry 4.0 driving smart manufacturing, automation, and industrial competitiveness."
            ],
            examTip: "Memorise MyDIGITAL's 7 themes and 10-10 MySTIE's pairing of 10 S&T drivers + 10 socioeconomic drivers."
          },
          {
            id: "b6_2",
            color: "#eeeeff",
            badge: "4 LENSES",
            title: "Four Perspectives on One Solution",
            sub: "Ethics, Social, SDGs & National Fit",
            slides: "Slide 38",
            summary: "Combines ethical, social, global, and national evaluation into one holistic assessment model.",
            points: [
              "1. Ethics: Is it responsible? (Fair, safe, honest).",
              "2. Social Responsibility: Who is affected? (Direct users & invisible non-users).",
              "3. Global SDGs: What societal problem does it address?",
              "4. National Priorities: How does it connect to MySTIE, MyDIGITAL, and Industry4WRD?"
            ],
            examTip: "Use these four perspectives as section headings when proposing or evaluating a capstone software project."
          },
          {
            id: "b6_3",
            color: "#eeeeff",
            badge: "3 PILLARS & EXIT",
            title: "Deployment Gate, 3 Pillars & Exit Q",
            sub: "Build Right, Build Right Thing, Think Beyond",
            slides: "Slides 39–43",
            summary: "Synthesises the entire lecture into three core takeaways and an actionable engineering principle for the Exit Question.",
            points: [
              "Deployment Gate (Slide 39): Ask who is affected, what could go wrong, fairness/transparency, responsibilities, and real value—not just 'Does it work?'",
              "Pillar 1 — Build It Right: Technical quality, safety, security, and reliability.",
              "Pillar 2 — Build the Right Thing: Understand users, stakeholders, genuine purpose, and consequences.",
              "Pillar 3 — Think Beyond the System: Consider society, sustainability, and wider national/global context (Exit Q: proactively assess stakeholder risks and build safeguards before release)."
            ],
            examTip: "Memorise the three exact slogans on Slide 41: (1) Build it right, (2) Build the right thing, (3) Think beyond the system."
          }
        ]
      }
    ];

    window.initStudyMindMap(mindMapData, branches);
})();
