const loggingMdw = (req, res, next) => {
    res.setHeader("Content-type", "Application/json");
    console.log(`se hizo un request a la url de login: (${req.url})`);
    console.log(`Authorization: ${req.get('Authorization')} `);
    next();
};
module.exports = loggingMdw; //exporto la función 