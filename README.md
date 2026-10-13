# Uma Farm Sweet Mosambi (React + Vite)

Modern, fast, SEO-optimized React + Vite website for **Uma Farm Sweet Mosambi**, a family-run sweet lime (mosambi) orchard at Adalpura Kampa, Dhansura, Aravalli district, Gujarat 383310.

- Live site: https://www.umafarm.com/
- Phone / WhatsApp: +91 94260 40220
- Map: https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8
- Created by [BlueNova Tech PVT Limited](https://bluenovatech.in/).

---

## Architecture & Features

- **Framework**: React 19 + Vite 6
- **Routing**: `react-router-dom` with client-side SPA routing + static pre-rendering
- **SEO & Social**: Pre-rendered static HTML with dynamic `react-helmet-async` tags (Title, Meta Description, Open Graph, Twitter Cards, Canonical URLs, and JSON-LD Schema on every page)
- **Hostinger Ready**: Built for Hostinger hPanel Apache/LiteSpeed with full `.htaccess` configuration, HTTPS redirects, security headers, caching, and PHP API support (`api/contact.php`)
- **Accessibility & Performance**: Semantic HTML5, accessible SVG icons, mobile navigation drawer, skip-links, and high-performance WebP/AVIF responsive images

---

## Project Structure

```text
Uma Farm/
├── public/                          Static files copied directly to dist/ on build
│   ├── .htaccess                    Apache/LiteSpeed redirect, security, & cache rules
│   ├── api/contact.php              Hostinger PHP wholesale inquiry endpoint
│   ├── robots.txt                   Search engine and AI crawler directives
│   ├── sitemap.xml                  XML sitemap with image metadata
│   ├── llms.txt                     Summary for AI assistants
│   ├── site.webmanifest             PWA manifest and color configuration
│   ├── favicon.ico, icons...        Favicons & touch icons
│   └── assets/images/               Optimized WebP/AVIF images
├── src/
│   ├── assets/css/style.css         Core styling & theme tokens
│   ├── components/
│   │   ├── Header.jsx               Site header, branding & mobile drawer navigation
│   │   ├── Footer.jsx               Footer links, address, & copyright
│   │   ├── Seo.jsx                  SEO management with Helmet
│   │   ├── Icon.jsx & IconSprite.jsx SVG icons
│   │   ├── CtaBand.jsx              WhatsApp quote banner
│   │   ├── QuickBar.jsx             Mobile bottom action bar (Call / WhatsApp)
│   │   ├── CookieBanner.jsx         Cookie consent & Google Analytics handler
│   │   ├── InquiryForm.jsx          Wholesale inquiry form with WhatsApp & PHP fallback
│   │   ├── OrchardPlan.jsx          Vector 20x20 ft orchard layout diagram
│   │   └── FaqItem.jsx              Collapsible FAQ items
│   ├── pages/
│   │   ├── HomePage.jsx             Home (/)
│   │   ├── AboutPage.jsx            About (/about/)
│   │   ├── SweetMosambiPage.jsx     Our Mosambi (/sweet-mosambi/)
│   │   ├── WholesalePage.jsx        Wholesale (/wholesale/)
│   │   ├── FaqPage.jsx              FAQ (/faq/)
│   │   ├── ContactPage.jsx          Contact (/contact/)
│   │   ├── PrivacyPolicyPage.jsx    Privacy Policy (/privacy-policy/)
│   │   ├── TermsAndConditionsPage.jsx Terms (/terms-and-conditions/)
│   │   └── NotFoundPage.jsx         404 Page (/404.html)
│   ├── data/seoData.js              Metadata and JSON-LD schemas for all pages
│   ├── App.jsx                      App layout and route definitions
│   ├── main.jsx                     Client entry point (supports hydration)
│   └── entry-server.jsx             SSR entry for static pre-rendering
├── scripts/
│   └── prerender.js                 Generates static HTML files for all routes during build
├── _legacy_html/                    Backup copy of original static HTML files
├── package.json
└── vite.config.js
```

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Production Build & Static Pre-rendering

To compile the application and pre-render all static HTML pages:

```bash
npm run build
```

This runs:
1. `vite build` - Builds the client bundle into `dist/`.
2. `vite build --ssr` - Compiles the server entry point.
3. `node scripts/prerender.js` - Pre-renders every route (`/`, `/about/`, `/sweet-mosambi/`, `/wholesale/`, `/faq/`, `/contact/`, `/privacy-policy/`, `/terms-and-conditions/`, `/404.html`) into static HTML with full SEO tags, Open Graph, and JSON-LD schema.

---

## Deploying on Hostinger hPanel

1. Run `npm run build` locally.
2. In Hostinger **hPanel**, go to **File Manager** > **public_html**.
3. Upload all contents of the `dist/` folder directly into `public_html` (including the `.htaccess` file).
4. Verify your SSL certificate is enabled for `umafarm.com` and `www.umafarm.com`.
5. Testing:
   - Visit `https://www.umafarm.com/` - check home page.
   - Click navigation links - smooth client routing.
   - Refresh `/about/` or `/wholesale/` - loads the pre-rendered HTML without 404s.
   - Fill out the inquiry form - opens WhatsApp and optionally posts to `api/contact.php`.
