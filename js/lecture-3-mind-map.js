(() => {
    // Lecture 3 knowledge graph from the supplied mind map.
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 3 • SLIDES 1–21",
      title: "Foundation of Enterprise Architecture",
      sub: "4 Layers, Frameworks & Business–IT Alignment",
      slides: "Slides 1–21",
      summary: "Establishes Enterprise Architecture (EA) as a whole-organisation blueprint connecting business goals, processes, information, applications, and technology—preventing isolated departmental silos and aligning IT investments with measurable business value.",
      points: [
        "Outcome 1 (Explain): Describe the purpose of EA and recognise selected frameworks (TOGAF, Zachman, FEAF, DoDAF, MODAF).",
        "Outcome 2 (Distinguish): Explain the Business, Data, Application, and Technology layers and how they depend on one another.",
        "Outcome 3 (Connect): Explain how EA aligns IT decisions with business strategy through continuous feedback.",
        "Core Principle: EA is not documentation for its own sake—it helps an organisation make coordinated decisions."
      ],
      examTip: "Always frame EA answers around whole-organisation coordination across all four layers (Business, Data, Application, Technology) rather than treating a problem as one isolated software bug."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#fda4af",
        badge: "01 • WHY EA MATTERS",
        title: "Problem & City Plan Analogy",
        sub: "5 Siloed Systems & Whole-Org View",
        slides: "Slides 2, 4–6",
        summary: "Shows why organisations fail when separate departments buy or build tools independently, and uses the City Plan analogy to explain how EA coordinates macro structure without dictating every line of code.",
        points: [
          "Organisational IT failures rarely stem from bad code in one app; they stem from a lack of coordination across the whole organisation.",
          "EA connects organisational purpose with the processes, information, applications, and platforms that support it.",
          "Without a shared plan, local decisions seem reasonable to each department but create enterprise-wide friction."
        ],
        examTip: "Use the City Plan analogy (Slide 6) to explain EA boundaries: it defines zoning and utilities, not how to lay every brick or write every line of code.",
        children: [
          {
            id: "b1_1",
            color: "#ffe4e6",
            badge: "RUNNING CASE",
            title: "One University, Five Separate Systems",
            sub: "Siloed intake, records & finance",
            slides: "Slide 2",
            summary: "Five university systems work individually yet fail together due to manual re-entry, delays, and conflicting numbers.",
            points: [
              "1. Admissions: Applicant details are entered here first.",
              "2. Student Records: The exact same student is registered again manually.",
              "3. Finance: Payment status is stored elsewhere, blocking registration checks.",
              "4. Learning Platform (LMS): Course enrolment updates arrive late.",
              "5. Reporting: Student headcount numbers differ across departments."
            ],
            examTip: "Reference these 5 university systems as concrete examples whenever asked to illustrate lack of EA coordination."
          },
          {
            id: "b1_2",
            color: "#ffe4e6",
            badge: "3 PAIN POINTS",
            title: "Three Problems EA Solves",
            sub: "Duplication, Siloed Data & Costly Change",
            slides: "Slide 5",
            summary: "Identifies the three structural issues caused by uncoordinated departmental IT decisions.",
            points: [
              "Duplication: Different departments independently buy or build similar systems.",
              "Disconnected Data: Systems define, format, and store the same information differently.",
              "Costly Change: A small business rule change requires expensive modifications across many tightly coupled systems.",
              "EA Solution: Makes dependencies visible, coordinates decisions, and reduces avoidable inconsistency."
            ],
            examTip: "Memorise these exact three terms—Duplication, Disconnected Data, Costly Change—for 3-mark or 6-mark 'Why does an organisation need EA?' questions."
          },
          {
            id: "b1_3",
            color: "#ffe4e6",
            badge: "CONCEPT & SCOPE",
            title: "EA Definition & City Plan Analogy",
            sub: "Macro blueprint vs. micro code",
            slides: "Slides 4, 6",
            summary: "Defines EA across three core questions and contrasts macro enterprise planning with low-level coding.",
            points: [
              "Business: What are we trying to achieve? | Info & Systems: What information and apps are needed? | Technology: What platforms support them?",
              "City Plan Analogy: Land use, roads, utilities, and public services must work together—just like processes, data, apps, and infrastructure.",
              "Important Distinction: EA guides coordination and architectural decisions; it does NOT prescribe every line of code and is NOT just an IT diagram."
            ],
            examTip: "Explicitly state what EA is NOT ('not just a diagram of IT' and 'does not prescribe every line of code') to earn full conceptual marks."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#fde047",
        badge: "02 • EA FRAMEWORKS",
        title: "TOGAF, Zachman & Sector Models",
        sub: "Process (HOW) vs. Classification (WHAT)",
        slides: "Slides 7–8",
        summary: "Clarifies that frameworks are tools for organising architecture work—not the architecture itself—and contrasts process-oriented TOGAF against classification-oriented Zachman.",
        points: [
          "Frameworks help teams structure how they build architecture and what viewpoints they document.",
          "Other sector frameworks include FEAF, DoDAF, and MODAF (used in government and defence contexts).",
          "For Lecture 3, focus on the high-level purpose of each framework rather than detailed mechanics."
        ],
        examTip: "Never confuse an EA framework (the recipe/structure) with the Enterprise Architecture itself (the actual blueprint of the organisation).",
        children: [
          {
            id: "b2_1",
            color: "#fef9c3",
            badge: "ROLE & DOMAIN",
            title: "Frameworks Are Not the Architecture",
            sub: "Structure + FEAF, DoDAF, MODAF",
            slides: "Slide 7",
            summary: "Explains the role of EA frameworks and introduces recognised industry and government standards.",
            points: [
              "Purpose: Provides a shared structure for describing, organising, and developing enterprise architecture.",
              "TOGAF: Features a structured Architecture Development Method (ADM).",
              "Zachman: Provides a classification matrix for organising architectural descriptions from different perspectives.",
              "Government & Defence Frameworks: FEAF (Federal), DoDAF (US Defense), and MODAF (UK Ministry of Defence)."
            ],
            examTip: "If asked to name three EA frameworks beyond TOGAF and Zachman, list FEAF, DoDAF, and MODAF."
          },
          {
            id: "b2_2",
            color: "#fef9c3",
            badge: "CORE CONTRAST",
            title: "TOGAF vs. Zachman Distinction",
            sub: "Steps/Activities vs. Viewpoints/Aspects",
            slides: "Slide 8",
            summary: "Contrasts the two most famous EA frameworks by the fundamental question each answers.",
            points: [
              "TOGAF (Process-Oriented — HOW): Helps structure the lifecycle work of developing and evolving an architecture via ADM. Asks: 'What steps and activities guide the architecture work?'",
              "Zachman (Classification-Oriented — WHAT): Helps organise descriptions and questions used to understand an enterprise across stakeholder perspectives. Asks: 'What aspects and viewpoints must be represented?'"
            ],
            examTip: "Quote both diagnostic questions word-for-word in a 4-mark comparison between TOGAF and Zachman."
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#86efac",
        badge: "03 • FOUR EA LAYERS",
        title: "Business, Data, App & Tech Layers",
        sub: "Connected Views of One Organisation",
        slides: "Slides 9–13",
        summary: "Breaks down the four core EA layers—Business, Data, Application, and Technology—emphasising that they are interconnected views of one organisation rather than four separate IT projects.",
        points: [
          "Top-down purpose flows from Business goals → Data needs → Applications → Technology platforms.",
          "Bottom-up execution flows from reliable Technology → integrated Applications → trusted Data → Business outcomes.",
          "Each layer answers a distinct diagnostic question and depends directly on the others."
        ],
        examTip: "Always describe the 4 layers in strict top-down order: Business → Data → Application → Technology.",
        children: [
          {
            id: "b3_1",
            color: "#dcfce7",
            badge: "LAYER 1",
            title: "Business Architecture",
            sub: "Goals, processes, roles & capabilities",
            slides: "Slide 10",
            summary: "Defines business goals, capabilities, end-to-end processes, roles, and responsibilities before software is built.",
            points: [
              "Focus: Business goals, capabilities, processes, roles, and decision responsibilities.",
              "University Example: How a student moves from application to admission, enrolment, and graduation.",
              "Diagnostic Question: 'Are the processes clear and consistent before we automate them?'",
              "Key Warning: If we automate a confusing process, we simply make the confusion happen faster."
            ],
            examTip: "Include the warning 'automating a confusing process makes confusion faster' whenever a case proposes buying software to fix messy rules."
          },
          {
            id: "b3_2",
            color: "#dcfce7",
            badge: "LAYER 2",
            title: "Data Architecture",
            sub: "Definitions, ownership & trusted source",
            slides: "Slide 11",
            summary: "Establishes what information exists, what terms mean, who owns each record, and how data is shared.",
            points: [
              "Focus: What information exists, what it means (semantics), who owns it, and how it flows.",
              "University Example: Ensuring student ID, programme code, and payment status are consistent across systems.",
              "Diagnostic Question: 'Which system is the trusted source (authoritative source of truth) for each important data item?'",
              "Key Warning: Connecting systems technically is not enough if they interpret data differently."
            ],
            examTip: "Highlight 'trusted source of truth' and 'consistent meaning'—crucial when linking Finance and Student Records."
          },
          {
            id: "b3_3",
            color: "#dcfce7",
            badge: "LAYER 3",
            title: "Application Architecture",
            sub: "Software systems & clean interactions",
            slides: "Slide 12",
            summary: "Defines what software applications are needed and how they exchange updates without fragile duplication.",
            points: [
              "Focus: What software systems are needed and how they interact with one another.",
              "University Example: Admissions, student records, finance, and the learning platform exchanging updates.",
              "Diagnostic Question: 'Can systems share information without fragile duplication and manual re-entry?'",
              "Key Principle: The goal is a coherent set of applications—not necessarily one giant monolithic application."
            ],
            examTip: "Note that Application Architecture aims for 'a coherent set of applications', NOT forcing everything into one giant monolith."
          },
          {
            id: "b3_4",
            color: "#dcfce7",
            badge: "LAYER 4",
            title: "Technology Architecture",
            sub: "Hosting, networks, cloud & security",
            slides: "Slide 13",
            summary: "Provides the underlying infrastructure, platforms, networks, devices, and security foundations that run applications.",
            points: [
              "Focus: Hosting, networks, databases, cloud platforms, end-user devices, and security foundations.",
              "University Example: Where systems run, how users access them, and how service availability is supported.",
              "Diagnostic Question: 'Can the environment meet security, availability, performance, and growth needs?'",
              "Key Principle: Choosing a cloud platform is just one decision within the wider four-layer architecture."
            ],
            examTip: "Link Technology Architecture directly to non-functional qualities: security, availability, performance, and scalability."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • WORKED CASE",
        title: "One Change, Four Layers Case",
        sub: "Online Registration & Dependencies",
        slides: "Slides 14, 19",
        summary: "Applies all four EA layers simultaneously to a single university initiative—introducing online course registration—and traces how changes in one layer create dependencies in another.",
        points: [
          "A successful solution requires Business, Data, Application, and Technology views to fit together.",
          "Mini-Activity Challenge (Slide 19): Map the registration system across all 4 layers and explain one concrete dependency between two layers."
        ],
        examTip: "In a 6–10 mark case question, map the scenario across all 4 layers AND explicitly state at least one inter-layer dependency.",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "4-LAYER MAP",
            title: "Online Course Registration Blueprint",
            sub: "Rules, data, APIs & peak hosting",
            slides: "Slide 14",
            summary: "Shows what must align across all four layers for online course registration to succeed.",
            points: [
              "Business: Students register during a defined period; academic prerequisites and class seat limits apply.",
              "Data: Student status, passed prerequisites, course offerings, and remaining available seats must be accurate.",
              "Application: Registration portal, student records, and finance systems exchange relevant updates automatically.",
              "Technology: Hosting and network capacity must support high peak registration traffic reliably."
            ],
            examTip: "Use these four exact bullet points as a ready-made template for any university portal case study."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "DEPENDENCIES",
            title: "Tracing Cross-Layer Dependencies",
            sub: "How one layer relies on another",
            slides: "Slides 9, 14, 19",
            summary: "Demonstrates concrete ripple effects between adjacent EA layers during course registration.",
            points: [
              "Business ↔ Data: Prerequisite and seat-cap policies (Business) cannot be enforced unless grade history and live seat counts (Data) are accurate.",
              "Data ↔ Application: Single source of truth for payment status (Data) requires real-time API exchange between Finance and Registration (Application).",
              "Application ↔ Technology: Even well-integrated APIs (Application) will time out at 9:00 AM unless server and network capacity (Technology) scale for peak traffic."
            ],
            examTip: "Pick the Application ↔ Technology peak-load dependency or Data ↔ Application payment-sync dependency for crystal-clear exam explanations."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#b8b8ff",
        badge: "05 • ALIGNMENT",
        title: "Business–IT Alignment Loop",
        sub: "Value Traceability & Unaligned Domino",
        slides: "Slides 15–17",
        summary: "Explains how EA aligns IT investments with business outcomes through an ongoing four-stage conversation, and contrasts this with the costly domino effect of unaligned local IT purchasing.",
        points: [
          "IT choices should support organisational goals—not exist for their own sake.",
          "Alignment means being able to explain how every IT decision contributes to a measurable business outcome.",
          "Alignment is a continuous feedback loop, never a one-time sign-off."
        ],
        examTip: "Always prove alignment with three elements: Business Goal → IT Response → Measurable Evidence of Value.",
        children: [
          {
            id: "b5_1",
            color: "#eeeeff",
            badge: "VALUE CHAIN",
            title: "Goal → IT Response → Evidence",
            sub: "Tracing IT to business outcomes",
            slides: "Slide 15",
            summary: "Connects strategic intent to technical execution and observable operational proof.",
            points: [
              "1. Business Goal: Improve the student registration experience and reduce avoidable delays.",
              "2. IT Response: Connect registration, course data, and payment status; plan infrastructure for peak demand.",
              "3. Evidence of Value: Fewer manual staff corrections, clearer real-time status, and a more reliable process."
            ],
            examTip: "Never stop at describing the technical IT response—always state the 'Evidence of Value' KPI that proves it worked."
          },
          {
            id: "b5_2",
            color: "#eeeeff",
            badge: "4-STAGE LOOP",
            title: "Alignment Is a Continuous Conversation",
            sub: "Goals → Arch → Delivery → Feedback",
            slides: "Slide 16",
            summary: "Shows how strategy and architecture continuously inform one another across four iterative stages.",
            points: [
              "Stage 1 — Business Goals: What outcome matters to the organisation?",
              "Stage 2 — Architecture: What capabilities, data, and systems are needed?",
              "Stage 3 — Delivery: Build, integrate, and deploy the solution.",
              "Stage 4 — Feedback: Did the solution deliver value? Feedback reshapes future priorities and architecture."
            ],
            examTip: "Emphasise that Feedback loops back to Business Goals and Architecture—alignment is ongoing, not a one-off project sign-off."
          },
          {
            id: "b5_3",
            color: "#eeeeff",
            badge: "DOMINO EFFECT",
            title: "What Happens When IT Is Not Aligned?",
            sub: "Local choices → Enterprise pain",
            slides: "Slide 17",
            summary: "Traces the three-step chain reaction when departments select software independently without EA oversight.",
            points: [
              "Step 1 (Local Decisions): Departments select tools independently based only on immediate local needs.",
              "Step 2 (Enterprise Problems): Duplicated records, incompatible systems, extra cost, and slow change cycles emerge.",
              "Step 3 (Business Consequences): Students face delays; staff manually re-enter data; leaders cannot trust reports."
            ],
            examTip: "Use this exact 3-step chain (Local Decisions → Enterprise Problems → Business Consequences) in essay questions on unaligned IT."
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#7dd3fc",
        badge: "06 • DECISIONS & EXIT",
        title: "Tech Choices, Takeaways & Exit Q",
        sub: "3 Selection Filters & 1-Sentence Model",
        slides: "Slides 18, 20–21",
        summary: "Equips architects to evaluate popular technologies objectively across business, lifecycle cost, and technical/organisational fit, and synthesises the lecture's three core takeaways and exit question.",
        points: [
          "A popular or trendy technology is not automatically the right choice for an enterprise.",
          "Sound technology selection balances business value, total lifecycle cost, operational risk, and wider architectural fit."
        ],
        examTip: "When evaluating any new tool in an exam case, check all 5 lifecycle costs—especially integration, training, and exit costs.",
        children: [
          {
            id: "b6_1",
            color: "#e0f2fe",
            badge: "3 FILTERS",
            title: "How EA Guides Technology Choices",
            sub: "Business, Lifecycle Cost & Tech/Org Fit",
            slides: "Slide 18",
            summary: "Three balanced criteria for evaluating any proposed software, cloud platform, or tool.",
            points: [
              "1. Business Fit: Does it support required capabilities, end users, and long-term strategic direction?",
              "2. Cost & Lifecycle: Consider all 5 cost stages—acquisition, integration, maintenance, training, and exit costs.",
              "3. Technical & Organisational Fit: Can it integrate with current systems? Are internal skills, vendor support, and security available?"
            ],
            examTip: "Mentioning 'exit costs' (avoiding vendor lock-in) sets your answer apart in technology evaluation questions."
          },
          {
            id: "b6_2",
            color: "#e0f2fe",
            badge: "SUMMARY & EXIT",
            title: "3 Takeaways & Exit Question Answer",
            sub: "LMS–Student Record silo solution",
            slides: "Slides 20–21",
            summary: "Consolidates the three foundational rules of EA and provides the one-sentence exam answer for the disconnected learning platform scenario.",
            points: [
              "Takeaway 1: EA gives the whole view (goals, processes, info, apps, tech).",
              "Takeaway 2: The layers depend on one another (a change in one affects the others).",
              "Takeaway 3: Alignment is about value (IT decisions traceable to goals and reviewed via feedback).",
              "Exit Question Answer (Slide 21): The university should have considered the Application and Data layers before purchasing the platform, because EA would have defined shared enrolment data standards and required integration interfaces upfront so both systems could exchange data automatically."
            ],
            examTip: "For the Exit Question, name BOTH the Application layer (system integration) and Data layer (shared enrolment definitions) in one clear sentence."
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
