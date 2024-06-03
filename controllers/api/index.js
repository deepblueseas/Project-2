const router = require('express').Router();

const userRoutes = require('./userRoutes');
const createStory = require('./createStory.js');

router.use('/users', userRoutes);
router.use('/createStory', createStory);

module.exports = router;
