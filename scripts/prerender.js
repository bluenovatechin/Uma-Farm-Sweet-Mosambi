import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { seoData } from '../src/data/seoData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

async function prerender() {
  console.log('Starting static prerendering for SEO...');

  const templatePath = toAbsolute('dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Please run vite build first.');
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  const serverEntryPath = toAbsolute('dist-ssr/entry-server.js');
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  const { render } = await import(serverEntryUrl);

  const routesToPrerender = [
    '/',
    '/about/',
    '/sweet-mosambi/',
    '/wholesale/',
    '/faq/',
    '/contact/',
    '/privacy-policy/',
    '/terms-and-conditions/',
    '/404.html'
  ];

  for (const route of routesToPrerender) {
    const meta = seoData[route] || seoData['/'];
    const { html: appHtml } = render(route);

    let html = template;

    // Inject app html into #root
    html = html.replace('<!--app-html-->', appHtml);

    // Update title
    if (meta.title) {
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
    }

    // Update meta description
    if (meta.description) {
      html = html.replace(
        /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="description" content="${meta.description}">`
      );
    }

    // Update canonical link
    if (meta.canonical) {
      html = html.replace(
        /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
        `<link rel="canonical" href="${meta.canonical}">`
      );
    }

    // Update robots if specified
    if (meta.robots) {
      html = html.replace(
        /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="robots" content="${meta.robots}">`
      );
    }

    // Update Open Graph tags
    if (meta.title) {
      html = html.replace(
        /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:title" content="${meta.title}">`
      );
    }
    if (meta.description) {
      html = html.replace(
        /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:description" content="${meta.description}">`
      );
    }
    if (meta.canonical) {
      html = html.replace(
        /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta property="og:url" content="${meta.canonical}">`
      );
    }

    // Update Twitter tags
    if (meta.title) {
      html = html.replace(
        /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="twitter:title" content="${meta.title}">`
      );
    }
    if (meta.description) {
      html = html.replace(
        /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
        `<meta name="twitter:description" content="${meta.description}">`
      );
    }

    // Inject JSON-LD Schema
    const schemaScript = meta.schema
      ? `<script type="application/ld+json">${JSON.stringify(meta.schema)}</script>`
      : '';
    html = html.replace('<!--app-head-->', schemaScript);

    // Determine output file path
    let filePath;
    if (route === '/') {
      filePath = toAbsolute('dist/index.html');
    } else if (route === '/404.html') {
      filePath = toAbsolute('dist/404.html');
    } else {
      const cleanPath = route.replace(/^\/|\/$/g, '');
      const dirPath = toAbsolute(`dist/${cleanPath}`);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      filePath = path.join(dirPath, 'index.html');
    }

    fs.writeFileSync(filePath, html);
    console.log(`✓ Pre-rendered: ${route} -> ${path.relative(toAbsolute('dist'), filePath)}`);
  }

  // Clean up temporary server build directory
  const distSsrPath = toAbsolute('dist-ssr');
  if (fs.existsSync(distSsrPath)) {
    fs.rmSync(distSsrPath, { recursive: true, force: true });
  }

  console.log('✓ Prerendering completed successfully for all routes.');
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});
