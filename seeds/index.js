const seedGenre = require('./genreData');
const seedPrompt = require('./promptData');
const seedSegment = require('./segmentData');
const seedStory = require('./storyData');
const seedUser = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGenre();
  console.log('\n----- GENRES SEEDED -----\n');

  await seedPrompt();
  console.log('\n----- PROMPTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSegment();
  console.log('\n----- SEGMENTS TAGS SEEDED -----\n');

  await seedStory();
  console.log('\n----- STORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();