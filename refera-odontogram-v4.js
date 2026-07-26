/*
 * Refera-style Odontogram V4
 * Production build configured specifically for this 123FormBuilder form.
 *
 * Required HTML:
 * <div id="odontogram-mount"></div>
 *
 * Built-in field mappings:
 * Selected Teeth  -> control121592721
 * Odontogram Data -> control121592722
 */
(() => {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const STYLE_ID = "refera-odontogram-v4-styles";
  const BUILD = "4.0.0";
  const DEBUG = true;
  const FIELD_RETRY_MS = 250;
  const FIELD_RETRY_LIMIT = 80;
  const MOUNT_RETRY_MS = 150;
  const MOUNT_RETRY_LIMIT = 400;

  function log(...args) {
    if (DEBUG && window.console) console.log("[Odontogram V4]", ...args);
  }

  function warn(...args) {
    if (window.console) console.warn("[Odontogram V4]", ...args);
  }

  const TEETH = [
    { id:"UR8", universal:"1",  fdi:"18", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR7", universal:"2",  fdi:"17", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR6", universal:"3",  fdi:"16", quadrant:"Upper Right", family:"molar",    side:"right" },
    { id:"UR5", universal:"4",  fdi:"15", quadrant:"Upper Right", family:"premolar", side:"right" },
    { id:"UR4", universal:"5",  fdi:"14", quadrant:"Upper Right", family:"premolar", side:"right" },
    { id:"UR3", universal:"6",  fdi:"13", quadrant:"Upper Right", family:"canine",   side:"right" },
    { id:"UR2", universal:"7",  fdi:"12", quadrant:"Upper Right", family:"lateral",  side:"right" },
    { id:"UR1", universal:"8",  fdi:"11", quadrant:"Upper Right", family:"central",  side:"right" },

    { id:"UL1", universal:"9",  fdi:"21", quadrant:"Upper Left", family:"central",  side:"left" },
    { id:"UL2", universal:"10", fdi:"22", quadrant:"Upper Left", family:"lateral",  side:"left" },
    { id:"UL3", universal:"11", fdi:"23", quadrant:"Upper Left", family:"canine",   side:"left" },
    { id:"UL4", universal:"12", fdi:"24", quadrant:"Upper Left", family:"premolar", side:"left" },
    { id:"UL5", universal:"13", fdi:"25", quadrant:"Upper Left", family:"premolar", side:"left" },
    { id:"UL6", universal:"14", fdi:"26", quadrant:"Upper Left", family:"molar",    side:"left" },
    { id:"UL7", universal:"15", fdi:"27", quadrant:"Upper Left", family:"molar",    side:"left" },
    { id:"UL8", universal:"16", fdi:"28", quadrant:"Upper Left", family:"molar",    side:"left" },

    { id:"LR8", universal:"32", fdi:"48", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR7", universal:"31", fdi:"47", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR6", universal:"30", fdi:"46", quadrant:"Lower Right", family:"molar",    side:"right" },
    { id:"LR5", universal:"29", fdi:"45", quadrant:"Lower Right", family:"premolar", side:"right" },
    { id:"LR4", universal:"28", fdi:"44", quadrant:"Lower Right", family:"premolar", side:"right" },
    { id:"LR3", universal:"27", fdi:"43", quadrant:"Lower Right", family:"canine",   side:"right" },
    { id:"LR2", universal:"26", fdi:"42", quadrant:"Lower Right", family:"lateral",  side:"right" },
    { id:"LR1", universal:"25", fdi:"41", quadrant:"Lower Right", family:"central",  side:"right" },

    { id:"LL1", universal:"24", fdi:"31", quadrant:"Lower Left", family:"central",  side:"left" },
    { id:"LL2", universal:"23", fdi:"32", quadrant:"Lower Left", family:"lateral",  side:"left" },
    { id:"LL3", universal:"22", fdi:"33", quadrant:"Lower Left", family:"canine",   side:"left" },
    { id:"LL4", universal:"21", fdi:"34", quadrant:"Lower Left", family:"premolar", side:"left" },
    { id:"LL5", universal:"20", fdi:"35", quadrant:"Lower Left", family:"premolar", side:"left" },
    { id:"LL6", universal:"19", fdi:"36", quadrant:"Lower Left", family:"molar",    side:"left" },
    { id:"LL7", universal:"18", fdi:"37", quadrant:"Lower Left", family:"molar",    side:"left" },
    { id:"LL8", universal:"17", fdi:"38", quadrant:"Lower Left", family:"molar",    side:"left" }
  ];

  const TOOTH_PATHS = {
    central:  "M-14,-28 C-7,-31 7,-31 14,-28 C18,-18 17,-6 14,7 C12,18 8,28 0,31 C-8,28 -12,18 -14,7 C-17,-6 -18,-18 -14,-28 Z",
    lateral:  "M-12,-26 C-6,-30 6,-30 12,-26 C16,-17 15,-5 12,8 C10,18 7,27 0,30 C-7,27 -10,18 -12,8 C-15,-5 -16,-17 -12,-26 Z",
    canine:   "M-13,-24 C-7,-30 7,-30 13,-24 C18,-14 16,-1 12,11 C9,20 5,28 0,34 C-5,28 -9,20 -12,11 C-16,-1 -18,-14 -13,-24 Z",
    premolar: "M-17,-25 C-10,-31 10,-31 17,-25 C22,-15 20,-1 16,12 C13,23 8,30 0,31 C-8,30 -13,23 -16,12 C-20,-1 -22,-15 -17,-25 Z",
    molar:    "M-21,-25 C-13,-32 13,-32 21,-25 C27,-14 24,1 19,13 C15,24 9,31 0,32 C-9,31 -15,24 -19,13 C-24,1 -27,-14 -21,-25 Z"
  };

  const CSS = `
#odontogram-mount {
  --odv2-teal: #55aa8e;
  --odv2-teal-dark: #327f69;
  --odv2-text: #15363c;
  --odv2-muted: #7f878a;
  --odv2-line: #e4e9e6;
  --odv2-card: #fbfcfb;
  --odv2-selected: #edf9f5;
  width: 100%;
  color: var(--odv2-text);
  font-family: Arial, Helvetica, sans-serif;
}
#odontogram-mount *, #odontogram-mount *::before, #odontogram-mount *::after { box-sizing: border-box; }
.odv2-card {
  width: 100%;
  padding: 10px 12px 16px;
  border-radius: 6px;
  background: var(--odv2-card);
}
.odv2-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
}
.odv2-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}
.odv2-settings-wrap { position: relative; }
.odv2-icon-btn {
  width: 30px;
  height: 30px;
  padding: 6px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #8a9390;
  cursor: pointer;
}
.odv2-icon-btn:hover { background: #f0f4f2; color: var(--odv2-teal-dark); }
.odv2-icon-btn svg { width: 18px; height: 18px; fill: currentColor; }
.odv2-menu {
  position: absolute;
  z-index: 50;
  top: 34px;
  right: 0;
  width: 210px;
  padding: 18px;
  border: 1px solid #edf0ee;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 10px 30px rgba(30, 62, 54, .16);
}
.odv2-menu-title { margin-bottom: 12px; font-size: 14px; font-weight: 500; }
.odv2-segmented { display: inline-flex; }
.odv2-segmented button {
  min-width: 46px;
  padding: 7px 11px;
  border: 1px solid var(--odv2-teal);
  background: #fff;
  color: var(--odv2-teal-dark);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.odv2-segmented button:first-child { border-radius: 4px 0 0 4px; }
.odv2-segmented button:last-child { margin-left: -1px; border-radius: 0 4px 4px 0; }
.odv2-segmented button.is-active { background: var(--odv2-teal); color: #fff; }
.odv2-toolbar {
  display: flex;
  justify-content: center;
  margin: 2px 0 0;
}
.odv2-full-mouth {
  padding: 8px 18px;
  border: 1px solid var(--odv2-teal);
  border-radius: 4px;
  background: #fff;
  color: var(--odv2-teal-dark);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.odv2-full-mouth:hover { background: #f2faf7; }
.odv2-stage { width: 100%; margin-top: -2px; }
.odv2-svg { display: block; width: 100%; height: auto; overflow: visible; }
.odv2-arch { fill: none; stroke: var(--odv2-line); stroke-width: 1.3; }
.odv2-midline { stroke: #eef1ef; stroke-width: 1; stroke-dasharray: 3 5; }
.odv2-quadrant {
  fill: var(--odv2-muted);
  font-size: 13px;
  font-weight: 400;
}
.odv2-tooth {
  cursor: pointer;
  outline: none;
}
.odv2-hit { fill: transparent; pointer-events: all; }
.odv2-shape {
  fill: url(#odv2-tooth-gradient);
  stroke: #d8ded9;
  stroke-width: 1.15;
  vector-effect: non-scaling-stroke;
  transition: transform .14s ease, fill .14s ease, stroke .14s ease, stroke-width .14s ease;
}
.odv2-detail {
  fill: none;
  stroke: rgba(185,194,188,.45);
  stroke-width: .8;
  pointer-events: none;
}
.odv2-highlight {
  fill: rgba(255,255,255,.72);
  pointer-events: none;
}
.odv2-tooth:hover .odv2-shape {
  stroke: #b9c5be;
  transform: translateY(-1px);
}
.odv2-tooth.is-selected .odv2-shape {
  fill: url(#odv2-selected-gradient);
  stroke: var(--odv2-teal);
  stroke-width: 2.4;
}
.odv2-tooth.is-selected .odv2-detail { stroke: rgba(85,170,142,.45); }
.odv2-tooth:focus-visible .odv2-shape {
  stroke: var(--odv2-teal-dark);
  stroke-width: 2.8;
}
.odv2-number {
  fill: #777f82;
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
  dominant-baseline: middle;
}
.odv2-number.is-selected { fill: var(--odv2-teal-dark); }
.odv2-chips {
  min-height: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  padding-top: 3px;
}
.odv2-chip {
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  background: #65ae96;
  color: #fff;
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}
.odv2-chip:hover { background: var(--odv2-teal-dark); }
.odv2-icon-btn:focus-visible,
.odv2-full-mouth:focus-visible,
.odv2-segmented button:focus-visible,
.odv2-chip:focus-visible {
  outline: 2px solid var(--odv2-teal-dark);
  outline-offset: 2px;
}
.odv2-sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0,0,0,0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
@media (max-width: 520px) {
  .odv2-card { padding-inline: 4px; }
  .odv2-number { font-size: 11px; }
  .odv2-quadrant { font-size: 12px; }
  .odv2-menu { right: 2px; }
}
`;

  let mount, svg, settingsPanel, settingsButton, fullMouthButton, chips, liveRegion;
  const config = Object.freeze({
    selectedField: "control121592721",
    jsonField: "control121592722",
    defaultSystem: "universal"
  });

  const state = {
    system: "universal",
    selected: new Set()
  };

  const runtime = {
    fieldRetryCount: 0,
    fieldRetryTimer: null,
    observer: null,
    lastSelectedValue: null,
    lastJsonValue: null
  };

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function svgEl(name, attrs = {}) {
    const el = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k, v));
    return el;
  }

  function buildShell() {
    mount.innerHTML = `
      <section class="odv2-card" aria-labelledby="odv2-title">
        <div class="odv2-header">
          <h2 id="odv2-title" class="odv2-title">Teeth</h2>
          <div class="odv2-settings-wrap">
            <button type="button" class="odv2-icon-btn" aria-label="Tooth numbering settings"
              aria-expanded="false" aria-controls="odv2-menu">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm8.1 4.1v-1.6l-2-.7a7 7 0 0 0-.6-1.5l.9-1.9-1.1-1.1-1.9.9a7 7 0 0 0-1.5-.6l-.7-2h-1.6l-.7 2a7 7 0 0 0-1.5.6l-1.9-.9-1.1 1.1.9 1.9a7 7 0 0 0-.6 1.5l-2 .7v1.6l2 .7c.1.5.3 1 .6 1.5l-.9 1.9 1.1 1.1 1.9-.9c.5.3 1 .5 1.5.6l.7 2h1.6l.7-2c.5-.1 1-.3 1.5-.6l1.9.9 1.1-1.1-.9-1.9c.3-.5.5-1 .6-1.5l2-.7Z"/>
              </svg>
            </button>
            <div id="odv2-menu" class="odv2-menu" hidden>
              <div class="odv2-menu-title">Tooth Number System</div>
              <div class="odv2-segmented" role="radiogroup" aria-label="Tooth number system">
                <button type="button" data-system="universal" role="radio">UNS</button>
                <button type="button" data-system="fdi" role="radio">FDI</button>
              </div>
            </div>
          </div>
        </div>

        <div class="odv2-toolbar">
          <button type="button" class="odv2-full-mouth">Select full mouth</button>
        </div>

        <div class="odv2-stage">
          <svg class="odv2-svg" viewBox="0 0 560 670" role="group"
            aria-label="Interactive whole-tooth odontogram"></svg>
        </div>

        <div class="odv2-chips" aria-label="Selected teeth"></div>
        <div class="odv2-sr-only" aria-live="polite"></div>
      </section>
    `;

    svg = mount.querySelector(".odv2-svg");
    settingsPanel = mount.querySelector(".odv2-menu");
    settingsButton = mount.querySelector(".odv2-icon-btn");
    fullMouthButton = mount.querySelector(".odv2-full-mouth");
    chips = mount.querySelector(".odv2-chips");
    liveRegion = mount.querySelector(".odv2-sr-only");
  }

  function addDefs() {
    const defs = svgEl("defs");

    const grad = svgEl("linearGradient", { id:"odv2-tooth-gradient", x1:"0", y1:"0", x2:"0.8", y2:"1" });
    grad.append(
      svgEl("stop", { offset:"0%", "stop-color":"#ffffff" }),
      svgEl("stop", { offset:"58%", "stop-color":"#f7f8f6" }),
      svgEl("stop", { offset:"100%", "stop-color":"#e7ebe6" })
    );

    const selected = svgEl("linearGradient", { id:"odv2-selected-gradient", x1:"0", y1:"0", x2:"0.8", y2:"1" });
    selected.append(
      svgEl("stop", { offset:"0%", "stop-color":"#ffffff" }),
      svgEl("stop", { offset:"100%", "stop-color":"#eaf8f3" })
    );

    const shadow = svgEl("filter", { id:"odv2-shadow", x:"-35%", y:"-35%", width:"170%", height:"180%" });
    shadow.append(svgEl("feDropShadow", {
      dx:"0", dy:"2.2", stdDeviation:"2.2", "flood-color":"#849188", "flood-opacity":".16"
    }));

    defs.append(grad, selected, shadow);
    svg.append(defs);
  }

  function addGuidesAndLabels() {
    const guides = svgEl("g", { "aria-hidden":"true" });
    guides.append(
      svgEl("path", { class:"odv2-arch", d:"M52 288 C55 116 166 57 280 57 C394 57 505 116 508 288" }),
      svgEl("path", { class:"odv2-arch", d:"M52 380 C55 553 166 615 280 615 C394 615 505 553 508 380" }),
      svgEl("line", { class:"odv2-midline", x1:"280", y1:"70", x2:"280", y2:"600" })
    );
    svg.append(guides);

    const labels = [
      ["Upper Right", 74, 126, "start"],
      ["Upper Left", 486, 126, "end"],
      ["Lower Right", 74, 565, "start"],
      ["Lower Left", 486, 565, "end"]
    ];

    labels.forEach(([text,x,y,anchor]) => {
      const t = svgEl("text", { class:"odv2-quadrant", x, y, "text-anchor":anchor });
      t.textContent = text;
      svg.append(t);
    });
  }

  function positionFor(index, upper) {
    const t = index / 15;
    const angle = upper ? Math.PI - Math.PI*t : Math.PI + Math.PI*t;

    const cx = 280;
    const cy = upper ? 296 : 374;
    const rx = 214;
    const ry = upper ? 165 : 176;

    const x = cx + rx*Math.cos(angle);
    const y = cy - ry*Math.sin(angle);

    const rotation = upper ? (t-.5)*92 : -(t-.5)*92;

    const edge = Math.abs(t-.5)*2;
    const scale = 0.90 + (1-edge)*0.08;

    return { x, y, rotation, scale };
  }

  function detailPath(family) {
    if (family === "molar") return "M-10,-9 C-3,-2 3,-2 10,-9 M-11,2 C-4,8 4,8 11,2";
    if (family === "premolar") return "M-8,-8 C-2,-2 2,-2 8,-8";
    return "M-7,-10 C-2,-6 2,-6 7,-10";
  }

  function addTeeth() {
    TEETH.forEach((tooth, index) => {
      const upper = index < 16;
      const rowIndex = upper ? index : index - 16;
      const pos = positionFor(rowIndex, upper);

      const group = svgEl("g", {
        class:"odv2-tooth",
        "data-tooth-id":tooth.id,
        role:"button",
        tabindex:"0",
        "aria-pressed":"false",
        transform:`translate(${pos.x.toFixed(2)} ${pos.y.toFixed(2)}) rotate(${pos.rotation.toFixed(2)}) scale(${pos.scale.toFixed(3)})`
      });

      const hit = svgEl("rect", { class:"odv2-hit", x:"-31", y:"-39", width:"62", height:"79", rx:"12" });
      const shape = svgEl("path", { class:"odv2-shape", d:TOOTH_PATHS[tooth.family], filter:"url(#odv2-shadow)" });
      const highlight = svgEl("path", {
        class:"odv2-highlight",
        d:"M-9,-21 C-4,-25 4,-25 9,-21 C4,-18 -4,-18 -9,-21 Z"
      });
      const detail = svgEl("path", { class:"odv2-detail", d:detailPath(tooth.family) });

      group.append(hit, shape, highlight, detail);
      svg.append(group);

      const cx = 280;
      const cy = upper ? 296 : 374;
      const dx = pos.x - cx;
      const dy = pos.y - cy;
      const len = Math.hypot(dx,dy) || 1;
      const offset = upper ? 41 : 44;

      const number = svgEl("text", {
        class:"odv2-number",
        "data-number-for":tooth.id,
        x:(pos.x + dx/len*offset).toFixed(2),
        y:(pos.y + dy/len*offset).toFixed(2),
        "text-anchor":"middle"
      });
      svg.append(number);
    });
  }

  function toothById(id) {
    return TEETH.find(t => t.id === id);
  }

  function selectedTeeth() {
    return TEETH.filter(t => state.selected.has(t.id));
  }

  function findField(identifier) {
    if (!identifier) return null;

    // 123FormBuilder may expose the identifier as either id or name.
    const byId = document.getElementById(identifier);
    if (byId) return byId;

    const candidates = document.getElementsByName(identifier);
    if (candidates && candidates.length) return candidates[0];

    return null;
  }

  function updateField(identifier, value) {
    const field = findField(identifier);
    if (!field) return false;

    if (field.value !== value) {
      field.value = value;
      field.dispatchEvent(new Event("input", { bubbles:true }));
      field.dispatchEvent(new Event("change", { bubbles:true }));
      field.dispatchEvent(new Event("blur", { bubbles:true }));
    }
    return true;
  }

  function readableValue() {
    const selected = selectedTeeth();
    if (!selected.length) return "No teeth selected";
    return `Universal: ${selected.map(t=>t.universal).join(", ")}\nFDI: ${selected.map(t=>t.fdi).join(", ")}`;
  }

  function jsonValue() {
    return JSON.stringify({
      version:"4.0",
      displayNumbering:state.system,
      selectedTeeth:selectedTeeth().map(t => ({
        id:t.id,
        universal:t.universal,
        fdi:t.fdi,
        quadrant:t.quadrant
      }))
    });
  }

  function scheduleFieldRetry() {
    if (runtime.fieldRetryTimer || runtime.fieldRetryCount >= FIELD_RETRY_LIMIT) return;

    runtime.fieldRetryTimer = setTimeout(() => {
      runtime.fieldRetryTimer = null;
      runtime.fieldRetryCount += 1;
      syncFields();

      if (runtime.fieldRetryCount === FIELD_RETRY_LIMIT) {
        warn("Field discovery timed out.", {
          selectedField: config.selectedField,
          jsonField: config.jsonField
        });
      }
    }, FIELD_RETRY_MS);
  }

  function syncFields() {
    const selectedValue = readableValue();
    const jsonData = jsonValue();

    const selectedOk = updateField(config.selectedField, selectedValue);
    const jsonOk = updateField(config.jsonField, jsonData);

    runtime.lastSelectedValue = selectedValue;
    runtime.lastJsonValue = jsonData;

    if (selectedOk && jsonOk) {
      if (runtime.fieldRetryCount > 0) {
        log("Storage fields discovered after retry", runtime.fieldRetryCount);
      }
      runtime.fieldRetryCount = 0;
      if (runtime.fieldRetryTimer) {
        clearTimeout(runtime.fieldRetryTimer);
        runtime.fieldRetryTimer = null;
      }
      return true;
    }

    scheduleFieldRetry();
    return false;
  }

  function renderChips() {
    chips.innerHTML = "";
    selectedTeeth().forEach(tooth => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "odv2-chip";
      chip.dataset.removeTooth = tooth.id;
      chip.textContent = tooth[state.system];
      chip.setAttribute("aria-label", `Remove tooth ${tooth[state.system]}`);
      chips.append(chip);
    });
  }

  function render() {
    svg.querySelectorAll(".odv2-tooth").forEach(group => {
      const tooth = toothById(group.dataset.toothId);
      const selected = state.selected.has(tooth.id);
      group.classList.toggle("is-selected", selected);
      group.setAttribute("aria-pressed", String(selected));
      group.setAttribute("aria-label", `${tooth.quadrant}, tooth ${tooth[state.system]}, ${selected ? "selected" : "not selected"}`);

      const number = svg.querySelector(`[data-number-for="${tooth.id}"]`);
      if (number) {
        number.textContent = tooth[state.system];
        number.classList.toggle("is-selected", selected);
      }
    });

    mount.querySelectorAll("[data-system]").forEach(btn => {
      const active = btn.dataset.system === state.system;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-checked", String(active));
    });

    fullMouthButton.textContent = state.selected.size === TEETH.length ? "Clear full mouth" : "Select full mouth";
    renderChips();
    syncFields();
  }

  function toggleTooth(id) {
    const tooth = toothById(id);
    if (!tooth) return;
    if (state.selected.has(id)) state.selected.delete(id);
    else state.selected.add(id);

    liveRegion.textContent = `Tooth ${tooth[state.system]} ${state.selected.has(id) ? "selected" : "removed"}.`;
    render();
  }

  function bindEvents() {
    svg.addEventListener("click", e => {
      const tooth = e.target.closest(".odv2-tooth");
      if (tooth) toggleTooth(tooth.dataset.toothId);
    });

    svg.addEventListener("keydown", e => {
      const tooth = e.target.closest(".odv2-tooth");
      if (!tooth) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTooth(tooth.dataset.toothId);
      }
    });

    settingsButton.addEventListener("click", () => {
      const opening = settingsPanel.hidden;
      settingsPanel.hidden = !opening;
      settingsButton.setAttribute("aria-expanded", String(opening));
    });

    mount.querySelectorAll("[data-system]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.system = btn.dataset.system;
        settingsPanel.hidden = true;
        settingsButton.setAttribute("aria-expanded", "false");
        render();
      });
    });

    fullMouthButton.addEventListener("click", () => {
      if (state.selected.size === TEETH.length) {
        state.selected.clear();
        liveRegion.textContent = "All teeth cleared.";
      } else {
        TEETH.forEach(t => state.selected.add(t.id));
        liveRegion.textContent = "Full mouth selected.";
      }
      render();
    });

    chips.addEventListener("click", e => {
      const chip = e.target.closest("[data-remove-tooth]");
      if (chip) toggleTooth(chip.dataset.removeTooth);
    });

    document.addEventListener("click", e => {
      const wrap = mount.querySelector(".odv2-settings-wrap");
      if (!wrap.contains(e.target)) {
        settingsPanel.hidden = true;
        settingsButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  function applyBuiltInConfig() {
    state.system = config.defaultSystem === "fdi" ? "fdi" : "universal";
  }

  function restoreFieldValuesIfNeeded() {
    if (runtime.lastSelectedValue !== null) {
      updateField(config.selectedField, runtime.lastSelectedValue);
    }
    if (runtime.lastJsonValue !== null) {
      updateField(config.jsonField, runtime.lastJsonValue);
    }
  }

  function installObserver() {
    if (runtime.observer || !document.body) return;

    runtime.observer = new MutationObserver(() => {
      const currentMount = document.getElementById("odontogram-mount");

      // Reinitialize if 123FormBuilder replaces the HTML block.
      if (currentMount && currentMount.dataset.odontogramReady !== "v4") {
        log("Mount replacement detected; reinitializing.");
        initialize();
      }

      // Reapply values if form fields are redrawn.
      restoreFieldValuesIfNeeded();
    });

    runtime.observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    log("DOM observer installed.");
  }

  function initialize() {
    mount = document.getElementById("odontogram-mount");
    if (!mount || mount.dataset.odontogramReady === "v4") return false;

    mount.dataset.odontogramReady = "v4";
    log(`Initializing build ${BUILD}`, {
      selectedField: config.selectedField,
      jsonField: config.jsonField
    });
    injectStyles();
    applyBuiltInConfig();
    buildShell();
    addDefs();
    addGuidesAndLabels();
    addTeeth();
    bindEvents();
    render();
    installObserver();
    log("Initialization complete.");
    return true;
  }

  function waitForMount() {
    if (initialize()) return;

    let attempts = 0;
    const timer = setInterval(() => {
      attempts += 1;

      if (initialize()) {
        clearInterval(timer);
        return;
      }

      if (attempts >= MOUNT_RETRY_LIMIT) {
        clearInterval(timer);
        warn("Mount element was not found before timeout. Expected: <div id=\"odontogram-mount\"></div>");
      }
    }, MOUNT_RETRY_MS);
  }

  window.ReferaOdontogramV4 = Object.freeze({
    version: BUILD,
    diagnostics() {
      return {
        version: BUILD,
        mountFound: !!document.getElementById("odontogram-mount"),
        selectedFieldFound: !!findField(config.selectedField),
        jsonFieldFound: !!findField(config.jsonField),
        selectedCount: state.selected.size,
        numberingSystem: state.system
      };
    },
    resync() {
      log("Manual resync requested.");
      return syncFields();
    }
  });

  window.addEventListener("error", event => {
    warn("Runtime error:", event.message);
  });

  log(`Script loaded. Build ${BUILD}`);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForMount);
  } else {
    waitForMount();
  }
})();
