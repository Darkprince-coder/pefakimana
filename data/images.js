// SINGLE FILE FOR EVERY REAL PHOTO ON THE SITE.
//
// This is the only file you need to touch to swap in real PEFA Kimana
// photos. Each key below is a path to an image file. Drop your actual
// photo files anywhere under /public/images/ (folders already created
// for you: hero, ministries, leadership, gallery, albums, events) and
// point the matching key here at it, for example:
//
//   home: "/images/hero/home.jpg"
//
// Leave a value as an empty string "" to keep the styled placeholder
// (a colored box with an icon and label) until you have a photo ready,
// nothing will break either way. If a path here 404s for any reason,
// the site automatically falls back to the same placeholder look
// instead of showing a broken image icon.
//
// The ids below (m1, l1, g1, a1, e1...) match the ids already used in
// data/ministries.js, data/leadership.js, data/gallery.js,
// data/albums.js and data/events.js, open those files if you need a
// reminder of which id is which ministry/person/photo/event.

const images = {
  hero: {
    home: "/images/hero/hero.jpg",
    about: "/images/hero/church.jpg",
    ministries: "/images/hero/ministry.jpg",
    events: "/images/hero/calendar.jpg",
    sermons: "/images/hero/sermon.jpg",
    gallery: "/images/hero/album.jpg",
    contact: "/images/hero/contact.jpg",
    giving: "/images/hero/offering.jpg"
  },

  about: {
    story: "/congregation.jpg" // congregation photo next to "How We Began"
  },

  ministries: {
    m1: "/images/ministries/music.jpg", // Worship & Music Team
    m2: "/images/ministries/sundayschool.jpg", // Children's Sunday School
    m3: "/images/ministries/yout.jpg", // Youth Ministry
    m4: "/images/ministries/women.jpg", // Women's Fellowship
    m5: "/images/ministries/men.jpg", // Men's Fellowship
    m6: "/images/ministries/outreach.jpg", // Outreach & Missions
    m7: "/images/ministries/intercessory.jpg", // Intercessory Prayer Team
    m8: "/images/ministries/ushering.jpg"  // Ushering & Protocol
  },

  leadership: {
    l1: "/images/leadership/pastor.jpg", // Pastor Joseph Mailu
    l2: "/images/leadership/grace.jpg", // Elder Grace Wanjiru
    l3: "/images/leadership/daniel.jpg", // Pastor Daniel Sankale
    l4: "/images/leadership/samuel.jpg"  // Elder Samuel Ole Kina
  },

  gallery: {
    g1: "/images/gallery/g4.jpg", g2: "/images/gallery/g5.jpg", g3: "/images/gallery/g6.jpg", g4: "/images/gallery/g4.jpg", g5: "/images/gallery/g5.jpg", g6: "/images/gallery/g6.jpg",
    g7: "/images/gallery/g7.jpg", g8: "/images/gallery/g8.jpg", g9: "/images/gallery/g9.jpg", g10: "/images/gallery/g10.jpg", g11: "/images/gallery/g11.jpg", g12: "/images/gallery/g12.jpg"
  },

  albums: {
    a1: "/images/gallery/g1.jpg", // Sunday Service in Pictures
    a2: "/images/gallery/g2.jpg", // Sunday School Service in Pictures
    a3: "/images/gallery/g3.jpg", // Youth Convention: Rooted
    a4: "/images/gallery/g4.jpg"  // Outreach to Isinet Village
  },

  events: {
    // The specific poster PEFA designs for each event/announcement.
    e1: "/images/events/sundayposter.jpeg", e2: "/images/events/posterkesha.jpeg", e3: "/images/events/poster.jpeg", e4: "/images/events/pooster.jpg", e5: "/images/events/service.jpg", e6: "/images/events/keshaa.jpg", e7: "/images/events/posterkesha.jpeg", e8: "/images/events/posterkesha.jpeg"
  }
};

export default images;
