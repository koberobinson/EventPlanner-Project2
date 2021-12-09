const router = require('express').Router();
const { City } = require('../../models');
const withAuth = require('../../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCity = await City.create({
      ...req.body,
      id: req.session.id,
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

router.put('/', withAuth, async (req, res) => {
  try {
    const updateCity = await City.update(
      {name: req.body.name},
      {returning: true, where: req.params.id});

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
