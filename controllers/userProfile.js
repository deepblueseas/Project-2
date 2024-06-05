const router = require('express').Router();
const User = require('../models/user');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbUserId = req.session.user_id;
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


router.post('/submitUserBio', withAuth, async (req, res) => {
    try {
        const dbUserId = req.session.user_id;
        const user = await User.findByPk(dbUserId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's bio in the database
        user.user_bio = req.body.content;
        await user.save();

        res.status(200).json({ message: 'Bio updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save bio' });
    }
});


router.get('/:id', withAuth, async (req, res) => {
    try {
        const userId = req.params.id;
        const dbUserData = await User.findByPk(userId);
      
        if (!dbUserData) {
            res.status(404).json({message: 'User not found'})
            return;
        }

        const user = dbUserData.get({plain: true});
        const isOwner = req.session.userId === parseInt(userId)
        res.render('userProfile', {
            user,
            loggedIn: req.session.loggedIn,
            isOwner: isOwner
        });
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({message: 'Internal server error'});
    }
});


module.exports = router;