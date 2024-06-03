const router = require('express').Router();

const userRoutes = require('./userRoutes');
const registerUser = require('./registerUser');
const createStory = require('./createStory');

router.use('/users', userRoutes);
router.use('/registerUser', registerUser);
router.use('/createStory', createStory);

module.exports = router;
