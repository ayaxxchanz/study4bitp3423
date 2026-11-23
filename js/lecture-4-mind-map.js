(() => {
    // Lecture 4 knowledge graph from the supplied mind map.
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 4 • SLIDES 1–30",
      title: "Advanced Topics in EA",
      sub: "From Understanding to Architecture-Led Change",
      slides: "Slides 1–30",
      summary: "Transitions from understanding current architecture (Lecture 3) to executing safe, architecture-led change across Business, Data, Applications, and Technology using target-state capability definitions, gap analysis, dependency-driven roadmaps, governance decision rights, and a simplified TOGAF ADM.",
      points: [
        "Running Case: Improving a university's online course registration (long waits, repeated data entry, conflicting Finance vs. Student Affairs records).",
        "Outcome 1: Explain baseline & target-state architecture and construct a sequenced roadmap.",
        "Outcome 2: Use gap analysis to identify missing capabilities, required changes, and cross-layer dependencies.",
        "Outcome 3: Explain architecture governance & decision rights, and apply a simplified TOGAF ADM to a practical case."
      ],
      examTip: "Anchor every Lecture 4 exam answer in the university registration case across all four EA layers (Business, Data, Applications, Technology) rather than treating EA as pure software buying."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#fda4af",
        badge: "01 • TARGET & METRICS",
        title: "Baseline, Target & Success",
        sub: "Current vs. Future Capability & KPIs",
        slides: "Slides 2–3, 5–9",
        summary: "Distinguishes a naive software purchase ('buy a new portal') from a true target-state architecture, which defines desired organisational capabilities and measurable outcomes across all four EA layers before design begins.",
        points: [
          "Lecture 3 Recap: Business (rules/responsibilities), Data (student/course/fee/enrolment records), Applications (portal, student & finance systems), Technology (hosting, network, identity, security).",
          "Core Rule (Slide 5): 'Buy a new system' is a solution idea—NOT a target state; a target state describes desired organisational capability (e.g., one reliable enrolment status across systems).",
          "People, policy, and operational support are integral parts of the target state—it is more than a diagram."
        ],
        examTip: "Quote Slide 5 directly when critiquing tech-first proposals: '\"Buy a new system\" is a solution idea—not a target state.'",
        children: [
          {
            id: "b1_1",
            color: "#ffe4e6",
            badge: "BASE VS TARGET",
            title: "Baseline vs. Target State",
            sub: "Current reality vs. agreed future",
            slides: "Slides 3, 6–7",
            summary: "Compares how the organisation works today against the agreed future way of working across all four EA layers.",
            points: [
              "Baseline (Current State): Siloed portals, long queues, repeated data entry, conflicting Finance vs. Student Affairs records.",
              "Target State (Future State): Agreed future way of working responding to business goals and constraints.",
              "4 Layers in Target State: Business (clear ownership & simpler registration steps), Data (agreed definitions & authoritative records), Applications (reliable exchange), Technology (resilient, secure, scalable hosting)."
            ],
            examTip: "Always show how all four layers (Business, Data, Applications, Technology) plus people and policy change together."
          },
          {
            id: "b1_2",
            color: "#ffe4e6",
            badge: "CONNECTED VIEW",
            title: "Target View: Connected Registration",
            sub: "4-step flow + built-in ops",
            slides: "Slide 9",
            summary: "Illustrates the target-state registration flow where one portal connects to authoritative student data and controlled Finance APIs.",
            points: [
              "1. Student uses one unified registration portal.",
              "2. Portal checks authoritative student and course data.",
              "3. Finance status is exchanged through controlled integration.",
              "4. A shared, consistent enrolment status is visible to all authorised users.",
              "Built-in Foundation: Monitoring, access control, backup, and support are designed in from day one."
            ],
            examTip: "Mentioning the built-in operational foundation (monitoring, access control, backup, support) earns extra architectural marks."
          },
          {
            id: "b1_3",
            color: "#ffe4e6",
            badge: "SUCCESS METRICS",
            title: "Define Success Before Designing",
            sub: "Baseline vs. target outcomes",
            slides: "Slide 8",
            summary: "Establishes measurable baseline and target KPIs across four stakeholder perspectives before choosing technology tools.",
            points: [
              "Student: Confirm course enrolment online without repeated counter visits.",
              "Staff: Fewer duplicate data entries and manual record corrections.",
              "Management: Trustworthy, timely headcount and fee-clearance reporting.",
              "Service: Reliable uptime and fast access during peak registration weeks.",
              "Rule: Set a measurable baseline (today's metric) and a concrete target for each outcome."
            ],
            examTip: "Pair every proposed change with Slide 29's four exact KPIs: completion time, error rate, failed transactions, and support volume."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#86efac",
        badge: "02 • ROADMAPS",
        title: "Transitions & Roadmaps",
        sub: "Stages, Dependencies & Controls",
        slides: "Slides 10–13",
        summary: "Bridges the gap between baseline and target state through safe, value-delivering transition architectures sequenced around strict dependency rules and stage-gate controls.",
        points: [
          "Target state is the intended end point; a transition state is a safe, useful intermediate stage on the way.",
          "Not every legacy system can be replaced at once—each transition must deliver value and reduce risk.",
          "Roadmaps connect technical work to business outcomes across people, process, data, application, and technology changes."
        ],
        examTip: "Never draw a roadmap as a raw software Gantt chart; explicitly justify why Stage A must finish before Stage B using dependencies.",
        children: [
          {
            id: "b2_1",
            color: "#dcfce7",
            badge: "TRANSITIONS",
            title: "Target vs. Transition Architecture",
            sub: "Safe incremental value stages",
            slides: "Slides 10–11",
            summary: "Explains why large transformations move through intermediate transition states rather than risky all-at-once replacement.",
            points: [
              "Path: Baseline → Transition 1 → Transition 2 → Target State.",
              "Transition Architecture: A safe, useful stage allowing legacy coexistence while delivering incremental value and reducing cutover risk.",
              "Architecture Roadmap: A sequenced plan showing initiatives, timing, dependencies, and milestones across people, process, data, apps, and tech."
            ],
            examTip: "Contrast 'Target State (intended end point)' with 'Transition State (safe intermediate stage)' in 4-mark definition questions."
          },
          {
            id: "b2_2",
            color: "#dcfce7",
            badge: "DEPENDENCIES",
            title: "5 Mandatory Dependency Rules",
            sub: "Ownership & data before code",
            slides: "Slide 12",
            summary: "Five strict ordering rules that prevent premature automation from amplifying dirty data or unclear accountability.",
            points: [
              "1. Agree data ownership BEFORE automating data exchange.",
              "2. Clean critical records BEFORE migration.",
              "3. Design integration BEFORE connecting production systems.",
              "4. Test security, load, and recovery BEFORE peak registration.",
              "5. Prepare staff and student support BEFORE launch."
            ],
            examTip: "Memorise these exact 5 dependency rules—they directly answer 'Build a roadmap with dependencies' in exam cases."
          },
          {
            id: "b2_3",
            color: "#dcfce7",
            badge: "3-STAGE PLAN",
            title: "3-Stage Roadmap & 5 Stage Controls",
            sub: "Stabilise → Connect → Expand",
            slides: "Slide 13",
            summary: "Applies a three-stage transformation sequence governed by five mandatory control fields at every stage.",
            points: [
              "Stage 1 (Stabilise): Map processes, fix data ownership, clean critical records, and baseline service KPIs.",
              "Stage 2 (Connect): Build and test controlled integrations; run a live pilot with one faculty.",
              "Stage 3 (Expand): Roll out in waves, monitor outcomes, and retire redundant manual steps.",
              "5 Controls at Each Stage: Owner, Deliverable, Risk, Measure, and Decision Gate."
            ],
            examTip: "Listing all 5 stage controls (Owner, Deliverable, Risk, Measure, Decision Gate) makes any roadmap answer exam-proof."
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#fde047",
        badge: "03 • PRIORITISATION",
        title: "Prioritisation & Readiness",
        sub: "Value × Feasibility & Cutover Risk",
        slides: "Slides 14–15",
        summary: "Evaluates which transformation initiatives to tackle first using a Value vs. Feasibility matrix, while safeguarding peak operational windows with fallback, support, and rollback plans.",
        points: [
          "Prioritisation weighs Value against Feasibility alongside risk, urgency, regulatory compliance, and dependencies.",
          "Transformation stalls when teams ignore unclear data ownership, legacy API limits, peak registration sensitivity, or user training."
        ],
        examTip: "Always mention 'fallback, support, and rollback plans' when advising on university go-live timing around peak registration weeks.",
        children: [
          {
            id: "b3_1",
            color: "#fef9c3",
            badge: "2×2 MATRIX",
            title: "Value vs. Feasibility Matrix",
            sub: "4 quadrants + extra filters",
            slides: "Slide 14",
            summary: "Classifies candidate initiatives into four action quadrants based on business value and implementation feasibility.",
            points: [
              "High Value + Feasible → Prioritise early (immediate strategic wins, e.g., naming data owners).",
              "High Value + Difficult → Plan carefully, de-risk, or split into stages (e.g., Finance-to-Records sync).",
              "Low Value + Difficult → Challenge or defer.",
              "Low Value + Easy → Do only if it supports a real operational need.",
              "Additional Filters: Also consider risk, urgency, compliance, and technical dependencies."
            ],
            examTip: "Explain why a 'High Value + Difficult' initiative must be split into transition stages rather than skipped."
          },
          {
            id: "b3_2",
            color: "#fef9c3",
            badge: "CHANGE RISKS",
            title: "Roadmap Risks & Change Readiness",
            sub: "Fallback, support & rollback",
            slides: "Slide 15",
            summary: "Identifies four recurring roadmap risks in the university case and three mandatory operational readiness plans.",
            points: [
              "Risk 1: Data quality and ownership remain unclear across units.",
              "Risk 2: Legacy systems have limited API or integration options.",
              "Risk 3: Peak registration weeks leave almost zero room for service disruption.",
              "Risk 4: Staff need training; students need clear, timely communication.",
              "Readiness Safeguards: Approved manual/assisted fallback plans, briefed support desk, and tested rollback plans."
            ],
            examTip: "Specifically highlight the 'peak registration window constraint' when recommending wave rollouts outside semester start weeks."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • GAP ANALYSIS",
        title: "Gap Analysis Across Layers",
        sub: "Missing Capabilities & Case Table",
        slides: "Slides 16–18",
        summary: "Compares baseline and target states to uncover missing organisational capabilities—not merely missing software—across business, data, application, technology, people, and governance layers.",
        points: [
          "Gap Analysis compares Baseline vs. Target State to identify missing capabilities, evidence, impact, priority, and actions.",
          "Most painful enterprise failures stem from non-technical gaps (unclear process ownership, conflicting data definitions, missing exception governance)."
        ],
        examTip: "In any 3-gap exam question, deliberately pick gaps across DIFFERENT layers (e.g., 1 Data gap, 1 Application gap, 1 Business/Governance gap).",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "6 DIMENSIONS",
            title: "Beyond Tech: 6 Gap Dimensions",
            sub: "Business, Data, App, Tech, People, Gov",
            slides: "Slides 16, 18",
            summary: "Categorises transformation gaps across six socio-technical layers so non-software blockers are surfaced early.",
            points: [
              "Business Gap: Unclear process ownership across faculties and administrative units.",
              "Data Gap: Duplicate or inconsistent student and enrolment records.",
              "Application Gap: No reliable automated system-to-system exchange.",
              "Technology Gap: Weak monitoring, peak-load handling, or recovery capability.",
              "Governance Gap: No formal approval route for policy or architecture exceptions.",
              "People Gap (Slide 16): Missing staff training, support capacity, or operational readiness."
            ],
            examTip: "Use Slide 18's exact phrases ('unclear process ownership', 'duplicate records', 'no approval route for exceptions')."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "CASE TABLE",
            title: "Registration Case Gap Table",
            sub: "Current → Target → Action → Dep",
            slides: "Slide 17",
            summary: "Structured five-row gap analysis for the university's inconsistent enrolment status problem.",
            points: [
              "Current (Baseline): Each system (Admissions, Records, Finance, LMS) stores a different enrolment status.",
              "Target State: One agreed enrolment status with a clearly defined authoritative source of truth.",
              "Identified Gap: Shared data definition, named ownership, and automated integration rules are missing.",
              "Required Action: Agree status meaning and owner; design controlled API exchange; test reconciliation.",
              "Critical Dependency: Resolve data definitions and ownership rules BEFORE building full automation."
            ],
            examTip: "Replicate this 5-row structure (Current / Target / Gap / Action / Dependency) whenever asked to perform a gap analysis."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#b8b8ff",
        badge: "05 • GOVERNANCE",
        title: "Architecture Governance",
        sub: "Roles, Review Gate & Anti-Patterns",
        slides: "Slides 19–22",
        summary: "Establishes principles, decision rights, and lightweight review points to align changes with target architecture, manage risk exceptions transparently, and prevent organisational drift.",
        points: [
          "Checks proposed changes against agreed architecture principles, balancing value, cost, risk, security, and standards.",
          "Records exceptions and explicitly documents who accepted the residual risk.",
          "Guiding Rule (Slide 19): Governance should enable good decisions—not create paperwork."
        ],
        examTip: "Always pair a governance decision with its accountable role owner (e.g., Data Owner approves data definitions; Steering Group approves cross-unit exceptions).",
        children: [
          {
            id: "b5_1",
            color: "#eeeeff",
            badge: "5 ROLES",
            title: "Governance Roles & Decision Rights",
            sub: "Business, Data, Architect, IT/Sec, Steering",
            slides: "Slide 20",
            summary: "Assigns clear accountability across five governance roles so decisions do not stall or fall between departments.",
            points: [
              "Business Owner: Accountable for business outcomes and end-to-end process rules.",
              "Data Owner: Defines data meaning, quality standards, and access rules.",
              "Architect: Checks cross-layer alignment across Business, Data, Apps, and Technology.",
              "IT / Security Teams: Assess integration design, operational readiness, and security controls.",
              "Steering Group: Resolves major cross-unit trade-offs and approves formal exceptions."
            ],
            examTip: "Contrast Data Owner (meaning & access rules) with IT/Security Teams (technical controls & operations)."
          },
          {
            id: "b5_2",
            color: "#eeeeff",
            badge: "REVIEW GATE",
            title: "Principles & Architecture Review Gate",
            sub: "6 check criteria & 3 outcomes",
            slides: "Slide 21",
            summary: "Evaluates proposed designs against agreed principles using six review criteria to reach one of three formal decisions.",
            points: [
              "Example Principles: (1) Authoritative student data has a named owner; (2) Integrate through approved, documented interfaces.",
              "6 Review Checkpoints: Business fit, Data, Integration, Security, Operations, and Cost.",
              "3 Possible Decisions: Approve, Revise & Resubmit, or Approve a Documented Exception (with named risk acceptor)."
            ],
            examTip: "Mentioning 'Approve a documented exception' shows that governance handles urgent real-world trade-offs without shadow IT."
          },
          {
            id: "b5_3",
            color: "#eeeeff",
            badge: "NO GOVERNANCE",
            title: "5 Symptoms When Governance Is Absent",
            sub: "Shadow IT, drift & tech debt",
            slides: "Slide 22",
            summary: "Five predictable failure modes that emerge when an organisation operates without architecture governance.",
            points: [
              "1. Similar software tools are purchased repeatedly across departments (duplication).",
              "2. Data definitions drift apart across units (conflicting status codes).",
              "3. Security and operational support responsibilities are unclear during incidents.",
              "4. Short-term point-to-point fixes accumulate technical debt and make future change harder.",
              "5. Nobody can explain why a key architectural decision or exception was made."
            ],
            examTip: "Use these 5 points directly for any question asking 'Explain the consequences of weak or absent architecture governance.'"
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#7dd3fc",
        badge: "06 • TOGAF ADM & CASE",
        title: "TOGAF ADM, Artefacts & Case",
        sub: "Iterative Cycle, Products & Mistakes",
        slides: "Slides 23–30",
        summary: "Applies an adaptable, iterative TOGAF Architecture Development Method (ADM) from vision to governed change, supported by five core work products, six anti-patterns to avoid, and the complete university advisory solution.",
        points: [
          "TOGAF is an EA standard/framework; ADM is its central iterative development method from vision to change.",
          "Must be adapted to scope, scale, risk, and organisational capacity—never followed mechanically.",
          "Requirements Management operates continuously across all phases."
        ],
        examTip: "Emphasise two traits of TOGAF ADM in essays: it is iterative (revisit phases as you learn) and adaptable (tailored to scope and capacity).",
        children: [
          {
            id: "b6_1",
            color: "#e0f2fe",
            badge: "ADM CYCLE",
            title: "Simplified TOGAF ADM & University Case",
            sub: "Prelim → A → B–D → E–F → G–H",
            slides: "Slides 23–25",
            summary: "Maps the simplified TOGAF ADM cycle onto the six-step university registration transformation.",
            points: [
              "Preliminary Phase: Agree how architecture work will be governed.",
              "Phase A (Architecture Vision): Define scope, stakeholders, and target outcomes (reduce registration friction & improve record consistency).",
              "Phases B–D (Core Architectures): Define Business, Information Systems (Data + App), and Technology baseline/target states.",
              "Phases E–F (Solutions & Migration): Compare options, sequence a single-faculty pilot, and plan the dependency-ordered roadmap.",
              "Phases G–H (Governance & Change): Govern delivery against principles and manage ongoing requirements/changes iteratively."
            ],
            examTip: "Always include 'Continuous Requirements Management' underpinning Phases A through H."
          },
          {
            id: "b6_2",
            color: "#e0f2fe",
            badge: "ARTEFACTS & TRAPS",
            title: "5 Work Products & 6 Common Mistakes",
            sub: "Essential docs vs. anti-patterns",
            slides: "Slides 26–27",
            summary: "Lists the five practical artefacts produced during EA change alongside six transformation mistakes to avoid.",
            points: [
              "5 Work Products (Slide 26): Architecture Vision, Baseline/Target Views, Gap Analysis, Roadmap, and Governance Record.",
              "6 Mistakes to Avoid (Slide 27): (1) Jumping to a product before agreeing target; (2) Treating target as a wish list; (3) Ignoring data ownership & process change; (4) Roadmap with no dependencies/owners; (5) Governance as final sign-off only; (6) Following a framework mechanically."
            ],
            examTip: "Memorise the 5 Work Products—they form a clean checklist for structuring an enterprise architecture deliverable."
          },
          {
            id: "b6_3",
            color: "#e0f2fe",
            badge: "CASE SOLUTION",
            title: "Student Challenge Worked Solution",
            sub: "5-task university advisory answer",
            slides: "Slides 28–30",
            summary: "Complete five-part model answer advising the university on target state, gaps, roadmap, governance, and TOGAF ADM.",
            points: [
              "Target State: One portal; governed student data; approved API integration; monitored, secure service.",
              "Three Gaps: Unclear data owner; inconsistent enrolment status; untested integration/recovery.",
              "3-Stage Roadmap: Agree rules & baseline (Stabilise) → Pilot integration (Connect) → Phased wave rollout (Expand).",
              "Governance & Measures: Approve data definitions (Data/Business Owner) & integration/security design (Architect/IT); measure completion time, error rate, failed transactions, and support volume."
            ],
            examTip: "Keep Slide 29's four exact KPIs (completion time, error rate, failed transactions, support volume) ready as plug-and-play metrics for any case question."
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
