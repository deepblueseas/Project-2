const express = require('express');
const router = express.Router(); // Using Router from express directly
const { Genre, Prompt, Segment, Story, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/homepage', withAuth, async (req, res) => {
    try {
        const storyData = await Segment.findAll({
            include: [
                {
                    model: Story,
                    attributes: 'story_title'
                },
            ],
        });

        const stories = storyData.map((story) =>
        story.get({ plain: true})
    );

    res.render('homepage', {
        stories,
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;