const {Datatypes, DataTypes} = require("sequelize");
const sequelize = require("../config/dbConfig");

const User = sequelize,define("User", {
    nombre:{
        type: DataTypes.STRING,
        allowNulls 
        false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNulls false,
    },
    email: {
        type: DataTypes.STRING,
        allowNulls false,
        unique: true,
        validate:{
            isEmail: true,
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNulls false,
    },



});

module.exports = User;