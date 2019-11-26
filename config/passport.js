var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//var Student = require('../models/student');

// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
    Student.findOne({googleId: profile.id}, function(err, student){
        if (err) return cb(err);
        if (student) {
            //returning user
            return cb(null, student);
        } else {
            //we have a new student via OAuth
            var newStudent = new Student({
                name: profile.displayName,
                eamil: profile.emails[0],
                googleId: profile.id
            });
            newStudent.save(function(err){
                if (err) return cb(null);
                return cb(null, newscontent)
            })
        }
    });
  }
));



passport.serializeUser(function(student, done) {
    done(null, student._id);
});

passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
      done(err, student);
    });
  });