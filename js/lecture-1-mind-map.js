(() => {
    // Lecture 1 knowledge graph from the supplied mind map.
    const mindMapData = {
      id: "root",
      side: "center",
      color: "#0f0f0f",
      badge: "LECTURE 1 • SLIDES 1–31",
      title: "Modern SE & Emerging Tech",
      sub: "Evolution, Trends, Tech Shifts & Trade-Offs",
      slides: "Slides 1–31",
      summary: "Explores how software engineering is transforming across eras, industry trends, and emerging technologies—asking 'Software engineering is changing. Are we changing with it?' while balancing technical capabilities against new architectural and verification challenges.",
      points: [
        "Outcome 1: Explain the evolution of modern software engineering practice and the factors driving current changes.",
        "Outcome 2: Identify and describe major current trends and emerging technologies shaping software engineering.",
        "Outcome 3: Discuss how selected emerging technologies can address or create challenges in real-world software engineering.",
        "Core Principle: Fundamental SE discipline remains constant, while environments, tools, and delivery loops evolve continuously."
      ],
      examTip: "When evaluating any emerging technology in exams, pair its concrete engineering benefit with the new engineering risk it introduces (Slide 24) and run it through the 6 SE evaluation questions (Slide 25)."
    };

    const branches = [
      // LEFT WING (Branches 01–03)
      {
        id: "b1",
        side: "left",
        color: "#fda4af",
        badge: "01 • FOUNDATIONS & EVOLUTION",
        title: "What SE Is & What Has Changed",
        sub: "Eras, Core Definition & Continuous SDLC",
        slides: "Slides 1–6",
        summary: "Contrasts everyday modern platforms against software from 10–20 years ago, traces computing eras from Desktop to AI Agents, and shows how linear lifecycles evolved into continuous feedback loops.",
        points: [
          "Opening Question: 'Software engineering is changing. Are we changing with it?'",
          "Fundamental SE principles remain vital even as architectures, delivery speeds, and environments transform."
        ],
        examTip: "Distinguish what stays constant (systematic engineering discipline & core lifecycle activities) from what changes (distributed tech & continuous release velocity).",
        children: [
          {
            id: "b1_1",
            color: "#ffe4e6",
            badge: "ERA TIMELINE",
            title: "Everyday Apps & Era Progression",
            sub: "Yesterday → Today → Tomorrow",
            slides: "Slides 3–4",
            summary: "Uses daily platforms (WhatsApp, Grab, TikTok, Google Maps, Online Banking, ChatGPT, E-Commerce) to illustrate three eras of software evolution.",
            points: [
              "Yesterday: Desktop → Client/Server → Web applications.",
              "Today: Cloud → Mobile → AI → IoT → Distributed Systems operating simultaneously.",
              "Tomorrow?: AI agents → AI-generated software → Intelligent systems → ???"
            ],
            examTip: "Use Grab or Online Banking as a concrete example of a 'Today' system combining mobile clients, cloud backends, payments, maps, and live telemetry."
          },
          {
            id: "b1_2",
            color: "#ffe4e6",
            badge: "DEFINITION",
            title: "SE Definition: Continuity vs. Change",
            sub: "Systematic rigor in dynamic environments",
            slides: "Slide 5",
            summary: "Defines software engineering and clarifies why disciplined methods matter even more as systems grow complex.",
            points: [
              "Definition: The systematic application of engineering approaches to the development, operation, and maintenance of software.",
              "Continuity: Disciplined rigor, architecture, requirements, design, build, testing, and maintenance remain mandatory.",
              "Change: Faster release cycles, distributed infrastructure, and rising security/user expectations."
            ],
            examTip: "Quote the exact IEEE-style definition on Slide 5 and explain that 'systematic' means disciplined engineering methods rather than ad-hoc coding."
          },
          {
            id: "b1_3",
            color: "#ffe4e6",
            badge: "LIFECYCLE SHIFT",
            title: "Traditional vs. Modern SDLC",
            sub: "Linear sequence → Continuous feedback loop",
            slides: "Slide 6",
            summary: "Compares waterfall-style sequential phases against modern continuous development and live telemetry feedback loops.",
            points: [
              "Traditional (Linear): Requirements → Design → Implementation → Testing → Deployment → Maintenance.",
              "Modern (Continuous Loop): Continuous requirements → Development → Testing → Deployment → Monitoring → Feedback (feeding back continuously).",
              "Key Idea: Software is increasingly developed and evolved continuously after initial launch."
            ],
            examTip: "Highlight 'Monitoring' and 'Feedback' feeding back into 'Continuous requirements' as the defining difference in modern SE."
          }
        ]
      },
      {
        id: "b2",
        side: "left",
        color: "#7dd3fc",
        badge: "02 • ENVIRONMENT & DRIVERS",
        title: "Modern Environment & Forces of Change",
        sub: "11-Layer Stack, 4 Drivers & Speed Cycle",
        slides: "Slides 7–10",
        summary: "Maps the multi-disciplinary modern tech stack, explains why engineers must ask 'When should we use a technology?', and breaks down the four forces driving rapid change.",
        points: [
          "No single software engineer can master every layer of the modern distributed stack deeply.",
          "Every new technology triggers a four-step cycle of capabilities, user expectations, and fresh engineering problems."
        ],
        examTip: "Name all four forces shaping SE (Technology, Business, Users, Society) with two concrete drivers under each.",
        children: [
          {
            id: "b2_1",
            color: "#e0f2fe",
            badge: "MODERN STACK",
            title: "11-Layer Environment & New Mindset",
            sub: "From 'How to build?' to 'When to use?'",
            slides: "Slides 7–8",
            summary: "Lists the 11 interlocking domains of modern software and defines the strategic mindset required of SE graduates.",
            points: [
              "Modern Stack (11 Elements): Cloud computing, Mobile platforms, APIs, Microservices, DevOps, AI, IoT, Edge computing, Cybersecurity, Big data, and Distributed teams.",
              "Mindset Shift: Move beyond 'How do we build software?' to 'What new technology or approach builds better software?' and 'When should we use it?'"
            ],
            examTip: "Emphasize that knowing WHEN not to adopt a complex technology is just as important as knowing how to code it."
          },
          {
            id: "b2_2",
            color: "#e0f2fe",
            badge: "4 FORCES",
            title: "Four Drivers Shaping Software",
            sub: "Technology, Business, Users & Society",
            slides: "Slide 9",
            summary: "Categorizes external and internal pressures reshaping how software is engineered.",
            points: [
              "1. Technology: AI, Cloud computing, IoT, Edge computing.",
              "2. Business: Faster delivery (time-to-market), digital transformation, platform economy.",
              "3. Users: Personalization, 24/7 always-available uptime, mobile-first experiences.",
              "4. Society: Data privacy, environmental sustainability, accessibility, digital trust."
            ],
            examTip: "Notice that 'Society' (privacy, sustainability, accessibility, trust) bridges directly into Lecture 2's ethics themes."
          },
          {
            id: "b2_3",
            color: "#e0f2fe",
            badge: "CHANGE CYCLE",
            title: "The Speed of Change Cycle",
            sub: "Tech → Capability → Expectation → Problem",
            slides: "Slide 10",
            summary: "Illustrates how technological breakthroughs escalate user expectations and create new engineering challenges.",
            points: [
              "4-Step Chain: New Technology → New Capability → New User Expectation → New Software Problem.",
              "Example: AI becomes accessible → users expect intelligent features → developers integrate AI → new safety, cost, and reliability concerns emerge.",
              "Key Idea: Every new technology creates both opportunities AND new engineering challenges."
            ],
            examTip: "Reproduce the 4-box chain with the AI accessibility example for full marks on 'speed of change' questions."
          }
        ]
      },
      {
        id: "b3",
        side: "left",
        color: "#86efac",
        badge: "03 • CURRENT TRENDS",
        title: "Top 10 Trends & Core Industry Shifts",
        sub: "AI-Assisted SE, DevOps, Cloud-Native & Low-Code",
        slides: "Slides 11–16",
        summary: "Surveys the top 10 contemporary software engineering trends and examines four transformative shifts in detail: AI-assisted coding, DevOps, cloud-native microservices, and low-code/no-code.",
        points: [
          "Covers how AI transforms developer work from manual typing to system specification, verification, and orchestration.",
          "Shows how DevOps and cloud-native architectures unify development, deployment, and elastic scaling."
        ],
        examTip: "Always contrast 'Old View: Developer → writes code' with 'Emerging View: Developer → specifies, evaluates, verifies, and orchestrates.'",
        children: [
          {
            id: "b3_1",
            color: "#dcfce7",
            badge: "TOP 10 LIST",
            title: "Top 10 Current SE Trends",
            sub: "AI, DevOps, Cloud, Security, Green SE",
            slides: "Slide 11",
            summary: "Catalogs the ten major industry trends defining modern software engineering practice.",
            points: [
              "1. AI-assisted software development | 2. DevOps & continuous delivery | 3. Cloud-native development | 4. Microservices | 5. Platform engineering.",
              "6. Low-code / no-code | 7. Software supply-chain security | 8. Data-driven SE | 9. Green / sustainable SE | 10. Human-AI collaboration."
            ],
            examTip: "Memorise at least 5–6 distinct trends from Slide 11 so you can list them rapidly in short-answer questions."
          },
          {
            id: "b3_2",
            color: "#dcfce7",
            badge: "TREND #1",
            title: "AI-Assisted SE & Role Shift",
            sub: "7 uses & Producer → Orchestrator",
            slides: "Slides 12–13",
            summary: "Details how AI assists across engineering tasks and reshapes the software engineer's core responsibilities.",
            points: [
              "7 AI Uses: Code generation, code completion, test generation, bug detection, requirements analysis, documentation, and code review.",
              "Role Shift: Old view (Developer → writes code) vs. Emerging view (Developer → specifies, evaluates, verifies, and orchestrates).",
              "Key Idea: AI does not eliminate software engineers; it shifts where human engineering effort is needed."
            ],
            examTip: "Answer 'Are software engineers no longer needed?' with 'No—effort shifts from writing boilerplate to specifying requirements, verifying AI output, and orchestrating architecture.'"
          },
          {
            id: "b3_3",
            color: "#dcfce7",
            badge: "TREND #2",
            title: "DevOps & Whole-Lifecycle Flow",
            sub: "Unifying Dev + Ops across 8 stages",
            slides: "Slide 14",
            summary: "Replaces siloed handoffs between developers and IT operations with a continuous 8-stage delivery pipeline.",
            points: [
              "Traditional Silo: Development | Operations (separated wall).",
              "Modern DevOps Flow: Plan → Code → Build → Test → Release → Deploy → Monitor → Feedback.",
              "Key Idea: Software engineering covers the entire software lifecycle, not only coding."
            ],
            examTip: "List the 8 DevOps stages in order and note that whole-lifecycle responsibility includes production monitoring."
          },
          {
            id: "b3_4",
            color: "#dcfce7",
            badge: "TRENDS #3 & #4",
            title: "Cloud-Native & Low-Code / No-Code",
            sub: "Microservices vs. Citizen Dev Risks",
            slides: "Slides 15–16",
            summary: "Contrasts monolithic apps with API-connected cloud-native microservices and evaluates low-code/no-code trade-offs.",
            points: [
              "Cloud-Native (Slide 15): Containers, microservices, APIs, elasticity, distributed systems, continuous deployment (decoupling User, Payment, Order, Notification, Recommendation services).",
              "Low-Code / No-Code (Slide 16): Visual drag-and-drop components for citizen developers & rapid delivery—balanced against Security, Scalability, Integration, Maintainability, and Vendor lock-in concerns."
            ],
            examTip: "Name all 5 engineering concerns of Low-Code/No-Code: Security, Scalability, Integration, Maintainability, and Vendor lock-in."
          }
        ]
      },

      // RIGHT WING (Branches 04–06)
      {
        id: "b4",
        side: "right",
        color: "#fdba74",
        badge: "04 • EMERGING TECH",
        title: "Emerging Technologies & AI Shifts",
        sub: "Taxonomy, GenAI SDLC & Agentic Loops",
        slides: "Slides 17–20",
        summary: "Distinguishes mainstream current tech from evolving emerging technologies, classifies them across four domains, and compares single-turn Generative AI against autonomous goal-driven AI Agents.",
        points: [
          "Emerging technologies have capabilities, use cases, or industry adoption that are still actively evolving.",
          "AI Agents move beyond passive prompt-response into autonomous tool-using execution loops."
        ],
        examTip: "Draw the 6-step Agentic System loop (Goal → Plan → Use tools → Perform actions → Evaluate → Adapt) to contrast it with Traditional AI.",
        children: [
          {
            id: "b4_1",
            color: "#ffedd5",
            badge: "TAXONOMY",
            title: "Current vs. Emerging & 4-Domain Map",
            sub: "AI, Computing, Connected Systems & Dev",
            slides: "Slides 17–18",
            summary: "Defines emerging technologies and organizes the landscape into four major architectural domains.",
            points: [
              "Current Tech (widely adopted mainstream) vs. Emerging Tech (capabilities/adoption still evolving: GenAI, AI agents, Digital twins, Edge AI, XR, Autonomous systems, Quantum).",
              "4 Taxonomy Domains (Slide 18): AI (GenAI, AI Agents, Multimodal AI) | Computing (Edge, Quantum, Cloud) | Connected Systems (IoT, Digital Twins, Autonomous Systems) | Development (Low-code, AI-assisted dev, Platform engineering)."
            ],
            examTip: "Use the 4-domain taxonomy (AI, Computing, Connected Systems, Development) to structure broad survey answers."
          },
          {
            id: "b4_2",
            color: "#ffedd5",
            badge: "GENERATIVE AI",
            title: "Generative AI Across 6 SDLC Stages",
            sub: "Requirements to Maintenance & Risks",
            slides: "Slide 19",
            summary: "Maps where Generative AI participates throughout the software lifecycle and flags verification risks.",
            points: [
              "6 SDLC Touchpoints: Requirements (drafting specs), Design, Coding (code synthesis), Testing (test generation), Documentation, and Maintenance (review & analysis).",
              "Critical Question ('What could go wrong?'): Hallucinated logic, subtle bugs, security vulnerabilities, and unverified dependencies."
            ],
            examTip: "Show that GenAI spans all 6 phases—not just coding—and always pair it with mandatory human verification."
          },
          {
            id: "b4_3",
            color: "#ffedd5",
            badge: "AI AGENTS",
            title: "Traditional AI vs. Agentic Systems",
            sub: "Autonomous Goal-Plan-Tools-Act-Eval-Adapt",
            slides: "Slide 20",
            summary: "Contrasts passive chatbot prompts with autonomous AI agents that plan, invoke tools, and iterate.",
            points: [
              "Traditional AI: User → AI → Single Answer.",
              "Agentic System: Goal → Plan → Use tools → Perform actions → Evaluate → Adapt.",
              "SE Challenge: When AI becomes an active teammate in development workflows, deterministic control, permissions, and human oversight become critical."
            ],
            examTip: "Explain why AI Agents introduce higher governance risk than standard chatbots: agents execute real actions via external tools."
          }
        ]
      },
      {
        id: "b5",
        side: "right",
        color: "#fde047",
        badge: "05 • CYBER-PHYSICAL & QUANTUM",
        title: "Digital Twins, Edge & Quantum",
        sub: "Sensor Sync, Low Latency & New Algorithms",
        slides: "Slides 21–23",
        summary: "Examines three frontier computing paradigms: live sensor-driven Digital Twins, local low-latency Edge Computing, and non-classical Quantum Computing.",
        points: [
          "Cyber-physical systems tightly couple software behavior to continuous real-world sensor streams and strict latency budgets.",
          "Quantum computing requires rethinking algorithms and cryptography rather than expecting a faster classical CPU."
        ],
        examTip: "Memorise Slide 23's exact warning: 'Quantum computing is not simply a faster computer.'",
        children: [
          {
            id: "b5_1",
            color: "#fef9c3",
            badge: "DIGITAL TWINS",
            title: "Digital Twins & Sync Challenges",
            sub: "Live virtual replicas of physical assets",
            slides: "Slide 21",
            summary: "Explains how digital twins mirror physical systems in real time and the software engineering difficulties they create.",
            points: [
              "Definition: A digital representation of a physical system continuously updated using real-world sensor data.",
              "Examples: Smart factories, buildings, vehicles, cities, and healthcare equipment.",
              "SE Challenge: Developing, integrating, testing, and maintaining software coupled to a continuously changing physical system."
            ],
            examTip: "Emphasize continuous real-time state synchronization and testing against unpredictable physical sensor drift."
          },
          {
            id: "b5_2",
            color: "#fef9c3",
            badge: "EDGE COMPUTING",
            title: "Edge Computing vs. Centralized Cloud",
            sub: "Local processing for latency & privacy",
            slides: "Slide 22",
            summary: "Compares long-haul Device → Internet → Cloud topologies against local Device → Nearby Edge Compute → Cloud architectures.",
            points: [
              "Architecture: Moves computation closer to data sources (Sensor/Vehicle → Nearby Edge Compute → Cloud sync).",
              "4 Core Drivers: Lower latency (critical for autonomous vehicle braking), reduced network bandwidth, local offline processing, and improved data privacy."
            ],
            examTip: "Use autonomous vehicles requiring millisecond braking decisions as the flagship example for Edge Computing."
          },
          {
            id: "b5_3",
            color: "#fef9c3",
            badge: "QUANTUM",
            title: "Quantum Computing Paradigms",
            sub: "New algorithms & post-quantum crypto",
            slides: "Slide 23",
            summary: "Clarifies why quantum computing matters to software engineers and identifies its four primary application domains.",
            points: [
              "Core Distinction: Not simply 'a faster classical computer'—it uses quantum computational models requiring new algorithms and system designs.",
              "4 Potential Areas: Combinatorial optimization, cryptography (post-quantum security), physical/molecular simulation, and machine learning."
            ],
            examTip: "Name all 4 quantum application areas (Optimization, Cryptography, Simulation, Machine Learning) and explain why existing encryption must evolve."
          }
        ]
      },
      {
        id: "b6",
        side: "right",
        color: "#b8b8ff",
        badge: "06 • EVALUATION & SYNTHESIS",
        title: "Trade-Offs, Evaluation & Take-Home",
        sub: "6 Risks, 6 Questions, Inquiry Cycle & Takeaways",
        slides: "Slides 24–31",
        summary: "Synthesises Lecture 1 by pairing six technologies with their hidden engineering concerns, providing a 6-question evaluation checklist, walking through the Generative AI case study, and defining the 6-stage course inquiry cycle.",
        points: [
          "Every technological benefit comes paired with a new architectural, security, or maintainability trade-off.",
          "Effective engineers judge not only WHAT a technology does, but WHEN and HOW it should be applied."
        ],
        examTip: "Use the 4-part Technology Detective template (Problem, Application, Benefit, Challenge) from Slides 26–27 for case-study questions.",
        children: [
          {
            id: "b6_1",
            color: "#eeeeff",
            badge: "TRADE-OFF MATRIX",
            title: "The Hidden Side: 6 Tech Trade-Offs",
            sub: "Benefit vs. New Engineering Concern",
            slides: "Slide 24",
            summary: "Pairs six major technologies with their primary advantage and the new problem they introduce.",
            points: [
              "Generative AI: Faster development vs. Hallucination & security flaws.",
              "Cloud: Scalability vs. Architectural complexity | IoT: Connected systems vs. Attack surface security.",
              "AI Agents: Automation vs. Control & trust | Low-code: Faster delivery vs. Maintainability | Edge: Low latency vs. Distributed complexity."
            ],
            examTip: "Keep this 6-row table in mind—nearly any short comparison question on Lecture 1 pulls directly from Slide 24."
          },
          {
            id: "b6_2",
            color: "#eeeeff",
            badge: "EVALUATION",
            title: "6 SE Questions & GenAI Case Study",
            sub: "Critical filter & worked Detective analysis",
            slides: "Slides 25–27",
            summary: "Provides the six universal evaluation questions for emerging tech and applies the 4-point Technology Detective analysis to Generative AI.",
            points: [
              "6 Evaluation Questions (Slide 25): (1) What problem does it solve? (2) How does it work? (3) When is it useful? (4) What are its limitations? (5) What new SE problems does it create? (6) Can we realistically adopt it?",
              "GenAI Case Study (Slide 27): Solves boilerplate/doc overhead → generates code/tests/docs → reduces initial effort → risk of incorrect/insecure output requires human testing before trust."
            ],
            examTip: "Answer Slide 27's discussion prompt ('Would you trust AI-generated code without testing it?') with 'No—automated tests, security scanning, and human code review are mandatory.'"
          },
          {
            id: "b6_3",
            color: "#eeeeff",
            badge: "SYNTHESIS",
            title: "Holistic SE Hub, Inquiry & Takeaways",
            sub: "8-pillar ecosystem, 6 steps & 3 messages",
            slides: "Slides 28–31",
            summary: "Brings together the 8-domain Modern SE ecosystem, the 6-stage course learning workflow, and the three take-home messages.",
            points: [
              "Holistic SE Hub (Slide 28): Integrates AI, Cloud, DevOps, IoT, Data, Security, Edge, Agents, Sustainability, and Human Factors.",
              "6-Stage Inquiry Cycle (Slide 29): 1. Explore → 2. Understand → 3. Analyse → 4. Evaluate → 5. Apply → 6. Synthesize.",
              "3 Take-Home Messages (Slide 31): (1) SE is evolving; (2) Emerging tech creates new possibilities and challenges; (3) Engineers must know WHAT, WHEN, and HOW to apply technology."
            ],
            examTip: "Memorise the 6 inquiry verbs (Explore, Understand, Analyse, Evaluate, Apply, Synthesize) and the 3 Take-Home Messages on Slide 31."
          }
        ]
      }
    ];

    window.initStudyMindMap(mindMapData, branches, {"initialScale": 0.86, "branchWidth": 228, "leafWidth": 228, "rootGap": 92, "leafGap": 82, "leafSpacing": 13, "branchSpacing": 26, "rootBadgeColor": "#b8b8ff", "fallbackBadgeColor": "#fde047", "minScale": 0.4});
})();
