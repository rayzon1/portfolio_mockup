var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Gerardo Keys Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.send('This is the about page')
})
module.exports = router;
