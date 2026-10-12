# Uma Farm Sweet Mosambi

Website for **Uma Farm Sweet Mosambi**, a family-run sweet lime (mosambi) orchard at Adalpura, Dhansura, Aravalli district, Gujarat 383310.

- Live site: https://www.umafarm.com/
- Phone / WhatsApp: +91 94260 40220
- Map: https://maps.app.goo.gl/2VBfWCgWzmzpPiWw8

Contribution of [Vyom1912](https://github.com/Vyom1912) on GitHub.

## Folder structure

Everything in this folder is uploaded to Hostinger's `public_html`.

```text
public_html/
├── index.html                       Home            https://www.umafarm.com/
├── about/index.html                 About           /about/
├── sweet-mosambi/index.html         Our mosambi     /sweet-mosambi/
├── wholesale/index.html             Wholesale       /wholesale/
├── faq/index.html                   FAQ             /faq/
├── contact/index.html               Contact + form  /contact/
├── privacy-policy/index.html        Privacy Policy  /privacy-policy/
├── terms-and-conditions/index.html  Terms           /terms-and-conditions/
├── 404.html                         Custom "page not found"
├── .htaccess                        HTTPS + www redirect, security headers, caching, compression
├── robots.txt                       Crawler rules (search engines and AI assistants allowed)
├── sitemap.xml                      Page and image sitemap
├── llms.txt                         Plain summary of the farm for AI assistants
├── site.webmanifest                 App name, colours and icons
├── favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, icon-192.png, icon-512.png
├── assets/
│   ├── css/style.css                All styles
│   ├── js/main.js                   Menu, form validation, analytics with consent
│   └── images/                      Optimised AVIF + WebP photos, logo, social preview image
└── _source/                         Original full-size photos (blocked from the public by .htaccess)
```

## Deploying on Hostinger

1. In hPanel open **File Manager > public_html** (or use Git deployment into `public_html`).
2. Upload all files and folders from this repository, including the hidden `.htaccess` file.
3. In hPanel, turn on the free SSL certificate for `umafarm.com` and `www.umafarm.com`.
4. Visit `http://umafarm.com` and check that it redirects to `https://www.umafarm.com/`.
5. In Google Search Console, add `https://www.umafarm.com/` and submit `https://www.umafarm.com/sitemap.xml`.

## Settings to fill in

- **Google Analytics:** put your GA4 Measurement ID (`G-XXXXXXXXXX`) in `GA_MEASUREMENT_ID` at the top of `assets/js/main.js`. The cookie consent banner and analytics turn on only when this is set, and analytics loads only after a visitor clicks "Allow analytics".
- **Google reviews:** paste real review text into the reviews section of `index.html` (look for the `REVIEWS` comment).

## Editing

- After changing `style.css` or `main.js`, increase the `?v=` number in the `<link>` and `<script>` tags of every page so browsers fetch the new file.
- Use AVIF or WebP images with descriptive file names and fill in the `alt` text.
- Keep the address, phone and hours the same everywhere: on the pages, in the JSON-LD block in each page's `<head>`, and in `llms.txt`.
