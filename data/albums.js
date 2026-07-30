// PEFA Kimana already shares a Google Drive shared-album link in the
// WhatsApp group after every Sunday ("Sunday Service in Pictures",
// "Sunday School Service in Pictures", and so on). Rather than trying
// to pull individual photos onto the site, the Gallery page lists these
// dated albums with a "View Full Album" link straight to Drive, which
// is exactly the workflow the church already uses, just organised.
//
// When the CMS is built, adding a new week will just mean pasting the
// Drive share link and a title in the admin, nothing else changes.

const albums = [
  {
    id: "a1",
    title: "Sunday Service in Pictures",
    date: "2026-07-26",
    driveUrl: "https://photos.app.goo.gl/XWTjBFD61Xma4i2H6",
    category: "Worship"
  },
  {
    id: "a2",
    title: "Sunday School Service in Pictures",
    date: "2026-07-26",
    driveUrl: "https://photos.app.goo.gl/XWTjBFD61Xma4i2H6",
    category: "Children"
  },
  {
    id: "a3",
    title: "Youth Convention: Rooted",
    date: "2026-08-15",
    driveUrl: "#",
    category: "Youth"
  },
  {
    id: "a4",
    title: "Outreach to Isinet Village",
    date: "2026-09-05",
    driveUrl: "#",
    category: "Outreach"
  }
];

export default albums;
