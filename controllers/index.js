const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const registerUser = require('./registerUser');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registerUser', registerUser);


module.exports = router;
