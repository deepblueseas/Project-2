const seedGenre = require('./genreData');
const seedPrompt = require('./promptData');
const seedSegment = require('./segmentData');
const seedStory = require('./storyData');
const seedUser = require('./userData');
const seedStorySegment = require('./storySegmentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  console.log('\n----- GENRES -----\n');
  await seedGenre();
  console.log('\n----- GENRES SEEDED -----\n');

  console.log('\n----- PROMPTS -----\n');
  await seedPrompt();
  console.log('\n----- PROMPTS SEEDED -----\n');

  console.log('\n----- USERS -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  console.log('\n----- STORIES -----\n');
  await seedStory();
  console.log('\n----- STORIES SEEDED -----\n');
  
  console.log('\n----- SEGMENTS -----\n');
  await seedSegment();
  console.log('\n----- SEGMENTS SEEDED -----\n');

  console.log('\n----- STORY SEGMENTS -----\n');
  await seedStorySegment();
  console.log('\n----- STORY SEGMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();