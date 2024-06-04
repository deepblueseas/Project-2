const express = require('express');
const router = require('express').Router();
const { Genre, Prompt, Segment, Story, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    console.log(req.session)
    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

router.get('/homepage', withAuth, async (req, res) => {
  try {
    const storyData = await Story.findAll({
      include: [{
        model: Segment,
        include: [{ model: User, }]
      }]
    });

    const stories = storyData.map((story) =>
      story.get({ plain: true }));

    res.render('homepage', {
      stories,
      loggedIn: req.session.loggedIn,
    });
    console.log(stories)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/story/:id', withAuth, async (req, res) => {
  try {
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: Segment,
          include: [
            {
              model: User,
              attributes: ['id', 'username']
            }
          ]
        }
      ]
    });

    if (!storyData) {
      res.status(404).json({ message: 'Story not found' });
      return;
    }

    const story = storyData.get({ plain: true });

    console.log(story)

    res.render('viewStory', {
      story,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/gameMode', withAuth, async (req, res) => {
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

router.get('/createStory', withAuth, async (req, res) => {
 res.render('adventureModeNew')
})

router.post('/submitNewStory', async (req, res) => {
  try {
    const newStory = await Story.create({
      story_title: req.body.story_title,
    });
  
    await Segment.create({
        position: 1,
        created_by: req.session.user_id,
        story_id: newStory.id,
        prompt_id: req.body.prompt_id,
        genre_id: req.body.genre_id,
        segment_content: req.body.segment_content,
      });

    res.status(201).json(newStory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create new story'})
  }
  // try {
  //     const { story_title, segment_content } = req.body;
  //     const newStory = await Story.create({ story_title });
  //     const newSegment = await Segment.create({
  //         segment_content,
  //         storyId: newStory.id, 
  //     });

  //     res.json({ success: true, story: newStory, segment: newSegment });
  // } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ success: false, error: err.message });
  // }
});
module.exports = router;