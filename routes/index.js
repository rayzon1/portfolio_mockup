var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Gerardo Keys Portfolio', url: req.url });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', url: req.url });
})

router.get('/personal', function(req, res, next) {
  res.render('personal', { title: 'Personal', url: req.url });
})

module.exports = router;
