var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/send-login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }));



router.get('/dashboard', function(req, res, next) {
  console.log(req.user);
  var context = {};
  if (req.user) {
    context.username = req.user.username;
  }
  res.render('dashboard', context);
});



module.exports = router;
