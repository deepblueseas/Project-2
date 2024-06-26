// this will generate random prompts and genres to be used in handlebars

const { Prompt } = require('../models');
const { Genre } = require('../models');

const getRandomPrompt = async () => {
    try {
        const count = await Prompt.count();
        const offset = Math.floor(Math.random() * count);
        const randomPrompt = await Prompt.findOne({ offset: offset });
        return randomPrompt.dataValues ? randomPrompt.dataValues : 'No prompt available';
    } catch (error) {
        console.error('Error fetching random prompt:', error);
        return 'Error fetching prompt';
    }
};

const getRandomGenre = async () => {
    try {
        const count = await Genre.count();
        const offset = Math.floor(Math.random() * count);
        const randomGenre = await Genre.findOne({ offset: offset });
        return randomGenre.dataValues ? randomGenre.dataValues : 'No genre available';
    } catch (error) {
        console.error('Error fetching random genre:', error);
        return 'Error fetching genre';
    }
};

module.exports = {
    getRandomPrompt,
    getRandomGenre
};

