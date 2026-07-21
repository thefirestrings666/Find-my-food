const SNACKS = [
  {
    id: "kroket", price: "2,10 €", category: "croquette", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Rundvleeskroket.jpg",
    i18n: {
      fr: { name: "Kroket", desc: "Rouleau pané et croustillant, fourré d'un ragoût crémeux de bœuf." },
      en: { name: "Kroket", desc: "Crispy breaded roll filled with a creamy beef ragout." },
      de: { name: "Kroket", desc: "Knusprig panierte Rolle, gefüllt mit cremigem Rindfleisch-Ragout." }
    }
  },
  {
    id: "frikandel", price: "2,10 €", category: "frikandel", meats: ["porc", "boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Frikandel.JPG",
    i18n: {
      fr: { name: "Frikandel", desc: "Saucisse frite hachée sans peau, souvent servie « speciaal » (oignons, mayo, curry, ketchup)." },
      en: { name: "Frikandel", desc: "Skinless minced-meat fried sausage, often served \"speciaal\" (onions, mayo, curry, ketchup)." },
      de: { name: "Frikandel", desc: "Frittierte Hackfleischwurst ohne Haut, oft „speciaal“ serviert (Zwiebeln, Mayo, Curry, Ketchup)." }
    }
  },
  {
    id: "broodje-kroket", price: "3,50 €", category: "croquette", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Broodje_kroket_-_Febo_-_01.JPG",
    i18n: {
      fr: { name: "Broodje Kroket", desc: "Un kroket servi dans un petit pain." },
      en: { name: "Broodje Kroket", desc: "A kroket served in a bread roll." },
      de: { name: "Broodje Kroket", desc: "Ein Kroket im Brötchen serviert." }
    }
  },
  {
    id: "broodje-frikandel", price: "3,50 €", category: "frikandel", meats: ["porc", "boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Frikandel_broodje_aldi.jpg",
    i18n: {
      fr: { name: "Broodje Frikandel", desc: "Un frikandel servi dans un petit pain." },
      en: { name: "Broodje Frikandel", desc: "A frikandel served in a bread roll." },
      de: { name: "Broodje Frikandel", desc: "Ein Frikandel im Brötchen serviert." }
    }
  },
  {
    id: "bami-nasischijf", price: "2,80 €", category: "divers", meats: ["porc", "boeuf"],
    image: "https://omd-com-files.ams3.digitaloceanspaces.com/uploads/2021/dutch-bamischijf.jpg",
    i18n: {
      fr: { name: "Bami/Nasischijf", desc: "Galette panée fourrée de nouilles (bami) ou de riz épicé (nasi), version indonésienne." },
      en: { name: "Bami/Nasischijf", desc: "Breaded patty filled with noodles (bami) or spiced rice (nasi), Indonesian-style." },
      de: { name: "Bami/Nasischijf", desc: "Panierte Scheibe gefüllt mit Nudeln (bami) oder würzigem Reis (nasi), indonesische Art." }
    }
  },
  {
    id: "kaassouffle", price: "2,40 €", category: "souffle", meats: ["vegetarien"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Kaassouffle.JPG",
    i18n: {
      fr: { name: "Kaassouflé", desc: "Chausson pané au fromage fondant." },
      en: { name: "Kaassouflé", desc: "Breaded pastry with melting cheese." },
      de: { name: "Kaassouflé", desc: "Panierte Tasche mit geschmolzenem Käse." }
    }
  },
  {
    id: "ham-kaassouffle", price: "2,40 €", category: "souffle", meats: ["porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Broodje_kaassouffle.jpg",
    i18n: {
      fr: { name: "Ham-Kaassoufflé", desc: "Variante du kaassouflé avec du jambon en plus du fromage." },
      en: { name: "Ham-Kaassoufflé", desc: "Kaassouflé variant with ham added to the cheese." },
      de: { name: "Ham-Kaassoufflé", desc: "Kaassouflé-Variante mit Schinken zusätzlich zum Käse." }
    }
  },
  {
    id: "kaaskroket", price: "2,70 €", category: "croquette", meats: ["vegetarien"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Kees_Kroket_Breda_DSCF4853.jpg",
    i18n: {
      fr: { name: "Kaaskroket", desc: "Kroket fourré de fromage fondant à la place de la viande." },
      en: { name: "Kaaskroket", desc: "Kroket filled with melting cheese instead of meat." },
      de: { name: "Kaaskroket", desc: "Kroket mit geschmolzenem Käse statt Fleisch gefüllt." }
    }
  },
  {
    id: "groentenkroket", price: "2,70 €", category: "croquette", meats: ["vegetarien"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/20220907_kroketten.jpg",
    i18n: {
      fr: { name: "Groentenkroket", desc: "Kroket végétarien fourré de légumes." },
      en: { name: "Groentenkroket", desc: "Vegetarian kroket filled with vegetables." },
      de: { name: "Groentenkroket", desc: "Vegetarisches Kroket mit Gemüsefüllung." }
    }
  },
  {
    id: "goulashkroket", price: "2,70 €", category: "croquette", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/20220822_goulash_kroket_the_Netherlands.jpg",
    i18n: {
      fr: { name: "Goulashkroket", desc: "Kroket fourré d'un ragoût façon goulasch, viande relevée au paprika." },
      en: { name: "Goulashkroket", desc: "Kroket filled with a goulash-style ragout, meat spiced with paprika." },
      de: { name: "Goulashkroket", desc: "Kroket mit Gulasch-Ragout, mit Paprika gewürztem Fleisch." }
    }
  },
  {
    id: "garnalenkroket", price: "4,00 €", category: "croquette", meats: ["crevette"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GarnaalKrokette1.JPG",
    i18n: {
      fr: { name: "Garnalenkroket", desc: "Kroket fourré d'une bisque crémeuse de crevettes." },
      en: { name: "Garnalenkroket", desc: "Kroket filled with a creamy shrimp bisque." },
      de: { name: "Garnalenkroket", desc: "Kroket mit cremiger Garnelen-Bisque gefüllt." }
    }
  },
  {
    id: "dobben-kroket", price: "3,00 €", category: "croquette", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Febo_Kroket.JPG",
    i18n: {
      fr: { name: "Dobben kroket", desc: "Kroket qualité supérieure (marque Dobben), garniture de viande." },
      en: { name: "Dobben kroket", desc: "Premium kroket (Dobben brand), meat filling." },
      de: { name: "Dobben kroket", desc: "Premium-Kroket (Marke Dobben) mit Fleischfüllung." }
    }
  },
  {
    id: "dobben-kalfskroket", price: "3,00 €", category: "croquette", meats: ["veau"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Patatje_oorlog_met_kalfsvleeskroket_Leidschendam.jpg",
    i18n: {
      fr: { name: "Dobben Kalfskroket", desc: "Kroket qualité Dobben fourré au veau." },
      en: { name: "Dobben Kalfskroket", desc: "Dobben-quality kroket filled with veal." },
      de: { name: "Dobben Kalfskroket", desc: "Kroket in Dobben-Qualität mit Kalbfleischfüllung." }
    }
  },
  {
    id: "bockworst", price: "2,70 €", category: "frikandel", meats: ["porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Bockwurst_.jpg",
    i18n: {
      fr: { name: "Bockworst", desc: "Saucisse type bockwurst, bouillie, fine et légèrement fumée." },
      en: { name: "Bockworst", desc: "Bockwurst-style sausage, boiled, thin and lightly smoked." },
      de: { name: "Bockworst", desc: "Bockwurst-Art, gekocht, fein und leicht geräuchert." }
    }
  },
  {
    id: "hamburger", price: "4,00 €", category: "divers", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Hamburger_patty.jpg",
    i18n: {
      fr: { name: "Hamburger", desc: "Steak haché pané et frit." },
      en: { name: "Hamburger", desc: "Breaded and fried minced beef patty." },
      de: { name: "Hamburger", desc: "Paniertes und frittiertes Rinderhacksteak." }
    }
  },
  {
    id: "gehaktbal", price: "4,00 €", category: "divers", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Gehaktballen_(Dutch_Meat_Ball).JPG",
    i18n: {
      fr: { name: "Gehaktbal", desc: "Boulette de viande hachée, frite." },
      en: { name: "Gehaktbal", desc: "Fried minced meatball." },
      de: { name: "Gehaktbal", desc: "Frittierte Hackfleischklößchen." }
    }
  },
  {
    id: "gehaktstaaf", price: "3,20 €", category: "frikandel", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Frituur_fries_frikandel_mayo_curry_ketchup.jpg",
    i18n: {
      fr: { name: "Gehaktstaaf", desc: "Bâtonnet de viande hachée pané." },
      en: { name: "Gehaktstaaf", desc: "Breaded minced-meat stick." },
      de: { name: "Gehaktstaaf", desc: "Panierter Hackfleischstab." }
    }
  },
  {
    id: "berenhap", price: "4,00 €", category: "frikandel", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Hamburger_patty.jpg",
    i18n: {
      fr: { name: "Berenhap", desc: "Snack pané de viande hachée épicée, spécialité régionale." },
      en: { name: "Berenhap", desc: "Breaded spiced minced-meat snack, a regional specialty." },
      de: { name: "Berenhap", desc: "Panierter, gewürzter Hackfleisch-Snack, regionale Spezialität." }
    }
  },
  {
    id: "grizly", price: "3,50 €", category: "frikandel", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Patat_speciaal_and_frikandel_speciaal.jpg",
    i18n: {
      fr: { name: "Grizly", desc: "Snack pané de viande hachée bien relevée (marque)." },
      en: { name: "Grizly", desc: "Breaded, well-spiced minced-meat snack (brand name)." },
      de: { name: "Grizly", desc: "Panierter, kräftig gewürzter Hackfleisch-Snack (Markenname)." }
    }
  },
  {
    id: "sitostick", price: "3,50 €", category: "frikandel", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Frikandel_special_chiang_mai.jpg",
    i18n: {
      fr: { name: "Sitostick", desc: "Bâtonnet pané de viande épicée (marque régionale)." },
      en: { name: "Sitostick", desc: "Breaded spiced meat stick (regional brand)." },
      de: { name: "Sitostick", desc: "Panierter, gewürzter Fleischstab (regionale Marke)." }
    }
  },
  {
    id: "mexicano", price: "3,40 €", category: "frikandel", meats: ["porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Frikandel_(23658147312).jpg",
    i18n: {
      fr: { name: "Mexicano", desc: "Saucisse épicée façon mexicaine, panée et frite." },
      en: { name: "Mexicano", desc: "Mexican-style spiced sausage, breaded and fried." },
      de: { name: "Mexicano", desc: "Mexikanisch gewürzte Wurst, paniert und frittiert." }
    }
  },
  {
    id: "loempia", price: "4,30 €", category: "rouleau", meats: ["vegetarien", "porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chinese_loempia_(Lidl),_Winschoten_(2023)_01.jpg",
    i18n: {
      fr: { name: "Loempia", desc: "Rouleau de printemps frit, fourré de légumes (et parfois de viande)." },
      en: { name: "Loempia", desc: "Fried spring roll filled with vegetables (and sometimes meat)." },
      de: { name: "Loempia", desc: "Frittierte Frühlingsrolle mit Gemüsefüllung (manchmal mit Fleisch)." }
    }
  },
  {
    id: "kipcorn", price: "2,80 €", category: "poulet", meats: ["poulet"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Kipcorn,_Dutch_diep-fried_snack,_12-10-2021.jpg",
    i18n: {
      fr: { name: "Kipcorn", desc: "Bâtonnet de poulet pané, enrobé d'une chapelure façon corn flakes." },
      en: { name: "Kipcorn", desc: "Breaded chicken stick, coated in a corn-flake-style crumb." },
      de: { name: "Kipcorn", desc: "Paniertes Hähnchenstäbchen mit Cornflakes-artiger Panade." }
    }
  },
  {
    id: "viandel", price: "2,80 €", category: "frikandel", meats: ["porc", "boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Frikandel.JPG",
    i18n: {
      fr: { name: "Viandel", desc: "Bâtonnet de viande hachée pané, variante régionale du frikandel." },
      en: { name: "Viandel", desc: "Breaded minced-meat stick, a regional variant of the frikandel." },
      de: { name: "Viandel", desc: "Panierter Hackfleischstab, regionale Variante des Frikandel." }
    }
  },
  {
    id: "smulrol", price: "3,50 €", category: "rouleau", meats: ["porc", "boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Chinese_loempia_(Lidl),_Winschoten_(2023)_02.jpg",
    i18n: {
      fr: { name: "Smulrol", desc: "Rouleau croustillant fourré de viande, snack généreux et gourmand." },
      en: { name: "Smulrol", desc: "Crispy roll filled with meat, a generous, hearty snack." },
      de: { name: "Smulrol", desc: "Knusprige Rolle mit Fleischfüllung, ein großzügiger, herzhafter Snack." }
    }
  },
  {
    id: "saterol", price: "3,50 €", category: "rouleau", meats: ["poulet"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chinese_loempia_(Lidl),_Winschoten_(2023)_01.jpg",
    i18n: {
      fr: { name: "Saterol", desc: "Rouleau fourré d'une garniture à la sauce satay (cacahuète épicée)." },
      en: { name: "Saterol", desc: "Roll filled with a spiced peanut satay-sauce filling." },
      de: { name: "Saterol", desc: "Rolle mit würziger Erdnuss-Satay-Sauce-Füllung." }
    }
  },
  {
    id: "shoarmarol", price: "3,80 €", category: "rouleau", meats: ["porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Broodje_shoarma.jpg",
    i18n: {
      fr: { name: "Shoarmarol", desc: "Rouleau fourré de viande façon shoarma épicée." },
      en: { name: "Shoarmarol", desc: "Roll filled with spiced shoarma-style meat." },
      de: { name: "Shoarmarol", desc: "Rolle mit gewürztem Fleisch nach Shoarma-Art." }
    }
  },
  {
    id: "frikandel-xxl", price: "4,20 €", category: "frikandel", meats: ["porc", "boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Frikandel_(36204028906).jpg",
    i18n: {
      fr: { name: "Frikandel XXL", desc: "Version grand format du frikandel classique." },
      en: { name: "Frikandel XXL", desc: "Extra-large version of the classic frikandel." },
      de: { name: "Frikandel XXL", desc: "Extragroße Version des klassischen Frikandel." }
    }
  },
  {
    id: "kipfingers", price: "4,20 €", category: "poulet", meats: ["poulet"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/AmericanChinese_Chickenfingers.jpg",
    i18n: {
      fr: { name: "Kipfingers", desc: "Aiguillettes de poulet panées." },
      en: { name: "Kipfingers", desc: "Breaded chicken tenders." },
      de: { name: "Kipfingers", desc: "Panierte Hähnchenstreifen." }
    }
  },
  {
    id: "kipnuggets", price: "4,20 €", category: "poulet", meats: ["poulet"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Chicken_Nuggets.jpg",
    i18n: {
      fr: { name: "Kipnuggets", desc: "Nuggets de poulet panés." },
      en: { name: "Kipnuggets", desc: "Breaded chicken nuggets." },
      de: { name: "Kipnuggets", desc: "Panierte Hähnchen-Nuggets." }
    }
  },
  {
    id: "bitterballen", price: "3,50 €", category: "aperitif", meats: ["boeuf"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Bitterballen.jpeg",
    i18n: {
      fr: { name: "Bitterballen", desc: "Petites boules panées façon kroket, snack apéritif servi avec moutarde." },
      en: { name: "Bitterballen", desc: "Small breaded kroket-style balls, an appetizer snack served with mustard." },
      de: { name: "Bitterballen", desc: "Kleine panierte Kroket-Kugeln, ein Appetizer-Snack, mit Senf serviert." }
    }
  },
  {
    id: "luxe-bittergarnituur", price: "6,00 €", category: "aperitif", meats: ["boeuf", "porc", "poulet"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Bittergarnituur.jpg",
    i18n: {
      fr: { name: "Luxe Bittergarnituur", desc: "Assortiment « de luxe » de plusieurs snacks apéritifs (bitterballen, kaassoufflé, etc.)." },
      en: { name: "Luxe Bittergarnituur", desc: "\"Deluxe\" assortment of several appetizer snacks (bitterballen, kaassouflé, etc.)." },
      de: { name: "Luxe Bittergarnituur", desc: "„Deluxe“-Auswahl mehrerer Appetizer-Snacks (Bitterballen, Kaassouflé usw.)." }
    }
  },
  {
    id: "half-kip", price: "6,50 €", category: "poulet", meats: ["poulet"],
    image: "https://www.wholesomeyum.com/wp-content/uploads/2024/10/wholesomeyum-Roasted-Half-Chicken-2.jpg",
    i18n: {
      fr: { name: "1/2 Kip", desc: "Demi-poulet rôti ou grillé." },
      en: { name: "1/2 Kip", desc: "Roasted or grilled half chicken." },
      de: { name: "1/2 Kip", desc: "Gebratenes oder gegrilltes halbes Hähnchen." }
    }
  },
  {
    id: "sate", price: "7,50 €", category: "divers", meats: ["poulet", "porc"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/CHICKEN_SATAY.jpg",
    i18n: {
      fr: { name: "Sate", desc: "Brochettes de viande (souvent poulet ou porc) servies avec sauce cacahuète." },
      en: { name: "Sate", desc: "Meat skewers (often chicken or pork) served with peanut sauce." },
      de: { name: "Sate", desc: "Fleischspieße (oft Hähnchen oder Schwein) mit Erdnusssauce serviert." }
    }
  }
];
