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

    // Flatten nodes for lookup, sequential stepping, and search
    const flatNodes = [mindMapData];
    branches.forEach((b) => {
      flatNodes.push(b);
      if (b.children) {
        b.children.forEach((c) => flatNodes.push(c));
      }
    });

    // State
    const expandedState = {
      root: true,
      b1: true,
      b2: true,
      b3: true,
      b4: true,
      b5: true,
      b6: true
    };
    let selectedNodeId = "root";
    let searchQuery = "";
    let scale = 0.88;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartY = 0;

    // Layout Constants
    const ROOT_W = 240;
    const ROOT_H = 104;
    const BRANCH_W = 225;
    const BRANCH_H = 88;
    const LEAF_W = 225;
    const LEAF_H = 82;
    const H_GAP_1 = 95;   // Root to Branch
    const H_GAP_2 = 85;   // Branch to Leaf
    const V_LEAF_GAP = 14;
    const V_BRANCH_GAP = 28;

    function getBranchHeight(branch) {
      if (!expandedState[branch.id] || !branch.children || branch.children.length === 0) {
        return BRANCH_H;
      }
      const childrenTotal =
        branch.children.length * LEAF_H + (branch.children.length - 1) * V_LEAF_GAP;
      return Math.max(BRANCH_H, childrenTotal);
    }

    function renderMindMap() {
      const nodesContainer = document.getElementById("map-nodes");
      const linesSvg = document.getElementById("map-lines");
      nodesContainer.innerHTML = "";
      linesSvg.innerHTML = "";

      const positioned = [];
      const edges = [];

      // Root at (0, 0) center
      const rootPos = {
        node: mindMapData,
        x: -ROOT_W / 2,
        y: -ROOT_H / 2,
        w: ROOT_W,
        h: ROOT_H,
        depth: 0,
        side: "center"
      };
      positioned.push(rootPos);

      const leftBranches = branches.filter((b) => b.side === "left");
      const rightBranches = branches.filter((b) => b.side === "right");

      function layoutWing(wingBranches, side) {
        const heights = wingBranches.map(getBranchHeight);
        const totalHeight =
          heights.reduce((sum, h) => sum + h, 0) +
          Math.max(0, wingBranches.length - 1) * V_BRANCH_GAP;

        let cursorY = -totalHeight / 2;

        wingBranches.forEach((branch, idx) => {
          const blockH = heights[idx];
          const branchCenterY = cursorY + blockH / 2;
          const branchY = branchCenterY - BRANCH_H / 2;
          const branchX =
            side === "right"
              ? ROOT_W / 2 + H_GAP_1
              : -ROOT_W / 2 - H_GAP_1 - BRANCH_W;

          const bPos = {
            node: branch,
            x: branchX,
            y: branchY,
            w: BRANCH_W,
            h: BRANCH_H,
            depth: 1,
            side
          };
          positioned.push(bPos);

          // Edge Root -> Branch
          edges.push({
            fromX: side === "right" ? rootPos.x + rootPos.w : rootPos.x,
            fromY: 0,
            toX: side === "right" ? bPos.x : bPos.x + bPos.w,
            toY: branchCenterY,
            color: branch.color
          });

          // Children (Leaves)
          if (expandedState[branch.id] && branch.children && branch.children.length > 0) {
            const leavesTotalH =
              branch.children.length * LEAF_H +
              (branch.children.length - 1) * V_LEAF_GAP;
            let leafCursorY = branchCenterY - leavesTotalH / 2;

            branch.children.forEach((leaf) => {
              const leafCenterY = leafCursorY + LEAF_H / 2;
              const leafX =
                side === "right"
                  ? branchX + BRANCH_W + H_GAP_2
                  : branchX - H_GAP_2 - LEAF_W;

              const lPos = {
                node: { ...leaf, parentTitle: branch.title, branchColor: branch.color },
                x: leafX,
                y: leafCursorY,
                w: LEAF_W,
                h: LEAF_H,
                depth: 2,
                side
              };
              positioned.push(lPos);

              edges.push({
                fromX: side === "right" ? bPos.x + bPos.w : bPos.x,
                fromY: branchCenterY,
                toX: side === "right" ? lPos.x : lPos.x + lPos.w,
                toY: leafCenterY,
                color: branch.color
              });

              leafCursorY += LEAF_H + V_LEAF_GAP;
            });
          }

          cursorY += blockH + V_BRANCH_GAP;
        });
      }

      layoutWing(leftBranches, "left");
      layoutWing(rightBranches, "right");

      // Draw SVG Edges
      edges.forEach((e) => {
        const dx = (e.toX - e.fromX) * 0.52;
        const d = `M ${e.fromX} ${e.fromY} C ${e.fromX + dx} ${e.fromY}, ${e.toX - dx} ${e.toY}, ${e.toX} ${e.toY}`;

        // Outer black stroke
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#000000");
        path.setAttribute("stroke-width", "2.5");
        linesSvg.appendChild(path);

        // Endpoint dot
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("cx", e.toX);
        dot.setAttribute("cy", e.toY);
        dot.setAttribute("r", "4");
        dot.setAttribute("fill", e.color);
        dot.setAttribute("stroke", "#000000");
        dot.setAttribute("stroke-width", "2");
        linesSvg.appendChild(dot);
      });

      // Draw DOM Nodes
      positioned.forEach((p) => {
        const n = p.node;
        const el = document.createElement("div");
        el.tabIndex = 0;
        el.setAttribute("role", "button");
        el.setAttribute("aria-label", n.title);
        el.className = "mm-node";
        if (p.depth === 0) el.classList.add("root-node");
        if (p.depth === 1) el.classList.add("branch-node");
        if (n.id === selectedNodeId) el.classList.add("selected");
        if (searchQuery && matchesSearch(n, searchQuery)) {
          el.classList.add("search-match");
        }

        el.style.left = `${p.x}px`;
        el.style.top = `${p.y}px`;
        el.style.width = `${p.w}px`;
        el.style.height = `${p.h}px`;
        if (p.depth > 0) {
          // Branches keep bright colors; leaf cards follow the neutral theme surface.
          el.style.background = p.depth === 1 ? n.color : `var(--study-surface-neutral, ${n.color})`;
        }

        const hasKids = n.children && n.children.length > 0;
        const toggleHtml = hasKids
          ? `<span class="mm-toggle" title="Expand/Collapse branch" data-toggle="${n.id}" role="button" tabindex="0" aria-label="Toggle ${n.title}" aria-expanded="${expandedState[n.id]}">${expandedState[n.id] ? "−" : "+"}</span>`
          : "";

        el.innerHTML = `
          <div class="mm-node-top">
            <span class="mm-kicker">${n.badge}</span>
            ${toggleHtml}
          </div>
          <div class="mm-title">${n.title}</div>
          <div class="mm-sub">${n.sub}</div>
        `;

        el.addEventListener("keydown", (ev) => {
          if (ev.target === el && (ev.key === "Enter" || ev.key === " ")) {
            ev.preventDefault();
            selectNode(n.id);
            document.querySelector('.mm-node[aria-label="' + n.title + '"]')?.focus();
          }
        });
        el.querySelector('[data-toggle]')?.addEventListener('click', ev => toggleBranch(ev, n.id));
        el.querySelector('[data-toggle]')?.addEventListener('keydown', ev => {
          if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            toggleBranch(ev, n.id);
            document.querySelector('[data-toggle="' + n.id + '"]')?.focus();
          }
        });
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          if (!dragMoved) {
            selectNode(n.id);
          }
        });

        nodesContainer.appendChild(el);
      });

      window._lastPositioned = positioned;
    }

    function toggleBranch(event, branchId) {
      event.stopPropagation();
      expandedState[branchId] = !expandedState[branchId];
      renderMindMap();
    }

    function expandAllNodes() {
      branches.forEach((b) => {
        expandedState[b.id] = true;
      });
      renderMindMap();
      fitMapToViewport();
    }

    function collapseToMainBranches() {
      branches.forEach((b) => {
        expandedState[b.id] = false;
      });
      renderMindMap();
      fitMapToViewport();
    }

    function matchesSearch(node, q) {
      const hay = [
        node.title,
        node.sub,
        node.summary,
        node.slides,
        ...(node.points || [])
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q.toLowerCase());
    }

    function handleSearch(val) {
      searchQuery = val.trim();
      if (searchQuery) {
        branches.forEach((b) => {
          if (b.children && b.children.some((c) => matchesSearch(c, searchQuery))) {
            expandedState[b.id] = true;
          }
        });
        const firstHit = flatNodes.find((n) => matchesSearch(n, searchQuery));
        if (firstHit) {
          selectNode(firstHit.id, false);
        }
      }
      renderMindMap();
    }

    function selectNode(id, rerender = true) {
      selectedNodeId = id;
      const idx = flatNodes.findIndex((n) => n.id === id);
      const node = flatNodes[idx] || mindMapData;

      document.getElementById("insp-counter").textContent = `${idx + 1} / ${flatNodes.length}`;

      const badgeBg =
        node.id === "root"
          ? "#fde047"
          : node.branchColor || node.color || "#b8b8ff";

      const pointsHtml = (node.points || [])
        .map((pt) => `<li>${pt}</li>`)
        .join("");

      document.getElementById("inspector-body").innerHTML = `
        <div class="insp-badge-row">
          <span class="insp-branch-pill" style="background:${badgeBg};">${node.badge}</span>
          <span class="insp-slide-ref">${node.slides}</span>
        </div>
        <h2 class="insp-title">${node.title}</h2>
        <div class="insp-summary">${node.summary}</div>
        <div class="insp-list-title">// Key Slide Points</div>
        <ul class="insp-points">${pointsHtml}</ul>
        <div class="insp-exam-box">
          <span class="insp-exam-kicker">Exam &amp; Case Strategy Tip</span>
          <div>${node.examTip}</div>
        </div>
      `;

      if (rerender) renderMindMap();
    }

    function stepNode(delta) {
      const idx = flatNodes.findIndex((n) => n.id === selectedNodeId);
      const nextIdx = (idx + delta + flatNodes.length) % flatNodes.length;
      const nextNode = flatNodes[nextIdx];

      // Ensure parent branch is expanded if stepping into a leaf
      branches.forEach((b) => {
        if (b.children && b.children.some((c) => c.id === nextNode.id)) {
          expandedState[b.id] = true;
        }
      });

      selectNode(nextNode.id);
    }

    function focusNode(branchId) {
      expandedState[branchId] = true;
      selectNode(branchId);
      const pos = (window._lastPositioned || []).find((p) => p.node.id === branchId);
      const vp = document.getElementById("map-viewport");
      if (pos && vp) {
        const rect = vp.getBoundingClientRect();
        scale = 0.95;
        panX = rect.width / 2 - (pos.x + pos.w / 2) * scale;
        panY = rect.height / 2 - (pos.y + pos.h / 2) * scale;
        applyTransform();
      }
    }

    function applyTransform() {
      const stage = document.getElementById("map-stage");
      stage.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
      document.getElementById("zoom-readout").textContent = `${Math.round(scale * 100)}%`;
    }

    function adjustZoom(delta) {
      const vp = document.getElementById("map-viewport");
      const rect = vp.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const newScale = Math.min(1.6, Math.max(0.42, scale + delta));
      const ratio = newScale / scale;
      panX = cx - (cx - panX) * ratio;
      panY = cy - (cy - panY) * ratio;
      scale = newScale;
      applyTransform();
    }

    function fitMapToViewport() {
      const vp = document.getElementById("map-viewport");
      const positioned = window._lastPositioned || [];
      if (!vp || positioned.length === 0) return;

      let minX = Infinity,
        maxX = -Infinity,
        minY = Infinity,
        maxY = -Infinity;
      positioned.forEach((p) => {
        minX = Math.min(minX, p.x);
        maxX = Math.max(maxX, p.x + p.w);
        minY = Math.min(minY, p.y);
        maxY = Math.max(maxY, p.y + p.h);
      });

      const pad = 48;
      const mapW = maxX - minX + pad * 2;
      const mapH = maxY - minY + pad * 2;
      const rect = vp.getBoundingClientRect();

      if (!rect.width || !rect.height) return;
      scale = Math.min(1.05, rect.width / mapW, rect.height / mapH);
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;

      panX = rect.width / 2 - centerX * scale;
      panY = rect.height / 2 - centerY * scale;
      applyTransform();
    }

    // Pan & Wheel Zoom Listeners
    const viewport = document.getElementById("map-viewport");

    viewport.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      isDragging = true;
      dragMoved = false;
      dragStartX = e.clientX - panX;
      dragStartY = e.clientY - panY;
      viewport.classList.add("grabbing");
    });

    window.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const nextX = e.clientX - dragStartX;
      const nextY = e.clientY - dragStartY;
      if (Math.abs(nextX - panX) > 3 || Math.abs(nextY - panY) > 3) {
        dragMoved = true;
      }
      panX = nextX;
      panY = nextY;
      applyTransform();
    });

    window.addEventListener("pointerup", () => {
      isDragging = false;
      viewport.classList.remove("grabbing");
      setTimeout(() => {
        dragMoved = false;
      }, 20);
    });

    viewport.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const delta = e.deltaY < 0 ? 0.08 : -0.08;
        const newScale = Math.min(1.6, Math.max(0.42, scale + delta));
        const ratio = newScale / scale;
        panX = mx - (mx - panX) * ratio;
        panY = my - (my - panY) * ratio;
        scale = newScale;
        applyTransform();
      },
      { passive: false }
    );

    // Full Tree Outline Modal
    function toggleOutlineModal(open) {
      const overlay = document.getElementById("outline-overlay");
      if (open) {
        const container = document.getElementById("outline-content");
        container.innerHTML = branches
          .map(
            (b) => `
            <div class="outline-branch" style="background:${b.color};">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                <strong>${b.badge} — ${b.title}</strong>
                <span class="insp-slide-ref">${b.slides}</span>
              </div>
              <p style="font-size:0.86rem; margin-bottom:0.55rem;">${b.summary}</p>
              <div style="display:grid; gap:0.45rem;">
                ${(b.children || [])
                  .map(
                    (c) => `
                    <div class="outline-leaf" style="background:var(--study-surface-neutral, #ffffff); border:1.5px solid var(--nb-border); border-radius:6px; padding:0.55rem 0.75rem; font-size:0.84rem;">
                      <div style="display:flex; justify-content:space-between; margin-bottom:0.2rem;">
                        <strong>${c.title}</strong>
                        <span style="font-family:var(--font-body); font-size:0.7rem;">${c.slides}</span>
                      </div>
                      <ul style="padding-left:1.1rem; display:grid; gap:0.2rem;">
                        ${c.points.map((pt) => `<li>${pt}</li>`).join("")}
                      </ul>
                    </div>
                  `
                  )
                  .join("")}
              </div>
            </div>
          `
          )
          .join("");
        overlay.classList.add("open");
        overlay.querySelector(".outline-modal").focus();
      } else {
        overlay.classList.remove("open");
        document.querySelector('[data-action="outline-open"]').focus();
      }
    }

    const actions = {
      expand: expandAllNodes,
      collapse: collapseToMainBranches,
      fit: fitMapToViewport,
      'outline-open': () => toggleOutlineModal(true),
      'outline-close': () => toggleOutlineModal(false),
      'zoom-out': () => adjustZoom(-0.12),
      'zoom-in': () => adjustZoom(0.12),
      previous: () => stepNode(-1),
      next: () => stepNode(1)
    };
    document.querySelectorAll('[data-action]').forEach(button => {
      button.addEventListener('click', () => actions[button.dataset.action]());
    });
    document.querySelectorAll('[data-branch]').forEach(chip => {
      chip.addEventListener('click', () => focusNode(chip.dataset.branch));
      chip.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          focusNode(chip.dataset.branch);
        }
      });
    });
    document.getElementById('search-input').addEventListener('input', event => handleSearch(event.target.value));
    document.getElementById('outline-overlay').addEventListener('click', event => {
      if (event.target === event.currentTarget) toggleOutlineModal(false);
    });
    document.addEventListener('keydown', event => {
      const overlay = document.getElementById('outline-overlay');
      if (!overlay.classList.contains('open')) return;
      if (event.key === 'Escape') toggleOutlineModal(false);
      if (event.key === 'Tab') {
        event.preventDefault();
        overlay.querySelector('[data-action="outline-close"]').focus();
      }
    });
    new ResizeObserver(fitMapToViewport).observe(viewport);
    document.fonts.ready.then(fitMapToViewport);

    // Initialize
    window.addEventListener("resize", fitMapToViewport);
    document.addEventListener("DOMContentLoaded", () => {
      renderMindMap();
      selectNode("root", false);
      fitMapToViewport();
    });
})();
