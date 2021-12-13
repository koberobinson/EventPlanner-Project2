const router = require('express').Router();
const { City } = require('../../models');
const withAuth = require('../../../utils/auth');

// creating new city; only need name from front end, autoincrement id
router.post('/', withAuth, async (req, res) => {
  try {
    const newCity = await City.create({
      ...req.body,
    });

    const city = newCity.get({ plain: true });

    res.status(200).json(city), 
    res.render('main', 
    city, 
    logged_in);
  } catch (err) {
    res.status(400).json(err);
  }
});

//  updating category, if request id is the same as an id in the database; must obtain both id and description from front end
router.put('/', withAuth, async (req, res) => {
  try {

    const city = await City.findOne({ where: { id: req.body.id } });

    const updateCity = await city.update(
      {name: req.body.name});

    res.status(200).json(updateCity);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const cityData = await City.destroy({
      where: {
        id: req.params.id,
        id: req.session.id,
      },
    });

    if (!cityData) {
      res.status(404).json({ message: 'No city found with this id!' });
      return;
    }

    res.status(200).json(cityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
