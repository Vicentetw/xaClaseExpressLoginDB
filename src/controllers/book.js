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
    const book = await bookService.getBook( req.params.bookId);
    if (!book) {
        res.status(404).json({ action: "getBook", error: "Book Not Found" });
      } else {
        res.json(book);
      }
    } catch (err) {
      res.status(500).json({ action: "getBook", error: err.message });
    }
  };
      
  

/*
reemplazo para permitir crear libro desde library
const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};
*/
/*const createBook = async (req, res) => {
    try {
      const bookOptions = req.body;
      const libraryId = req.query.libraryId;
  //si tengo el libraryId agrego creo el libro y lo agrego al id de librería con service de library
      if (libraryId) {
        const newBook = await libraryService.addBookToLibrary(libraryId, bookOptions);
        res.json(newBook);
  //si no tengo el id de library creo directamente el libro con service de book
    } else {
        const newBook = await bookService.createBook(bookOptions);
        res.json(newBook);
      }
    } catch (error) {
      res.status(500).json({ message: "Error al crear el libro" });
    }
  };
  */
 /*
 //lo reemplazo porque no me permite crear el libro enviando el id de librería en el json
  const createBook = async (req, res) => {
    try {
      const bookOptions = req.body;
      const libraryId = req.query.libraryId;
  
      if (libraryId) {
        const newBook = await libraryService.addBookToLibrary(libraryId, bookOptions);
        res.json(newBook);
      } else {
        // Si no se proporciona el libraryId, lanzar un error
        throw new Error("LibraryId is required");
      }
    } catch (error) {
      console.error("Error al crear el libro", error);
      res.status(500).json({ message: "Error al crear el libro", error: error.message });
    }
  };
*/
const createBook = async (req, res) => {
    try {
      const bookOptions = req.body;
      const libraryId = bookOptions.libraryId; // Obtener el ID de la librería del cuerpo de la solicitud
  
      if (!libraryId) {
        throw new Error("LibraryId is required");
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
/*
const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const existingBook = await bookService.deleteBook({ _id: bookId, deleted: false });
    if (!existingBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    existingBook.deleted = true;

    const updatedBook = await existingBook.save();

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/
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