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
                  include: [{model: User,}]
          }]
      });

      const stories = storyData.map((story) =>
      story.get({ plain: true}));

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
  try{
    const storyData = await Story.findByPk(req.params.id, {
      include: [
        {
          model: Segment,
          include: [
            {
              model: User,
              attributes:['id', 'username']
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

module.exports = router;