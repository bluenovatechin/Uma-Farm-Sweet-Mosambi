# Uma Farm Sweet Mosambi

Official website and digital presence for **Uma Farm Sweet Mosambi**, an authentic agricultural orchard specializing in naturally grown sweet limes (*Citrus limetta*) located in Shakti Nagar, Sabarkantha District, Gujarat, India.

- **Repository**: [https://github.com/bluenovatechin/Uma-Farm-Sweet-Mosambi](https://github.com/bluenovatechin/Uma-Farm-Sweet-Mosambi)
- **Live Website**: [https://bluenovatechin.github.io/Uma-Farm-Sweet-Mosambi/](https://bluenovatechin.github.io/Uma-Farm-Sweet-Mosambi/)
- **Instagram**: [@uma_farm_sweet_mosambi](https://www.instagram.com/uma_farm_sweet_mosambi?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==)
- **Facebook**: [Uma Farm on Facebook](https://www.facebook.com/share/1DopFHcSrP/)
- **Direct Phone / WhatsApp**: `+91 94260 40220`

---

## Orchard & Agricultural Overview

- **Location**: Shakti Nagar, near Gujarat State Highway, Sabarkantha District, Gujarat (PIN: 383310).
- **Cultivation**: 100% natural, on-tree ripened sweet lime (mosambi).
- **Irrigation**: Deep drip irrigation system delivering root-zone hydration.
- **Spacing**: 20×20 feet grid layout for 360-degree sunlight penetration and cross-ventilation.
- **Harvest Method**: Hand-picked at dawn using sanitized tools to preserve peel freshness and moisture content.
- **Wholesale Supply**: Direct supply to APMC mandis, commercial juice chains, fruit retail vendors, and farm-gate bulk buyers.

---

## Features & Implementation

1. **Mobile-First Responsive Layout**: Optimized for smartphones, tablets, and desktops with touch targets >= 48px and a fixed mobile quick-action bar for instant calling and WhatsApp orders.
2. **Direct WhatsApp Inquiry Dispatch**: Wholesale form validates buyer requirements (name, quantity, city, phone) and directly launches WhatsApp with pre-formatted inquiry text to `+91 94260 40220`.
3. **High-Contrast Design System**: Built with accessible agricultural color tokens (`#255D32` leaf green, `#14281A` high-contrast ink, `#F6F8F2` warm background) meeting WCAG AA standards.
4. **Comprehensive SEO & Schema Markup**:
   - `schema.org` JSON-LD Structured Data: `LocalBusiness`, `Farm`, `Product`, and `FAQPage`.
   - Geographic metadata tags for Gujarat local search rankings.
   - Comprehensive keywords for location, place, naturality, selling, and mandi wholesale rates.
5. **Asset Optimization**:
   - Multi-resolution favicons (`favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`).
   - OpenGraph 1200×630 social preview card (`og-image.jpg`).
   - WebP image compression reducing payload while retaining authentic photograph detail.
6. **Compliance & Legal Pages**:
   - Privacy Policy (`privacy.html`)
   - Terms and Conditions (`terms.html`)
   - Custom 404 Error Page (`404.html`)
   - XML Sitemap (`sitemap.xml`) & Search Engine Crawler Directives (`robots.txt`)
7. **Security & Anti-Bot Protection**:
   - Content Security Policy (CSP) upgrade directives.
   - Form honeypot trap and timestamp threshold validation to prevent automated spam.

---

## File Structure

```text
Uma-Farm-Sweet-Mosambi/
├── index.html              # Main homepage with mobile-first CSS & schema markup
├── privacy.html            # Privacy Policy
├── terms.html              # Terms & Conditions
├── 404.html                # Custom 404 Page
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap for search engines
├── logo.jpg                # Farm emblem
├── og-image.jpg            # 1200x630 Social preview card
├── favicon.ico             # Multi-size website icon
├── favicon-32x32.png       # 32x32 PNG favicon
├── favicon-16x16.png       # 16x16 PNG favicon
├── apple-touch-icon.png    # 180x180 iOS touch icon
├── cut-mosambi-opt.webp    # Web-optimized slice photograph
├── mosambi-opt.webp        # Web-optimized whole fruit photograph
├── tree-opt.webp           # Web-optimized orchard view
├── tree2-opt.webp          # Web-optimized tree canopy photograph
└── README.md               # Repository documentation
```

---

## Local Development

Open `index.html` directly in any modern browser, or run a lightweight local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

---

## Contribution

Maintained and contributed by **[Vyom1912](https://github.com/Vyom1912)**.
