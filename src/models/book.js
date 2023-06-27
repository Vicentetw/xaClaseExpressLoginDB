const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Book = sequelize.define("Book", {
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
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    libraryId: { // Nueva columna para el ID de la librería
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Book;