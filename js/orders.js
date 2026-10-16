/* VELORA – Konto: Bestellübersicht, Bestelldetail, Retoure/Widerruf anfragen (konto.html). Daten kommen von /api/orders. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var eur = function (c) { return (c / 100).toLocaleString("de-AT", { style: "currency", currency: "EUR" }); };
  var dt = function (iso) { try { return new Date(iso).toLocaleString("de-AT", { dateStyle: "medium", timeStyle: "short" }); } catch (_) { return iso; } };
  var badge = function (o) { return '<span class="status-badge s-' + esc(o.status) + '">' + esc(o.statusLabel) + "</span>"; };
  var UNREACH = "Server nicht erreichbar. Bitte versuchen Sie es später erneut.";

  function msg(t, k) { var b = $("#orders-msg"); if (!b) return; b.textContent = t; b.className = "form-msg is-" + (k || "error"); b.hidden = !t; }

  function renderList(orders) {
    var box = $("#orders-list");
    if (!orders.length) { box.innerHTML = '<p class="form-hint">Sie haben noch keine Bestellung aufgegeben. <a href="shop.html">Zur Kollektion</a></p>'; return; }
    box.innerHTML = '<ul class="order-list">' + orders.map(function (o) {
      var n = o.items.reduce(function (a, i) { return a + i.qty; }, 0);
      return '<li><a class="order-card" href="konto.html?bestellung=' + encodeURIComponent(o.no) + '"><span><strong>' + esc(o.no) + "</strong> " + badge(o) + "<br><small>" + esc(dt(o.createdAt)) + " · " + n + " Artikel</small></span><span class=\"order-total\">" + eur(o.totalCents) + "</span></a></li>";
    }).join("") + "</ul>";
  }

  function renderDetail(o) {
    $("#orders-list").hidden = true; $("#orders-title").textContent = "Bestellung " + o.no;
    var rows = o.items.map(function (i) { return "<tr><td>" + esc(i.name) + " × " + i.qty + "</td><td>" + eur(i.unitCents * i.qty) + "</td></tr>"; }).join("");
    rows += '<tr class="sum"><td>Zwischensumme</td><td>' + eur(o.subtotalCents) + "</td></tr>";
    if (o.discount && o.discount.cents) rows += '<tr class="sum"><td>Rabattcode ' + esc(o.discount.code) + "</td><td>−" + eur(o.discount.cents) + "</td></tr>";
    rows += '<tr class="sum"><td>Versand' + (o.versand === "express" ? " (Express)" : "") + "</td><td>" + (o.shippingCents ? eur(o.shippingCents) : "gratis") + "</td></tr>";
    rows += '<tr class="total"><td>Gesamt <small>(inkl. ' + eur(o.vatCents) + " USt.)</small></td><td>" + eur(o.totalCents) + "</td></tr>";
    var c = o.customer, ship = o.shipment;
    var trackUrl = ship && ship.url && /^https:\/\//.test(ship.url) ? ship.url : "";
    var canReturn = o.status === "bezahlt" || o.status === "versendet";
    var d = $("#order-detail");
    d.hidden = false;
    d.innerHTML = '<p><a href="konto.html" id="order-back">← Alle Bestellungen</a></p><div class="order-detail"><h2>' + esc(o.no) + "</h2><p>" + badge(o) + " · " + esc(dt(o.createdAt)) + (o.payment && o.payment.method === "demo" ? " · Demo-Zahlung (kein Geld geflossen)" : "") + "</p>" +
      '<table class="order-lines">' + rows + "</table>" +
      "<h3>Lieferadresse</h3><p>" + esc(c.firstName) + " " + esc(c.lastName) + "<br>" + esc(c.street) + "<br>" + esc(c.zip) + " " + esc(c.city) + "<br>" + esc(c.country) + "</p>" +
      (ship ? "<h3>Versand</h3><p>" + esc(ship.carrier || "") + (ship.tracking ? " · Sendungsnummer " + esc(ship.tracking) : "") + (trackUrl ? ' · <a href="' + esc(trackUrl) + '" target="_blank" rel="noopener noreferrer">Sendung verfolgen</a>' : "") + "</p>" : "") +
      "<h3>Verlauf</h3><ul class=\"order-history\">" + o.history.map(function (h) { return "<li>" + esc(h.label) + " · " + esc(dt(h.at)) + "</li>"; }).join("") + "</ul>" +
      (o.returnRequest ? '<p class="form-hint">Ihre ' + (o.returnRequest.kind === "widerruf" ? "Widerrufs" : "Retoure") + "-Anfrage vom " + esc(dt(o.returnRequest.at)) + " ist eingegangen.</p>" : "") +
      (canReturn ? '<div class="return-box"><button type="button" class="btn btn-outline" id="return-open">Retoure / Widerruf anfragen</button><form id="return-form" hidden novalidate><p class="form-hint">Sie erhalten eine Bestätigung per E-Mail, die Bestellung erhält den Status „Retoure angefragt“. Details: <a href="retouren.html">Retouren</a> · <a href="widerruf.html">Widerrufsbelehrung</a>.</p><div class="form-group"><label for="ret-kind">Art</label><select id="ret-kind"><option value="widerruf">Widerruf (14 Tage)</option><option value="retoure">Retoure / Rücksendung</option></select></div><div class="form-group"><label for="ret-reason">Begründung / betroffene Artikel (optional)</label><textarea id="ret-reason" maxlength="1500"></textarea></div><button type="submit" class="btn" data-label="Anfrage senden">Anfrage senden</button></form></div>' : "") +
      "</div>";
    var open = $("#return-open"), form = $("#return-form");
    if (open) open.addEventListener("click", function () { form.hidden = false; open.hidden = true; $("#ret-reason").focus(); });
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]"); btn.disabled = true; btn.textContent = "Bitte warten …";
      window.VeloraAuth.api("/returns", "POST", { orderNo: o.no, kind: $("#ret-kind").value, reason: $("#ret-reason").value.trim() }).then(function (r) {
        if (r.data && r.data.ok) { msg(r.data.message || "Ihre Anfrage ist eingegangen.", "success"); renderDetail(r.data.order); }
        else { msg((r.data && r.data.error) || "Anfrage nicht möglich.", "error"); btn.disabled = false; btn.textContent = btn.getAttribute("data-label"); }
      }, function () { msg(UNREACH, "error"); btn.disabled = false; btn.textContent = btn.getAttribute("data-label"); });
    });
  }

  function init() {
    if (!$("#orders-list") || !window.VeloraAuth) return;
    var no = new URLSearchParams(location.search).get("bestellung");
    var path = no && /^VL-\d{4}-\d{6}$/.test(no) ? "/orders/" + no : "/orders";
    window.VeloraAuth.api(path).then(function (r) {
      if (r.status === 401) return; // auth.js leitet zur Anmeldung weiter
      var d = r.data || {};
      if (!d.ok) { msg(d.error || "Bestellung nicht gefunden.", "error"); if (no) { $("#orders-list").hidden = false; window.VeloraAuth.api("/orders").then(function (x) { if (x.data && x.data.ok) renderList(x.data.orders); }); } return; }
      if (d.order) renderDetail(d.order); else renderList(d.orders);
    }, function () { msg(UNREACH, "error"); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
