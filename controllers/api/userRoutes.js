const router = require('express').Router();
const User = require('../../models/user');

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
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post("/login", async (req, res) => {
    try{
        const userData = await User.findOne({ 
            where: { 
                email: req.body.email 
            }
        });
        console.log("test");
        if (!userData) {
            console.log(err);
            res.status(400).json({ message: 'incorrect email or password, please try again!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        console.log("2")
        if (!validPassword) {
            console.log("3");
            res.status(400).json({ message: 'incorrect email or password, please try again!'});
            return;
        }
        console.log("4");
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'you are now logged in!'});
        });
    
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
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

module.exports = router