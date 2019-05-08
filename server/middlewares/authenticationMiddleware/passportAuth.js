import FacebookTokenStrategy from 'passport-facebook-token';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        email: profile.emails[0].value,
        name: `${profile.name.givenName} ${profile.name.familyName}`,
        token: accessToken
      };

      return done(null, user);
    }
  )
);

export default passport;
