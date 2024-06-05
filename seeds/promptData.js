const Prompt = require("../models/prompt");

//will eventually change prompts. These are just filler records

const promptData = [
    {
        prompt_title: "It was a dark and stormy night.",
    },
    {
        prompt_title: "You look through your persicope and in front of you is a mysterious island, but your radar only registers ocean.",
    },
    {
        prompt_title: "You discovered a new type of plant. But it seems the plant may also have discovered you.",
    },
    {
        prompt_title: "Suddenly, you find yourself able to hear the thoughts of insects.",
    },
    {
        prompt_title: "There is an asteroid hurtling towards earth",
    },
    {
        prompt_title: "One day you wake up and it seems like you're the only person left on earth.",
    },
    {
        prompt_title: "Vampires and werewolves are real.  You might be one of them.",
    },
    {
        prompt_title: "You reconnect with an old childhood friend",
    },
    {
        prompt_title: "This town sure ain't big enough for the two of you, fella.",
    },
    {
        prompt_title: "Things you draw become real, but only for one day.",
    },
    {
        prompt_title: "You're walking home from work and a dark car pulls up next to you.  The window is about to roll down.  Run or see what happens next?",
    },
    {
        prompt_title: "A mad scientist tells you that there are, in fact, ways to talk to animals.  But if you agree to drink the potion, will you become an animal yourself?",
    },
    {
        prompt_title: "You come into a massive inheritance.",
    },
    {
        prompt_title: "You're on a hike in the woods when a twig snaps behind you.",
    },
    {
        prompt_title: "It was a bright and sunny morning, nothing could possibly go wrong.",
    },
    {
        prompt_title: "You're on a boat.",
    },
    {
        prompt_title: "You think your best friend might not be all that they seem.",
    },
    {
        prompt_title: "You see something you shouldn't.",
    },  
];

const seedPrompt = () => Prompt.bulkCreate(promptData);

module.exports = seedPrompt;