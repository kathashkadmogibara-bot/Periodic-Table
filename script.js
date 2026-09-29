document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     TRANSLATIONS (UI text only — element names stay in English,
     since a verified full Assamese chemistry glossary isn't available)
  ============================================================ */
  const translations = {
    pageTitle: { en: "Periodic Table", as: "পৰ্যায় সাৰণী" },
    pageSubtitle: { en: "Interactive Periodic Table of Elements", as: "মৌলসমূহৰ ইণ্টাৰেক্টিভ পৰ্যায় সাৰণী" },
    filtersBtn: { en: "Filters", as: "ফিল্টাৰ" },
    themeBtn: { en: "Dark / Light", as: "গাঢ় / পাতল" },
    categoryHeading: { en: "Element Category", as: "মৌলৰ শ্ৰেণী" },
    shellsHeading: { en: "Electron Shells", as: "ইলেক্ট্ৰন শ্বেল" },
    applyBtn: { en: "Apply Filters", as: "ফিল্টাৰ প্ৰয়োগ কৰক" },
    clearBtn: { en: "Clear", as: "মচি পেলাওক" },
    clearAllBtn: { en: "Clear All Filters", as: "সকলো ফিল্টাৰ মচি পেলাওক" },
    groupCategory: { en: "Category", as: "শ্ৰেণী" },
    groupState: { en: "State", as: "অৱস্থা" },
    groupShells: { en: "Electron Shells", as: "ইলেক্ট্ৰন শ্বেল" },
    groupAtomic: { en: "Atomic Number", as: "পাৰমাণৱিক সংখ্যা" },
    stateSolid: { en: "Solid", as: "কঠিন" },
    stateLiquid: { en: "Liquid", as: "তৰল" },
    stateGas: { en: "Gas", as: "গেছ" },
    atomicMin: { en: "Min", as: "নূন্যতম" },
    atomicMax: { en: "Max", as: "সৰ্বাধিক" },
    seeBtn: { en: "See", as: "চাওক" },
    elementsWord: { en: "elements", as: "টা মৌল" },
    legendHeading: { en: "Element Categories", as: "মৌলৰ শ্ৰেণীসমূহ" },
    footerText: { en: "Interactive Periodic Table • 118 Elements", as: "ইণ্টাৰেক্টিভ পৰ্যায় সাৰণী • ১১৮ টা মৌল" },

    "cat-alkali-metal": { en: "Alkali Metals", as: "ক্ষাৰ ধাতু" },
    "cat-alkaline-earth-metal": { en: "Alkaline Earth Metals", as: "ক্ষাৰীয় মৃত্তিকা ধাতু" },
    "cat-transition-metal": { en: "Transition Metals", as: "সংক্ৰমণ ধাতু" },
    "cat-post-transition-metal": { en: "Post-Transition Metals", as: "উত্তৰ-সংক্ৰমণ ধাতু" },
    "cat-metalloid": { en: "Metalloids", as: "উপধাতু" },
    "cat-nonmetal": { en: "Nonmetals", as: "অধাতু" },
    "cat-halogen": { en: "Halogens", as: "হেলোজেন" },
    "cat-noble-gas": { en: "Noble Gases", as: "নিষ্ক্ৰিয় গেছ" },
    "cat-lanthanide": { en: "Lanthanides", as: "লেন্থানাইড" },
    "cat-actinide": { en: "Actinides", as: "এক্টিনাইড" },

    "cat-alkali-metal-single": { en: "Alkali Metal", as: "ক্ষাৰ ধাতু" },
    "cat-alkaline-earth-metal-single": { en: "Alkaline Earth Metal", as: "ক্ষাৰীয় মৃত্তিকা ধাতু" },
    "cat-transition-metal-single": { en: "Transition Metal", as: "সংক্ৰমণ ধাতু" },
    "cat-post-transition-metal-single": { en: "Post-Transition Metal", as: "উত্তৰ-সংক্ৰমণ ধাতু" },
    "cat-metalloid-single": { en: "Metalloid", as: "উপধাতু" },
    "cat-nonmetal-single": { en: "Nonmetal", as: "অধাতু" },
    "cat-halogen-single": { en: "Halogen", as: "হেলোজেন" },
    "cat-noble-gas-single": { en: "Noble Gas", as: "নিষ্ক্ৰিয় গেছ" },
    "cat-lanthanide-single": { en: "Lanthanide", as: "লেন্থানাইড" },
    "cat-actinide-single": { en: "Actinide", as: "এক্টিনাইড" },

    shell1: { en: "1 Shell", as: "১ শ্বেল" },
    shell2: { en: "2 Shells", as: "২ শ্বেল" },
    shell3: { en: "3 Shells", as: "৩ শ্বেল" },
    shell4: { en: "4 Shells", as: "৪ শ্বেল" },
    shell5: { en: "5 Shells", as: "৫ শ্বেল" },
    shell6: { en: "6 Shells", as: "৬ শ্বেল" },
    shell7: { en: "7 Shells", as: "৭ শ্বেল" },

    infoAtomicLabel: { en: "Atomic Number: ", as: "পাৰমাণৱিক সংখ্যা: " },
    infoShellsLabel: { en: "Electron Shells: ", as: "ইলেক্ট্ৰন শ্বেল: " },
    infoStateLabel: { en: "State: ", as: "অৱস্থা: " }
  };

  const stateLabels = {
    solid: { en: "Solid", as: "কঠিন" },
    liquid: { en: "Liquid", as: "তৰল" },
    gas: { en: "Gas", as: "গেছ" }
  };

  const categoryDisplay = {
    "alkali-metal": "cat-alkali-metal-single",
    "alkaline-earth-metal": "cat-alkaline-earth-metal-single",
    "transition-metal": "cat-transition-metal-single",
    "post-transition-metal": "cat-post-transition-metal-single",
    "metalloid": "cat-metalloid-single",
    "nonmetal": "cat-nonmetal-single",
    "halogen": "cat-halogen-single",
    "noble-gas": "cat-noble-gas-single",
    "lanthanide": "cat-lanthanide-single",
    "actinide": "cat-actinide-single"
  };

  let lang = "en";
  let lastClickedTile = null;

  /* ============================================================
     ELEMENTS
  ============================================================ */
  const filterButton = document.getElementById("filterButton");
  const closeFilterButton = document.getElementById("closeFilterButton");
  const filterPanel = document.getElementById("filterPanel");
  const applyFilterButton = document.getElementById("applyFilterButton");
  const clearFilterButton = document.getElementById("clearFilterButton");
  const filterResultCount = document.getElementById("filterResultCount");

  const filterGroups = document.getElementById("filterGroups");
  const filterOptions = document.getElementById("filterOptions");

  const atomicMin = document.getElementById("atomicMin");
  const atomicMax = document.getElementById("atomicMax");
  const atomicMinSlider = document.getElementById("atomicMinSlider");
  const atomicMaxSlider = document.getElementById("atomicMaxSlider");

  const languageButton = document.getElementById("languageButton");
  const themeButton = document.getElementById("themeButton");

  const elementInfoPanel = document.getElementById("elementInfoPanel");
  const closeElementInfo = document.getElementById("closeElementInfo");

  const allTiles = document.querySelectorAll(".element-tile");

  /* ============================================================
     1. FILTER PANEL
  ============================================================ */
  filterButton.addEventListener("click", () => {
    filterPanel.classList.add("active");
    filterPanel.setAttribute("aria-hidden", "false");
    updateResultCount();
  });

  closeFilterButton.addEventListener("click", () => {
    filterPanel.classList.remove("active");
    filterPanel.setAttribute("aria-hidden", "true");
  });

  // --- Left group list: switch which options panel shows on the right ---
  filterGroups.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-group-btn");
    if (!btn) return;

    filterGroups.querySelectorAll(".filter-group-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const group = btn.dataset.group;
    filterOptions.querySelectorAll(".filter-panel-section").forEach(section => {
      section.hidden = section.dataset.panel !== group;
    });
  });

  // --- Atomic number range: keep number inputs and sliders in sync ---
  function syncAtomicFromNumbers() {
    let min = parseInt(atomicMin.value, 10) || 1;
    let max = parseInt(atomicMax.value, 10) || 118;
    min = Math.min(Math.max(min, 1), 118);
    max = Math.min(Math.max(max, 1), 118);
    if (min > max) { [min, max] = [max, min]; }
    atomicMin.value = min;
    atomicMax.value = max;
    atomicMinSlider.value = min;
    atomicMaxSlider.value = max;
    updateResultCount();
  }

  function syncAtomicFromSliders() {
    let min = parseInt(atomicMinSlider.value, 10);
    let max = parseInt(atomicMaxSlider.value, 10);
    if (min > max) { [min, max] = [max, min]; }
    atomicMin.value = min;
    atomicMax.value = max;
    updateResultCount();
  }

  [atomicMin, atomicMax].forEach(input => input.addEventListener("input", syncAtomicFromNumbers));
  [atomicMinSlider, atomicMaxSlider].forEach(input => input.addEventListener("input", syncAtomicFromSliders));

  // --- Live-updating count as any filter changes ---
  document.querySelectorAll(".category-filter, .state-filter, .shell-filter").forEach(cb => {
    cb.addEventListener("change", updateResultCount);
  });

  function matchesFilters(tile) {
    const checkedCategories = Array.from(document.querySelectorAll(".category-filter:checked")).map(cb => cb.value);
    const checkedStates = Array.from(document.querySelectorAll(".state-filter:checked")).map(cb => cb.value);
    const checkedShells = Array.from(document.querySelectorAll(".shell-filter:checked")).map(cb => cb.value);
    const minAtomic = parseInt(atomicMin.value, 10) || 1;
    const maxAtomic = parseInt(atomicMax.value, 10) || 118;

    const category = tile.dataset.category;
    const state = tile.dataset.state || "solid";
    const shells = tile.dataset.shells;
    const atomicNumber = parseInt(tile.dataset.atomicNumber, 10);

    const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(category);
    const stateMatch = checkedStates.length === 0 || checkedStates.includes(state);
    const shellMatch = checkedShells.length === 0 || checkedShells.includes(shells);
    const atomicMatch = atomicNumber >= minAtomic && atomicNumber <= maxAtomic;

    return categoryMatch && stateMatch && shellMatch && atomicMatch;
  }

  function updateResultCount() {
    let count = 0;
    allTiles.forEach(tile => { if (matchesFilters(tile)) count++; });
    filterResultCount.textContent = count;
  }

  function applyFilters() {
    allTiles.forEach(tile => {
      tile.classList.toggle("filtered-out", !matchesFilters(tile));
    });
  }

  applyFilterButton.addEventListener("click", () => {
    applyFilters();
    filterPanel.classList.remove("active");
    filterPanel.setAttribute("aria-hidden", "true");
  });

  clearFilterButton.addEventListener("click", () => {
    document.querySelectorAll(".category-filter, .state-filter, .shell-filter").forEach(cb => (cb.checked = false));
    atomicMin.value = 1;
    atomicMax.value = 118;
    atomicMinSlider.value = 1;
    atomicMaxSlider.value = 118;
    allTiles.forEach(tile => tile.classList.remove("filtered-out"));
    updateResultCount();
  });

  /* ============================================================
     2. ELEMENT INFO POPUP
  ============================================================ */
  function openElementInfo(tile) {
    const atomicNumber = tile.dataset.atomicNumber;
    const category = tile.dataset.category;
    const shells = tile.dataset.shells;
    const state = tile.dataset.state || "solid";
    const symbol = tile.querySelector(".symbol").textContent;
    const name = tile.querySelector(".element-name").textContent;

    document.getElementById("infoAtomicNumber").textContent = atomicNumber;
    document.getElementById("infoSymbol").textContent = symbol;
    document.getElementById("infoElementName").textContent = name;

    const catKey = categoryDisplay[category];
    document.getElementById("infoCategory").textContent = catKey ? translations[catKey][lang] : category;

    document.getElementById("infoAtomicNumberText").textContent = atomicNumber;
    document.getElementById("infoShells").textContent = shells;
    document.getElementById("infoState").textContent = stateLabels[state] ? stateLabels[state][lang] : state;

    elementInfoPanel.classList.add("active");
    elementInfoPanel.setAttribute("aria-hidden", "false");
  }

  allTiles.forEach(tile => {
    tile.addEventListener("click", () => {
      lastClickedTile = tile;
      openElementInfo(tile);
    });
  });

  closeElementInfo.addEventListener("click", () => {
    elementInfoPanel.classList.remove("active");
    elementInfoPanel.setAttribute("aria-hidden", "true");
  });

  elementInfoPanel.addEventListener("click", (e) => {
    if (e.target === elementInfoPanel) {
      elementInfoPanel.classList.remove("active");
      elementInfoPanel.setAttribute("aria-hidden", "true");
    }
  });

  /* ============================================================
     3. LANGUAGE SWITCH (Assamese / English)
  ============================================================ */
  function applyLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      const entry = translations[key];
      if (!entry) return;

      if (key === "infoAtomicLabel" || key === "infoShellsLabel" || key === "infoStateLabel") {
        // These <p> tags have a trailing <span> with a live value — only replace the leading text node.
        if (el.firstChild && el.firstChild.nodeType === Node.TEXT_NODE) {
          el.firstChild.textContent = entry[lang];
        }
      } else {
        el.textContent = entry[lang];
      }
    });

    // Refresh open info popup (category/state) if visible
    if (elementInfoPanel.classList.contains("active") && lastClickedTile) {
      openElementInfo(lastClickedTile);
    }
  }

  languageButton.addEventListener("click", () => {
    lang = lang === "en" ? "as" : "en";
    applyLanguage();
  });

  /* ============================================================
     4. DARK / LIGHT THEME SWITCH
  ============================================================ */
  function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("mogibara-theme", theme); } catch (e) {}
  }

  themeButton.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
  });

  /* ============================================================
     INIT
  ============================================================ */
  let savedTheme = "light";
  try { savedTheme = localStorage.getItem("mogibara-theme") || "light"; } catch (e) {}
  applyTheme(savedTheme);
  applyLanguage();
  updateResultCount();
});
