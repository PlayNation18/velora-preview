/* VELORA – KI-Transparenzhinweise (EU AI Act Art. 50). DE/EN über localStorage "velora_lang". */
(function () {
  var lang = "de"; try { lang = localStorage.getItem("velora_lang") === "en" ? "en" : "de"; } catch (_) {}
  var T = {
    de: { foot: "Produktbilder teils KI-visualisiert – das Original kann leicht abweichen.",
          pdp: "Abbildung teils KI-visualisiert – Farbe und Details des Originals können leicht abweichen.",
          tag: "KI-generiert", more: "Mehr dazu" },
    en: { foot: "Some product images are AI-visualised – the actual item may differ slightly.",
          pdp: "Image partly AI-visualised – colour and details of the actual item may differ slightly.",
          tag: "AI-generated", more: "Learn more" }
  }[lang];
  /* Bilder/Videos mit Personen (Models): Lookbook-Fotos, Hero-/Lookbook-Videos */
  var PERSON = /(img\/neu\/lookbook\/|video\/)/;
  function wrap(el) {
    if (el.dataset.kiTagged) return; el.dataset.kiTagged = "1";
    var p = el.parentElement; if (!p) return;
    if (getComputedStyle(p).position === "static") p.style.position = "relative";
    if (p.querySelector(":scope > .ki-tag")) return;
    var s = document.createElement("span"); s.className = "ki-tag"; s.textContent = T.tag; s.setAttribute("aria-label", T.tag);
    p.appendChild(s);
  }
  function scan() {
    document.querySelectorAll("img").forEach(function (i) { if (PERSON.test(i.getAttribute("src") || "")) wrap(i); });
    document.querySelectorAll("video").forEach(function (v) {
      var src = (v.getAttribute("poster") || "") + (v.getAttribute("src") || "") + Array.prototype.map.call(v.querySelectorAll("source"), function (x) { return x.getAttribute("src") || ""; }).join("");
      if (PERSON.test(src)) wrap(v);
    });
    document.querySelectorAll("[style*='lookbook/']").forEach(wrap);
    var g = document.querySelector(".pdp-gallery");
    if (g && !document.querySelector(".ki-pdp-note")) {
      var n = document.createElement("p"); n.className = "ki-pdp-note"; n.textContent = T.pdp; g.appendChild(n);
    }
    var f = document.querySelector(".site-footer");
    if (f && !f.querySelector(".ki-footer-note")) {
      var d = document.createElement("div"); d.className = "wrap ki-footer-note";
      d.innerHTML = '<span>' + T.foot + '</span> <a href="impressum.html#ki-hinweis">' + T.more + '</a>';
      f.appendChild(d);
    }
  }
  var t; function later() { clearTimeout(t); t = setTimeout(scan, 120); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", scan); else scan();
  try { new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true }); } catch (_) {}
})();
