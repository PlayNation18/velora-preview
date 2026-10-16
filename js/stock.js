/* VELORA – Bestandsanzeige. Holt /api/stock (nur Zahlen je Produkt|Farbe|Größe; nur Varianten mit gepflegtem Bestand).
 * Varianten ohne Eintrag gelten als unbegrenzt verfügbar. Ohne erreichbaren Server passiert nichts (Shop läuft normal weiter).
 * Die endgültige Prüfung erfolgt immer serverseitig bei der Bestellung (backend/lib/orders.js). */
(function () {
  "use strict";
  var CFG = window.VELORA_CONFIG || {};
  var BASE = String(CFG.API_BASE || "/api").replace(/\/+$/, "");
  var items = null, cbs = [], LOW = 5;

  function firstColor(id) { var p = typeof getProductById === "function" ? getProductById(id) : null; return p && p.colors && p.colors.length ? p.colors[0].id : ""; }
  function key(id, colorId, size) { return id + "|" + (colorId || firstColor(id)) + "|" + size; }
  /** Anzahl auf Lager oder null (= nicht verwaltet/unbegrenzt) */
  function left(id, colorId, size) {
    if (!items) return null;
    var v = items[key(id, colorId, size)];
    return typeof v === "number" ? v : null;
  }
  /** true, wenn ALLE Varianten des Produkts verwaltet und auf 0 sind */
  function soldOutProduct(p) {
    if (!items || !p) return false;
    var colors = p.colors && p.colors.length ? p.colors.map(function (c) { return c.id; }) : [""];
    var sizes = p.sizes && p.sizes.length ? p.sizes : (typeof SIZES !== "undefined" ? SIZES : []);
    if (!sizes.length) return false;
    for (var i = 0; i < colors.length; i++) for (var j = 0; j < sizes.length; j++) {
      var v = items[p.id + "|" + (colors[i] || firstColor(p.id)) + "|" + sizes[j]];
      if (typeof v !== "number" || v > 0) return false;
    }
    return true;
  }
  function note(n) { return n === 0 ? "Ausverkauft" : n <= LOW ? "Nur noch " + n + " auf Lager" : ""; }

  var toastEl = null, toastTimer = null;
  function notify(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "stock-toast"; toastEl.setAttribute("role", "status"); toastEl.setAttribute("aria-live", "polite"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("is-visible");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("is-visible"); }, 2600);
  }

  function decorateCards() {
    if (!items) return;
    document.querySelectorAll("a.product-card[href*='product.html?id=']").forEach(function (a) {
      var m = /[?&]id=([^&]+)/.exec(a.getAttribute("href")); if (!m) return;
      var p = typeof getProductById === "function" ? getProductById(decodeURIComponent(m[1])) : null;
      var sold = soldOutProduct(p), badge = a.querySelector(".soldout-badge");
      if (sold && !badge) { badge = document.createElement("span"); badge.className = "soldout-badge"; badge.textContent = "Ausverkauft"; a.appendChild(badge); }
      if (!sold && badge) badge.remove();
    });
  }

  function load() {
    return fetch(BASE + "/stock", { cache: "no-store", credentials: "same-origin" })
      .then(function (r) { return r.json(); })
      .then(function (j) { items = j && j.ok && j.stock && typeof j.stock === "object" ? j.stock : {}; })
      .catch(function () { items = {}; })
      .then(function () { cbs.splice(0).forEach(function (f) { try { f(); } catch (_) {} }); decorateCards(); });
  }
  function onReady(f) { if (items) f(); else cbs.push(f); }

  var pending = false;
  function init() {
    load();
    if ("MutationObserver" in window) {
      new MutationObserver(function () { if (pending || !items) return; pending = true; requestAnimationFrame(function () { pending = false; decorateCards(); }); })
        .observe(document.body, { childList: true, subtree: true });
    }
  }
  window.VeloraStock = { left: left, soldOutProduct: soldOutProduct, note: note, notify: notify, onReady: onReady, reload: load, LOW: LOW };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
