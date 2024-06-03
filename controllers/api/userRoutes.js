const router = require('express').Router();
const { User } = require('../../models');

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
            res.redirect('/login');
        });
    } else {
        res.status(404).end();
    }
});

router.post('/register', async (req, res) => {
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

module.exports = router