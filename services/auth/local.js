const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const user = require('../../models/userModel');
const authHelpers = require('./authHelpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    user.findByUserName(username)
    .then(user => {
      if(!user){
        return res.json(404,{error: 'Incorect username or password'});
      }
      if(!authHelpers.comparePass(password, user.password)){
        return res.json(404,{error: 'Incorect username or password'});
      }else{
        console.log(user)
        return res.json({user});
      }
    })
    .catch(err => {
      return done(err);
    });
  })
);

module.exports = passport;