var express = require('express');
var router = express.Router();

var path = require('path');
var dist = path.normalize(__dirname + '/../dist')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: dist});
});

module.exports = router;
