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

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!userData) {
            console.log(err);
            res.status(400).json({ message: 'incorrect email or password, please try again!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);


        if (!validPassword) {
            res.status(400).json({ message: 'incorrect email or password, please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'you are now logged in!' });
        });

    } catch (err) {
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//connect user info to their profile page
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