"use strict";

var express = require('express');
var router = express.Router();
var passport = require('passport');


/*
 * build the context object which will be passed to all views
 * the object is initialised with the default fields, common
 * to all pages
 * @req: request as passed to the controller
 * @title: page title
 */
var context = function(req, title) {
  var contextObj = {title:title};
  if (req.user) {
    contextObj.username = req.user.username;
  }
  return contextObj;
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', context(req, 'TICmbay'));
});

router.get('/login', function(req, res, next) {
  res.render('login', context(req, 'Login' ));
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
  res.render('dashboard', context(req, 'Dashboard'));
});



module.exports = router;
