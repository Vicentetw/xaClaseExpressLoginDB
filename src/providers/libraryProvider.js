const {Op} = require("sequelize");
const { Library } = require("../models");

const createLibrary = async (libraryOptions) => {
  try {
    const newLibrary = await Library.create(libraryOptions);
    return newLibrary;
  } catch (error) {
    console.error("Error al crear library", error);
    throw error;
  }
};

module.exports = {
  createLibrary,
};