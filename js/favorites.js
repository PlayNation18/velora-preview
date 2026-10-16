/* VELORA – Favoriten (Herz auf Produktkarten und Produktseite).
 * Gäste: localStorage "velora_favs". Angemeldet: Server (/api/account/favorites). Beim ersten Laden nach dem Login werden
 * die Gast-Favoriten automatisch ins Konto übernommen (/api/account/favorites/merge) und lokal gelöscht.
 * Jedes Element mit data-fav-id (optional data-fav-color) wird zum Herz-Schalter. API: window.VeloraFav */
(function () {
  "use strict";
  var KEY = "velora_favs", HINT = "velora_auth";
  var list = [], server = false, listeners = [];
  function local() { try { var a = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(a) ? a.filter(function (x) { return x && typeof x.id === "string"; }).slice(0, 300) : []; } catch (_) { return []; } }
  function saveLocal(a) { try { if (a.length) localStorage.setItem(KEY, JSON.stringify(a)); else localStorage.removeItem(KEY); } catch (_) {} }
  function loggedInHint() { try { return !!localStorage.getItem(HINT); } catch (_) { return false; } }
  function api(path, method, body) { return window.VeloraAuth ? window.VeloraAuth.api("/account/favorites" + path, method, body) : Promise.reject({ unreachable: true }); }
  function has(id) { return list.some(function (x) { return x.id === id; }); }
  function emit() { paint(); listeners.forEach(function (f) { try { f(list.slice()); } catch (_) {} }); }
  function toast(t) {
    var el = document.getElementById("fav-toast");
    if (!el) { el = document.createElement("div"); el.id = "fav-toast"; el.className = "fav-toast"; el.setAttribute("role", "status"); el.setAttribute("aria-live", "polite"); document.body.appendChild(el); }
    el.innerHTML = t; el.classList.add("is-visible"); clearTimeout(el._t); el._t = setTimeout(function () { el.classList.remove("is-visible"); }, 2200);
  }
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.3 0 5.6 3.1 4.4 6.6-1.7 4.8-9.2 9.4-9.2 9.4z"/></svg>';
  function paint(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll("[data-fav-id]"), function (b) {
      if (!b.innerHTML.trim()) b.innerHTML = HEART + (b.classList.contains("fav-btn-pdp") ? '<span class="fav-label"></span>' : "");
      var on = has(b.getAttribute("data-fav-id"));
      b.classList.toggle("is-on", on); b.setAttribute("aria-pressed", String(on));
      b.setAttribute("aria-label", on ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"); b.title = b.getAttribute("aria-label");
      var l = b.querySelector(".fav-label"), t = on ? "Gemerkt" : "Merken"; if (l && l.textContent !== t) l.textContent = t;
    });
  }
  function toggle(id, colorId) {
    var on = has(id);
    if (on) list = list.filter(function (x) { return x.id !== id; }); else list.unshift({ id: id, colorId: colorId || null, at: new Date().toISOString() });
    emit();
    toast(on ? "Aus den Favoriten entfernt" : 'Zu den Favoriten hinzugefügt · <a href="konto.html?bereich=favoriten">Ansehen</a>');
    if (!server) { saveLocal(list); return Promise.resolve(list); }
    var p = on ? api("?id=" + encodeURIComponent(id), "DELETE") : api("", "POST", { id: id, colorId: colorId || null });
    return p.then(function (r) { if (r.status === 401) { server = false; saveLocal(list); } else if (r.data && r.data.favorites) { list = r.data.favorites; emit(); } return list; }, function () { return list; });
  }
  function load() {
    list = local();
    if (!loggedInHint() || !window.VeloraAuth) { emit(); return Promise.resolve(list); }
    var guest = list.slice();
    var p = guest.length ? api("/merge", "POST", { items: guest }) : api("");
    return p.then(function (r) {
      if (r.status === 401) { server = false; emit(); return list; }
      server = true; list = (r.data && r.data.favorites) || [];
      if (guest.length) { saveLocal([]); if (r.data && r.data.added) toast(r.data.added + (r.data.added === 1 ? " Favorit" : " Favoriten") + " in Ihr Konto übernommen"); }
      emit(); return list;
    }, function () { emit(); return list; });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-fav-id]"); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    toggle(b.getAttribute("data-fav-id"), b.getAttribute("data-fav-color"));
  }, true);
  var ready = load();
  if ("MutationObserver" in window) new MutationObserver(function (ms) { for (var i = 0; i < ms.length; i++) { var n = ms[i].addedNodes; for (var j = 0; j < n.length; j++) if (n[j].nodeType === 1 && (n[j].matches("[data-fav-id]") || n[j].querySelector("[data-fav-id]"))) { paint(); return; } } }).observe(document.documentElement, { childList: true, subtree: true });
  window.VeloraFav = { list: function () { return list.slice(); }, has: has, toggle: toggle, ready: ready, reload: load, onChange: function (f) { listeners.push(f); }, isServer: function () { return server; } };
})();
