//const { verifyToken } = require('../providers/authProvider');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = "claveSecretaQueSoloConoceElServer";

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
}, (jwtPayload, done) => {
  if (jwtPayload.user === 'admin') {
    const usuario = jwtPayload;
    return done(null, usuario);
  } else {
    return done(null, false, { message: "El usuario no es válido" });
  }
}));

const authMiddleware = passport.authenticate("jwt", { session: false });

const userIsAdminMDW = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    console.log("User:", user); // Verificar el objeto user obtenido del token
    if (user && user.role === "admin") {
      req.user = user;
      return next();
    }

    console.log("Info:", info); // Verificar el objeto info proporcionado por Passport
    res.status(401).json({ error: "User is not an admin" });
  })(req, res, next);
};


module.exports = {
  secret,
  authMiddleware,
  userIsAdminMDW,
};