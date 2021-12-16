const router = require('express').Router();
const { User, Category, City, Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all events and JOIN with user data, cities and categories
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
        {
          model: Category,
          attributes: ['description', 'id'],
        }, 
        {
          model: City,
          attributes: ['name', 'id']
        }
      ],
    });

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('index', { 
      events, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/event/:id', async (req, res) => {
//   try {
//     const eventData = await Event.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Category,
//           attributes: ['description'],
//         }, 
//         {
//           model: City,
//           attributes: ['name']
//         }
//       ],
//     });

//     const event = eventData.get({ plain: true });

//     res.render('event', {
//       ...event,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/cities', (req, res) => {
  res.render('cities');
  // list of cities with calendars via handlebars
});

router.get('/city/:cityId', (req, res) => {
  res.render('calendar', {cityId: req.params.cityId});
})

router.get('/calendar', (req, res) => {

  if (req.session.logged_in) {
    res.render('calendar');
    return;
  }

  res.render('login');
});

router.get('/calendar', withAuth, async (req, res) => {
  try {
    // Get all events and JOIN with user data, cities and categories
    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
        {
          model: Category,
          attributes: ['description', 'id'],
        }, 
        {
          model: City,
          attributes: ['name', 'id']
        }
      ],
    });

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('/calendar', { 
      events, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

router.get('/createevent', (req, res) => {
  if (req.session.logged_in) {
    res.render('createevent');
    return;
  }

  res.render('login');
});

router.post('/createevent', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    console.log("could not create event");
    res.status(400).json(err);
  }
});

module.exports = router;
