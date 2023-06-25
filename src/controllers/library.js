const libraryService = require("../services");

const createLibrary = async (req, res) => {
  try {
    // Lógica para crear una librería
    const { name, books } = req.body;

    // Validación de datos
    if (!name || !books) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const newLibrary = await libraryService.createLibrary({
      name,
      books,
    });

    res.status(201).json(newLibrary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;

    // Obtener la librería y sus libros asociados
    const library = await libraryService.getLibrary(libraryId);

    res.status(200).json(library);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la librería" });
  }
};

const getAllLibraries = async (req, res) => {
  try {
    // Obtener todas las librerías y sus libros asociados
    const libraries = await libraryService.getAllLibraries();

    res.status(200).json(libraries);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las librerías" });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;
    const { name, books } = req.body;

    // Actualizar la librería con los nuevos datos
    const updatedLibrary = await libraryService.updateLibrary(libraryId, {
      name,
      books,
    });

    res.status(200).json(updatedLibrary);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la librería" });
  }
};

const deleteLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;

    // Eliminar la librería y sus libros asociados
    await libraryService.deleteLibrary(libraryId);

    res.status(200).json({ message: "Librería eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la librería" });
  }
};

const addBookToLibrary = async (req, res) => {
  try {
    const libraryId = req.params.libraryId;
    const { book } = req.body;

    // Agregar el libro a la librería
    const updatedLibrary = await libraryService.addBookToLibrary(libraryId, book);

    res.status(200).json(updatedLibrary);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar el libro a la librería" });
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  addBookToLibrary,
};
