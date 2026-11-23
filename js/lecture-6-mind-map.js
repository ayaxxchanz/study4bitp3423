(() => {
// Complete Lecture 6 Mind Map Knowledge Graph (Slides 1–30)
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 6 • SLIDES 1–30",
      title: "Advanced Technologies Part 2",
      sub: "Integration, Challenges & Impact Evaluation",
      slides: "Slides 1–30",
      summary: "Bridges the gap from adoption decision (Part 1) to measurable organisational value (Part 2): integrating technology with systems, data, processes, and people; overcoming technical and human barriers; and proving impact via baselines and ROI.",
      points: [
        "Part 1 (Select): Understand capabilities, applications, and feasibility.",
        "Part 2 (Implement): Integrate systems, manage adoption challenges, and evaluate outcomes.",
        "The Big Question: Did the technology become a workable solution—and did it create value?",
        "Learning Outcomes: (1) Integration strategies, (2) Technical & organisational challenges, (3) Impact and ROI evaluation."
      ],
      examTip: "In 8–10 mark case answers, always cover BOTH technical integration and organisational/human adoption, then prove value with baseline-to-target KPIs and ROI."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#7dd3fc",
        badge: "01 • FOUNDATIONS",
        title: "Integration & 5-Layer Stack",
        sub: "Apps, Data, Process, People & Controls",
        slides: "Slides 2, 4–7",
        summary: "Technology integration is not simply installing a tool; it is connecting new technology with existing systems, data, workflows, and people so they operate as one coherent solution.",
        points: [
          "Requires both technical connections (APIs, data exchange) and organisational changes (roles, procedures, skills).",
          "Implementation introduces dependencies, operational risks, and ongoing operating costs.",
          "Four core dimensions: Applications, Data, Process, and People."
        ],
        examTip: "Never define integration as 'installing software'. State explicitly that it aligns Applications, Data, Processes, and People.",
        children: [
          {
            id: "b1_1",
            color: "#e0f2fe",
            badge: "4 DIMENSIONS",
            title: "Apps, Data, Process & People",
            sub: "Coherent socio-technical fit",
            slides: "Slides 5–6",
            summary: "Four interconnected dimensions must be aligned for an advanced technology to function inside an enterprise.",
            points: [
              "Applications: Connect services, apps, devices, and platforms; define clear interfaces.",
              "Data: Align formats, meaning (semantics), quality, ownership, access rules, and data flows.",
              "Process: Embed technology directly into operational workflows, controls, and decisions.",
              "People: Update staff roles, standard operating procedures, and operating skills."
            ],
            examTip: "Use these 4 headings to structure any question asking 'What does technology integration involve?'"
          },
          {
            id: "b1_2",
            color: "#e0f2fe",
            badge: "5-LAYER VIEW",
            title: "Practical Integration Stack",
            sub: "Processes down to Infra/Devices",
            slides: "Slide 7",
            summary: "A five-layer enterprise integration view from human business processes down to physical devices and cloud infrastructure.",
            points: [
              "Layer 1: User & Business Processes (daily workflows, approvals, human decisions).",
              "Layer 2: Applications & Services (portals, ERP, BMS, dashboards).",
              "Layer 3: Integration Layer — APIs / Messaging (service contracts, event brokers).",
              "Layer 4: Data & Information (authoritative records, schemas, pipelines).",
              "Layer 5: Infrastructure / Cloud / Devices (sensors, edge gateways, networks)."
            ],
            examTip: "Sketching these 5 layers is a fast, high-scoring way to answer 'Sketch the integration approach' in case questions."
          },
          {
            id: "b1_3",
            color: "#e0f2fe",
            badge: "CROSS-CUTTING",
            title: "4 Cross-Cutting Pillars",
            sub: "Security, Monitoring, Governance, Change",
            slides: "Slide 7",
            summary: "Four governance and operational controls must cut across every single layer of the integration stack.",
            points: [
              "Security & Privacy: Protect identities, endpoints, APIs, and sensitive data in transit/at rest.",
              "Monitoring: Observe telemetry, latency, failures, and anomalous behaviour end-to-end.",
              "Governance: Enforce data ownership, compliance policies, and architectural standards.",
              "Change Management: Prepare staff and workflows for operational transitions."
            ],
            examTip: "Mentioning cross-cutting security and monitoring shows architectural maturity beyond basic point-to-point wiring."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#b8b8ff",
        badge: "02 • STRATEGIES",
        title: "4 Integration Strategies & Fit",
        sub: "APIs, Events, Data & Cloud/Edge",
        slides: "Slides 8–12",
        summary: "Organisations choose among four integration patterns depending on business need, existing legacy environment, quality attributes, and operational capacity.",
        points: [
          "Strategy 1: APIs and services (synchronous controlled access).",
          "Strategy 2: Event-driven integration (asynchronous publish/subscribe).",
          "Strategy 3: Data integration (authoritative sources & ETL/ELT).",
          "Strategy 4: Cloud, edge, and hybrid workload placement.",
          "Golden Rule: Choose the simplest approach that meets requirements and can be sustained."
        ],
        examTip: "Always justify WHY a strategy fits (e.g., Event-Driven for real-time IoT alerts vs. ETL for overnight reporting).",
        children: [
          {
            id: "b2_1",
            color: "#eeeeff",
            badge: "STRATEGY 1",
            title: "APIs and Services",
            sub: "Contracts, auth & versioning",
            slides: "Slide 8",
            summary: "Use an API when one application needs controlled, on-demand access to another application's data or functionality.",
            points: [
              "Define strict contracts: endpoints, data formats, authentication, permissions, error handling, and versioning.",
              "Benefits: High modularity, capability reuse, and faster integration.",
              "Watch-outs: API security exposure, rate limits, upstream availability, and breaking interface changes."
            ],
            examTip: "Contrast APIs (request/response when immediate data is needed) with Event-Driven (decoupled reactive triggers)."
          },
          {
            id: "b2_2",
            color: "#eeeeff",
            badge: "STRATEGY 2",
            title: "Event-Driven Integration",
            sub: "Pub/Sub async decoupling",
            slides: "Slide 9",
            summary: "Systems publish events when something meaningful happens; subscriber systems react asynchronously without needing simultaneous execution.",
            points: [
              "Ideal when activities do not need to occur at the exact same moment.",
              "Lecture Example: An IoT sensor detects abnormal temperature → publishes an event → triggers an alert and maintenance ticket.",
              "Watch-outs: Duplicate events (requires idempotency), message ordering, delivery delays, and distributed monitoring."
            ],
            examTip: "Use the IoT abnormal-temperature → maintenance-ticket example directly in exam answers."
          },
          {
            id: "b2_3",
            color: "#eeeeff",
            badge: "STRATEGY 3",
            title: "Data Integration",
            sub: "ETL/ELT, Warehouses & Lineage",
            slides: "Slide 10",
            summary: "Unifies data across disparate systems by establishing authoritative sources, shared definitions, and governed pipelines.",
            points: [
              "Identify the authoritative source of truth for each critical data item.",
              "Map structures and meanings; agree on identifiers, formats, quality rules, and update frequency.",
              "Approaches: ETL/ELT pipelines, data warehouses, and data lakes.",
              "Governance needs: Plan for data lineage, privacy, access control, retention, and recovery."
            ],
            examTip: "Highlight 'authoritative source' and 'consistent identifiers'—the #1 failure point when linking IoT sensors to utility billing."
          },
          {
            id: "b2_4",
            color: "#eeeeff",
            badge: "STRATEGY 4 & CHOICE",
            title: "Cloud, Edge, Hybrid & Selection",
            sub: "Latency vs. Scale + 4 Choice Filters",
            slides: "Slides 11–12",
            summary: "Balances centralised cloud scalability against low-latency local edge processing, guided by four selection filters.",
            points: [
              "Cloud: Centralised processing/storage, elastic scalability, shared analytics.",
              "Edge: Processing close to devices/users for lower latency and reduced bandwidth transfer.",
              "Hybrid: Combines cloud and edge; requires clear workload placement and oversight.",
              "4 Selection Filters (Slide 12): Business need, Existing environment, Quality attributes (security, privacy, availability, scalability, latency, maintainability), and Operational capacity."
            ],
            examTip: "End every architecture recommendation with Slide 12's rule: 'Choose the simplest approach that meets requirements and can be sustained.'"
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#fda4af",
        badge: "03 • CHALLENGES",
        title: "Tech & Org Challenges",
        sub: "Why Tech Success ≠ Adoption",
        slides: "Slides 13–16",
        summary: "Advanced technologies rarely operate in isolation. Legacy constraints, siloed data, and human workflow disruption mean technical success does not automatically produce organisational adoption.",
        points: [
          "Existing systems may be old, poorly documented, or hard to modify.",
          "Data is often inconsistent, incomplete, or governed by separate departments.",
          "New technology shifts work practices, decision rights, and responsibilities.",
          "Technical and organisational challenges must be managed together."
        ],
        examTip: "Quote Slide 13 in essays: 'Technical success does not automatically produce organisational adoption.'",
        children: [
          {
            id: "b3_1",
            color: "#ffe4e6",
            badge: "TECHNICAL",
            title: "3 Technical Challenges",
            sub: "Compatibility, Security, Reliability",
            slides: "Slide 14",
            summary: "Three core engineering risks that emerge when connecting new technologies into existing infrastructure.",
            points: [
              "Compatibility: Mismatches in platforms, protocols, data formats, and software/API versions.",
              "Security & Privacy: New interfaces, machine identities, cross-system data flows, and expanded attack surfaces.",
              "Reliability: Latency bottlenecks, downtime, scaling limits, network dependency, and recovery gaps."
            ],
            examTip: "Pair each challenge with a control (e.g., API gateways/versioning for compatibility; zero-trust/encryption for security)."
          },
          {
            id: "b3_2",
            color: "#ffe4e6",
            badge: "ORGANISATIONAL",
            title: "5 Organisational Challenges",
            sub: "Skills, Trust, Process, Governance, Fatigue",
            slides: "Slide 15",
            summary: "Human, procedural, and governance barriers that stall technology adoption even when the software works.",
            points: [
              "Skills & Capacity: Staff require training or specialist operational support.",
              "Resistance & Trust: Users question the technology, doubt its outputs, or fear role impacts.",
              "Process Redesign: Legacy manual procedures fail to fit the new automated workflow.",
              "Governance: Ownership, accountability, policies, and decision rights are unclear.",
              "Change Fatigue: Competing concurrent initiatives drain staff attention and adoption energy."
            ],
            examTip: "Memorise all 5 organisational challenges—they frequently appear as a 5-mark or 10-mark listing/analysis question."
          },
          {
            id: "b3_3",
            color: "#ffe4e6",
            badge: "MITIGATION",
            title: "5 Adoption Management Controls",
            sub: "Owners, Users, Pilot, Reviews, Support",
            slides: "Slide 16",
            summary: "Five structured practices to overcome technical and organisational friction during implementation.",
            points: [
              "1. Establish both business and technical owners with clear decision-making responsibilities.",
              "2. Engage end users and operational teams early to understand concerns and constraints.",
              "3. Start with a bounded pilot and define measurable success criteria before full rollout.",
              "4. Conduct architecture, security, privacy, and data reviews throughout the lifecycle.",
              "5. Provide training, ongoing support, clear communication, and continuous improvement."
            ],
            examTip: "Always recommend appointing dual 'business and technical owners' so neither IT nor operations disowns the system."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • ROLLOUT",
        title: "Rollout Strategies",
        sub: "Pilot vs. Phased vs. Big-Bang",
        slides: "Slide 17",
        summary: "Implementation should be planned, tested, and supported—never treated as a one-off installation. Organisations select among Pilot, Phased Rollout, or Big-Bang based on uncertainty and risk tolerance.",
        points: [
          "Pilot: Test in a limited scope to learn before committing wider investment.",
          "Phased Rollout: Introduce incrementally by site, function, or user group.",
          "Big-Bang: Switch over all users at one planned cutover point."
        ],
        examTip: "For high-uncertainty advanced tech (IoT, XR, Blockchain), recommend Pilot → Phased Rollout rather than Big-Bang.",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "APPROACH 1",
            title: "Pilot Implementation",
            sub: "Bounded scope, high uncertainty",
            slides: "Slide 17",
            summary: "Deploys the solution in a small, controlled environment first to validate assumptions and gather evidence.",
            points: [
              "Test in a limited environment (e.g., one building or single department).",
              "Learn about technical bottlenecks and workflow fit before wider capital investment.",
              "Most useful when uncertainty is high and real-world KPI proof is needed."
            ],
            examTip: "Define clear exit criteria for a pilot so it doesn't stay in 'perpetual pilot' limbo."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "APPROACH 2",
            title: "Phased Rollout",
            sub: "Site-by-site wave deployment",
            slides: "Slide 17",
            summary: "Scales the solution gradually across sites, departments, or user cohorts in coordinated waves.",
            points: [
              "Introduce by site, business function, or user group.",
              "Reduces operational disruption across the wider organisation.",
              "Allows teams to coordinate each phase and apply lessons learned to subsequent waves."
            ],
            examTip: "Ideal for multi-building campus rollouts or multi-branch retail/manufacturing networks."
          },
          {
            id: "b4_3",
            color: "#ffedd5",
            badge: "APPROACH 3",
            title: "Big-Bang Cutover",
            sub: "Single switch-over, high risk",
            slides: "Slide 17",
            summary: "Transitions the entire organisation from the legacy system to the new solution at a single scheduled point.",
            points: [
              "Switch over at one planned point in time.",
              "Advantage: Shorter coexistence period (avoids maintaining dual legacy and new systems).",
              "Risk: Significantly higher transition and outage risk if unforeseen defects occur."
            ],
            examTip: "Only recommend Big-Bang when legacy and new systems cannot technically coexist in parallel."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#86efac",
        badge: "05 • IMPACT & KPIs",
        title: "Impact Evaluation & Baselines",
        sub: "KPI Categories & 5-Step Comparison",
        slides: "Slides 18–20",
        summary: "Impact evaluation asks what changed after introducing the technology—and whether that change can reasonably be attributed to the intervention rather than external factors.",
        points: [
          "Assesses operational performance, service quality, user experience, decision-making, and organisational capability.",
          "Compares post-launch results against a consistent baseline, target, or suitable alternative.",
          "Must look for unintended side effects alongside intended benefits."
        ],
        examTip: "Always check for 'unintended effects' (e.g., alert fatigue from noisy IoT sensors) alongside intended gains.",
        children: [
          {
            id: "b5_1",
            color: "#dcfce7",
            badge: "3 KPI BUCKETS",
            title: "Measurable Indicators (KPIs)",
            sub: "Efficiency, Quality & Adoption",
            slides: "Slide 19",
            summary: "Translate broad strategic benefits into concrete, quantifiable indicators across three categories.",
            points: [
              "Efficiency: Processing time, cost per transaction, equipment downtime hours, manual staff effort.",
              "Quality & Service: Error rate, defect rate, fault response time, customer/user satisfaction.",
              "Adoption & Capability: Active system usage, task completion rate, user confidence, staff proficiency."
            ],
            examTip: "When asked for 'two measurable indicators', pick one Efficiency KPI and one Quality/Service KPI for balance."
          },
          {
            id: "b5_2",
            color: "#dcfce7",
            badge: "5-STEP PROTOCOL",
            title: "Credible Before-and-After Comparison",
            sub: "Baseline, stabilisation & attribution",
            slides: "Slide 20",
            summary: "Five disciplined steps ensure before-and-after metrics are fair, consistent, and analytically defensible.",
            points: [
              "1. Define the problem and intended outcome before implementation begins.",
              "2. Record baseline performance using consistent definitions and measurement periods.",
              "3. Set realistic targets and identify authoritative data sources.",
              "4. Measure after implementation and allow time for workflows/processes to stabilise.",
              "5. Interpret results carefully: other concurrent changes may also influence the outcome."
            ],
            examTip: "Point #4 ('allow time for processes to stabilise') prevents misjudging a project during its initial learning dip."
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#fde047",
        badge: "06 • ROI & CASE",
        title: "ROI, Balanced Review & Case",
        sub: "Math, Full Cost, Gate & Smart Campus",
        slides: "Slides 21–30",
        summary: "ROI quantifies financial return against full lifecycle costs, but must be paired with non-financial value, sustainability checks, and real-world case evidence.",
        points: [
          "ROI (%) = (Net benefit ÷ Total investment cost) × 100, where Net benefit = Financial benefits − Total costs.",
          "Full cost includes both Initial costs and Ongoing operating costs—never just purchase price.",
          "Post-adoption evaluation weighs Value + Sustainability to decide: Scale up, Improve, Redesign, Pause, or Retire."
        ],
        examTip: "State the measurement period and assumptions whenever calculating ROI in an exam.",
        children: [
          {
            id: "b6_1",
            color: "#fef9c3",
            badge: "ROI & FULL COST",
            title: "ROI Formula & Full Cost Buckets",
            sub: "RM120k → RM180k = 50% Example",
            slides: "Slides 21–23",
            summary: "Computes financial return using total initial and recurring costs over a defined period.",
            points: [
              "Initial Costs: Licences, hardware, development & integration, migration & testing, staff training.",
              "Ongoing Costs: Support, cloud & network usage, security, upgrades, vendor services, downtime.",
              "Slide 23 Worked Example: Investment = RM120,000; Annual Benefit = RM180,000 → Net Benefit = RM60,000 → First-Year ROI = (60,000 ÷ 120,000) × 100 = 50%.",
              "Caveat: Excludes later-year costs, cash-flow timing, and non-financial impacts."
            ],
            examTip: "Show every step of the formula (`Net = Benefit - Cost`, then `ROI = Net / Cost * 100`) for full calculation marks."
          },
          {
            id: "b6_2",
            color: "#fef9c3",
            badge: "BALANCED GATE",
            title: "Beyond ROI & Post-Adoption Gate",
            sub: "Value, Sustainability & Next Decision",
            slides: "Slides 24–25",
            summary: "ROI alone cannot capture safety, trust, or compliance; post-adoption reviews combine financial, operational, and sustainability checks.",
            points: [
              "Why ROI Isn't Enough: Hard-to-monetise value (safety, resilience, accessibility, trust, compliance), benefit time lag, early productivity dip, and attribution difficulty.",
              "Balanced Gate — 1. Value: Were intended benefits achieved? Did service/performance improve?",
              "Balanced Gate — 2. Sustainability: Can the organisation operate and maintain it? Are risks controlled?",
              "Balanced Gate — 3. Next Decision: Scale up, improve, redesign, pause, or retire based on evidence."
            ],
            examTip: "Reference Kaplan & Norton's Balanced Scorecard (Slide 30) when explaining why ROI needs non-financial KPIs."
          },
          {
            id: "b6_3",
            color: "#fef9c3",
            badge: "CASE & STANDARDS",
            title: "Smart Facility Case & Standards",
            sub: "University IoT + ISO/NIST/PMI",
            slides: "Slides 26–30",
            summary: "Applies integration, challenge analysis, KPI baselines, and rollout selection to a university IoT monitoring case, grounded in industry standards.",
            points: [
              "Case Environment: Connects room IoT sensors to Building Management System (BMS), utility records, dashboard, and maintenance workflow.",
              "Key Challenges: Network coverage, device security, data quality, and clear staff response ownership.",
              "Standards (Slide 30): ISO/IEC/IEEE 42010 (Architecture), ISO/IEC 27001 (ISMS), NIST (Cybersecurity/Risk), PMI Benefits Realization Management, Kaplan & Norton Balanced Scorecard."
            ],
            examTip: "Citing ISO/IEC 27001 or NIST for IoT device security elevates case answers above generic textbook points."
          }
        ]
      }
    ];

    window.initStudyMindMap(mindMapData, branches);
})();
