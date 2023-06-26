const libraryService = require("../services/library");



const createLibrary = async (req, res) => {
    try {
      const newLibrary = await libraryService.createLibrary(req.body);
      res.json(newLibrary);
    } catch (err) {
      res.status(500).json({ action: "createLibrary", error: err.message });
    }
  };
  const getAllLibraries = async (req, res) => {
    try {
      const librarys = await libraryService.getAllLibraries(); // Obtener todos los usuarios desde el servicio
      res.status(200).json(librarys); // Enviar la lista de usuarios como respuesta
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las librerias' });
    }
  };
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
  
  const deleteLibrary = async (req, res) => {
    try {
      const libraryId = req.params.libraryId;
  
      // Lógica para eliminar un usuario
      await libraryService.deleteLibrary(libraryId);
  
      res.status(200).json({ message: 'Libreria eliminada con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la libreria' });
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
  
  const addBookToLibrary = async (req, res) => {
    try {
      const libraryId = req.params.libraryId;
      const bookId = req.params.bookId;
      const addedBook = await libraryService.addBookToLibrary(libraryId, bookId);
      res.json(addedBook);
    } catch (error) {
      res.status(500).json({ message: "Error al agregar el libro a la librería" });
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
