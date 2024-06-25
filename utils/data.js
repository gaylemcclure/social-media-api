const users = [
    { username: "PixelPioneer", email: "pixelpioneer@mail.com" },
    { username: "StarryDreamer", email: "starrydreamer@example.com" },
    { username: "CosmicWave", email: "cosmicwave@webmail.com" },
    { username: "MysticMango", email: "mysticmango@inbox.com" },
    { username: "LunarLion", email: "lunarlion@domain.com" },
    { username: "QuantumQuokka", email: "quantumquokka@mailbox.com" },
    { username: "VividVoyager", email: "vividvoyager@netmail.com" },
    { username: "NebulaNavigator", email: "nebulanavigator@email.com" },
    { username: "CelestialScribe", email: "celestialscribe@post.com" },
    { username: "SolarSapphire", email: "solarsapphire@service.com" },
    { username: "AstroArtisan", email: "astroartisan@myemail.com" },
    { username: "GalaxyGazer", email: "galaxygazer@box.com" },
    { username: "TwilightTrekker", email: "twilighttrekker@web.com" },
    { username: "CometCrafter", email: "cometcrafter@mailbox.com" },
    { username: "StellarStoryteller", email: "stellarstoryteller@send.com" },
    { username: "MeteorMuse", email: "meteormuse@inbox.com" },
    { username: "DreamyDrifter", email: "dreamydrifter@site.com" },
    { username: "OrbitOracle", email: "orbitoracle@netmail.com" },
    { username: "ZenithZephyr", email: "zenithzephyr@myemail.com" },
    { username: "AuroraAdventurer", email: "auroraadventurer@domain.com" }
  ];

  const thoughts = [
    "If you try to fail and succeed, which have you done?",
    "Why do we call them apartments if they are all stuck together?",
    "If you clean a vacuum cleaner, aren't you the vacuum cleaner?",
    "Why is the word 'abbreviation' so long?",
    "Do we have the memories or do the memories have us?",
    "Why is the word 'phonetic' not spelled the way it sounds?",
    "If you enjoy wasting time, is it really wasted?",
    "Why do we drive on parkways and park on driveways?",
    "If a word is misspelled in the dictionary, how would we know?",
    "Why do we say 'slept like a baby' when babies wake up every two hours?",
    "Why is the objective of golf to play the least amount of golf?",
    "Why do we say 'after dark' when it's really 'after light'?",
    "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
    "Why do people say they 'slept through their alarm' when it's the alarm that wakes them up?",
    "If you could have any superpower, but only use it once, what would it be?",
    "Is there ever a day that mattresses are not on sale?",
    "Why do we call it a building if it's already built?",
    "If money doesn't grow on trees, why do banks have branches?",
    "Why is 'bra' singular and 'panties' plural?",
    "Can you daydream at night?",
    "Why do they call it quicksand when it pulls you in slowly?",
    "Do fish get thirsty?",
    "Why is it called lipstick if you can still move your lips?",
    "Why is it that rain drops but snow falls?",
    "If tomatoes are a fruit, is ketchup a smoothie?"
  ];
  
  const reactions = [
    "Wow, I never thought about it that way!",
    "That's a real brain teaser!",
    "Hmm, that's a good question.",
    "Now my mind is blown!",
    "Haha, that's a funny thought!",
    "Interesting perspective!",
    "That's deep!",
    "I need to think about that for a while.",
    "Wow, that's confusing!",
    "I never realized that before.",
    "That's so true!",
    "What a paradox!",
    "I guess we'll never know!",
    "That's a clever observation!",
    "Now I'm curious!",
    "That really makes you think!",
    "Haha, I've wondered about that too!",
    "I can't believe I never noticed that!",
    "Mind = blown!",
    "That's a new one!",
    "Why didn't I think of that?",
    "Good point!",
    "That's hilarious!",
    "What a conundrum!",
    "That's really thought-provoking!"
  ];
  
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random thought
  const getRandomThought = () =>getRandomArrItem(thoughts);

// Gets a random reaction
    const getRandomReaction = () =>getRandomArrItem(reactions);

const getMultipleReactions = (int) => {
        const reactions = [];
        for (let i = 0; i < int; i++) {
          reactions.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomArrItem(thoughts).username,
          });
        }
        return results;
      };
  
  
  // Export the functions for use in seed.js
  module.exports = { users, getRandomThought, getRandomReaction, getMultipleReactions };
  