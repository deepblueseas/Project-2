const router = require('express').Router();
const User = require('../../models/user'); 
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/users', withAuth, async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
        });

        if (!userData) {
            res.status(404).json({ message: 'User data not found' });
            return;
        }

        const user = userData.get({plain:true})

        res.render('users', {
            user,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router