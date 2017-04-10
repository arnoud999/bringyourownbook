var items = [
    "A line from a horoscope",
    "Something spoken by an animal in a fairy tale",
    "A hero\'s catchphrase",
    "The moment a bad omen appears in a horror novel",
    "A line from a passive-aggressive note",
    "The award-winning moment in a dramatic film",
    "The moment in a romance novel when hearts are broken",
    "A one-liner from an action movie",
    "A line from a teenager\'s diary",
    "The title of a murder mystery novel",
    "A line in an eviction notice",
    "A line you never expected to find in a poem",
    "A passage from a religious text",
    "An item on a resume",
    "The punchline of a joke",
    "A phrase that could inspire revolt",
    "A phrase you wouldn’t want to hear your grandparents say",
    "A sentence in a fortune cookie",
    "Lyrics from a lullaby (e.g. Rock-a-bye Baby)",
    "A universal truth",
    "A political slogan",
    "An alien\'s first words to mankind",
    "Part of a love letter",
    "Part of a piece of e-mail spam",
    "Lyrics from a country-western song (e.g. Johnny Cash)",
    "Lyrics from a power ballad (e.g. Journey)",
    "This just in, a line of breaking news!",
    "Something you could hear Arnold Schwarzenegger say",
    "Advice for graduating seniors",
    "The meaning of life is...",
    "The name of a store that sells almost everything",
    "The moment in a sci-fi novel when a robot behaves unexpectedly",
    "A pick-up line",
    "Something yelled at a broken machine",
    "An item in a police report",
    "The name of a health and beauty product",
    "Text on a warning label",
    "The name of a trendy mixed drink",
    "Words tattooed on someone\'s body",
    "A phrase that would be extra creepy if you whispered it",
    "The title of a long-lost thriller by Alfred Hitchcock",
    "The slogan on a bumper sticker",
    "The secret password to a magical cave",
    "Text from a nature guide",
    "Code words passed between secret agents to confirm their identities",
    "Fine print on a long contract",
    "The name of an entertainment magazine",
    "A name for a cat",
    "A reaction to discovering treasure",
    "Text from a sitcom script (e.g. Seinfeld)",
    "Something that demands an apology",
    "Part of a letter home from summer camp",
    "Something a hypnotist would repeat to induce a trance",
    "Text on a motivational poster",
    "A bit of bad news",
    "A menu item at a fancy restaurant",
    "The moment in a fantasy novel when the hero is chosen",
    "The moral of the story is...",
    "Words on a welcome mat",
    "Overheard at a sporting event",
    "Part of a birthday message",
    "A line on a worker\'s performance evaluation",
    "The part in a children\'s film where a kid outsmarts an adult",
    "Overheard in a dream",
    "The name of a popular new indie band",
    "Something shouted at another driver in traffic",
    "The most emotional moment in an opera",
    "A celebrity\'s Twitter update",
    "Something you\'re surprised to find in a coat pocket",
    "Clear evidence that it\'s time to call the doctor",
    "Lyrics from a hip hop song (e.g. Jay-Z)",
    "Words from a magic spell",
    "A line that\'s sarcastic when you replace a name with 'Captain Obvious'",
    "The title of a self-help book",
    "Something you\'ll lie awake thinking about tonight",
    "A town slogan",
    "The name of a sports car with a huge engine",
    "A statement likely to be challenged if presented as fact",
    "A line you would print on the back cover to sell your book",
    "A ridiculous tabloid headline",
    "Something used as money in a post-apocalyptic society",
    "An excuse for being late",
    "A line of graffiti",
    "A message in a bottle",
    "Strange first words for a child",
    "Words scribbles on a sticky note at the office",
    "Don\'t open an email with this subject header"
]

// function newItem() {
//     var randomNumber = Math.floor(Math.random() * (items.length));
//     document.getElementById('itemDisplay').innerHTML = items[randomNumber];
// }

var bucket = [];

for (var i=0;i<=items.length;i++) {
    bucket.push(i);
}

function getRandom() {
    var randomIndex = Math.floor(Math.random()*bucket.length);
    return bucket.splice(randomIndex, 1)[0];
}

function newItem() {
    if (bucket.length < 1) {
        document.getElementById('itemDisplay').innerHTML = "Last item reached. Click again to start over.";
        document.getElementById('questionButton').innerHTML = "Start over";
        for (var i=0;i<=items.length;i++) {
            bucket.push(i);
        }
    } else {
        document.getElementById('questionButton').innerHTML = "New Question";
        var number = getRandom();
        document.getElementById('itemDisplay').innerHTML = items[number];
    }
}

newItem()

// will pick a random number between 0 and 10, and can be called 10 times
// console.log(getRandomFromBucket());
