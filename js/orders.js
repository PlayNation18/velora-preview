/* VELORA – Kundenkonto: Bestellungen, Lieferung, Rechnungen, Rückgabe je Artikel (konto.html).
 * Liste: /api/orders · Detail inkl. Positions-IDs, Lieferstatus, Retouren: /api/account/orders/<nr> · Rechnung: /api/account/orders/<nr>/invoice
 * Rückgaben: /api/account/returns. Die Bereichs-Navigation steuert js/konto.js. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var eur = function (c) { return (c / 100).toLocaleString("de-AT", { style: "currency", currency: "EUR" }); };
  var dt = function (iso) { try { return new Date(iso).toLocaleString("de-AT", { dateStyle: "medium", timeStyle: "short" }); } catch (_) { return iso; } };
  var dd = function (iso) { try { return new Date(iso).toLocaleDateString("de-AT", { dateStyle: "medium" }); } catch (_) { return iso; } };
  var badge = function (o) { return '<span class="status-badge s-' + esc(o.status) + '">' + esc(o.statusLabel) + "</span>"; };
  var UNREACH = "Server nicht erreichbar. Bitte versuchen Sie es später erneut.";
  var orders = [], reasons = {};
  function api(p, m, b) { return window.VeloraAuth.api(p, m, b); }
  function msg(id, t, k) { var b = $(id); if (!b) return; b.textContent = t; b.className = "form-msg is-" + (k || "error"); b.hidden = !t; }
  function count(id, n) { var e = $(id); if (e) e.textContent = n ? String(n) : ""; }
  function delivery(o) {
    var s = o.shipment || {};
    var step = s.deliveredAt || o.status === "zugestellt" ? "zugestellt" : s.shippedAt || o.status === "versendet" ? "versandt" : "bestellt";
    return { step: step, carrier: s.carrier || "", tracking: s.tracking || "", url: s.url && /^https:\/\//.test(s.url) ? s.url : "", shippedAt: s.shippedAt, deliveredAt: s.deliveredAt };
  }
  function trackHtml(o) {
    var d = o.delivery || delivery(o), idx = { bestellt: 0, versandt: 1, zugestellt: 2 }[d.step];
    var steps = [["Bestellt", o.createdAt], ["Versandt", d.shippedAt], ["Zugestellt", d.deliveredAt]];
    return '<div class="ship-track" role="img" aria-label="Lieferstatus: ' + esc(steps[idx][0]) + '"><span class="bar" style="width:' + (idx * 33.4) + '%"></span>' + steps.map(function (s, i) {
      return '<div class="ship-step' + (i <= idx ? " is-done" : "") + '"><i></i>' + s[0] + (i <= idx && s[1] ? "<small>" + esc(dd(s[1])) + "</small>" : "") + "</div>";
    }).join("") + "</div>" + (d.tracking || d.carrier ? '<p class="form-hint">' + esc(d.carrier || "Versand") + (d.tracking ? ' · Sendungsnummer <span class="track-no">' + esc(d.tracking) + "</span>" : "") + (d.url ? ' · <a href="' + esc(d.url) + '" target="_blank" rel="noopener noreferrer">Sendung verfolgen</a>' : "") + "</p>" : "");
  }
  function invoiceUrl(no, dl) { return "/api/account/orders/" + encodeURIComponent(no) + "/invoice" + (dl ? "?download=1" : ""); }

  /* ---------- Bestellungen ---------- */
  function renderList() {
    var box = $("#orders-list"); box.hidden = false; $("#order-detail").hidden = true; $("#orders-title").textContent = "Bestellungen";
    if (!orders.length) { box.innerHTML = '<div class="empty-box">Sie haben noch keine Bestellung aufgegeben.<br><a class="btn btn-sm" href="shop.html">Zur Kollektion</a></div>'; return; }
    box.innerHTML = '<ul class="order-list">' + orders.map(function (o) {
      var n = o.items.reduce(function (a, i) { return a + i.qty; }, 0);
      return '<li><a class="order-card" data-order="' + esc(o.no) + '" href="konto.html?bereich=bestellungen&amp;bestellung=' + encodeURIComponent(o.no) + '"><span><strong>' + esc(o.no) + "</strong> " + badge(o) + "<br><small>" + esc(dt(o.createdAt)) + " · " + n + " Artikel</small></span><span class=\"order-total\">" + eur(o.totalCents) + "</span></a></li>";
    }).join("") + "</ul>";
  }
  function openOrder(no, push) {
    if (push && history.pushState) history.pushState(null, "", "konto.html?bereich=bestellungen&bestellung=" + encodeURIComponent(no));
    if (window.VeloraKonto) window.VeloraKonto.show("bestellungen", true);
    api("/account/orders/" + encodeURIComponent(no)).then(function (r) {
      if (r.data && r.data.ok) renderDetail(r.data.order); else { msg("#orders-msg", (r.data && r.data.error) || "Bestellung nicht gefunden."); renderList(); }
    }, function () { msg("#orders-msg", UNREACH); });
  }
  function renderDetail(o) {
    $("#orders-list").hidden = true; $("#orders-title").textContent = "Bestellung " + o.no;
    var rows = o.items.map(function (i) {
      return "<tr><td>" + esc(i.name) + " × " + i.qty + '</td><td class="r">' + eur(i.unitCents * i.qty) + '</td><td class="r">' + (i.returnable ? '<button type="button" class="link-btn" data-ret-item="' + i.itemId + '">Zurückgeben</button>' : "") + "</td></tr>";
    }).join("");
    rows += '<tr><td>Zwischensumme</td><td class="r">' + eur(o.subtotalCents) + "</td><td></td></tr>";
    if (o.discount && o.discount.cents) rows += "<tr><td>Rabattcode " + esc(o.discount.code) + '</td><td class="r">−' + eur(o.discount.cents) + "</td><td></td></tr>";
    rows += "<tr><td>Versand" + (o.versand === "express" ? " (Express)" : "") + '</td><td class="r">' + (o.shippingCents ? eur(o.shippingCents) : "gratis") + "</td><td></td></tr>";
    rows += '<tr><td><strong>Gesamt</strong> <small>(inkl. ' + eur(o.vatCents) + ' USt.)</small></td><td class="r"><strong>' + eur(o.totalCents) + "</strong></td><td></td></tr>";
    var c = o.customer, d = $("#order-detail"); d.hidden = false;
    d.innerHTML = '<p><a href="konto.html?bereich=bestellungen" id="order-back">← Alle Bestellungen</a></p><div class="order-detail"><p>' + badge(o) + " · " + esc(dt(o.createdAt)) + (o.payment && o.payment.method === "demo" ? " · Demo-Zahlung (kein Geld geflossen)" : "") + (o.points > 0 ? " · +" + o.points + " Punkte" : "") + "</p>" +
      (o.status !== "storniert" ? "<h3>Lieferung</h3>" + trackHtml(o) : "") +
      '<h3>Artikel</h3><table class="item-lines">' + rows + "</table>" +
      '<div id="ret-slot"></div>' +
      (o.invoice ? '<p style="margin-top:1rem"><a class="btn btn-sm" href="' + invoiceUrl(o.no) + '" target="_blank" rel="noopener">Rechnung ansehen / drucken</a> <a class="btn btn-outline btn-sm" href="' + invoiceUrl(o.no, true) + '">Rechnung herunterladen</a></p>' : "") +
      "<h3>Lieferadresse</h3><p>" + esc(c.firstName) + " " + esc(c.lastName) + "<br>" + esc(c.street) + "<br>" + esc(c.zip) + " " + esc(c.city) + "<br>" + esc(c.country) + "</p>" +
      (o.itemReturns && o.itemReturns.length ? "<h3>Rückgaben</h3>" + returnsTable(o.itemReturns, true) : "") +
      '<h3>Verlauf</h3><ul class="order-history">' + o.history.map(function (h) { return "<li>" + esc(h.label) + " · " + esc(dt(h.at)) + "</li>"; }).join("") + "</ul></div>";
    $("#order-back").addEventListener("click", function (e) { e.preventDefault(); if (history.pushState) history.pushState(null, "", "konto.html?bereich=bestellungen"); renderList(); });
    Array.prototype.forEach.call(d.querySelectorAll("[data-ret-item]"), function (b) {
      b.addEventListener("click", function () { returnForm($("#ret-slot"), o, Number(b.getAttribute("data-ret-item")), function (no2) { openOrder(no2); }); });
    });
  }

  /* ---------- Rückgabe ---------- */
  function reasonOptions() { return Object.keys(reasons).map(function (k) { return '<option value="' + k + '">' + esc(reasons[k]) + "</option>"; }).join(""); }
  function returnForm(slot, o, itemId, done) {
    var it = o.items.filter(function (i) { return i.itemId === itemId; })[0]; if (!it) return;
    var qtys = []; for (var q = 1; q <= it.returnable; q++) qtys.push('<option value="' + q + '">' + q + "</option>");
    slot.innerHTML = '<form class="ret-form" novalidate><p><strong>' + esc(it.name) + '</strong> zurückgeben</p><div class="konto-form"><div class="form-group"><label>Grund</label><select name="reason" required><option value="">Bitte wählen …</option>' + reasonOptions() + '</select></div><div class="form-group"><label>Menge</label><select name="qty">' + qtys.join("") + '</select></div><div class="form-group full"><label>Anmerkung (optional)</label><textarea name="comment" maxlength="1000" rows="2"></textarea></div><div class="form-actions"><button type="submit" class="btn btn-sm" data-label="Rückgabe anfragen">Rückgabe anfragen</button><button type="button" class="link-btn" data-cancel>Abbrechen</button></div></div><p class="form-hint">Rückgabefrist: ' + (o.returnDays || 30) + " Tage ab Versand.</p></form>";
    var f = slot.querySelector("form"); f.reason.focus();
    f.querySelector("[data-cancel]").addEventListener("click", function () { slot.innerHTML = ""; });
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!f.reason.value) { f.reason.focus(); return; }
      var btn = f.querySelector("button[type=submit]"); btn.disabled = true; btn.textContent = "Bitte warten …";
      api("/account/returns", "POST", { orderNo: o.no, itemId: itemId, qty: Number(f.qty.value), reason: f.reason.value, comment: f.comment.value.trim() }).then(function (r) {
        if (r.data && r.data.ok) { msg("#returns-msg", r.data.message, "success"); msg("#orders-msg", r.data.message, "success"); slot.innerHTML = ""; loadReturns(); done && done(o.no); }
        else { msg("#orders-msg", (r.data && r.data.error) || "Rückgabe nicht möglich."); msg("#returns-msg", (r.data && r.data.error) || "Rückgabe nicht möglich."); btn.disabled = false; btn.textContent = btn.getAttribute("data-label"); }
      }, function () { msg("#returns-msg", UNREACH); btn.disabled = false; btn.textContent = btn.getAttribute("data-label"); });
    });
  }
  function returnsTable(list, compact) {
    return '<table class="konto-table"><thead><tr><th>Datum</th>' + (compact ? "" : "<th>Bestellung</th>") + '<th>Artikel</th><th>Grund</th><th>Status</th></tr></thead><tbody>' + list.map(function (r) {
      return "<tr><td>" + esc(dd(r.createdAt)) + "</td>" + (compact ? "" : '<td><a href="konto.html?bereich=bestellungen&amp;bestellung=' + encodeURIComponent(r.orderNo) + '" data-order="' + esc(r.orderNo) + '">' + esc(r.orderNo) + "</a></td>") + "<td>" + esc(r.name || "Artikel") + " × " + r.qty + "</td><td>" + esc(r.reasonLabel) + (r.comment ? "<br><small>" + esc(r.comment) + "</small>" : "") + '</td><td><span class="ret-status r-' + esc(r.status) + '">' + esc(r.statusLabel) + "</span>" + (r.adminNote ? "<br><small>" + esc(r.adminNote) + "</small>" : "") + "</td></tr>";
    }).join("") + "</tbody></table>";
  }
  function loadReturns() {
    return api("/account/returns").then(function (r) {
      if (!r.data || !r.data.ok) return;
      reasons = r.data.reasons || {};
      var list = r.data.returns; count("#cnt-rueckgabe", list.filter(function (x) { return x.status !== "abgelehnt" && x.status !== "erstattet"; }).length);
      $("#returns-list").innerHTML = list.length ? returnsTable(list) : '<div class="empty-box">Noch keine Rückgaben.</div>';
    });
  }
  function renderReturnNew() {
    var box = $("#return-new");
    var eligible = orders.filter(function (o) { return ["bezahlt", "versendet", "zugestellt", "retoure_angefragt"].indexOf(o.status) >= 0; });
    if (!eligible.length) { box.innerHTML = '<p class="form-hint">Derzeit gibt es keine Bestellung, aus der Sie Artikel zurückgeben können.</p>'; return; }
    box.innerHTML = '<h3>Neue Rückgabe</h3><div class="konto-form"><div class="form-group full"><label for="rn-order">Bestellung wählen</label><select id="rn-order"><option value="">Bitte wählen …</option>' + eligible.map(function (o) { return '<option value="' + esc(o.no) + '">' + esc(o.no) + " · " + esc(dd(o.createdAt)) + " · " + eur(o.totalCents) + "</option>"; }).join("") + '</select></div></div><div id="rn-items"></div>';
    $("#rn-order").addEventListener("change", function () {
      var no = this.value, slot = $("#rn-items"); slot.innerHTML = "";
      if (!no) return;
      api("/account/orders/" + encodeURIComponent(no)).then(function (r) {
        if (!r.data || !r.data.ok) return;
        var o = r.data.order;
        slot.innerHTML = '<table class="item-lines">' + o.items.map(function (i) { return "<tr><td>" + esc(i.name) + " × " + i.qty + '</td><td class="r">' + (i.returnable ? '<button type="button" class="btn btn-outline btn-sm" data-rn-item="' + i.itemId + '">Diesen Artikel zurückgeben</button>' : '<small class="form-hint">nicht rückgabefähig</small>') + "</td></tr>"; }).join("") + '</table><div id="rn-form"></div>';
        Array.prototype.forEach.call(slot.querySelectorAll("[data-rn-item]"), function (b) {
          b.addEventListener("click", function () { returnForm($("#rn-form"), o, Number(b.getAttribute("data-rn-item")), function () { $("#rn-order").dispatchEvent(new Event("change")); }); });
        });
      });
    });
  }

  /* ---------- Lieferung & Rechnungen ---------- */
  function renderDelivery() {
    var list = orders.filter(function (o) { return o.status !== "storniert" && o.status !== "neu"; });
    count("#cnt-lieferung", list.filter(function (o) { return delivery(o).step !== "zugestellt"; }).length);
    $("#delivery-list").innerHTML = list.length ? list.map(function (o) {
      return '<article class="ship-card"><header><strong><a href="konto.html?bereich=bestellungen&amp;bestellung=' + encodeURIComponent(o.no) + '" data-order="' + esc(o.no) + '">' + esc(o.no) + "</a></strong><span class=\"form-hint\">" + esc(dd(o.createdAt)) + " · " + o.items.reduce(function (a, i) { return a + i.qty; }, 0) + " Artikel</span></header>" + trackHtml(o) + "</article>";
    }).join("") : '<div class="empty-box">Keine laufenden Lieferungen.</div>';
  }
  function renderInvoices() {
    var list = orders.filter(function (o) { return o.payment && o.payment.status === "paid"; });
    count("#cnt-rechnungen", list.length);
    $("#invoice-list").innerHTML = list.length ? '<table class="konto-table"><thead><tr><th>Rechnung</th><th>Datum</th><th>Bestellung</th><th class="r">Betrag</th><th class="r"></th></tr></thead><tbody>' + list.map(function (o) {
      return "<tr><td>RE-" + esc(o.no) + "</td><td>" + esc(dd(o.createdAt)) + '</td><td><a href="konto.html?bereich=bestellungen&amp;bestellung=' + encodeURIComponent(o.no) + '" data-order="' + esc(o.no) + '">' + esc(o.no) + '</a></td><td class="r">' + eur(o.totalCents) + '</td><td class="r"><a class="link-btn" href="' + invoiceUrl(o.no) + '" target="_blank" rel="noopener">Ansehen / PDF</a> · <a class="link-btn" href="' + invoiceUrl(o.no, true) + '">Download</a></td></tr>';
    }).join("") + "</tbody></table>" : '<div class="empty-box">Noch keine Rechnungen – sie erscheinen nach Ihrer ersten bezahlten Bestellung.</div>';
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-order]"); if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault(); openOrder(a.getAttribute("data-order"), true);
  });
  function init() {
    if (!$("#orders-list") || !window.VeloraAuth) return;
    api("/orders").then(function (r) {
      if (r.status === 401) return; // auth.js leitet zur Anmeldung weiter
      if (!r.data || !r.data.ok) { msg("#orders-msg", (r.data && r.data.error) || "Bestellungen konnten nicht geladen werden."); return; }
      orders = r.data.orders; count("#cnt-bestellungen", orders.length);
      renderDelivery(); renderInvoices();
      loadReturns().then(renderReturnNew);
      var no = new URLSearchParams(location.search).get("bestellung");
      if (no && /^VL-\d{4}-\d{6}$/.test(no)) openOrder(no); else renderList();
    }, function () { msg("#orders-msg", UNREACH); });
    window.addEventListener("popstate", function () { var no = new URLSearchParams(location.search).get("bestellung"); if (no) openOrder(no); else renderList(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
