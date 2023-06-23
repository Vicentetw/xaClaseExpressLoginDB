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

const authMiddleware = passport.authenticate("jwt", {session: false});

module.exports = {secret , authMiddleware};