const express = require('express');
const router = require('express').Router();
const { Genre, Prompt, Segment, Story, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/createStory', withAuth, async (req, res) => {
    try {
        const storyData = await Story.findAll({
            include: [Segment] 
        });

        const stories = storyData.map(story => story.get({ plain: true }));

        res.render('createStory', {
            stories,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/createStory', async (req, res) => {
    try {
        const { story_title, segment_content } = req.body;
        const newStory = await Story.create({ story_title });
        const newSegment = await Segment.create({
            segment_content,
            storyId: newStory.id, 
        });

        res.json({ success: true, story: newStory, segment: newSegment });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
