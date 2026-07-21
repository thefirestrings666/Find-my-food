const UI_STRINGS = {
  fr: {
    tag: "Snacks",
    tagline: "Menu complet de la friterie — photo, prix et description pour chaque article",
    categoryAll: "Tous",
    categoryLabel: "Catégorie",
    meatLabel: "Viande",
    filtersButton: "Filtres",
    resetButton: "Réinitialiser",
    noResults: "Aucun snack ne correspond à cette combinaison de filtres.",
    note: "Photos issues de Wikimedia Commons (libres de droit) pour la grande majorité des articles. Faute de photo dédiée existante pour certaines variantes régionales/de marque, quelques articles partagent la photo d'un cousin proche : Berenhap (photo Hamburger), Viandel et Gehaktstaaf (photo Frikandel), Sitostick (photo Grizly) et Saterol (photo Loempia).",
    category: {
      croquette: "Croquettes",
      frikandel: "Frikandel & saucisses",
      poulet: "Poulet",
      rouleau: "Rouleaux",
      souffle: "Soufflés",
      aperitif: "Apéritif",
      divers: "Divers"
    },
    meat: {
      boeuf: "Bœuf",
      porc: "Porc",
      poulet: "Poulet",
      veau: "Veau",
      crevette: "Crevette",
      vegetarien: "Végétarien"
    }
  },
  en: {
    tag: "Snacks",
    tagline: "Full snack-bar menu — photo, price and description for every item",
    categoryAll: "All",
    categoryLabel: "Category",
    meatLabel: "Meat",
    filtersButton: "Filters",
    resetButton: "Reset",
    noResults: "No snack matches this filter combination.",
    note: "Photos from Wikimedia Commons (freely licensed) for the vast majority of items. For a few regional/brand variants with no dedicated photo available, the closest relative's photo is reused instead: Berenhap (Hamburger photo), Viandel and Gehaktstaaf (Frikandel photo), Sitostick (Grizly photo) and Saterol (Loempia photo).",
    category: {
      croquette: "Croquettes",
      frikandel: "Frikandel & sausages",
      poulet: "Chicken",
      rouleau: "Rolls",
      souffle: "Soufflés",
      aperitif: "Appetizers",
      divers: "Other"
    },
    meat: {
      boeuf: "Beef",
      porc: "Pork",
      poulet: "Chicken",
      veau: "Veal",
      crevette: "Shrimp",
      vegetarien: "Vegetarian"
    }
  },
  de: {
    tag: "Snacks",
    tagline: "Komplette Snackbar-Karte — Foto, Preis und Beschreibung für jeden Artikel",
    categoryAll: "Alle",
    categoryLabel: "Kategorie",
    meatLabel: "Fleisch",
    filtersButton: "Filter",
    resetButton: "Zurücksetzen",
    noResults: "Kein Snack entspricht dieser Filterkombination.",
    note: "Fotos von Wikimedia Commons (frei lizenziert) für die meisten Artikel. Für einige regionale Varianten/Markenartikel ohne verfügbares eigenes Foto wird stattdessen das Foto des nächsten Verwandten verwendet: Berenhap (Hamburger-Foto), Viandel und Gehaktstaaf (Frikandel-Foto), Sitostick (Grizly-Foto) und Saterol (Loempia-Foto).",
    category: {
      croquette: "Kroketten",
      frikandel: "Frikandel & Würste",
      poulet: "Hähnchen",
      rouleau: "Rollen",
      souffle: "Soufflés",
      aperitif: "Appetizer",
      divers: "Sonstiges"
    },
    meat: {
      boeuf: "Rind",
      porc: "Schwein",
      poulet: "Hähnchen",
      veau: "Kalb",
      crevette: "Garnele",
      vegetarien: "Vegetarisch"
    }
  }
};

const CATEGORY_ORDER = ["croquette", "frikandel", "poulet", "rouleau", "souffle", "aperitif", "divers"];
const MEAT_ORDER = ["boeuf", "porc", "poulet", "veau", "crevette", "vegetarien"];
