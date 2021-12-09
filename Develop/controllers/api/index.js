const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const cityRoutes = require('./cityRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/event', eventRoutes);
router.use('/city', cityRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
