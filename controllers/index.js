const express = require('express')
  , router = express.Router()


router.use('/admin', require('./admin'))
router.use('/client', require('./client'))


router.get('/', (req, res, next) => {
  res.status(200).send('hello');
});

module.exports = router;
