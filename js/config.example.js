/* VELORA – Konfiguration der Zahlungsschicht (BEISPIEL).
 *
 * So benutzt du sie:
 *   1. Diese Datei kopieren nach  js/config.js   (config.js NICHT ins Repository/ZIP legen)
 *   2. Werte unten anpassen.
 *   3. In checkout.html VOR payments.js einbinden:  <script src="js/config.js"></script>
 *
 * WICHTIG: Hier gehört NIEMALS ein geheimer Schlüssel (sk_…) hinein –
 * nur der öffentliche Schlüssel (pk_…). Der geheime Schlüssel liegt ausschließlich im Backend (.env).
 */
window.VELORA_CONFIG = {
  /* Basis-Adresse der Konto-API (Anmelden/Registrieren/Passwort vergessen). "/api" = gleiche Adresse wie der Shop
     (backend/server.js liefert Shop + API auf einem Port aus). Bei getrenntem Backend z. B. "https://api.deine-domain.at/api"
     (dann Cookies/CORS selbst konfigurieren – siehe ACCOUNT-ANLEITUNG.md). */
  API_BASE: "/api",

  /* "demo"   = lokale Fake-Bestellung, keine Zahlung (Standard, funktioniert ohne Backend)
     "stripe" = Weiterleitung zu Stripe Checkout über dein Backend (backend/stripe-server.js) */
  PAYMENT_MODE: "demo",

  /* Öffentlicher Stripe-Schlüssel (Testmodus beginnt mit pk_test_…). Platzhalter – nichts Echtes eintragen, solange du nicht testest. */
  STRIPE_PUBLISHABLE_KEY: "pk_test_HIER_DEIN_OEFFENTLICHER_TESTSCHLUESSEL",

  /* Adresse deines Backends, z. B. http://localhost:4242 (lokal) oder https://api.deine-domain.at */
  BACKEND_URL: "http://localhost:4242",

  /* Rückkehr-Seiten nach der Zahlung (relativ zur Shop-Adresse) */
  SUCCESS_URL: "checkout.html?bezahlt=1",
  CANCEL_URL: "checkout.html?abgebrochen=1"
};
