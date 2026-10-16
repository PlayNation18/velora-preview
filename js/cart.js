/* VELORA — Warenkorb (localStorage) */
const CART_KEY = "velora_cart_v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
  renderCartDrawer();
}

function cartLineKey(item) {
  return `${item.id}::${item.size}::${item.colorId || ""}`;
}

function sameCartLine(a, productId, size, colorId) {
  return (
    a.id === productId &&
    a.size === size &&
    (a.colorId || "") === (colorId || "")
  );
}

/** @param {string} productId @param {string} size @param {number} [qty] @param {{id?:string,name?:string}|null} [color] */
function addToCart(productId, size, qty = 1, color = null) {
  const colorId = color && color.id ? color.id : null;
  const colorName = color && color.name ? color.name : null;
  const items = loadCart();
  const existing = items.find((i) => sameCartLine(i, productId, size, colorId));
  if (window.VeloraStock) {
    const left = window.VeloraStock.left(productId, colorId, size);
    const have = existing ? existing.qty : 0;
    if (left !== null && have + qty > left) {
      window.VeloraStock.notify(left <= 0 ? "Leider ausverkauft." : have > 0 ? `Nur noch ${left} Stück verfügbar – ${have} liegen bereits im Warenkorb.` : `Nur noch ${left} Stück verfügbar.`);
      return false;
    }
  }
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({
      id: productId,
      size,
      qty,
      colorId: colorId || undefined,
      colorName: colorName || undefined
    });
  }
  saveCart(items);
  openCartDrawer();
  return true;
}

function updateQty(productId, size, qty, colorId) {
  let items = loadCart();
  items = items
    .map((i) => {
      if (sameCartLine(i, productId, size, colorId)) {
        return { ...i, qty: Math.max(0, qty) };
      }
      return i;
    })
    .filter((i) => i.qty > 0);
  saveCart(items);
}

function removeFromCart(productId, size, colorId) {
  const items = loadCart().filter(
    (i) => !sameCartLine(i, productId, size, colorId)
  );
  saveCart(items);
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return loadCart().reduce((n, i) => n + i.qty, 0);
}

function cartSubtotal() {
  return loadCart().reduce((sum, i) => {
    const p = getProductById(i.id);
    return sum + (p ? variantPrice(p, i.colorId) * i.qty : 0);
  }, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const n = cartCount();
  badge.textContent = n > 0 ? String(n) : "";
  badge.hidden = n === 0;
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer) drawer.classList.add("is-open");
  if (overlay) overlay.classList.add("is-open");
  document.body.classList.add("drawer-open");
  renderCartDrawer();
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer) drawer.classList.remove("is-open");
  if (overlay) overlay.classList.remove("is-open");
  document.body.classList.remove("drawer-open");
}

function resolveCartColor(product, item) {
  if (!product || !product.colors || !item.colorId) return null;
  return product.colors.find((c) => c.id === item.colorId) || null;
}

function renderCartDrawer() {
  const list = document.getElementById("cart-items");
  const subEl = document.getElementById("cart-subtotal");
  if (!list) return;

  const items = loadCart();
  if (items.length === 0) {
    list.innerHTML =
      '<p class="cart-empty">Ihr Warenkorb ist leer.<br><a href="shop.html">Zur Kollektion</a></p>';
  } else {
    list.innerHTML = items
      .map((item) => {
        const p = getProductById(item.id);
        if (!p) return "";
        const c = resolveCartColor(p, item);
        const swatchHex = (c && c.hex) || p.color;
        const colorLabel = item.colorName || (c && c.name) || "";
        const metaParts = [p.sizeUnit ? `Länge ${escapeHtml(sizeLabel(p, item.size))}` : `Größe ${escapeHtml(item.size)}`];
        if (colorLabel) metaParts.push(escapeHtml(colorLabel));
        metaParts.push(formatPrice(variantPrice(p, item.colorId)));
        return `
        <article class="cart-line" data-id="${p.id}" data-size="${escapeHtml(item.size)}" data-color="${escapeHtml(item.colorId || "")}">
          <div class="cart-swatch" style="background:${swatchHex}" aria-hidden="true"></div>
          <div class="cart-line-info">
            <h4>${escapeHtml(p.name)}</h4>
            <p class="cart-meta">${metaParts.join(" · ")}</p>
            <div class="cart-qty-row">
              <button type="button" class="qty-btn" data-action="dec" aria-label="Menge verringern">−</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn" data-action="inc" aria-label="Menge erhöhen">+</button>
              <button type="button" class="cart-remove" data-action="remove">Entfernen</button>
            </div>
          </div>
          <p class="cart-line-total">${formatPrice(variantPrice(p, item.colorId) * item.qty)}</p>
        </article>`;
      })
      .join("");
  }

  if (subEl) subEl.textContent = formatPrice(cartSubtotal());
  renderCartCode();

  list.querySelectorAll(".cart-line").forEach((row) => {
    const id = row.dataset.id;
    const size = row.dataset.size;
    const colorId = row.dataset.color || null;
    row.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        const current = loadCart().find((i) =>
          sameCartLine(i, id, size, colorId)
        );
        if (!current) return;
        if (action === "inc") {
          const left = window.VeloraStock ? window.VeloraStock.left(id, colorId, size) : null;
          if (left !== null && current.qty + 1 > left) { window.VeloraStock.notify(left <= 0 ? "Leider ausverkauft." : `Nur noch ${left} Stück verfügbar.`); return; }
          updateQty(id, size, current.qty + 1, colorId);
        }
        if (action === "dec") updateQty(id, size, current.qty - 1, colorId);
        if (action === "remove") removeFromCart(id, size, colorId);
      });
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCartDrawer();

  document.getElementById("cart-toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    openCartDrawer();
  });
  document.getElementById("cart-close")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-overlay")?.addEventListener("click", closeCartDrawer);
});

