# How To Install This Update

This folder only contains files that are new or changed, it is not the
full project. Copy everything inside this folder into your existing
`pefa-kimana` project, overwriting any file with the same path.

## Steps

1. Unzip this package.
2. Copy the `app/`, `components/`, `data/`, `public/` folders and the
   `IMAGES.md` file from inside `pefa-kimana-updates/` straight into
   the root of your existing project, letting them overwrite the
   matching files.
3. No new dependencies were added, so you do **not** need to run
   `npm install` again.
4. Run `npm run dev` and check:
   - Homepage hero looks the same on desktop, and shows a darkened
     full-width background on phone-sized screens.
   - Every inner page (About, Ministries, Events, Sermons, Gallery,
     Contact, Giving) has a photo-ready banner at the top.
   - Ministry cards now show as photo-style cards.
   - Event cards have a poster slot with the date badge on top of it.
   - Sermons page: cards show a short preview with a "Read full
     highlight" button that opens the complete write-up in a popup,
     including a "Watch the full service" link when a YouTube link is
     set.
   - Giving page: tap the M-Pesa or Bank card to copy the number.

## Adding your real photos

See `IMAGES.md` (also copied into your project root) for the full
guide, short version: put photos in `public/images/...` and list
their paths in `data/images.js`, that one file controls every photo
on the site.

## Files in this package

- `data/images.js` — **new**, the single file that controls every
  photo on the site
- `IMAGES.md` — **new**, the photo guide referenced above
- `public/images/*/.gitkeep` — **new**, empty folders ready for your
  photos (the `.gitkeep` files just keep the empty folders in the
  zip, safe to delete once you add real photos)
- `data/sermons.js` — **changed**, sermons now carry the full
  Sunday Service Highlights write-up (intro, numbered sections,
  conclusion, closing quote), not just a short summary
- `data/giving.js` — **changed**, added a `copyable` flag per giving
  channel
- Everything under `components/` and `app/` listed above — **changed**,
  wired up to the new image system, sermon "Read More" modal, ministry
  background cards, event posters, giving copy-to-clipboard, and the
  mobile hero background
