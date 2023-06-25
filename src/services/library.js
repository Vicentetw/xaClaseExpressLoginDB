const { Library, Book } = require("../models");
const libraryProvider = require("../providers/libraryProvider");

const createLibrary = async (library) => {
    try {
      const newLibrary = await libraryProvider.createLibrary(library);
      return newLibrary;
    } catch (error) {
      throw error;
    }
  };

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId, {
      include: Book,
    });

    if (!library) {
      throw new Error("Librería no encontrada");
    }

    return library;
  } catch (error) {
    throw error;
  }
};
/*const createLibrary = async (libraryData) => {
    try {
      // Crear una nueva librería en la base de datos
      const newLibrary = await Library.create(libraryData);
      return newLibrary;
    } catch (error) {
      throw new Error('Error al crear la librería');
    }
  };
  */

const getAllLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      include: Book,
    });

    return libraries;
  } catch (error) {
    throw error;
  }
};

const updateLibrary = async (libraryId, library) => {
  try {
    await Library.update(library, {
      where: { id: libraryId },
    });

    const updatedLibrary = await Library.findByPk(libraryId);

    return updatedLibrary;
  } catch (error) {
    throw error;
  }
};

const deleteLibrary = async (libraryId) => {
  try {
    await Library.destroy({ where: { id: libraryId } });
  } catch (error) {
    throw error;
  }
};

const addBookToLibrary = async (libraryId, book) => {
  try {
    const library = await Library.findByPk(libraryId);

    if (!library) {
      throw new Error("Librería no encontrada");
    }

    const newBook = await Book.create(book);

    await library.addBook(newBook);

    return library;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    createLibrary,
    getLibrary,
    getAllLibraries,
    updateLibrary,
    deleteLibrary,
    addBookToLibrary,
  };