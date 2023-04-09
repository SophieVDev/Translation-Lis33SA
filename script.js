// DICTIONNAIRE POUR LA TRADUCTION
const languageDict = {
  fr: {
    info: "Information nutritionnelle",
    reg: "Énergie, Règlement",
    energy: "Energie, Règlement UE N° 1169/2011 (kj/100g)",
    proteines: "Protéines, N x 6,25 (g/100g)",
    glucides: "Glucides (g/100g)",
    lipides: "Lipides (g/100g)",
    sucres: "Sucres (g/100g)",
    acideGrasSatures: "Acide Gras saturés (g/100g)",
    selChlorureSodium: "Sel chlorure de sodium (g/100g)",
    etiquette: "Étiquette ",
    liste:
      "Eau, Protéines, Glucides, Alcool, Sels minéraux, Vitamines Oligo-éléments, Polyphénols, Acides minéraux",
  },
  en: {
    info: "Nutritional Information",
    reg: "Energy, EU Regulation No. 1169/2011 (kcal/100g)",
    energy: "Energy, EU Regulation N° 1169/2011 (kj/100g)",
    proteines: "Protein, N x 6.25 (g/100g)",
    glucides: "Carbohydrates (g/100g)",
    lipides: "Lipids (g/100g)",
    sucres: "Sugar (g/100g)",
    acideGrasSatures: "Saturated Fatty Acid (g/100g)",
    selChlorureSodium: "Sodium chloride salt (g/100g)",
    etiquette: "Label ",
    liste:
      "Water, Proteins, Carbohydrates, Alcohol, Mineral salts, Vitamins Trace elements, Polyphenols, Mineral acids",
  },
  es: {
    info: "Información nutricional",
    reg: "Energía, Reglamento UE N° 1169/2011 (kcal/100g)",
    energy: "Energía, Reglamento UE No. 1169/2011 (kj/100g)",
    proteines: "Proteína, N x 6.25 (g/100g)",
    glucides: "Glúcidos (g/100g)",
    lipides: "Lípidos (g/100g)",
    sucres: "azúcar (g/100g)",
    acideGrasSatures: "Ácido Graso Saturado  (g/100g)",
    selChlorureSodium: "Sal de cloruro de sodio (g/100g)",
    etiquette: "etiqueta ",
    liste:
      "Agua, Proteínas, Carbohidratos, Alcohol, Sales minerales, Vitaminas Oligoelementos, Polifenoles, Ácidos minerales",
  },
};

function translatePage() {
  const browserLang = navigator.language.substring(0, 2).toLowerCase();

  // Traduction des mots en fonction de la langue du navigateur
  const info = document.querySelector("#text1");
  const reg = document.querySelector("#text2");
  const energy = document.querySelector("#text3");
  const proteines = document.querySelector("#text4");
  const glucides = document.querySelector("#text5");
  const lipides = document.querySelector("#text6");
  const sucres = document.querySelector("#text7");
  const acideGrasSatures = document.querySelector("#text8");
  const selChlorureSodium = document.querySelector("#text9");
  const etiquette = document.querySelector("#text10");
  const liste = document.querySelector("#text11");

  if (browserLang === "fr") {
    info.textContent = languageDict.fr.info;
    reg.textContent = languageDict.fr.reg;
    energy.textContent = languageDict.fr.energy;
    proteines.textContent = languageDict.fr.proteines;
    glucides.textContent = languageDict.fr.glucides;
    lipides.textContent = languageDict.fr.lipides;
    sucres.textContent = languageDict.fr.sucres;
    acideGrasSatures.textContent = languageDict.fr.acideGrasSatures;
    selChlorureSodium.textContent = languageDict.fr.selChlorureSodium;
    etiquette.textContent = languageDict.fr.etiquette;
    liste.textContent = languageDict.fr.liste;
  } else if (browserLang === "es") {
    const languageRegion = navigator.language.toLowerCase();
    if (languageRegion === "es-es") {
      info.textContent = languageDict.es.info;
      reg.textContent = languageDict.es.reg;
      energy.textContent = languageDict.es.energy;
      proteines.textContent = languageDict.es.proteines;
      glucides.textContent = languageDict.es.glucides;
      lipides.textContent = languageDict.es.lipides;
      sucres.textContent = languageDict.es.sucres;
      acideGrasSatures.textContent = languageDict.es.acideGrasSatures;
      selChlorureSodium.textContent = languageDict.es.selChlorureSodium;
      etiquette.textContent = languageDict.es.etiquette;
      liste.textContent = languageDict.es.liste;
    } else {
      window.location.href = "test.html";
    }
  } else if (browserLang === "en") {
    const languageRegion = navigator.language.toLowerCase();
    if (languageRegion === "en-gb" || languageRegion === "en-ie") {
      info.textContent = languageDict.en.info;
      reg.textContent = languageDict.en.reg;
      energy.textContent = languageDict.en.energy;
      proteines.textContent = languageDict.en.proteines;
      glucides.textContent = languageDict.en.glucides;
      lipides.textContent = languageDict.en.lipides;
      sucres.textContent = languageDict.en.sucres;
      acideGrasSatures.textContent = languageDict.en.acideGrasSatures;
      selChlorureSodium.textContent = languageDict.en.selChlorureSodium;
      etiquette.textContent = languageDict.en.etiquette;
      liste.textContent = languageDict.en.liste;
    } else {
      window.location.href = "test.html";
    }
  } else {
    window.location.href = "test.html";
  }
}

translatePage();
