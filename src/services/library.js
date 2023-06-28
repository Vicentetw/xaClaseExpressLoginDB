const { libraryController } = require("../controllers");
const { Library, Book } = require("../models");
const libraryProvider = require("../providers/libraryProvider");


const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library);
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

const getAllLibraries = async () => {
    try {
        const libraries = await Library.findAll({
            include: Book,
        });

        return libraries;
    } catch (error) {
        console.error("Error al obtener las librerías en service", error);
        throw error;
    }
};
/*
//obtener listado obtine librerias que no han sido borradas l'
const getAllLibraries = async () => {
    try {
      const libraries = await Library.findAll({ where: { deleted: false } });
      return libraries;
    } catch (error) {
      console.error('Error al obtener las librerías', error);
      throw error;
    }
  };
*/
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

const deleteLibrary = async (LibraryId) => {
    try {
        const deletedLibrary = await libraryProvider.deleteLibrary(LibraryId);
        return deletedLibrary;
    } catch (err) {
        console.error("Error when deleting Book", err);
        throw err;
    }
};
/* const deleteLibrary = async (libraryId) => {
   try {
     await Library.update({ deleted: true }, { where: { id: libraryId } });
   } catch (error) {
     throw error;
   }
 };
*/
const addBookToLibrary = async (libraryId, bookData) => {
    try {
        console.log("Iniciando función addBookToLibrary");
        const library = await Library.findByPk(libraryId);

        if (!library) {
            console.log("Librería no encontrada");
            throw new Error("Librería no encontrada");
        }

        const newBook = await Book.create(bookData);

        await library.addBook(newBook);
        console.log("Libro agregado a la librería exitosamente");

        return library;
    } catch (error) {
        console.error("Error al agregar el libro a la librería:", error);
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