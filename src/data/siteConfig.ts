export const siteSettings = {
  businessName: "Kirkhall Wall Coatings",
  phone: "+44 7427 915070",
  phoneFormatted: "+447427915070",
  email: "kvaledrywall@yahoo.co.uk",
  address: "Kirkhall Road, Newarthill, Motherwell, ML1 5BG",
  feedbackWebhook:
    "https://services.leadconnectorhq.com/hooks/WF7Y8qzBVOgw8fxKn8Q5/webhook-trigger/aXaXsPKiYnSNX9fKyTUG",
  feedbackGoogleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ5fbJQIRtiEgR_weeyFBA_wE",
  quickFormWebhook:
    "https://services.leadconnectorhq.com/hooks/WF7Y8qzBVOgw8fxKn8Q5/webhook-trigger/5Lx8iELfcROhHth1kkS5",
  quoteFormWebhook:
    "https://services.leadconnectorhq.com/hooks/WF7Y8qzBVOgw8fxKn8Q5/webhook-trigger/g7ZWxYAGVJlU6IZ1Tbj7",
  discountFormWebhook:
    "https://services.leadconnectorhq.com/hooks/WF7Y8qzBVOgw8fxKn8Q5/webhook-trigger/JenpnfG3oAxb13dbWRmf",
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
  checkatradeUrl: "",
};

export const siteConfig = {
  // Business Information
  business: {
    name: "Kirkhall Wall Coatings",
    shortName: "Kirkhall",
    tagline: "External Wall & uPVC Window Coatings Specialists",
    broadServiceName: "Property Coatings & Refurbishment",
    yearsExperience: 20,
    foundedYear: 2010,
  },

  // Contact Information
  contact: {
    phone: siteSettings.phone,
    phoneRaw: siteSettings.phoneFormatted,
    email: siteSettings.email,
    emergencyPhone: siteSettings.phone,
  },

  // Address
  address: {
    line1: "Kirkhall Road",
    line2: "",
    city: "Newarthill, Motherwell",
    postcode: "ML1 5BG",
    country: "Scotland",
    full: "Kirkhall Road, Newarthill, Motherwell, ML1 5BG",
  },

  // Service Areas
  serviceArea: {
    primary: "Motherwell",
    regions: ["North Lanarkshire", "Glasgow"],
    radiusMiles: 35,
  },

  // Webhooks (LeadConnector / GHL)
  webhooks: {
    quote: siteSettings.quoteFormWebhook,
    discount: siteSettings.discountFormWebhook,
    review: siteSettings.feedbackWebhook,
    contact: siteSettings.quickFormWebhook,
  },

  // Social Media Links
  social: {
    facebook: siteSettings.facebookUrl,
    instagram: siteSettings.instagramUrl,
    twitter: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    checkatrade: siteSettings.checkatradeUrl,
  },

  // Google Business Profile
  google: {
    gmbLink: siteSettings.feedbackGoogleReviewUrl,
    reviewLink: siteSettings.feedbackGoogleReviewUrl,
    placeId: "ChIJ5fbJQIRtiEgR_weeyFBA_wE",
    rating: 5.0,
    reviewCount: 150,
  },

  // Branding Colors (HSL values for Tailwind)
  colors: {
    primary: "220 55% 12%", // Deep navy
    secondary: "217 72% 38%", // Brand navy accent
    accent: "217 72% 38%", // Match secondary
  },

  // Trust Indicators
  trust: {
    insured: true,
    insuranceAmount: "Verified on request",
    certifications: [
      "ICORR coatings inspection",
      "Timeserved workforce",
    ],
    responseTime: "24 Hours",
    guarantee: "Guaranteed workmanship",
  },

  // SEO Defaults
  seo: {
    siteUrl: "https://kirkhall-wall-coatings.co.uk",
    titleSuffix: "| Kirkhall Wall Coatings",
    defaultTitle: "Kirkhall Wall Coatings | External Wall & uPVC Window Specialists",
    defaultDescription:
      "External wall coatings and uPVC window and door spraying across Motherwell, North Lanarkshire, and Glasgow. Timeserved workforce with guaranteed workmanship.",
    ogImage: "/og-image.jpg",
    language: "en-GB",
    locale: "en_GB",
    twitterHandle: "",
  },

  // Operating Hours
  hours: {
    weekday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
    emergency: "Mon-Sat",
  },

  // Payment Methods Accepted
  payment: {
    methods: ["Cash", "Card", "Bank Transfer"],
    financing: false,
  },

  // Legal
  legal: {
    companyNumber: "",
    vatNumber: "",
    insuranceProvider: "",
    policyNumber: "",
    privacyPolicyLastUpdated: "5 March 2026",
    termsOfServiceLastUpdated: "5 March 2026",
  },

  // Key Selling Points
  sellingPoints: {
    quality: "Top Class Workmanship",
    communication: "Clear Communication",
    familyRun: "Timeserved Workforce",
  },

  // Referral Discount
  referral: {
    discount: "10%",
    description: "10% off for referrals",
  },
};

// Helper function to get full phone link
export const getPhoneLink = () => `tel:${siteConfig.contact.phoneRaw}`;

// Helper function to get email link
export const getEmailLink = () => `mailto:${siteConfig.contact.email}`;

// Helper function to format address for display
export const getFormattedAddress = () => {
  const { line1, line2, city, postcode } = siteConfig.address;
  return [line1, line2, city, postcode].filter(Boolean).join(", ");
};

export default siteConfig;
