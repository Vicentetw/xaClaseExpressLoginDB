const { Op } = require("sequelize");
const { Library, Book } = require("../models");

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

const deleteLibrary = async (libraryId) => {
    try {
        const library = await getLibrary(libraryId);
        if (!library) {
            throw new Error("Library not found");
        }
        if (library.deleted === true) {
            throw new Error('Library already deleted');
        }
        // Actualizar el atributo "deleted" en lugar de eliminar físicamente la librería
        library.deleted = true;
        await library.update({ deleted: true });
    } catch (error) {
        console.error("Error al eliminar la librería", error);
        throw error;
    }
};

//para permitir agregar libro desde library debo modificar el controller de book (spanenglish)
const addBookToLibrary = async (libraryId, bookOptions) => {
    try {
        const library = await Library.findByPk(libraryId);//busco el id de la librería
        if (!library) {
            throw new Error("Library not found"); //If not found, throw an error message
        }

        //If it reaches this point, it means the library Id was found, interact whit the model, importo el modelo de Book
        const newBook = await Book.create(bookOptions);
        await library.addBook(newBook);
        return newBook;
    } catch (error) {
        console.error("Error al agregar libro a la librería", error);
        throw error;
    }
};
module.exports = {
    createLibrary,
    getAllLibraries,
    getLibrary,
    deleteLibrary,
    addBookToLibrary,
};