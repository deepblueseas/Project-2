const Story = require("../models/story");

const storyData = [
    {
        story_title: "Story 1",
    },
    {
        story_title: "Story 2",
    },
    {
        story_title: "Story 3",
    },
    
]

const seedStory = () => Story.bulkCreate(storyData);

module.exports = seedStory;