const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Libreria = require("./libreria");

const Libro = sequelize.define("Libro", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,

        allowNull: false,
        unique: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

Libro.belongsTo(Libreria, { foreignKey: "libraryId", as: "libreria" });

module.exports = Libro;