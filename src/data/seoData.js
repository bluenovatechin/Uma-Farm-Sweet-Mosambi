export const baseBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://www.umafarm.com/#business",
  "name": "Uma Farm Sweet Mosambi",
  "alternateName": [
    "Uma Farm",
    "ઉમા ફાર્મ સ્વીટ મોસંબી",
    "Uma Farm Mosambi Dhansura"
  ],
  "description": "Family-run sweet mosambi (sweet lime, Citrus limetta) orchard at Adalpura Kampa, Dhansura, Gujarat. Tree-ripened fruit, drip irrigated and hand picked, supplied wholesale to APMC mandis, juice bars and fruit sellers, with farm-gate pickup.",
  "url": "https://www.umafarm.com/",
  "telephone": "+91-94260-40220",
  "image": [
    "https://www.umafarm.com/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp",
    "https://www.umafarm.com/assets/images/mosambi-orchard-drip-irrigation-1040.webp",
    "https://www.umafarm.com/assets/images/mosambi-tree-with-fruit-960.webp",
    "https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg"
  ],
  "logo": "https://www.umafarm.com/assets/images/uma-farm-logo.jpg",
  "priceRange": "Wholesale rates",
  "currenciesAccepted": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adalpura Kampa",
    "addressLocality": "Dhansura",
    "addressRegion": "Gujarat",
    "postalCode": "383310",
    "addressCountry": "IN"
  },
  "hasMap": "https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "State", "name": "Gujarat" },
    { "@type": "AdministrativeArea", "name": "Aravalli district" },
    { "@type": "AdministrativeArea", "name": "Sabarkantha district" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Himmatnagar" },
    { "@type": "City", "name": "Modasa" },
    { "@type": "City", "name": "Vadodara" },
    { "@type": "City", "name": "Surat" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-94260-40220",
    "contactType": "sales",
    "areaServed": "IN"
  },
  "knowsAbout": [
    "Sweet mosambi",
    "Sweet lime",
    "Citrus limetta",
    "Mosambi farming",
    "Drip irrigation",
    "Wholesale fruit supply"
  ],
  "makesOffer": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "businessFunction": "http://purl.org/goodrelations/v1#Sell",
    "itemOffered": {
      "@type": "Product",
      "@id": "https://www.umafarm.com/sweet-mosambi/#product",
      "name": "Sweet Mosambi (Sweet Lime, Citrus limetta)",
      "image": "https://www.umafarm.com/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp",
      "description": "Tree-ripened sweet mosambi from Uma Farm, Dhansura, Gujarat. Sold wholesale per crate or per kg."
    }
  },
  "sameAs": [
    "https://www.instagram.com/uma_farm_sweet_mosambi/",
    "https://www.facebook.com/share/1DopFHcSrP/"
  ]
};

export const baseWebSiteSchema = {
  "@type": "WebSite",
  "@id": "https://www.umafarm.com/#website",
  "url": "https://www.umafarm.com/",
  "name": "Uma Farm Sweet Mosambi",
  "inLanguage": "en-IN",
  "publisher": {
    "@id": "https://www.umafarm.com/#business"
  }
};

