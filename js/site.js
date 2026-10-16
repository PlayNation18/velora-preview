/* VELORA – Seitenübergreifend: Newsletter-Formular im Footer (Double-Opt-In) und Hinweis zu technisch notwendigen Cookies / lokalem Speicher.
 * Es werden KEINE Tracking- oder Marketing-Cookies gesetzt und keine externen Analyse-Dienste geladen. */
(function () {
  "use strict";
  var NOTICE_KEY = "velora_notice_v1";
  var $ = function (s, r) { return (r || document).querySelector(s); };

  function setupNewsletter() {
    var f = $("#newsletter-form"); if (!f) return;
    var msg = $("#nl-msg"), btn = f.querySelector("button[type=submit]");
    function show(t, kind) { msg.textContent = t; msg.className = "nl-msg is-" + kind; msg.hidden = !t; }
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = $("#nl-email").value.trim(), accept = $("#nl-accept").checked;
      if (!/^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/.test(email)) { show("Bitte geben Sie eine gültige E-Mail-Adresse ein.", "error"); $("#nl-email").focus(); return; }
      if (!accept) { show("Bitte stimmen Sie dem Erhalt des Newsletters zu.", "error"); return; }
      if (!window.VeloraAuth) { show("Newsletter-Server nicht erreichbar.", "error"); return; }
      btn.disabled = true; btn.textContent = "Bitte warten …";
      window.VeloraAuth.api("/newsletter", "POST", { email: email, accept: true, website: f.elements.website ? f.elements.website.value : "" }).then(function (r) {
        if (r.data && r.data.ok) { show(r.data.message || "Bitte bestätigen Sie Ihre Anmeldung über den Link in der E-Mail.", "success"); f.reset(); }
        else show((r.data && r.data.error) || "Anmeldung nicht möglich.", "error");
      }, function () { show("Newsletter-Server nicht erreichbar. Bitte versuchen Sie es später erneut.", "error"); })
        .then(function () { btn.disabled = false; btn.textContent = btn.getAttribute("data-label") || "Anmelden"; });
    });
  }

  function setupNotice() {
    var seen = false; try { seen = localStorage.getItem(NOTICE_KEY) === "1"; } catch (_) {}
    if (seen || /admin\.html$/.test(location.pathname)) return;
    var d = document.createElement("div");
    d.className = "cookie-notice"; d.setAttribute("role", "region"); d.setAttribute("aria-label", "Hinweis zu Cookies und lokalem Speicher");
    d.innerHTML = '<p><strong>Nur technisch Notwendiges.</strong> Diese Website verwendet ein Sitzungs-Cookie für die Anmeldung und speichert Warenkorb und Einstellungen lokal in Ihrem Browser. Es gibt kein Tracking und keine Werbe-Cookies. Details in der <a href="datenschutz.html#cookies">Datenschutzerklärung</a>.</p><button type="button" class="btn">Verstanden</button>';
    d.querySelector("button").addEventListener("click", function () { try { localStorage.setItem(NOTICE_KEY, "1"); } catch (_) {} d.remove(); });
    document.body.appendChild(d);
  }
  function init() { setupNewsletter(); setupNotice(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
