const router = require('express').Router();
const { Event, User, Category, City } = require('../../models');
const withAuth = require('../../utils/auth');

// updating event route; event is obtained via event id which the user must supply, along with updated data from the front end
router.put('/', withAuth, async (req, res) => {
  try {

    const event = await Event.findOne({ where: { id: req.body.id } });

    const updateEvent = await event.update(
      {description: req.body.description},
      {date: req.body.date},
      {city_id: req.body.city_id},
      {user_id: req.body.user_id},
      // delete user ID?? how to obtain user ID? get them to self select their ID?
      {category_id: req.body.category_id});

    res.status(200).json(updateEvent);
  } catch (err) {
    console.log("could not update event");
    res.status(400).json(err);
  }
});

// event create route, obtained from user data via front end
router.post('/', withAuth, async (req, res) => {
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

// delete event route; deleted by id via URL params from front end
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
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

router.get('/', async (req, res) => {
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
          attributes: ['description', 'id', 'color'],
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
    res.json( events );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
