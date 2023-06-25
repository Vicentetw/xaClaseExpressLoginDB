const Book = require('../models/book');
const books = require('../services/book')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ deleted: false });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    const book = await Book.findOne({ _id: bookId, deleted: false });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Libro no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  const { isbn, titulo, autor, year, library } = req.body;

  if (!isbn || !titulo || !autor || !year || !library) {
    return res.status(400).json({ message: 'Por favor, proporciona todos los campos requeridos' });
  }

  try {
    const newBook = new Book({
      isbn,
      titulo,
      autor,
      year,
      library,
    });

    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const existingBook = await Book.findOne({ _id: bookId, deleted: false });
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
    const existingBook = await Book.findOne({ _id: bookId, deleted: false });
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