const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const eventData = await Event.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const events = eventData.map((event) => event.get({ plain: true }));

//     res.render('homepage', {
//       events,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

router.put('/', withAuth, async (req, res) => {
  try {
    const updateEvent = await Event.update(
      {description: req.body.name},
      {date: req.body.date},
      {city_id: req.body.city}, 
      {id: req.body.id},
      {user_id: req.body.user_id},
      {returning: true, where: req.params.id});

    res.status(200).json(updateEvent);
  } catch (err) {
    console.log("could not update event");
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      id: req.session.id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    console.log("could not create event");
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        id: req.session.id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No Event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
