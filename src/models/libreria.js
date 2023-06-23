const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Libro = require("./libro");

const Libreria = sequelize.define("Librerias", {
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

Libreria.hasMany(Libro);
Libro.belongsTo(Libreria);

module.exports = Libreria;