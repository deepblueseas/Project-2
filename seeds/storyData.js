const Story = require("../models/story");

const storyData = [
    {
        story_title: "Story 1",
        segment_id: [1, 2]
    },
    {
        story_title: "Story 2",
        segment_id: [3, 4, 5]
    },
    {
        story_title: "Story 3",
        segment_id: [6, 7]
    },
    
]

const seedStory = () => Story.bulkCreate(storyData);

module.exports = seedStory;