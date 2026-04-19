import glassSkinSerumImg from "@/assets/glass-skin-serum.png";
import dewyMoistureCreamImg from "@/assets/dewy-moisture-cream.png";
import glowEssenceTonerImg from "@/assets/glow-essence-toner.png";
import reviveEyeCreamImg from "@/assets/revive-eye-cream.png";

export interface Product {
  id: string;
  slug: string;
  name: string;
  desc: string;
  price: string;
  numericPrice: number;
  image: string;
  benefits?: string[];
  ingredients?: string;
  howToUse?: string;
  concernTags?: string[];
  relatedProductIds?: string[];
}

export const productsData: Product[] = [
  {
    id: "1",
    slug: "glass-skin-serum",
    name: "Glass Skin Serum",
    desc: "Hydrating hyaluronic acid serum",
    price: "$48",
    numericPrice: 48,
    image: glassSkinSerumImg,
    benefits: [
      "Plumps and deeply hydrates",
      "Restores compromised skin barrier",
      "Leaves a luminous, glass-like finish",
    ],
    ingredients:
      "Water, Sodium Hyaluronate, Glycerin, Niacinamide, Centella Asiatica Extract, Panthenol, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply 2-3 drops to clean, damp skin morning and night. Gently pat into face and neck before heavier creams.",
    concernTags: ["Dryness", "Dullness"],
    relatedProductIds: ["2", "3"],
  },
  {
    id: "2",
    slug: "dewy-moisture-cream",
    name: "Dewy Moisture Cream",
    desc: "Rich barrier-repair moisturizer",
    price: "$52",
    numericPrice: 52,
    image: dewyMoistureCreamImg,
    benefits: [
      "Locks in intense moisture",
      "Soothes redness and irritation",
      "Strengthens cellular lipid barrier",
    ],
    ingredients:
      "Aqua, Squalane, Ceramide NP, Shea Butter, Caprylic/Capric Triglyceride, Simmondsia Chinensis Seed Oil, Tocopherol.",
    howToUse:
      "Warm a pea-sized amount between fingertips and press gently into the skin. Use as the final step in your routine.",
    concernTags: ["Dryness", "Aging"],
    relatedProductIds: ["1", "4"],
  },
  {
    id: "3",
    slug: "glow-essence-toner",
    name: "Glow Essence Toner",
    desc: "Brightening niacinamide essence",
    price: "$36",
    numericPrice: 36,
    image: glowEssenceTonerImg,
    benefits: [
      "Evens skin tone over time",
      "Refines pores and texture",
      "Preps skin for better absorption",
    ],
    ingredients:
      "Water, Butylene Glycol, Niacinamide, Licorice Root Extract, Aloe Barbadensis Leaf Water, 1,2-Hexanediol, Allantoin.",
    howToUse:
      "After cleansing, dispense into palms and pat directly onto face. Apply multiple layers for the '7-skin' method hydration.",
    concernTags: ["Dullness", "Acne"],
    relatedProductIds: ["1", "2"],
  },
  {
    id: "4",
    slug: "revive-eye-cream",
    name: "Revive Eye Cream",
    desc: "Peptide-rich eye treatment",
    price: "$42",
    numericPrice: 42,
    image: reviveEyeCreamImg,
    benefits: [
      "Reduces appearance of fine lines",
      "Depuffs under-eye area",
      "Brightens dark circles",
    ],
    ingredients:
      "Aqua, Glycerin, Acetyl Hexapeptide-8, Caffeine, Niacinamide, Avocado Oil, Dimethicone, Adenosine.",
    howToUse:
      "Gently tap a tiny amount around the orbital bone using your ring finger until fully absorbed.",
    concernTags: ["Aging"],
    relatedProductIds: ["2", "1"],
  },
];
