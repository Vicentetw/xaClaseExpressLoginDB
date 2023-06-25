const { Library } = require("../models");

const createLibrary = async (libraryOptions) => {
    try {
      const newLibrary = await Library.createLibrary(libraryOptions);
      return newLibrary;
    } catch (error) {
      throw error;
    }
  };
  
/*
const { LibraryService } = require('../services');

const libraryService = new LibraryService();
*/
module.exports = {
    createLibrary,
    
  };