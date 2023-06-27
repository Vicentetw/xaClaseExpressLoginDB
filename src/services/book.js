const { Book } = require("../models");
const bookProvider = require("../providers/bookProvider");

const createBook = async (book) => {
    return await bookProvider.createBook(book);
  };
  

const getBook = async (bookId) => {
  try {
    const book = await bookProvider.getBook(bookId, {
      include: Book,
    });

    if (!book) {
      throw new Error("libro no encontrado");
    }

    return book;
  } catch (error) {
    console.error("Error al obtener los libros", error);
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

/*const updateBook = async (bookId, book) => {
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
*/
const updateBook = async (bookId, bookData) => {
  try {
    const updatedBook = await bookProvider.updateBook(bookId, bookData);
    return updatedBook;
  } catch (err) {
    console.error("Error in book service - updateBook", err);
    throw err;
  }
};
/*
//modifico mi delete a logic
const deleteBook = async (bookId) => {
  try {
    await Book.destroy({ where: { id: bookId } });
  } catch (error) {
    throw error;
  }
};
*/
const deleteBook = async (bookId) => {
  try {
    const deletedBook = await bookProvider.deleteBook(bookId);
    return deletedBook;
  } catch (err) {
    console.error("Error when deleting Book", err);
    throw err;
  }
};
const addBookToBook = async (bookId, newBook) => {
  try {
    const book = await Book.findByPk(bookId);

    if (!book) {
      throw new Error("Libro no encontrado");
    }

    const createdBook = await Book.create(newBook);

    await book.addBook(createdBook);

    return book;
  } catch (error) {
    console.error("Error al agregar libro al libro", error);
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