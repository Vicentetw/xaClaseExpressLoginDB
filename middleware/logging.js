const loggingMdw = (req, res, next) => {
    res.setHeader("Content-type", "Applitacion/json");
    console.log(`se hizo un request a la url: (${req.url})`);
    next();
};
module.exports = loggingMdw; //exporto la función 