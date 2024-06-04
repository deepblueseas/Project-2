const router = require('express').Router();
const User = require('../models/user');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbUserId = req.session.user_id; // Correct variable name
        const dbUserData = await User.findByPk(dbUserId, {
            attributes: { exclude: ['password'] },
        });

        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }

        const user = dbUserData.get({ plain: true });
        console.log(req.session);
        res.render('userProfile', {
            user,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;