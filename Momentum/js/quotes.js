const quotes = [
    {
        quote: "May you be strengthened with all power according to his glorious might so that you may have great endurance and patience.",
        verse: "Colossians 1:11",
    },
    {
        quote: "Casting all your anxieties on him, because he cares for you.",
        verse: "1 Peter 5:7",
    },
    {
        quote: "Be strong, and let your heart take courage, all you who wait for the Lord!",
        verse: "Psalm 31:24",
    },
    {
        quote: "For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline.",
        verse: "2 Timothy 1:7",
    },
    {
        quote: "Let your unfailing love be with us, Lord, even as we put our hope in you.",
        verse: "Psalm 33:22",
    },
    {
        quote: "And let us consider how we may spur one another on toward love and good deeds.",
        verse: "Hebrews 10:24-25",
    },
    {
        quote: "I love the Lord, for he heard my voice; he heard my cry for mercy. Because he turned his ear to me, I will call on him as long as I live.",
        verse: "Psalm 116:1-2",
    },
    {
        quote: "But Jesus looked at them and said, 'With man this is impossible, but with God all things are possible.'",
        verse: "Matthew 19:26",
    },
    {
        quote: "We have this hope as an anchor for the soul, firm and secure.",
        verse: "Hebrews 6:19",
    },
    {
        quote: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
        verse: "Psalm 23:4",
    },
]

const verse = document.querySelector("#verse");
const quote = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

verse.innerText = todaysQuote.verse;
quote.innerText = todaysQuote.quote;
