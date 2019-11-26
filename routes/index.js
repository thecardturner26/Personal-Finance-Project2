var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res) {
  res.render('bills', { title: 'Express' });
});


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/bills',
    failureRedirect: '/bills'
  }
));


router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});












// /* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.redirect('/bills');
//   res.render('bills', { title: 'Express' });
// });

module.exports = router;
