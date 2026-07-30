# PEFA Kimana Website

Pentecostal Evangelistic Fellowship of Africa, Kimana congregation. Built
with Next.js (App Router), CSS Modules, lucide-react and framer-motion.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's real vs. what's coming

Every page here is fully built and functions the way the live site will,
the only difference is where the content comes from:

- **Content** (sermons, events, ministries, gallery, giving details) is
  hardcoded in the `/data` folder as plain JavaScript files. Once the
  admin CMS is approved and built on Supabase, these files get replaced
  by real database queries, the page components themselves do not need
  to change much.
- **Images** use a labeled placeholder component (`components/PlaceholderImage.jsx`)
  so every photo slot is clearly marked with what it should eventually
  show. Real photos will be hosted on Cloudinary and swapped in directly.
- **Sermon videos** already work with real YouTube links. Drop any normal
  YouTube URL (watch, youtu.be, or shorts) into a sermon's `youtubeUrl`
  field in `data/sermons.js` and the correct thumbnail is pulled in
  automatically via `lib/youtube.js`. Leave it as `null` and the card
  shows a "Recording coming soon" state instead.
- **Weekly photo albums**: rather than re-hosting every photo, the
  Gallery page lists the same Google Drive / Google Photos shared-album
  links already being shared in the church WhatsApp group each Sunday
  (see `data/albums.js`). Adding a new week is just adding one entry.
- **Giving page** account and paybill details in `data/giving.js` are
  placeholders and must be replaced with the church's real accounts
  before launch.
- **Contact form** validates and confirms locally in the browser for
  now. Once the backend is in place it will submit to Supabase (or an
  email service) instead.

## Folder structure

```
app/            Pages (App Router), one folder per route
components/     Shared UI components and their CSS Modules
data/           Hardcoded content, this is what the future CMS replaces
lib/            Small utilities (YouTube link parsing, etc.)
public/         Static assets, including the real PEFA logo
```
