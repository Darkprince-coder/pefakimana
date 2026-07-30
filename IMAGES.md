# Adding Real Photos

Every real photo on the site is controlled from **one file**:
`data/images.js`. You do not need to touch any page or component to
add a photo, just edit that file and drop the photo itself into the
matching folder under `public/images/`.

## How it works

1. Put your photo file somewhere under `public/images/` (folders are
   already created for you: `hero/`, `ministries/`, `leadership/`,
   `gallery/`, `albums/`, `events/`, plus a general `about/` spot).
2. Open `data/images.js` and set the matching key to the path of that
   file, starting with a `/`, for example:

   ```js
   hero: {
     home: "/images/hero/home.jpg",
     ...
   }
   ```
3. Save. That's it, no other file needs to change.

If you leave a value as `""` (empty string), that spot keeps its
styled placeholder (a colored box with an icon and label) instead of
breaking. If a path is wrong or the file is missing, the site quietly
falls back to the same placeholder look rather than showing a broken
image icon, so nothing can visibly break by editing this file.

## What each section controls

| Key in `data/images.js` | Where it shows up | Suggested shape |
|---|---|---|
| `hero.home` | Homepage hero (desktop side image, and the full background on phones) | Wide, landscape, at least 1600×1200 |
| `hero.about` / `hero.ministries` / `hero.events` / `hero.sermons` / `hero.gallery` / `hero.contact` / `hero.giving` | The dark banner at the top of each inner page | Wide, landscape, at least 1600×600 |
| `about.story` | The "How We Began" photo on the About page | Landscape, roughly 4:3 |
| `ministries.m1`–`m8` | Background photo behind each ministry card (matches ids in `data/ministries.js`) | Landscape, roughly 4:3, a photo that represents that ministry (e.g. the children's classroom for `m2`) |
| `leadership.l1`–`l4` | Headshots on the About page (matches ids in `data/leadership.js`) | Square, at least 500×500 |
| `gallery.g1`–`g12` | Gallery grid photos (matches ids in `data/gallery.js`) | Square, at least 800×800 |
| `albums.a1`–`a4` | Cover photo on each weekly album card (matches ids in `data/albums.js`) | Landscape, roughly 4:3 |
| `events.e1`–`e8` | The poster image on each event card (matches ids in `data/events.js`) | Portrait, roughly 3:4, this is the actual poster PEFA designs for that event |

## Adding a new sermon, event, ministry, gallery photo or album

These live in their own files under `/data`, each entry has an `id`
(like `"m9"` or `"g13"`), just add a new entry there and then add a
matching key in `data/images.js` if it needs a photo:

- New sermon → `data/sermons.js`
- New event → `data/events.js` (and an `events.e9` entry in
  `data/images.js` for its poster)
- New ministry → `data/ministries.js` (and a `ministries.m9` entry in
  `data/images.js`)
- New gallery photo → `data/gallery.js` (and a `gallery.g13` entry)
- New weekly album → `data/albums.js` (and an `albums.a5` entry)
