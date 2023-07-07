const libraryService = require("../services/library");
const { Library, Book } = require("../models");

const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries({ deleted: false });
    res.status(200).json(libraries); // Enviar la lista de usuarios como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las libraries' });
  }
};
const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};
/*const getAllLibraries = async (req, res) => {
    try {
        const librarys = await libraryService.getAllLibraries(); // Obtener todos los usuarios desde el servicio
        res.status(200).json(librarys); // Enviar la lista de usuarios como respuesta
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las librerias' });
    }
};
*/
/*
const getAllLibraries2 = async (req, res) => {
    try {
      const libraries = await libraryService.getAllLibraries();
      const activeLibraries = libraries.filter(library => !library.deleted);
      res.status(200).json(activeLibraries);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving libraries' });
    }
  };
*/
const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    if (!library) {
      res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.message });
  }
};
/*
const deleteLibrary = async (req, res) => {
    try {
      const deletedLibrary = await libraryService.deleteLibrary(req.params.libraryId);
      res.json({ message: "Library deleted successfully", library: deletedLibrary });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la libreria' });
    }
  };
*/
/*const deleteLibrary = async (req, res) => {
    try {
      const libraryId = req.params.libraryId;
      await libraryService.deleteLibrary(libraryId);
      res.json({ message: "Library deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting library" });
    }
  };
  */
const deleteLibrary = async (req, res) => {
  try {
    const { libraryId } = req.params;
    await libraryService.deleteLibrary(libraryId);
    res.json({ message: 'Library deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la librería' });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;
    const updatedLibrary = await libraryService.updateLibrary(libraryId, req.body);
    res.json(updatedLibrary);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la librería" });
  }
};

/*const addBookToLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;
    const bookId = req.params.bookId;
    const addedBook = await libraryService.addBookToLibrary(libraryId, bookId);
    res.json(addedBook);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el libro a la librería" });
  }
};*/


/*
//esta funcion requiere el id en el endpoint y libraryId: en el json
const addBookToLibrary = async (req, res) => {
    try {
        const libraryId = req.params.libraryId;
        const bookData = req.body;

        // Verificar si la biblioteca existe
        const library = await Library.findByPk(libraryId);
        if (!library) {
            return res.status(404).json({ message: "Librería no encontrada" });
        }
        // Verificar si el ISBN ya está repetido
        const existingBook = await Book.findOne({ where: { isbn: bookData.isbn } });
        if (existingBook) {
            return res.status(400).json({ message: "ISBN ya existe" });
        }
        // Crear el libro
        const newBook = await Book.create(bookData);

        // Agregar el libro a la biblioteca
        await library.addBook(newBook);

        return res.status(200).json({
            message: "Libro agregado a la librería exitosamente",
            library,
        });
    } catch (error) {
        console.error("Error al agregar el libro a la librería:", error);
        return res.status(500).json({ message: "Error al agregar el libro a la librería" });
    }
};
*/
//addBookToLibrary tomando id de endpoint
const addBookToLibrary = async (req, res) => {
  try {
    const bookData = req.body;

    // Obtener el libraryId de la URL del endpoint
    const libraryId = req.params.libraryId;

    // Verificar si la biblioteca existe
    const library = await Library.findByPk(libraryId);
    if (!library) {
      return res.status(404).json({ message: "Librería no encontrada" });
    }

    // Verificar si el ISBN ya está repetido
    const existingBook = await Book.findOne({ where: { isbn: bookData.isbn } });
    if (existingBook) {
      return res.status(400).json({ message: "ISBN ya existe" });
    }

    // Agregar el ID de la biblioteca al objeto bookData
    bookData.libraryId = libraryId;

    // Crear el libro
    const newBook = await Book.create(bookData);

    // Agregar el libro a la biblioteca
    await library.addBook(newBook);

    return res.status(200).json({
      message: "Libro agregado a la librería exitosamente",
      library,
    });
  } catch (error) {
    console.error("Error al agregar el libro a la librería:", error);
    return res.status(500).json({ message: "Error al agregar el libro a la librería" });
  }
};


module.exports = {
  createLibrary,
  getAllLibraries,
  getLibrary,
  deleteLibrary,
  updateLibrary,
  addBookToLibrary,
};
