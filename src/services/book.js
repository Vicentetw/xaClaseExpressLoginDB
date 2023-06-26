const { Book } = require("../models");
const bookProvider = require("../providers/bookProvider");

const createBook = async (book) => {
    return await bookProvider.createBook(book);
  };
  

const getBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId, {
      include: Book,
    });

    if (!book) {
      throw new Error("libro no encontrado");
    }

    return book;
  } catch (error) {
    console.error("Error al obtener loslibros", error);
    throw error;
  }
};

/*const createBook = async (bookData) => {
    try {
      // Crear una nueva librería en la base de datos
      const newBook = await Book.create(bookData);
      return newBook;
    } catch (error) {
      throw new Error('Error al crear la librería');
    }
  };
  */

/*const getAllBooks = async () => {
  try {
    const books = await bookProvider.getAllBooks(){
    //  include: Book,
   // });

    return books;
  } catch (error) {
    throw error;
  }
};
*/
const getAllBooks = async () => {
    try {
      const books = await bookProvider.getAllBooks({
        include: Book, // Incluir las asociaciones relacionadas con el modelo Book
      });
      return books;
    } catch (error) {
      console.error("Error al obtener los libros en service", error);
      throw error;
    }
  };

const updateBook = async (bookId, book) => {
  try {
    await Book.update(book, {
      where: { id: bookId },
    });

    const updatedBook = await Book.findByPk(bookId);

    return updatedBook;
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (bookId) => {
  try {
    await Book.destroy({ where: { id: bookId } });
  } catch (error) {
    throw error;
  }
};

const addBookToBook = async (bookId, book) => {
  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      throw new Error("Librería no encontrada");
    }

    const newBook = await Book.create(book);

    await book.addBook(newBook);

    return book;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook,
    addBookToBook,
  };