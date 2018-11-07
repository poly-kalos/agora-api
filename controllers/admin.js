const express = require('express')
  , router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.status(200).send('admin');
});

module.exports = router;
