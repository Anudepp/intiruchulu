import type { Product } from "../types/product";

export const products: Product[] = [
  // ============================================================
  // PODIS
  // ============================================================

  {
    id: "karivepaku-podi",
    nameTelugu: "కరివేపాకు పొడి",
    nameEnglish: "Curry Leaves Powder",
    category: "podis",
    image: "/menu/KarivepakuPodi.png",

    ingredients: [
      "Curry leaves",
      "Chana dal",
      "Urad dal",
      "Dry red chillies",
      "Cumin seeds",
      "Black pepper",
      "Garlic",
      "Salt",
    ],

    processOfMaking: [
      "Fresh curry leaves are cleaned thoroughly and dried.",
      "Curry leaves and lentils are roasted separately on low heat.",
      "Dry red chillies and spices are roasted until aromatic.",
      "All roasted ingredients are allowed to cool completely.",
      "The ingredients are ground together into a flavorful coarse powder.",
      "The finished curry leaves powder is packed in an airtight container.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "vellulli-karam",
    nameTelugu: "వెల్లుల్లి కారం",
    nameEnglish: "Garlic Chili Powder",
    category: "podis",
    image: "/menu/VellulliKaram.png",

    ingredients: [
      "Garlic",
      "Dry red chillies",
      "Coriander seeds",
      "Cumin seeds",
      "Urad dal",
      "Chana dal",
      "Salt",
    ],

    processOfMaking: [
      "Fresh garlic is cleaned and prepared.",
      "Garlic and lentils are roasted separately until fragrant.",
      "Dry red chillies and spices are roasted on low heat.",
      "All ingredients are cooled before grinding.",
      "The roasted ingredients are ground together to create a balanced spicy powder.",
      "The finished garlic chili powder is packed airtight to preserve freshness.",
    ],

    quantities: [
       { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "munagaku-podi",
    nameTelugu: "మునగాకు పొడి",
    nameEnglish: "Moringa Leaves Powder",
    category: "podis",
    image: "/menu/MunagakuPodi.png",

    ingredients: [
      "Moringa leaves",
      "Chana dal",
      "Urad dal",
      "Dry red chillies",
      "Cumin seeds",
      "Garlic",
      "Salt",
    ],

    processOfMaking: [
      "Fresh moringa leaves are cleaned and dried.",
      "The leaves are gently roasted to remove excess moisture.",
      "Lentils, chillies, and spices are roasted separately.",
      "All ingredients are cooled to room temperature.",
      "The ingredients are ground into a fine and aromatic powder.",
      "The moringa leaves powder is packed in an airtight container.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "pappula-podi",
    nameTelugu: "పప్పుల పొడి",
    nameEnglish: "Pappula Podi",
    category: "podis",
    image: "/menu/PappulaPodi.png",

    ingredients: [
      "Chana dal",
      "Urad dal",
      "Toor dal",
      "Dry red chillies",
      "Cumin seeds",
      "Garlic",
      "Salt",
    ],

    processOfMaking: [
      "The lentils are cleaned and roasted separately.",
      "Dry red chillies and cumin are roasted until aromatic.",
      "Garlic is lightly roasted to enhance its flavor.",
      "All ingredients are cooled completely.",
      "The roasted ingredients are ground into a coarse powder.",
      "The finished podi is packed airtight for freshness.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "nuvvula-podi",
    nameTelugu: "నువ్వుల పొడి",
    nameEnglish: "Sesame Seeds Powder",
    category: "podis",
    image: "/menu/NuvvulaPodi.png",

    ingredients: [
      "Sesame seeds",
      "Dry red chillies",
      "Chana dal",
      "Urad dal",
      "Cumin seeds",
      "Garlic",
      "Salt",
    ],

    processOfMaking: [
      "Sesame seeds are cleaned and roasted carefully on low heat.",
      "Lentils, chillies, and spices are roasted separately.",
      "All ingredients are cooled before grinding.",
      "The roasted ingredients are ground together with sesame seeds.",
      "The mixture is ground to a slightly coarse texture.",
      "The finished sesame powder is packed airtight.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "aviseginjala-podi",
    nameTelugu: "అవిసెగింజల పొడి",
    nameEnglish: "Flaxseed Powder",
    category: "podis",
    image: "/menu/AvisaginjalaPodi.png",

    ingredients: [
      "Flax seeds",
      "Dry red chillies",
      "Cumin seeds",
      "Garlic",
      "Urad dal",
      "Chana dal",
      "Salt",
    ],

    processOfMaking: [
      "Flax seeds are cleaned and lightly roasted.",
      "Lentils, chillies, and spices are roasted separately.",
      "All ingredients are cooled completely.",
      "The roasted ingredients are ground together.",
      "The mixture is ground into a flavorful powder while retaining the natural aroma of flax seeds.",
      "The finished powder is packed in an airtight container.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "charu-podi",
    nameTelugu: "చారు పొడి",
    nameEnglish: "Rasam Powder",
    category: "podis",
    image: "/menu/ChaaruPodi.png",

    ingredients: [
      "Coriander seeds",
      "Cumin seeds",
      "Black pepper",
      "Dry red chillies",
      "Toor dal",
      "Fenugreek seeds",
      "Curry leaves",
      "Salt",
    ],

    processOfMaking: [
      "Whole spices and lentils are cleaned carefully.",
      "Each ingredient is roasted separately to preserve its individual aroma.",
      "The roasted ingredients are cooled completely.",
      "All ingredients are blended and ground into a fine aromatic powder.",
      "The powder is mixed thoroughly for an even flavor.",
      "The rasam powder is packed airtight for freshness.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  // ============================================================
  // PACCHADIS
  // ============================================================

  {
    id: "gongura-pickle",
    nameTelugu: "గోంగూర పచ్చడి",
    nameEnglish: "Gongura Pickle",
    category: "pacchadi",
    image: "/menu/GonguraPacchadi.png",

    ingredients: [
      "Fresh gongura leaves",
      "Red chillies",
      "Garlic",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Fresh gongura leaves are cleaned thoroughly and dried.",
      "The leaves are cooked until tender and the excess moisture is removed.",
      "Dry red chillies and spices are prepared separately.",
      "The gongura leaves are blended with the roasted spices.",
      "Garlic and seasoning are added along with the required oil and salt.",
      "The pickle is mixed thoroughly and stored in a clean airtight container.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "kotthimera-pickle",
    nameTelugu: "కొత్తిమీర పచ్చడి",
    nameEnglish: "Coriander Pickle",
    category: "pacchadi",
    image: "/menu/KotthimeraPacchadi.png",

    ingredients: [
      "Fresh coriander leaves",
      "Green chillies",
      "Dry red chillies",
      "Garlic",
      "Tamarind",
      "Mustard seeds",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Fresh coriander leaves are cleaned and excess moisture is removed.",
      "Coriander leaves and chillies are prepared and cooked lightly.",
      "Tamarind and spices are prepared separately.",
      "The ingredients are blended into a thick pickle mixture.",
      "Tempering is prepared with oil and mustard seeds.",
      "The tempering is mixed into the pickle and the finished product is packed.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "meal-maker-pickle",
    nameTelugu: "మీల్ మేకర్ పచ్చడి",
    nameEnglish: "Meal Maker Pickle",
    category: "pacchadi",
    image: "/menu/MealMakerPacchadi.png",

    ingredients: [
      "Meal maker / soy chunks",
      "Red chillies",
      "Garlic",
      "Tamarind",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Meal maker pieces are prepared and excess moisture is removed.",
      "The pieces are seasoned and cooked until they develop a firm texture.",
      "Spices and chillies are prepared separately.",
      "The prepared ingredients are combined with tamarind and seasoning.",
      "Oil tempering is added to enhance the flavor.",
      "The pickle is mixed thoroughly and packed after cooling.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "tomato-pickle",
    nameTelugu: "టొమాటో పచ్చడి",
    nameEnglish: "Tomato Pickle",
    category: "pacchadi",
    image: "/menu/TomatoPacchadi.png",

    ingredients: [
      "Fresh tomatoes",
      "Dry red chillies",
      "Garlic",
      "Tamarind",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Fresh tomatoes are cleaned and chopped.",
      "Tomatoes are cooked until their excess moisture reduces.",
      "Red chillies, garlic, and spices are prepared separately.",
      "The cooked tomatoes are combined with the spice mixture.",
      "Oil tempering with mustard and other spices is added.",
      "The pickle is cooled and packed in a clean airtight container.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "mango-jaggery-pickle",
    nameTelugu: "మామిడికాయ బెల్లం పచ్చడి",
    nameEnglish: "Mango Jaggery Pickle",
    category: "pacchadi",
    image: "/menu/MamidikayaBellamPacchadi.png",

    ingredients: [
      "Raw mangoes",
      "Jaggery",
      "Red chilli powder",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Raw mangoes are washed, dried, and cut into pieces.",
      "Mango pieces are mixed with salt and turmeric.",
      "Spices are prepared and roasted carefully.",
      "Jaggery is added to create the characteristic sweet and spicy flavor.",
      "The ingredients are mixed thoroughly with oil and seasoning.",
      "The pickle is allowed to develop its flavor before being packed.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  {
    id: "mango-pickle",
    nameTelugu: "మామిడికాయ పచ్చడి",
    nameEnglish: "Mango Pickle",
    category: "pacchadi",
    image: "/menu/MamidikayaPacchadi.png",

    ingredients: [
      "Raw mangoes",
      "Red chilli powder",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Garlic",
      "Oil",
    ],

    processOfMaking: [
      "Fresh raw mangoes are washed, dried, and cut into pieces.",
      "Mango pieces are mixed with salt and turmeric.",
      "Red chilli powder and roasted spices are prepared.",
      "The mango pieces are combined with the spice mixture.",
      "Garlic and seasoned oil are added and mixed thoroughly.",
      "The pickle is packed in a clean airtight container for storage.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

  // ============================================================
  // DAILY STAPLES
  // ============================================================

  {
    id: "chapathi",
    nameTelugu: "చపాతీలు",
    nameEnglish: "Chapathis",
    category: "staples",
    image: "/menu/Chapathi.png",

    ingredients: [
      "Whole wheat flour",
      "Water",
      "Salt",
      "Oil",
    ],

    processOfMaking: [
      "Whole wheat flour is mixed with water and a small amount of salt.",
      "The dough is kneaded until soft and smooth.",
      "The dough is rested before preparation.",
      "Individual portions are rolled into thin circular shapes.",
      "Each chapathi is cooked on a hot tawa until lightly browned and cooked through.",
      "Fresh chapathis are packed for delivery.",
    ],

    quantities: [
      { weight: "10 pieces", price: 120 },
      { weight: "20 pieces", price: 240 },
      { weight: "30 pieces", price: 360 },
    ],
  },

  {
    id: "pulihora-pulusu",
    nameTelugu: "పులిహోర పులుసు",
    nameEnglish: "Tamarind Rice Paste",
    category: "staples",
    image: "/menu/PulihoraPulusu.png",

    ingredients: [
      "Tamarind",
      "Green chillies",
      "Dry red chillies",
      "Mustard seeds",
      "Peanuts",
      "Curry leaves",
      "Turmeric",
      "Salt",
      "Sesame oil",
    ],

    processOfMaking: [
      "Tamarind is cleaned and prepared into a concentrated extract.",
      "Spices and chillies are prepared for the seasoning.",
      "The tamarind extract is cooked with the spices and seasoning.",
      "Peanuts and curry leaves are added for texture and flavor.",
      "The mixture is cooked until it reaches the desired consistency.",
      "The finished pulihora paste is cooled and packed hygienically.",
    ],

    quantities: [
     { weight: "100g", price: 70 },
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },
];