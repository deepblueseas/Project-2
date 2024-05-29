const StorySegment = require("../models/storySegment");

const storySegmentData = [
    {
        story_id: 1,
        segment_id: 1
    },
    {
        story_id: 1,
        segment_id: 2
    },
    {
        story_id: 2,
        segment_id: 3
    },
    {
        story_id: 2,
        segment_id: 4
    },
    {
        story_id: 2,
        segment_id: 5
    },
    {
        story_id: 3,
        segment_id: 6
    },
    {
        story_id: 3,
        segment_id: 7
    },
    
]

const seedStorySegment = () => StorySegment.bulkCreate(storySegmentData);

module.exports = seedStorySegment;