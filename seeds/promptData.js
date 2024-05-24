const Prompt = require('../models/prompt');

const promptData = [
    {
        prompt_title: 'Drama',
    },
    {
        prompt_title: 'Fairy Tale',
    },
    {
        prompt_title: 'Fantasy',
    },
    {
        prompt_title: 'Horror',
    },
    {
        prompt_title: 'Comedy',
    },
    {
        prompt_title: 'Mystery',
    },
    {
        prompt_title: 'Science Fiction',
    },
    {
        prompt_title: 'Romance',
    },
    {
        prompt_title: 'Western',
    },
    {
        prompt_title: 'Dystopian',
    },
    {
        prompt_title: 'Crime Drama',
    },
    {
        prompt_title: 'Adventure',
    },
    {
        prompt_title: 'Steampunk',
    },
    {
        prompt_title: 'creature-feature',
    },
    {
        prompt_title: 'post-apocalyptic',
    },
    {
        prompt_title: 'Noir',
    },
    {
        prompt_title: 'Espionage',
    },
    {
        prompt_title: 'Psycological Thriller',
    },  
];

const seedPrompt = () => Prompt.bulkCreate(promptData);

module.exports = seedPrompt;