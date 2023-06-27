const {Op} = require("sequelize");
const { Book } = require("../models");
const libraryService = require("../services/library");//importo para poder crear libro desde library

/*
const createBook = async (bookOptions) => {
  try {
    const newBook = await Book.create(bookOptions);
    return newBook;
  } catch (error) {
    console.error("Error al crear book", error)
    throw error;
  }
};
*/
const createBook = async (bookOptions) => {
    try {
      const { isbn } = bookOptions;
  
      // Verificar si ya existe un libro con el mismo ISBN
      const existingBook = await Book.findOne({
        where: {
          isbn: {
            [Op.eq]: isbn, // Utilizando el operador de igualdad (eq)
          },
        },
      });
  
      if (existingBook) {
        throw new Error("ISBN already exists");
      }
  
      // Crear el libro si no existe duplicado de ISBN
      const newBook = await Book.create(bookOptions);
      return newBook;
    } catch (error) {
      console.error("Error al crear book", error);
      throw error;
    }
  };
/*
//Cambio a logic delete
const deleteBook = async (bookId) => {
  try {
    const deletedBook = await Book.destroy({ where: { id: bookId } });
    return deletedBook;
  } catch (error) {
    throw error;
  }
};
*/
const deleteBook = async (bookId) => {
  try {
    const book = await getBook(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    if (book.deleted = true) {
      throw new Error('Book already deleted');
    }
    book.deleted = true;
    await book.save();
    return book;
  } catch (err) {
    console.error("Error when deleting Book", err);
    throw err;
  }
};


const getAllBooks = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    throw error;
  }
};
const getBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId, { include: { all: true } });
    return book;
  } catch (err) {
    console.error("Error when fetching Book", err);
    throw err;
  }
};
  
/*const updateBook = async (bookId, bookData) => {
  try {
    const updatedBook = await Book.update(bookData, { where: { id: bookId } });
    return updatedBook;
  } catch (error) {
    throw error;
  }
};
*/
/*const updateBook = async (bookOptions) => {
    try {
      const { id, ...rest } = bookOptions;
      const updatedBook = await Book.update(rest, { where: { id } });
      return updatedBook;
    } catch (error) {
      console.error("Error al actualizar el libro", error);
      throw error;
    }
  };
*/
const updateBook = async (bookId, bookData) => {
  try {
    const [updatedRowsCount, updatedBooks] = await Book.update(bookData, {
      where: { id: bookId, deleted: false },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      throw new Error("Book not found");
    }

    return updatedBooks[0];
  } catch (err) {
    console.error("Error when updating book", err);
    throw err;
  }
};

module.exports = {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
};