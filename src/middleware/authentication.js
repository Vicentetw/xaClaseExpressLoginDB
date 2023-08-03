//const { verifyToken } = require('../providers/authProvider');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = process.env.SECRET_KEY;

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
}, (jwtPayload, done) => {
  //if (jwtPayload.role === 'admin') { //acá verifico el rol que sea admin
  //modifico mi if para permitir acceso a usuarios con role user y admin
  if (jwtPayload.role === 'admin' || jwtPayload.role === 'user') {
    const usuario = jwtPayload;
    return done(null, usuario);
  } else {
    return done(null, false, { message: "El usuario no es válido" });
  }
}));

const authMiddleware = passport.authenticate("jwt", { session: false });
/*
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

*/
const userIsAdminMDW = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    console.log('User:', user); // Verificar el objeto user obtenido del token
    //if (user && user.role === 'admin') { //
    /* if (user.role === 'admin' || (user.role === 'user' && req.method === 'GET')){
       req.user = user;
       return next();
     }
 */
    //implemento un log con el tipo de role
    if (user) {
      req.user = user;
      if (user.role === 'admin') {
        console.log('Usuario autenticado como admin');
        return next();
      } else if (user.role === 'user' && req.method === 'GET') {
        console.log('Usuario autenticado como user en una petición GET');
        return next();
      }
    }

    console.log('Info:', info); // Verificar el objeto info proporcionado por Passport
    res.status(403).json({ error: 'User is not an admin' });
  })(req, res, next);
};

module.exports = {
  secret,
  authMiddleware,
  userIsAdminMDW,
};