/* VELORA – aktive Konfiguration der Zahlungsschicht. Standard: Demo-Modus (keine echten Zahlungen, keine Schlüssel).
 * Vorlage mit Erklärungen: js/config.example.js. Hier niemals einen geheimen Schlüssel (sk_…) eintragen. */
window.VELORA_CONFIG = {
  API_BASE: "/api", // Konto-API (siehe js/auth.js, backend/server.js)
  PAYMENT_MODE: "demo",
  STRIPE_PUBLISHABLE_KEY: "pk_test_HIER_DEIN_OEFFENTLICHER_TESTSCHLUESSEL",
  BACKEND_URL: "http://localhost:4242",
  SUCCESS_URL: "checkout.html?bezahlt=1",
  CANCEL_URL: "checkout.html?abgebrochen=1"
};
