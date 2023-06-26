const {Op} = require("sequelize");
const { Book } = require("../models");

const createBook = async (bookOptions) => {
  try {
    const newBook = await Book.create(bookOptions);
    return newBook;
  } catch (error) {
    console.error("Error al crear book", error)
    throw error;
  }
};

const deleteBook = async (bookId) => {
  try {
    const deletedBook = await Book.destroy({ where: { id: bookId } });
    return deletedBook;
  } catch (error) {
    throw error;
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

const updateBook = async (bookId, bookData) => {
  try {
    const updatedBook = await Book.update(bookData, { where: { id: bookId } });
    return updatedBook;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBook,
  deleteBook,
  getAllBooks,
  updateBook,
};