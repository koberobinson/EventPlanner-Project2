const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../../utils/auth');

// create category with autoincrement ID; description obtained from front end form data
router.post('/', withAuth, async (req, res) => {
  try {
    const newCategory = await Category.create({
      ...req.body
    });

    res.status(200).json(newCategory);
  } catch (err) {
    console.log("could not create Category");
    res.status(400).json(err);
  }
});

// updating category, if request id is the same as an id in the database; must obtain both id and description from front end
router.put('/', withAuth, async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.body.id } });

    const updateCategory = await category.update(
    
      {description: req.body.description});

    res.status(200).json(updateCategory);
  } catch (err) {
    console.log("could not update Category");
    res.status(400).json(err);
  }
});

// delete route functional; can any user delete, or because we are using withAuth only logged in user??
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newCategory = await Category.destroy({
      where: {
        id: req.params.id,
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
