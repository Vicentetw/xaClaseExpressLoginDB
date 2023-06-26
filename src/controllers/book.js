const bookService = require('../services/book')

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
      
  

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};


const updateBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const existingBook = await bookService.getBook({ _id: bookId, deleted: false });
    if (!existingBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    existingBook.isbn = req.body.isbn || existingBook.isbn;
    existingBook.titulo = req.body.titulo || existingBook.titulo;
    existingBook.autor = req.body.autor || existingBook.autor;
    existingBook.year = req.body.year || existingBook.year;
    existingBook.library = req.body.library || existingBook.library;

    const updatedBook = await existingBook.save();

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};