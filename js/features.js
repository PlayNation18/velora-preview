/* VELORA – Extras im Shop:
 *  · Sterne auf Produktkarten (/api/reviews/summary)
 *  · Produktseite: Größenberater, „Benachrichtige mich“ bei ausverkauften Größen, Bewertungen mit Fotos/Video,
 *    „Komplettiere den Look“ (Lookbook-Looks bzw. passende Gold-Teile) und „Zuletzt angesehen“ (localStorage)
 *  · Warenkorb-Sync für die Warenkorb-Erinnerung (angemeldet bzw. Checkout mit Häkchen) + Wiederherstellen per Mail-Link
 * Ohne erreichbaren Server bleiben Größenberater, Look und Zuletzt-angesehen funktionsfähig. */
(function () {
  "use strict";
  var CFG = window.VELORA_CONFIG || {};
  var BASE = String(CFG.API_BASE || "/api").replace(/\/+$/, "");
  var RECENT = "velora_recent_v1", CART = "velora_cart_v1";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var loggedIn = function () { try { return !!localStorage.getItem("velora_auth"); } catch (_) { return false; } };
  function getJson(path) { return fetch(BASE + path, { credentials: "same-origin", cache: "no-store" }).then(function (r) { return r.json().then(function (j) { return { status: r.status, j: j }; }); }); }
  function postJson(path, body) { return fetch(BASE + path, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).then(function (r) { return r.json().then(function (j) { return { status: r.status, j: j }; }); }); }
  function stars(avg, cls) {
    var out = "", full = Math.round(avg * 2) / 2;
    for (var i = 1; i <= 5; i++) out += '<span class="st' + (full >= i ? " on" : full >= i - 0.5 ? " half" : "") + '">★</span>';
    return '<span class="stars ' + (cls || "") + '" aria-label="' + String(avg).replace(".", ",") + ' von 5 Sternen">' + out + "</span>";
  }

  /* ---------- Sterne auf Karten ---------- */
  var summary = null;
  function loadSummary() {
    try { var c = JSON.parse(sessionStorage.getItem("velora_rv_sum") || "null"); if (c && Date.now() - c.t < 120000) { summary = c.s; return Promise.resolve(); } } catch (_) {}
    return getJson("/reviews/summary").then(function (r) { summary = (r.j && r.j.summary) || {}; try { sessionStorage.setItem("velora_rv_sum", JSON.stringify({ t: Date.now(), s: summary })); } catch (_) {} }, function () { summary = {}; });
  }
  function decorateCards() {
    if (!summary) return;
    document.querySelectorAll("a.product-card[href*='product.html?id=']").forEach(function (a) {
      if (a.querySelector(".card-stars")) return;
      var m = /[?&]id=([^&]+)/.exec(a.getAttribute("href")); var s = m && summary[decodeURIComponent(m[1])];
      if (!s || !s.count) return;
      var body = a.querySelector(".product-card-body"); if (!body) return;
      var el = document.createElement("p"); el.className = "card-stars"; el.innerHTML = stars(s.avg) + ' <span class="cnt">(' + s.count + ")</span>";
      var price = body.querySelector(".product-price"); body.insertBefore(el, price || null);
    });
  }

  /* ---------- Warenkorb-Sync ---------- */
  var lastCart = null, syncTimer = null;
  function cartItems() { try { var a = JSON.parse(localStorage.getItem(CART) || "[]"); return Array.isArray(a) ? a : []; } catch (_) { return []; } }
  function syncCart(extra) {
    var items = cartItems().map(function (i) { return { id: i.id, colorId: i.colorId || null, size: i.size, qty: i.qty }; });
    return postJson("/cart/sync", Object.assign({ items: items }, extra || {})).catch(function () {});
  }
  function watchCart() {
    if (!loggedIn()) return;
    var cur = localStorage.getItem(CART) || "[]";
    if (cur !== lastCart) { var first = lastCart === null; lastCart = cur; clearTimeout(syncTimer); syncTimer = setTimeout(function () { syncCart(); }, first ? 1500 : 800); }
  }

  /* ---------- Checkout: Einwilligung + Wiederherstellen ---------- */
  function initCheckout() {
    var p = new URLSearchParams(location.search).get("warenkorb");
    if (p) getJson("/cart/restore?t=" + encodeURIComponent(p)).then(function (r) {
      if (r.j && r.j.ok && r.j.items && r.j.items.length) {
        var cur = cartItems(); if (!cur.length) { localStorage.setItem(CART, JSON.stringify(r.j.items.map(function (i) { var pr = typeof getProductById === "function" && getProductById(i.id); return { id: i.id, size: i.size, qty: i.qty, colorId: i.colorId, colorName: i.colorName, name: pr ? pr.name : i.id, price: pr ? (typeof variantPrice === "function" ? variantPrice(pr, i.colorId) : pr.price) : 0 }; }))); location.replace("checkout.html"); }
      }
    }, function () {});
    var tries = 0;
    (function waitEmail() {
      var em = document.getElementById("email");
      if (!em) { if (tries++ < 40) setTimeout(waitEmail, 250); return; }
      if (document.getElementById("cart-consent")) return;
      var wrap = em.closest(".form-group") || em.parentNode;
      var lab = document.createElement("label"); lab.className = "check-label cart-consent";
      lab.innerHTML = '<input type="checkbox" id="cart-consent" /> <span>Erinnert mich einmalig per E-Mail an meinen Warenkorb, falls ich nicht abschließe (jederzeit abbestellbar).</span>';
      wrap.parentNode.insertBefore(lab, wrap.nextSibling);
      var send = function () { var cb = document.getElementById("cart-consent"); if (em.value && /@/.test(em.value)) syncCart({ email: em.value, consent: !!cb.checked }); };
      em.addEventListener("change", send); lab.querySelector("input").addEventListener("change", send);
    })();
  }

  /* ---------- Größenberater (Werte wie groessenberater.html) ---------- */
  var SZ = ["XS", "S", "M", "L", "XL", "XXL"];
  var BANDS = { damen: [52, 60, 68, 78, 90], herren: [58, 68, 78, 89, 102] };
  var HR = { damen: { low: 158, high: 178 }, herren: { low: 168, high: 190 } };
  var SHOES = [[36, 22.8], [37, 23.5], [38, 24.1], [39, 24.8], [40, 25.5], [41, 26.1], [42, 26.8], [43, 27.5], [44, 28.1], [45, 28.8], [46, 29.5], [47, 30.2]];
  function recommend(p, h, w, fit, foot) {
    var sizes = (p.sizes && p.sizes.length ? p.sizes : (typeof SIZES !== "undefined" ? SIZES : SZ)).map(String);
    if (isBra(sizes)) {
      var ub = h, bust = w; var band = Math.round(ub / 5) * 5; var diff = bust - ub;
      var cup = diff < 14 ? "A" : diff < 16 ? "B" : diff < 18 ? "C" : "D";
      var want = band + cup, bands = sizes.map(function (s) { return parseInt(s, 10); });
      var nb = bands.reduce(function (a, b) { return Math.abs(b - band) < Math.abs(a - band) ? b : a; });
      var res = sizes.indexOf(nb + cup) >= 0 ? nb + cup : sizes.filter(function (s) { return parseInt(s, 10) === nb; }).pop();
      if (!res) return null;
      var str = { 70: "XS", 75: "S", 80: "M", 85: "L" }[parseInt(res, 10)] || "";
      return { size: res, why: "Unterbrust " + ub + " cm, Brust " + bust + " cm → " + want + (res !== want ? " · nächste verfügbare Größe" : "") + (str ? " · String " + str : "") };
    }
    if (p.type === "schuhe") {
      var i = SHOES.findIndex(function (s) { return foot <= s[1]; }); if (i < 0) i = SHOES.length - 1;
      var eu = SHOES[i][0] + (fit === "locker" ? 1 : 0);
      var avail = sizes.map(Number).filter(function (n) { return !isNaN(n); });
      if (!avail.length) return null;
      var best = avail.reduce(function (a, b) { return Math.abs(b - eu) < Math.abs(a - eu) ? b : a; });
      return { size: String(best), why: "Fußlänge " + String(foot).replace(".", ",") + " cm → EU " + SHOES[i][0] + (fit === "locker" ? " +1 (locker)" : "") + (String(best) !== String(eu) ? " · nächste verfügbare Größe" : "") };
    }
    var g = typeof productGender === "function" ? productGender(p) : "damen"; if (g === "unisex") g = p.category === "herren" ? "herren" : "damen";
    var b = BANDS[g], idx = 0; while (idx < b.length && w > b[idx]) idx++;
    var base = idx, steps = [];
    if (h >= HR[g].high) { idx++; steps.push("groß +1"); } else if (h <= HR[g].low) { idx--; steps.push("klein −1"); }
    if (fit === "eng") { idx--; steps.push("eng −1"); } if (fit === "locker") { idx++; steps.push("locker +1"); }
    idx = Math.max(0, Math.min(SZ.length - 1, idx));
    var want = SZ[idx], res = want;
    if (sizes.indexOf(want) < 0) {
      var cand = sizes.filter(function (s) { return SZ.indexOf(s) >= 0; });
      if (!cand.length) return null;
      res = cand.reduce(function (a, c) { return Math.abs(SZ.indexOf(c) - idx) < Math.abs(SZ.indexOf(a) - idx) ? c : a; });
    }
    return { size: res, why: (g === "herren" ? "Herren" : "Damen") + "-Tabelle: Gewicht " + w + " kg → " + SZ[base] + (steps.length ? " · " + steps.join(" · ") : "") + (res !== want ? " · nächste verfügbare Größe" : "") };
  }
  function isBra(sizes) { return sizes.length > 0 && sizes.every(function (s) { return /^\d{2}[A-H]$/.test(s); }); }
  function initAdvisor(p) {
    var hint = $("#size-hint"), pills = $("#size-pills");
    if (!hint || !pills || p.type === "gutschein" || p.sizeUnit || (p.sizes && p.sizes.length === 1)) return;
    var shoes = p.type === "schuhe", bra = isBra((p.sizes || []).map(String));
    var box = document.createElement("div"); box.className = "pdp-advisor"; box.id = "pdp-advisor";
    var saved = {}; try { saved = JSON.parse(localStorage.getItem("velora_fit_v1") || "{}"); } catch (_) {}
    box.innerHTML = '<button type="button" class="pdp-advisor-toggle" aria-expanded="false" aria-controls="pdp-advisor-form">📏 Größenberater – welche Größe passt mir?</button>' +
      '<form class="pdp-advisor-form" id="pdp-advisor-form" hidden novalidate>' +
      (bra ? '<label>Unterbrustweite (cm)<input type="number" min="60" max="100" name="ub" value="' + esc(saved.ub || "") + '" required></label><label>Brustumfang (cm)<input type="number" min="70" max="125" name="bust" value="' + esc(saved.bust || "") + '" required></label>'
        : shoes ? '<label>Fußlänge (cm)<input type="number" step="0.1" min="20" max="33" name="foot" value="' + esc(saved.foot || "") + '" required></label>'
        : '<label>Körpergröße (cm)<input type="number" min="140" max="215" name="h" value="' + esc(saved.h || "") + '" required></label><label>Gewicht (kg)<input type="number" min="35" max="180" name="w" value="' + esc(saved.w || "") + '" required></label>') +
      '<label>Passform<select name="fit"><option value="eng">eng anliegend</option><option value="normal" selected>normal</option><option value="locker">locker / oversized</option></select></label>' +
      '<button type="submit" class="btn btn-small">Größe berechnen</button><p class="pdp-advisor-out" role="status" aria-live="polite"></p></form>';
    hint.parentNode.insertBefore(box, hint.nextSibling);
    var form = box.querySelector("form"), tog = box.querySelector(".pdp-advisor-toggle"), out = box.querySelector(".pdp-advisor-out");
    if (saved.fit) form.fit.value = saved.fit;
    tog.addEventListener("click", function () { form.hidden = !form.hidden; tog.setAttribute("aria-expanded", String(!form.hidden)); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fit = form.fit.value, r;
      if (bra) { var ub = +form.ub.value, bu = +form.bust.value; if (!(ub >= 60 && ub <= 100) || !(bu > ub && bu <= 125)) { out.textContent = "Bitte Unterbrustweite (60–100 cm) und Brustumfang (größer als Unterbrust) eingeben."; return; } r = recommend(p, ub, bu, fit); saved.ub = ub; saved.bust = bu; }
      else if (shoes) { var f = parseFloat(String(form.foot.value).replace(",", ".")); if (!(f >= 20 && f <= 33)) { out.textContent = "Bitte Fußlänge zwischen 20 und 33 cm eingeben."; return; } r = recommend(p, 0, 0, fit, f); saved.foot = f; }
      else { var h = +form.h.value, w = +form.w.value; if (!(h >= 140 && h <= 215) || !(w >= 35 && w <= 180)) { out.textContent = "Bitte Körpergröße (140–215 cm) und Gewicht (35–180 kg) eingeben."; return; } r = recommend(p, h, w, fit); saved.h = h; saved.w = w; }
      saved.fit = fit; try { localStorage.setItem("velora_fit_v1", JSON.stringify(saved)); } catch (_) {}
      if (!r) { out.textContent = "Für diesen Artikel gibt es keine Empfehlung."; return; }
      document.querySelectorAll(".size-pill").forEach(function (b) { b.classList.toggle("is-recommended", b.dataset.size === r.size); });
      var pill = document.querySelector('.size-pill[data-size="' + r.size + '"]');
      out.innerHTML = 'Empfehlung: <strong class="rec-size">' + esc(r.size) + "</strong> <small>(" + esc(r.why) + ")</small>";
      if (pill && !pill.classList.contains("is-soldout")) pill.click();
      else if (pill) out.innerHTML += '<br><small>Diese Größe ist gerade ausverkauft – lassen Sie sich benachrichtigen.</small>', pill.click();
    });
  }

  /* ---------- Benachrichtige mich ---------- */
  function initNotify(p) {
    var note = $("#stock-note"); if (!note) return;
    var box = document.createElement("form"); box.className = "notify-box"; box.id = "notify-box"; box.hidden = true; box.noValidate = true;
    box.innerHTML = '<p class="notify-title">Diese Größe ist ausverkauft. <strong>Benachrichtige mich</strong>, sobald sie wieder da ist:</p><div class="notify-row"><input type="email" name="email" placeholder="Ihre E-Mail-Adresse" autocomplete="email" required aria-label="E-Mail für Benachrichtigung"><input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" aria-hidden="true"><button type="submit" class="btn btn-small">Benachrichtigen</button></div><p class="notify-msg" role="status" aria-live="polite"></p>';
    note.parentNode.insertBefore(box, note.nextSibling);
    function sel() { var s = $(".size-pill.is-active"), c = $(".color-swatch.is-active"); return { size: s ? s.dataset.size : null, colorId: c ? c.dataset.colorId : (p.colors && p.colors[0] ? p.colors[0].id : null) }; }
    function refresh() {
      var s = sel(); var l = window.VeloraStock ? VeloraStock.left(p.id, s.colorId, s.size) : null;
      var show = l === 0; if (box.hidden === show) { box.hidden = !show; box.querySelector(".notify-msg").textContent = ""; }
    }
    document.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".size-pill, .color-swatch, .pdp-thumb")) setTimeout(refresh, 0); });
    if (window.VeloraStock) VeloraStock.onReady(refresh);
    if (window.VeloraAuth && loggedIn()) VeloraAuth.me && Promise.resolve(VeloraAuth.me()).then(function (m) { var u = m && (m.user || m); if (u && u.email && !box.email.value) box.email.value = u.email; }, function () {});
    box.addEventListener("submit", function (e) {
      e.preventDefault(); var s = sel(), msg = box.querySelector(".notify-msg");
      postJson("/stock/notify", { id: p.id, colorId: s.colorId, size: s.size, email: box.email.value, website: box.website.value }).then(function (r) {
        msg.textContent = (r.j && (r.j.message || r.j.error)) || "Fehler"; msg.className = "notify-msg " + (r.j && r.j.ok ? "is-ok" : "is-err");
      }, function () { msg.textContent = "Server nicht erreichbar."; msg.className = "notify-msg is-err"; });
    });
  }

  /* ---------- Bewertungen ---------- */
  function initReviews(p, host) {
    var sec = document.createElement("section"); sec.className = "pdp-extra pdp-reviews glass-panel"; sec.id = "bewertungen";
    sec.innerHTML = '<p class="eyebrow">Kundenstimmen</p><h2>Bewertungen</h2><div class="rv-summary">Bewertungen werden geladen…</div><div class="rv-form-host"></div><div class="rv-list"></div>';
    host.appendChild(sec);
    getJson("/reviews?product=" + encodeURIComponent(p.id)).then(function (r) {
      var j = r.j || {}; var sumEl = sec.querySelector(".rv-summary");
      if (!j.ok) { sumEl.textContent = ""; return; }
      if (!j.count) sumEl.innerHTML = '<p class="rv-empty">Noch keine Bewertungen – seien Sie die Erste / der Erste.</p>';
      else {
        var bars = j.distribution.map(function (n, i) { return { s: i + 1, n: n }; }).reverse().map(function (x) { return '<div class="rv-bar"><span>' + x.s + ' ★</span><i><b style="width:' + Math.round((x.n / j.count) * 100) + '%"></b></i><span>' + x.n + "</span></div>"; }).join("");
        sumEl.innerHTML = '<div class="rv-avg"><strong>' + String(j.avg).replace(".", ",") + "</strong>" + stars(j.avg, "big") + "<span>" + j.count + (j.count === 1 ? " Bewertung" : " Bewertungen") + '</span></div><div class="rv-bars">' + bars + "</div>";
        var head = document.querySelector(".pdp-info h1"); if (head && !document.querySelector(".pdp-rating")) { var a = document.createElement("a"); a.className = "pdp-rating"; a.href = "#bewertungen"; a.innerHTML = stars(j.avg) + " " + String(j.avg).replace(".", ",") + " (" + j.count + ")"; head.parentNode.insertBefore(a, head.nextSibling); }
      }
      sec.querySelector(".rv-list").innerHTML = j.reviews.map(function (v) {
        var media = (v.media || []).map(function (m) { return m.kind === "video" ? '<video class="rv-video" src="' + esc(m.url) + '" controls playsinline preload="metadata" muted></video>' : '<a href="' + esc(m.url) + '" target="_blank" rel="noopener"><img class="rv-photo" src="' + esc(m.url) + '" alt="Kundenfoto" loading="lazy"></a>'; }).join("");
        return '<article class="rv-item">' + stars(v.rating) + (v.title ? "<h3>" + esc(v.title) + "</h3>" : "") + "<p>" + esc(v.text).replace(/\n/g, "<br>") + "</p>" + (media ? '<div class="rv-media">' + media + "</div>" : "") + '<p class="rv-meta">' + esc(v.author) + " · " + new Date(v.createdAt).toLocaleDateString("de-AT") + (v.verified ? ' · <span class="rv-verified">✓ Verifizierter Kauf</span>' : "") + "</p></article>";
      }).join("");
    }, function () { sec.querySelector(".rv-summary").textContent = "Bewertungen sind gerade nicht verfügbar."; });
    getJson("/reviews/eligible?product=" + encodeURIComponent(p.id)).then(function (r) {
      var e = r.j || {}, host2 = sec.querySelector(".rv-form-host");
      if (!e.ok) return;
      if (!e.loggedIn) { host2.innerHTML = '<p class="rv-hint"><a href="login.html">Melden Sie sich an</a>, um einen gekauften Artikel zu bewerten.</p>'; return; }
      if (e.already) { host2.innerHTML = '<p class="rv-hint">' + (e.already === "pending" ? "Danke! Ihre Bewertung wird gerade geprüft." : "Sie haben diesen Artikel bereits bewertet.") + "</p>"; return; }
      if (!e.canReview) { host2.innerHTML = '<p class="rv-hint">Bewerten können Kund:innen, die diesen Artikel gekauft haben.</p>'; return; }
      reviewForm(p, host2, e.limits);
    }, function () {});
  }
  function videoDuration(file) {
    return new Promise(function (res) { var v = document.createElement("video"); v.preload = "metadata"; var u = URL.createObjectURL(file); v.onloadedmetadata = function () { var d = v.duration; URL.revokeObjectURL(u); res(isFinite(d) ? d : null); }; v.onerror = function () { URL.revokeObjectURL(u); res(null); }; v.src = u; });
  }
  function reviewForm(p, host, L) {
    host.innerHTML = '<button type="button" class="btn btn-outline rv-open">Bewertung schreiben</button><form class="rv-form" hidden novalidate>' +
      '<fieldset class="rv-stars-input"><legend>Ihre Bewertung</legend>' + [5, 4, 3, 2, 1].map(function (n) { return '<input type="radio" name="rating" id="rv-r' + n + '" value="' + n + '"><label for="rv-r' + n + '" title="' + n + ' Sterne">★</label>'; }).join("") + "</fieldset>" +
      '<label>Titel (optional)<input name="title" maxlength="120"></label><label>Ihre Erfahrung<textarea name="text" rows="4" maxlength="2000" required placeholder="Passform, Material, Qualität …"></textarea></label>' +
      '<label>Fotos (max. ' + L.images + ", je " + L.imageMB + ' MB)<input type="file" name="photos" accept="image/jpeg,image/png,image/webp" multiple></label>' +
      '<label>Video (max. 1, ' + L.videoSeconds + " s, " + L.videoMB + ' MB)<input type="file" name="video" accept="video/mp4,video/webm,video/quicktime"></label>' +
      '<div class="rv-previews"></div><button type="submit" class="btn">Bewertung senden</button><p class="rv-msg" role="status" aria-live="polite"></p></form>';
    var f = host.querySelector("form"), msg = f.querySelector(".rv-msg"), prev = f.querySelector(".rv-previews");
    host.querySelector(".rv-open").addEventListener("click", function () { f.hidden = false; this.style.display = "none"; });
    function err(t) { msg.textContent = t; msg.className = "rv-msg is-err"; }
    function preview() {
      prev.innerHTML = "";
      Array.prototype.slice.call(f.photos.files, 0, L.images).forEach(function (x) { var i = document.createElement("img"); i.src = URL.createObjectURL(x); prev.appendChild(i); });
      if (f.video.files[0]) { var v = document.createElement("video"); v.src = URL.createObjectURL(f.video.files[0]); v.muted = true; v.controls = true; prev.appendChild(v); }
    }
    f.photos.addEventListener("change", preview); f.video.addEventListener("change", preview);
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var rating = (f.querySelector("input[name=rating]:checked") || {}).value, text = f.text.value.trim();
      var photos = Array.prototype.slice.call(f.photos.files), vid = f.video.files[0];
      if (!rating) return err("Bitte 1 bis 5 Sterne wählen.");
      if (text.length < 10) return err("Bitte mindestens 10 Zeichen schreiben.");
      if (photos.length > L.images) return err("Maximal " + L.images + " Fotos.");
      if (photos.some(function (x) { return !/^image\/(jpeg|png|webp)$/.test(x.type); })) return err("Nur JPG, PNG oder WebP.");
      if (photos.some(function (x) { return x.size > L.imageMB * 1048576; })) return err("Ein Foto ist größer als " + L.imageMB + " MB.");
      if (vid && !/^video\/(mp4|webm|quicktime)$/.test(vid.type)) return err("Video nur als MP4, WebM oder MOV.");
      if (vid && vid.size > L.videoMB * 1048576) return err("Das Video ist größer als " + L.videoMB + " MB.");
      var btn = f.querySelector("button[type=submit]"); btn.disabled = true; msg.className = "rv-msg"; msg.textContent = "Wird hochgeladen…";
      (vid ? videoDuration(vid) : Promise.resolve(0)).then(function (d) {
        if (d && d > L.videoSeconds + 0.5) throw { msg: "Das Video ist " + Math.round(d) + " s lang (max. " + L.videoSeconds + " s)." };
        var files = photos.concat(vid ? [vid] : []), ids = [];
        return files.reduce(function (pr, file, n) {
          return pr.then(function () {
            msg.textContent = "Lade hoch " + (n + 1) + "/" + files.length + "…";
            return fetch(BASE + "/reviews/media", { method: "POST", credentials: "same-origin", headers: { "Content-Type": file.type }, body: file }).then(function (r) { return r.json(); }).then(function (j) { if (!j.ok) throw { msg: j.error }; ids.push(j.media.id); });
          });
        }, Promise.resolve()).then(function () { return postJson("/reviews", { productId: p.id, rating: +rating, title: f.elements.title.value, text: text, media: ids }); });
      }).then(function (r) {
        if (!r.j.ok) throw { msg: r.j.error };
        host.innerHTML = '<p class="rv-hint is-ok">' + esc(r.j.message) + "</p>";
      }).catch(function (x) { btn.disabled = false; err((x && x.msg) || "Upload fehlgeschlagen."); });
    });
  }

  /* ---------- Komplettiere den Look ---------- */
  function lookItems(p) {
    return fetch("lookbook.html", { cache: "force-cache" }).then(function (r) { return r.text(); }).then(function (html) {
      var looks = []; var re = /items:\s*\[([^\]]+)\]/g, m;
      while ((m = re.exec(html))) { var its = []; var r2 = /id:\s*"([a-z0-9-]+)",\s*color:\s*"([a-z0-9-]+)"/g, x; while ((x = r2.exec(m[1]))) its.push({ id: x[1], color: x[2] }); looks.push(its); }
      var out = [], seen = {}; seen[p.id] = 1;
      looks.filter(function (l) { return l.some(function (i) { return i.id === p.id; }); }).forEach(function (l) { l.forEach(function (i) { if (!seen[i.id]) { seen[i.id] = 1; out.push(i); } }); });
      return out;
    }).catch(function () { return []; });
  }
  function goldMatches(p, have) {
    var seen = {}; seen[p.id] = 1; have.forEach(function (i) { seen[i.id] = 1; });
    var g = productGender(p), tab = productTab(p), out = [];
    (p.matches || []).forEach(function (id) { if (!seen[id] && getProductById(id)) { seen[id] = 1; out.push({ id: id }); } });
    var pool = VELORA_PRODUCTS.filter(function (q) { return !seen[q.id] && q.type !== "gutschein" && (q.image || (q.colors && q.colors[0] && q.colors[0].image)) && productTab(q) !== tab && (productGender(q) === g || productGender(q) === "unisex") && (q.accent === "#c5a059" || /gold/i.test((q.name || "") + " " + (q.description || ""))); });
    var h = 0; for (var i = 0; i < p.id.length; i++) h = (h * 31 + p.id.charCodeAt(i)) >>> 0;
    var tabs = {};
    for (var k = 0; k < pool.length && out.length < 4; k++) { var q = pool[(h + k * 7) % pool.length]; var t = productTab(q); if (tabs[t] || seen[q.id]) continue; tabs[t] = 1; seen[q.id] = 1; out.push({ id: q.id }); }
    return out;
  }
  function cardsFor(list) {
    return list.map(function (i, n) { var q = getProductById(i.id); if (!q) return ""; var html = productCardHtml(q, n); if (i.color) html = html.replace(/href="product\.html\?id=([^"&]+)/, 'href="product.html?id=$1&farbe=' + encodeURIComponent(i.color)); return html; }).join("");
  }
  function initLook(p, host) {
    lookItems(p).then(function (lk) {
      var list = lk.slice(0, 4), from = lk.length ? "look" : "gold";
      if (list.length < 4) list = list.concat(goldMatches(p, list).slice(0, 4 - list.length));
      if (!list.length) return;
      var sec = document.createElement("section"); sec.className = "pdp-extra pdp-look"; sec.id = "komplettiere-look";
      sec.innerHTML = '<p class="eyebrow">' + (from === "look" ? "Aus dem Lookbook" : "Gold-Akzente, die passen") + "</p><h2>Komplettiere den Look</h2><div class=\"product-grid pdp-extra-grid\">" + cardsFor(list) + "</div>";
      var rv = document.getElementById("bewertungen"); host.insertBefore(sec, rv || null);
      sec.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("is-visible"); });
      decorateCards();
    });
  }

  /* ---------- Zuletzt angesehen ---------- */
  function recent() { try { var a = JSON.parse(localStorage.getItem(RECENT) || "[]"); return Array.isArray(a) ? a.filter(function (x) { return x && typeof x.id === "string"; }) : []; } catch (_) { return []; } }
  function initRecent(p, host) {
    var list = recent().filter(function (x) { return x.id !== p.id && getProductById(x.id); }).slice(0, 6);
    try { localStorage.setItem(RECENT, JSON.stringify([{ id: p.id, at: Date.now() }].concat(recent().filter(function (x) { return x.id !== p.id; })).slice(0, 12))); } catch (_) {}
    if (!list.length) return;
    var sec = document.createElement("section"); sec.className = "pdp-extra pdp-recent"; sec.id = "zuletzt-angesehen";
    sec.innerHTML = '<div class="pdp-extra-head"><div><p class="eyebrow">Ihr Verlauf</p><h2>Zuletzt angesehen</h2></div><button type="button" class="link-btn rv-clear">Verlauf löschen</button></div><div class="product-grid pdp-extra-grid">' + cardsFor(list) + "</div>";
    host.appendChild(sec);
    sec.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("is-visible"); });
    sec.querySelector(".rv-clear").addEventListener("click", function () { try { localStorage.setItem(RECENT, JSON.stringify([{ id: p.id, at: Date.now() }])); } catch (_) {} sec.remove(); });
    decorateCards();
  }

  function initPdp() {
    var root = document.getElementById("pdp-root"); if (!root) return;
    var tries = 0;
    (function wait() {
      if (!document.getElementById("size-pills") && !root.querySelector(".pdp-info")) { if (tries++ < 80) setTimeout(wait, 100); return; }
      var id = new URLSearchParams(location.search).get("id"), p = id && typeof getProductById === "function" ? getProductById(id) : null;
      if (!p) return;
      initAdvisor(p); initNotify(p);
      var host = document.createElement("div"); host.className = "pdp-extras"; host.id = "pdp-extras"; root.parentNode.insertBefore(host, root.nextSibling);
      initReviews(p, host); initLook(p, host); initRecent(p, host);
    })();
  }

  function init() {
    loadSummary().then(decorateCards);
    if ("MutationObserver" in window) { var pend = false; new MutationObserver(function () { if (pend) return; pend = true; requestAnimationFrame(function () { pend = false; decorateCards(); }); }).observe(document.body, { childList: true, subtree: true }); }
    initPdp();
    if (/checkout\.html$/.test(location.pathname)) initCheckout();
    watchCart(); setInterval(watchCart, 2500);
    window.addEventListener("storage", function (e) { if (e.key === CART) watchCart(); });
  }
  window.VeloraFeatures = { recommend: recommend, stars: stars };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
