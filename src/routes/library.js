const express = require("express");
const libraryController = require("../controllers/library");
const { authMiddleware } = require("../middleware/authentication");

const router = express.Router();

// Crear librería (AUTH)
router.post("/", authMiddleware, libraryController.createLibrary);
// Obtener todas las librerías get all debe estar antes qu addbooktolibrary o dará error

router.get('/all', libraryController.getAllLibraries);

// Obtener una librería
router.get("/:libraryId", libraryController.getLibrary);

// Modificar una librería (AUTH)
router.put("/:libraryId", authMiddleware, libraryController.updateLibrary);

// Agregar un libro nuevo (*)
router.post("/:libraryId/books", authMiddleware, libraryController.addBookToLibrary);

// Eliminar una librería (**) (AUTH)
router.delete("/:libraryId", authMiddleware, libraryController.deleteLibrary);

module.exports = router;

