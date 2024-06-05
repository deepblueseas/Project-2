const Genre = require('../models/genre');

const genreData = [
    {
        genre_title: 'Drama'
    },
    {
        genre_title: 'Fairy Tale'
    },
    {
        genre_title: 'Fantasy'
    },
    {
        genre_title: 'Horror'
    },
    {
        genre_title: 'Comedy'
    },
    {
        genre_title: 'Mystery'
    },
    {
        genre_title: 'Science Fiction'
    },
    {
        genre_title: 'Romance'
    },
    {
        genre_title: 'Western'
    },
    {
        genre_title: 'Dystopian'
    },
    {
        genre_title: 'Crime Drama'
    },
    {
        genre_title: 'Adventure'
    },
    {
        genre_title: 'Steampunk'
    },
    {
        genre_title: 'creature-feature'
    },
    {
        genre_title: 'post-apocalyptic'
    },
    {
        genre_title: 'Noir'
    },
    {
        genre_title: 'Espionage'
    },
    {
        genre_title: 'Psychological Thriller'
    },  
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;