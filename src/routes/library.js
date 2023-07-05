const express = require("express");
const libraryController = require("../controllers/library");
const { authMiddleware ,userIsAdminMDW } = require("../middleware/authentication");

const router = express.Router();
//router.get('/', libraryController.getAllLibraries);
router.get('/all', libraryController.getAllLibraries);
router.post("/", authMiddleware, userIsAdminMDW, libraryController.createLibrary);

// Obtener todas las librerías get all debe estar antes qu addbooktolibrary o dará error
//obtiene incluso las marcadas como deleted : true


// Obtener una librería
router.get("/:libraryId", libraryController.getLibrary);

// Modificar una librería
router.put("/:libraryId", authMiddleware, userIsAdminMDW,libraryController.updateLibrary);

// Agregar un libro nuevo desde librería
router.post("/:libraryId/books", authMiddleware, userIsAdminMDW, libraryController.addBookToLibrary);

// Eliminar una librería en forma lógica
router.delete("/:libraryId", authMiddleware, userIsAdminMDW,libraryController.deleteLibrary);

module.exports = router;