/* ---------- Rabattcode im Warenkorb (Prüfung serverseitig über /api/quote) ---------- */
const CODE_KEY = "velora_code";
function getSavedCode() { try { return localStorage.getItem(CODE_KEY) || ""; } catch { return ""; } }
function saveCode(c) { try { if (c) localStorage.setItem(CODE_KEY, c); else localStorage.removeItem(CODE_KEY); } catch {} }
function cartPayloadItems() { return loadCart().map((i) => ({ id: i.id, colorId: i.colorId || null, size: i.size, qty: i.qty })); }
function eurFromCents(c) { return formatPrice(c / 100); }

function renderCartCode() {
  const foot = document.querySelector(".cart-drawer-foot");
  if (!foot) return;
  let box = foot.querySelector(".cart-code");
  if (!loadCart().length) { if (box) box.remove(); return; }
  if (!box) {
    box = document.createElement("div");
    box.className = "cart-code";
    box.innerHTML = `<label for="cart-code-input">Rabattcode</label>
      <div class="cart-code-row"><input id="cart-code-input" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="30" placeholder="Code eingeben" />
      <button type="button" class="btn btn-outline" id="cart-code-apply">Einlösen</button></div>
      <p class="cart-code-msg" id="cart-code-msg" role="status" aria-live="polite" hidden></p>`;
    foot.insertBefore(box, foot.querySelector(".cart-vat") || foot.lastElementChild);
    box.querySelector("#cart-code-apply").addEventListener("click", () => applyCartCode(box.querySelector("#cart-code-input").value));
    box.querySelector("#cart-code-input").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); applyCartCode(e.target.value); } });
    const saved = getSavedCode();
    if (saved) { box.querySelector("#cart-code-input").value = saved; applyCartCode(saved, true); }
  } else if (getSavedCode()) {
    applyCartCode(getSavedCode(), true); // Summe hat sich evtl. geändert (Mindestwert)
  }
}

let codeReq = 0;
function applyCartCode(raw, silent) {
  const box = document.querySelector(".cart-code");
  if (!box) return;
  const msg = box.querySelector("#cart-code-msg");
  const code = String(raw || "").trim().toUpperCase();
  const show = (t, kind) => { msg.textContent = t; msg.className = "cart-code-msg is-" + kind; msg.hidden = !t; };
  if (!code) { saveCode(""); show("", "ok"); return; }
  if (!window.VeloraAuth) { show("Rabattcodes sind nur mit Shop-Server möglich.", "error"); return; }
  const my = ++codeReq;
  window.VeloraAuth.api("/quote", "POST", { items: cartPayloadItems(), code }).then((r) => {
    if (my !== codeReq) return;
    if (r.data && r.data.ok && r.data.quote && r.data.quote.discount) {
      saveCode(code);
      const d = r.data.quote.discount;
      show(`Code ${d.code}: −${eurFromCents(d.cents)} (wird an der Kasse abgezogen)`, "ok");
    } else if (r.data && r.data.ok) {
      show("", "ok");
    } else {
      if (!silent || /ungültig|abgelaufen|zu oft/.test((r.data && r.data.error) || "")) saveCode("");
      show((r.data && r.data.error) || "Code konnte nicht geprüft werden.", "error");
    }
  }, () => { if (my === codeReq) show("Shop-Server nicht erreichbar – der Code kann gerade nicht geprüft werden.", "error"); });
}