export const seoData = {
  '/': {
    title: 'Uma Farm Sweet Mosambi | Mosambi Farm in Dhansura, Gujarat',
    description: 'Fresh, tree-ripened sweet mosambi (sweet lime) from Uma Farm, Adalpura Kampa, Dhansura, Gujarat. Wholesale supply to mandis, juice bars and fruit sellers.',
    canonical: 'https://www.umafarm.com/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/#webpage",
          "url": "https://www.umafarm.com/",
          "name": "Uma Farm Sweet Mosambi | Mosambi Farm in Dhansura, Gujarat",
          "description": "Fresh, tree-ripened sweet mosambi (sweet lime) from Uma Farm, Adalpura Kampa, Dhansura, Gujarat. Wholesale supply to mandis, juice bars and fruit sellers.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.umafarm.com/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp"
          }
        }
      ]
    }
  },
  '/about/': {
    title: 'About Uma Farm | Mosambi Orchard in Adalpura Kampa, Dhansura',
    description: 'Uma Farm is a family-run sweet mosambi orchard at Adalpura Kampa, Dhansura, Gujarat. Drip irrigation, 20x20 ft tree spacing, hand picking and no carbide ripening.',
    canonical: 'https://www.umafarm.com/about/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/about/#webpage",
          "url": "https://www.umafarm.com/about/",
          "name": "About Uma Farm | Mosambi Orchard in Adalpura Kampa, Dhansura",
          "description": "Uma Farm is a family-run sweet mosambi orchard at Adalpura Kampa, Dhansura, Gujarat. Drip irrigation, 20x20 ft tree spacing, hand picking and no carbide ripening.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.umafarm.com/assets/images/mosambi-orchard-drip-irrigation-1040.webp"
          },
          "breadcrumb": { "@id": "https://www.umafarm.com/about/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/about/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.umafarm.com/about/" }
          ]
        }
      ]
    }
  },
  '/sweet-mosambi/': {
    title: 'Sweet Mosambi (Sweet Lime) from Uma Farm, Dhansura, Gujarat',
    description: 'Tree-ripened sweet mosambi (Citrus limetta) grown at Uma Farm, Dhansura, Gujarat. Sweet taste, thin peel and high juice yield. See photos from our orchard.',
    canonical: 'https://www.umafarm.com/sweet-mosambi/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/sweet-mosambi/#webpage",
          "url": "https://www.umafarm.com/sweet-mosambi/",
          "name": "Sweet Mosambi (Sweet Lime) from Uma Farm, Dhansura, Gujarat",
          "description": "Tree-ripened sweet mosambi (Citrus limetta) grown at Uma Farm, Dhansura, Gujarat. Sweet taste, thin peel and high juice yield. See photos from our orchard.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.umafarm.com/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp"
          },
          "breadcrumb": { "@id": "https://www.umafarm.com/sweet-mosambi/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/sweet-mosambi/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Our Mosambi", "item": "https://www.umafarm.com/sweet-mosambi/" }
          ]
        },
        {
          "@type": "ImageObject",
          "contentUrl": "https://www.umafarm.com/assets/images/sweet-mosambi-on-tree-uma-farm-1200.webp",
          "caption": "Four green sweet mosambi fruits hanging on a branch at Uma Farm, Adalpura Kampa, Dhansura, Gujarat",
          "creditText": "Uma Farm Sweet Mosambi",
          "creator": { "@id": "https://www.umafarm.com/#business" },
          "copyrightNotice": "Uma Farm Sweet Mosambi",
          "contentLocation": { "@type": "Place", "name": "Uma Farm, Adalpura Kampa, Dhansura, Gujarat" }
        },
        {
          "@type": "ImageObject",
          "contentUrl": "https://www.umafarm.com/assets/images/mosambi-tree-with-fruit-960.webp",
          "caption": "A full sweet lime (mosambi) tree with many fruits at Uma Farm in Dhansura, Gujarat",
          "creditText": "Uma Farm Sweet Mosambi",
          "creator": { "@id": "https://www.umafarm.com/#business" },
          "copyrightNotice": "Uma Farm Sweet Mosambi",
          "contentLocation": { "@type": "Place", "name": "Uma Farm, Adalpura Kampa, Dhansura, Gujarat" }
        },
        {
          "@type": "ImageObject",
          "contentUrl": "https://www.umafarm.com/assets/images/mosambi-orchard-drip-irrigation-1040.webp",
          "caption": "Rows of mosambi trees loaded with fruit and a drip irrigation line on the ground at Uma Farm",
          "creditText": "Uma Farm Sweet Mosambi",
          "creator": { "@id": "https://www.umafarm.com/#business" },
          "copyrightNotice": "Uma Farm Sweet Mosambi",
          "contentLocation": { "@type": "Place", "name": "Uma Farm, Adalpura Kampa, Dhansura, Gujarat" }
        },
        {
          "@type": "ImageObject",
          "contentUrl": "https://www.umafarm.com/assets/images/sliced-mosambi-and-fresh-juice-1200.webp",
          "caption": "Halved sweet mosambi on a plate next to a glass of fresh mosambi juice",
          "creditText": "Uma Farm Sweet Mosambi",
          "creator": { "@id": "https://www.umafarm.com/#business" },
          "copyrightNotice": "Uma Farm Sweet Mosambi",
          "contentLocation": { "@type": "Place", "name": "Uma Farm, Adalpura Kampa, Dhansura, Gujarat" }
        }
      ]
    }
  },
  '/wholesale/': {
    title: 'Wholesale Mosambi Supplier in Gujarat | Uma Farm, Dhansura',
    description: 'Buy sweet mosambi wholesale direct from Uma Farm, Dhansura. Supply to APMC mandis, juice bars and fruit sellers across Gujarat, or pick up at the farm.',
    canonical: 'https://www.umafarm.com/wholesale/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/wholesale/#webpage",
          "url": "https://www.umafarm.com/wholesale/",
          "name": "Wholesale Mosambi Supplier in Gujarat | Uma Farm, Dhansura",
          "description": "Buy sweet mosambi wholesale direct from Uma Farm, Dhansura. Supply to APMC mandis, juice bars and fruit sellers across Gujarat, or pick up at the farm.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.umafarm.com/assets/images/mosambi-tree-with-fruit-960.webp"
          },
          "breadcrumb": { "@id": "https://www.umafarm.com/wholesale/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/wholesale/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Wholesale", "item": "https://www.umafarm.com/wholesale/" }
          ]
        }
      ]
    }
  },
  '/faq/': {
    title: 'Mosambi Farm FAQ | Uma Farm, Dhansura, Gujarat',
    description: 'Answers about Uma Farm: location in Adalpura Kampa, Dhansura, wholesale mosambi prices, ordering on WhatsApp, natural ripening, packing and farm visits.',
    canonical: 'https://www.umafarm.com/faq/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/faq/#webpage",
          "url": "https://www.umafarm.com/faq/",
          "name": "Mosambi Farm FAQ | Uma Farm, Dhansura, Gujarat",
          "description": "Answers about Uma Farm: location in Adalpura Kampa, Dhansura, wholesale mosambi prices, ordering on WhatsApp, natural ripening, packing and farm visits.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "breadcrumb": { "@id": "https://www.umafarm.com/faq/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/faq/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.umafarm.com/faq/" }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.umafarm.com/faq/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Uma Farm located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uma Farm is at Adalpura Kampa, Dhansura, Aravalli district, Gujarat 383310. Use our Google Maps location for directions to the farm."
              }
            },
            {
              "@type": "Question",
              "name": "Is Dhansura in Aravalli or Sabarkantha district?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dhansura taluka is in Aravalli district. Aravalli was formed from part of Sabarkantha district in 2013, so many people still search for Dhansura under Sabarkantha."
              }
            },
            {
              "@type": "Question",
              "name": "Can I visit the farm and buy directly?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Buyers can come to the farm to see the harvest and load crates. Please message us on WhatsApp before you come so we can have fruit ready. Farm hours are 6:00 AM to 7:00 PM, every day."
              }
            },
            {
              "@type": "Question",
              "name": "What is the phone or WhatsApp number for orders?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Call or WhatsApp +91 94260 40220. Share the quantity you need and your city, and we will reply with the rate and availability."
              }
            },
            {
              "@type": "Question",
              "name": "How is the wholesale price of mosambi decided?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We quote per crate or per kg. The rate depends on fruit grade and size, the quantity and the current APMC mandi rate in Gujarat, so it changes with the market. Ask us on WhatsApp for today's rate."
              }
            },
            {
              "@type": "Question",
              "name": "Do you supply small quantities to juice bars and fruit sellers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We supply juice bars, juice centres and local fruit sellers as well as full loads for mandi traders. Tell us your weekly need and we will plan supply."
              }
            },
            {
              "@type": "Question",
              "name": "Which places do you supply?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We supply buyers across Gujarat, including APMC mandis in Ahmedabad, Himmatnagar, Modasa, Vadodara and Surat. Buyers can also pick up from the farm."
              }
            },
            {
              "@type": "Question",
              "name": "Is your mosambi naturally ripened?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The fruit ripens on the tree. We do not use calcium carbide or any chemical to ripen or colour the fruit."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between mosambi and sweet lime?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "They are the same fruit. Mosambi is the common Indian name for sweet lime (Citrus limetta). In Gujarati it is called મોસંબી."
              }
            },
            {
              "@type": "Question",
              "name": "How do you pack mosambi for transport?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fruit is picked by hand in the early morning, sorted by size and peel quality, and packed in ventilated crates so it stays fresh on the road."
              }
            },
            {
              "@type": "Question",
              "name": "How should I store mosambi after delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Keep crates in a cool, shaded place with good air flow and do not stack them too high. Use the fruit within a few days for the best juice and taste."
              }
            }
          ]
        }
      ]
    }
  },
  '/contact/': {
    title: 'Contact Uma Farm | Mosambi Wholesale Quote, Dhansura',
    description: 'Contact Uma Farm Sweet Mosambi, Adalpura Kampa, Dhansura, Gujarat. Call or WhatsApp +91 94260 40220 for wholesale mosambi rates, or send an inquiry form.',
    canonical: 'https://www.umafarm.com/contact/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/contact/#webpage",
          "url": "https://www.umafarm.com/contact/",
          "name": "Contact Uma Farm | Mosambi Wholesale Quote, Dhansura",
          "description": "Contact Uma Farm Sweet Mosambi, Adalpura Kampa, Dhansura, Gujarat. Call or WhatsApp +91 94260 40220 for wholesale mosambi rates, or send an inquiry form.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "breadcrumb": { "@id": "https://www.umafarm.com/contact/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/contact/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.umafarm.com/contact/" }
          ]
        }
      ]
    }
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Uma Farm Sweet Mosambi',
    description: 'How Uma Farm Sweet Mosambi handles your inquiry details, WhatsApp messages, cookies and analytics on www.umafarm.com.',
    canonical: 'https://www.umafarm.com/privacy-policy/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/privacy-policy/#webpage",
          "url": "https://www.umafarm.com/privacy-policy/",
          "name": "Privacy Policy | Uma Farm Sweet Mosambi",
          "description": "How Uma Farm Sweet Mosambi handles your inquiry details, WhatsApp messages, cookies and analytics on www.umafarm.com.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "breadcrumb": { "@id": "https://www.umafarm.com/privacy-policy/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/privacy-policy/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.umafarm.com/privacy-policy/" }
          ]
        }
      ]
    }
  },
  '/terms-and-conditions/': {
    title: 'Terms and Conditions | Uma Farm Sweet Mosambi',
    description: 'These Terms and Conditions apply to the use of www.umafarm.com and to orders, quotes and farm pickups from Uma Farm Sweet Mosambi, Adalpura Kampa, Dhansura, Gujarat.',
    canonical: 'https://www.umafarm.com/terms-and-conditions/',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema,
        baseWebSiteSchema,
        {
          "@type": "WebPage",
          "@id": "https://www.umafarm.com/terms-and-conditions/#webpage",
          "url": "https://www.umafarm.com/terms-and-conditions/",
          "name": "Terms and Conditions | Uma Farm Sweet Mosambi",
          "description": "These Terms and Conditions apply to the use of www.umafarm.com and to orders, quotes and farm pickups from Uma Farm Sweet Mosambi, Adalpura Kampa, Dhansura, Gujarat.",
          "isPartOf": { "@id": "https://www.umafarm.com/#website" },
          "about": { "@id": "https://www.umafarm.com/#business" },
          "inLanguage": "en-IN",
          "dateModified": "2026-10-12",
          "breadcrumb": { "@id": "https://www.umafarm.com/terms-and-conditions/#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.umafarm.com/terms-and-conditions/#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.umafarm.com/" },
            { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": "https://www.umafarm.com/terms-and-conditions/" }
          ]
        }
      ]
    }
  },
  '/404.html': {
    title: 'Page not found | Uma Farm Sweet Mosambi',
    description: 'This page could not be found on the Uma Farm Sweet Mosambi website.',
    canonical: 'https://www.umafarm.com/404.html',
    ogImage: 'https://www.umafarm.com/assets/images/uma-farm-sweet-mosambi-og.jpg',
    ogImageAlt: 'Sweet mosambi on the tree at Uma Farm, Adalpura Kampa, Dhansura, Gujarat',
    robots: 'noindex, follow',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        baseBusinessSchema
      ]
    }
  }
};
