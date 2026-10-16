/* VELORA — Demo-Produktkatalog (Beispielprodukte, keine echten Angebote)
   Interleaved: dress + polo + dress + polo so shop first row mixes genders. */

const VELORA_PRODUCTS = [
  /* Bodysuit + Row 1: dress · polo · dress · polo */
  {
    id: "v-d-body",
    name: "Noir Bodysuit",
    category: "damen",
    gender: "damen",
    type: "body",
    price: 189,
    color: "#0a0a0a",
    accent: "#c5a059",
    image: "img/bodysuit-noir.png",
    description:
      "Figurformender Body in tiefem Noir: strukturierte Cups, schmale Träger, hoher Beinausschnitt, Power-Mesh-Stretch. VELORA Atelier-Schnitt 1:1 mit 1 cm Nahtzugabe — Muster, noch nicht in Produktion.",
    fabric: "78 % Polyamid · 22 % Elasthan · 220 g/m² Power-Mesh + Cups",
    fit: "Figurformend, Cups vorgeformt",
    madeIn: "Muster / Schnitt 1:1 · Nahtzugabe 1 cm · noch nicht in Produktion",
    featured: true,
    tags: ["body", "bodysuit", "damen"],
    patterns: [
      { src: "img/patterns/bodysuit/front-labeled.jpg", label: "Front · Punkte" },
      { src: "img/patterns/bodysuit/pieces-exploded.jpg", label: "Teile explodiert" },
      { src: "img/patterns/bodysuit/pieces-layout.jpg", label: "Teile-Layout" },
      { src: "img/patterns/bodysuit/pieces-grid.jpg", label: "Einzelteile" }
    ]
  },

  {
    id: "v-d-sommeil",
    name: "Sommeil Onesie",
    category: "damen",
    gender: "damen",
    type: "onesie",
    price: 168,
    color: "#111111",
    accent: "#c5a059",
    image: "img/onesies/sommeil-noir.png",
    description:
      "Rippstrick-Onesie fürs Haus: schmal, langärmlig, Goldreißverschluss, Goldkante an Bündchen. VELORA Eigenmarke — Sleep, nicht Costume.",
    fabric: "Feiner Rippstrick · Goldzip · Goldkante",
    fit: "Slim, lang",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["onesie", "sleep", "damen", "eigenmarke"],
    colors: [
      { id: "noir", name: "Schwarz", hex: "#111", image: "img/onesies/sommeil-noir.png" },
      { id: "ivoire", name: "Weiß", hex: "#f3efe6", image: "img/onesies/sommeil-ivoire.png" },
      { id: "burgund", name: "Burgunder", hex: "#6b1c2a", image: "img/onesies/sommeil-burgund.png" },
      { id: "champagne", name: "Champagne", hex: "#c4b392", image: "img/onesies/sommeil-champagne.png" }
    ]
  },

  /* Own-brand drop: Ripp Polo + Mesh / Sol / Plage (gold accents) */
  {
    id: "v-po-ripp",
    name: "Ripp Polo",
    category: "herren",
    gender: "herren",
    type: "polo",
    price: 145,
    color: "#111111",
    accent: "#c5a059",
    image: "img/polos/ripp-noir.png?v=worn1",
    description:
      "Feiner Rippstrick-Polo mit offenem Kragen ohne Knöpfe und Goldkante. VELORA Eigenmarke — klar, urban, mit Signature-Goldakzent.",
    fabric: "Feiner Rippstrick · offener Kragen ohne Knöpfe · Goldkante",
    fit: "Slim-Regular",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["polo", "ripp", "herren", "herbst", "eigenmarke"],
    patterns: [
      { src: "img/patterns/polos/ripp-pieces.png", label: "Schnittteile · NZ 1 cm" }
    ],
    colors: [
      { id: "noir", name: "Schwarz", hex: "#111", image: "img/polos/ripp-noir.png?v=worn1" },
      { id: "ivoire", name: "Weiß", hex: "#f3efe6", image: "img/polos/ripp-ivoire.png?v=worn1" },
      { id: "navy", name: "Blau", hex: "#1a2a5a", image: "img/polos/ripp-navy.png?v=worn1" },
      { id: "burgund", name: "Burgunder", hex: "#6b1c2a", image: "img/polos/ripp-burgund.png?v=worn1" },
      { id: "charcoal", name: "Dunkelgrau", hex: "#3a3a3a", image: "img/polos/ripp-charcoal.png?v=worn1" },
      { id: "ciel", name: "Hellblau", hex: "#b8d4e8", image: "img/polos/ripp-ciel.png?v=worn1" }
    ]
  },
  {
    id: "v-d-mesh",
    name: "Mesh Bandeau",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 198,
    color: "#111111",
    accent: "#c5a059",
    image: "img/dresses/mesh-noir.jpg?v=herbst22",
    description:
      "Trägerloses Bandeau-Kleid mit Gold-Rand am Top, Mesh-Midriff und schrägem Goldteil. Bodenlang, Säulenschnitt: körpernah, schmal und ruhig — Gold nur dort, wo es Akzent sein darf. In Schwarz, Weiß, Burgunder und Dunkelblau. VELORA Eigenmarke / Muster.",
    fabric: "Feinstrick · Mesh-Midriff · Gold-Rand am Top · schräges Goldteil",
    fit: "Bodycon Maxi / Column · bodenlang, trägerlos",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "mesh", "bandeau", "damen", "eigenmarke"],
    patterns: [
      { src: "img/patterns/dresses/mesh-bandeau-pieces.png", label: "Schnittteile · NZ 1 cm" }
    ],
    colors: [
      { id: "noir", name: "Schwarz", hex: "#111", image: "img/dresses/mesh-noir.jpg?v=herbst22" },
      { id: "ivoire", name: "Weiß", hex: "#f3efe6", image: "img/dresses/mesh-ivoire.jpg?v=herbst22" },
      { id: "burgund", name: "Burgunder", hex: "#6d1a2b", image: "img/dresses/mesh-burgund.jpg?v=herbst22" },
      { id: "navy", name: "Dunkelblau", hex: "#1a2a5a", image: "img/dresses/mesh-navy.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-d-sol",
    name: "Sol Cowl",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 189,
    color: "#f0e4a8",
    accent: "#c5a059",
    image: "img/dresses/sol-butter.png",
    description:
      "Cowl-Kleid mit gebürstetem Goldring an der Taille. Fließender Fall, Signature-Gold — VELORA Eigenmarke / Muster.",
    fabric: "Satin / Soft Knit · Goldring",
    fit: "Figurbetonend, Cowl",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "cowl", "sol", "damen", "eigenmarke", "gold"],
    patterns: [
      { src: "img/patterns/dresses/sol-cowl-pieces.png", label: "Schnittteile · Bias · NZ 1 cm" }
    ],
    colors: [
      { id: "butter", name: "Hellgelb", hex: "#f0e4a8", image: "img/dresses/sol-butter.png" },
      { id: "ivoire", name: "Weiß", hex: "#f3efe6", image: "img/dresses/sol-ivoire.png" },
      { id: "noir", name: "Schwarz", hex: "#111", image: "img/dresses/sol-noir.png" },
      { id: "wine", name: "Dunkelrot", hex: "#6b1c2a", image: "img/dresses/sol-wine.png" },
      { id: "bleu", name: "Blau", hex: "#2a4a7c", image: "img/dresses/sol-bleu.png" },
      { id: "gold", name: "Gold", hex: "#c5a059", image: "img/dresses/sol-gold.png" }
    ]
  },
  {
    id: "v-d-plage",
    name: "Plage Wickel",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 219,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/dresses/plage-ivoire.png",
    description:
      "Wickelkleid mit Goldschließe. Resort-to-City, klarer Schnitt — VELORA Eigenmarke / Muster.",
    fabric: "Leichtes Gewebe · Goldschließe (Clasp)",
    fit: "Wickel, figurbetonend",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "wickel", "plage", "damen", "eigenmarke"],
    patterns: [
      { src: "img/patterns/dresses/plage-wickel-pieces.png", label: "Schnittteile · NZ 1 cm" }
    ],
    colors: [
      { id: "ivoire", name: "Weiß", hex: "#f3efe6", image: "img/dresses/plage-ivoire.png" },
      { id: "rot", name: "Rot", hex: "#9b1c2e", image: "img/dresses/plage-rot.png" },
      { id: "noir", name: "Schwarz", hex: "#111", image: "img/dresses/plage-noir.png" }
    ]
  },

  /* Satin atelier dresses (VELORA Redesign / Muster) */
  {
    id: "v-d-ivo",
    name: "Ivoire Anneau",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 229,
    color: "#f0ebe3",
    accent: "#c5a059",
    image: "img/dresses/ivoire-anneau.png",
    description:
      "Ivory-Satin Halter, Drapé, Twist mit gebürstetem Goldring an der Taille. Midi, Bias. VELORA Redesign / Muster.",
    fabric: "Ivory Satin · Silk-Touch Viscose · Bias",
    fit: "Figurbetonend, Midi",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "satin", "halter", "ivoire", "anneau", "damen"],
    patterns: [
      { src: "img/patterns/dresses/ivoire-anneau-flat.png", label: "Flat Ivoire Anneau" },
      { src: "img/patterns/dresses/ivoire-anneau-pieces.png", label: "Schnittteile · Bias · NZ 1 cm" }
    ]
  },
  {
    id: "v-d-rou",
    name: "Rouge Cowl",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 169,
    color: "#8b1a1a",
    accent: "#c5a059",
    image: "img/dresses/rouge-cowl.png",
    description:
      "Rouge-Satin Mini, weicher Cowl, dünne Träger mit Goldsteg. Bias, clean. VELORA Redesign / Muster.",
    fabric: "Rouge Satin · Silk-Touch Viscose",
    fit: "Bodycon Mini",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "satin", "mini", "rouge", "cowl", "damen"],
    patterns: [
      { src: "img/patterns/dresses/rouge-cowl-pieces.png", label: "Schnittteile · NZ 1 cm" }
    ]
  },
  {
    id: "v-d-dos",
    name: "Rouge Colonne",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 259,
    color: "#7a1212",
    accent: "#c5a059",
    image: "img/dresses/rouge-colonne.png",
    description:
      "Rouge-Satin Säule, Cowl-Ausschnitt, ein Träger, Goldschließe. Bodenlang. VELORA Redesign / Muster.",
    fabric: "Rouge Satin · Bias",
    fit: "Column, bodenlang",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "satin", "colonne", "abend", "rouge", "damen"],
    patterns: [
      { src: "img/patterns/dresses/rouge-colonne-pieces.png", label: "Schnittteile · Bias · NZ 1 cm" }
    ]
  },
  {
    id: "v-d-nuit",
    name: "Ivoire Colonne",
    category: "damen",
    gender: "damen",
    type: "kleid",
    price: 219,
    color: "#ebe4d8",
    accent: "#8a7f72",
    image: "img/dresses/ivoire-colonne.png",
    description:
      "Ivory-Satin Halter, sauberer V-Plunge (gefüttert), Midi-Colonne, Goldschließe im Nacken. VELORA Redesign / Muster.",
    fabric: "Ivory Satin · teilgefüttert",
    fit: "Column Midi",
    madeIn: "Muster / noch nicht in Produktion",
    featured: true,
    tags: ["kleid", "satin", "halter", "ivoire", "colonne", "abend", "damen"],
    patterns: [
      { src: "img/patterns/dresses/ivoire-colonne-pieces.png", label: "Schnittteile · teilgefüttert · NZ 1 cm" }
    ]
  },

  /* ——— Herbst-Kollektion: Jacken + Tasche (Fotos: Platzhalter, Studio-Shots folgen) ——— */
  {
    id: "v-j-parka",
    name: "Abend Parka",
    category: "herren",
    gender: "unisex",
    audience: "Unisex · Herren & Damen",
    type: "jacke",
    price: 229,
    oldPrice: 269,
    saleDemo: true,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/jackets/parka-schwarz.jpg?v=herbst22",
    description:
      "Der Parka für kühle Abende: Kapuze mit Kordelzug, gebürstete Gold-Reißverschlüsse, Pattentaschen und warmes Futter. Mattes, wasserabweisendes Gewebe — Casual Luxury für Herbst und Übergang. Unisex geschnitten.",
    fabric: "Wasserabweisendes Mischgewebe (Polyamid/Baumwolle), matt · warm gefüttert (Steppfutter)",
    fit: "Relaxed, hüftlang bis oberschenkellang · Unisex, Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Metallreißverschluss gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    tags: ["jacke", "parka", "herbst", "herren", "damen", "unisex", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/jackets/parka-schwarz.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/jackets/parka-beige.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/jackets/parka-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-j-bomber-h",
    name: "Bronze Bomber",
    category: "herren",
    gender: "herren",
    type: "jacke",
    price: 229,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/jackets/bomber-herren-braun.jpg?v=herbst22",
    description:
      "Bomberjacke in tiefem Braun mit goldenem Frontreißverschluss. Rippkragen, Rippbündchen und Rippsaum; an jeder Seite eine schräge Seitentasche mit eigenem Gold-Reißverschluss.",
    fabric: "Nylon-Twill mit matter Lederoptik-Beschichtung · Rippstrick an Kragen, Bündchen, Saum · Satinfutter",
    fit: "Regular, hüftkurz · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Metallreißverschlüsse gold gebürstet (Front + 2 Seitentaschen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    tags: ["jacke", "bomber", "herbst", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/jackets/bomber-herren-braun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/jackets/bomber-herren-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-j-bomber-d",
    name: "Bronze Bomber Crop",
    category: "damen",
    gender: "damen",
    type: "jacke",
    price: 219,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/jackets/bomber-damen-braun.jpg?v=herbst22",
    description:
      "Kurz geschnittene Bomberjacke in Braun mit goldenem Frontreißverschluss. Der Saum ist über Kordelzug mit Goldklemme enger stellbar — für die Taille, die du willst.",
    fabric: "Nylon-Twill mit matter Lederoptik-Beschichtung · Rippstrick an Kragen und Bündchen · verstellbarer Saum mit Kordelzug · Satinfutter",
    fit: "Cropped, taillenkurz · Saum verstellbar · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Metallreißverschluss + Kordelstopper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    featured: true,
    tags: ["jacke", "bomber", "cropped", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/jackets/bomber-damen-braun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/jackets/bomber-damen-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-t-shopper",
    name: "Atelier Shopper",
    category: "damen",
    gender: "damen",
    audience: "Damen · Handtasche",
    type: "tasche",
    price: 299,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/bags/shopper-schwarz.jpg?v=herbst22",
    description:
      "Eleganter Shopper mit Gold-Reißverschluss oben und Beschlägen in gebürstetem Gold. Innen durchdacht: Zip-Fach, Handyfach, Geldfach mit Reißverschluss, Kartenfächer, Schlüsselband und Stiftschlaufe. Dazu ein gepolstertes, weich gefüttertes Laptop-Fach für MacBook (bis 16 Zoll) und iPad — der Shopper wird zur Business-Tasche.",
    fabric: "Genarbtes Rindleder-Optik (Saffiano-Prägung) · Textilfutter · Laptop-Fach gepolstert, mit weicher Mikrofaser-Fütterung · Hardware gebürstetes Gold",
    fit: "ca. 38 × 30 × 14 cm · Henkellänge ca. 24 cm · Schulter- und Handtasche · Laptop-/Tablet-Fach ca. 36 × 25 × 2 cm",
    madeIn: "Muster / noch nicht in Produktion · Innen: gepolstertes Laptop-/Tablet-Fach (MacBook bis 16 Zoll, iPad), Zip-Fach, Handyfach, Geldfach (Zip), 4 Kartenfächer, Schlüsselband, Stiftschlaufe",
    featured: true,
    sizes: ["Einheitsgröße"],
    tags: ["tasche", "shopper", "handtasche", "laptop", "macbook", "ipad", "business", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/bags/shopper-schwarz.jpg?v=herbst22" },
      { id: "navy", name: "Dunkelblau", hex: "#18244e", image: "img/bags/shopper-navy.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/bags/shopper-braun.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/bags/shopper-burgund.jpg?v=herbst22" },
      { id: "gruen", name: "Dunkelgrün", hex: "#1f3a2c", image: "img/bags/shopper-gruen.jpg?v=herbst22" }
    ],
    gallery: [
      { src: "img/bags/shopper-schwarz-innen.jpg?v=herbst22", label: "Innenaufteilung (Laptop-Fach im Bild nicht dargestellt)" }
    ]
  },
  /* ——— Herbst 2026 · Erweiterung: Hosen, Gürtel, Westen (Studio-Fotos 1200×675) ——— */
  {
    id: "v-h-schmal-d",
    name: "Hose Schmal Damen",
    category: "damen",
    gender: "damen",
    type: "hose",
    price: 129,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/pants/hose-damen-schmal-schwarz.jpg?v=herbst22",
    description:
      "Die schmale Anzughose mit hohem Bund: Figur-Schnitt mit definierter Taille und langer Beinlinie, gestochen scharfer Bügelfalte und einem Knopf in gebürstetem Gold. Smart Business Casual in tiefem Schwarz — edel zu Blazer, Weste und Strick.",
    fabric: "Woll-Mischgewebe (Wolle/Polyester/Elasthan), leicht elastisch, matt · Bügelfalte · Innenbund mit Anti-Rutsch-Band",
    fit: "Slim, High Waist, verdeckter Reißverschluss, Seitentaschen · Figur-Schnitt: betonte Taille, lange Beinlinie · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    featured: true,
    tags: ["hose", "schmal", "slim", "high-waist", "business", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/pants/hose-damen-schmal-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-h-oversized-d",
    name: "Hose Oversized Damen",
    category: "damen",
    gender: "damen",
    type: "hose",
    price: 139,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/pants/hose-damen-oversized-beige.jpg?v=herbst22",
    description:
      "Weites Bein, hoher Bund, tiefe Bundfalten: die Oversized-Hose in Beige fällt fließend und streckt die Silhouette. Der Bund sitzt definiert in der Taille, das lange Bein bleibt ruhig — mit Knopf in gebürstetem Gold. Casual Luxury für Büro und Abend.",
    fabric: "Woll-Mischgewebe mit fließendem Fall (Wolle/Viskose/Polyester), matt · Bundfalten · Bügelfalte",
    fit: "Oversized Wide Leg, High Waist, Bundfalten · definierte Taille, lange Beinlinie · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    featured: true,
    tags: ["hose", "oversized", "wide-leg", "bundfalte", "high-waist", "business", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/pants/hose-damen-oversized-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-h-schmal-h",
    name: "Hose Schmal Herren",
    category: "herren",
    gender: "herren",
    type: "hose",
    price: 129,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/pants/hose-herren-schmal-anthrazit.jpg?v=herbst22",
    description:
      "Schmal zulaufende Anzughose mit klarer Bügelfalte. Moderner Schnitt, ruhige Linie, Goldknopf am Bund — für alle, die Business Casual mit Haltung tragen. In Anthrazit, Braun, Schwarz, Dunkelblau und Grau (heller als Anthrazit).",
    fabric: "Woll-Mischgewebe (Wolle/Polyester/Elasthan), leicht elastisch, matt · Bügelfalte",
    fit: "Slim Tapered, mittelhoher Bund, verdeckter Reißverschluss, Eingriff- und Gesäßtaschen · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    featured: true,
    tags: ["hose", "schmal", "slim", "tapered", "business", "herbst", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/pants/hose-herren-schmal-anthrazit.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/pants/hose-herren-schmal-braun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/pants/hose-herren-schmal-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/pants/hose-herren-schmal-dunkelblau.jpg?v=herbst22" },
      { id: "grau", name: "Grau", hex: "#9a9c9f", image: "img/pants/hose-herren-schmal-grau.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-h-oversized-h",
    name: "Hose Oversized Herren",
    category: "herren",
    gender: "herren",
    type: "hose",
    price: 139,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/pants/hose-herren-oversized-braun.jpg?v=herbst22",
    description:
      "Entspanntes weites Bein: Bundfalten, hoher Bund und ein fließender Fall mit Bügelfalte. Der Goldknopf setzt den einzigen Akzent — lässig, aber nie nachlässig. In Braun, Schwarz, Dunkelblau und Grau.",
    fabric: "Woll-Mischgewebe mit weichem Fall (Wolle/Viskose/Polyester), matt · Bundfalten · Bügelfalte",
    fit: "Relaxed Wide Leg, hoher Bund, Bundfalten, Seitentaschen · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    featured: true,
    tags: ["hose", "oversized", "wide-leg", "bundfalte", "business", "herbst", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/pants/hose-herren-oversized-braun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/pants/hose-herren-oversized-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/pants/hose-herren-oversized-dunkelblau.jpg?v=herbst22" },
      { id: "grau", name: "Grau", hex: "#8a8d91", image: "img/pants/hose-herren-oversized-grau.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-g-atelier",
    name: "Atelier Gürtel",
    category: "herren",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "guertel",
    price: 79,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/belts/guertel-schwarz.jpg?v=herbst22",
    description:
      "Der Gürtel für alles, was Haltung braucht: glattes Leder mit feiner Naht und einer Schnalle in gebürstetem Gold. Unisex, schlicht, langlebig — in Schwarz und Braun, in neun Längen von 80 bis 120 cm.",
    fabric: "Glattes Rindleder, matt-satinierte Oberfläche, Kantenfärbung und Ziernaht ton in ton · Schnalle gold gebürstet",
    fit: "Breite ca. 3,5 cm · Länge 80–120 cm in 5-cm-Schritten (Gesamtlänge; mittleres Loch = Größenangabe, Schätzung) · Unisex",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dornschnalle gold gebürstet",
    featured: true,
    sizes: ["80", "85", "90", "95", "100", "105", "110", "115", "120"],
    sizeUnit: "cm",
    defaultSize: "95",
    sizeHint: "Länge 80–120 cm",
    tags: ["guertel", "gürtel", "leder", "unisex", "damen", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/belts/guertel-schwarz.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/belts/guertel-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-w-lang-h",
    name: "Weste Lang Herren",
    category: "herren",
    gender: "herren",
    type: "weste",
    price: 169,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/vests/weste-herren-schwarz.jpg?v=herbst22",
    description:
      "Lange Weste mit Kragen, ohne Kapuze: Goldener Frontreißverschluss, zwei Seitentaschen mit eigenen Gold-Reißverschlüssen und ein ruhiger, langer Fall. Der Layering-Moment für Herbst und Übergang — über Strick, Hemd oder Polo.",
    fabric: "Dichtes, leicht wattiertes Mischgewebe (Polyamid/Baumwolle), matt · Satinfutter",
    fit: "Lang, hüft- bis oberschenkellang, regular · Kragen, keine Kapuze · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss + 2 Seitentaschen-Reißverschlüsse gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["weste", "gilet", "lang", "herbst", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/vests/weste-herren-schwarz.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/vests/weste-herren-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-w-crop-d",
    name: "Weste Crop Damen",
    category: "damen",
    gender: "damen",
    type: "weste",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/vests/weste-damen-schwarz.jpg?v=herbst22",
    description:
      "Kurz geschnittene Weste mit Kragen und goldenem Frontreißverschluss. Princess-Nähte formen die Taille, der Crop-Saum setzt die Proportion — ideal zur High-Waist-Hose oder über dem Kleid.",
    fabric: "Strukturiertes Mischgewebe (Polyester/Viskose/Elasthan), matt · Satinfutter",
    fit: "Cropped, taillenkurz, taillierte Passform mit Princess-Nähten · Kragen · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["weste", "crop", "cropped", "princess", "taillierung", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/vests/weste-damen-schwarz.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/vests/weste-damen-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-t-vintage",
    name: "Atelier Vintage",
    category: "damen",
    gender: "damen",
    audience: "Damen · Handtasche",
    type: "tasche",
    price: 189,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/bags/vintage-schwarz.jpg?v=herbst22",
    description:
      "Die Handtasche mit Geschichte: gealtertes, weich patiniertes Leder im Vintage-Look, goldener Drehverschluss und ein kleines Gold-Zipper-Detail. Jedes Stück wirkt, als würde es schon lange begleiten — in fünf tiefen Farben.",
    fabric: "Gealtertes Glattleder bzw. Vintage-Lederoptik (Used-Look, weich patiniert) · Textilfutter · Hardware gebürstetes Gold",
    fit: "ca. 28 × 20 × 10 cm (Schätzung) · Henkel + abnehmbarer Schulterriemen · Handtasche / Umhängetasche",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Drehverschluss + Zipper-Detail gold gebürstet",
    featured: true,
    sizes: ["Einheitsgröße"],
    tags: ["tasche", "handtasche", "vintage", "leder", "herbst", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/bags/vintage-schwarz.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/bags/vintage-braun.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#18244e", image: "img/bags/vintage-dunkelblau.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/bags/vintage-burgund.jpg?v=herbst22" },
      { id: "gruen", name: "Dunkelgrün", hex: "#1f3a2c", image: "img/bags/vintage-gruen.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-j-trench",
    name: "Atelier Trenchcoat",
    category: "herren",
    gender: "unisex",
    audience: "Unisex · Herren & Damen",
    type: "jacke",
    price: 249,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/coats/trench-dunkelbraun.jpg?v=herbst22",
    description:
      "Der Trenchcoat, neu gedacht: doppelreihig mit goldenen Knöpfen, Taillengürtel mit goldener Schnalle für die figurbetonte Taille, Sturmklappe und Ärmelriemen. Wasser- und windabweisend durch imprägnierte Baumwoll-Gabardine bzw. technisches Gewebe — Casual Luxury für Regen, Wind und Übergang. Unisex geschnitten, XS–XXL.",
    fabric: "Imprägnierte Baumwoll-Gabardine bzw. technisches Gewebe, wasser- und windabweisend (DWR), matt · Futter: leichtes Taft-/Satinfutter",
    fit: "Doppelreihig, knielang, tailliert mit Gürtel · Sturmklappe, Ärmelriemen · Unisex, Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe + Gürtelschnalle gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "trench", "trenchcoat", "mantel", "wasserabweisend", "windabweisend", "herbst", "herren", "damen", "unisex", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/coats/trench-dunkelbraun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/coats/trench-schwarz.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/coats/trench-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-h-cargo",
    name: "Atelier Cargo",
    category: "herren",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "hose",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/pants/cargo-schwarz.jpg?v=herbst22",
    description:
      "Die Cargo-Hose im weiten Streetwear-Schnitt, aber edler gedacht: schwerer Baumwoll-Twill mit leichtem Schimmer, saubere Bundfalten und ein oversized Wide Leg mit ruhigem Fall. Goldene Druckknöpfe an den Cargotaschen, goldene Zipper an den Beintaschen. Unisex, XS–XXL — in Schwarz, Dunkelbraun und Sand-Beige.",
    fabric: "Schwerer Baumwoll-Twill mit leichtem Schimmer (Baumwolle, ca. 300–340 g/m², Schätzung) · Bundfalten · Innenbund mit Anti-Rutsch-Band",
    fit: "Wide Leg / Oversized, hoher bis mittelhoher Bund, Bundfalten · aufgesetzte Cargotaschen mit Druckknöpfen, Beintaschen mit Zipper · Unisex, Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe (Cargotaschen) + Zipper (Beintaschen) gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "cargo", "wide-leg", "oversized", "streetwear", "twill", "bundfalte", "unisex", "herbst", "herren", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/pants/cargo-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/pants/cargo-braun.jpg?v=herbst22" },
      { id: "sand", name: "Sand-Beige", hex: "#c2ad86", image: "img/pants/cargo-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "v-t-weekender",
    name: "Atelier Weekender",
    category: "herren",
    gender: "unisex",
    audience: "Unisex · Reisetasche",
    type: "tasche",
    price: 229,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/bags/weekender-schwarz.jpg?v=herbst22",
    description:
      "Die Reisetasche für sieben Tage: ca. 60 Liter Volumen in weichem Leder, goldener Reißverschluss, zwei gerollte Lederhenkel und ein abnehmbarer, verstellbarer Umhängegurt an goldenen Karabinern. Dazu eine Außen-Einstecktasche für Boarding-Pass und Co. Unisex, in Schwarz, Braun und Dunkelblau.",
    fabric: "Glattleder bzw. hochwertige Lederoptik, Textilfutter · Reißverschluss, Karabiner und Beschläge gold gebürstet",
    fit: "ca. 60 L · ca. 55 × 30 × 28 cm (Schätzung) · 2 gerollte Lederhenkel + abnehmbarer, verstellbarer Umhängegurt · Außen-Einstecktasche · Einheitsgröße",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Reißverschluss + 2 Karabiner gold gebürstet",
    featured: true,
    sizes: ["Einheitsgröße"],
    tags: ["tasche", "weekender", "reisetasche", "reise", "leder", "unisex", "herbst", "herren", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/bags/weekender-schwarz.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/bags/weekender-braun.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#18244e", image: "img/bags/weekender-dunkelblau.jpg?v=herbst22" }
    ]
  },

  /* ——— Herbst 2026 · Erweiterung 5: 80 neue Styles (d01–d40 Damen, h01–h40 Herren) · AI-Muster-Fotos 1200×675 ——— */
  {
    id: "d01",
    name: "Atelier Cashmere Hoodie",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hoodie",
    type: "hoodie",
    price: 135,
    oldPrice: 169,
    saleDemo: true,
    color: "#efe6d2",
    accent: "#c5a059",
    image: "img/neu/damen/d01-cream.jpg?v=herbst22",
    description:
      "Oversized Hoodie aus schwerem Cashmere-Mix in Cream, weich im Griff und ruhig im Fall. Ein goldener Mini-Zipper an der Tasche setzt den einzigen Akzent.",
    fabric: "Cashmere-Mix (Schätzung: ca. 70 % Baumwolle / 20 % Polyamid / 10 % Cashmere), schwer, ca. 420 g/m² (Schätzung) · French-Terry-Rücken · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Kängurutasche, Kapuze mit Flachkordel, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 66 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Mini-Zipper an der Tasche, gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hoodie", "damen", "herbst", "cashmere", "oversized", "gold", "eigenmarke"],
    colors: [
      { id: "cream", name: "Cream", hex: "#efe6d2", image: "img/neu/damen/d01-cream.jpg?v=herbst22" }
    ]
  },
  {
    id: "h01",
    name: "Oversized Polo Strickpullover",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 149,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/herren/h01-anthrazit.jpg?v=herbst22",
    description:
      "Oversized Polo-Strickpullover in Anthrazit mit Reißverschlusskragen in Gold. Weich, ruhig, mit lässiger Weite.",
    fabric: "Strick (Schätzung: Merino-Mix, Wolle/Polyamid ca. 50/50 %), ca. 340 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Polokragen mit Halszip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 72 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kragenzip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "polo-strick", "pullover", "oversized", "zip", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/herren/h01-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d02",
    name: "Rippstrick Cardigan Crop",
    category: "damen",
    gender: "damen",
    audience: "Damen · Strick",
    type: "strick",
    price: 149,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d02-burgund.jpg?v=herbst22",
    description:
      "Cropped Cardigan aus feinem Rippstrick in tiefem Burgund. Die goldenen Knöpfe führen die Front sauber bis zum Rundhals.",
    fabric: "Rippstrick (Schätzung: Viskose/Polyamid/Wolle, ca. 55/30/15 %), mittleres Gewicht, ca. 320 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Cropped, körpernah, Rundhals, Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 50 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "damen", "herbst", "cardigan", "rippstrick", "crop", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d02-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "h02",
    name: "Wooloptic Bomber",
    category: "herren",
    gender: "herren",
    audience: "Herren · Jacke",
    type: "jacke",
    price: 199,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h02-schwarz.jpg?v=herbst22",
    description:
      "Bomber in Wooloptik mit goldenen Zippern, in Schwarz. Der Klassiker, edler gedacht: matte Oberfläche, warmer Griff.",
    fabric: "Wooloptik-Gewebe (Schätzung: Polyester/Wolle-Mix), ca. 420 g/m² (Schätzung) · Rippstrick, Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftkurz, Rippbündchen, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 66 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss und Taschenzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "herren", "herbst", "bomber", "wooloptik", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h02-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d03",
    name: "Heavy Tee Seidenglanz Crop",
    category: "damen",
    gender: "damen",
    audience: "Damen · T-Shirt",
    type: "tee",
    price: 79,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/damen/d03-weiss.jpg?v=herbst22",
    description:
      "Gecropptes Heavy Tee mit dezentem Seidenglanz in klarem Weiß. Eine goldene Ziernaht betont Saum und Ausschnitt.",
    fabric: "Schwere, merzerisierte Baumwolle (Schätzung), ca. 240 g/m² (Schätzung), Seidenglanz durch Veredlung · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Boxy Crop, breiter Rippkragen, kurze Ärmel · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 52 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Ziernaht in Gold (Garn) an Saum und Kragen",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tee", "damen", "herbst", "shirt", "crop", "basic", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d03-weiss.jpg?v=herbst22" }
    ]
  },
  {
    id: "h03",
    name: "Smart Pants Cozy Beige",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 139,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/herren/h03-beige.jpg?v=herbst22",
    description:
      "Schmal geschnittene Smart Pants in Beige mit Bundfalte. Weicher Griff, leichter Stretch, ein Hosenklassiker für Business Casual.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyester/Elasthan), ca. 270 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim Tapered, mittelhoher Bund, Bundfalte, Eingriff- und Gesäßtaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "smart-pants", "slim", "bundfalte", "business", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/herren/h03-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d04",
    name: "Wide-Leg Smart Pants Cocoa",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 139,
    color: "#5a3b2e",
    accent: "#c5a059",
    image: "img/neu/damen/d04-cocoa.jpg?v=herbst22",
    description:
      "Wide-Leg Smart Pants in warmem Cocoa mit hoher Taille und scharfer Bügelfalte. Fließender Fall, ruhige Linie — für Büro und Abend.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Viskose/Elasthan), matt, ca. 260 g/m² (Schätzung) · Bügelfalte · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wide Leg, High Waist, verdeckter Reißverschluss, Eingrifftaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "damen", "herbst", "wide-leg", "bugelfalte", "business", "smart", "gold", "eigenmarke"],
    colors: [
      { id: "cocoa", name: "Cocoa", hex: "#5a3b2e", image: "img/neu/damen/d04-cocoa.jpg?v=herbst22" }
    ]
  },
  {
    id: "h04",
    name: "Heavy Oversized Tee",
    category: "herren",
    gender: "herren",
    audience: "Herren · T-Shirt",
    type: "tee",
    price: 79,
    color: "#26262a",
    accent: "#c5a059",
    image: "img/neu/herren/h04-vintageblack.jpg?v=herbst22",
    description:
      "Heavy Oversized Tee in Vintage Black mit goldenem Mini-Label. Schwerer Jersey, ruhiger Fall, schon beim ersten Tragen vertraut.",
    fabric: "Schwere Baumwolle (Schätzung), ca. 260 g/m² (Schätzung), Garment-Dyed · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Rundhals mit breitem Rippkragen, kurze Ärmel · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 74 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Mini-Label in Gold (gestickt, Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tee", "herren", "herbst", "oversized", "heavy", "vintage", "gold", "eigenmarke"],
    colors: [
      { id: "vintageblack", name: "Vintage Black", hex: "#26262a", image: "img/neu/herren/h04-vintageblack.jpg?v=herbst22" }
    ]
  },
  {
    id: "d05",
    name: "Teddy Mantel Kurz",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 175,
    oldPrice: 219,
    saleDemo: true,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/damen/d05-beige.jpg?v=herbst22",
    description:
      "Kurze Teddy-Jacke in sandigem Beige, weich wie ein Mantel und leicht wie ein Cardigan. Goldene Druckknöpfe schließen die Front.",
    fabric: "Teddy-Fleece (Schätzung: 100 % Polyester, Plüschflor), ca. 380 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Kurz, boxy, Umlegekragen, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 62 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "teddy", "fleece", "kurz", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/damen/d05-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "h05",
    name: "Longsleeve Hemd Leinen Seide",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 129,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h05-schwarz.jpg?v=herbst22",
    description:
      "Longsleeve-Hemd aus Leinen-Seide-Mix in Schwarz. Leichter Glanz, feine Struktur — offen oder geschlossen getragen.",
    fabric: "Leinen-Seide-Mix (Schätzung: Leinen/Seide ca. 70/30 %), ca. 150 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Hemdkragen, Knopfleiste, Brusttasche · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe in Gold-Ton (Annahme: Metall oder Perlmutt mit Goldrand)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "hemd", "leinen", "seide", "longsleeve", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h05-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d06",
    name: "Puffer Cape",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 183,
    oldPrice: 229,
    saleDemo: true,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d06-schwarz.jpg?v=herbst22",
    description:
      "Gestepptes Puffer-Cape in Schwarz: Wärme und Volumen ohne Gewicht, mit einer klaren, fast skulpturalen Silhouette. Der goldene Reißverschluss führt die Linie durch.",
    fabric: "Nylon-Ripstop mit Steppung (Schätzung), Daunenalternative-Füllung ca. 100 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Cape-Schnitt, Stehkragen, Armschlitze, hüftkurz · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 60 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "puffer", "cape", "gesteppt", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d06-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h06",
    name: "Teddy Jacke Lederkragen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Jacke",
    type: "jacke",
    price: 195,
    oldPrice: 229,
    saleDemo: true,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/neu/herren/h06-braun.jpg?v=herbst22",
    description:
      "Teddy-Jacke mit Lederkragen und goldenen Knöpfen in Braun. Warm, weich, mit einem Hauch Understatement.",
    fabric: "Teddy-Fleece (Schätzung: Polyester), Kragen in Lederoptik (PU), ca. 400 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftlang, Kragen in Lederoptik, Pattentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "herren", "herbst", "teddy", "fleece", "lederkragen", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/neu/herren/h06-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d07",
    name: "Rib Longsleeve Kleid",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 159,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d07-schwarz.jpg?v=herbst22",
    description:
      "Figurbetontes Rib-Kleid in Schwarz mit langem Arm und hohem Kragen. Ein goldener Zip am Hals gibt dem reduzierten Schnitt seinen Akzent.",
    fabric: "Feinripp-Jersey (Schätzung: Viskose/Polyamid/Elasthan, ca. 65/28/7 %), stark elastisch, ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurbetont, Midi, hoher Kragen mit Halszip · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 110 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["kleid", "damen", "herbst", "rib", "longsleeve", "midi", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d07-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h07",
    name: "Puffer Gilet",
    category: "herren",
    gender: "herren",
    audience: "Herren · Weste",
    type: "weste",
    price: 152,
    oldPrice: 179,
    saleDemo: true,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h07-schwarz.jpg?v=herbst22",
    description:
      "Gestepptes Puffer-Gilet ohne Kapuze in Schwarz mit Goldzip. Leichte Wärme für Übergang und Layering.",
    fabric: "Nylon-Ripstop (Schätzung), Füllung Daunenalternative ca. 100 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftlang, Stehkragen, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontzip und Taschenzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["weste", "herren", "herbst", "puffer", "gilet", "gesteppt", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h07-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d08",
    name: "Wollmix Bomber Crop",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 189,
    color: "#c2ad86",
    accent: "#c5a059",
    image: "img/neu/damen/d08-sand.jpg?v=herbst22",
    description:
      "Cropped Bomber aus Wollmix in Sand: kompakt, warm und mit weichem Griff. Goldene Zipper an Front und Ärmel geben dem Klassiker eine edle Note.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyamid, ca. 40/60 %), ca. 400 g/m² (Schätzung) · Rippstrick an Kragen, Bündchen, Saum · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Cropped, taillenkurz, Rippbündchen, Ärmeltasche · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 52 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss und Ärmelzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "bomber", "wollmix", "crop", "gold", "eigenmarke"],
    colors: [
      { id: "sand", name: "Sand", hex: "#c2ad86", image: "img/neu/damen/d08-sand.jpg?v=herbst22" }
    ]
  },
  {
    id: "h08",
    name: "Sweatjacke Cocoa",
    category: "herren",
    gender: "herren",
    audience: "Herren · Jacke",
    type: "jacke",
    price: 169,
    color: "#5a3b2e",
    accent: "#c5a059",
    image: "img/neu/herren/h08-cocoa.jpg?v=herbst22",
    description:
      "Sweatjacke in Cocoa aus schwerem Gewebe mit goldenem Zipper. Hoher Kragen, klare Form — Komfort ohne Kompromiss.",
    fabric: "Schweres Sweat-/Strickgewebe (Schätzung: Baumwolle/Polyester), ca. 420 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Stehkragen, durchgehender Zip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "herren", "herbst", "sweatjacke", "zip", "stehkragen", "gold", "eigenmarke"],
    colors: [
      { id: "cocoa", name: "Cocoa", hex: "#5a3b2e", image: "img/neu/herren/h08-cocoa.jpg?v=herbst22" }
    ]
  },
  {
    id: "d09",
    name: "Satin Hemdbluse Oversized",
    category: "damen",
    gender: "damen",
    audience: "Damen · Oberteil / Hemd",
    type: "oberteil",
    price: 129,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/damen/d09-champagner.jpg?v=herbst22",
    description:
      "Oversized Hemdbluse aus Satin in Champagner, fließend und mit sanftem Glanz. Goldene Manschettenknöpfe schließen die weiten Ärmel.",
    fabric: "Satin (Schätzung: Polyester-Satin oder Seidenmix), fließend, ca. 110 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Hemdkragen, Doppelmanschette, verdeckte Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 74 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Manschettenknöpfe gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "damen", "herbst", "satin", "bluse", "hemdbluse", "oversized", "gold", "eigenmarke"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/damen/d09-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "h09",
    name: "Rippstrick Pullover V",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 139,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/herren/h09-burgund.jpg?v=herbst22",
    description:
      "Rippstrick-Pullover mit V-Ausschnitt in Burgund. Klassisch, warm und klar — der Pullover für jeden Anlass.",
    fabric: "Rippstrick (Schätzung: Wolle/Viskose/Polyamid), ca. 330 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, V-Ausschnitt, Rippbündchen und Saum · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezent: kleines goldenes Label am Saum (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "pullover", "rippstrick", "v-ausschnitt", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h09-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "d10",
    name: "Strick Set Top und Midirock",
    category: "damen",
    gender: "damen",
    audience: "Damen · Set",
    type: "set",
    price: 179,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/damen/d10-anthrazit.jpg?v=herbst22",
    description:
      "Zweiteiliges Strick-Set aus Kurzarm-Top und Midirock in Anthrazit. Ruhige Linie, feine Struktur, einzeln oder gemeinsam zu tragen.",
    fabric: "Feinstrick (Schätzung: Viskose/Polyamid/Wolle, ca. 55/30/15 %), ca. 300 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Top: körpernah, kurzer Arm, Rundhals · Rock: Midi, hoher Bund, leicht ausgestellt · Größen XS–XXL · Maße (Schätzung, Gr. M): Rocklänge ca. 80 cm, Top-Länge ca. 56 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleine goldene Zierknöpfe am Top-Ausschnitt (Annahme, am Muster festlegen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["set", "damen", "herbst", "strick-set", "midirock", "zweiteiler", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/damen/d10-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "h10",
    name: "Wide Sweat Pants Wollfleece",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 129,
    color: "#5a3b2e",
    accent: "#c5a059",
    image: "img/neu/herren/h10-cocoa.jpg?v=herbst22",
    description:
      "Wide Sweat Pants aus Wollfleece in Cocoa mit Kordel und goldenen Endkappen. Weites Bein, weicher Fall.",
    fabric: "Wollfleece (Schätzung: Wolle/Polyester ca. 30/70 %), ca. 400 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wide Leg, Gummibund mit Kordel, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kordelendkappen gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "sweatpants", "wollfleece", "wide-leg", "gold", "eigenmarke"],
    colors: [
      { id: "cocoa", name: "Cocoa", hex: "#5a3b2e", image: "img/neu/herren/h10-cocoa.jpg?v=herbst22" }
    ]
  },
  {
    id: "d11",
    name: "Notting Hill Jacke",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 229,
    color: "#8a6a42",
    accent: "#c5a059",
    image: "img/neu/damen/d11-dunkelcamel.jpg?v=herbst22",
    description:
      "Kurze, boxy Jacke in Wildlederoptik mit Stehkragen und breitem Taillengürtel in Dunkelcamel. Weiche Oberfläche, klare Proportion.",
    fabric: "Wildlederoptik (Schätzung: Mikrofaser-Veloursimitat auf Polyester), ca. 300 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Boxy, kurz, Stehkragen, breiter Gürtel, Pattentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 52 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Gürtelschnalle und Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "wildlederoptik", "utility", "boxy", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelcamel", name: "Dunkelcamel", hex: "#8a6a42", image: "img/neu/damen/d11-dunkelcamel.jpg?v=herbst22" }
    ]
  },
  {
    id: "h11",
    name: "Wildlederoptik Overshirt",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 189,
    color: "#8a6a42",
    accent: "#c5a059",
    image: "img/neu/herren/h11-dunkelcamel.jpg?v=herbst22",
    description:
      "Overshirt in Wildlederoptik, Dunkelcamel, mit goldenen Druckknöpfen. Zwei Brusttaschen, weicher Griff.",
    fabric: "Wildlederoptik (Schätzung: Mikrofaser-Veloursimitat), ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Hemdkragen, Brusttaschen mit Patte, Druckknopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "overshirt", "wildlederoptik", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelcamel", name: "Dunkelcamel", hex: "#8a6a42", image: "img/neu/herren/h11-dunkelcamel.jpg?v=herbst22" }
    ]
  },
  {
    id: "d12",
    name: "Lederoptik Utility Jacke",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 209,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d12-schwarz.jpg?v=herbst22",
    description:
      "Utility-Jacke in Lederoptik mit schmalem Bindegürtel, Stehkragen und Brusttaschen. Druckknöpfe in Gold schließen die Front.",
    fabric: "Lederoptik (Schätzung: PU-beschichtetes Gewebe, matt), ca. 320 g/m² (Schätzung) · Futter Taft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftlang, Stehkragen, Bindegürtel, 4 Taschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 64 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "lederoptik", "utility", "gurtel", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d12-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h12",
    name: "Lederoptik Jacke Stehkragen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Jacke",
    type: "jacke",
    price: 219,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h12-schwarz.jpg?v=herbst22",
    description:
      "Lederoptik-Jacke mit Stehkragen und Brusttaschen in Schwarz. Goldene Zipper und eine ruhige, klare Linie.",
    fabric: "Lederoptik (Schätzung: PU-beschichtetes Gewebe, matt), ca. 340 g/m² (Schätzung) · Futter Taft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftlang, Stehkragen, Brust- und Seitentaschen mit Zip · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 68 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Taschenzipper und Frontzip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "herren", "herbst", "lederoptik", "stehkragen", "biker", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h12-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d13",
    name: "Satin Mantel Lang",
    category: "damen",
    gender: "damen",
    audience: "Damen · Mantel",
    type: "mantel",
    price: 207,
    oldPrice: 259,
    saleDemo: true,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/damen/d13-champagner.jpg?v=herbst22",
    description:
      "Langer Satin-Mantel mit betonten Schultern und goldenen Knöpfen — in Champagner oder Schwarz. Fließend, repräsentativ, ein Auftritt für sich.",
    fabric: "Satin-Mischgewebe (Schätzung: Polyester/Viskose), schwer fließend, ca. 200 g/m² (Schätzung) · Futter Satin · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Lang, schulterbetont, einreihig, Knopfleiste, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 115 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["mantel", "damen", "herbst", "satin", "langer-mantel", "abend", "gold", "eigenmarke"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/damen/d13-champagner.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d13-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h13",
    name: "Wollmantel Zweireihig",
    category: "herren",
    gender: "herren",
    audience: "Herren · Mantel",
    type: "mantel",
    price: 237,
    oldPrice: 279,
    saleDemo: true,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/herren/h13-anthrazit.jpg?v=herbst22",
    description:
      "Langer zweireihiger Wollmantel in Anthrazit mit goldenen Knöpfen. Schultern mit Struktur, Fall mit Ruhe — der Mantel für den Winter.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyamid/Kaschmir ca. 70/20/10 %), ca. 520 g/m² (Schätzung) · Futter Viskose · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Lang, zweireihig, Reverskragen, Pattentaschen, knielang bis wadenlang · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 112 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe (Doppelreihe) gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["mantel", "herren", "herbst", "wollmantel", "zweireihig", "wolle", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/herren/h13-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d14",
    name: "Wildlederoptik Mantel Zweireihig",
    category: "damen",
    gender: "damen",
    audience: "Damen · Mantel",
    type: "mantel",
    price: 223,
    oldPrice: 279,
    saleDemo: true,
    color: "#8a6a42",
    accent: "#c5a059",
    image: "img/neu/damen/d14-dunkelcamel.jpg?v=herbst22",
    description:
      "Zweireihiger Mantel in Wildlederoptik, Dunkelcamel, mit Gürtel und gerafftem Rücken. Weiche Haptik, definierte Taille, großer Auftritt.",
    fabric: "Wildlederoptik (Schätzung: Mikrofaser-Veloursimitat), ca. 340 g/m² (Schätzung) · Futter Satin · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Zweireihig, tailliert mit Gürtel, gerafftes Rückenteil, knielang · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 105 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe (Doppelreihe) und Gürtelschnalle gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["mantel", "damen", "herbst", "wildlederoptik", "zweireihig", "gurtel", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelcamel", name: "Dunkelcamel", hex: "#8a6a42", image: "img/neu/damen/d14-dunkelcamel.jpg?v=herbst22" }
    ]
  },
  {
    id: "h14",
    name: "Strickpullover Zip Kragen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 119,
    oldPrice: 149,
    saleDemo: true,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/herren/h14-burgund.jpg?v=herbst22",
    description:
      "Strickpullover mit Reißverschlusskragen in Burgund. Hoher Kragen, weicher Griff, ein Goldzip als Akzent.",
    fabric: "Strick (Schätzung: Wolle/Polyamid), ca. 340 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Stehkragen mit Halszip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "pullover", "zip", "stehkragen", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h14-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "d15",
    name: "Feinstrick Pullover Zipper",
    category: "damen",
    gender: "damen",
    audience: "Damen · Strick",
    type: "strick",
    price: 139,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d15-burgund.jpg?v=herbst22",
    description:
      "Figurnaher Feinstrick-Pullover in Burgund mit hohem Kragen. Der goldene Zipper am Kragen lässt sich nach Wunsch öffnen.",
    fabric: "Feinstrick (Schätzung: Merino-Mix, Wolle/Polyamid ca. 50/50 %), ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurnah, Stehkragen mit Halszip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 60 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "damen", "herbst", "feinstrick", "pullover", "zip", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d15-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "h15",
    name: "Feinstrick Polo Goldzip",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 129,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h15-schwarz.jpg?v=herbst22",
    description:
      "Feinstrick-Polo mit Goldzip statt Knopfleiste. Reduziert, schmal, klar. In Schwarz, Weiß, Dunkelblau, Burgund, Dunkelgrün, Braun, Beige und Anthrazit. Passend dazu: Feinstrick Polo Offen (h46) — dieselbe Linie ganz ohne Zipper.",
    fabric: "Feinstrick (Schätzung: Merino-Mix/Baumwolle), ca. 240 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, kurzer Arm, Polokragen mit Halszip · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "polo-strick", "feinstrick", "zip", "gold", "eigenmarke"],
    matches: ["h46"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h15-schwarz.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h15-weiss.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h15-dunkelblau.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h15-burgund.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h15-dunkelgruen.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#3b2616", image: "img/neu/herren/h15-braun.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#c9b08a", image: "img/neu/herren/h15-beige.jpg?v=herbst22" },
      { id: "anthrazit", name: "Anthrazit", hex: "#4a4a4d", image: "img/neu/herren/h15-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d16",
    name: "Barrel Hose Nieten",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 149,
    color: "#232b3a",
    accent: "#c5a059",
    image: "img/neu/damen/d16-dunkelgewaschen.jpg?v=herbst22",
    description:
      "Barrel-Hose in dunkler Waschung mit goldenen Nietendetails. Hoher Bund, gerundetes Bein, zeitlos und markant.",
    fabric: "Denim (Schätzung: 98 % Baumwolle / 2 % Elasthan), ca. 340 g/m² (Schätzung), dunkel gewaschen · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Barrel Leg, High Waist, 5-Pocket, Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Nieten und Jeansknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "damen", "herbst", "jeans", "barrel", "denim", "nieten", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelgewaschen", name: "Dunkel gewaschen", hex: "#232b3a", image: "img/neu/damen/d16-dunkelgewaschen.jpg?v=herbst22" }
    ]
  },
  {
    id: "h16",
    name: "Loose Fit Hose Bundfalte",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 139,
    color: "#4a4a4d",
    accent: "#c5a059",
    image: "img/neu/herren/h16-dunkelgrau.jpg?v=herbst22",
    description:
      "Barrel-/Loose-Fit-Hose in Dunkelgrau mit Bundfalte. Gerundetes Bein, ruhiger Stand, entspannt und edel.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyester/Viskose), ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Barrel/Loose Fit, hoher Bund, Bundfalte, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "barrel", "loose-fit", "bundfalte", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelgrau", name: "Dunkelgrau", hex: "#4a4a4d", image: "img/neu/herren/h16-dunkelgrau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d17",
    name: "Satin Midikleid Spitze",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 169,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d17-schwarz.jpg?v=herbst22",
    description:
      "Midikleid aus Satin in Schwarz mit zartem Spitzenakzent. Tiefer fallender Rock, ruhiger Glanz — elegant vom Dinner bis zum späten Abend.",
    fabric: "Satin (Schätzung: Polyester/Elasthan) mit Spitzenbesatz (Polyamid) · Futter Jersey · ca. 130 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Midi, V-Ausschnitt, seitlicher Schlitz, Spitzenkante · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 115 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleine Goldschließe an der Schulter (Annahme, am Muster festlegen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["kleid", "damen", "herbst", "satin", "spitze", "midi", "abend", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d17-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h17",
    name: "Satinhemd Oversized",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 119,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/herren/h17-champagner.jpg?v=herbst22",
    description:
      "Oversized Satinhemd in Champagner, fließend und mit sanftem Glanz. Offen getragen über Tee, geschlossen zum Anzug.",
    fabric: "Satin (Schätzung: Polyester/Seidenmix), fließend, ca. 110 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Hemdkragen, durchgehende Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 78 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe in Gold-Ton (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "satinhemd", "oversized", "champagner", "gold", "eigenmarke"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/herren/h17-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "d18",
    name: "Rüschenbluse Seidenmix",
    category: "damen",
    gender: "damen",
    audience: "Damen · Oberteil / Hemd",
    type: "oberteil",
    price: 129,
    color: "#efe6d2",
    accent: "#c5a059",
    image: "img/neu/damen/d18-creme.jpg?v=herbst22",
    description:
      "Rüschenbluse aus Seidenmix in Creme mit goldenen Manschettenknöpfen. Feine Volants entlang der Knopfleiste, romantisch und klar zugleich.",
    fabric: "Seidenmix (Schätzung: Seide/Viskose ca. 30/70 %), fließend, ca. 90 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Volants an der Front, Stehkragen, Doppelmanschette · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 66 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Manschettenknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "damen", "herbst", "bluse", "seidenmix", "ruschen", "gold", "eigenmarke"],
    colors: [
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/damen/d18-creme.jpg?v=herbst22" }
    ]
  },
  {
    id: "h18",
    name: "Gilet Gesteppt Braun",
    category: "herren",
    gender: "herren",
    audience: "Herren · Weste",
    type: "weste",
    price: 169,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/herren/h18-dunkelbraun.jpg?v=herbst22",
    description:
      "Gestepptes Gilet in Dunkelbraun mit goldenem Reißverschluss. Leicht, warm, Layering in Reinform.",
    fabric: "Nylon-Ripstop (Schätzung), Füllung Daunenalternative ca. 100 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftlang, Stehkragen, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontzip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["weste", "herren", "herbst", "gilet", "gesteppt", "braun", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/neu/herren/h18-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d19",
    name: "Satinrock Fließend",
    category: "damen",
    gender: "damen",
    audience: "Damen · Rock",
    type: "rock",
    price: 119,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/damen/d19-champagner.jpg?v=herbst22",
    description:
      "Fließender Satinrock in Champagner, der sich bei jedem Schritt weich bewegt. Hoher Bund und lange Linie, ideal zu Strick und Bluse.",
    fabric: "Satin (Schätzung: Polyester/Viskose), ca. 120 g/m² (Schätzung) · Schrägschnitt · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Midi, schräg geschnitten, hoher Elastikbund · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 80 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezent: kleines goldenes Label am Bund (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["rock", "damen", "herbst", "satin", "midirock", "bias", "gold", "eigenmarke"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/damen/d19-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "h19",
    name: "Wide-Leg Anzughose Nadelstreifen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h19-schwarz.jpg?v=herbst22",
    description:
      "Wide-Leg-Anzughose mit Nadelstreifen in Schwarz. Hoher Bund, fließendes Bein, klare Bügelfalte.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyester), Nadelstreifen ton in ton, ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wide Leg, hoher Bund, Bundfalte, Bügelfalte, Eingrifftaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "anzughose", "nadelstreifen", "wide-leg", "business", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h19-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d20",
    name: "Stiefeletten Keilabsatz",
    category: "damen",
    gender: "damen",
    audience: "Damen · Schuhe",
    type: "schuhe",
    price: 199,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d20-schwarz.jpg?v=herbst22",
    description:
      "Stiefeletten mit Keilabsatz in Schwarz, gearbeitet für lange Tage und lange Abende. Die goldene Schnalle setzt den Akzent am Schaft.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Textil, Laufsohle Gummi/TPU · Keilabsatz ca. 7 cm (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knöchelhoch, Seitenreißverschluss, Keilabsatz, Rundkappe · EU-Größen 36–42, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierschnalle gold gebürstet",
    featured: true,
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    defaultSize: "38",
    sizeHint: "EU-Größen 36–42",
    tags: ["schuhe", "damen", "herbst", "stiefeletten", "keilabsatz", "leder", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d20-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h20",
    name: "Chelsea Boots Gold",
    category: "herren",
    gender: "herren",
    audience: "Herren · Schuhe",
    type: "schuhe",
    price: 209,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h20-schwarz.jpg?v=herbst22",
    description:
      "Chelsea Boots in Schwarz mit goldenen Details, schmal geschnitten und für jeden Tag gemacht. Elastikeinsatz, Zuglasche, klare Form.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Leder/Textil, Laufsohle Gummi · Absatz ca. 3 cm (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knöchelhoch, Elastikeinsatz, Zuglasche, Rundkappe · EU-Größen 40–46, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Gold-Detail an der Zuglasche, Zierelemente gold gebürstet",
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    defaultSize: "42",
    sizeHint: "EU-Größen 40–46",
    tags: ["schuhe", "herren", "herbst", "chelsea-boots", "leder", "stiefel", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h20-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d21",
    name: "Body mit Bügeln",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d21-schwarz.jpg?v=herbst22",
    description:
      "Figurformender Body mit feinen Bügeln, schlicht geschnitten und komfortabel für den Alltag. Ein kleiner goldener Verschluss ist das einzige Detail.",
    fabric: "Mikrofaser-Stretch (Schätzung: Polyamid/Elasthan ca. 82/18 %) · Bügel mit Stoffummantelung · Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurformend, Vollschalen-Bügelcups, schmale Träger, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Mini-Verschluss gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "body", "bugel", "basic", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d21-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h21",
    name: "Tech Pants Slim",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 139,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h21-schwarz.jpg?v=herbst22",
    description:
      "Tech Pants Slim aus dehnbarem Stoff mit leichtem Schimmer in Schwarz. Der goldene Reißverschluss an der Tasche ist der einzige Akzent.",
    fabric: "Technisches Stretchgewebe (Schätzung: Polyamid/Elasthan), leichter Schimmer, ca. 240 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, mittelhoher Bund, Reißverschlusstasche seitlich, dehnbar · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Taschenzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "tech-pants", "slim", "stretch", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h21-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d22",
    name: "Satin Body Tiefer Ausschnitt",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 109,
    color: "#7a2346",
    accent: "#c5a059",
    image: "img/neu/damen/d22-beere.jpg?v=herbst22",
    description:
      "Body aus weichem Satin-Stretch in Beere mit tiefem Ausschnitt. Dezent im Schnitt, fein im Glanz.",
    fabric: "Satin-Stretch (Schätzung: Polyamid/Elasthan ca. 85/15 %), matt-seidig · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer V-Ausschnitt, schmale Träger, Zwickelverschluss · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleine Goldschieber an den Trägern",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "body", "satin", "stretch", "gold", "eigenmarke"],
    colors: [
      { id: "beere", name: "Beere", hex: "#7a2346", image: "img/neu/damen/d22-beere.jpg?v=herbst22" }
    ]
  },
  {
    id: "h22",
    name: "Vito Overshirt Wildlederoptik",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 179,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/herren/h22-dunkelbraun.jpg?v=herbst22",
    description:
      "Vito Overshirt in Wildlederoptik, Dunkelbraun, mit goldenen Druckknöpfen. Weich, warm, ein Statement-Layer.",
    fabric: "Wildlederoptik (Schätzung: Mikrofaser-Veloursimitat), ca. 300 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Hemdkragen, Brusttaschen, Druckknopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "overshirt", "wildlederoptik", "vito", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/neu/herren/h22-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d23",
    name: "Basque Kastanie",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 119,
    color: "#6b3a26",
    accent: "#c5a059",
    image: "img/neu/damen/d23-kastanie.jpg?v=herbst22",
    description:
      "Basque in Kastanienbraun mit goldenen Haken an der Front. Klassische Formensprache, ruhig und edel umgesetzt.",
    fabric: "Satin mit Stretchanteil und Spitzenbesatz (Schätzung: Polyamid/Elasthan) · Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurformend, Haken-Ösen-Verschluss vorn, Stäbchen-verstärkt (Schätzung) · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Haken und Ösen gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "basque", "satin", "haken", "gold", "eigenmarke"],
    colors: [
      { id: "kastanie", name: "Kastanienbraun", hex: "#6b3a26", image: "img/neu/damen/d23-kastanie.jpg?v=herbst22" }
    ]
  },
  {
    id: "h23",
    name: "Quarter Zip Merino",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 149,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/herren/h23-anthrazit.jpg?v=herbst22",
    description:
      "Quarter-Zip-Strickpullover aus Merino-Mix in Anthrazit mit goldenem Zipper. Warm, präzise, vielseitig.",
    fabric: "Strick (Schätzung: Merino-Mix, Wolle/Polyamid ca. 50/50 %), ca. 320 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Stehkragen mit Quarter-Zip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "quarter-zip", "merino", "pullover", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/herren/h23-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d24",
    name: "Basque Spitze",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 119,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d24-schwarz.jpg?v=herbst22",
    description:
      "Basque in Schwarz mit feinem Spitzenakzent. Zurückhaltend im Auftritt, präzise in der Passform.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) · Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurformend, Haken-Ösen-Verschluss, Spitzenbesatz · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshaken gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "basque", "spitze", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d24-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h24",
    name: "Crewneck Kaschmir Mix",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 139,
    color: "#18244e",
    accent: "#c5a059",
    image: "img/neu/herren/h24-dunkelblau.jpg?v=herbst22",
    description:
      "Crewneck-Pullover aus Kaschmir-Mix in Dunkelblau mit feiner Rippe. Weich im Griff, klassisch im Schnitt.",
    fabric: "Kaschmir-Mix (Schätzung: Wolle/Kaschmir ca. 80/20 %), ca. 300 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Rundhals, feine Rippe, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezent: kleines goldenes Label im Nacken (Annahme)",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "crewneck", "kaschmir", "pullover", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#18244e", image: "img/neu/herren/h24-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d25",
    name: "Plunge Bralette Gold",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 59,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d25-schwarz.jpg?v=herbst22",
    description:
      "Plunge-Bralette in Schwarz mit goldenem Mittelsteg. Leicht, ohne Bügel, für jeden Tag.",
    fabric: "Mikrofaser-Stretch (Schätzung: Polyamid/Elasthan ca. 80/20 %) · Cups ohne Bügel, herausnehmbare Pads · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Bralette, Plunge-Ausschnitt, verstellbare Träger, Rückenverschluss · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Mittelsteg gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "bralette", "plunge", "basic", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d25-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h25",
    name: "Edler Jogger Wollfleece",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 129,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h25-schwarz.jpg?v=herbst22",
    description:
      "Edler Jogger aus Wollfleece in Schwarz mit Bund und goldenen Endkappen. Schmal zulaufend, weich und warm.",
    fabric: "Wollfleece (Schätzung: Wolle/Polyester ca. 30/70 %), ca. 380 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Tapered Jogger, Gummibund mit Kordel, Beinbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kordelendkappen gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "jogger", "wollfleece", "tapered", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h25-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d26",
    name: "Satin Bralette Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#5e1424",
    accent: "#c5a059",
    image: "img/neu/damen/d26-rotwein.jpg?v=herbst22",
    description:
      "Bralette-Set aus Satin in Rotwein mit passendem Slip. Weicher Glanz, dezente Linienführung.",
    fabric: "Satin-Stretch (Schätzung: Polyamid/Elasthan), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Set aus Bralette und Slip, verstellbare Träger, mittelhoher Slip · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleine goldene Schieber an den Trägern",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "bralette", "set", "satin", "gold", "eigenmarke"],
    colors: [
      { id: "rotwein", name: "Rotwein", hex: "#5e1424", image: "img/neu/damen/d26-rotwein.jpg?v=herbst22" }
    ]
  },
  {
    id: "h26",
    name: "Matching Set Polo und Hose",
    category: "herren",
    gender: "herren",
    audience: "Herren · Set",
    type: "set",
    price: 239,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/herren/h26-beige.jpg?v=herbst22",
    description:
      "Strick-Set aus Polo und Hose in Beige, leicht und elegant. Ein durchgehender Look — auch einzeln kombinierbar.",
    fabric: "Strick (Schätzung: Baumwolle/Viskose/Polyamid), ca. 260 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Polo mit kurzem Arm und Halszip, Hose mit Gummibund und geradem Bein · Größen XS–XXL · Maße (Schätzung, Gr. M): Hose: Innenbeinlänge ca. 80 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["set", "herren", "herbst", "matching-set", "strick-set", "zweiteiler", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/herren/h26-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d27",
    name: "Bralette Set Stickerei",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 95,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/damen/d27-weiss.jpg?v=herbst22",
    description:
      "Bralette-Set in Weiß mit feiner Stickerei. Zart und klar, mit dezentem Gold am Verschluss.",
    fabric: "Stickerei auf Mesh (Schätzung: Polyamid/Elasthan), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Set aus Bralette und Slip, feine Stickerei, Rückenverschluss · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "bralette", "set", "stickerei", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d27-weiss.jpg?v=herbst22" }
    ]
  },
  {
    id: "h27",
    name: "Abend Sakko Unstrukturiert",
    category: "herren",
    gender: "herren",
    audience: "Herren · Sakko",
    type: "sakko",
    price: 249,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h27-schwarz.jpg?v=herbst22",
    description:
      "Leichtes, unstrukturiertes Abend-Sakko in Schwarz mit goldenen Knöpfen. Weicher Fall, kaum Einlage — die ruhige Alternative zum Anzug.",
    fabric: "Leichtes Mischgewebe (Schätzung: Wolle/Viskose/Elasthan), ca. 240 g/m² (Schätzung) · Halbfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, einreihig, spitzes Revers, unstrukturiert, Knopfzier an den Ärmeln · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe (Front + Ärmel) gold gebürstet",
    featured: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["sakko", "herren", "herbst", "unstrukturiert", "abend", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h27-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d28",
    name: "Seiden Morgenmantel",
    category: "damen",
    gender: "damen",
    audience: "Damen · Loungewear",
    type: "lounge",
    price: 149,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/damen/d28-champagner.jpg?v=herbst22",
    description:
      "Kurzer Morgenmantel aus Seide-Optik in Champagner mit goldenem Gürtel. Leicht, fließend, für ruhige Morgen.",
    fabric: "Satin (Schätzung: Polyester oder Seidenmix), ca. 90 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Kimono-Kragen, Bindegürtel, oberschenkellang, kleine Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 90 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Gürtel in Gold (Metallic-Gewebe, Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["lounge", "damen", "herbst", "morgenmantel", "satin", "robe", "gold", "eigenmarke", "loungewear"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/damen/d28-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "h28",
    name: "Trousers Slim Bundfalte",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 139,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/herren/h28-anthrazit.jpg?v=herbst22",
    description:
      "Schmale Trousers in Anthrazit mit Bundfalte und Stretch. Klare Linie, bequemer Sitz, ein Alltags-Klassiker.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Polyester/Elasthan), ca. 270 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, mittelhoher Bund, Bundfalte, Eingrifftaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "trousers", "slim", "bundfalte", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/herren/h28-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d29",
    name: "Bralette Maxirock Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Loungewear",
    type: "lounge",
    price: 149,
    color: "#d9c7a0",
    accent: "#c5a059",
    image: "img/neu/damen/d29-champagner.jpg?v=herbst22",
    description:
      "Zweiteiliges Set aus Bralette und Maxirock aus fließender Viskose in Champagner. Goldene Kordelenden fassen den Bund.",
    fabric: "Viskose (Schätzung), fließend, ca. 150 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Bralette-Top, Maxirock mit Kordel-Bund · Größen XS–XXL · Maße (Schätzung, Gr. M): Rocklänge ca. 100 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kordelenden gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["lounge", "damen", "herbst", "lounge-set", "maxirock", "viskose", "gold", "eigenmarke", "loungewear"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/damen/d29-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "h29",
    name: "Leinen Seide Hemd Stehkragen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 119,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/herren/h29-weiss.jpg?v=herbst22",
    description:
      "Leinen-Seide-Hemd in Weiß mit Stehkragen und goldenen Knöpfen. Luftig, edel, mit feiner Struktur.",
    fabric: "Leinen-Seide-Mix (Schätzung: Leinen/Seide ca. 70/30 %), ca. 140 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Stehkragen, durchgehende Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "hemd", "leinen", "stehkragen", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h29-weiss.jpg?v=herbst22" }
    ]
  },
  {
    id: "d30",
    name: "Satin Pyjama Set Schwarz",
    category: "damen",
    gender: "damen",
    audience: "Damen · Loungewear",
    type: "lounge",
    price: 139,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d30-schwarz.jpg?v=herbst22",
    description:
      "Satin-Pyjama-Set in Schwarz mit goldenen Knöpfen: langes Hemd, weite Hose. Ruhiger Glanz für Abende zu Hause.",
    fabric: "Satin (Schätzung: Polyester), ca. 110 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Hemd mit Kragen und Knopfleiste, Hose mit Gummibund, Kontrastpaspel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet, goldene Paspel",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["lounge", "damen", "herbst", "pyjama", "satin", "schlaf", "gold", "eigenmarke", "loungewear"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d30-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h30",
    name: "Leichte Bomber Jacke",
    category: "herren",
    gender: "herren",
    audience: "Herren · Jacke",
    type: "jacke",
    price: 189,
    color: "#1f3a2c",
    accent: "#c5a059",
    image: "img/neu/herren/h30-dunkelgruen.jpg?v=herbst22",
    description:
      "Leichte Bomber-Jacke in Dunkelgrün mit goldenen Zippern. Übergangsjacke mit klarer Form.",
    fabric: "Leichtes Technogewebe (Schätzung: Polyamid/Baumwolle), ca. 220 g/m² (Schätzung) · Rippstrick · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, hüftkurz, Rippkragen und -bündchen, Ärmeltasche · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 66 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontzip und Ärmelzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "herren", "herbst", "bomber", "leicht", "ubergang", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#1f3a2c", image: "img/neu/herren/h30-dunkelgruen.jpg?v=herbst22" }
    ]
  },
  {
    id: "d31",
    name: "Satin Pyjama Set Burgund",
    category: "damen",
    gender: "damen",
    audience: "Damen · Loungewear",
    type: "lounge",
    price: 139,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d31-burgund.jpg?v=herbst22",
    description:
      "Satin-Pyjama-Set in Burgund mit goldener Paspel. Weich fließend, klar geschnitten — Schlaf mit Haltung.",
    fabric: "Satin (Schätzung: Polyester), ca. 110 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Hemd mit Kragen und Knopfleiste, Hose mit Gummibund, Kontrastpaspel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Goldene Paspel und Zierknöpfe",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["lounge", "damen", "herbst", "pyjama", "satin", "schlaf", "gold", "eigenmarke", "loungewear"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d31-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "h31",
    name: "Plissierte Trousers",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 139,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/neu/herren/h31-braun.jpg?v=herbst22",
    description:
      "Plissierte Trousers aus Wollmix in Braun mit hoher Bundfalte und goldener Schließe. Fließender Fall, ruhige Eleganz.",
    fabric: "Woll-Mischgewebe (Schätzung: Wolle/Viskose/Polyester), ca. 260 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular bis Wide, hoher Bund, Bundfalten, Plisseefalten · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundschließe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "plissee", "trousers", "bundfalte", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/neu/herren/h31-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d32",
    name: "Strick Lounge Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Loungewear",
    type: "lounge",
    price: 189,
    color: "#8b7d6e",
    accent: "#c5a059",
    image: "img/neu/damen/d32-taupe.jpg?v=herbst22",
    description:
      "Lounge-Set aus Pullover und Hose in Taupe, gefertigt im Merino-Mix. Weich, warm, nie nachlässig.",
    fabric: "Strick (Schätzung: Merino-Mix, Wolle/Polyamid ca. 40/60 %), ca. 330 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Pullover mit Rundhals, Hose mit Kordelbund und geradem Bein · Größen XS–XXL · Maße (Schätzung, Gr. M): Hose: Innenbeinlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezente Goldkappen an der Hosenkordel (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["lounge", "damen", "herbst", "lounge-set", "merino", "strick", "gold", "eigenmarke", "loungewear"],
    colors: [
      { id: "taupe", name: "Taupe", hex: "#8b7d6e", image: "img/neu/damen/d32-taupe.jpg?v=herbst22" }
    ]
  },
  {
    id: "h32",
    name: "Plissiertes Hemd Stehkragen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 119,
    color: "#5c3a22",
    accent: "#c5a059",
    image: "img/neu/herren/h32-braun.jpg?v=herbst22",
    description:
      "Plissiertes Hemd aus Seiden-Viskose in Braun mit Stehkragen und goldenen Knöpfen. Struktur trifft Fluss.",
    fabric: "Seiden-Viskose (Schätzung: Seide/Viskose ca. 30/70 %), plissiert, ca. 120 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Stehkragen, Plisseefalten, durchgehende Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "hemd", "plissee", "stehkragen", "gold", "eigenmarke"],
    colors: [
      { id: "braun", name: "Braun", hex: "#5c3a22", image: "img/neu/herren/h32-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d33",
    name: "Cropped Zip Hoodie",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hoodie",
    type: "hoodie",
    price: 159,
    color: "#efe6d2",
    accent: "#c5a059",
    image: "img/neu/damen/d33-cream.jpg?v=herbst22",
    description:
      "Cropped Zip-Hoodie aus Cashmere-Mix in Cream. Der goldene Zipper führt die Linie vom Kragen bis zum kurzen Saum.",
    fabric: "Cashmere-Mix (Schätzung: Baumwolle/Polyamid/Cashmere), ca. 380 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Cropped, Kapuze, durchgehender Zip, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 50 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontreißverschluss gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hoodie", "damen", "herbst", "zip", "cashmere", "crop", "gold", "eigenmarke"],
    colors: [
      { id: "cream", name: "Cream", hex: "#efe6d2", image: "img/neu/damen/d33-cream.jpg?v=herbst22" }
    ]
  },
  {
    id: "h33",
    name: "Luxe Merzerisiert Tee",
    category: "herren",
    gender: "herren",
    audience: "Herren · T-Shirt",
    type: "tee",
    price: 79,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/herren/h33-burgund.jpg?v=herbst22",
    description:
      "Merzerisiertes Luxe-T-Shirt mit Seidenglanz — in Burgund oder Schwarz. Feiner Jersey, klare Linie, ein Basic mit Haltung.",
    fabric: "Merzerisierte Baumwolle (Schätzung), ca. 190 g/m² (Schätzung), seidiger Glanz durch Veredlung · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Rundhals, kurzer Arm · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 72 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezent: kleines goldenes Label im Nacken (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tee", "herren", "herbst", "merzerisiert", "basic", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h33-burgund.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h33-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d34",
    name: "Wide-Leg Loungehose",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 109,
    color: "#3a3d42",
    accent: "#c5a059",
    image: "img/neu/damen/d34-anthrazit.jpg?v=herbst22",
    description:
      "Wide-Leg-Loungehose in Anthrazit mit hoher Taille und weichem, fließendem Stoff. Vom Sofa bis zum Spaziergang.",
    fabric: "Jersey-Mix (Schätzung: Viskose/Polyamid/Elasthan), weich, ca. 260 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wide Leg, High Waist, breiter Gummibund, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleines goldenes Label am Bund (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "damen", "herbst", "loungehose", "wide-leg", "komfort", "gold", "eigenmarke"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/damen/d34-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "h34",
    name: "Strick Set Pullover und Jogger",
    category: "herren",
    gender: "herren",
    audience: "Herren · Set",
    type: "set",
    price: 219,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h34-schwarz.jpg?v=herbst22",
    description:
      "Strick-Set aus Pullover und Jogger in Schwarz, Merino-Mix, mit goldenen Zippern. Eine ruhige Einheit für Reise und Alltag.",
    fabric: "Strick (Schätzung: Merino-Mix, Wolle/Polyamid ca. 40/60 %), ca. 340 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Pullover mit Halszip, Jogger mit Gummibund und Beinbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Jogger: Innenbeinlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip und Taschenzipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["set", "herren", "herbst", "strick-set", "merino", "jogger", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h34-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d35",
    name: "Rib Midikleid Gold Zip",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d35-schwarz.jpg?v=herbst22",
    description:
      "Figurnahes Rib-Midikleid in Schwarz mit goldenem Zip am Hals. Schlicht, präzise, ein Kleid für viele Gelegenheiten.",
    fabric: "Feinripp-Jersey (Schätzung: Viskose/Polyamid/Elasthan), elastisch, ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurnah, Midi, langer Arm, Stehkragen mit Halszip · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 112 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Halszip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["kleid", "damen", "herbst", "rib", "midi", "zip", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d35-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h35",
    name: "Aero Polo Feinstrick",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 99,
    color: "#8b7d6e",
    accent: "#c5a059",
    image: "img/neu/herren/h35-taupe.jpg?v=herbst22",
    description:
      "Aero Polo aus Feinstrick in Taupe mit goldenem Mini-Zip. Luftig, leicht und schmal.",
    fabric: "Feinstrick (Schätzung: Baumwolle/Viskose/Polyamid), ca. 200 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, kurzer Arm, Polokragen mit Halszip · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 69 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Mini-Zip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "polo-strick", "feinstrick", "aero", "gold", "eigenmarke"],
    colors: [
      { id: "taupe", name: "Taupe", hex: "#8b7d6e", image: "img/neu/herren/h35-taupe.jpg?v=herbst22" }
    ]
  },
  {
    id: "d36",
    name: "Wickelbody Langarm",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d36-dunkelbraun.jpg?v=herbst22",
    description:
      "Wickelbody mit langem Arm in Dunkelbraun. Weiche Wickeloptik, ruhig und dezent im Auftritt.",
    fabric: "Jersey (Schätzung: Modal/Elasthan ca. 92/8 %), weich, ca. 200 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Wickel-Ausschnitt, langer Arm, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Kleine Goldschließe am Wickelverschluss (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["dessous", "damen", "herbst", "body", "wickel", "longsleeve", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/neu/damen/d36-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "h36",
    name: "Pique Overshirt",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 149,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/herren/h36-beige.jpg?v=herbst22",
    description:
      "Pique-Overshirt aus schwerer Baumwolle in Beige mit goldenen Druckknöpfen. Eine Brusttasche, strukturierte Oberfläche.",
    fabric: "Schwere Baumwoll-Piqué (Schätzung), ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Hemdkragen, Brusttasche, Druckknopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "overshirt", "pique", "baumwolle", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/herren/h36-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d37",
    name: "Langer Strick Cardigan",
    category: "damen",
    gender: "damen",
    audience: "Damen · Strick",
    type: "strick",
    price: 143,
    oldPrice: 179,
    saleDemo: true,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/damen/d37-beige.jpg?v=herbst22",
    description:
      "Langer Strick-Cardigan in Beige mit goldenen Knöpfen. Weiter Fall, weicher Griff — Layering für kühle Tage.",
    fabric: "Strick (Schätzung: Wolle/Polyamid/Alpaka-Mix ca. 40/40/20 %), ca. 360 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Lang, offener Schnitt oder geknöpft, aufgesetzte Taschen, Rippbündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 95 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "damen", "herbst", "cardigan", "lang", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/damen/d37-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "h37",
    name: "Carpenter Jeans Black",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 149,
    color: "#2c2c2e",
    accent: "#c5a059",
    image: "img/neu/herren/h37-washedblack.jpg?v=herbst22",
    description:
      "Gerade geschnittene Carpenter Jeans in Washed Black mit goldenen Nieten. Robust, klar, unprätentiös.",
    fabric: "Denim (Schätzung: 100 % Baumwolle), ca. 380 g/m² (Schätzung), Washed Black · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Straight Leg, mittelhoher Bund, Hammerschlaufe, aufgesetzte Taschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Nieten und Jeansknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "jeans", "carpenter", "denim", "nieten", "gold", "eigenmarke"],
    colors: [
      { id: "washedblack", name: "Washed Black", hex: "#2c2c2e", image: "img/neu/herren/h37-washedblack.jpg?v=herbst22" }
    ]
  },
  {
    id: "d38",
    name: "Rippstrick Weste Crop",
    category: "damen",
    gender: "damen",
    audience: "Damen · Weste",
    type: "weste",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d38-schwarz.jpg?v=herbst22",
    description:
      "Gerippte, cropped Strickweste mit Kragen und Goldzip in Schwarz. Der Layering-Moment über Bluse und Rollkragen.",
    fabric: "Rippstrick (Schätzung: Viskose/Polyamid/Wolle), ca. 320 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Cropped, ärmellos, Kragen, Frontzip · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 48 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontzip gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["weste", "damen", "herbst", "strickweste", "rippstrick", "crop", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d38-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h38",
    name: "Stretch Komforthose Anzuglook",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 129,
    color: "#4a4a4d",
    accent: "#c5a059",
    image: "img/neu/herren/h38-dunkelgrau.jpg?v=herbst22",
    description:
      "Stretch-Komforthose im Anzug-Look in Dunkelgrau mit Bundfalte. Komfort wie ein Jogger, Haltung wie ein Anzug.",
    fabric: "Stretchgewebe (Schätzung: Polyester/Viskose/Elasthan), ca. 250 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, Komfortbund, Bundfalte, Eingrifftaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "herren", "herbst", "komforthose", "anzuglook", "stretch", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelgrau", name: "Dunkelgrau", hex: "#4a4a4d", image: "img/neu/herren/h38-dunkelgrau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d39",
    name: "Satin Schlafmaske Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Accessoire",
    type: "accessoire",
    price: 39,
    color: "#c5a059",
    accent: "#c5a059",
    image: "img/neu/damen/d39-gold.jpg?v=herbst22",
    description:
      "Schlafmaske und Haargummi im Satin-Set — in Gold oder Schwarz. Ein kleines Stück Ruhe mit weichem Glanz.",
    fabric: "Satin (Schätzung: Polyester), Maske mit Wattefüllung, elastisches Band · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Einheitsgröße · Maske ca. 20 × 9 cm, Haargummi ca. 6 cm Ø (Schätzung)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Goldene Zierkante bzw. Gold-Satin (Annahme)",
    sizes: ["Einheitsgröße"],
    tags: ["accessoire", "damen", "herbst", "schlafmaske", "haargummi", "satin", "geschenk", "gold", "eigenmarke"],
    colors: [
      { id: "gold", name: "Gold", hex: "#c5a059", image: "img/neu/damen/d39-gold.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d39-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "h39",
    name: "Leinen Longsleeve Perlmutt",
    category: "herren",
    gender: "herren",
    audience: "Herren · Oberteil / Hemd",
    type: "oberteil",
    price: 89,
    color: "#a58b62",
    accent: "#c5a059",
    image: "img/neu/herren/h39-oak.jpg?v=herbst22",
    description:
      "Leinen-Longsleeve in Oak mit Perlmuttknöpfen. Leicht, natürlich, mit feiner Struktur.",
    fabric: "Leinen (Schätzung: Leinen/Baumwolle ca. 80/20 %), ca. 150 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Regular, Hemdkragen oder Grandad, Knopfleiste · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 74 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Dezent: goldene Ziernaht an der Leiste (Annahme); Knöpfe in Perlmutt",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["oberteil", "herren", "herbst", "leinen", "longsleeve", "perlmutt", "gold", "eigenmarke"],
    colors: [
      { id: "oak", name: "Oak", hex: "#a58b62", image: "img/neu/herren/h39-oak.jpg?v=herbst22" }
    ]
  },
  {
    id: "d40",
    name: "Kuschelmantel Kurz",
    category: "damen",
    gender: "damen",
    audience: "Damen · Mantel",
    type: "mantel",
    price: 186,
    oldPrice: 219,
    saleDemo: true,
    color: "#efe6d2",
    accent: "#c5a059",
    image: "img/neu/damen/d40-creme.jpg?v=herbst22",
    description:
      "Weicher, kurzer Kuschelmantel in Creme mit goldenen Druckknöpfen. Wie eine Decke zum Anziehen, mit klarer Silhouette.",
    fabric: "Teddy-Fleece / Sherpa (Schätzung: Polyester), ca. 420 g/m² (Schätzung) · Satinfutter · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Kurz, relaxed, Umlegekragen, Seitentaschen · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Druckknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["mantel", "damen", "herbst", "teddy", "sherpa", "kurz", "gold", "eigenmarke"],
    colors: [
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/damen/d40-creme.jpg?v=herbst22" }
    ]
  },
  {
    id: "h40",
    name: "Wildleder Sneaker Gold",
    category: "herren",
    gender: "herren",
    audience: "Herren · Schuhe",
    type: "schuhe",
    price: 189,
    color: "#b09670",
    accent: "#c5a059",
    image: "img/neu/herren/h40-beige.jpg?v=herbst22",
    description:
      "Wildleder-Sneaker in Beige mit goldener Ferse und goldenen Ösen. Schlichte Form, edle Details.",
    fabric: "Wildleder bzw. Veloursleder (Schätzung), Futter Textil, Laufsohle Gummi, Cupsole · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Low-Top, Schnürung, gepolsterte Zunge · EU-Größen 40–46, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Fersenkappe und Ösen gold gebürstet",
    featured: true,
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    defaultSize: "42",
    sizeHint: "EU-Größen 40–46",
    tags: ["schuhe", "herren", "herbst", "sneaker", "wildleder", "low-top", "gold", "eigenmarke"],
    colors: [
      { id: "beige", name: "Beige", hex: "#b09670", image: "img/neu/herren/h40-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d41",
    name: "Henley-Body",
    category: "damen",
    gender: "damen",
    audience: "Damen · Body",
    type: "body",
    price: 89,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d41-schwarz.jpg?v=herbst22",
    description:
      "Langärmliger, gerippter Henley-Body in Schwarz mit drei goldenen Knöpfen an der Leiste und kurzer Boy-Shorts-Form. Schlicht im Schnitt, mit einem feinen Goldakzent am Ausschnitt.",
    fabric: "Rippjersey (Schätzung: Baumwolle/Modal/Elasthan ca. 92/8 %), ca. 220 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Henley-Knopfleiste, langer Arm, kurze Boy-Shorts-Form, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: drei Zierknöpfe gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["body", "damen", "herbst", "henley", "rippjersey", "boyshorts", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d41-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d42",
    name: "Slim-Zipjacke",
    category: "damen",
    gender: "damen",
    audience: "Damen · Jacke",
    type: "jacke",
    price: 139,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d42-dunkelbraun.jpg?v=herbst22",
    description:
      "Tailliert geschnittene Stretch-Zipjacke in Schokobraun mit goldenem Reißverschluss, Stehkragen und Daumenlöchern. Sportlich im Griff, elegant in der Linie. Erhältlich in Schokobraun, Schwarz, Dunkelblau sowie in den Mustern Cheetah (tonale, längliche Punkte in cremigem Graubraun) und Leopard in Grau und Beige. Bilder sind KI-Visualisierungen.",
    fabric: "Stretch-Jersey bzw. Scuba-Mix (Schätzung: Polyamid/Viskose/Elasthan), ca. 300 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, tailliert, Stehkragen, durchgehender Frontzip, Daumenlöcher an den Bündchen · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 56 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Frontzip und Zipper gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["jacke", "damen", "herbst", "zipjacke", "stretch", "slim", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d42-dunkelbraun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d42-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1f2a44", image: "img/neu/damen/d42-dunkelblau.jpg?v=herbst22" },
      { id: "cheetah", name: "Cheetah", hex: "#cbbfae", image: "img/neu/damen/d42-cheetah.jpg?v=herbst22" },
      { id: "leopard-grau", name: "Leopard Grau", hex: "#9a9a96", image: "img/neu/damen/d42-leopard-grau.jpg?v=herbst22" },
      { id: "leopard-beige", name: "Leopard Beige", hex: "#c2a57a", image: "img/neu/damen/d42-leopard-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d43",
    name: "Flare-Hose",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 119,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d43-dunkelbraun.jpg?v=herbst22",
    description:
      "Hochtaillierte Hose mit ausgestelltem Bein in Schokobraun. Ein schmaler Gürtel mit goldener Schnalle betont die Taille und verlängert die Silhouette. Erhältlich in Schokobraun, Schwarz, Dunkelblau sowie in den Mustern Cheetah (tonale, längliche Punkte in cremigem Graubraun) und Leopard in Grau und Beige. Bilder sind KI-Visualisierungen.",
    fabric: "Stretchgewebe (Schätzung: Polyester/Viskose/Elasthan), ca. 280 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "High-Waist, eng bis zum Knie, ausgestelltes Bein, Gürtelschlaufen mit schmalem Gürtel · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 79 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Gürtelschnalle gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["hose", "damen", "herbst", "flare", "highwaist", "stretch", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d43-dunkelbraun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d43-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1f2a44", image: "img/neu/damen/d43-dunkelblau.jpg?v=herbst22" },
      { id: "cheetah", name: "Cheetah", hex: "#cbbfae", image: "img/neu/damen/d43-cheetah.jpg?v=herbst22" },
      { id: "leopard-grau", name: "Leopard Grau", hex: "#9a9a96", image: "img/neu/damen/d43-leopard-grau.jpg?v=herbst22" },
      { id: "leopard-beige", name: "Leopard Beige", hex: "#c2a57a", image: "img/neu/damen/d43-leopard-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d44",
    name: "Slim-Tee Mercerized",
    category: "damen",
    gender: "damen",
    audience: "Damen · T-Shirt",
    type: "tee",
    price: 69,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d44-dunkelbraun.jpg?v=herbst22",
    description:
      "Schmal geschnittenes Crew-Tee aus mercerisierter Baumwolle in Schokobraun mit feinem Glanz und gold-tanfarbenen Ziernähten an den Säumen.",
    fabric: "Mercerisierte Baumwolle (Schätzung: 100 % Baumwolle, Single Jersey), ca. 190 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, Rundhals, kurzer Arm, Ziernähte Gold-Tan · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 62 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: keine Metallteile; Ziernähte in Gold-Tan (Garn, Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["tee", "oberteil", "damen", "herbst", "mercerized", "baumwolle", "slim", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d44-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d45",
    name: "Stiletto-Stiefel kniehoch",
    category: "damen",
    gender: "damen",
    audience: "Damen · Schuhe",
    type: "schuhe",
    price: 249,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d45-dunkelbraun.jpg?v=herbst22",
    description:
      "Kniehohe Stiletto-Stiefel in Schokobraun oder Schwarz mit schmalem Knöchelriemen. Die goldene Schnalle setzt den einzigen, dafür feinen Akzent.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Textil, Laufsohle Leder/Gummi · Absatz ca. 10 cm (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Kniehoch, spitze Kappe, Stiletto-Absatz, Knöchelriemen mit Schnalle, Seitenreißverschluss (Annahme) · EU-Größen 36–42, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöchelschnalle gold gebürstet",
    defaultSize: "38",
    sizeHint: "EU-Größen 36–42",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    tags: ["schuhe", "damen", "herbst", "stiefel", "stiletto", "kniehoch", "leder", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d45-dunkelbraun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d45-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d46",
    name: "Kniestrümpfe Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Strümpfe",
    type: "dessous",
    price: 29,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d46-schwarz.jpg?v=herbst22",
    description:
      "Zarte, transparente Kniestrümpfe mit breitem Spitzenabschluss und einer kleinen goldenen Brosche als Charm — in Schwarz, Schokobraun und den Juwelentönen Burgunder, Dunkelblau, Dunkelgrün und Smaragd. Passend zu den Dessous-Sets der Linie (d47–d64). Dezent und elegant, zu Stiefeln und Loafern. Hinweis: Für die vier Juwelentöne zeigt das Bild alle Juwelentöne zusammen. Auch in edlem Violett mit Goldakzenten (Violett-Bild zeigt die Variante mit Spitzenband und Charm).",
    fabric: "Feinstrick transparent (Schätzung: Polyamid/Elasthan ca. 85/15 %, ca. 15 den), Spitzenbund (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Kniehoch, transparent, breiter Spitzenabschluss, Charm am Bund · Größen S/M und L/XL · Maße (Schätzung): Schafthöhe ca. 45 cm · Bild der Juwelentöne zeigt alle vier Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: kleiner Charm bzw. Brosche gold gebürstet, nickelfrei zu prüfen",
    defaultSize: "S/M",
    sizeHint: "Größen S/M und L/XL",
    sizes: ["S/M", "L/XL"],
    tags: ["dessous", "strumpf", "kniestrumpf", "damen", "herbst", "spitze", "transparent", "gold", "eigenmarke", "juwelentöne", "violett"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d46-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d46-dunkelbraun.jpg?v=herbst22" },
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d46-juwelentoene.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d46-juwelentoene.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d46-juwelentoene.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d46-juwelentoene.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d46-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d47",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d47-braun.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Braun mit Blumenstickerei in Gold — BH und String. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Braun mit String.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; String-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "string"],
    colors: [
      { id: "braun", name: "Braun", hex: "#3b2616", image: "img/neu/damen/d47-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d48",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d48-schwarz.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Schwarz mit Blumenstickerei in Gold — BH und Tanga. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Schwarz mit Tanga.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Tanga-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "tanga"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d48-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d49",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d49-dunkelblau.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Dunkelblau mit Blumenstickerei in Gold — BH und Brazilian. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Dunkelblau mit Brazilian.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Brazilian-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "brazilian"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d49-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d50",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#14301f",
    accent: "#c5a059",
    image: "img/neu/damen/d50-dunkelgruen.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Dunkelgrün mit Blumenstickerei in Gold — BH und String. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Dunkelgrün mit String.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; String-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "string"],
    colors: [
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d50-dunkelgruen.jpg?v=herbst22" }
    ]
  },
  {
    id: "d51",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#0f7a55",
    accent: "#c5a059",
    image: "img/neu/damen/d51-smaragd.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Smaragd mit Blumenstickerei in Gold — BH und Tanga. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Smaragd mit Tanga.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Tanga-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "tanga"],
    colors: [
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d51-smaragd.jpg?v=herbst22" }
    ]
  },
  {
    id: "d52",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#b3121f",
    accent: "#c5a059",
    image: "img/neu/damen/d52-rot.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Rot mit Blumenstickerei in Gold — BH und Brazilian. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Rot mit Brazilian.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Brazilian-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "brazilian"],
    colors: [
      { id: "rot", name: "Rot", hex: "#b3121f", image: "img/neu/damen/d52-rot.jpg?v=herbst22" }
    ]
  },
  {
    id: "d53",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d53-burgunder.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in Burgunder mit Blumenstickerei in Gold — BH und String. Zurückhaltend im Schnitt, mit goldenen Akzenten an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Burgunder mit String.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; String-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "string"],
    colors: [
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d53-burgunder.jpg?v=herbst22" }
    ]
  },
  {
    id: "d54",
    name: "Slip-Trio Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 24,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d54-schwarz.jpg?v=herbst22",
    description:
      "Feine schwarze Spitzen-Slips mit Blumenstickerei in Gold — als String, Tanga oder Brazilian einzeln für 24 € oder im Dreierpack für 59 €. Leise im Auftritt, mit goldenem Detail am Bund. Auch in edlem Violett mit Goldakzenten.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slips in drei Formen: String, Tanga, Brazilian · Stückpreis 24 €, Dreierpack 59 € · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Farbe, Form und Pack wählen · XS–XXL",
    colorLabel: "Farbe / Form / Pack",
    colorsAsText: true,
    tags: ["dessous", "damen", "herbst", "slip", "string", "tanga", "brazilian", "dreierpack", "spitze", "dentelle", "gold", "eigenmarke", "violett"],
    colors: [
      { id: "string", name: "Schwarz · String · 24 €", hex: "#1c1c1e", image: "img/neu/damen/d54-schwarz.jpg?v=herbst22", price: 24 },
      { id: "tanga", name: "Schwarz · Tanga · 24 €", hex: "#1c1c1e", image: "img/neu/damen/d54-schwarz.jpg?v=herbst22", price: 24 },
      { id: "brazilian", name: "Schwarz · Brazilian · 24 €", hex: "#1c1c1e", image: "img/neu/damen/d54-schwarz.jpg?v=herbst22", price: 24 },
      { id: "dreierpack", name: "Schwarz · Dreierpack (String, Tanga, Brazilian) · 59 €", hex: "#1c1c1e", image: "img/neu/damen/d54-schwarz.jpg?v=herbst22", price: 59 },
      { id: "violett-string", name: "Violett · String · 24 €", hex: "#4b2a6b", image: "img/neu/damen/d54-violett.jpg?v=herbst22", price: 24 },
      { id: "violett-tanga", name: "Violett · Tanga · 24 €", hex: "#4b2a6b", image: "img/neu/damen/d54-violett.jpg?v=herbst22", price: 24 },
      { id: "violett-brazilian", name: "Violett · Brazilian · 24 €", hex: "#4b2a6b", image: "img/neu/damen/d54-violett.jpg?v=herbst22", price: 24 },
      { id: "violett-dreierpack", name: "Violett · Dreierpack (String, Tanga, Brazilian) · 59 €", hex: "#4b2a6b", image: "img/neu/damen/d54-violett.jpg?v=herbst22", price: 59 }
    ]
  },
  {
    id: "d55",
    name: "Art-Déco-Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d55-schwarz.jpg?v=herbst22",
    description:
      "Set aus BH und Tanga in Schwarz mit Art-Déco-Muster in Gold: klare, geometrische Linien statt Blumen. Edel und zurückhaltend, mit kräftigem Goldakzent. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit metallischem Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), Haken-Verschluss; Tanga, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen gold gebürstet; Art-Déco-Muster in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "set", "artdeco", "tanga", "spitze", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz/Gold", hex: "#1c1c1e", image: "img/neu/damen/d55-schwarz.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d55-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d56",
    name: "Jacquard-Set Smaragd/Navy",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 109,
    color: "#0f7a55",
    accent: "#c5a059",
    image: "img/neu/damen/d56-smaragd.jpg?v=herbst22",
    description:
      "Zweifarbiges Jacquard-Set aus BH und Brazilian in Smaragd und Navy mit Blumenstickerei in Gold. Ein ruhiger Farbkontrast mit feinen Goldakzenten.",
    fabric: "Jacquard-Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), Haken-Verschluss; Brazilian-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "set", "jacquard", "brazilian", "spitze", "gold", "eigenmarke"],
    colors: [
      { id: "smaragd", name: "Smaragd/Navy", hex: "#0f7a55", image: "img/neu/damen/d56-smaragd.jpg?v=herbst22" }
    ]
  },
  {
    id: "d57",
    name: "Spitzen-Body Plunge",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 119,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d57-schwarz.jpg?v=herbst22",
    description:
      "Spitzen-Body in Schwarz mit tiefem Plunge-Ausschnitt und Blumenstickerei in Gold. Hoch geschnittene Beinlinie, Spitzenkante mit Bogenabschluss und kleine goldene Schieber an der Hüfte — ruhig im Auftritt, edel im Detail.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer V-Ausschnitt, schmale Träger, hoher Beinausschnitt, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: kleine Schieber gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "body", "spitzen-body", "plunge", "spitze"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d57-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d58",
    name: "Bralette & High-Waist Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d58-burgunder.jpg?v=herbst22",
    description:
      "Zweiteiliges Set in Burgunder: Triangel-Bralette und hoch taillierter Slip, beide mit feiner Blumenstickerei in Gold. Bequem, schmeichelnd und mit leisem Goldakzent. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Bralette ohne Bügel (Annahme), verstellbare Träger, Rückenverschluss; High-Waist-Slip mit vollem Beinschnitt · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "set", "bralette", "high-waist", "spitze"],
    colors: [
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d58-burgunder.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d58-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d59",
    name: "Plunge-Set Smaragd",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 95,
    color: "#0f7a55",
    accent: "#c5a059",
    image: "img/neu/damen/d59-smaragd.jpg?v=herbst22",
    description:
      "Plunge-Set in tiefem Smaragd: BH mit Bügeln und String, verziert mit Goldstickerei und einem kleinen goldenen Charm am Mittelsteg. Klar geschnitten, mit feinem Glanz. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Goldstickerei (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Plunge-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; String, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: kleiner Charm am Mittelsteg und Verschlusshäkchen gold gebürstet",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "set", "plunge", "string", "spitze"],
    colors: [
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d59-smaragd.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d59-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d60",
    name: "Teddy Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 129,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d60-burgunder.jpg?v=herbst22",
    description:
      "Teddy in Burgunder mit hohem Ausschnitt, dezenten Cut-outs an der Taille und Blumenstickerei in Gold. Feine Spitzenkante am Beinausschnitt — verführerisch im Detail, zurückhaltend in der Linie. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Teddy-Form, hoher Ausschnitt, Cut-outs an der Taille, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "teddy", "body", "spitze", "dentelle"],
    colors: [
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d60-burgunder.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d60-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d61",
    name: "Strumpfhalter-Set",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 139,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d61-schwarz.jpg?v=herbst22",
    description:
      "Dreiteiliges Set in Schwarz: Balconette-BH, Tanga und breiter Strumpfhaltergürtel, alle mit Goldstickerei; der Gürtel hat vier goldene Clips. Strümpfe sind nicht enthalten. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Goldstickerei (Annahme), Futter Baumwolle; Strumpfhaltergürtel mit Elastikbändern · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), Tanga, Strumpfhaltergürtel mit 4 Clips (Annahme) · Strümpfe nicht enthalten · BH-Größen 70A–90D, Slip/Gürtel passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: 4 Strumpfhalter-Clips und Verschlusshäkchen gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL · ohne Strümpfe",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "set", "strumpfhalter", "balconette", "tanga", "spitze"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d61-schwarz.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d61-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d62",
    name: "Chemise & Tanga Navy/Gold",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 119,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d62-dunkelblau.jpg?v=herbst22",
    description:
      "Chemise und Tanga in Dunkelblau mit feinen goldenen Trägern und breiter Goldspitze an Ausschnitt und Saum. Eine kleine goldene Schleife setzt den Akzent — edel und leicht. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Satin (Schätzung: Polyester/Elasthan) mit Goldspitze (Annahme), Tanga Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Chemise, kurze Länge, schmale Träger, Spitzenbesatz; Tanga · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 62 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: goldene Schleife und Träger-Schieber gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "chemise", "tanga", "set", "satin", "spitze"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d62-dunkelblau.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d62-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d63",
    name: "Satin-Set Schokobraun",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 99,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d63-dunkelbraun.jpg?v=herbst22",
    description:
      "Satin-Set in Schokobraun: Balconette-BH und Brazilian, gerahmt von zarter Goldspitze mit feinen Blumenakzenten. Warm, weich und dezent. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Satin-Stretch (Schätzung: Polyamid/Elasthan) mit Goldspitze (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Brazilian-Slip · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen gold gebürstet; Goldspitze (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "set", "satin", "balconette", "brazilian", "spitze"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d63-dunkelbraun.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d63-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d64",
    name: "Bustier-Set Dunkelgrün",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 149,
    color: "#14301f",
    accent: "#c5a059",
    image: "img/neu/damen/d64-dunkelgruen.jpg?v=herbst22",
    description:
      "Bustier-Set in Dunkelgrün aus Samt und Spitze mit goldenen Haken an der Front und vertikaler Goldstickerei, dazu ein passender Tanga. Eine ruhige, aufrechte Silhouette mit Haltung. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Samt und Spitze (Schätzung: Polyamid/Elasthan) mit Goldstickerei (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Bustier mit Haken-Leiste vorn und Stäbchen (Annahme), Tanga · Größen XS–XXL (Bustier nach Brust-/Taillenumfang, Passform am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Haken-Leiste gold gebürstet; Goldstickerei (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "damen", "herbst", "gold", "eigenmarke", "bustier", "set", "samt", "tanga", "spitze"],
    colors: [
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d64-dunkelgruen.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d64-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "h41",
    name: "Ankle Socks VELORA",
    category: "herren",
    gender: "herren",
    audience: "Herren · Socken",
    type: "socken",
    price: 14,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h41-alle.jpg?v=herbst22",
    description:
      "Kurze Sneaker-Socken mit gerippter Manschette und dem VELORA-Schriftzug in goldener Stickerei. Erhältlich in Weiß, Schwarz, Dunkelblau und Braun. Preis pro Paar, auch als Zweierpack denkbar. Das Bild zeigt alle Farben zusammen.",
    fabric: "Baumwollmix (Schätzung: Baumwolle/Polyamid/Elasthan ca. 78/20/2 %), Rippbündchen · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knöchelhoch, elastisches Rippbündchen · Größen 39–42 und 43–46 · Preis pro Paar · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: VELORA-Schriftzug in goldener Stickerei (Annahme)",
    sizes: ["39–42", "43–46"],
    defaultSize: "39–42",
    sizeHint: "Größen 39–42 und 43–46",
    tags: ["socken", "herbst", "gold", "eigenmarke", "herren", "ankle", "sneakersocken"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h41-alle.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h41-alle.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1a2a5a", image: "img/neu/herren/h41-alle.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a3020", image: "img/neu/herren/h41-alle.jpg?v=herbst22" }
    ]
  },
  {
    id: "d65",
    name: "Ankle Socks VELORA",
    category: "damen",
    gender: "damen",
    audience: "Damen · Socken",
    type: "socken",
    price: 12,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d65-alle.jpg?v=herbst22",
    description:
      "Kurze Socken mit feiner Rippstruktur und dem VELORA-Schriftzug in goldener Stickerei am Knöchel. Erhältlich in Weiß, Schwarz, Dunkelblau und Braun. Preis pro Paar, auch als Zweierpack denkbar. Das Bild zeigt alle Farben zusammen.",
    fabric: "Baumwollmix (Schätzung: Baumwolle/Polyamid/Elasthan ca. 78/20/2 %), Rippstruktur · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knöchelhoch, feine Rippe, elastisches Bündchen · Größen 35–38 und 39–42 · Preis pro Paar · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: VELORA-Schriftzug in goldener Stickerei (Annahme)",
    sizes: ["35–38", "39–42"],
    defaultSize: "35–38",
    sizeHint: "Größen 35–38 und 39–42",
    tags: ["socken", "herbst", "gold", "eigenmarke", "damen", "ankle", "sneakersocken"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d65-alle.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d65-alle.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1a2a5a", image: "img/neu/damen/d65-alle.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a3020", image: "img/neu/damen/d65-alle.jpg?v=herbst22" }
    ]
  },
  {
    id: "h42",
    name: "Crew Socks VELORA",
    category: "herren",
    gender: "herren",
    audience: "Herren · Socken",
    type: "socken",
    price: 16,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h42-alle.jpg?v=herbst22",
    description:
      "Hohe Crew-Socken mit gerippter Schaftpartie und einem goldenen Krönchen mit VELORA-Schriftzug in Stickerei. Erhältlich in Weiß, Schwarz, Dunkelblau und Braun. Preis pro Paar. Das Bild zeigt alle Farben zusammen.",
    fabric: "Baumwollmix (Schätzung: Baumwolle/Polyamid/Elasthan ca. 78/20/2 %), Rippschaft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wadenhoch (Crew), elastischer Rippschaft · Größen 39–42 und 43–46 · Preis pro Paar · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: goldenes Krönchen mit VELORA-Schriftzug in Stickerei (Annahme)",
    sizes: ["39–42", "43–46"],
    defaultSize: "39–42",
    sizeHint: "Größen 39–42 und 43–46",
    tags: ["socken", "herbst", "gold", "eigenmarke", "herren", "crew", "hohe-socken"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h42-alle.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h42-alle.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1a2a5a", image: "img/neu/herren/h42-alle.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a3020", image: "img/neu/herren/h42-alle.jpg?v=herbst22" }
    ]
  },
  {
    id: "d66",
    name: "Crew Socks VELORA",
    category: "damen",
    gender: "damen",
    audience: "Damen · Socken",
    type: "socken",
    price: 14,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d66-alle.jpg?v=herbst22",
    description:
      "Hohe Crew-Socken mit feiner Rippe am Schaft und dem VELORA-Schriftzug in goldener Stickerei. Erhältlich in Weiß, Schwarz, Dunkelblau und Braun. Preis pro Paar. Das Bild zeigt alle Farben zusammen.",
    fabric: "Baumwollmix (Schätzung: Baumwolle/Polyamid/Elasthan ca. 78/20/2 %), Rippschaft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wadenhoch (Crew), elastischer Rippschaft · Größen 35–38 und 39–42 · Preis pro Paar · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: VELORA-Schriftzug in goldener Stickerei (Annahme)",
    sizes: ["35–38", "39–42"],
    defaultSize: "35–38",
    sizeHint: "Größen 35–38 und 39–42",
    tags: ["socken", "herbst", "gold", "eigenmarke", "damen", "crew", "hohe-socken"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d66-alle.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d66-alle.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1a2a5a", image: "img/neu/damen/d66-alle.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a3020", image: "img/neu/damen/d66-alle.jpg?v=herbst22" }
    ]
  },
  {
    id: "d67",
    name: "Woll-Socken Zopfstrick",
    category: "damen",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "socken",
    price: 29,
    color: "#3a3a3d",
    accent: "#c5a059",
    image: "img/neu/damen/d67-alle.jpg?v=herbst22",
    description:
      "Warme Woll-Socken im Zopfmuster mit einem goldenen Faden im Bündchen und einem kleinen VELORA-Label (schwarze Schrift auf goldenem Etikett). Erhältlich in Anthrazit, Creme, Dunkelblau und Dunkelbraun. Unisex, Preis pro Paar. Das Bild zeigt alle Farben zusammen.",
    fabric: "Wollmischung (Schätzung: Wolle/Polyamid ca. 60/40 %), Zopfstrick, Goldfaden im Bündchen (Annahme) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Wadenhoch bis knapp unters Knie, Zopfmuster, Rippbündchen · Unisex, Größen 35–38, 39–42 und 43–46 · Preis pro Paar · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Goldfaden im Bündchen; kleines Label schwarz auf goldenem Etikett (Annahme)",
    sizes: ["35–38", "39–42", "43–46"],
    defaultSize: "39–42",
    sizeHint: "Größen 35–38, 39–42 und 43–46",
    tags: ["socken", "herbst", "gold", "eigenmarke", "damen", "herren", "unisex", "wolle", "zopfstrick", "winter"],
    colors: [
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3a3d", image: "img/neu/damen/d67-alle.jpg?v=herbst22" },
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/damen/d67-alle.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#1a2a5a", image: "img/neu/damen/d67-alle.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Dunkelbraun", hex: "#3b2616", image: "img/neu/damen/d67-alle.jpg?v=herbst22" }
    ]
  },
  {
    id: "d68",
    name: "Knöchelstrümpfe Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Strümpfe",
    type: "socken",
    price: 16,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d68-alle.jpg?v=herbst22",
    description:
      "Feine, transparente Knöchelstrümpfe mit zartem Spitzenabschluss und einem kleinen goldenen Charm. Erhältlich in Schwarz, Nude und Schokobraun. Dezent und elegant, zu Loafern und Stiefeletten. Das Bild zeigt alle Farben zusammen. Auch in edlem Violett mit Goldakzenten; das Bild zeigt die violette Variante, die anderen Farben gemeinsam auf einem Bild.",
    fabric: "Feinstrick transparent (Schätzung: Polyamid/Elasthan ca. 85/15 %, ca. 15 den), Spitzenabschluss · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knöchelhoch, transparent, Spitzenrand · Größen S/M und L/XL · Bild zeigt alle Farben",
    madeIn: "Muster / noch nicht in Produktion · Hardware: kleiner Charm gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["S/M", "L/XL"],
    defaultSize: "S/M",
    sizeHint: "Größen S/M und L/XL",
    tags: ["socken", "dessous", "strumpf", "knoechelstrumpf", "damen", "herbst", "spitze", "transparent", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d68-alle.jpg?v=herbst22" },
      { id: "nude", name: "Nude", hex: "#d8b9a0", image: "img/neu/damen/d68-alle.jpg?v=herbst22" },
      { id: "schokobraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d68-alle.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d68-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d69",
    name: "Spitzen-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 119,
    color: "#0f7a55",
    accent: "#c5a059",
    image: "img/neu/damen/d69-smaragd.jpg?v=herbst22",
    description:
      "Spitzen-Body in Smaragd mit tiefem V-Ausschnitt, feinen Trägern und goldener Blumenstickerei, die sich von der Mitte aus entfaltet. Hoher Beinausschnitt im Tanga-Schnitt — zurückhaltend im Auftritt, edel im Detail.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer V-Ausschnitt, verstellbare Träger, hoher Beinausschnitt, Tanga-/Thong-Rücken, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Schieber gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "smaragd"],
    colors: [
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d69-smaragd.jpg?v=herbst22" }
    ]
  },
  {
    id: "d70",
    name: "Cage-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 139,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d70-burgunder.jpg?v=herbst22",
    description:
      "Cage-Body in Burgunder mit Riemchen-Optik, kleinen goldenen Ringen als Verbindung und feiner goldener Blumenstickerei an Dekolleté und Front. Offener Rücken, seitliche Cut-outs und Tanga-Schnitt — verführerisch im Detail, klar in der Linie. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle, Riemchen aus Elastikband · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Riemchen-/Cage-Optik, offener Rücken, seitliche Cut-outs, Tanga-/Thong-Schnitt, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierringe gold gebürstet (Nickelfreiheit prüfen); Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "cage", "cutout", "burgunder"],
    colors: [
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d70-burgunder.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d70-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d71",
    name: "Spitzen-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 119,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d71-dunkelblau.jpg?v=herbst22",
    description:
      "Spitzen-Body in Dunkelblau mit tiefem V-Ausschnitt und dichter goldener Blumenstickerei. Hoher Beinausschnitt im Tanga-Schnitt; der Goldfaden setzt auf dem tiefen Blau einen ruhigen Kontrast.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer V-Ausschnitt, verstellbare Träger, hoher Beinausschnitt, Tanga-/Thong-Rücken, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Schieber gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "dunkelblau"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d71-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d72",
    name: "Halter-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 129,
    color: "#14301f",
    accent: "#c5a059",
    image: "img/neu/damen/d72-dunkelgruen.jpg?v=herbst22",
    description:
      "Halter-Body in Dunkelgrün mit Neckholder, gekreuzten Trägern über dem Dekolleté und goldener Blumenstickerei an Front und Seiten. Der Rücken zeigt gekreuzte Träger; der hohe Beinausschnitt folgt dem Tanga-Schnitt.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Neckholder, gekreuzte Träger an Front und Rücken, hoher Beinausschnitt, Tanga-/Thong-Rücken, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "halter", "neckholder", "dunkelgruen"],
    colors: [
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d72-dunkelgruen.jpg?v=herbst22" }
    ]
  },
  {
    id: "d73",
    name: "Spitzen-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 119,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d73-dunkelbraun.jpg?v=herbst22",
    description:
      "Spitzen-Body in Schokobraun mit vorgeformten Cups, senkrecht verlaufender goldener Blumenstickerei und einem goldenen Haken-Verschluss an der Front. Hoher Beinausschnitt im Tanga-Schnitt, warm und dezent.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle, vorgeformte Cups · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Cups mit Bügeln (Annahme), Haken-Verschluss vorn, hoher Beinausschnitt, Tanga-/Thong-Rücken · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Haken-Verschluss gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "schokobraun", "haken"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d73-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d74",
    name: "Langarm-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 139,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d74-burgunder.jpg?v=herbst22",
    description:
      "Langarm-Body in Burgunder mit transparenten Ärmeln, goldener Stickerei am V-Ausschnitt und kleinen goldenen Knöpfen an Leiste und Bündchen. Tanga-Schnitt, edel und leicht. Auch in edlem Violett mit Goldakzenten erhältlich.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle, transparente Ärmel · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer V-Ausschnitt, Knopfleiste, langer transparenter Arm mit Knopfbündchen, Tanga-/Thong-Schnitt, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: je 3 Zierknöpfe an Leiste und Bündchen gold gebürstet; Stickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "langarm", "burgunder"],
    colors: [
      { id: "burgunder", name: "Burgunder", hex: "#6b1c2a", image: "img/neu/damen/d74-burgunder.jpg?v=herbst22" },
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d74-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d75",
    name: "Cut-out-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 129,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d75-schwarz.jpg?v=herbst22",
    description:
      "Cut-out-Body in Schwarz mit tiefem Ausschnitt, seitlichen Cut-outs an der Taille und feiner goldener Blumenstickerei. Klare Linien im Tanga-Schnitt — verführerisch im Detail, ruhig im Gesamtbild.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, tiefer Ausschnitt, seitliche Cut-outs, hoher Beinausschnitt, Tanga-/Thong-Schnitt, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "cutout", "schwarz"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d75-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d76",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#4b2a6b",
    accent: "#c5a059",
    image: "img/neu/damen/d76-violett.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in edlem Violett mit Blumenstickerei und Goldakzenten — BH und String. Zurückhaltend im Schnitt, mit goldenen Details an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Violett mit String.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; String-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "string", "violett"],
    colors: [
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d76-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d77",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#4b2a6b",
    accent: "#c5a059",
    image: "img/neu/damen/d77-violett.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in edlem Violett mit Blumenstickerei und Goldakzenten — BH und Tanga. Zurückhaltend im Schnitt, mit goldenen Details an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Violett mit Tanga.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Tanga-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "tanga", "violett"],
    colors: [
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d77-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d78",
    name: "Balconette-Set Dentelle",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "dessous",
    price: 89,
    color: "#4b2a6b",
    accent: "#c5a059",
    image: "img/neu/damen/d78-violett.jpg?v=herbst22",
    description:
      "Balconette-Set aus feiner Spitze in edlem Violett mit Blumenstickerei und Goldakzenten — BH und Brazilian. Zurückhaltend im Schnitt, mit goldenen Details an Cups und Bund. Das Set gibt es mit String, Tanga oder Brazilian und in den Farben Braun, Schwarz, Dunkelblau, Dunkelgrün, Smaragd, Rot, Burgunder und Violett; abgebildet: Violett mit Brazilian.",
    fabric: "Spitze (Schätzung: Polyamid/Elasthan) mit Blumenstickerei in Goldgarn (Annahme), Futter Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Balconette-BH mit Bügeln (Annahme), verstellbare Träger, Haken-Verschluss; Brazilian-Slip, Zwickel Baumwolle · BH-Größen 70A–90D, Slip passend XS–XXL (Zuordnung am Muster prüfen)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Verschlusshäkchen und Zierteile gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["70A", "70B", "70C", "70D", "75A", "75B", "75C", "75D", "80A", "80B", "80C", "80D", "85A", "85B", "85C", "85D", "90A", "90B", "90C", "90D"],
    defaultSize: "75B",
    sizeHint: "BH 70A–90D · Slip passend XS–XXL",
    tags: ["dessous", "damen", "herbst", "balconette", "set", "spitze", "dentelle", "blumenstickerei", "gold", "eigenmarke", "brazilian", "violett"],
    colors: [
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d78-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d79",
    name: "Spitzen-Body Tanga",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 119,
    color: "#4b2a6b",
    accent: "#c5a059",
    image: "img/neu/damen/d79-violett.jpg?v=herbst22",
    description:
      "Ärmelloser Spitzen-Body in edlem Violett mit V-Ausschnitt, vorgeformten Cups und dichter goldener Blumenstickerei. Hoher Beinausschnitt im Tanga-Schnitt — zurückhaltend im Auftritt, edel im Detail. Weitere Farben dieses Schnitts: Smaragd, Dunkelblau und Schokobraun.",
    fabric: "Spitze und Stretch-Mesh (Schätzung: Polyamid/Elasthan) mit Goldgarn-Stickerei (Annahme), Zwickel Baumwolle · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, V-Ausschnitt, Cups mit Bügeln (Annahme), hoher Beinausschnitt, Tanga-/Thong-Rücken, Druckknopf-Zwickel · Größen XS–XXL",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Schieber gold gebürstet; Blumenstickerei in Goldgarn (Annahme)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["dessous", "body", "damen", "herbst", "tanga", "spitze", "gold", "eigenmarke", "violett"],
    colors: [
      { id: "violett", name: "Violett", hex: "#4b2a6b", image: "img/neu/damen/d79-violett.jpg?v=herbst22" }
    ]
  },
  {
    id: "d80",
    name: "Sport-Set Zip-Top und Leggings",
    category: "damen",
    gender: "damen",
    audience: "Damen · Sport-Set",
    type: "sport",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d80-schwarz.jpg?v=herbst22",
    featured: true,
    description:
      "Zweiteiliges Sport-Set aus kurzem Zip-Top mit Stehkragen und High-Waist-Leggings. Goldener Reißverschluss und ein kleines goldenes Logo-Plättchen setzen den einzigen Akzent. Erhältlich in Schwarz, Dunkelblau, Dunkelgrün, Grau und Burgund sowie in den Mustern Gepard (schwarze Punkte auf Sandbeige), Leopard (Rosetten in Braun und Schwarz) und Cheetah (tonale, längliche Punkte in cremigem Graubraun). Die Bilder sind KI-Muster-Visualisierungen; Ärmel- und Beinlänge können je Bild leicht abweichen und werden am Muster festgelegt.",
    fabric: "Nylon-Elasthan-Stretch (Schätzung: ca. 78 % Polyamid/Nylon, 22 % Elasthan), ca. 260 g/m² (Schätzung), blickdicht, schnelltrocknend · Pflege (Empfehlung, Schätzung): Schonwaschgang 30 °C, auf links waschen, ohne Weichspüler, nicht bleichen, nicht in den Trockner · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Top: kurz (cropped), Stehkragen, durchgehender Frontzip · Leggings: High-Waist, körpernah, breiter Bund · Größen XS–XXL · Maße (Schätzung, Gr. M): Top-Länge ca. 42 cm, Leggings-Innenbeinlänge ca. 68 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Reißverschluss und Logo-Plättchen gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["sport", "set", "damen", "herbst", "zweiteiler", "leggings", "zip-top", "high-waist", "stretch", "gold", "eigenmarke", "animalprint", "gepard", "leopard", "cheetah"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d80-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d80-dunkelblau.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d80-dunkelgruen.jpg?v=herbst22" },
      { id: "grau", name: "Grau", hex: "#8a8d91", image: "img/neu/damen/d80-grau.jpg?v=herbst22" },
      { id: "gepard", name: "Gepard", hex: "#c9b08a", image: "img/neu/damen/d80-gepard.jpg?v=herbst22" },
      { id: "leopard", name: "Leopard", hex: "#b88a55", image: "img/neu/damen/d80-leopard.jpg?v=herbst22" },
      { id: "cheetah", name: "Cheetah", hex: "#cbbfae", image: "img/neu/damen/d80-cheetah.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d80-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "d81",
    name: "Chunky Loafer Goldschnalle",
    category: "damen",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "schuhe",
    price: 229,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d81-schwarz.jpg?v=herbst22",
    description:
      "Chunky Loafer aus glattem Leder mit kräftiger Profilsohle und einer goldenen Schnalle auf dem Riemen über dem Spann. Unisex geschnitten, in Schwarz, Schokobraun, Burgund und Dunkelgrün. Klare Form, ein einziger Goldakzent.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Leder/Textil, Laufsohle Gummi mit Profil (Plateau ca. 4 cm, Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slipper-Form, Profilsohle, Schnallenriemen · Unisex, EU-Größen 36–46, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Schnalle gold gebürstet",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    defaultSize: "40",
    sizeHint: "EU-Größen 36–46 (Unisex)",
    tags: ["schuhe", "loafer", "chunky", "leder", "unisex", "damen", "herren", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d81-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d81-dunkelbraun.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d81-burgund.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d81-dunkelgruen.jpg?v=herbst22" }
    ]
  },
  {
    id: "d82",
    name: "Oversized Sonnenbrille Gold",
    category: "damen",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "brille",
    price: 149,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d82-schwarz.jpg?v=herbst22",
    description:
      "Oversized Sonnenbrille mit kräftigem Rahmen in Cat-Eye-Butterfly-Form und dezenten goldenen Elementen an den Bügelgelenken. Unisex, Einheitsgröße, in Schwarz, Havanna, Burgund, Smaragd und Schildpatt / Honig-Havanna (das Bild dieser Farbe zeigt ein helleres Schildpattmuster).",
    fabric: "Acetat-Rahmen (Schätzung), Gläser mit UV-Schutz (Annahme, am Muster prüfen), Metallteile gold gebürstet · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Oversized, Einheitsgröße · Bügel mit Goldelement · inkl. Etui (Annahme)",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bügelgelenk-Elemente gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["Einheitsgröße"],
    defaultSize: "Einheitsgröße",
    sizeHint: "Einheitsgröße",
    tags: ["accessoire", "brille", "sonnenbrille", "oversized", "unisex", "damen", "herren", "schildpatt", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d82-schwarz.jpg?v=herbst22" },
      { id: "havanna", name: "Havanna", hex: "#5a3a1e", image: "img/neu/damen/d82-havanna.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d82-burgund.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d82-smaragd.jpg?v=herbst22" },
      { id: "honig-havanna", name: "Schildpatt / Honig-Havanna", hex: "#b0782f", image: "img/neu/damen/d82-honig-havanna.jpg?v=herbst22" }
    ]
  },
  {
    id: "d83",
    name: "Business-Tasche Laptopfach",
    category: "damen",
    gender: "unisex",
    audience: "Unisex · Damen & Herren",
    type: "tasche",
    price: 249,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d83-schwarz.jpg?v=herbst22",
    description:
      "Strukturierte Business-Tasche mit zwei Tragegriffen, abnehmbarem Schultergurt, vorderem Reißverschlussfach und goldenen Beschlägen. Gepolstertes Laptopfach bis 16 Zoll. In Schwarz, Schokobraun, Burgund, Dunkelblau und Gepard (Haarkalb-Optik).",
    fabric: "Strukturiertes Leder bzw. Lederoptik, Saffiano-Prägung (Schätzung); Gepard-Variante in Haarkalb-Optik (Schätzung); Futter Textil, gepolstertes Laptopfach · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Maße (Schätzung): ca. 40 × 30 × 10 cm · Laptopfach bis 16 Zoll · Einheitsgröße",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Reißverschlüsse und Beschläge gold gebürstet",
    sizes: ["Einheitsgröße"],
    defaultSize: "Einheitsgröße",
    sizeHint: "Einheitsgröße · Laptopfach bis 16 Zoll",
    tags: ["tasche", "business", "laptoptasche", "laptop", "saffiano", "unisex", "damen", "herren", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d83-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d83-dunkelbraun.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d83-burgund.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d83-dunkelblau.jpg?v=herbst22" },
      { id: "gepard", name: "Gepard (Haarkalb-Optik)", hex: "#c9b08a", image: "img/neu/damen/d83-gepard.jpg?v=herbst22" }
    ]
  },
  {
    id: "d84",
    name: "Weite Bundfaltenhose",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 129,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/damen/d84-elfenbein.jpg?v=herbst22",
    description:
      "Hochtaillierte, weit geschnittene Hose mit Bundfalten und einem goldenen Knopf am Bund. Fließender Fall, ruhige Linie — in Weiß/Elfenbein, Schwarz, Schokobraun und Burgund.",
    fabric: "Webware (Schätzung: Viskose/Polyester/Elasthan), ca. 240 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "High-Waist, Bundfalten, weites Bein, Gürtelschlaufen · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 80 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["hose", "damen", "bundfalte", "weitebein", "wide-leg", "stretch", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "elfenbein", name: "Weiß / Elfenbein", hex: "#f3efe6", image: "img/neu/damen/d84-elfenbein.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d84-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d84-dunkelbraun.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d84-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "h43",
    name: "Slim-Anzughose",
    category: "herren",
    gender: "herren",
    audience: "Herren · Hose",
    type: "hose",
    price: 119,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h43-schwarz.jpg?v=herbst22",
    description:
      "Schmale Anzughose mit Gürtelschlaufen und einem runden goldenen Knopf am Bund. Glatter Anzugstoff, klare Linie — in Schwarz, Dunkelblau, Dunkelgrün, Anthrazit sowie neu in Braun / Schokobraun, Beige und Weiß.",
    fabric: "Anzugstoff (Schätzung: Polyester/Viskose/Elasthan), ca. 260 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, Bundfalte, Eingrifftaschen, Gürtelschlaufen · Größen S–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 80 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet",
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von S bis XXL",
    tags: ["hose", "herren", "anzughose", "slim", "stretch", "business", "braun", "beige", "weiss", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h43-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h43-dunkelblau.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h43-dunkelgruen.jpg?v=herbst22" },
      { id: "anthrazit", name: "Anthrazit / Grau", hex: "#4a4a4d", image: "img/neu/herren/h43-anthrazit.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Braun / Schokobraun", hex: "#3b2616", image: "img/neu/herren/h43-dunkelbraun.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#c9b08a", image: "img/neu/herren/h43-beige.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h43-weiss.jpg?v=herbst22" }
    ]
  },
  {
    id: "d85",
    name: "Cut-out-Longsleeve Goldring",
    category: "damen",
    gender: "damen",
    audience: "Damen · Oberteil",
    type: "oberteil",
    price: 79,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d85-dunkelbraun.jpg?v=herbst22",
    description:
      "Langarm-Shirt mit Stehkragen und Twist-Detail an der Brust, gehalten von einem goldenen Ring; darunter ein tropfenförmiger Cut-out. In Schokobraun, Schwarz, Burgund, Smaragd und Leopard (Rosetten in Braun und Schwarz).",
    fabric: "Jersey (Schätzung: Viskose/Polyamid/Elasthan), weich, ca. 210 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Stehkragen, langer Arm, Twist mit Cut-out · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 60 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierring gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["oberteil", "longsleeve", "damen", "cutout", "twist", "jersey", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d85-dunkelbraun.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d85-schwarz.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d85-burgund.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d85-smaragd.jpg?v=herbst22" },
      { id: "leopard", name: "Leopard", hex: "#b88a55", image: "img/neu/damen/d85-leopard.jpg?v=herbst22" }
    ]
  },
  {
    id: "d86",
    name: "Neckholder-Top Keyhole Goldring",
    category: "damen",
    gender: "damen",
    audience: "Damen · Oberteil",
    type: "oberteil",
    price: 69,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d86-schwarz.jpg?v=herbst22",
    description:
      "Ärmelloses Neckholder-Top mit hohem Kragen und tropfenförmigem Keyhole-Ausschnitt, gehalten von einem kleinen goldenen Ring. In Schwarz, Burgund, Dunkelblau, Smaragd und Champagner (Satin-Optik).",
    fabric: "Jersey (Schätzung: Viskose/Elasthan), Champagner in Satin-Optik (Schätzung), ca. 200 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Körpernah, Neckholder, Keyhole, Verschluss im Nacken (Annahme) · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 55 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Zierring gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    tags: ["oberteil", "top", "neckholder", "damen", "keyhole", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d86-schwarz.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d86-burgund.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d86-dunkelblau.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d86-smaragd.jpg?v=herbst22" },
      { id: "champagner", name: "Champagner", hex: "#d9c29a", image: "img/neu/damen/d86-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "h44",
    name: "Chunky Loafer Herren Goldschnalle",
    category: "herren",
    gender: "herren",
    audience: "Herren · Schuhe",
    type: "schuhe",
    price: 229,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h44-schwarz.jpg?v=herbst22",
    description:
      "Chunky Loafer für Herren aus glattem Leder mit Plateau-Profilsohle und einer goldenen Schnalle auf dem Riemen über dem Spann. Erhältlich in Schwarz, Braun / Cognac, Weiß, Dunkelblau und Beige. Hinweis: Die Bilder sind KI-Visualisierungen; die Sohlenfarbe kann je Bild abweichen (z. B. Braun mit dunkelbrauner Sohle, Dunkelblau mit schwarzer Sohle) und wird am Muster festgelegt.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Leder/Textil, Laufsohle Gummi mit Profil (Plateau ca. 4 cm, Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slipper-Form, Plateau-Profilsohle, Schnallenriemen · EU-Größen 39–47, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Schnalle gold gebürstet",
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46", "47"],
    defaultSize: "43",
    sizeHint: "EU-Größen 39–47",
    tags: ["schuhe", "loafer", "chunky", "leder", "herren", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h44-schwarz.jpg?v=herbst22" },
      { id: "cognac", name: "Braun / Cognac", hex: "#8b4a22", image: "img/neu/herren/h44-cognac.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h44-weiss.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h44-dunkelblau.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#c9b08a", image: "img/neu/herren/h44-beige.jpg?v=herbst22" }
    ]
  },
  {
    id: "d88",
    name: "Schlag-Leggings High Waist Goldknopf",
    category: "damen",
    gender: "damen",
    audience: "Damen · Hose",
    type: "hose",
    price: 79,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d88-schwarz.jpg?v=herbst22",
    description:
      "Figurbetonte Leggings mit hohem Bund und Schlag ab dem Knie, geschlossen mit einem großen goldenen Knopf. Elegante 70er-Silhouette für Alltag und Abend. In Schwarz, Schokobraun, Leopard, Burgund, Dunkelgrün und Schlangenmuster. Passend zu den Westen d89 (Crop) und d90 (lang) – dasselbe Material in denselben Farben (Schwarz, Schokobraun, Leopard).",
    fabric: "Stretch-Jersey (Schätzung: Viskose/Polyamid/Elasthan), blickdicht, ca. 260 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurbetont, hoher Bund, Schlag ab Knie · Größen XS–XXL · Maße (Schätzung, Gr. M): Innenbeinlänge ca. 80 cm, Schlagweite am Saum ca. 28 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Bundknopf gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    matches: ["d89", "d90"],
    tags: ["hose", "leggings", "schlag", "flare", "highwaist", "damen", "stretch", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d88-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d88-dunkelbraun.jpg?v=herbst22" },
      { id: "leopard", name: "Leopard", hex: "#b88a55", image: "img/neu/damen/d88-leopard.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d88-burgund.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d88-dunkelgruen.jpg?v=herbst22" },
      { id: "schlange", name: "Schlangenmuster", hex: "#a39a86", image: "img/neu/damen/d88-schlange.jpg?v=herbst22" }
    ]
  },
  {
    id: "d89",
    name: "Figurbetonte Weste Crop Goldknöpfe",
    category: "damen",
    gender: "damen",
    audience: "Damen · Weste",
    type: "weste",
    price: 69,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d89-schwarz.jpg?v=herbst22",
    description:
      "Kurze, taillierte Weste mit tiefem V-Ausschnitt und spitzem Saum, mit vier goldenen Knöpfen. Allein als Top oder über Hemd und Shirt. In Schwarz, Schokobraun und Leopard. Passend zu d88 (Schlag-Leggings) und d90 (lange Weste).",
    fabric: "Webstoff mit Stretch (Schätzung: Polyester/Viskose/Elasthan), ca. 240 g/m² (Schätzung), gefüttert (Annahme) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Figurbetont, tailliert, kurz (Crop), V-Ausschnitt, 4 Goldknöpfe · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 42 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    matches: ["d88", "d90"],
    tags: ["weste", "crop", "vneck", "damen", "tailliert", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d89-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d89-dunkelbraun.jpg?v=herbst22" },
      { id: "leopard", name: "Leopard", hex: "#b88a55", image: "img/neu/damen/d89-leopard.jpg?v=herbst22" }
    ]
  },
  {
    id: "d90",
    name: "Lange Weste Slim Goldknöpfe",
    category: "damen",
    gender: "damen",
    audience: "Damen · Weste",
    type: "weste",
    price: 99,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d90-schwarz.jpg?v=herbst22",
    description:
      "Lange, taillierte Weste (Longline bis etwa Oberschenkel) mit V-Ausschnitt und sechs goldenen Knöpfen. Schmale Linie, die den Look streckt – zu Hose, Rock oder Leggings. In Schwarz, Schokobraun und Leopard. Passend zu d88 (Schlag-Leggings) und d89 (Weste Crop).",
    fabric: "Webstoff mit Stretch (Schätzung: Polyester/Viskose/Elasthan), ca. 260 g/m² (Schätzung), gefüttert (Annahme) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, tailliert, lang (Longline), V-Ausschnitt, 6 Goldknöpfe · Größen XS–XXL · Maße (Schätzung, Gr. M): Länge ca. 75 cm",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Knöpfe gold gebürstet (Nickelfreiheit prüfen)",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von XS bis XXL",
    matches: ["d88", "d89"],
    tags: ["weste", "lang", "longline", "vneck", "damen", "tailliert", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d90-schwarz.jpg?v=herbst22" },
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d90-dunkelbraun.jpg?v=herbst22" },
      { id: "leopard", name: "Leopard", hex: "#b88a55", image: "img/neu/damen/d90-leopard.jpg?v=herbst22" }
    ]
  },
  {
    id: "h45",
    name: "Boxershorts Herren Goldrand",
    category: "herren",
    gender: "herren",
    audience: "Herren · Unterwäsche",
    type: "unterwaesche",
    price: 29,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h45-schwarz.jpg?v=herbst22",
    description:
      "Enganliegende Boxershorts (Trunk-Schnitt) mit weichem Jersey, kurzem Bein und elastischem Bund mit feinem goldenen Rand. Preis pro Stück. In Schwarz, Weiß, Dunkelblau, Dunkelgrün, Burgund und Anthrazit. Hinweis: Bei Unterwäsche ist eine Rückgabe aus Hygienegründen meist ausgeschlossen (Regelung vor einem echten Verkauf rechtlich prüfen).",
    fabric: "Jersey (Schätzung: Baumwolle ca. 95 % / Elasthan ca. 5 %), ca. 190 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Enganliegend, kurzes Bein, Formbeutel vorn, elastischer Bund mit Goldrand (Schätzung: Gold-Metallicgarn bzw. Goldlinie) · Größen S–XXL · Maße (Schätzung, Gr. M): Bundweite gedehnt ca. 84 cm, Beinlänge ca. 10 cm",
    madeIn: "Muster / noch nicht in Produktion · Hygiene-Hinweis: Rückgabe bei Unterwäsche meist ausgeschlossen (nur Hinweis, rechtlich prüfen)",
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    sizeHint: "Erhältlich von S bis XXL",
    tags: ["unterwaesche", "boxershorts", "boxer", "herren", "baumwolle", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h45-schwarz.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f2efe8", image: "img/neu/herren/h45-weiss.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h45-dunkelblau.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h45-dunkelgruen.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h45-burgund.jpg?v=herbst22" },
      { id: "anthrazit", name: "Anthrazit", hex: "#3a3d42", image: "img/neu/herren/h45-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "h46",
    name: "Feinstrick Polo Offen",
    category: "herren",
    gender: "herren",
    audience: "Herren · Strick",
    type: "strick",
    price: 119,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h46-schwarz.jpg?v=herbst22",
    description:
      "Feinstrick-Polo mit Polokragen und offener V-Leiste — bewusst ganz ohne Zipper und ohne Knöpfe, einfach offen. Reduziert, schmal, ruhig. In Schwarz, Weiß, Dunkelblau, Burgund, Dunkelgrün, Braun, Beige und Anthrazit. Passend dazu: Feinstrick Polo Goldzip (h15) mit Halszip.",
    fabric: "Feinstrick (Schätzung: Merino-Mix/Baumwolle), ca. 240 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Slim, kurzer Arm, Polokragen mit offener V-Leiste (ohne Zip, ohne Knöpfe) · Größen XS–XXL · Maße (Schätzung, Gr. M): Rückenlänge ca. 70 cm",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tags: ["strick", "herren", "herbst", "polo-strick", "feinstrick", "offen", "eigenmarke"],
    matches: ["h15"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h46-schwarz.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h46-weiss.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h46-dunkelblau.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h46-burgund.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h46-dunkelgruen.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#3b2616", image: "img/neu/herren/h46-braun.jpg?v=herbst22" },
      { id: "beige", name: "Beige", hex: "#c9b08a", image: "img/neu/herren/h46-beige.jpg?v=herbst22" },
      { id: "anthrazit", name: "Anthrazit", hex: "#4a4a4d", image: "img/neu/herren/h46-anthrazit.jpg?v=herbst22" }
    ]
  },
  {
    id: "d91",
    name: "Court Sneaker Gold",
    category: "damen",
    gender: "damen",
    audience: "Damen · Schuhe",
    type: "schuhe",
    price: 159,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/damen/d91-weiss.jpg?v=herbst22",
    description:
      "Klassischer Low-Top-Sneaker im Court-Stil aus glattem Leder mit kräftiger Cupsole, perforierter Kappe und goldenen Details: Ösen, Fersenlasche und ein kleines Goldplättchen auf der Zunge. Erhältlich in Weiß, Schwarz und Dunkelblau. Eigenes VELORA-Design ohne fremdes Logo. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Textil, Laufsohle Gummi (Cupsole) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Low-Top, Schnürung, Cupsole · EU-Größen 36–42, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Ösen, Fersenlasche und Zungenplättchen gold",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    defaultSize: "38",
    sizeHint: "EU-Größen 36–42",
    tags: ["schuhe", "sneaker", "court", "leder", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d91-weiss.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d91-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d91-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "h47",
    name: "Court Sneaker Gold Herren",
    category: "herren",
    gender: "herren",
    audience: "Herren · Schuhe",
    type: "schuhe",
    price: 169,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/herren/h47-weiss.jpg?v=herbst22",
    description:
      "Klassischer Low-Top-Sneaker im Court-Stil aus glattem Leder mit kräftiger Cupsole, perforierter Kappe und goldenen Details: Ösen, Fersenlasche und ein kleines Goldplättchen auf der Zunge. Erhältlich in Weiß, Schwarz und Dunkelblau. Eigenes VELORA-Design ohne fremdes Logo. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Glattleder bzw. hochwertige Lederoptik (Schätzung), Futter Textil, Laufsohle Gummi (Cupsole) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Low-Top, Schnürung, Cupsole · EU-Größen 39–47, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware: Ösen, Fersenlasche und Zungenplättchen gold",
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46", "47"],
    defaultSize: "43",
    sizeHint: "EU-Größen 39–47",
    tags: ["schuhe", "sneaker", "court", "leder", "herren", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/herren/h47-weiss.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h47-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h47-dunkelblau.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a2c20", image: "img/neu/herren/h47-braun.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#1f3a2e", image: "img/neu/herren/h47-dunkelgruen.jpg?v=herbst22" },
      { id: "lack", name: "Schwarz Lack", hex: "#0a0a0a", image: "img/neu/herren/h47-lack.jpg?v=herbst22" }
    ]
  },
  {
    id: "d100",
    name: "Pump Couronne",
    category: "damen",
    gender: "damen",
    audience: "Damen · Schuhe",
    type: "schuhe",
    price: 189,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d100-dunkelblau.jpg?v=herbst22",
    description:
      "Spitzer Stiletto-Pump aus glattem Leder mit goldener Paspel an Oberkante und Sohle, goldener Krone-V auf der Fersenkappe, VELORA-Prägung auf der Innensohle und goldenen Absatzspitzen. Einheitliches VELORA-Design in elf Farben. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Glattleder bzw. Lack-/Metallic-Optik je nach Farbe (Schätzung), Futter Leder, Laufsohle Leder/Gummi · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Spitzer Leisten, Stiletto ca. 10 cm · EU-Größen 35–42, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware gold",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    defaultSize: "38",
    sizeHint: "EU-Größen 35–42",
    tags: ["schuhe", "pumps", "stiletto", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d100-dunkelblau.jpg?v=herbst22" },
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d100-schwarz.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d100-weiss.jpg?v=herbst22" },
      { id: "nude", name: "Nude", hex: "#d9b99b", image: "img/neu/damen/d100-nude.jpg?v=herbst22" },
      { id: "silber", name: "Silber", hex: "#c0c0c0", image: "img/neu/damen/d100-silber.jpg?v=herbst22" },
      { id: "gold", name: "Gold", hex: "#c5a059", image: "img/neu/damen/d100-gold.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6d1a2a", image: "img/neu/damen/d100-burgund.jpg?v=herbst22" },
      { id: "rot", name: "Rot", hex: "#b3122e", image: "img/neu/damen/d100-rot.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f5c45", image: "img/neu/damen/d100-smaragd.jpg?v=herbst22" },
      { id: "rosa", name: "Rosa", hex: "#e8a3b8", image: "img/neu/damen/d100-rosa.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a2c20", image: "img/neu/damen/d100-braun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d101",
    name: "Peep-Toe Couronne",
    category: "damen",
    gender: "damen",
    audience: "Damen · Schuhe",
    type: "schuhe",
    price: 199,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d101-schwarz.jpg?v=herbst22",
    description:
      "Peep-Toe-Sandalette mit Plateau und Knöchelriemen mit goldener Schnalle, goldener Paspel, goldenem Seitenstreifen und goldener Krone-V. Einheitliches VELORA-Design in elf Farben. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Glattleder bzw. Lack-/Metallic-Optik je nach Farbe (Schätzung), Futter Leder, Laufsohle Leder/Gummi · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Plateau, Stiletto ca. 12 cm, Knöchelriemen mit Schnalle · EU-Größen 35–42, Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Hardware gold",
    sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
    defaultSize: "38",
    sizeHint: "EU-Größen 35–42",
    tags: ["schuhe", "peeptoe", "plateau", "sandalette", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d101-schwarz.jpg?v=herbst22" },
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d101-weiss.jpg?v=herbst22" },
      { id: "nude", name: "Nude", hex: "#d9b99b", image: "img/neu/damen/d101-nude.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d101-dunkelblau.jpg?v=herbst22" },
      { id: "rosa", name: "Rosa", hex: "#e8a3b8", image: "img/neu/damen/d101-rosa.jpg?v=herbst22" },
      { id: "braun", name: "Braun", hex: "#4a2c20", image: "img/neu/damen/d101-braun.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6d1a2a", image: "img/neu/damen/d101-burgund.jpg?v=herbst22" },
      { id: "rot", name: "Rot", hex: "#b3122e", image: "img/neu/damen/d101-rot.jpg?v=herbst22" },
      { id: "smaragd", name: "Smaragd", hex: "#0f5c45", image: "img/neu/damen/d101-smaragd.jpg?v=herbst22" },
      { id: "silber", name: "Silber", hex: "#c0c0c0", image: "img/neu/damen/d101-silber.jpg?v=herbst22" },
      { id: "gold", name: "Gold", hex: "#c5a059", image: "img/neu/damen/d101-gold.jpg?v=herbst22" }
    ]
  },
  {
    id: "d102",
    name: "Neckholder-Wickelkleid",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 189,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d102-schwarz.jpg?v=herbst22",
    description:
      "Wickelkleid mit Neckholder, fließender Fall und goldene Details. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "neckholder", "wickelkleid", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d102-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d103",
    name: "One-Shoulder Volantkleid",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 179,
    color: "#f3efe6",
    accent: "#c5a059",
    image: "img/neu/damen/d103-weiss.jpg?v=herbst22",
    description:
      "Asymmetrisches One-Shoulder-Kleid mit Volant und goldenem Akzent. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "one-shoulder", "volant", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "weiss", name: "Weiß", hex: "#f3efe6", image: "img/neu/damen/d103-weiss.jpg?v=herbst22" },
      { id: "rosa", name: "Rosa", hex: "#e8a3b8", image: "img/neu/damen/d103-rosa.jpg?v=herbst22" }
    ]
  },
  {
    id: "d104",
    name: "Satin Cut-out Kleid",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 199,
    color: "#b3122e",
    accent: "#c5a059",
    image: "img/neu/damen/d104-rot.jpg?v=herbst22",
    description:
      "Satinkleid mit Cut-out und goldener Hardware. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "satin", "cut-out", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "rot", name: "Rot", hex: "#b3122e", image: "img/neu/damen/d104-rot.jpg?v=herbst22" }
    ]
  },
  {
    id: "d105",
    name: "Wickelkleid Volant",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 179,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d105-dunkelblau.jpg?v=herbst22",
    description:
      "Wickelkleid mit Volant-Saum und goldenen Akzenten. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "wickelkleid", "volant", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d105-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d106",
    name: "Satin Slipdress",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 169,
    color: "#e6d3b3",
    accent: "#c5a059",
    image: "img/neu/damen/d106-champagner.jpg?v=herbst22",
    description:
      "Schmal geschnittenes Satin-Slipdress mit feinen Trägern und goldenen Details. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "satin", "slipdress", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "champagner", name: "Champagner", hex: "#e6d3b3", image: "img/neu/damen/d106-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "d107",
    name: "Wickelkleid Ring",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 189,
    color: "#0f5c45",
    accent: "#c5a059",
    image: "img/neu/damen/d107-smaragd.jpg?v=herbst22",
    description:
      "Wickelkleid mit goldenem Ring-Detail an der Taille. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "wickelkleid", "ring", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "smaragd", name: "Smaragd", hex: "#0f5c45", image: "img/neu/damen/d107-smaragd.jpg?v=herbst22" }
    ]
  },
  {
    id: "d108",
    name: "Drapiertes Etuikleid",
    category: "damen",
    gender: "damen",
    audience: "Damen · Kleid",
    type: "kleid",
    price: 189,
    color: "#b98a5a",
    accent: "#c5a059",
    image: "img/neu/damen/d108-camel.jpg?v=herbst22",
    description:
      "Körpernahes Etuikleid mit Drapierung und goldenem Akzent. Vorder- und Rückansicht im Bild. Eigenes VELORA-Design mit goldenen Details. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "M",
    sizeHint: "Größen XS–XL",
    tags: ["kleid", "etuikleid", "drapiert", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "camel", name: "Camel", hex: "#b98a5a", image: "img/neu/damen/d108-camel.jpg?v=herbst22" }
    ]
  },
  {
    id: "d109",
    name: "Spitzen-Body Couronne",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 89,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d109-schwarz.jpg?v=herbst22",
    description:
      "Body aus feiner Spitze mit goldener VELORA-Plakette und goldenen Ringen. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "S",
    sizeHint: "Größen XS–XL",
    tags: ["body", "spitze", "dessous", "waesche", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d109-schwarz.jpg?v=herbst22" },
      { id: "elfenbein", name: "Elfenbein", hex: "#f2ead8", image: "img/neu/damen/d109-elfenbein.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6d1a2a", image: "img/neu/damen/d109-burgund.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d109-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d110",
    name: "String-Body Couronne",
    category: "damen",
    gender: "damen",
    audience: "Damen · Dessous",
    type: "body",
    price: 89,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d110-schwarz.jpg?v=herbst22",
    description:
      "String-Body mit goldener VELORA-Plakette und goldenen Ringen. Hinweis: Die Bilder sind KI-Visualisierungen.",
    fabric: "Material laut Muster (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Details gold",
    sizes: ["XS",  "S",  "M",  "L",  "XL"],
    defaultSize: "S",
    sizeHint: "Größen XS–XL",
    tags: ["body", "string", "dessous", "waesche", "damen", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d110-schwarz.jpg?v=herbst22" },
      { id: "elfenbein", name: "Elfenbein", hex: "#f2ead8", image: "img/neu/damen/d110-elfenbein.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6d1a2a", image: "img/neu/damen/d110-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "h48",
    name: "Satin Pyjama Herren Goldkante",
    category: "herren",
    gender: "herren",
    audience: "Herren · Pyjama",
    type: "pyjama",
    price: 99,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h48-schwarz.jpg?v=herbst22",
    description:
      "Zweiteiliges Satin-Pyjama-Set für Herren: langärmeliges Hemd mit Reverskragen, Brusttasche und Knopfleiste, dazu eine Hose mit Gummibund. Goldene Paspel an Kragen, Leiste, Tasche und Manschetten — in der Variante Champagner bewusst mit dunkler Paspel. Erhältlich in Schwarz, Dunkelblau, Burgund, Dunkelgrün, Anthrazit und Champagner. Hinweis: Die Bilder sind KI-Visualisierungen; Farbe und Glanz des Satins können am Muster abweichen.",
    fabric: "Satin (Schätzung: Polyester), ca. 110 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Hemd mit Reverskragen, Brusttasche und Knopfleiste, Hose mit Gummibund · Größen S–XXL · Maße (Schätzung, Gr. M): Hemdlänge ca. 74 cm, Hose-Innenbeinlänge ca. 76 cm",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: goldene Paspel (Champagner: dunkle Paspel)",
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    tags: ["pyjama", "lounge", "loungewear", "satin", "schlaf", "herren", "herbst", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h48-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h48-dunkelblau.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h48-burgund.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h48-dunkelgruen.jpg?v=herbst22" },
      { id: "anthrazit", name: "Anthrazit", hex: "#4a4a4d", image: "img/neu/herren/h48-anthrazit.jpg?v=herbst22" },
      { id: "champagner", name: "Champagner", hex: "#d9c7a0", image: "img/neu/herren/h48-champagner.jpg?v=herbst22" }
    ]
  },
  {
    id: "d92",
    name: "String Bikini Ringe",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 79,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d92-schwarz.jpg?v=herbst22",
    description:
      "Das Statement-Set in Schwarz: Triangel-Top mit goldenen Ringen und Goldperlen an den Bindebändern, dazu ein Slip mit Seitenringen. Klare Linie, viel Haut, Gold nur als Akzent. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Triangel-Top zum Binden, String-Slip mit Seitenbändern · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "string", "triangel", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d92-schwarz.jpg?v=herbst22" }
    ]
  },
  {
    id: "d93",
    name: "String Bikini Satin",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 79,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d93-dunkelblau.jpg?v=herbst22",
    description:
      "Satin-Triangel in tiefem Navy mit goldener Paspel und Goldhülsen an den Bändern, dazu ein Cheeky-Slip mit Seitenbändern. Glänzend, aber ruhig – für Pool, Terrasse und Sonnenuntergang. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Satin-Triangel zum Binden, Cheeky-Slip mit Seitenbändern · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "string", "satin", "triangel", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelblau", name: "Navy", hex: "#14213d", image: "img/neu/damen/d93-dunkelblau.jpg?v=herbst22" }
    ]
  },
  {
    id: "d94",
    name: "String Bikini Kette",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 89,
    color: "#0f7a55",
    accent: "#c5a059",
    image: "img/neu/damen/d94-smaragd.jpg?v=herbst22",
    description:
      "Triangel-Top in Smaragd mit Goldketten-Nackenband, der Slip trägt doppelte Goldketten an den Hüften. Das aufwendigste Stück der Bademode-Linie: farbig, glamourös, mit Gewicht im besten Sinn. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Triangel-Top mit Kettenband im Nacken, Slip mit Doppelketten an den Hüften · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "string", "kette", "triangel", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "smaragd", name: "Smaragd", hex: "#0f7a55", image: "img/neu/damen/d94-smaragd.jpg?v=herbst22" }
    ]
  },
  {
    id: "d95",
    name: "Bandeau Bikini Goldbar",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 69,
    color: "#efe6d2",
    accent: "#c5a059",
    image: "img/neu/damen/d95-creme.jpg?v=herbst22",
    description:
      "Klassisch und elegant: gerafftes Bandeau in Creme mit Goldbar vorn und Goldketten-Trägern, dazu ein High-Waist-Slip mit Goldpaspel. Warm, hell und zeitlos. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Gerafftes Bandeau mit Kettenträgern, High-Waist-Slip · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "bandeau", "high-waist", "klassisch", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/damen/d95-creme.jpg?v=herbst22" }
    ]
  },
  {
    id: "d96",
    name: "Balconette Bikini Goldschließe",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 79,
    color: "#3b2616",
    accent: "#c5a059",
    image: "img/neu/damen/d96-dunkelbraun.jpg?v=herbst22",
    description:
      "Bügel-Top in Schokobraun mit goldener Schließe vorn, am Slip sitzen Goldschnallen an den Hüften. Formgebend, sicher und trotzdem sinnlich – der Bikini für alle, die auch schwimmen wollen. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Bügel-Top (Balconette) mit Frontverschluss, Slip mit Schnallen an den Hüften · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "balconette", "buegel", "klassisch", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelbraun", name: "Schokobraun", hex: "#3b2616", image: "img/neu/damen/d96-dunkelbraun.jpg?v=herbst22" }
    ]
  },
  {
    id: "d97",
    name: "Halter Bikini Goldring",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 79,
    color: "#6b1c2a",
    accent: "#c5a059",
    image: "img/neu/damen/d97-burgund.jpg?v=herbst22",
    description:
      "Halter-Top in Burgund mit Goldring am Ausschnitt, dazu ein High-Waist-Slip mit seitlichem Cut-out und Goldring. Tiefe Farbe, grafische Schnitte, ein Hauch Gold. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Halter-Top zum Binden im Nacken, High-Waist-Slip mit Cut-out · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "halter", "high-waist", "cut-out", "klassisch", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d97-burgund.jpg?v=herbst22" }
    ]
  },
  {
    id: "d98",
    name: "Tanga Bikini Gold",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 69,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/damen/d98-schwarz.jpg?v=herbst22",
    description:
      "Der Bikini mit schmalem T-Back-Band im Rücken und Tanga-Slip, in drei Varianten: Schwarz mit Triangel-Top und Goldringen, Burgund in Satin mit Goldketten an Top und Hüften, Creme mit Bandeau, Goldbar und hohem Tanga mit Goldpaspel. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Tanga-Slip mit T-Back-Rücken; Top je nach Farbe Triangel (Schwarz, Burgund) bzw. Bandeau (Creme) · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "tanga", "t-back", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/damen/d98-schwarz.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/damen/d98-burgund.jpg?v=herbst22" },
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/damen/d98-creme.jpg?v=herbst22" }
    ]
  },
  {
    id: "d99",
    name: "Triangel Bikini Goldring",
    category: "damen",
    gender: "damen",
    audience: "Damen · Bademode",
    type: "bikini",
    price: 59,
    color: "#14213d",
    accent: "#c5a059",
    image: "img/neu/damen/d99-dunkelblau.jpg?v=herbst22",
    description:
      "Unser Einstieg in die Bademode: String-Triangel mit Goldringen und Tanga-Slip in sechs Farben – Dunkelblau, Metallic-Gold mit Goldkette, Dunkelgrün, Cheetah, Orange und Schwarz mit Blumen in Weiß und Rosa (goldene Stiele). Ein Schnitt, viele Stimmungen. Bikini-Set aus Oberteil und Slip. Aus hygienischen Gründen bitte die Schutzfolie im Zwickel erst nach der Anprobe entfernen. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Stretch-Jersey bzw. Satin-Optik (Schätzung: Polyester/Elastan mit Futter), UV-Schutz nicht geprüft · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "String-Triangel zum Binden, Tanga-Slip mit Goldringen · Größen XS–XL · Passform am Muster prüfen",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    tags: ["bademode", "bikini", "badeanzug", "string", "triangel", "tanga", "strand", "pool", "sommer", "damen", "gold", "eigenmarke"],
    colors: [
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/damen/d99-dunkelblau.jpg?v=herbst22" },
      { id: "gold", name: "Metallic-Gold", hex: "#c5a059", image: "img/neu/damen/d99-gold.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/damen/d99-dunkelgruen.jpg?v=herbst22" },
      { id: "cheetah", name: "Cheetah", hex: "#cbbfae", image: "img/neu/damen/d99-cheetah.jpg?v=herbst22" },
      { id: "orange", name: "Orange", hex: "#d9731f", image: "img/neu/damen/d99-orange.jpg?v=herbst22" },
      { id: "blumen", name: "Blumen", hex: "#2a2226", image: "img/neu/damen/d99-blumen.jpg?v=herbst22" }
    ]
  },
  {
    id: "h49",
    name: "Badehose Lang Goldkordel",
    category: "herren",
    gender: "herren",
    audience: "Herren · Bademode",
    type: "badehose",
    price: 69,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/herren/h49-schwarz.jpg?v=herbst22",
    description:
      "Knielange Badehose mit breitem Gummibund, Steppnaht und goldener Paspel, dazu Seitentaschen und eine Kordel mit goldenen Ösen und goldenen Kordelenden. In Schwarz, Dunkelblau, Dunkelgrün, Burgund und Creme sowie – für 79 € – mit zartem Blumen-Print auf Schwarz. Pool, Strand, Aperitivo. Hinweis: Das Bild ist eine KI-Visualisierung; Details können im Muster abweichen. Eigenes VELORA-Design.",
    fabric: "Schnelltrocknendes Mikrofaser-Gewebe mit Futter (Schätzung: Polyester), ca. 120 g/m² (Schätzung) · alle Material- und Gewichtsangaben sind Schätzungen",
    fit: "Knielang, Gummibund mit Kordel, Seitentaschen · Größen S–XXL · Maße (Schätzung, Gr. M): Außenlänge ca. 52 cm",
    madeIn: "Muster / noch nicht in Produktion · Eigenmarke VELORA · Details: Gold-Hardware",
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",
    tags: ["bademode", "badehose", "badeshorts", "swim", "lang", "knielang", "strand", "pool", "sommer", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "schwarz", name: "Schwarz", hex: "#1c1c1e", image: "img/neu/herren/h49-schwarz.jpg?v=herbst22" },
      { id: "dunkelblau", name: "Dunkelblau", hex: "#14213d", image: "img/neu/herren/h49-dunkelblau.jpg?v=herbst22" },
      { id: "dunkelgruen", name: "Dunkelgrün", hex: "#14301f", image: "img/neu/herren/h49-dunkelgruen.jpg?v=herbst22" },
      { id: "burgund", name: "Burgund", hex: "#6b1c2a", image: "img/neu/herren/h49-burgund.jpg?v=herbst22" },
      { id: "creme", name: "Creme", hex: "#efe6d2", image: "img/neu/herren/h49-creme.jpg?v=herbst22" },
      { id: "blumen", name: "Blumen auf Schwarz", hex: "#2a2226", price: 79, image: "img/neu/herren/h49-blumen.jpg?v=herbst22" }
    ]
  },
  {
    id: "d87",
    name: "VELORA Geschenkgutschein",
    category: "damen",
    gender: "unisex",
    audience: "Unisex · Digital",
    type: "gutschein",
    price: 25,
    color: "#1c1c1e",
    accent: "#c5a059",
    image: "img/neu/gutschein/gutschein-25.jpg?v=herbst22",
    description:
      "Der digitale VELORA Geschenkgutschein: Wert zur Auswahl (25, 50, 100 oder 200 €), Zustellung per E-Mail als PDF-Gutschein. DEMO: Im Beispiel-Shop wird kein echter Gutschein erzeugt oder versendet.",
    fabric: "Digitaler Gutschein (PDF per E-Mail) · kein Versand, keine Ware",
    fit: "Wert 25 / 50 / 100 / 200 € · einlösbar im VELORA-Shop (Demo: Bedingungen noch festzulegen)",
    madeIn: "Demo-Produkt · kein echter Gutschein · Einlösebedingungen und Gültigkeit (in AT/DE rechtlich zu prüfen) noch offen",
    sizes: ["Digital"],
    defaultSize: "Digital",
    sizeHint: "Digital per E-Mail – kein Versand",
    colorLabel: "Wert",
    colorsAsText: true,
    tags: ["gutschein", "geschenk", "geschenkgutschein", "digital", "unisex", "damen", "herren", "gold", "eigenmarke"],
    colors: [
      { id: "w25", name: "25 €", hex: "#c5a059", price: 25, image: "img/neu/gutschein/gutschein-25.jpg?v=herbst22" },
      { id: "w50", name: "50 €", hex: "#c5a059", price: 50, image: "img/neu/gutschein/gutschein-50.jpg?v=herbst22" },
      { id: "w100", name: "100 €", hex: "#c5a059", price: 100, image: "img/neu/gutschein/gutschein-100.jpg?v=herbst22" },
      { id: "w200", name: "200 €", hex: "#c5a059", price: 200, image: "img/neu/gutschein/gutschein-200.jpg?v=herbst22" }
    ]
  }
];

const CATEGORY_LABELS = {
  damen: "Damen",
  herren: "Herren",
  polos: "Polos",
  strick: "Strick",
  oberteile: "Oberteile & Hemden",
  hosen: "Hosen",
  kleider: "Kleider & Röcke",
  jacken: "Jacken",
  maentel: "Mäntel",
  westen: "Westen",
  sets: "Sets",
  sport: "Sport",
  bademode: "Bademode",
  schuhe: "Schuhe",
  socken: "Socken",
  lounge: "Loungewear & Dessous",
  pyjama: "Loungewear & Pyjama",
  guertel: "Gürtel",
  taschen: "Taschen",
  accessoires: "Accessoires",
  unterwaesche: "Unterwäsche",
  "accessoires-schuhe": "Accessoires & Schuhe",
  "lounge-dessous": "Lounge & Dessous",
  geschenke: "Geschenke",
  sale: "Sale",
  herbst: "Herbst"
};

/** Unterkategorien („Tabs“) in fester Reihenfolge. Jedes Produkt liegt über seinen Typ in genau einer Unterkategorie. */
const TAB_ORDER = ["polos", "strick", "oberteile", "hosen", "kleider", "jacken", "maentel", "westen", "sets", "sport", "bademode", "unterwaesche", "pyjama", "schuhe", "socken", "lounge", "guertel", "taschen", "accessoires"];

/** Sammel-Kategorien quer über alles: Geschenke (≤ 100 € + Gutschein), Sale (Demo-Altpreis), Herbst (Tag). */
const COLLECTION_TABS = ["geschenke", "sale", "herbst"];

/** Zwei Welten: DAMEN und HERREN. Jedes Produkt hat `gender` ("damen" | "herren" | "unisex").
 *  Unisex-Artikel erscheinen in BEIDEN Welten (mit Kennzeichnung „Unisex“). In jeder Welt gilt dieselbe Unterkategorie-Logik (Typ → Tab),
 *  aber nur mit Artikeln dieser Welt. Geschenke / Sale / Herbst sind Zusatzfilter (collection), die innerhalb der gewählten Welt wirken. */
const WORLDS = ["damen", "herren"];
const GENDER_LABELS = { damen: "Damen", herren: "Herren", unisex: "Unisex" };
const MAIN_CATEGORIES = [
  { id: "damen", label: "Damen", subs: ["kleider", "oberteile", "strick", "hosen", "jacken", "maentel", "westen", "sets", "sport", "bademode", "schuhe", "taschen", "guertel", "socken", "lounge", "accessoires"] },
  { id: "herren", label: "Herren", subs: ["polos", "strick", "oberteile", "hosen", "jacken", "maentel", "westen", "sets", "sport", "bademode", "unterwaesche", "pyjama", "schuhe", "taschen", "guertel", "socken", "accessoires"] },
  { id: "geschenke", label: "Geschenke", collection: true },
  { id: "sale", label: "Sale", collection: true },
  { id: "herbst", label: "Herbst", collection: true }
];
const MAIN_IDS = MAIN_CATEGORIES.map((m) => m.id);

/** Alte Sammel-Hauptkategorien (bis Version 13). Nur noch für alte Links: ?main=accessoires-schuhe bzw. ?cat=lounge-dessous
 *  werden als Gruppen-Filter über beide Welten gelesen (die Welt kann dann per Damen/Herren-Pill gewählt werden). */
const LEGACY_GROUPS = [
  { id: "accessoires-schuhe", label: "Accessoires & Schuhe", subs: ["schuhe", "taschen", "guertel", "socken", "accessoires"] },
  { id: "lounge-dessous", label: "Lounge & Dessous", subs: ["lounge", "pyjama"] }
];
CATEGORY_LABELS["accessoires-schuhe"] = "Accessoires & Schuhe";
CATEGORY_LABELS["lounge-dessous"] = "Lounge & Dessous";

/** Produkt-Typ → genau ein Tab (jedes Produkt liegt in genau einem Typ-Tab; "herbst", "sale" und "geschenke" sind Sammel-Tabs: herbst per Tag, sale per Altpreis, geschenke per Preis ≤ 100 € plus Gutschein; der Gutschein liegt als Typ-Tab unter Accessoires). */
const TAB_BY_TYPE = {
  polo: "polos",
  strick: "strick", hoodie: "strick",
  oberteil: "oberteile", tee: "oberteile",
  hose: "hosen",
  kleid: "kleider", rock: "kleider",
  jacke: "jacken", sakko: "jacken",
  mantel: "maentel",
  weste: "westen",
  set: "sets",
  sport: "sport",
  bikini: "bademode", badehose: "bademode",
  schuhe: "schuhe",
  socken: "socken",
  pyjama: "pyjama",
  lounge: "lounge", dessous: "lounge", accessoire: "lounge", body: "lounge", onesie: "lounge",
  guertel: "guertel",
  tasche: "taschen",
  brille: "accessoires",
  gutschein: "accessoires",
  unterwaesche: "unterwaesche"
};

/** Karten-Label je Typ. */
const TYPE_LABELS = {
  polo: "Polo", kleid: "Kleid", rock: "Rock", body: "Body", onesie: "Onesie", hose: "Hose", weste: "Weste",
  guertel: "Gürtel · Unisex", jacke: "Jacke", tasche: "Tasche", hoodie: "Hoodie", strick: "Strick",
  tee: "T-Shirt", oberteil: "Oberteil / Hemd", set: "Set", sport: "Sport-Set", bikini: "Bikini", badehose: "Badehose", mantel: "Mantel", schuhe: "Schuhe", socken: "Socken",
  dessous: "Dessous", lounge: "Loungewear", accessoire: "Accessoire", brille: "Sonnenbrille", sakko: "Sakko", gutschein: "Geschenkgutschein", unterwaesche: "Unterwäsche", pyjama: "Pyjama"
};

/** Tab-Schlüssel eines Produkts (für Zurück-Link, Filter). */
function productTab(p) {
  return TAB_BY_TYPE[p.type] || p.category;
}

/** Geschlecht eines Produkts: "damen" | "herren" | "unisex" (Feld `gender`; Fallback aus `category`). */
function productGender(p) {
  return (p && p.gender) || (p && p.category === "herren" ? "herren" : "damen");
}

/** Gehört das Produkt zur Welt (damen/herren)? Unisex gehört zu beiden. */
function productInWorld(p, world) {
  if (!world || world === "alle") return true;
  const g = productGender(p);
  return g === world || g === "unisex";
}

/** „Heimat“-Welt eines Produkts (für Zurück-Links): Damen/Herren, bei Unisex nach `category`. */
function productMain(p) {
  const g = productGender(p);
  return g === "unisex" ? (p.category === "herren" ? "herren" : "damen") : g;
}

/** Unterkategorien einer Welt bzw. Legacy-Gruppe; Sammel-Kategorien und „alle“ zeigen alle Unterkategorien. */
function mainSubs(mainId) {
  const m = MAIN_CATEGORIES.find((x) => x.id === mainId) || LEGACY_GROUPS.find((x) => x.id === mainId);
  return m && m.subs ? m.subs : TAB_ORDER;
}

/** Gehört das Produkt zur Welt bzw. Sammel-Kategorie? (alte Namen: accessoires-schuhe / lounge-dessous = Gruppen) */
function productInMain(p, mainId) {
  if (!mainId || mainId === "alle") return true;
  if (mainId === "herbst") return !!(p.tags && p.tags.includes("herbst"));
  if (mainId === "sale") return isSale(p);
  if (mainId === "geschenke") return isGift(p);
  const grp = LEGACY_GROUPS.find((x) => x.id === mainId);
  if (grp) return grp.subs.includes(productTab(p));
  return productInWorld(p, mainId);
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

/** Größen-Anzeige: Gürtel in cm („95 cm“), sonst unverändert. */
function sizeLabel(product, size) {
  return product && product.sizeUnit ? size + " " + product.sizeUnit : String(size);
}

/** Kurzer Größenhinweis für die Produktseite. */
function sizeHint(product) {
  if (product.sizeHint) return product.sizeHint;
  const list = product.sizes && product.sizes.length ? product.sizes : SIZES;
  if (list.length === 1) return list[0];
  return "Erhältlich von " + list[0] + " bis " + list[list.length - 1];
}

/** Preis einer Variante (colors[].price), sonst Produktpreis. */
function variantPrice(product, colorId) {
  if (!product) return 0;
  const c = colorId && product.colors ? product.colors.find((x) => x.id === colorId) : null;
  return c && typeof c.price === "number" ? c.price : product.price;
}

/** Niedrigster Preis eines Produkts (Varianten berücksichtigt). */
function lowestPrice(product) {
  const vs = (product.colors || []).filter((c) => typeof c.price === "number").map((c) => c.price);
  return vs.length ? Math.min(product.price, ...vs) : product.price;
}

/** DEMO-Sale: Produkt mit durchgestrichenem Altpreis. */
function isSale(product) {
  return !!product && typeof product.oldPrice === "number" && product.oldPrice > product.price;
}

/** Rabatt in Prozent (gerundet) für die Sale-Anzeige. */
function salePercent(product) {
  return isSale(product) ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
}

/** Geschenke-Tab: alles bis 100 € (automatisch aus den Preisen) plus der Gutschein. */
const GIFT_MAX_PRICE = 100;
function isGift(product) {
  return lowestPrice(product) <= GIFT_MAX_PRICE || product.type === "gutschein";
}

function getProductById(id) {
  return VELORA_PRODUCTS.find((p) => p.id === id);
}

function formatPrice(eur) {
  return new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR"
  }).format(eur);
}

function productMatchesGender(p, gender) {
  return productInWorld(p, gender);
}

function productMatchesCategory(p, category) {
  if (!category || category === "alle") return true;
  if (category === "damen" || category === "herren") return productInWorld(p, category);
  if (category === "herbst" || category === "sale" || category === "geschenke" || LEGACY_GROUPS.some((g) => g.id === category)) return productInMain(p, category);
  if (TAB_ORDER.includes(category)) return productTab(p) === category;
  return p.category === category;
}

/** Filter. Neu: { world: "damen"|"herren", category: <Unterkategorie>, collection: "geschenke"|"sale"|"herbst", query }.
 *  Alt (weiter gültig): main (Welt, Sammel-Kategorie oder alte Gruppe), gender (= Welt), category (auch Sammel-/Welt-Namen). */
function filterProducts({ category, query, gender, main, world, collection } = {}) {
  let list = [...VELORA_PRODUCTS];
  if (world && world !== "alle") list = list.filter((p) => productInWorld(p, world));
  if (collection && collection !== "alle") list = list.filter((p) => productInMain(p, collection));
  if (main && main !== "alle") {
    list = list.filter((p) => productInMain(p, main));
  }
  if (category && category !== "alle") {
    list = list.filter((p) => productMatchesCategory(p, category));
  }
  if (gender && gender !== "alle") {
    list = list.filter((p) => productMatchesGender(p, gender));
  }
  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((t) => t.includes(q))) ||
        (CATEGORY_LABELS[p.category] || "").toLowerCase().includes(q) ||
        (GENDER_LABELS[productGender(p)] || "").toLowerCase().includes(q) ||
        (TYPE_LABELS[p.type] || "").toLowerCase().includes(q) ||
        (p.type && p.type.toLowerCase().includes(q))
    );
  }
  return list;
}
