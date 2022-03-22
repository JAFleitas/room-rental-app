const { User } = require("./db/index")
require("dotenv").config()

// Autenticacion con Google
const GoogleStrategy = require("passport-google-oidc")

// Autenticacion con Facebook
const FacebookStrategy = require("passport-facebook").Strategy

// Autenticacion con Twitter
// const TwitterStrategy = require("passport-twitter.").Strategy;

module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((obj, done) => {
    done(null, obj)
  })

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_KEY,
        clientSecret: process.env.FACEBOOK_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos"],
      },
      async function (accessToken, refreshToken, profile, done) {
        // vamos a la DB para buscar el usuario en base al profileId que proporciona Fb
        const userDb = await User.findOne({ where: { providerId: profile.id } })

        // si lo encuentra regresa el usuario encontrado
        if (userDb) {
          return done(null, userDb)
        }
        // si no lo encuentra crea un usuario nuevo en la DB
        const userCreated = await User.create({
          providerId: profile.id,
          provider: profile.provider,
          name: profile.displayName,
          lastname: " ",
          country: " ",
          email: " ",
          city: " ",
          password: " ",
          status: "enabled",
          photo: profile.photos[0].value,
          userType: "user",
        })
        // si no puede crearlo lanza error
        if (!userCreated) {
          return done(null, { message: "error creating user" })
        }
        // regresa usuario creado
        return done(null, userCreated)
      },
    ),
  )

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_KEY,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: "/auth/google/callback",
        profileFields: ["id", "displayName"],
      },
      async function (issuer, profile, done) {
        // vamos a la DB para buscar el usuario en base al profileId que proporciona Fb
        const userDb = await User.findOne({ where: { providerId: profile.id } })

        // si lo encuentra regresa el usuario encontrado
        if (userDb) {
          return done(null, userDb)
        }
        // si no lo encuentra crea un usuario nuevo en la DB
        const userCreated = await User.create({
          providerId: profile.id,
          provider: issuer,
          name: " ",
          lastname: " ",
          country: " ",
          email: " ",
          city: " ",
          password: " ",
          status: "enabled",
          photo: " ",
          userType: "user",
        })
        // si no puede crearlo lanza error
        if (!userCreated) {
          return done(null, { message: "error creating user" })
        }
        // regresa usuario creado
        return done(null, userCreated)
      },
    ),
  )
}
