const express = require("express");
const libraryController = require("../controllers/library");
const { authMiddleware } = require("../middleware/authentication");

const router = express.Router();

// Crear librería (AUTH)
router.post("/", libraryController.createLibrary);

// Obtener una librería
router.get("/:libraryId", libraryController.getLibrary);

// Obtener todas las librerías
//router.get("/", libraryController.getAllLibraries);
router.get('/all', authMiddleware, libraryController.getAllLibraries);

// Modificar una librería (AUTH)
router.put("/:libraryId", authMiddleware, libraryController.updateLibrary);

// Eliminar una librería (**) (AUTH)
router.delete("/:libraryId", authMiddleware, libraryController.deleteLibrary);

// Agregar un libro nuevo (*)
router.post("/:libraryId/books", authMiddleware, libraryController.addBookToLibrary);

module.exports = router;

