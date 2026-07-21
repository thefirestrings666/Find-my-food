(function () {
  const state = {
    lang: "fr",
    category: "all",
    meats: new Set()
  };

  function detectInitialLang() {
    const stored = localStorage.getItem("fmf-lang");
    if (stored && UI_STRINGS[stored]) return stored;
    const nav = (navigator.language || "fr").slice(0, 2);
    if (UI_STRINGS[nav]) return nav;
    return "fr";
  }

  function buildCategoryTabs() {
    const wrap = document.getElementById("category-tabs");
    wrap.innerHTML = "";
    const allBtn = document.createElement("button");
    allBtn.type = "button";
    allBtn.className = "chip chip--tab is-active";
    allBtn.dataset.category = "all";
    allBtn.setAttribute("data-i18n", "categoryAll");
    allBtn.addEventListener("click", () => setCategory("all"));
    wrap.appendChild(allBtn);

    CATEGORY_ORDER.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip chip--tab";
      btn.dataset.category = cat;
      btn.setAttribute("data-i18n-cat", cat);
      btn.addEventListener("click", () => setCategory(cat));
      wrap.appendChild(btn);
    });
  }

  function buildMeatChips() {
    const wrap = document.getElementById("meat-chips");
    wrap.innerHTML = "";
    MEAT_ORDER.forEach((meat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip chip--toggle";
      btn.dataset.meat = meat;
      btn.setAttribute("data-i18n-meat", meat);
      btn.addEventListener("click", () => toggleMeat(meat, btn));
      wrap.appendChild(btn);
    });
  }

  function buildCard(snack) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = snack.id;
    card.dataset.category = snack.category;
    card.dataset.meats = snack.meats.join(" ");

    const img = document.createElement("img");
    img.className = "photo";
    img.loading = "lazy";
    img.src = snack.image;
    img.alt = snack.i18n[state.lang].name;

    const body = document.createElement("div");
    body.className = "body";

    const h3 = document.createElement("h3");
    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = snack.price;
    h3.appendChild(nameSpan);
    h3.appendChild(priceSpan);

    const p = document.createElement("p");
    p.className = "desc";

    body.appendChild(h3);
    body.appendChild(p);
    card.appendChild(img);
    card.appendChild(body);
    return card;
  }

  function buildCards() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    CATEGORY_ORDER.forEach((cat) => {
      const items = SNACKS.filter((s) => s.category === cat);
      if (items.length === 0) return;

      const section = document.createElement("section");
      section.className = "category-section";
      section.dataset.category = cat;

      const eyebrow = document.createElement("h2");
      eyebrow.className = "category-eyebrow";
      eyebrow.setAttribute("data-i18n-cat", cat);
      section.appendChild(eyebrow);

      const sectionGrid = document.createElement("div");
      sectionGrid.className = "grid";
      items.forEach((snack) => sectionGrid.appendChild(buildCard(snack)));
      section.appendChild(sectionGrid);

      grid.appendChild(section);
    });
  }

  function applyTexts() {
    const strings = UI_STRINGS[state.lang];
    document.documentElement.lang = state.lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) el.textContent = strings[key];
    });
    document.querySelectorAll("[data-i18n-cat]").forEach((el) => {
      const key = el.getAttribute("data-i18n-cat");
      el.textContent = strings.category[key];
    });
    document.querySelectorAll("[data-i18n-meat]").forEach((el) => {
      const key = el.getAttribute("data-i18n-meat");
      el.textContent = strings.meat[key];
    });

    document.querySelectorAll(".card").forEach((card) => {
      const snack = SNACKS.find((s) => s.id === card.dataset.id);
      const text = snack.i18n[state.lang];
      card.querySelector(".name").textContent = text.name;
      card.querySelector(".desc").textContent = text.desc;
      card.querySelector(".photo").alt = text.name;
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
    });
  }

  function setLanguage(lang) {
    if (!UI_STRINGS[lang]) return;
    state.lang = lang;
    localStorage.setItem("fmf-lang", lang);
    applyTexts();
  }

  function setCategory(cat) {
    state.category = cat;
    document.querySelectorAll(".chip--tab").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.category === cat);
    });
    applyFilters();
  }

  function toggleMeat(meat, btn) {
    if (state.meats.has(meat)) {
      state.meats.delete(meat);
      btn.classList.remove("is-active");
    } else {
      state.meats.add(meat);
      btn.classList.add("is-active");
    }
    applyFilters();
  }

  function resetFilters() {
    state.category = "all";
    state.meats.clear();
    document.querySelectorAll(".chip--tab").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.category === "all");
    });
    document.querySelectorAll(".chip--toggle").forEach((btn) => btn.classList.remove("is-active"));
    applyFilters();
  }

  function applyFilters() {
    let visibleCount = 0;

    document.querySelectorAll(".category-section").forEach((section) => {
      const matchesCategory = state.category === "all" || section.dataset.category === state.category;
      let sectionVisibleCount = 0;

      section.querySelectorAll(".card").forEach((card) => {
        const cardMeats = card.dataset.meats.split(" ");
        const matchesMeat = state.meats.size === 0 || cardMeats.some((m) => state.meats.has(m));
        const visible = matchesCategory && matchesMeat;
        card.hidden = !visible;
        if (visible) sectionVisibleCount++;
      });

      section.hidden = sectionVisibleCount === 0;
      visibleCount += sectionVisibleCount;
    });

    const activeCount = (state.category !== "all" ? 1 : 0) + state.meats.size;
    const badge = document.getElementById("filter-count");
    badge.textContent = activeCount > 0 ? String(activeCount) : "";
    badge.hidden = activeCount === 0;

    document.getElementById("empty-state").hidden = visibleCount !== 0;
  }

  function wireStaticControls() {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
    document.getElementById("reset-filters").addEventListener("click", resetFilters);
    document.getElementById("filters-toggle").addEventListener("click", () => {
      const panel = document.getElementById("filters-panel");
      const isOpen = panel.classList.toggle("is-open");
      document.getElementById("filters-toggle").setAttribute("aria-expanded", String(isOpen));
    });
  }

  function init() {
    state.lang = detectInitialLang();
    buildCategoryTabs();
    buildMeatChips();
    buildCards();
    wireStaticControls();
    applyTexts();
    applyFilters();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
