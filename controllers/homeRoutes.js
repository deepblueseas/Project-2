const express = require('express');
const router = express.Router();
const { Genre, Prompt, Segment, Story, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
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
        include: [{ model: User}]
      }]
    });

    const stories = storyData.map((story) =>
      story.get({ plain: true }));

    res.render('homepage', {
      stories,
      loggedIn: req.session.loggedIn,
    });

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
            },
            {
              model: Prompt,
              attributes: ['id', 'prompt_title']
            },
            {
              model: Genre,
              attributes: ['id', 'genre_title']
            }
          ]
        }
      ]
    });

    if (!storyData) {
      res.status(404).json({ message: 'Story not found' });
      return;
    };

    const story = storyData.get({ plain: true });

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
 try{ const gCount = await Genre.count();
      const gOffset = Math.floor(Math.random() * gCount);
      const randomGenre = await Genre.findOne({ offset: gOffset });

      const pCount = await Prompt.count();
      const pOffset = Math.floor(Math.random() * pCount);
      const randomPrompt = await Prompt.findOne({ offset: pOffset });
        
      const genre = randomGenre.get({ plain: true });
      const prompt = randomPrompt.get({ plain: true });

      res.render('adventureModeNew', {
        genre,
        prompt,
        loggedIn: req.session.loggedIn,
      })

  } catch (err) {
        console.error(err);
        res.status(500).json(err);
  }
})

router.post('/submitNewStory', withAuth, async (req, res) => {
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
});

module.exports = router;