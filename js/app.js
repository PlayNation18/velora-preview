/* VELORA — UI-Helfer, Karten, Motion, Suche */

function getDefaultColor(product) {
  if (product && product.colors && product.colors.length) return product.colors[0];
  return null;
}

function productDisplayImage(product) {
  const c = getDefaultColor(product);
  return (c && c.image) || product.image || "";
}

function productImageHtml(product, className = "product-visual", imageSrc) {
  const src = imageSrc || productDisplayImage(product);
  const img = src
    ? `<img src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async"
         onerror="this.style.display='none'; const fb=this.nextElementSibling; if(fb) fb.style.display='flex';" />`
    : "";
  const swatch = (getDefaultColor(product) && getDefaultColor(product).hex) || product.color;
  return `
    <div class="${className}" style="--swatch:${swatch};--accent:${product.accent || "#c5a059"}">
      ${img}
      <div class="product-fallback" aria-hidden="true" ${src ? 'style="display:none"' : ""}>
        <span class="fallback-label">${escapeHtml(product.name.split(" ")[0])}</span>
      </div>
    </div>`;
}

function colorDotsHtml(product) {
  if (!product.colors || product.colors.length < 2 || product.colorsAsText) return "";
  const dots = product.colors
    .slice(0, 8)
    .map(
      (c) =>
        `<span class="card-swatch-dot" style="background:${escapeHtml(c.hex)}" title="${escapeHtml(c.name)}"></span>`
    )
    .join("");
  return `<div class="card-swatches" aria-hidden="true">${dots}</div>`;
}

/** Preis für Karten: bei Sale mit durchgestrichenem Altpreis (DEMO), bei Textvarianten „ab“. */
function priceHtml(product) {
  if (isSale(product)) {
    return `<span class="price-old">${formatPrice(product.oldPrice)}</span> <span class="price-sale">${formatPrice(product.price)}</span> <span class="sale-badge" title="Demo-Preis">−${salePercent(product)} % · Demo</span>`;
  }
  return (product.colorsAsText ? "ab " : "") + formatPrice(lowestPrice(product));
}

function productCardHtml(product, index = 0) {
  const typeLabel = TYPE_LABELS[product.type] || CATEGORY_LABELS[product.category] || "";
  const g = typeof productGender === "function" ? productGender(product) : "";
  /* Unisex-Artikel erscheinen in beiden Welten und sind markiert; in der gemischten Ansicht trägt jede Karte ihre Welt. */
  const badge = g === "unisex" ? ' <span class="gender-badge">Unisex</span>' : window.VELORA_SHOW_GENDER && g ? " · " + escapeHtml(GENDER_LABELS[g]) : "";
  const w = window.VELORA_WORLD && window.VELORA_WORLD !== "alle" ? "&w=" + window.VELORA_WORLD : "";
  return `
    <a class="product-card reveal" href="product.html?id=${encodeURIComponent(product.id)}${w}"
       style="--reveal-delay:${Math.min(index, 12) * 60}ms">
      ${productImageHtml(product)}
      <div class="product-card-body">
        <p class="product-cat">${escapeHtml(typeLabel)}${badge}</p>
        <h3>${escapeHtml(product.name)}</h3>
        <p class="product-price">${priceHtml(product)}</p>
        ${colorDotsHtml(product)}
      </div>
    </a>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML =
      '<p class="empty-state">Keine Produkte gefunden. Bitte Filter oder Suche anpassen.</p>';
    return;
  }
  container.innerHTML = products.map((p, i) => productCardHtml(p, i)).join("");
  requestAnimationFrame(() => initReveals(container));
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function initNavDropdown() {
  const dd = document.getElementById("nav-dropdown");
  const btn = document.getElementById("nav-dropdown-toggle");
  if (!dd || !btn) return;
  const setOpen = (open) => {
    dd.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  };
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!dd.classList.contains("is-open"));
  });
  document.addEventListener("click", (e) => {
    if (!dd.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dd.classList.contains("is-open")) {
      setOpen(false);
      btn.focus();
    }
  });
  dd.addEventListener("focusout", (e) => {
    if (e.relatedTarget && !dd.contains(e.relatedTarget)) setOpen(false);
  });
  /* Auf Unterseiten: Kollektion markieren, wenn ein Unterpunkt aktiv ist (Shop macht das selbst) */
  if (dd.querySelector("a.is-active")) btn.classList.add("is-active");
}

function initHeaderSearch() {
  const form = document.getElementById("header-search");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = form.querySelector('input[name="q"]')?.value?.trim() || "";
    const url = q ? `shop.html?q=${encodeURIComponent(q)}` : "shop.html";
    window.location.href = url;
  });
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function initReveals(root = document) {
  const els = root.querySelectorAll(".reveal:not(.is-visible)");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  els.forEach((el) => io.observe(el));
}

function initMagneticButtons() {
  const btns = document.querySelectorAll(".btn-magnetic");
  btns.forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

function initHeroVideo() {
  document.querySelectorAll("video.hero-video, video.shop-video").forEach((v) => {
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("muted", "");
    const play = () => v.play().catch(() => {});
    play();
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) play();
    });
  });
}

function initSmoothHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let last = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY || 0;
      header.classList.toggle("is-scrolled", y > 24);
      last = y;
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initNavDropdown();
  initHeaderSearch();
  initMagneticButtons();
  initHeroVideo();
  initSmoothHeader();
  initReveals();
});
