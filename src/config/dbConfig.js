const {Sequalize} = require ('sequalize');

const sequalize = new Sequalize({
    dialect: "sqlite",
    Storage: ".database.sqlite",
});
module.exports = sequalize; 
