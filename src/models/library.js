const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Book = require("./book");

const Library = sequelize.define("Library", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;