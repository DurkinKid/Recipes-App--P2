const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require('../models/user');


// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    try {
      // check if the user is in the database
      // has the user logged in before?
      // If true, pass info to next piece of middleware
      let user = await UserModel.findOne({googleId: profile.id});
      // If false, create newUser in database   
      if(user) return cb(null, user);
      

      user = await UserModel.create({
          name: profile.displayName,
          googleId: profile.id      // <-- For Project I MUST store the googleId as a propert
      })
      cb(null, user)

      } catch(err){
      cb(err)
  }

  }
));

passport.serializeUser(function(user, cb){
  cb(null, user._id); 
});

// this method is called every time an http request comes from an existing user that is logged in
// opens sessions cookie and grab the user._id and searches the database for the user,
// then assigns that suer document to req.user, which will be available in EVERY CONTROLLER FUNC.

passport.deserializeUser(function(userId, cb){
  UserModel.findById(userId)
      .then(function(userDoc){
      cb(null, userDoc);  // <-- this line is what assigns the userDoc to req.user,  
      // req.user = userDoc
  }).catch(err => {
      cb(err)
  })
})


