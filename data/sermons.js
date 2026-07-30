// Mirrors the weekly "Sunday Service Highlights" note already shared in
// the church WhatsApp group. Once the admin CMS is built, this is the
// shape the upload form will follow: date, minister, theme, scriptures,
// an intro (the first few key-point bullets), numbered teaching
// sections with an application line for each, a closing set of
// takeaways, and a closing quote. The sermon card shows a short
// preview (date, theme, minister, scriptures, first intro point) and a
// "Read More" button opens the full write-up exactly as shared.
//
// youtubeUrl can be left null when a service hasn't been uploaded yet,
// the card will show a "Recording coming soon" state instead of a
// broken thumbnail. The first entry below uses a real, public YouTube
// link purely to prove that pasting a normal YouTube URL (watch,
// youtu.be or shorts) automatically pulls in the correct thumbnail,
// swap it for the church's own link whenever it's ready.

const sermons = [
  {
    id: "s1",
    date: "2026-07-26",
    minister: "Pst. Eng. Stephen Matheka",
    theme: "Don't Lose Hope Fast",
    series: "Faith For The Journey",
    scriptures: ["Isaiah 55:11", "Proverbs 23:18", "Zechariah 4:6"],
    intro: [
      "Hope is the confident expectation that God will fulfil every promise He has spoken.",
      "The enemy fights your hope because he knows that if you keep believing, you will eventually see God's promises manifested.",
      "Never quit in the season of waiting."
    ],
    sections: [
      {
        heading: "1. God's Word Cannot Fail (Isaiah 55:11)",
        points: [
          "Every word God speaks carries His power to accomplish His purpose. His promises are never empty, delayed forever, or forgotten.",
          "What God has spoken over your life, family, ministry, career, or destiny will surely come to pass."
        ],
        application:
          "Stand on God's promises, not your present circumstances. His Word is more reliable than what your eyes can see."
      },
      {
        heading: "2. Your Hope Has A Future (Proverbs 23:18)",
        points: [
          "God has already prepared an expected end for those who trust Him. Delays are not denials, and waiting is not wasting.",
          "Every trial has an expiry date, and every promise has an appointed time."
        ],
        application:
          "Refuse discouragement. Keep praying, serving, and believing because your breakthrough is nearer than you think."
      },
      {
        heading: "3. It Is By The Spirit Of God (Zechariah 4:6)",
        points: [
          "Some victories cannot be achieved by human strength, wisdom, or resources.",
          "God works through His Spirit. What seems impossible to man becomes possible when the Holy Spirit takes over."
        ],
        application:
          "Depend on the Holy Spirit daily. Trust God's power more than your own ability."
      }
    ],
    conclusion: [
      "Don't allow temporary challenges to destroy your eternal hope.",
      "God's timing is always perfect.",
      "Your waiting season is producing strength, character, and faith.",
      "Every promise God has spoken will surely come to pass.",
      "Keep believing, the God who began the good work in you will finish it."
    ],
    closingQuote:
      "Don't lose hope fast. If God spoke it, He will perform it. Stay faithful, remain steadfast, and your testimony will surely come.",
    youtubeUrl: "https://www.youtube.com/watch?v=AmNsrnyCSY4&pp=ygUeYWxsIG5hdGlvbnMgcGVmYSBjaHVyY2gga2ltYW5h"
  },
  {
    id: "s2",
    date: "2026-07-19",
    minister: "Pastor Joseph Mailu",
    theme: "Standing Firm When the Ground Shakes",
    series: "Faith For The Journey",
    scriptures: ["Psalm 46:1-3"],
    intro: [
      "Our hope is anchored in God's unchanging character, not in the stability of our circumstances.",
      "A shaken season is not evidence that God has moved, it is an invitation to remember that He has not."
    ],
    sections: [
      {
        heading: "1. God Is Our Refuge (Psalm 46:1)",
        points: [
          "Refuge speaks of a place we run to, not a feeling we wait for.",
          "God's presence is available before, during and after the storm, not only once it has passed."
        ],
        application:
          "Run to God first, not last. Let prayer be your first response to shaking, not your final resort."
      }
    ],
    conclusion: [
      "A shaken season is still a held season, God has not let go.",
      "Fear looks at the wave, faith looks at the One who walks on it."
    ],
    closingQuote:
      "Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.",
    youtubeUrl: 'https://www.youtube.com/watch?v=rQkjZGTgHns&pp=ygUeYWxsIG5hdGlvbnMgcGVmYSBjaHVyY2gga2ltYW5h'
  },
  {
    id: "s3",
    date: "2026-07-12",
    minister: "Elder Grace Wanjiru",
    theme: "The Currency of Heaven",
    series: "Faith For The Journey",
    scriptures: ["2 Corinthians 9:6-8"],
    intro: [
      "Generosity is worship before it is a transaction, it flows from trust rather than obligation.",
      "God is able to make all grace abound so that in all things, at all times, we have all we need."
    ],
    sections: [
      {
        heading: "1. Sowing And Reaping Is A Law, Not A Loophole (2 Corinthians 9:6)",
        points: [
          "The measure we give is the measure that returns to us, this is not a formula for wealth, it is a principle of the heart.",
          "Sparing generosity produces a sparing harvest, generous generosity produces a generous harvest."
        ],
        application:
          "Examine your giving. Is it shaped by fear of lack, or by trust in God's provision?"
      }
    ],
    conclusion: [
      "God loves a cheerful giver, not a pressured one.",
      "Every gift you release in faith is a seed you will one day see again."
    ],
    closingQuote:
      "You will be enriched in every way so that you can be generous on every occasion.",
    youtubeUrl: 'https://www.youtube.com/watch?v=x6qJLWpaDo0'
  },
  {
    id: "s4",
    date: "2026-07-05",
    minister: "Pastor Joseph Mailu",
    theme: "Every Family, Every Season",
    series: "Rooted at Home",
    scriptures: ["Joshua 24:15"],
    intro: [
      "The home in Kimana is a mission field before it is anywhere else, what we model there outlasts every sermon.",
      "Choosing to serve the Lord is a daily decision renewed in ordinary household moments."
    ],
    sections: [
      {
        heading: "1. Every House Serves Something (Joshua 24:15)",
        points: [
          "Joshua did not ask if the people would serve, he asked what they would serve.",
          "Every home is already devoted to something, the question is whether it is devoted to the Lord."
        ],
        application:
          "Choose deliberately. Let your household's rhythms, not just its Sundays, reflect who you serve."
      }
    ],
    conclusion: [
      "A godly home is built one ordinary decision at a time.",
      "As for me and my house, we will serve the Lord, is a declaration renewed daily, not once."
    ],
    closingQuote:
      "Choose for yourselves this day whom you will serve, as for me and my household, we will serve the Lord.",
    youtubeUrl: 'https://www.youtube.com/watch?v=Qj9HGcYzgAQ&pp=ygUeYWxsIG5hdGlvbnMgcGVmYSBjaHVyY2gga2ltYW5h'
  },
  {
    id: "s5",
    date: "2026-06-28",
    minister: "Pastor Daniel Sankale",
    theme: "Called to the Margins",
    series: "Called and Sent",
    scriptures: ["Luke 4:18-19"],
    intro: [
      "The gospel was always meant to reach the village at the edge of the map, not only the centre of town.",
      "PEFA Kimana carries a responsibility to the Maasai communities and villages around us."
    ],
    sections: [
      {
        heading: "1. Anointed For The Overlooked (Luke 4:18-19)",
        points: [
          "Jesus defined His mission around the poor, the captive, the blind and the oppressed, the margins, not the mainstream.",
          "A church anointed like Christ will be found where Christ said He would be found."
        ],
        application:
          "Ask who is being overlooked around Kimana, and go there deliberately, not accidentally."
      }
    ],
    conclusion: [
      "Outreach is not an event on the calendar, it is an identity of the church.",
      "Every village we visit is a place Christ already loves."
    ],
    closingQuote:
      "The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor.",
    youtubeUrl: 'https://www.youtube.com/watch?v=Jnh2Go_Vswg&t=3341s'
  },
  {
    id: "s6",
    date: "2026-06-21",
    minister: "Elder Grace Wanjiru",
    theme: "A People of the Book",
    series: "Rooted at Home",
    scriptures: ["2 Timothy 3:16-17"],
    intro: [
      "Scripture, not culture or convenience, is what should shape how we raise our children and run our homes.",
      "A people who know the Word are equipped for every good work, not just Sunday worship."
    ],
    sections: [
      {
        heading: "1. Scripture Is Sufficient (2 Timothy 3:16-17)",
        points: [
          "All Scripture is useful for teaching, rebuking, correcting and training, it is a complete toolkit, not a partial one.",
          "A believer thoroughly equipped is not shaped by opinion, but by the Word rightly known."
        ],
        application:
          "Let Scripture arbitrate your household decisions, not tradition or trend."
      }
    ],
    conclusion: [
      "A home built on the Word will outlast a home built on convenience.",
      "Teach it, discuss it, live it, in that order."
    ],
    closingQuote:
      "All Scripture is God-breathed and is useful for teaching, so that the servant of God may be thoroughly equipped for every good work.",
    youtubeUrl: 'https://www.youtube.com/watch?v=SKT6vRYbkn8'
  }
];

export default sermons;
