const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');

// creating a new user account; obtain via front end form data
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(
      {name: req.body.name,
      email: req.body.email,
      password: req.body.password});

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// log in route; obtain login email and password via front end sign in form
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData.name, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// logout route; event listner for click on logout button
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    console.log("you have logged out");
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log("you are not logged in");
    res.status(404).end();
  }
});

module.exports = router;
