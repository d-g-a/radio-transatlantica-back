const User = require('../models/User');
const passport = require('passport');
const FacebookStrategy = require("passport-facebook").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy


const facebookConfig = {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: process.env.FACEBOOK_CBURL,
    profileFields: ["id", "email", "link", "name", "photos"]
  }

const googleConfig = {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CBURL,
    profileFields: ["id", "email", "link", "name", "photos"]
  }

//LOCAL
passport.use(User.createStrategy());

//FACEBOOK
passport.use(
    new FacebookStrategy(facebookConfig, async (x,xx,profile,done)=>{
        const user = await User.findOne({facebookId: profile.id})
        if(!user){
            const user = await User.create({
                name: `${profile.name.givenName} ${profile.name.familyName}`,
                facebookId: profile.id,
                email: profile.emails[0].value
            })
            return done(null,user)
        }
        return(done(null,user))
    })
)


//GOOGLE
passport.use(
    new GoogleStrategy(googleConfig, async (x,xx,profile,done)=>{
        const user = await User.findOne( {googleId: profile.id} )
        if (!user){
            const user = await User.create({
                name: profile.displayName,
                googleId: profileId,
                email: profile.emails[0].value
            })
            return done(null,user)
        }
        return done(null,user)
    })
)


//SERIALIZE
passport.serializeUser((user, done) => {
    console.log(user)
    done(null, user.id)
  })

  //DESERIALIZE 
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
  })
  

module.exports = passport;
