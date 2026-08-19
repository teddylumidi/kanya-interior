import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Derive the canonical site URL from env. Set SITE_URL to the production domain
// once it is known (e.g. https://kanyainterior.com). Falls back to the Replit
// dev domain so meta tags still resolve during development.
const SITE_URL = (process.env.SITE_URL || (process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : '')).replace(/\/$/, '');

// robots.txt — registered before static middleware so SITE_URL is always used
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\n${SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml` : ''}`);
});

// sitemap.xml — registered before static middleware; single canonical URL only
app.get('/sitemap.xml', (req, res) => {
  if (!SITE_URL) {
    // Cannot emit a valid sitemap without an absolute base URL
    res.status(503).type('text/plain').send('Sitemap unavailable: SITE_URL is not configured.');
    return;
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  res.type('application/xml');
  res.send(xml);
});

// Serve images and other static project assets before the HTML fallback.
app.use(express.static(__dirname));

// Serve index.html with __SITE_URL__ replaced so meta tags use the real domain.
app.use((req, res) => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  const rendered = html.replaceAll('__SITE_URL__', SITE_URL);
  res.type('html').send(rendered);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
