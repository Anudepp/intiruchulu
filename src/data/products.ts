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
      "Coriander seeds",
      "Turmeric",
      "Garlic",
      "Salt",
    ],

    flavorProfile:
      "Aromatic, herbal, and mild-spicy with rich nutty notes from roasted lentils.",

    servingSuggestions: [
      "Mix with steamed rice and a spoonful of hot ghee.",
      "Sprinkle over warm idlis or dosa with sesame oil.",
      "Pair with upma or pongal for an added herbal kick.",
    ],

    storageInstructions: [
      "Store in an airtight glass or plastic container in a cool, dry place.",
      "Keep away from direct sunlight and heat.",
      "Use a dry spoon to preserve freshness up to 6 months.",
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
      "Turmeric",
      "Salt",
    ],

    flavorProfile:
      "Pungent, bold, fiery red chili warmth balanced by savory garlic aroma.",

    servingSuggestions: [
      "Serve with hot rice and ghee or oil.",
      "Dust generously on ghee dosa, uttapam, or vada.",
      "Use as a dry spice rub for fried potatoes or roasted arbi.",
    ],

    storageInstructions: [
      "Store in an airtight container in a dry pantry.",
      "Ensure garlic oil moisture doesn't collect; avoid damp spoons.",
      "Refrigeration extends flavor punch up to 6 months.",
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
      "Turmeric",
      "Salt",
    ],

    flavorProfile:
      "Earthy, slightly peppery, nutrient-dense herbal flavor with warm garlic undertones.",

    servingSuggestions: [
      "Mix into hot rice with ghee for a healthy meal starter.",
      "Sprinkle over parathas, dosas, or multigrain rotis.",
      "Stir a spoonful into curd rice for enhanced flavor and nutrition.",
    ],

    storageInstructions: [
      "Store in a cool, dark, airtight container to maintain leaf color and nutrition.",
      "Keep strictly dry; use only dry utensils.",
      "Best consumed within 6 months for optimal flavor and potency.",
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
      "peanuts ",
      "Roasted gram",
      "Dry red chillies",
      "Cumin seeds",
      "Garlic",
      "Salt",
    ],

    flavorProfile:
      "Nutty, mild, comforting lentil flavor with gentle spice and aromatic cumin.",

    servingSuggestions: [
      "Classic comfort food mixed into hot rice with generous ghee.",
      "Ideal companion for idli, vada, and crispy dosa.",
      "Great topping for stuffed brinjal or okra stir-fries.",
    ],

    storageInstructions: [
      "Store in an airtight jar in a cool, moisture-free space.",
      "Keep tightly sealed to prevent humidity softening the coarse texture.",
      "Stays fresh for up to 6 months.",
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

    flavorProfile:
      "Deeply nutty, rich, toasted sesame aroma with medium red chili warmth.",

    servingSuggestions: [
      "Serve with piping hot rice and ghee or sesame oil.",
      "Toss with boiled potatoes or ivy gourd (dondakaya) fry.",
      "Pair with steamed rice and raw onion slices on the side.",
    ],

    storageInstructions: [
      "Store in a clean, airtight glass container away from direct sunlight.",
      "Keep cool to protect natural sesame oils from going rancid.",
      "Shelf life is up to 5-6 months at room temperature.",
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
      "Coriander seeds",
      "Salt",
    ],

    flavorProfile:
      "Nutty, earthy, robust spice blend with health-boosting flax seeds and garlic.",

    servingSuggestions: [
      "Mix with hot rice and ghee as an omega-3 rich food starter.",
      "Sprinkle over dosas, uttapam, or chapathi rolls.",
      "Add to warm porridge or curd rice for a healthy crunch.",
    ],

    storageInstructions: [
      "Store in an airtight container, preferably in the refrigerator.",
      "Protect from heat and air exposure to preserve natural oils.",
      "Best consumed within 6 months for optimal flavor and potency.",
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
      "Urad dal",
      "Toor dal",
      "Cumin seeds",
      "Fenugreek seeds",
      "Dry red chillies",
      "Toor dal",
      "Curry leaves",
      "Salt",
    ],

    flavorProfile:
      "Fragrant, citrusy coriander, spicy black pepper, and digestive aromatic spices.",

    servingSuggestions: [
      "Add while preparing traditional South Indian Rasam / Charu.",
      "Use as a seasoning accent for lentil soups and tomato broth.",
      "Sprinkle over roasted vegetables for aromatic warmth.",
    ],

    storageInstructions: [
      "Store in a cool, dry place in an airtight jar.",
      "Keep away from steam and moisture when cooking.",
      "Retains essential aroma for up to 6 months.",
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

    flavorProfile:
      "Tangy, sour, bold, and fiery authentic Andhra signature taste.",

    servingSuggestions: [
      "Ultimate combination with hot steamed rice, melted ghee, and raw onions.",
      "Pairs exceptionally well with curd rice and hot biryani.",
      "Spread on chapathis or parathas for a tangy spicy roll.",
    ],

    storageInstructions: [
      "Store in a cool, dry place in a clean glass or ceramic jar.",
      "Always use a dry spoon; never allow water or moisture inside.",
      "Refrigerate after opening to retain freshness for up to 6 months.",
    ],

    quantities: [
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },

   {
    id: "Ginger-pickle",
    nameTelugu: "అల్లం పచ్చడి",
    nameEnglish: "Ginger Pickle",
    category: "pacchadi",
    image: "/menu/GingerPacchadi.png",
    ingredients: [
      "Fresh Ginger",
      "Red chillies",
      "Garlic",
      "Mustard seeds",
      "Fenugreek seeds",
      "Turmeric",
      "Salt",
      "Oil",
    ],

    flavorProfile:
      "Tangy, sour, bold, and fiery authentic Andhra signature taste.",

    servingSuggestions: [
      "Ultimate combination with hot steamed rice, melted ghee, and raw onions.",
      "Pairs exceptionally well with curd rice and hot biryani.",
      "Spread on chapathis or parathas for a tangy spicy roll.",
    ],

    storageInstructions: [
      "Store in a cool, dry place in a clean glass or ceramic jar.",
      "Always use a dry spoon; never allow water or moisture inside.",
      "Refrigerate after opening to retain freshness for up to 6 months.",
    ],

    quantities: [
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
      "Dry red chillies Powder",
      "Garlic",
      "Tamarind",
      "Mustard seeds powder",
      "Fenugreek seeds powder",
      "Salt",
      " Peanut Oil",
      "Hing (Asafoetida)",
    ],

    flavorProfile:
      "Herbaceous, fresh citrus green note with balanced tamarind tang and garlic spice.",

    servingSuggestions: [
      "Great condiment for breakfast items like idli, dosa, and vada.",
      "Mix with hot rice and ghee for a refreshing herbal meal.",
      "Serve alongside rotis, curd rice, or upma.",
    ],

    storageInstructions: [
      "Keep refrigerated immediately for long-lasting vibrant flavor.",
      "Use only dry stainless steel or glass spoons.",
      "Best consumed within 6 months of opening.",
    ],

    quantities: [
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
      "Meal maker (soya chunks)",
      "Dry red chillies Powder",
      "Garlic",
      "Mustard seeds powder",
      "Fenugreek seeds powder",
      "Salt",
      "Garam masala",
      " Peanut Oil",
    ],

    flavorProfile:
      "Chewy, savory protein-packed chunks infused with spicy, mustardy, tamarind masala.",

    servingSuggestions: [
      "Pairs brilliantly with plain steamed rice and dal.",
      "Serve as a flavorful side for curd rice or chapathi.",
      "Great companion for fried rice or pulao.",
    ],

    storageInstructions: [
      "Keep stored in an airtight glass jar away from direct heat.",
      "Refrigeration recommended to keep soy chunks fresh and firm.",
      "Consumable up to 6 months when stored properly.",
    ],

    quantities: [
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
      "Dry red chillies Powder",
      "Garlic",
      "Tamarind",
      "Mustard seeds powder",
      "Fenugreek seeds powder",
      "Salt",
      " Peanut Oil",
      "Hing (Asafoetida)"
    ],

    flavorProfile:
      "Rich tomato umami, zesty tamarind sourness, and deep garlic-tempered spice.",

    servingSuggestions: [
      "Serve with piping hot rice and a spoonful of ghee.",
      "Excellent side for idli, dosa, uttapam, and vada.",
      "Pairs perfectly with parathas and curd rice.",
    ],

    storageInstructions: [
      "Store in a cool, dry place in an airtight jar.",
      "Refrigerate after opening to prolong freshness up to 6 months.",
      "Use strict dry spoon hygiene.",
    ],

    quantities: [
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
      " Peanut Oil",
      "Hing (Asafoetida)"
    ],

    flavorProfile:
      "Sweet, tangy, and mildly spicy sweet-and-sour raw mango delight (Teepi Avakaya).",

    servingSuggestions: [
      "Serve with hot rice, ghee, or curd rice.",
      "Spreads nicely over hot chapathis or parathas as a sweet-savory relish.",
      "Great accompaniment with mathri, poori, or khichdi.",
    ],

    storageInstructions: [
      "Store in an airtight ceramic or glass jar in a dry cabinet.",
      "Protect from moisture; use clean dry utensils.",
      "Stays good for up to 6 months.",
    ],

    quantities: [
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
      "peanut Oil",
      "Hing (Asafoetida)"
    ],

    flavorProfile:
      "Fiery, pungent mustard kick with sharp sourness from raw cut mangoes (Avakaya).",

    servingSuggestions: [
      "Classic accompaniment to mudda pappu, hot rice, and ghee.",
      "Irresistible combination with cold curd rice on warm days.",
      "Complements parathas and South Indian meals.",
    ],

    storageInstructions: [
      "Store in a traditional ceramic (jhad) or glass jar in a cool place.",
      "Keep oil level floating slightly above pickle surface for preservation.",
      "Use only clean, completely dry spoons; lasts up to 12 months.",
    ],

    quantities: [
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
      "Oil",
    ],

    flavorProfile:
      "Soft, whole-wheat wholesome flavor with light toasted aromas.",

    servingSuggestions: [
      "Serve warm with veg or non-veg curries, dal, or korma.",
      "Roll up with Gongura pickle, Tomato pickle, or Podi for quick meals.",
      "Pair with paneer butter masala or mixed vegetable fry.",
    ],

    storageInstructions: [
      "Keep wrapped in foil or an insulated casserole box for immediate meal soft texture.",
      "Refrigerate in an airtight container for up to 2 days.",
      "Reheat on a warm hot tava / pan before serving.",
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
      "Peanut Oil",
      "Hing (Asafoetida)"
    ],

    flavorProfile:
      "Tangy, spicy, nutty, and savory concentrated traditional tamarind blend.",

    servingSuggestions: [
      "Mix thoroughly into cooked, cooled steamed rice for instant festival-style Pulihora.",
      "Garnish with additional fried peanuts and curry leaves.",
      "Pair prepared Pulihora with curd rice or potato chips.",
    ],

    storageInstructions: [
      "Store in a clean, dry airtight glass jar.",
      "Refrigeration extends freshness and retains rich flavor up to 6 months.",
      "Use a dry spoon every time.",
    ],

    quantities: [
      { weight: "250g", price: 175 },
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 700 },
    ],
  },
];