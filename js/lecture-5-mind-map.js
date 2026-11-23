(() => {
    // Lecture 5 knowledge graph from the supplied mind map.
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 5 • SLIDES 1–25",
      title: "Advanced Technologies Part 1",
      sub: "Applications, Feasibility & Adoption",
      slides: "Slides 1–25",
      summary: "Focuses on choosing technology for a real operational problem—rather than adopting technology just because it is new—by evaluating capabilities, 4-pillar feasibility, simpler alternatives, and real-world adoption cases.",
      points: [
        "Core Principle: Choose technology for a real problem—not a technology looking for a use.",
        "Outcome 1 (Applications): Explain capabilities and practical uses of Blockchain, IoT, and XR.",
        "Outcome 2 (Feasibility): Evaluate technical, financial, organisational, and user-related considerations.",
        "Outcome 3 (Adoption Cases): Analyse real cases and recommend Adopt, Pilot, Defer, or Reject."
      ],
      examTip: "Every Lecture 5 case recommendation must begin with the real problem and baseline, compare simpler alternatives, check all 4 feasibility pillars, and end with an evidence-backed verdict."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#fda4af",
        badge: "01 • POSITIONING",
        title: "Positioning & Problem Fit",
        sub: "Central Question & PCE Triad",
        slides: "Slides 1–5",
        summary: "Moves from technology awareness (Lecture 1) to an adoption decision (Part 1) before implementation (Part 2), anchored in whether a technology genuinely solves a real problem.",
        points: [
          "Lecture 1 (Awareness) → Lecture 5 Part 1 (Problem fit & feasibility) → Part 2 (Integration & evaluation).",
          "A technology can be impressive and still be the wrong choice for a particular organisation.",
          "Useful only when Problem, Capability, and Evidence align."
        ],
        examTip: "Quote Slide 4 in essays: 'Start with a real problem—not with a technology looking for a use.'",
        children: [
          {
            id: "b1_1",
            color: "#ffe4e6",
            badge: "DECISION ARC",
            title: "Central Adoption Question",
            sub: "Adopt, Pilot, or Do Not Adopt",
            slides: "Slides 2, 4",
            summary: "Four steps to answer the central question: 'Should we adopt it?'",
            points: [
              "1. Start with a real operational problem—never with hyped novelty.",
              "2. Identify what the technology can do better than current approaches.",
              "3. Compare benefits against cost, risk, organisational readiness, and alternatives.",
              "4. Make a reasoned recommendation: Adopt, Pilot, or Do Not Adopt."
            ],
            examTip: "Always state a clear verdict (Adopt, Pilot, Defer, or Reject) with explicit conditions."
          },
          {
            id: "b1_2",
            color: "#ffe4e6",
            badge: "ALIGNMENT TRIAD",
            title: "Problem → Capability → Evidence",
            sub: "3-part fit & verification filter",
            slides: "Slide 5",
            summary: "A technology is useful only when its capability directly addresses a verified pain point and produces measurable evidence.",
            points: [
              "Problem: What is painful, slow, costly, unsafe, or unreliable today?",
              "Capability: What can this technology enable or improve over existing tools?",
              "Evidence: How would we know the proposed improvement is real (measurable KPIs)?"
            ],
            examTip: "Use Problem → Capability → Evidence as a 3-sentence opening structure for any case evaluation."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#7dd3fc",
        badge: "02 • TECH IN CONTEXT",
        title: "Blockchain, IoT & XR Context",
        sub: "Capabilities, Cases & Caveats",
        slides: "Slides 6–11",
        summary: "Examines three major advanced technology domains—Blockchain, IoT, and Extended Reality (XR)—alongside illustrative cases and critical failure traps.",
        points: [
          "Blockchain: Shared tamper-evident ledger when multiple parties lack a single trusted controller.",
          "IoT: Connected sensors for monitoring and predictive maintenance—useful only if someone can respond.",
          "XR (VR/AR/MR): Simulated or overlaid experiences—visual polish is not proof of learning."
        ],
        examTip: "Memorise the three lecture discussion traps: inaccurate Blockchain inputs, unactioned IoT alerts, and unverified XR learning gains.",
        children: [
          {
            id: "b2_1",
            color: "#e0f2fe",
            badge: "BLOCKCHAIN",
            title: "Shared Records & Traceability",
            sub: "Multi-party ledger vs. DB",
            slides: "Slides 6–7",
            summary: "A shared ledger helps multiple organisations maintain a consistent, tamper-evident record of provenance and asset events.",
            points: [
              "Key Gatekeeper Question: Do multiple parties need a shared, tamper-evident record and governance model?",
              "Simpler Alternative: A conventional database is simpler when one trusted organisation controls the data.",
              "Supply-Chain Case: Traces food from producer → distribution → store; requires consistent IDs, partner participation, and confidentiality.",
              "Discussion Trap (Slide 7): If a supplier enters wrong info, blockchain does NOT make it true ('Garbage in, immutable garbage out')."
            ],
            examTip: "If a single company owns all the data, recommend a conventional database instead of Blockchain."
          },
          {
            id: "b2_2",
            color: "#e0f2fe",
            badge: "IoT SENSORS",
            title: "Physical Monitoring & Maintenance",
            sub: "Telemetry + response workflows",
            slides: "Slides 8–9",
            summary: "Connected sensors collect physical data (vibration, temperature, energy) for real-time alerts, remote monitoring, and predictive maintenance.",
            points: [
              "Requirements: Reliable connectivity, device management, data storage, and clear response procedures.",
              "Risks: Insecure devices, noisy/poor sensor data, network outages, and ongoing hardware maintenance.",
              "Predictive Maintenance Case: Monitors factory machine vibration/temp to reduce unplanned downtime.",
              "Discussion Traps (Slides 8–9): A sensor is useful only if someone/something can respond; collect baseline downtime/MTBF before claiming improvement."
            ],
            examTip: "Always mention 'response procedures' and 'baseline downtime metrics' when evaluating IoT proposals."
          },
          {
            id: "b2_3",
            color: "#e0f2fe",
            badge: "XR (VR / AR / MR)",
            title: "Immersive & Contextual Training",
            sub: "VR vs. AR vs. MR trade-offs",
            slides: "Slides 10–11",
            summary: "Extended Reality spans Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) to support hazardous or complex technical tasks.",
            points: [
              "VR: Fully simulated environment for safe, repeatable practice where real training is costly/risky.",
              "AR: Digital info overlaid on the real world (e.g., repair instructions beside live equipment).",
              "MR: Digital and physical elements interact dynamically in an integrated environment.",
              "Constraints & Trap (Slide 11): High hardware/3D content cost, comfort, accessibility, and update effort; a visually impressive simulation is NOT proof of better learning."
            ],
            examTip: "Demand real-world task performance metrics (error rate, completion speed) to justify XR costs."
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#86efac",
        badge: "03 • FEASIBILITY",
        title: "4 Pillars of Feasibility",
        sub: "Tech, Financial, Org & User/Ethical",
        slides: "Slides 12–16",
        summary: "Evaluates 'Can we make it work and should we?' across four comprehensive dimensions: Technical, Financial, Organisational, and User-related.",
        points: [
          "Technical: Compatibility, reliability, security, supportability, and supplier exit options.",
          "Financial: Full lifecycle cost (Initial + Recurring + Change) vs. measurable Expected Value.",
          "Organisational: Leadership alignment, clear roles, staff capacity, workflow changes, and sustainability.",
          "User & Ethical: Usability, accessibility, privacy, trust, safety, fairness, and transparency."
        ],
        examTip: "Structure feasibility answers using these exact 4 headings for clean, comprehensive exam coverage.",
        children: [
          {
            id: "b3_1",
            color: "#dcfce7",
            badge: "PILLAR 1",
            title: "Technical Feasibility",
            sub: "Fit, security & post-pilot support",
            slides: "Slides 12–13",
            summary: "Verifies whether the technology works reliably with existing systems, infrastructure, data, and security requirements.",
            points: [
              "Compatibility with current software, data formats, devices, and network infrastructure.",
              "Quality attributes: Performance, reliability, scalability, and service availability.",
              "Cybersecurity, privacy, access control, and data protection.",
              "Availability of skills, support, suppliers, maintainable components, and exit/replacement options.",
              "Key Question (Slide 13): 'Can the organisation support it after the pilot team leaves?'"
            ],
            examTip: "Include 'exit or replacement options' to show awareness of vendor lock-in."
          },
          {
            id: "b3_2",
            color: "#dcfce7",
            badge: "PILLAR 2",
            title: "Financial Feasibility (Full Cost)",
            sub: "Initial, Recurring & Change vs. Value",
            slides: "Slides 12, 14",
            summary: "Looks beyond initial purchase price to weigh three cost buckets against tangible expected value.",
            points: [
              "Initial Cost: Devices, licences, infrastructure, implementation, and data preparation.",
              "Recurring Cost: Service fees, maintenance, support, hardware replacement, and upgrades.",
              "Change Cost: Staff training, process redesign, and temporary productivity loss during transition.",
              "Expected Value: Time saved, fewer failures, improved quality, reduced risk, or better service."
            ],
            examTip: "Explicitly naming 'Change Cost (training, process redesign, temporary productivity dip)' earns top marks."
          },
          {
            id: "b3_3",
            color: "#dcfce7",
            badge: "PILLARS 3 & 4",
            title: "Organisational & User/Ethical Fit",
            sub: "Workflows, privacy, trust & fairness",
            slides: "Slides 12, 15–16",
            summary: "Assesses whether the organisation's work practices and intended users can safely, fairly, and effectively adopt the solution.",
            points: [
              "Organisational Readiness (Slide 15): Leader agreement, clear authority, staff skills/time, workflow redesign, and post-launch support ('Adoption often changes work practices—not just software').",
              "User & Ethical Factors (Slide 16): Usability & accessibility across user groups; data privacy & retention; user trust in system limits; safety & fairness; and transparent accountability when errors occur."
            ],
            examTip: "Mention 'transparency when the technology produces a wrong result' for ethical/social marks."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • RISKS & CHECKLIST",
        title: "Early Risks & 7-Step Checklist",
        sub: "4 Red Flags & Practical Workflow",
        slides: "Slides 17–18",
        summary: "Identifies four early risk areas to check before committing funds, followed by a practical 7-step feasibility evaluation workflow.",
        points: [
          "4 Early Risks: Integration, Security & privacy, Supplier dependency, Maturity & standards.",
          "7-Step Checklist moves systematically from baseline problem definition to a final Adopt/Pilot/Defer/Reject verdict."
        ],
        examTip: "Use the 7-step checklist as your mental blueprint whenever asked to design a feasibility study.",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "EARLY RED FLAGS",
            title: "4 Risks & Constraints to Check Early",
            sub: "Integration, Security, Lock-in, Maturity",
            slides: "Slide 17",
            summary: "Four foundational constraints that can derail an adoption project if discovered too late.",
            points: [
              "1. Integration: Does it connect cleanly with existing applications and daily workflows?",
              "2. Security & Privacy: Could devices, data, or services be exposed or misused?",
              "3. Supplier Dependency: Can the organisation change supplier or export its data cleanly?",
              "4. Maturity & Standards: Are tools, skills, support, and interoperability standards sufficiently mature?"
            ],
            examTip: "Supplier dependency (vendor lock-in + data portability) is a favourite exam question."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "7-STEP WORKFLOW",
            title: "Practical Feasibility Checklist",
            sub: "Baseline → Alternatives → Verdict",
            slides: "Slide 18",
            summary: "A seven-step practical checklist for conducting an objective technology feasibility review.",
            points: [
              "Step 1: Define the problem and current baseline.",
              "Step 2: Identify the expected benefit and how it will be measured.",
              "Step 3: Check technical fit, data needs, security, and integration.",
              "Step 4: Estimate total cost and available resources.",
              "Step 5: Assess staff readiness, user needs, and operational support.",
              "Step 6: Compare with simpler alternatives and identify major risks.",
              "Step 7: Recommend: Adopt, Pilot, Defer, or Reject."
            ],
            examTip: "Never skip Step 6 ('Compare with simpler alternatives')—lecturers specifically grade for it."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#fde047",
        badge: "05 • ADOPTION CASES",
        title: "Analysing Adoption Cases",
        sub: "4-Question Lens & Cases A, B, C",
        slides: "Slides 19–23",
        summary: "Applies a consistent 4-question evaluation framework across Blockchain (Case A), IoT (Case B), and XR (Case C) to determine what drives real value.",
        points: [
          "Universal Case Lens: Problem → Technology Fit → Feasibility → Evidence.",
          "Each technology succeeds only when its specific value drivers and simpler alternatives are weighed honestly."
        ],
        examTip: "In comparative questions, contrast what determines value across Blockchain, IoT, and XR (Slide 23).",
        children: [
          {
            id: "b5_1",
            color: "#fef9c3",
            badge: "CASE LENS",
            title: "4 Universal Case Questions",
            sub: "Problem, Fit, Feasibility, Evidence",
            slides: "Slide 19",
            summary: "Use the exact same four diagnostic questions when evaluating any technology adoption case.",
            points: [
              "1. Problem: What needs to improve, and what is the current baseline?",
              "2. Technology Fit: Why might this help more than a simpler alternative?",
              "3. Feasibility: What must be true for adoption to work?",
              "4. Evidence: What outcome would show value, and what are the limitations?"
            ],
            examTip: "Asking 'What must be true for adoption to work?' pinpoints critical assumptions and risks."
          },
          {
            id: "b5_2",
            color: "#fef9c3",
            badge: "CASES A & B",
            title: "Case A (Blockchain) & Case B (IoT)",
            sub: "Traceability vs. Smart Campus Pilot",
            slides: "Slides 20–21",
            summary: "Compares multi-organisation supply-chain traceability against single-campus university facility monitoring.",
            points: [
              "Case A (Blockchain Traceability): Multi-party provenance; requires partner commitment, data quality, governance, confidentiality & integration. Alternatives: shared database, supply-chain platform, better data-entry controls.",
              "Case B (IoT Facility Monitoring): University building with high energy use & late maintenance; requires sensor accuracy, connectivity, privacy, integration & response ownership. Alternatives: scheduled inspections, smart meters, targeted monitoring. Decision: start with a small pilot rather than every room."
            ],
            examTip: "For Case B, always recommend a 'small targeted pilot in one building' rather than full campus rollout."
          },
          {
            id: "b5_3",
            color: "#fef9c3",
            badge: "CASE C & MATRIX",
            title: "Case C (XR) & Value Determinants",
            sub: "Equipment training + Cross-case rule",
            slides: "Slides 22–23",
            summary: "Evaluates XR for hazardous equipment training and compares the core value determinant across all three technologies.",
            points: [
              "Case C (XR Equipment Training): Safe repeatable practice; depends on training effectiveness, content cost, hardware, accessibility, updating & comfort. Alternatives: video, interactive 3D, physical mock-ups, supervised practice.",
              "What Determines Value (Slide 23): Blockchain = shared records, governance, trusted inputs & participation; IoT = useful measurements, reliable connectivity & action on data; XR = measurable improvement in learning or task performance."
            ],
            examTip: "Memorise Slide 23's three one-line value determinants—they make punchy conclusions."
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#b8b8ff",
        badge: "06 • WRAP-UP & PREP",
        title: "Takeaways & Evidence Standards",
        sub: "5 Rules & Case Verification",
        slides: "Slides 24–25",
        summary: "Summarises the five core adoption principles and establishes rigorous evidence-verification rules for analysing named organisational cases.",
        points: [
          "Five Takeaways: Problem first, measurable value, 4-pillar feasibility, simpler alternatives, and pilot evidence.",
          "Case Preparation: Verify independent vs. vendor-reported claims and ground security/readiness in NIST standards."
        ],
        examTip: "When evaluating a real-world case study, question whether reported metrics come from an independent study or a vendor brochure.",
        children: [
          {
            id: "b6_1",
            color: "#eeeeff",
            badge: "5 TAKEAWAYS",
            title: "Core Lecture 5 Takeaways",
            sub: "Problem-led, evidence-backed adoption",
            slides: "Slide 24",
            summary: "Five essential rules that govern responsible advanced-technology selection in software engineering.",
            points: [
              "1. Start with the problem, not the technology.",
              "2. Technology capabilities must translate into measurable value.",
              "3. Feasibility includes technical, financial, organisational, and user-related factors.",
              "4. Compare the proposal with simpler alternatives.",
              "5. Use evidence from pilots and real outcomes to guide adoption decisions."
            ],
            examTip: "Use these 5 points as a self-check rubric before submitting any case analysis answer."
          },
          {
            id: "b6_2",
            color: "#eeeeff",
            badge: "EVIDENCE & NIST",
            title: "Case Preparation & Source Checks",
            sub: "Independent proof & 6 case fields",
            slides: "Slide 25",
            summary: "Standards for documenting organisational case studies and avoiding vendor hype bias.",
            points: [
              "Use NIST publications on IoT cybersecurity and information-system security to support risk and readiness discussions.",
              "Rely on credible case reports or peer-reviewed studies—check whether outcomes are independently measured or come only from a vendor.",
              "Record 6 mandatory items for every case: Organisation, Problem, Technology, Outcome, Limitations, and Source."
            ],
            examTip: "Citing NIST IoT cybersecurity guidance and distinguishing vendor vs. independent evidence shows strong critical thinking."
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
          el.style.background = n.color;
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
                    <div style="background:#ffffff; border:1.5px solid #000; border-radius:6px; padding:0.55rem 0.75rem; font-size:0.84rem;">
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
