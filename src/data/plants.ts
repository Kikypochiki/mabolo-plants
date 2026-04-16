export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  imageUrl: string;
  healthBenefits: string[];
  description: string;
}

export const plants: Plant[] = [
  {
    id: "petchay",
    name: "Pechay",
    scientificName: "Brassica rapa",
    imageUrl: "/images/petchay.webp",
    description:
      "Petchay, also known as Chinese cabbage, is a leafy vegetable widely cultivated in the Philippines. It is a staple in home gardens and is valued for its mild, slightly sweet flavor.",
    healthBenefits: [
      "Rich in vitamins A, C, and K",
      "High in calcium and iron",
      "Contains antioxidants that support immune health",
      "Low in calories, good for weight management",
      "Supports bone health and digestion",
    ],
  },
  {
    id: "lettuce",
    name: "Lettuce",
    scientificName: "Lactuca sativa",
    imageUrl: "/images/lettuce.webp",
    description:
      "Lettuce is one of the most commonly consumed leafy vegetables worldwide. It is crunchy, refreshing, and forms the base of many salads and dishes.",
    healthBenefits: [
      "High water content helps with hydration",
      "Rich in vitamin K for blood clotting",
      "Contains folate important for cell function",
      "Low calorie and high fiber",
      "Provides antioxidants that reduce inflammation",
    ],
  },
  {
    id: "white-pipino",
    name: "White Cucumber",
    scientificName: "Cucumis sativus",
    imageUrl: "/images/white-pipino.webp",
    description:
      "White Pipino is a variety of cucumber popular in Filipino cuisine. It has a mild, refreshing taste and crisp texture, commonly eaten raw or in salads.",
    healthBenefits: [
      "High water content for hydration",
      "Contains vitamin K and potassium",
      "Rich in silica for skin health",
      "Antioxidants support heart health",
      "Low in calories, ideal for snacking",
    ],
  },
  {
    id: "okra",
    name: "Okra",
    scientificName: "Abelmoschus esculentus",
    imageUrl: "/images/okra.webp",
    description:
      "Okra, also known as lady's finger, is a flowering plant prized for its edible green pods. It is a common ingredient in Filipino stews and soups like Pinakbet.",
    healthBenefits: [
      "Rich in dietary fiber for digestive health",
      "Contains folate, important during pregnancy",
      "High in vitamin C for immune support",
      "Antioxidants may help reduce blood sugar",
      "Good source of plant-based protein",
    ],
  },
  {
    id: "kalabasa",
    name: "Squash",
    scientificName: "Cucurbita maxima",
    imageUrl: "/images/kalabasa.webp",
    description:
      "Kalabasa, or squash, is a beloved Filipino vegetable known for its sweet, creamy flesh. It is a key ingredient in dishes like Ginisang Kalabasa and is often paired with leafy greens.",
    healthBenefits: [
      "Extremely rich in beta-carotene and vitamin A",
      "Supports eye health and immune function",
      "High in potassium for heart health",
      "Contains fiber for digestive wellness",
      "Antioxidants help reduce inflammation",
    ],
  },
  {
    id: "honeydew-melon",
    name: "Honeydew Melon",
    scientificName: "Cucumis melo",
    imageUrl: "/images/honeydew-melon.webp",
    description:
      "Honeydew melon is a sweet, juicy fruit with pale green flesh. It is enjoyed fresh, in fruit salads, or as a refreshing snack during hot weather.",
    healthBenefits: [
      "High in vitamin C for immune support",
      "Rich in potassium for electrolyte balance",
      "Contains folate for cell health",
      "Hydrating due to high water content",
      "Low in fat and calories",
    ],
  },
  {
    id: "siling-haba",
    name: "Long Chili Pepper",
    scientificName: "Capsicum annuum var. longum",
    imageUrl: "/images/siling-haba.webp",
    description:
      "Siling Haba, or Philippine long pepper, is a staple in Filipino cooking. It adds heat and flavor to dishes like Adobo, Sinigang, and Bicol Express.",
    healthBenefits: [
      "Capsaicin boosts metabolism",
      "Rich in vitamin C and A",
      "Anti-inflammatory properties",
      "May help reduce pain and congestion",
      "Supports cardiovascular health",
    ],
  },
  {
    id: "string-beans",
    name: "String Beans",
    scientificName: "Vigna unguiculata",
    imageUrl: "/images/string-beans.webp",
    description:
      "String beans, also known as sitaw in the Philippines, are long pods commonly used in Filipino vegetable dishes. They are a popular ingredient in Ginisang Sitaw and various stir-fries.",
    healthBenefits: [
      "High in protein for a vegetable",
      "Rich in vitamins A, C, and K",
      "Good source of dietary fiber",
      "Contains folate for cell division",
      "Low glycemic index, suitable for diabetics",
    ],
  },
  {
    id: "sibuyas-dahon",
    name: "Spring Onion",
    scientificName: "Allium fistulosum",
    imageUrl: "/images/sibuyas-dahon.webp",
    description:
      "Sibuyas Dahon, or spring onions, are widely used as a garnish and flavoring agent in Filipino cuisine. Both the green tops and white bulbs are edible and add a mild oniony taste.",
    healthBenefits: [
      "Rich in vitamin K and folate",
      "Contains allicin with antibacterial properties",
      "Antioxidants support heart health",
      "May help regulate blood sugar",
      "Supports immune system function",
    ],
  },
  {
    id: "atsal",
    name: "Bell Pepper",
    scientificName: "Capsicum annuum",
    imageUrl: "/images/atsal.webp",
    description:
      "Bell pepper, known locally as atsal, is a colorful and versatile vegetable widely cultivated in Filipino gardens. With its sweet flavor and crisp texture, it is used fresh in salads, stir-fries, and various Filipino dishes.",
    healthBenefits: [
      "Rich in vitamin C for immune support",
      "Contains capsanthin, a powerful antioxidant",
      "High in vitamins A and E for eye and skin health",
      "Low in calories, excellent for weight management",
      "Supports heart health and reduces inflammation",
    ],
  },
  {
    id: "calabo",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    imageUrl: "/images/calabo.webp",
    description:
      "Calabo, locally known as oregano, is a fragrant herb widely used in Filipino households. It is commonly grown in home gardens and used as a medicinal herb for coughs and colds.",
    healthBenefits: [
      "Strong antibacterial and antifungal properties",
      "Rich in antioxidants",
      "Used traditionally to relieve cough and sore throat",
      "Contains vitamins A, C, and K",
      "Anti-inflammatory effects support respiratory health",
    ],
  },
  {
    id: "kamatis",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    imageUrl: "/images/kamatis.webp",
    description:
      "Kamatis, or tomato, is a ubiquitous ingredient in Filipino cooking. It is used fresh in salads like Ensaladang Kamatis, as a base for sauces, and to add umami to many dishes.",
    healthBenefits: [
      "Rich in lycopene, a powerful antioxidant",
      "High in vitamin C and potassium",
      "Supports heart health",
      "May reduce risk of certain cancers",
      "Promotes healthy skin",
    ],
  },
  {
    id: "talong",
    name: "Eggplant",
    scientificName: "Solanum melongena",
    imageUrl: "/images/talong.webp",
    description:
      "Talong, or eggplant, is a beloved Filipino vegetable known for its soft, spongy texture. Popular preparations include Tortang Talong (eggplant omelet) and Ensaladang Talong.",
    healthBenefits: [
      "Rich in nasunin, an antioxidant in the skin",
      "High in dietary fiber",
      "Supports brain health",
      "May help lower cholesterol",
      "Contains manganese for bone health",
    ],
  },
  {
    id: "cosmos",
    name: "Cosmos",
    scientificName: "Cosmos bipinnatus",
    imageUrl: "/images/cosmos.webp",
    description:
      "Cosmos is an ornamental flowering plant known for its bright, daisy-like blooms. It is commonly grown in gardens and is valued for its beauty and ability to attract pollinators.",
    healthBenefits: [
      "Attracts beneficial pollinators to gardens",
      "Flowers are edible and used in culinary garnishes",
      "Contains antioxidants",
      "Used in traditional medicine for wound healing",
      "Promotes mental well-being through gardening",
    ],
  },
  {
    id: "marigold",
    name: "Marigold",
    scientificName: "Tagetes erecta",
    imageUrl: "/images/marigold.webp",
    description:
      "Marigold is a vibrant flowering plant widely cultivated for its golden blooms. It is used in gardens, as natural dye, and has applications in traditional medicine.",
    healthBenefits: [
      "Contains lutein for eye health",
      "Anti-inflammatory and antimicrobial properties",
      "Used in natural skin care products",
      "Repels garden pests naturally",
      "Rich in flavonoid antioxidants",
    ],
  },
  {
    id: "parsley",
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    imageUrl: "/images/parsley.webp",
    description:
      "Parsley is a vibrant green herb widely used in Filipino and international cuisines. With its fresh, slightly peppery flavor, it is commonly used as a garnish, in soups, and in traditional herbal remedies.",
    healthBenefits: [
      "Exceptionally rich in vitamin K for bone health",
      "High in vitamin C and antioxidants",
      "Contains folate important for cell function",
      "Natural diuretic properties support kidney health",
      "May help reduce inflammation and improve digestion",
    ],
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    imageUrl: "/images/turmeric.webp",
    description:
      "Turmeric is a golden-colored rhizome prized for its vibrant color and earthy flavor. It has been used for thousands of years in cooking and traditional medicine.",
    healthBenefits: [
      "Curcumin is a potent anti-inflammatory compound",
      "Powerful antioxidant properties",
      "Supports joint health and mobility",
      "May improve brain function",
      "Supports liver detoxification",
    ],
  },
  {
    id: "basil",
    name: "Basil",
    scientificName: "Ocimum basilicum",
    imageUrl: "/images/basil.webp",
    description:
      "Basil is an aromatic herb with bright green leaves used in cooking worldwide. It is a key ingredient in pesto, Italian dishes, and many Southeast Asian cuisines.",
    healthBenefits: [
      "Rich in essential oils with antimicrobial properties",
      "High in vitamin K and manganese",
      "Adaptogenic properties help manage stress",
      "Anti-inflammatory and antioxidant effects",
      "Supports digestive health",
    ],
  },
  {
    id: "mint",
    name: "Mint",
    scientificName: "Mentha",
    imageUrl: "/images/mint.webp",
    description:
      "Mint is a refreshing herb known for its cool, invigorating aroma and flavor. It is used in teas, desserts, beverages, and savory dishes across many cuisines.",
    healthBenefits: [
      "Menthol aids digestion and relieves nausea",
      "Natural breath freshener and antibacterial",
      "May relieve headaches and congestion",
      "Antioxidant-rich and anti-inflammatory",
      "Supports cognitive alertness",
    ],
  },
  {
    id: "mayana",
    name: "Mayana",
    scientificName: "Coleus amboinicus",
    imageUrl: "/images/mayana.webp",
    description:
      "Mayana, also known as Cuban oregano or Indian borage, is a fleshy-leaved herb commonly grown in Filipino gardens. It is widely used as a folk medicine for coughs, colds, and insect bites.",
    healthBenefits: [
      "Traditional remedy for cough and asthma",
      "Antibacterial and antifungal properties",
      "Used topically for insect bites and skin irritation",
      "Rich in essential oils like carvacrol",
      "Anti-inflammatory effects aid respiratory health",
    ],
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    imageUrl: "/images/aloe-vera.webp",
    description:
      "Aloe Vera is a succulent plant known for its thick, fleshy leaves filled with a cooling gel. It has been used for centuries in medicine, skincare, and as a home remedy.",
    healthBenefits: [
      "Soothes burns and skin irritation",
      "Aids digestion and relieves constipation",
      "Rich in vitamins, minerals, and amino acids",
      "Antibacterial and antifungal properties",
      "Supports immune system function",
    ],
  },
  {
    id: "blue-ternate",
    name: "Blue Ternate",
    scientificName: "Clitoria ternatea",
    imageUrl: "/images/blue-ternate.webp",
    description:
      "Blue Ternate, also known as butterfly pea flower, is a vine with striking blue flowers. It is used as a natural food coloring, herbal tea, and in traditional medicine.",
    healthBenefits: [
      "Rich in anthocyanins, powerful antioxidants",
      "Used traditionally to improve memory and cognition",
      "Natural calming effect, reduces stress",
      "Supports eye health",
      "Anti-inflammatory and anti-diabetic properties",
    ],
  },
  {
    id: "balbas-pusa",
    name: "Cat's Whiskers",
    scientificName: "Orthosiphon aristatus",
    imageUrl: "/images/balbas-pusa.webp",
    description:
      "Balbas Pusa, or cat's whiskers, is a medicinal herb known for its distinctive long stamens resembling a cat's whiskers. It is widely used in Filipino traditional medicine for kidney and urinary health.",
    healthBenefits: [
      "Supports kidney and urinary tract health",
      "Natural diuretic properties",
      "Rich in rosmarinic acid with antioxidant effects",
      "May help lower blood sugar levels",
      "Anti-inflammatory properties aid joint health",
    ],
  },
  {
    id: "lemongrass",
    name: "Lemongrass",
    scientificName: "Cymbopogon citratus",
    imageUrl: "/images/lemongrass.webp",
    description:
      "Lemongrass is a fragrant tropical grass with a fresh, citrusy aroma. It is widely used in Filipino soups, teas, and as a natural insect repellent.",
    healthBenefits: [
      "Citral compounds aid digestion and reduce bloating",
      "Natural antibacterial and antifungal",
      "May help reduce anxiety and promote sleep",
      "Rich in antioxidants",
      "Traditional remedy for fever and colds",
    ],
  },{
    id: "vetiver",
    name: "Vetiver",
    scientificName: "Chrysopogon zizanioides",
    imageUrl: "/images/vetiver.webp",
    description:
      "Vetiver is a perennial grass known for its deeply rooted system and aromatic roots. It is used in perfumery, aromatherapy, and as a soil erosion control plant.",
    healthBenefits: [
      "Essential oil promotes relaxation and reduces stress",
      "Used in aromatherapy for anxiety relief",
      "Antimicrobial properties support skin health",
      "Root extracts used in traditional medicine",
      "Natural insect repellent",
    ],
  },
  {
    id: "pandan",
    name: "Pandan",
    scientificName: "Pandanus amaryllifolius",
    imageUrl: "/images/pandan-leaves.webp",
    description:
      "Pandan is a fragrant tropical plant widely used in Southeast Asian cooking. Its long, aromatic leaves are commonly infused in rice, desserts, and drinks.",
    healthBenefits: [
      "Contains natural antioxidants",
      "Traditionally used to support digestion",
      "Aromatic compounds may promote relaxation",
      "Used in herbal remedies in some local practices",
      "Adds flavor naturally, reducing need for added sugar",
    ],
  },
];

export function getPlantById(id: string): Plant | undefined {
  return plants.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function getAllPlants(): Plant[] {
  return plants;
}
