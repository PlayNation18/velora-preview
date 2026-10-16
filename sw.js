const CACHE = 'velora-v26';
const PRECACHE = ['./index.html', './shop.html', './product.html', './checkout.html', './groessenberater.html', './lookbook.html', './login.html', './register.html', './passwort-vergessen.html', './passwort-zuruecksetzen.html', './konto.html', './kontakt.html', './impressum.html', './datenschutz.html', './agb.html', './widerruf.html', './versand.html', './retouren.html', './groessentabelle.html', './newsletter.html', './css/styles.css?v=herbst22', './js/app.js?v=herbst22', './js/cart.js?v=herbst22', './js/products.js?v=herbst22', './js/payments.js?v=herbst22', './js/config.js?v=herbst22', './js/auth.js?v=herbst22', './js/stock.js?v=herbst22', './js/site.js?v=herbst22', './js/forms.js?v=herbst22', './js/orders.js?v=herbst22', './js/favorites.js?v=herbst22', './js/konto.js?v=herbst22', './img/neu/gutschein/gutschein-25.jpg?v=herbst22', './img/neu/damen/d88-schwarz.jpg?v=herbst22', './img/neu/lookbook/l01-look-sport.jpg?v=herbst22', './img/neu/lookbook/l04-look-herr-schwarz.jpg?v=herbst22', './icons/icon-192.png', './offline.html', './manifest.json', './img/neu/damen/d14-dunkelcamel.jpg?v=herbst22', './img/neu/herren/h13-anthrazit.jpg?v=herbst22', './img/neu/damen/d01-cream.jpg?v=herbst22', './img/neu/herren/h24-dunkelblau.jpg?v=herbst22', './img/neu/damen/d09-champagner.jpg?v=herbst22', './img/neu/herren/h27-schwarz.jpg?v=herbst22', './img/neu/damen/d20-schwarz.jpg?v=herbst22', './img/neu/herren/h40-beige.jpg?v=herbst22', './img/jackets/parka-schwarz.jpg?v=herbst22', './img/bags/shopper-schwarz.jpg?v=herbst22', './img/pants/hose-damen-schmal-schwarz.jpg?v=herbst22', './img/vests/weste-herren-schwarz.jpg?v=herbst22', './img/belts/guertel-schwarz.jpg?v=herbst22', './img/pants/cargo-schwarz.jpg?v=herbst22', './img/bags/weekender-schwarz.jpg?v=herbst22', './img/neu/damen/d45-dunkelbraun.jpg?v=herbst22', './img/neu/damen/d42-dunkelbraun.jpg?v=herbst22', './img/neu/damen/d48-schwarz.jpg?v=herbst22', './img/neu/damen/d61-schwarz.jpg?v=herbst22', './img/neu/damen/d65-alle.jpg?v=herbst22', './img/neu/herren/h41-alle.jpg?v=herbst22', './img/neu/damen/d69-smaragd.jpg?v=herbst22', './img/neu/damen/d76-violett.jpg?v=herbst22', './img/neu/damen/d80-schwarz.jpg?v=herbst22', './img/neu/damen/d81-schwarz.jpg?v=herbst22', './img/neu/damen/d84-schwarz.jpg?v=herbst22', './img/neu/herren/h44-schwarz.jpg?v=herbst22', './img/neu/damen/d99-gold.jpg?v=herbst22', './img/neu/damen/d92-schwarz.jpg?v=herbst22', './img/neu/herren/h49-schwarz.jpg?v=herbst22'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (url.searchParams.has('token')) return; // Reset-Links nie im Cache ablegen
  if (url.pathname.startsWith('/api/')) return; // API (Konto, Bestellungen, Bestand, Admin) nie cachen
  if (url.pathname.endsWith('/admin.html') || url.pathname.endsWith('/admin')) return; // Admin-Bereich nie cachen
  if (url.pathname.endsWith('/backend') || url.pathname.includes('/backend/')) return;
  if (url.pathname.endsWith('.mp4')) return; // Videos direkt vom Netz (Range-Requests)
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res.ok) { const c = res.clone(); caches.open(CACHE).then(cc => cc.put(e.request, c)); }
      return res;
    }).catch(() => e.request.mode === 'navigate' ? caches.match('./offline.html') : undefined))
  );
});
