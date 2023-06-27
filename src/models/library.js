const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const Book = require("./book");

const Library = sequelize.define("Library", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
        defaultValue: false,
        allowNull: false,
    },
});
/*
Library.hasMany(Book);
Book.belongsTo(Library);
*/
//modifico modelo para agregar libro dede library
Library.hasMany(Book, { foreignKey: 'LibraryId' });
Book.belongsTo(Library, { foreignKey: 'LibraryId' });

module.exports = Library;