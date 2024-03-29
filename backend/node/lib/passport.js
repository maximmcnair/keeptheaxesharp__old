var GitHubStrategy = require('passport-github').Strategy;

module.exports = function(passport, connection, options){
  var logger = options.logger
    , properties = options.properties
    , User = connection.model('User');

  logger.info('Setting up passport');

  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete GitHub profile is serialized
  //   and deserialized.
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // Use the GitHubStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and GitHub
  //   profile), and invoke a callback with a user object.
  passport.use(new GitHubStrategy({
      clientID: properties.github.id
    , clientSecret: properties.github.secret
    , callbackURL: properties.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        User.findOne({
          'github.id': profile.id
        }, function (err, user) {
          if (!user) {
            user = new User({
              name: profile.displayName
            , email: profile.emails[0].value
            , username: profile.username
            , provider: 'github'
            , github: profile._json
            })
            console.log('New User', user);
            user.save(function (err) {
              if (err) logger.error(err)
              return done(err, user)
            })
          } else {
            return done(err, user)
          }
        })
        // To keep the example simple, the user's GitHub profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the GitHub account with a user record in your database,
        // and return that user instead.
        // return done(null, profile);
      });
    }
  ));

};
