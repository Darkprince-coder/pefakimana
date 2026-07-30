// Each entry mirrors the weekly "Sunday Service Highlights" note that
// already gets shared in the church WhatsApp group after every service.
// Once the admin CMS is built, this is exactly the form the upload
// screen will follow: date, minister, theme, scriptures, key points,
// and an optional YouTube link for the full recording.
//
// youtubeUrl can be left as null when a service hasn't been uploaded
// yet, the sermon card will show a "Recording coming soon" state
// instead of a broken thumbnail. The first entry below uses a real,
// public YouTube link purely to demonstrate that pasting any normal
// YouTube URL (watch, youtu.be or shorts) automatically pulls in the
// correct thumbnail, swap it for the church's own link at any time.

const sermons = [
  {
    id: "s1",
    date: "2026-07-26",
    minister: "Pst. Eng. Stephen Matheka",
    theme: "Don't Lose Hope Fast",
    series: "Faith For The Journey",
    scriptures: ["Isaiah 55:11", "Proverbs 23:18", "Zechariah 4:6"],
    highlights: [
      "Hope is the confident expectation that God will fulfil every promise He has spoken.",
      "The enemy fights your hope because he knows that if you keep believing, you will eventually see God's promises manifested."
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=H2_1CcaJSmM"
  },
  {
    id: "s2",
    date: "2026-07-19",
    minister: "Pastor Joseph Mailu",
    theme: "Standing Firm When the Ground Shakes",
    series: "Faith For The Journey",
    scriptures: ["Psalm 46:1-3"],
    highlights: [
      "Our hope is anchored in God's unchanging character, not in the stability of our circumstances.",
      "A shaken season is not evidence that God has moved, it is an invitation to remember that He has not."
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=rQkjZGTgHns'
  },
  {
    id: "s3",
    date: "2026-07-12",
    minister: "Elder Grace Wanjiru",
    theme: "The Currency of Heaven",
    series: "Faith For The Journey",
    scriptures: ["2 Corinthians 9:6-8"],
    highlights: [
      "Generosity is worship before it is a transaction, it flows from trust rather than obligation.",
      "God is able to make all grace abound so that in all things, at all times, we have all we need."
    ],
    youtubeUrl: 'https://www.youtube.com/watch?v=Jnh2Go_Vswg&t=3341s'
  },
  {
    id: "s4",
    date: "2026-07-05",
    minister: "Pastor Joseph Mailu",
    theme: "Every Family, Every Season",
    series: "Rooted at Home",
    scriptures: ["Joshua 24:15"],
    highlights: [
      "The home in Kimana is a mission field before it is anywhere else, what we model there outlasts every sermon.",
      "Choosing to serve the Lord is a daily decision renewed in ordinary household moments."
    ],
    youtubeUrl: null
  },
  {
    id: "s5",
    date: "2026-06-28",
    minister: "Pastor Daniel Sankale",
    theme: "Called to the Margins",
    series: "Called and Sent",
    scriptures: ["Luke 4:18-19"],
    highlights: [
      "The gospel was always meant to reach the village at the edge of the map, not only the centre of town.",
      "PEFA Kimana carries a responsibility to the Maasai communities and villages around us."
    ],
    youtubeUrl: null
  },
  {
    id: "s6",
    date: "2026-06-21",
    minister: "Elder Grace Wanjiru",
    theme: "A People of the Book",
    series: "Rooted at Home",
    scriptures: ["2 Timothy 3:16-17"],
    highlights: [
      "Scripture, not culture or convenience, is what should shape how we raise our children and run our homes.",
      "A people who know the Word are equipped for every good work, not just Sunday worship."
    ],
    youtubeUrl: null
  }
];

export default sermons;
