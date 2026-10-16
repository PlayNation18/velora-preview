/* VELORA – Zahlungsschicht (konfigurierbar).
 * Modus "demo" (Standard): keine Zahlung, keine Datenübertragung – es wird nur lokal bestätigt.
 * Modus "stripe": sendet NUR Artikel-IDs, Variante, Größe und Menge an dein Backend; das Backend prüft die Preise
 * serverseitig anhand von products.js und liefert die URL der Stripe-Checkout-Seite zurück.
 * Dieser Code enthält keine Schlüssel. Konfiguration: js/config.js (Vorlage: js/config.example.js). */
(function () {
  const DEFAULTS = {
    PAYMENT_MODE: "demo",
    STRIPE_PUBLISHABLE_KEY: "",
    BACKEND_URL: "",
    SUCCESS_URL: "checkout.html?bezahlt=1",
    CANCEL_URL: "checkout.html?abgebrochen=1"
  };
  const cfg = Object.assign({}, DEFAULTS, window.VELORA_CONFIG || {});

  function mode() {
    return cfg.PAYMENT_MODE === "stripe" && cfg.BACKEND_URL ? "stripe" : "demo";
  }

  function isPlaceholderKey(k) {
    return !k || /HIER_DEIN|PLATZHALTER|xxxx/i.test(k);
  }

  /** Warenkorb → schlanke Positionsliste (ohne Preise – die kommen nie vom Browser). */
  function cartPayload() {
    return loadCart().map((i) => ({ id: i.id, colorId: i.colorId || null, size: i.size, qty: i.qty }));
  }

  function absolute(rel) {
    return new URL(rel, window.location.href).toString();
  }

  /**
   * Startet die Bezahlung.
   * @param {{versand:string, land:string, email:string}} opts
   * @returns {Promise<{mode:"demo"}|{mode:"stripe",redirected:true}>}
   */
  async function startPayment(opts) {
    if (mode() === "demo") return { mode: "demo" };
    if (isPlaceholderKey(cfg.STRIPE_PUBLISHABLE_KEY)) {
      throw new Error("STRIPE_PUBLISHABLE_KEY ist noch ein Platzhalter (js/config.js).");
    }
    const res = await fetch(cfg.BACKEND_URL.replace(/\/$/, "") + "/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartPayload(),
        versand: opts && opts.versand === "express" ? "express" : "standard",
        land: (opts && opts.land) || "AT",
        email: (opts && opts.email) || undefined,
        successUrl: absolute(cfg.SUCCESS_URL),
        cancelUrl: absolute(cfg.CANCEL_URL)
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) throw new Error(data.error || "Backend hat keine Checkout-Adresse geliefert (HTTP " + res.status + ").");
    window.location.href = data.url;
    return { mode: "stripe", redirected: true };
  }

  window.VeloraPayments = { mode, config: cfg, cartPayload, startPayment };
})();
