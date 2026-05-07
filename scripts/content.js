const assetUrl = (fileName) => new URL(`../assets/${fileName}`, import.meta.url).href;

export const siteConfig = {
  name: "A1 Auto Detailing",
  tagline: "Precision, pride, and protection in every detail.",
  nav: [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About Us" },
    { href: "pricing.html", label: "Pricing" },
    { href: "community.html", label: "Community" },
    { href: "contact.html", label: "Contact Us" },
  ],
  contact: {
    phone: "(859) 786-9138",
    phoneHref: "tel:+18597869138",
    email: "a1autodetailing2021@gmail.com",
    emailHref: "mailto:a1autodetailing2021@gmail.com",
    serviceArea: "Serving Northern Kentucky and Cincinnati communities",
    facebook: "https://www.facebook.com/a1.autodetailing20/",
    instagram: "https://www.instagram.com/a1.autodetailing/",
    hours: [
      "By appointment only",
    ],
  },
};

export const logoUrl = assetUrl("a1_logo.png");

export const services = [
  "Interior Detailing",
  "Exterior Wash & Protection",
  "Steam Cleaning",
  "Shampoo & Upholstery Restoration",
  "Leather Cleaning & Conditioning",
  "Clay/Sealant Paint Protection",
];

export const beforeAfterSets = [
  {
    title: "Ford Truck Interior",
    before: assetUrl("ford_truck_front_seat_before.jpeg"),
    after: assetUrl("ford_truck_front_seat_after.jpeg"),
  },
  {
    title: "Toyota Console Refresh",
    before: assetUrl("toyota_console_before.jpeg"),
    after: assetUrl("toyota_console_after.jpeg"),
  },
  {
    title: "Jeep Transformation",
    before: assetUrl("jeep_before3.jpeg"),
    after: assetUrl("jeep_after3.jpeg"),
  },
];

export const communityImages = [
  assetUrl("crosley_community.jpeg"),
  assetUrl("girl_community.jpeg"),
  assetUrl("luke_community.jpeg"),
  assetUrl("luke_trevor_community.jpeg"),
  assetUrl("mason_community.jpeg"),
  assetUrl("trevor_logan_community.jpeg"),
  assetUrl("vincents_community.jpeg"),
];

export const detailPackages = [
  {
    name: "Interior Only",
    badge: "Popular Pick",
    features: [
      "Thorough Vacuum",
      "APC wipe-down",
      "Steam Clean",
      "Shampoo carpet & upholstery",
      "UV Dressing for plastics & mats",
      "Streak-Free glass cleaning",
      "Fresh Leather scent",
    ],
    pricing: { Car: "$130", Midsize: "$150", "SUV/Truck": "$180" },
  },
  {
    name: "Deluxe",
    badge: "Budget Pick",
    features: [
      "Thorough vacuum, APC wipe-down, clean & protect mats, clean & condition leather, clean windows in & out",
      "Thorough wash, clean wheels & wheel wells, wash door jams, spray wax 2-3/m protection",
    ],
    pricing: { Car: "$145", Midsize: "$165", "SUV/Truck": "$185" },
  },
  {
    name: "Supreme",
    badge: "Popular Pick",
    features: [
      "Thorough vacuum, APC wipe-down, clean & protect mats, clean & condition leather, clean headliner, shampoo carpet & upholstery, steam clean, clean windows in & out",
      "Thorough wash, clean wheels & wheel wells, wash door jams, tire shine, clay mitt, spray sealant 6-12/m protection",
    ],
    pricing: { Car: "$200", Midsize: "$230", "SUV/Truck": "$270" },
  },
];
