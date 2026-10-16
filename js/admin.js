/* VELORA – Admin-Bereich (admin.html). Anmeldung mit ADMIN_PASSWORD (Server-Umgebung) → HttpOnly-Cookie (SameSite=Strict, 8 h).
 * Alle Daten kommen von /api/admin/*. Es werden keine Zugangsdaten im Browser gespeichert. */
(function () {
  "use strict";
  var CFG = window.VELORA_CONFIG || {};
  var BASE = String(CFG.API_BASE || "/api").replace(/\/+$/, "") + "/admin";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var eur = function (c) { return (c / 100).toLocaleString("de-AT", { style: "currency", currency: "EUR" }); };
  var dt = function (iso) { try { return new Date(iso).toLocaleString("de-AT", { dateStyle: "short", timeStyle: "short" }); } catch (_) { return iso || ""; } };
  var STATUS = { neu: "Neu", bezahlt: "Bezahlt", versendet: "Versendet", zugestellt: "Zugestellt", storniert: "Storniert", retoure_angefragt: "Retoure angefragt", retourniert: "Retourniert" };

  function call(path, method, body) {
    var o = { method: method || "GET", credentials: "same-origin", cache: "no-store", headers: {} };
    if (body !== undefined) { o.headers["Content-Type"] = "application/json"; o.body = JSON.stringify(body); }
    return fetch(BASE + path, o).then(function (r) {
      return r.text().then(function (t) { var j = null; try { j = JSON.parse(t); } catch (_) {} if (!j) throw { unreachable: true }; return { status: r.status, j: j }; });
    }, function () { throw { unreachable: true }; });
  }
  function flash(t, kind) { var b = $("#admin-msg"); b.textContent = t; b.className = "form-msg is-" + (kind || "success"); b.hidden = !t; if (t) b.scrollIntoView({ block: "nearest" }); }
  function fail(e) { flash(e && e.unreachable ? "Server nicht erreichbar." : "Unerwarteter Fehler.", "error"); }
  function err(r) { flash((r.j && r.j.error) || "Fehler (" + r.status + ")", "error"); if (r.status === 401) location.reload(); }

  /* ---------- Login ---------- */
  function start() {
    call("/me").then(function (r) {
      var d = r.j;
      if (!d.enabled) { $("#admin-login").hidden = false; $("#login-form").hidden = true; $("#login-msg").textContent = "Admin-Bereich ist nicht konfiguriert: Setzen Sie ADMIN_PASSWORD (mindestens 8 Zeichen) in der Server-Umgebung."; $("#login-msg").hidden = false; return; }
      if (!d.admin) { $("#admin-login").hidden = false; $("#login-pw").focus(); return; }
      dashboard(d);
    }, function () { $("#admin-login").hidden = false; $("#login-form").hidden = true; $("#login-msg").textContent = "Server nicht erreichbar."; $("#login-msg").hidden = false; });
  }
  $("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = $("#login-form button"); btn.disabled = true;
    call("/login", "POST", { password: $("#login-pw").value }).then(function (r) {
      btn.disabled = false;
      if (r.j.ok) location.reload();
      else { $("#login-msg").textContent = r.j.error || "Anmeldung fehlgeschlagen."; $("#login-msg").hidden = false; $("#login-pw").value = ""; }
    }, function () { btn.disabled = false; $("#login-msg").textContent = "Server nicht erreichbar."; $("#login-msg").hidden = false; });
  });

  /* ---------- Dashboard ---------- */
  function dashboard(me) {
    $("#admin-login").hidden = true; $("#admin-dash").hidden = false;
    $("#admin-info").textContent = "Zahlung: " + (me.payment === "stripe" ? "Stripe" : "Demo") + (me.liveBlocked ? " (Live-Schlüssel gesperrt)" : "") + " · Mail: " + (me.mail === "dry-run" ? "Testmodus (kein Versand)" : me.mail === "resend" ? "Resend" : "aus");
    $("#admin-logout").addEventListener("click", function () { call("/logout", "POST", {}).then(function () { location.reload(); }, fail); });
    var tabs = $$("#admin-tabs button");
    tabs.forEach(function (b) { b.addEventListener("click", function () { select(b.getAttribute("data-tab")); }); });
    function select(name) {
      tabs.forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-tab") === name)); });
      $$(".admin-pane").forEach(function (p) { p.hidden = p.id !== "pane-" + name; });
      flash("");
      var fn = ({ orders: loadOrders, returns: loadReturns, stock: loadStock, discounts: loadDiscounts, newsletter: loadNewsletter, contacts: loadContacts })[name]; if (typeof fn === "function") fn(); // weitere Tabs (Bewertungen, Wieder-da) lädt js/admin-features.js
    }
    select("orders");
  }

  /* ---------- Bestellungen ---------- */
  function loadOrders() {
    var st = $("#o-status").value, q = $("#o-q").value.trim();
    call("/orders?status=" + encodeURIComponent(st) + "&q=" + encodeURIComponent(q)).then(function (r) {
      if (!r.j.ok) return err(r);
      var rows = r.j.orders.map(function (o) {
        return '<tr class="is-click" data-no="' + esc(o.no) + '" tabindex="0"><td>' + esc(o.no) + "</td><td>" + esc(dt(o.createdAt)) + '</td><td><span class="status-badge s-' + esc(o.status) + '">' + esc(o.statusLabel) + "</span></td><td>" + esc(o.name) + "<br><small>" + esc(o.email) + "</small></td><td>" + eur(o.totalCents) + "</td><td>" + esc(o.payment) + "</td></tr>";
      }).join("");
      $("#o-body").innerHTML = rows || '<tr><td colspan="6">Keine Bestellungen.</td></tr>';
      $("#o-count").textContent = r.j.total + " Bestellung" + (r.j.total === 1 ? "" : "en");
      $$("#o-body tr[data-no]").forEach(function (tr) {
        var open = function () { orderDetail(tr.getAttribute("data-no")); };
        tr.addEventListener("click", open); tr.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
      });
    }, fail);
  }
  function orderDetail(no) {
    call("/orders/" + encodeURIComponent(no)).then(function (r) {
      if (!r.j.ok) return err(r);
      var o = r.j.order, c = o.customer, s = o.shipment || {};
      var opts = Object.keys(STATUS).filter(function (k) { return k !== "neu"; }).map(function (k) { return '<option value="' + k + '"' + (k === o.status ? " selected" : "") + ">" + STATUS[k] + "</option>"; }).join("");
      var d = $("#o-detail"); d.hidden = false;
      d.innerHTML = "<h2>" + esc(o.no) + ' <span class="status-badge s-' + esc(o.status) + '">' + esc(o.statusLabel) + '</span></h2><p class="admin-note">' + esc(dt(o.createdAt)) + " · Zahlung: " + esc(o.payment.method) + "/" + esc(o.payment.status) + (o.userId ? " · Kundenkonto" : " · Gast") + "</p>" +
        '<div class="table-scroll"><table class="order-lines">' + o.items.map(function (i) { return "<tr><td>" + esc(i.name) + " × " + i.qty + "</td><td>" + eur(i.unitCents * i.qty) + "</td></tr>"; }).join("") +
        '<tr class="sum"><td>Zwischensumme</td><td>' + eur(o.subtotalCents) + "</td></tr>" + (o.discount && o.discount.cents ? '<tr class="sum"><td>Code ' + esc(o.discount.code) + "</td><td>−" + eur(o.discount.cents) + "</td></tr>" : "") +
        '<tr class="sum"><td>Versand (' + esc(o.versand) + ")</td><td>" + eur(o.shippingCents) + '</td></tr><tr class="total"><td>Gesamt (USt. ' + eur(o.vatCents) + ")</td><td>" + eur(o.totalCents) + "</td></tr></table></div>" +
        "<p><strong>" + esc(c.firstName) + " " + esc(c.lastName) + "</strong> · " + esc(c.email) + (c.phone ? " · " + esc(c.phone) : "") + "<br>" + esc(c.street) + ", " + esc(c.zip) + " " + esc(c.city) + ", " + esc(c.country) + "</p>" +
        (o.returnRequest ? '<p class="form-msg is-error">' + (o.returnRequest.kind === "widerruf" ? "Widerruf" : "Retoure") + " angefragt am " + esc(dt(o.returnRequest.at)) + (o.returnRequest.reason ? ": " + esc(o.returnRequest.reason) : "") + "</p>" : "") +
        '<h3>Status ändern</h3><div class="admin-grid"><label>Status<select id="d-status">' + opts + '</select></label><label>Notiz<input id="d-note" maxlength="300" /></label><label><span>Bestand zurückbuchen (bei „Retourniert“)</span><input id="d-restock" type="checkbox" /></label></div><button class="btn btn-sm" id="d-status-btn">Status setzen</button> <span class="admin-note">„Storniert“ bucht den Bestand automatisch zurück. Erstattungen führen Sie im Zahlungsdienst (Stripe) manuell aus.</span>' +
        '<h3>Versand &amp; Versandmail</h3><div class="admin-grid"><label>Versanddienstleister<input id="d-carrier" maxlength="60" value="' + esc(s.carrier || "") + '" placeholder="z. B. Post AT" /></label><label>Sendungsnummer<input id="d-track" maxlength="80" value="' + esc(s.tracking || "") + '" /></label><label>Tracking-Link (https)<input id="d-url" maxlength="300" value="' + esc(s.url || "") + '" placeholder="https://…" /></label></div><button class="btn btn-sm" id="d-ship-btn">' + (o.status === "versendet" || o.status === "zugestellt" ? "Versanddaten speichern + Versandmail erneut senden" : "Als versendet markieren + Versandmail senden") + "</button>" +
        (o.status === "versendet" ? ' <button class="btn btn-outline btn-sm" id="d-delivered-btn">Als zugestellt markieren</button>' : "") +
        '<p class="admin-note">Lieferstatus für den Kunden: ' + (s.deliveredAt ? "Zugestellt am " + esc(dt(s.deliveredAt)) : s.shippedAt ? "Versandt am " + esc(dt(s.shippedAt)) : "Bestellt") + (o.points ? " · Treuepunkte: " + o.points : "") + "</p>" +
        (o.itemReturns && o.itemReturns.length ? "<h3>Rückgaben (Artikel)</h3><ul class=\"order-history\">" + o.itemReturns.map(function (x) { return "<li>" + esc(dt(x.createdAt)) + " · Pos. " + x.itemId + " × " + x.qty + " · " + esc(RREASON[x.reason] || x.reason) + (x.comment ? " – " + esc(x.comment) : "") + " · <strong>" + esc(RSTATUS[x.status] || x.status) + "</strong></li>"; }).join("") + "</ul><p class=\"admin-note\">Bearbeiten im Tab „Retouren“.</p>" : "") +
        '<h3>Verlauf</h3><ul class="order-history">' + o.history.map(function (h) { return "<li>" + esc(h.label) + " · " + esc(dt(h.at)) + " · " + esc(h.by) + (h.note ? " · " + esc(h.note) : "") + "</li>"; }).join("") + "</ul>";
      d.scrollIntoView({ block: "nearest", behavior: "smooth" });
      $("#d-status-btn").addEventListener("click", function () {
        call("/orders/" + encodeURIComponent(no) + "/status", "POST", { status: $("#d-status").value, note: $("#d-note").value, restock: $("#d-restock").checked }).then(function (r2) { if (r2.j.ok) { flash("Status gesetzt: " + r2.j.order.statusLabel); orderDetail(no); loadOrders(); } else err(r2); }, fail);
      });
      var dlv = $("#d-delivered-btn");
      if (dlv) dlv.addEventListener("click", function () {
        call("/orders/" + encodeURIComponent(no) + "/status", "POST", { status: "zugestellt", note: "Zustellung bestätigt" }).then(function (r2) { if (r2.j.ok) { flash("Als zugestellt markiert."); orderDetail(no); loadOrders(); } else err(r2); }, fail);
      });
      $("#d-ship-btn").addEventListener("click", function () {
        call("/orders/" + encodeURIComponent(no) + "/ship", "POST", { carrier: $("#d-carrier").value, tracking: $("#d-track").value, trackingUrl: $("#d-url").value, sendMail: true }).then(function (r2) {
          if (r2.j.ok) { flash(r2.j.mail.dryRun ? "Versendet. Versandmail im Testmodus (nichts gesendet, siehe Server-Konsole)." : r2.j.mail.sent ? "Versendet. Versandmail wurde gesendet." : "Versendet, aber die Mail konnte NICHT gesendet werden (siehe Server-Log).", r2.j.mail.sent || r2.j.mail.dryRun ? "success" : "error"); orderDetail(no); loadOrders(); } else err(r2);
        }, fail);
      });
    }, fail);
  }
  $("#o-filter").addEventListener("submit", function (e) { e.preventDefault(); loadOrders(); });
  $("#o-csv").addEventListener("click", function () {
    fetch(BASE + "/orders.csv", { credentials: "same-origin" }).then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) {
      var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "velora-bestellungen.csv"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    }).catch(function () { flash("CSV-Export fehlgeschlagen.", "error"); });
  });

  /* ---------- Bestände ---------- */
  var stockData = null;
  function loadStock() {
    call("/stock").then(function (r) {
      if (!r.j.ok) return err(r);
      stockData = r.j;
      var dl = $("#s-list"); if (!dl.children.length) dl.innerHTML = r.j.products.map(function (p) { return '<option value="' + esc(p.id) + '">' + esc(p.name) + "</option>"; }).join("");
      $("#s-tracked").textContent = Object.keys(r.j.stock).length + " Varianten mit gepflegtem Bestand";
      if ($("#s-product").value) renderStock();
    }, fail);
  }
  function currentProduct() { var v = $("#s-product").value.trim(); return stockData && stockData.products.filter(function (p) { return p.id === v || p.name === v; })[0]; }
  function renderStock() {
    var p = currentProduct(), g = $("#s-grid");
    if (!p) { g.innerHTML = '<p class="admin-note">Produkt wählen (ID oder Name).</p>'; return; }
    var colors = p.colors.length ? p.colors : [{ id: "", name: "Standard" }], h = "";
    colors.forEach(function (c) {
      h += "<h3>" + esc(c.name) + '</h3><div class="stock-grid">' + p.sizes.map(function (s) {
        var cid = c.id || (p.colors[0] && p.colors[0].id) || "", v = stockData.stock[p.id + "|" + cid + "|" + s];
        return '<label>' + esc(s) + '<input type="number" min="0" step="1" inputmode="numeric" data-c="' + esc(c.id) + '" data-s="' + esc(s) + '" value="' + (typeof v === "number" ? v : "") + '" placeholder="∞" /></label>';
      }).join("") + "</div>";
    });
    g.innerHTML = h;
  }
  $("#s-product").addEventListener("change", renderStock);
  $("#s-product").addEventListener("input", function () { if (currentProduct()) renderStock(); });
  $("#s-save").addEventListener("click", function () { 
    var p = currentProduct(); if (!p) return flash("Bitte zuerst ein Produkt wählen.", "error");
    var set = $$("#s-grid input").map(function (i) { return { id: p.id, colorId: i.getAttribute("data-c") || null, size: i.getAttribute("data-s"), qty: i.value === "" ? null : Number(i.value) }; });
    call("/stock", "POST", { set: set }).then(function (r) { if (r.j.ok) { flash("Bestand gespeichert."); loadStock(); } else err(r); }, fail);
  });
  $("#s-bulk").addEventListener("click", function () {
    var p = currentProduct(); if (!p) return flash("Bitte zuerst ein Produkt wählen.", "error");
    var n = $("#s-bulk-n").value; if (n === "") return flash("Bitte eine Menge eintragen.", "error");
    call("/stock", "POST", { bulk: { id: p.id, qty: Number(n) } }).then(function (r) { if (r.j.ok) { flash("Alle Varianten von " + p.id + " auf " + n + " gesetzt."); loadStock(); } else err(r); }, fail);
  });
  $("#s-all").addEventListener("click", function () {
    var n = $("#s-all-n").value; if (n === "") return flash("Bitte eine Menge eintragen.", "error");
    if (!confirm("Alle Varianten ohne gepflegten Bestand auf " + n + " setzen?")) return;
    call("/stock", "POST", { bulkAll: { qty: Number(n), onlyUntracked: true } }).then(function (r) { if (r.j.ok) { flash("Bestand für alle Produkte gesetzt (" + r.j.count + " Varianten)."); loadStock(); } else err(r); }, fail);
  });

  /* ---------- Rabattcodes ---------- */
  function loadDiscounts() {
    call("/discounts").then(function (r) {
      if (!r.j.ok) return err(r);
      $("#d-body").innerHTML = r.j.discounts.map(function (d) {
        return "<tr><td><strong>" + esc(d.code) + "</strong>" + (d.note ? "<br><small>" + esc(d.note) + "</small>" : "") + "</td><td>" + (d.type === "percent" ? d.value + " %" : d.value + " €") + "</td><td>" + (d.minCents ? eur(d.minCents) : "–") + "</td><td>" + esc(d.expires || "–") + "</td><td>" + (d.uses || 0) + (d.maxUses ? " / " + d.maxUses : "") + "</td><td>" + (d.active ? "aktiv" : "inaktiv") + '</td><td><button class="btn btn-outline btn-sm" data-edit="' + esc(d.code) + '">Bearbeiten</button> <button class="btn btn-outline btn-sm" data-del="' + esc(d.code) + '">Löschen</button></td></tr>';
      }).join("") || '<tr><td colspan="7">Noch keine Codes.</td></tr>';
      $$("#d-body [data-del]").forEach(function (b) { b.addEventListener("click", function () { if (confirm("Code " + b.getAttribute("data-del") + " löschen?")) call("/discounts?code=" + encodeURIComponent(b.getAttribute("data-del")), "DELETE").then(function (x) { if (x.j.ok) { flash("Code gelöscht."); loadDiscounts(); } else err(x); }, fail); }); });
      $$("#d-body [data-edit]").forEach(function (b) { b.addEventListener("click", function () {
        var d = r.j.discounts.filter(function (x) { return x.code === b.getAttribute("data-edit"); })[0], f = $("#d-form");
        f.code.value = d.code; f.type.value = d.type; f.value.value = d.value; f.minEur.value = d.minCents ? d.minCents / 100 : ""; f.expires.value = d.expires || ""; f.maxUses.value = d.maxUses || ""; f.note.value = d.note || ""; f.active.checked = !!d.active; f.code.focus();
      }); });
    }, fail);
  }
  $("#d-form").addEventListener("submit", function (e) {
    e.preventDefault(); var f = e.target;
    call("/discounts", "POST", { code: f.code.value, type: f.type.value, value: Number(f.value.value), minEur: Number(f.minEur.value || 0), expires: f.expires.value || null, maxUses: f.maxUses.value ? Number(f.maxUses.value) : null, note: f.note.value, active: f.active.checked }).then(function (r) {
      if (r.j.ok) { flash("Code gespeichert: " + r.j.discount.code); f.reset(); f.active.checked = true; loadDiscounts(); } else err(r);
    }, fail);
  });

  /* ---------- Newsletter / Kontakt ---------- */
  function loadNewsletter() {
    call("/newsletter").then(function (r) {
      if (!r.j.ok) return err(r);
      var L = { pending: "wartet auf Bestätigung", confirmed: "bestätigt", unsubscribed: "abgemeldet" };
      $("#n-count").textContent = r.j.subscribers.filter(function (s) { return s.status === "confirmed"; }).length + " bestätigte Abonnenten";
      $("#n-body").innerHTML = r.j.subscribers.map(function (s) { return "<tr><td>" + esc(s.email) + "</td><td>" + esc(L[s.status] || s.status) + "</td><td>" + esc(dt(s.createdAt)) + "</td><td>" + esc(s.confirmedAt ? dt(s.confirmedAt) : "–") + "</td></tr>"; }).join("") || '<tr><td colspan="4">Keine Einträge.</td></tr>';
    }, fail);
  }
  /* ---------- Retouren (je Artikel) ---------- */
  var RREASON = { passt_nicht: "Passt nicht (Größe)", gefaellt_nicht: "Gefällt nicht", defekt: "Beschädigt/fehlerhaft", falsch: "Falscher Artikel", anders: "Sieht anders aus", sonstiges: "Sonstiges" };
  var RSTATUS = { angefragt: "Angefragt", genehmigt: "Genehmigt", abgelehnt: "Abgelehnt", eingegangen: "Ware eingegangen", erstattet: "Erstattet" };
  function loadReturns() {
    call("/returns?status=" + encodeURIComponent($("#r-status").value)).then(function (r) {
      if (!r.j.ok) return err(r);
      $("#r-body").innerHTML = r.j.returns.map(function (x) {
        var opts = Object.keys(RSTATUS).map(function (k) { return '<option value="' + k + '"' + (k === x.status ? " selected" : "") + ">" + RSTATUS[k] + "</option>"; }).join("");
        return "<tr><td>" + esc(dt(x.createdAt)) + '</td><td><a href="#" data-r-order="' + esc(x.orderNo) + '">' + esc(x.orderNo) + "</a><br><small>" + esc(x.email || "") + "</small></td><td>" + esc(x.name || "Pos. " + x.itemId) + " × " + x.qty + "</td><td>" + esc(RREASON[x.reason] || x.reason) + (x.comment ? "<br><small>" + esc(x.comment) + "</small>" : "") + '</td><td><span class="status-badge">' + esc(RSTATUS[x.status] || x.status) + "</span>" + (x.adminNote ? "<br><small>" + esc(x.adminNote) + "</small>" : "") + '</td><td><select data-r-status="' + esc(x.id) + '">' + opts + '</select><input data-r-note="' + esc(x.id) + '" maxlength="300" placeholder="Notiz für Kunde" value="' + esc(x.adminNote || "") + '" /><button class="btn btn-sm" data-r-save="' + esc(x.id) + '">Speichern</button></td></tr>';
      }).join("") || '<tr><td colspan="6">Keine Retouren.</td></tr>';
    }, fail);
  }
  $("#r-filter").addEventListener("submit", function (e) { e.preventDefault(); loadReturns(); });
  $("#r-body").addEventListener("click", function (e) {
    var a = e.target.closest("[data-r-order]");
    if (a) { e.preventDefault(); $$("#admin-tabs button")[0].click(); orderDetail(a.getAttribute("data-r-order")); return; }
    var b = e.target.closest("[data-r-save]"); if (!b) return;
    var id = b.getAttribute("data-r-save");
    call("/returns/" + id, "POST", { status: $('[data-r-status="' + id + '"]').value, note: $('[data-r-note="' + id + '"]').value }).then(function (r) { if (r.j.ok) { flash("Retoure aktualisiert: " + RSTATUS[r.j.ret.status]); loadReturns(); } else err(r); }, fail);
  });

  function loadContacts() {
    call("/contacts").then(function (r) {
      if (!r.j.ok) return err(r);
      $("#c-body").innerHTML = r.j.contacts.map(function (c) { return "<tr><td>" + esc(dt(c.at)) + "</td><td>" + esc(c.name) + "<br><small>" + esc(c.email) + "</small></td><td><strong>" + esc(c.subject || "–") + "</strong><br>" + esc(c.message).replace(/\n/g, "<br>") + "</td><td>" + (c.mailed ? "gesendet" : "nur gespeichert") + "</td></tr>"; }).join("") || '<tr><td colspan="4">Keine Anfragen.</td></tr>';
    }, fail);
  }
  start();
})();
