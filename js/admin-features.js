/* VELORA Admin – Bewertungen moderieren (Fotos/Videos), Wieder-da-Anmeldungen und Warenkorb-Erinnerungen. */
(function () {
  "use strict";
  var CFG = window.VELORA_CONFIG || {};
  var BASE = String(CFG.API_BASE || "/api").replace(/\/+$/, "") + "/admin";
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var dt = function (iso) { try { return iso ? new Date(iso).toLocaleString("de-AT", { dateStyle: "short", timeStyle: "short" }) : "–"; } catch (_) { return iso || ""; } };
  var LBL = { pending: "Zu prüfen", approved: "Freigeschaltet", hidden: "Ausgeblendet" };
  function call(path, method, body) {
    var o = { method: method || "GET", credentials: "same-origin", headers: {} };
    if (body !== undefined) { o.headers["Content-Type"] = "application/json"; o.body = JSON.stringify(body); }
    return fetch(BASE + path, o).then(function (r) { return r.json().then(function (j) { return { status: r.status, j: j }; }); });
  }
  function flash(t, kind) { var b = $("#admin-msg"); if (!b) return; b.textContent = t; b.className = "form-msg is-" + (kind || "success"); b.hidden = !t; }
  function stars(n) { var s = ""; for (var i = 1; i <= 5; i++) s += i <= n ? "★" : "☆"; return '<span style="color:#e4c878">' + s + "</span>"; }

  function loadReviews() {
    var st = $("#rv-status").value;
    call("/reviews?status=" + encodeURIComponent(st)).then(function (r) {
      if (!r.j.ok) return flash(r.j.error || "Fehler", "error");
      var c = r.j.counts || {};
      $("#rv-counts").textContent = "Zu prüfen: " + (c.pending || 0) + " · Freigeschaltet: " + (c.approved || 0) + " · Ausgeblendet: " + (c.hidden || 0);
      $("#rv-pending-badge").textContent = c.pending ? "(" + c.pending + ")" : "";
      $("#rv-admin-list").innerHTML = r.j.reviews.length ? r.j.reviews.map(function (v) {
        var media = (v.media || []).map(function (m) { return m.kind === "video" ? '<video class="rv-video" src="' + esc(m.url) + '" controls playsinline preload="metadata" muted></video><small>' + (m.duration ? String(m.duration).replace(".", ",") + " s · " : "") + Math.round(m.bytes / 1024 / 102.4) / 10 + " MB</small>" : '<a href="' + esc(m.url) + '" target="_blank" rel="noopener"><img class="rv-photo" src="' + esc(m.url) + '" alt="Foto"></a>'; }).join("");
        return '<div class="admin-review' + (v.status === "pending" ? " is-pending" : "") + '" data-id="' + esc(v.id) + '"><div><p>' + stars(v.rating) + ' <strong>' + esc(v.productName) + '</strong> <span class="badge-status">' + esc(LBL[v.status] || v.status) + "</span></p>" +
          (v.title ? "<p><strong>" + esc(v.title) + "</strong></p>" : "") + "<p>" + esc(v.text).replace(/\n/g, "<br>") + "</p>" + (media ? '<div class="rv-media">' + media + "</div>" : "") +
          '<p class="admin-note">' + esc(v.author) + " · " + esc(v.email || "") + " · " + esc(dt(v.createdAt)) + (v.orderNo ? " · Kauf " + esc(v.orderNo) : "") + '</p></div><div class="rv-actions">' +
          (v.status !== "approved" ? '<button class="btn btn-sm" data-act="approve">Freischalten</button>' : "") + (v.status !== "hidden" ? '<button class="btn btn-outline btn-sm" data-act="hide">Ausblenden</button>' : "") + '<button class="btn btn-outline btn-sm" data-act="delete">Löschen</button></div></div>';
      }).join("") : '<p class="admin-note">Keine Bewertungen in dieser Ansicht.</p>';
    }, function () { flash("Server nicht erreichbar.", "error"); });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("#rv-admin-list [data-act]"); if (!b) return;
    var id = b.closest("[data-id]").getAttribute("data-id"), act = b.getAttribute("data-act");
    if (act === "delete" && !confirm("Bewertung inkl. Fotos/Video endgültig löschen?")) return;
    (act === "delete" ? call("/reviews/" + id, "DELETE") : call("/reviews/" + id, "POST", { action: act })).then(function (r) {
      flash(r.j.ok ? (act === "approve" ? "Bewertung freigeschaltet." : act === "hide" ? "Bewertung ausgeblendet." : "Bewertung gelöscht.") : r.j.error, r.j.ok ? "success" : "error"); loadReviews();
    });
  });
  function loadAlerts() {
    call("/stock-alerts").then(function (r) {
      $("#al-body").innerHTML = (r.j.alerts || []).map(function (a) { return "<tr><td>" + esc(dt(a.createdAt)) + "</td><td>" + esc(a.email) + "</td><td>" + esc(a.productName) + " (" + esc(a.productId) + ")</td><td>" + esc(a.colorId) + "</td><td>" + esc(a.size) + "</td><td>" + (a.notifiedAt ? esc(dt(a.notifiedAt)) : "wartet") + "</td></tr>"; }).join("") || '<tr><td colspan="6">Keine Anmeldungen.</td></tr>';
    });
    call("/carts").then(function (r) {
      $("#ct-note").textContent = r.j.enabled ? "Erinnerung einmalig " + r.j.reminderHours + " h nach der letzten Änderung – nur mit Einwilligung (Häkchen im Checkout oder bestätigter Newsletter), nie nach Abmeldung." : "Warenkorb-Erinnerung ist ausgeschaltet (CART_REMINDER=0).";
      $("#ct-body").innerHTML = (r.j.carts || []).map(function (c) { return "<tr><td>" + esc(dt(c.updatedAt)) + "</td><td>" + esc(c.email) + "</td><td>" + (c.account ? "ja" : "Gast") + "</td><td>" + c.items + "</td><td>" + (c.consent ? "ja" : "nein") + "</td><td>" + esc(dt(c.remindedAt)) + "</td><td>" + esc(dt(c.convertedAt)) + "</td></tr>"; }).join("") || '<tr><td colspan="7">Keine Warenkörbe.</td></tr>';
    });
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest('[data-tab="reviews"],[data-tab="alerts"]'); if (!t) return;
    if (t.getAttribute("data-tab") === "reviews") loadReviews(); else loadAlerts();
  });
  var f = $("#rv-filter"); if (f) f.addEventListener("submit", function (e) { e.preventDefault(); loadReviews(); });
  setTimeout(function () { call("/reviews?status=pending").then(function (r) { if (r.j.ok && r.j.counts && r.j.counts.pending) $("#rv-pending-badge").textContent = "(" + r.j.counts.pending + ")"; }, function () {}); }, 1500);
})();
