/* VELORA – Formulare: Kontakt (kontakt.html), Online-Widerruf (widerruf.html), Newsletter-Status (newsletter.html).
 * Alle Aufrufe gehen über VeloraAuth.api (same-origin, /api). Ohne Server erscheint eine klare Meldung. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var UNREACH = "Server nicht erreichbar. Bitte versuchen Sie es später erneut.";
  var EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
  function msg(text, kind) { var b = $("#form-msg"); if (!b) return; b.textContent = text; b.className = "form-msg is-" + (kind || "error"); b.hidden = !text; if (text) b.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
  function ferr(id, t) { var e = $("#err-" + id); if (e) { e.textContent = t || ""; e.hidden = !t; } }
  function clear(f) { msg(""); f.querySelectorAll(".field-error").forEach(function (e) { e.hidden = true; e.textContent = ""; }); }
  function busy(btn, on) { btn.disabled = on; btn.textContent = on ? "Bitte warten …" : btn.getAttribute("data-label"); }
  function post(path, body, btn, ok) {
    busy(btn, true);
    return window.VeloraAuth.api(path, "POST", body).then(function (r) {
      var d = r.data || {};
      if (r.status >= 200 && r.status < 300 && d.ok) ok(d);
      else { Object.keys(d.fields || {}).forEach(function (k) { ferr(k, d.fields[k]); }); msg(d.error || "Das hat leider nicht geklappt.", "error"); }
    }, function () { msg(UNREACH, "error"); }).then(function () { busy(btn, false); });
  }

  function contact(f) {
    var btn = f.querySelector("button[type=submit]");
    f.addEventListener("submit", function (e) {
      e.preventDefault(); clear(f);
      var v = function (n) { return f.elements[n].value.trim(); }, errs = {};
      if (!v("name")) errs.name = "Bitte geben Sie Ihren Namen ein.";
      if (!EMAIL_RE.test(v("email"))) errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      if (v("message").length < 10) errs.message = "Bitte schreiben Sie uns mindestens 10 Zeichen.";
      if (!f.elements.accept.checked) errs.accept = "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.";
      var ks = Object.keys(errs); if (ks.length) { ks.forEach(function (k) { ferr(k, errs[k]); }); msg("Bitte prüfen Sie Ihre Eingaben.", "error"); return; }
      post("/contact", { name: v("name"), email: v("email"), subject: v("subject"), message: v("message"), accept: true, website: f.elements.website.value }, btn, function (d) { f.reset(); msg(d.message || "Vielen Dank für Ihre Nachricht.", "success"); });
    });
  }

  function withdraw(f) {
    var btn = f.querySelector("button[type=submit]");
    f.addEventListener("submit", function (e) {
      e.preventDefault(); clear(f);
      var no = f.elements.orderNo.value.trim().toUpperCase(), em = f.elements.email.value.trim(), errs = {};
      if (!/^VL-\d{4}-\d{6}$/.test(no)) errs.orderNo = "Bitte geben Sie die Bestellnummer ein (Format VL-2026-000001).";
      if (!EMAIL_RE.test(em)) errs.email = "Bitte geben Sie die E-Mail-Adresse der Bestellung ein.";
      var ks = Object.keys(errs); if (ks.length) { ks.forEach(function (k) { ferr(k, errs[k]); }); msg("Bitte prüfen Sie Ihre Eingaben.", "error"); return; }
      post("/returns", { orderNo: no, email: em, kind: "widerruf", reason: f.elements.reason.value.trim() }, btn, function (d) { f.hidden = true; msg((d.message || "Ihr Widerruf ist eingegangen.") + " Eine Bestätigung wurde per E-Mail gesendet.", "success"); });
    });
  }

  function newsletterPage() {
    var q = new URLSearchParams(location.search), st = q.get("status");
    var T = { bestaetigt: ["Vielen Dank – Ihre Newsletter-Anmeldung ist bestätigt.", "success"], ungueltig: ["Der Bestätigungslink ist ungültig oder wurde bereits verwendet.", "error"], abgelaufen: ["Der Bestätigungslink ist abgelaufen. Bitte melden Sie sich im Footer erneut an.", "error"] };
    if (st && T[st]) msg(T[st][0], T[st][1]);
    var em = q.get("abmelden"), tk = q.get("token");
    if (em && tk) {
      history.replaceState(null, "", location.pathname);
      $("#nl-unsub").hidden = false; $("#nl-unsub-email").textContent = em;
      var b = $("#nl-unsub-btn");
      b.addEventListener("click", function () {
        post("/newsletter/unsubscribe", { email: em, token: tk }, b, function (d) { $("#nl-unsub").hidden = true; msg(d.message || "Sie wurden abgemeldet.", "success"); });
      });
    } else if (!st) msg("Hier bestätigen oder beenden Sie Ihre Newsletter-Anmeldung über den Link aus der E-Mail.", "success");
  }

  function init() {
    if (!window.VeloraAuth) return;
    var c = $("#contact-form"); if (c) contact(c);
    var w = $("#withdraw-form"); if (w) withdraw(w);
    if ($("#nl-unsub")) newsletterPage();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
