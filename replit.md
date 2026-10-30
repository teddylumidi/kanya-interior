# Kanya Interior

A portfolio website for Kanya Interior — premium interior design, renovation & construction services in Nairobi, Kenya.

## Repository
- Canonical GitHub repository: https://github.com/teddylumidi/kanya-interior

## Stack
- Static site in `site/` (one `index.html` with inline CSS/JS, no build step)
- Hosted on Netlify at https://kanyainterior.co.ke, auto-deployed from `main`; `netlify.toml` publishes only `site/`
- `server.js` (Express) is only for local/Replit preview
- Fonts: Cormorant Garamond + Jost (Google Fonts); icons are inline SVG (no icon library)

## How to run
```
npm install
npm start
```
Preview on port 5000 (or `$PORT`).

## Project structure
```
site/index.html          single-page site (HTML, CSS, JS inline)
site/images/work/        portfolio photos: NN-title.webp (full size) and NN-title-sm.webp (card thumbnail)
site/images/hero.webp    hero photo
site/images/logo*.webp   logo and monogram
site/og-image.jpg        social share image (1200x630)
site/sitemap.xml, robots.txt, 404.html, favicon.png, apple-touch-icon.png
netlify.toml             Netlify publish folder and headers
server.js                local preview server
```

## Editing
- Portfolio cards are plain HTML in `site/index.html` (section `#work`). Each card has a category (`data-cat`) matching a filter button, a title, and alt text that describes the photo.
- Add new photos as WebP: a full-size image (max 1600px) and a 640x480 thumbnail ending in `-sm.webp`.
- Contact form opens WhatsApp (+254 757 373 025) with the visitor's details; nothing is stored.
- Social media links were removed from the footer because they pointed to generic homepages. Add them back once the real profile URLs are known.

## User preferences
- Image labels must accurately describe what is actually visible in each photo.
