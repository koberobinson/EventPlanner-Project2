const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body,
      id: req.session.id,
    });

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newCategory = await Category.destroy({
      where: {
        id: req.params.id,
        id: req.session.id,
      },
    });

    if (!newCategory) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
