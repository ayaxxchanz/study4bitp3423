/* Shared interactive map renderer, controls and outline. */
window.initStudyMindMap = (mindMapData, branches, options = {}) => {
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
    let scale = options.initialScale ?? 0.88;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartY = 0;

    // Layout Constants
    const ROOT_W = 240;
    const ROOT_H = 104;
    const BRANCH_W = options.branchWidth ?? 225;
    const BRANCH_H = 88;
    const LEAF_W = options.leafWidth ?? 225;
    const LEAF_H = 82;
    const H_GAP_1 = options.rootGap ?? 95;   // Root to Branch
    const H_GAP_2 = options.leafGap ?? 85;   // Branch to Leaf
    const V_LEAF_GAP = options.leafSpacing ?? 14;
    const V_BRANCH_GAP = options.branchSpacing ?? 28;

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
          ? (options.rootBadgeColor ?? "#fde047")
          : node.branchColor || node.color || (options.fallbackBadgeColor ?? "#b8b8ff");

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

      const newScale = Math.min(1.6, Math.max(options.minScale ?? 0.42, scale + delta));
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
        const newScale = Math.min(1.6, Math.max(options.minScale ?? 0.42, scale + delta));
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
};
