const bookService = require('../services/book')
const libraryService = require("../services/library");

const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks({ deleted: false });
        res.status(200).json(books); // Enviar la lista de usuarios como respuesta
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los books' });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({ action: "getBook", error: "Book Not Found" });
        } else {
            res.json(book);
        }
    } catch (err) {
        res.status(500).json({ action: "getBook", error: err.message });
    }
};


const createBook = async (req, res) => {
    try {
        const bookOptions = req.body;
        const libraryId = bookOptions.libraryId; // Obtener el ID de la librería del cuerpo de la solicitud

        if (!libraryId) {
            throw new Error("LibraryId is required");
        }

        //valido que ingresen todos los datos requeridos
        if (!bookOptions.isbn || !bookOptions.title || !bookOptions.author || !bookOptions.year) {
            throw new Error("ISBN, title, author, and year are required");
        }
        // Creao el libro con los datos proporcionados y el ID de la librería
        const newBook = await bookService.createBook(bookOptions);


        res.json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el libro", error: error.message });
    }
};
const updateBook = async (req, res) => {
    try {
        const updatedBook = await bookService.updateBook(
            req.params.bookId,
            req.body
        );
        res.json({ message: "Book updated successfully", book: updatedBook });
    } catch (err) {
        console.error("Error when updating book", err);
        res.status(500).json({ action: "updateBook", error: err.message });
    }
};


const deleteBook = async (req, res) => {
    try {
        const deletedBook = await bookService.deleteBook(req.params.bookId);
        res.json({ message: "Book deleted successfully", book: deletedBook });
    } catch (err) {
        res.status(500).json({ action: "deleteBook", error: err.message });
    }
};





module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};