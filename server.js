// Local preview server (Replit / npm start). Production is served by Netlify
// from the site/ folder, configured in netlify.toml.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(__dirname, 'site');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(SITE, { extensions: ['html'] }));
app.use((req, res) => res.status(404).sendFile(path.join(SITE, '404.html')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Kanya Interior preview on http://0.0.0.0:${PORT}`);
});
