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
const getAllLibraries = async () => {
    try {
      const library = await Library.findAll();
      return library;
    } catch (error) {
      throw error;
    }
  };
const getLibrary = async (libraryId) => {
    try {
      const library = await Library.findByPk(libraryId, { include: { all: true } });
      return library;
    } catch (err) {
      console.error("Error when fetching Library", err);
      throw err;
    }
  };
module.exports = {
  createLibrary, getAllLibraries, getLibrary,
};