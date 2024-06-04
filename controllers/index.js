const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const registerUser = require('./registerUser');
const userProfile = require('./userProfile');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registerUser', registerUser);
router.use('/userProfile', userProfile);


module.exports = router;
