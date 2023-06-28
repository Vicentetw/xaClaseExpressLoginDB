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

Library.addHook("beforeCreate", (libraryOptions) => {
  console.log("Library Options:", libraryOptions); // Agreg0 este console.log para verificar el valor de libraryOptions
});

Library.hasMany(Book, { foreignKey: "libraryId" });
Book.belongsTo(Library, { foreignKey: "libraryId" });

module.exports = Library;