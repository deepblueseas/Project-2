const router = require('express').Router();
const User = require('../../models/user'); 
const withAuth = require('../../utils/auth');



router.get('/registerUser', withAuth, async (req, res) => {
    res.render('registerUser');
});


module.exports = router