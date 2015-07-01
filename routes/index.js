var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/standings', function(req, res, next) {
  res.render('standings', { title: 'standings' });
});

router.get('/schedule', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rosters', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/statistics', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
