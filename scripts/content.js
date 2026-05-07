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
    before: "assets/ford_truck_front_seat_before.jpeg",
    after: "assets/ford_truck_front_seat_after.jpeg",
  },
  {
    title: "Toyota Console Refresh",
    before: "assets/toyota_console_before.jpeg",
    after: "assets/toyota_console_after.jpeg",
  },
  {
    title: "Jeep Transformation",
    before: "assets/jeep_before3.jpeg",
    after: "assets/jeep_after3.jpeg",
  },
];

export const communityImages = [
  "assets/crosley_community.jpeg",
  "assets/girl_community.jpeg",
  "assets/luke_community.jpeg",
  "assets/luke_trevor_community.jpeg",
  "assets/mason_community.jpeg",
  "assets/trevor_logan_community.jpeg",
  "assets/vincents_community.jpeg",
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
