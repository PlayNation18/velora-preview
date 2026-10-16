/* VELORA – Kundenkonto (konto.html): Bereichs-Navigation, Konto (Profil, Adressen, Passwort), Favoriten, Punkte sammeln.
 * Bestellungen/Lieferung/Rechnungen/Rückgabe: js/orders.js. Daten: /api/account*. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var eur = function (c) { return (c / 100).toLocaleString("de-AT", { style: "currency", currency: "EUR" }); };
  var dd = function (iso) { try { return new Date(iso).toLocaleDateString("de-AT", { dateStyle: "medium" }); } catch (_) { return iso; } };
  var UNREACH = "Server nicht erreichbar. Bitte versuchen Sie es später erneut.";
  var PANES = ["konto", "favoriten", "punkte", "rechnungen", "bestellungen", "lieferung", "rueckgabe"];
  var COUNTRY = { AT: "Österreich", DE: "Deutschland", CH: "Schweiz" };
  var state = { addresses: [] };
  function api(p, m, b) { return window.VeloraAuth.api(p, m, b); }
  function msg(id, t, k) { var b = $(id); if (!b) return; b.textContent = t; b.className = "form-msg is-" + (k || "error"); b.hidden = !t; if (t) b.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
  function busy(btn, on) { if (!btn) return; btn.disabled = on; btn.textContent = on ? "Bitte warten …" : btn.getAttribute("data-label"); }
  function fieldErrors(prefix, fields) {
    $$("[id^='" + prefix + "err-']").forEach(function (e) { e.hidden = true; e.textContent = ""; });
    Object.keys(fields || {}).forEach(function (k) { var e = $("#" + prefix + "err-" + k); if (e) { e.textContent = fields[k]; e.hidden = false; } });
  }

  /* ---------- Bereiche ---------- */
  function show(name, keepUrl) {
    if (PANES.indexOf(name) < 0) name = "konto";
    PANES.forEach(function (p) { var el = $("#pane-" + p); if (el) el.hidden = p !== name; });
    $$("#konto-nav a[data-pane-link]").forEach(function (a) { if (a.getAttribute("data-pane-link") === name) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (!keepUrl && history.replaceState) history.replaceState(null, "", "konto.html" + (name === "konto" ? "" : "?bereich=" + name));
    if (name === "favoriten") renderFavorites();
    if (name === "punkte") loadPoints();
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-pane-link]"); if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); var n = a.getAttribute("data-pane-link"); show(n);
    if (n === "bestellungen" && $("#order-detail") && !$("#order-detail").hidden) { var back = $("#order-back"); if (back) back.click(); }
    if (window.innerWidth < 860) $("#konto-nav").scrollIntoView({ block: "start", behavior: "smooth" });
  });
  window.addEventListener("popstate", function () { show(new URLSearchParams(location.search).get("bereich") || "konto", true); });

  /* ---------- Übersicht / Profil ---------- */
  function applyOverview(d) {
    var u = d.user, p = d.profile || {};
    $("#konto-hello").textContent = ", " + u.firstName;
    $("#konto-name").textContent = u.firstName + " " + u.lastName; $("#konto-email").textContent = u.email;
    $("#pf-firstName").value = u.firstName; $("#pf-lastName").value = u.lastName; $("#pf-phone").value = p.phone || ""; $("#pf-birthday").value = p.birthday || ""; $("#pf-salutation").value = p.salutation || "";
    setPoints(d.points.balance); $("#cnt-favoriten").textContent = d.favorites || "";
    state.addresses = d.addresses || []; renderAddresses();
  }
  function setPoints(n) { $("#konto-points-top").textContent = n.toLocaleString("de-AT"); $("#konto-points-chip").hidden = false; $("#cnt-punkte").textContent = n ? n.toLocaleString("de-AT") : ""; }
  $("#profile-form").addEventListener("submit", function (e) {
    e.preventDefault(); var btn = this.querySelector("button[type=submit]"); busy(btn, true);
    api("/account/profile", "POST", { salutation: $("#pf-salutation").value, firstName: $("#pf-firstName").value.trim(), lastName: $("#pf-lastName").value.trim(), phone: $("#pf-phone").value.trim(), birthday: $("#pf-birthday").value || null }).then(function (r) {
      busy(btn, false); fieldErrors("pf-", r.data.fields);
      if (r.data.ok) { applyOverview(r.data); msg("#konto-msg", r.data.message, "success"); } else msg("#konto-msg", r.data.error);
    }, function () { busy(btn, false); msg("#konto-msg", UNREACH); });
  });

  /* ---------- Adressen ---------- */
  function renderAddresses() {
    var box = $("#address-list");
    box.innerHTML = state.addresses.length ? state.addresses.map(function (a) {
      return '<div class="konto-card' + (a.isDefault ? " is-default" : "") + '">' + (a.isDefault ? '<span class="tag">Standard</span>' : "") + "<p><strong>" + esc(a.label || "Adresse") + "</strong></p><p>" + esc(a.firstName) + " " + esc(a.lastName) + "<br>" + esc(a.street) + "<br>" + esc(a.zip) + " " + esc(a.city) + "<br>" + esc(COUNTRY[a.country] || a.country) + (a.phone ? "<br>" + esc(a.phone) : "") + '</p><div class="card-actions"><button type="button" class="link-btn" data-addr-edit="' + esc(a.id) + '">Bearbeiten</button>' + (a.isDefault ? "" : '<button type="button" class="link-btn" data-addr-default="' + esc(a.id) + '">Als Standard</button>') + '<button type="button" class="link-btn danger" data-addr-del="' + esc(a.id) + '">Löschen</button></div></div>';
    }).join("") : '<div class="empty-box">Noch keine Adresse gespeichert. Gespeicherte Adressen werden an der Kasse automatisch vorausgefüllt.</div>';
  }
  function addrForm(a) {
    var f = $("#address-form"); f.hidden = false; fieldErrors("ad-", {});
    a = a || { firstName: $("#pf-firstName").value, lastName: $("#pf-lastName").value, country: "AT", isDefault: !state.addresses.length };
    $("#ad-id").value = a.id || ""; ["label", "firstName", "lastName", "street", "zip", "city", "phone"].forEach(function (k) { $("#ad-" + k).value = a[k] || ""; });
    $("#ad-country").value = a.country || "AT"; $("#ad-default").checked = !!a.isDefault; $("#ad-label").focus();
  }
  $("#address-add").addEventListener("click", function () { addrForm(null); });
  $("#address-cancel").addEventListener("click", function () { $("#address-form").hidden = true; });
  $("#address-list").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    var id = b.getAttribute("data-addr-edit") || b.getAttribute("data-addr-default") || b.getAttribute("data-addr-del");
    var a = state.addresses.filter(function (x) { return x.id === id; })[0]; if (!a) return;
    if (b.hasAttribute("data-addr-edit")) return addrForm(a);
    if (b.hasAttribute("data-addr-del")) { if (!confirm("Adresse wirklich löschen?")) return; api("/account/addresses/" + id, "DELETE").then(function (r) { if (r.data.ok) { state.addresses = r.data.addresses; renderAddresses(); msg("#konto-msg", "Adresse gelöscht.", "success"); } }); return; }
    api("/account/addresses/" + id, "POST", Object.assign({}, a, { isDefault: true })).then(function (r) { if (r.data.ok) { state.addresses = r.data.addresses; renderAddresses(); } });
  });
  $("#address-form").addEventListener("submit", function (e) {
    e.preventDefault(); var btn = this.querySelector("button[type=submit]"), id = $("#ad-id").value; busy(btn, true);
    var body = { isDefault: $("#ad-default").checked, country: $("#ad-country").value };
    ["label", "firstName", "lastName", "street", "zip", "city", "phone"].forEach(function (k) { body[k] = $("#ad-" + k).value.trim(); });
    api("/account/addresses" + (id ? "/" + id : ""), "POST", body).then(function (r) {
      busy(btn, false); fieldErrors("ad-", r.data.fields);
      if (r.data.ok) { state.addresses = r.data.addresses; renderAddresses(); $("#address-form").hidden = true; msg("#konto-msg", "Adresse gespeichert.", "success"); } else msg("#konto-msg", r.data.error);
    }, function () { busy(btn, false); msg("#konto-msg", UNREACH); });
  });

  /* ---------- Passwort ---------- */
  $("#password-form").addEventListener("submit", function (e) {
    e.preventDefault(); var f = this, btn = f.querySelector("button[type=submit]");
    var pw = $("#pw-new").value, pw2 = $("#pw-new2").value;
    if (pw.length < 8) return fieldErrors("pw-", { password: "Mindestens 8 Zeichen." });
    if (pw !== pw2) return fieldErrors("pw-", { password2: "Die Passwörter stimmen nicht überein." });
    fieldErrors("pw-", {}); busy(btn, true);
    api("/account/password", "POST", { current: $("#pw-current").value, password: pw }).then(function (r) {
      busy(btn, false); fieldErrors("pw-", r.data.fields);
      if (r.data.ok) { f.reset(); msg("#konto-msg", r.data.message, "success"); } else msg("#konto-msg", r.data.error);
    }, function () { busy(btn, false); msg("#konto-msg", UNREACH); });
  });

  /* ---------- Favoriten ---------- */
  function renderFavorites() {
    var box = $("#fav-list"); if (!box || !window.VeloraFav || typeof getProductById !== "function") return;
    var list = window.VeloraFav.list().map(function (f) { var p = getProductById(f.id); return p ? { f: f, p: p } : null; }).filter(Boolean);
    $("#cnt-favoriten").textContent = list.length || "";
    if (!list.length) { box.innerHTML = '<div class="empty-box">Noch keine Favoriten. Tippen Sie auf das Herz bei einem Produkt, um es hier zu merken.<br><a class="btn btn-sm" href="shop.html">Kollektion entdecken</a></div>'; return; }
    box.innerHTML = '<div class="fav-grid">' + list.map(function (x) {
      var p = x.p, c = (x.f.colorId && (p.colors || []).filter(function (k) { return k.id === x.f.colorId; })[0]) || (typeof getDefaultColor === "function" ? getDefaultColor(p) : null);
      var img = (c && c.image) || p.image || "", sizes = p.sizes && p.sizes.length ? p.sizes : (typeof SIZES !== "undefined" ? SIZES : ["M"]);
      var def = sizes.indexOf("M") >= 0 ? "M" : sizes[0], price = typeof variantPrice === "function" ? variantPrice(p, c && c.id) : p.price;
      var href = "product.html?id=" + encodeURIComponent(p.id);
      return '<article class="fav-item"><a class="fav-img" href="' + href + '">' + (img ? '<img src="' + esc(img) + '" alt="' + esc(p.name) + '" loading="lazy" />' : "") + '</a><button type="button" class="fav-btn" data-fav-id="' + esc(p.id) + '"></button><h4><a href="' + href + '">' + esc(p.name) + '</a></h4><p class="fav-meta">' + (c ? esc(c.name) + " · " : "") + "gemerkt am " + esc(dd(x.f.at)) + '</p><p class="fav-price">' + (typeof formatPrice === "function" ? formatPrice(price) : price + " €") + '</p><div class="fav-buy">' + (sizes.length > 1 ? '<select aria-label="Größe" data-size-for="' + esc(p.id) + '">' + sizes.map(function (s) { return "<option" + (s === def ? " selected" : "") + ">" + esc(s) + "</option>"; }).join("") + "</select>" : "") + '<button type="button" class="btn" data-cart-id="' + esc(p.id) + '" data-cart-color="' + esc(c ? c.id : "") + '" data-cart-size="' + esc(sizes[0]) + '">In den Warenkorb</button></div></article>';
    }).join("") + "</div>";
  }
  $("#fav-list").addEventListener("click", function (e) {
    var b = e.target.closest("[data-cart-id]"); if (!b || typeof addToCart !== "function") return;
    var p = getProductById(b.getAttribute("data-cart-id")); if (!p) return;
    var sel = b.parentNode.querySelector("select"), size = sel ? sel.value : b.getAttribute("data-cart-size");
    var cid = b.getAttribute("data-cart-color"), c = cid ? (p.colors || []).filter(function (k) { return k.id === cid; })[0] : null;
    addToCart(p.id, size, 1, c ? { id: c.id, name: c.name } : null);
  });

  /* ---------- Punkte ---------- */
  var KIND = { order: "Bestellung", revoke: "Rückbuchung", redeem: "Eingelöst", bonus: "Bonus" };
  function loadPoints() {
    api("/account/points").then(function (r) {
      var d = r.data; if (!d || !d.ok) return;
      setPoints(d.balance);
      var steps = Math.floor(d.balance / d.step), next = d.step - (d.balance % d.step), opts = [];
      for (var i = 1; i <= Math.min(steps, 20); i++) opts.push('<option value="' + i * d.step + '">' + (i * d.step) + " Punkte → " + eur(i * d.stepCents) + "</option>");
      $("#points-box").innerHTML = '<div class="points-hero"><div class="points-balance">' + d.balance.toLocaleString("de-AT") + '<small>Punkte · Wert ' + eur(steps * d.stepCents) + '</small></div><div><p style="margin:0">' + (steps ? "Sie können jetzt bis zu <strong>" + eur(steps * d.stepCents) + "</strong> Rabatt einlösen." : "Noch <strong>" + next + " Punkte</strong> bis zu Ihrem ersten 5-€-Gutschein.") + '</p><div class="points-bar"><span style="width:' + Math.round(((d.balance % d.step) / d.step) * 100) + '%"></span></div><small class="form-hint">' + d.step + " Punkte = " + eur(d.stepCents) + " · 1 Punkt je 1 € Einkauf</small>" +
        (steps ? '<div class="points-redeem"><select id="pts-amount" aria-label="Punkte einlösen">' + opts.join("") + '</select><button type="button" class="btn btn-sm" id="pts-redeem" data-label="In Rabattcode umwandeln">In Rabattcode umwandeln</button></div>' : "") + "</div></div>" +
        (d.codes.length ? '<h3>Ihre Punkte-Gutscheine</h3><table class="konto-table"><thead><tr><th>Code</th><th>Wert</th><th>Erstellt</th><th>Status</th></tr></thead><tbody>' + d.codes.map(function (c) { return '<tr><td><span class="code-chip">' + esc(c.code) + "</span></td><td>" + eur(c.cents) + "</td><td>" + esc(dd(c.createdAt)) + "</td><td>" + (c.used ? "eingelöst" : '<a class="link-btn" href="checkout.html" data-use-code="' + esc(c.code) + '">An der Kasse verwenden</a>') + "</td></tr>"; }).join("") + "</tbody></table>" : "") +
        '<h3>Punkteverlauf</h3>' + (d.history.length ? '<table class="konto-table"><thead><tr><th>Datum</th><th>Vorgang</th><th class="r">Punkte</th></tr></thead><tbody>' + d.history.map(function (h) { return "<tr><td>" + esc(dd(h.at)) + "</td><td>" + esc(h.note || KIND[h.kind] || h.kind) + '</td><td class="r ' + (h.delta >= 0 ? "pts-plus" : "pts-minus") + '">' + (h.delta >= 0 ? "+" : "") + h.delta + "</td></tr>"; }).join("") + "</tbody></table>" : '<div class="empty-box">Noch keine Punkte – sie werden mit Ihrer ersten Bestellung gutgeschrieben.</div>');
      var rb = $("#pts-redeem");
      if (rb) rb.addEventListener("click", function () {
        busy(rb, true);
        api("/account/points/redeem", "POST", { points: Number($("#pts-amount").value) }).then(function (r2) {
          busy(rb, false);
          if (r2.data.ok) { msg("#points-msg", r2.data.message + " Er wird an der Kasse automatisch eingetragen.", "success"); try { localStorage.setItem("velora_code", r2.data.code); } catch (_) {} loadPoints(); }
          else msg("#points-msg", r2.data.error);
        }, function () { busy(rb, false); msg("#points-msg", UNREACH); });
      });
    }, function () { msg("#points-msg", UNREACH); });
  }
  document.addEventListener("click", function (e) { var a = e.target.closest && e.target.closest("[data-use-code]"); if (a) { try { localStorage.setItem("velora_code", a.getAttribute("data-use-code")); } catch (_) {} } });

  /* ---------- Start ---------- */
  function init() {
    if (!window.VeloraAuth) return;
    show(new URLSearchParams(location.search).get("bereich") || (new URLSearchParams(location.search).get("bestellung") ? "bestellungen" : "konto"), true);
    api("/account").then(function (r) { if (r.status === 401 || !r.data || !r.data.ok) return; applyOverview(r.data); }, function () { msg("#form-msg", UNREACH); });
    if (window.VeloraFav) { window.VeloraFav.onChange(function () { if (!$("#pane-favoriten").hidden) renderFavorites(); else $("#cnt-favoriten").textContent = window.VeloraFav.list().length || ""; }); window.VeloraFav.ready.then(renderFavorites); }
  }
  window.VeloraKonto = { show: show };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
