/* VELORA – Konto (Anmelden, Registrieren, Passwort zurücksetzen). Läuft auf allen Seiten:
 *  - ergänzt im Header das Konto-Symbol ("Anmelden" bzw. nach Login "Mein Konto" mit Abmelden)
 *  - steuert die Formulare auf login/register/passwort-vergessen/passwort-zuruecksetzen/konto
 * API-Basis: VELORA_CONFIG.API_BASE (Standard "/api", same-origin → HttpOnly-Cookie). Ohne erreichbaren Konto-Server
 * erscheint die Meldung "Konto-Server nicht erreichbar" – kein Absturz. Passwörter werden nie gespeichert oder geloggt. */
(function () {
  "use strict";
  var CFG = window.VELORA_CONFIG || {};
  var BASE = String(CFG.API_BASE || "/api").replace(/\/+$/, "");
  var HINT = "velora_auth"; // Merker "war angemeldet" (nur Vorname) – vermeidet unnötige Server-Aufrufe auf Seiten ohne Konto
  var UNREACHABLE = "Konto-Server nicht erreichbar. Bitte versuchen Sie es später erneut.";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  function getHint() { try { return JSON.parse(localStorage.getItem(HINT) || "null"); } catch (_) { return null; } }
  function setHint(u) { try { if (u) localStorage.setItem(HINT, JSON.stringify({ n: u.firstName })); else localStorage.removeItem(HINT); } catch (_) {} }

  /* Rückgabe { status, data } – oder wirft { unreachable: true } */
  function api(path, method, body) {
    var opts = { method: method || "GET", credentials: "same-origin", headers: {}, cache: "no-store" };
    if (body !== undefined) { opts.headers["Content-Type"] = "application/json"; opts.body = JSON.stringify(body); }
    return fetch(BASE + path, opts).then(function (res) {
      return res.text().then(function (txt) {
        var data = null;
        try { data = JSON.parse(txt); } catch (_) {}
        if (!data || typeof data !== "object") throw { unreachable: true }; // z. B. statischer Server ohne API (404/405-HTML)
        return { status: res.status, data: data };
      });
    }, function () { throw { unreachable: true }; });
  }
  function me() {
    return api("/me").then(function (r) { var u = r.data && r.data.user ? r.data.user : null; setHint(u); return u; });
  }
  function logout() {
    return api("/logout", "POST", {}).then(function () { setHint(null); }, function () { setHint(null); throw { unreachable: true }; });
  }

  /* ---------- Header ---------- */
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.9-3.9 3.7-5.9 7.5-5.9s6.6 2 7.5 5.9"/></svg>';
  var menuOpen = false;

  function renderHeader(user, hint) {
    var link = $("#account-link"), nav = $("#site-nav");
    var name = user ? user.firstName : hint ? hint.n : "";
    var loggedIn = !!(user || hint);
    if (link) {
      var wrap = link.closest(".account-wrap");
      if (!wrap) {
        wrap = document.createElement("div"); wrap.className = "account-wrap";
        link.parentNode.insertBefore(wrap, link); wrap.appendChild(link);
      }
      var old = wrap.querySelector(".account-menu"); if (old) old.remove();
      link.innerHTML = ICON + '<span class="account-label">' + (loggedIn ? "Mein Konto" : "Anmelden") + "</span>";
      link.setAttribute("aria-label", loggedIn ? "Mein Konto" + (name ? " von " + name : "") : "Anmelden");
      link.setAttribute("href", loggedIn ? "konto.html" : "login.html");
      link.setAttribute("aria-haspopup", loggedIn ? "true" : "false");
      link.setAttribute("aria-expanded", "false");
      link.classList.toggle("is-in", loggedIn);
      if (loggedIn) {
        var m = document.createElement("div"); m.className = "account-menu"; m.id = "account-menu"; m.hidden = true;
        m.innerHTML = (name ? '<p class="account-hello">Hallo, ' + esc(name) + "</p>" : "") +
          '<a href="konto.html">Mein Konto</a><a href="konto.html?bereich=favoriten">Favoriten</a><a href="konto.html?bereich=bestellungen">Bestellungen</a><a href="konto.html?bereich=punkte">Punkte</a><button type="button" id="account-logout">Abmelden</button>';
        wrap.appendChild(m);
        $("#account-logout", m).addEventListener("click", doLogoutAndGo);
      }
    }
    if (nav) {
      var na = $(".nav-account", nav);
      if (!na) { na = document.createElement("a"); na.className = "nav-account"; nav.appendChild(na); }
      na.href = loggedIn ? "konto.html" : "login.html";
      na.textContent = loggedIn ? "Mein Konto" : "Anmelden";
    }
    menuOpen = false;
  }
  function doLogoutAndGo() {
    logout().then(go, go);
    function go() { renderHeader(null, null); if (/konto\.html$/.test(location.pathname)) location.href = "login.html"; else location.reload(); }
  }
  document.addEventListener("click", function (e) {
    var link = $("#account-link"), menu = $("#account-menu");
    if (!link || !menu) return;
    if (link.contains(e.target)) { e.preventDefault(); menuOpen = !menuOpen; menu.hidden = !menuOpen; link.setAttribute("aria-expanded", String(menuOpen)); }
    else if (!menu.contains(e.target)) { menuOpen = false; menu.hidden = true; link.setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", function (e) {
    var menu = $("#account-menu"), link = $("#account-link");
    if (e.key === "Escape" && menu && !menu.hidden) { menu.hidden = true; menuOpen = false; if (link) { link.setAttribute("aria-expanded", "false"); link.focus(); } }
  });

  /* ---------- Formular-Hilfen ---------- */
  var msgBox = function () { return $("#form-msg"); };
  function showMsg(text, kind) {
    var b = msgBox(); if (!b) return;
    b.textContent = text; b.className = "form-msg is-" + (kind || "error"); b.hidden = !text;
    if (text) b.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  function fieldErr(id, text) {
    var e = $("#err-" + id), inp = $("#" + id);
    if (e) { e.textContent = text || ""; e.hidden = !text; }
    if (inp) { if (text) { inp.setAttribute("aria-invalid", "true"); inp.setAttribute("aria-describedby", "err-" + id); } else { inp.removeAttribute("aria-invalid"); inp.removeAttribute("aria-describedby"); } }
  }
  function clearErrors(form) { showMsg(""); form.querySelectorAll(".field-error").forEach(function (e) { e.hidden = true; e.textContent = ""; }); form.querySelectorAll("[aria-invalid]").forEach(function (i) { i.removeAttribute("aria-invalid"); }); }
  function setBusy(btn, busy) {
    btn.disabled = busy; btn.setAttribute("aria-busy", String(busy));
    btn.textContent = busy ? "Bitte warten …" : btn.getAttribute("data-label");
  }
  var EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;
  function applyServerFields(fields) {
    var first = null;
    Object.keys(fields || {}).forEach(function (k) { fieldErr(k, fields[k]); if (!first && $("#" + k)) first = $("#" + k); });
    if (first) first.focus();
  }
  function nextTarget() {
    var n = new URLSearchParams(location.search).get("next") || "";
    return /^[a-z0-9-]+\.html(\?[A-Za-z0-9=&_.%-]*)?$/.test(n) && !/^(login|register)\.html/.test(n) ? n : "konto.html";
  }
  function keepNext() {
    var n = new URLSearchParams(location.search).get("next");
    if (!n) return;
    var a = $("#alt-register"), b = $("#alt-login");
    if (a) a.href = "register.html?next=" + encodeURIComponent(n);
    if (b) b.href = "login.html?next=" + encodeURIComponent(n);
  }

  function setupToggles() {
    document.querySelectorAll(".pw-toggle").forEach(function (b) {
      b.addEventListener("click", function () {
        var inp = document.getElementById(b.getAttribute("data-target"));
        var show = inp.type === "password";
        // Beide Passwortfelder gemeinsam umschalten (Registrierung/Reset)
        document.querySelectorAll(".pw-toggle").forEach(function (t) {
          var i = document.getElementById(t.getAttribute("data-target"));
          i.type = show ? "text" : "password"; t.textContent = show ? "Verbergen" : "Anzeigen";
          t.setAttribute("aria-pressed", String(show)); t.setAttribute("aria-label", show ? "Passwort verbergen" : "Passwort anzeigen");
        });
      });
    });
  }

  function handleFailure(err) {
    if (err && err.unreachable) showMsg(UNREACHABLE, "error");
    else showMsg("Unerwarteter Fehler. Bitte versuchen Sie es erneut.", "error");
  }

  function setupForm(form) {
    var kind = form.getAttribute("data-auth-form"), btn = form.querySelector('button[type="submit"]');
    var token = "";
    if (kind === "reset") {
      token = new URLSearchParams(location.search).get("token") || "";
      // Token aus der Adresszeile entfernen (Verlauf/Referrer)
      if (token && history.replaceState) history.replaceState(null, "", location.pathname);
      if (!/^[A-Za-z0-9_-]{20,100}$/.test(token)) {
        form.hidden = true;
        showMsg("Dieser Link ist ungültig oder unvollständig. Bitte fordern Sie einen neuen Link an.", "error");
        var af = $("#alt-forgot"); if (af) af.hidden = false;
        return;
      }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors(form);
      var v = function (id) { var el = $("#" + id, form); return el ? el.value : ""; };
      var errs = {}, body, path;
      if (kind === "login") {
        if (!EMAIL_RE.test(v("email").trim())) errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        if (!v("password")) errs.password = "Bitte geben Sie Ihr Passwort ein.";
        body = { email: v("email").trim(), password: v("password") }; path = "/login";
      } else if (kind === "register") {
        if (!v("firstName").trim()) errs.firstName = "Bitte geben Sie Ihren Vornamen ein.";
        if (!v("lastName").trim()) errs.lastName = "Bitte geben Sie Ihren Nachnamen ein.";
        if (!EMAIL_RE.test(v("email").trim())) errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        if (v("password").length < 8) errs.password = "Das Passwort muss mindestens 8 Zeichen lang sein.";
        if (v("password2") !== v("password")) errs.password2 = "Die Passwörter stimmen nicht überein.";
        if (!$("#accept", form).checked) errs.accept = "Bitte stimmen Sie AGB und Datenschutz zu.";
        body = { firstName: v("firstName").trim(), lastName: v("lastName").trim(), email: v("email").trim(), password: v("password"), accept: $("#accept", form).checked }; path = "/register";
      } else if (kind === "forgot") {
        if (!EMAIL_RE.test(v("email").trim())) errs.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        body = { email: v("email").trim() }; path = "/forgot";
      } else if (kind === "reset") {
        if (v("password").length < 8) errs.password = "Das Passwort muss mindestens 8 Zeichen lang sein.";
        if (v("password2") !== v("password")) errs.password2 = "Die Passwörter stimmen nicht überein.";
        body = { token: token, password: v("password") }; path = "/reset";
      }
      var keys = Object.keys(errs);
      if (keys.length) { keys.forEach(function (k) { fieldErr(k, errs[k]); }); showMsg("Bitte prüfen Sie Ihre Eingaben.", "error"); var f = $("#" + keys[0], form); if (f) f.focus(); return; }
      setBusy(btn, true);
      api(path, "POST", body).then(function (r) {
        var d = r.data;
        if (r.status >= 200 && r.status < 300 && d.ok) {
          if (kind === "login" || kind === "register") { setHint(d.user); location.href = nextTarget(); return; }
          if (kind === "forgot") { form.hidden = true; showMsg(d.message || "Falls zu dieser E-Mail-Adresse ein Konto existiert, haben wir einen Link gesendet.", "success"); setBusy(btn, false); return; }
          if (kind === "reset") { form.hidden = true; showMsg((d.message || "Ihr Passwort wurde geändert.") , "success"); var a = $(".auth-alt a[href='login.html']"); if (a) { a.classList.add("btn"); a.textContent = "Jetzt anmelden"; } setBusy(btn, false); return; }
        }
        if (d.fields) applyServerFields(d.fields);
        if (kind === "reset" && d.code === "invalid_token") { form.hidden = true; var af2 = $("#alt-forgot"); if (af2) af2.hidden = false; }
        showMsg(d.error || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.", "error");
        setBusy(btn, false);
        if (kind === "login" || kind === "register") { var pw = $("#password", form); if (pw && r.status === 401) { pw.value = ""; pw.focus(); } }
      }).catch(function (err) { handleFailure(err); setBusy(btn, false); });
    });
  }

  function setupKonto() {
    var box = $("#konto-box"), loading = $("#konto-loading");
    me().then(function (u) {
      if (!u) { location.replace("login.html?next=konto.html"); return; }
      $("#konto-name").textContent = u.firstName + " " + u.lastName;
      $("#konto-email").textContent = u.email;
      loading.hidden = true; box.hidden = false;
      renderHeader(u);
    }).catch(function (err) { loading.hidden = true; handleFailure(err); });
    var lb = $("#logout-btn");
    if (lb) lb.addEventListener("click", function () { setBusy(lb, true); logout().then(function () { location.href = "login.html"; }, function (err) { handleFailure(err); setBusy(lb, false); }); });
  }

  /* ---------- Start ---------- */
  function init() {
    var hint = getHint();
    renderHeader(null, hint);
    var form = $("#auth-form"), onKonto = !!$("#konto-box");
    if (hint && !onKonto) me().then(function (u) { renderHeader(u, null); }, function () { /* Server nicht erreichbar: Zustand beibehalten */ });
    setupToggles(); keepNext();
    if (form) {
      setupForm(form);
      var k = form.getAttribute("data-auth-form");
      if ((k === "login" || k === "register") && !hint) {
        // Bereits angemeldet (Cookie vorhanden, Merker fehlt)? Dann direkt weiter.
        me().then(function (u) { if (u) { renderHeader(u, null); location.replace(nextTarget()); } }, function () { showMsg(UNREACHABLE, "error"); });
      } else if (k === "login" || k === "register") {
        me().then(function (u) { if (u) location.replace(nextTarget()); }, function () { showMsg(UNREACHABLE, "error"); });
      } else if (k === "forgot" || k === "reset") {
        api("/health").catch(function () { showMsg(UNREACHABLE, "error"); });
      }
    }
    if (onKonto) setupKonto();
  }
  window.VeloraAuth = { api: api, me: me, logout: logout };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
