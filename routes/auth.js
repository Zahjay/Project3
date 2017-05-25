const express = require('express');
const controller = require('../controller/userController');

const router = express.Router();

const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

router.post('/register', controller.create);

router.post(
  '/login',
  passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);

router.get('/logout',(req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;