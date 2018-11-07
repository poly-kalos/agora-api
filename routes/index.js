var express = require('express');
var router = express.Router();

router.get('/test', (req, res, next) => {
  res.status(200).send('hello');
});

module.exports = router;
