/**const express = require("express");
const userController = require('../controllers/userController');
const { authMiddleware } = require("../middleware/authentication");

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", (req, res) => {
  const { name , email } = req.query;
  res.send({ name, email });
});

router.get('/all', authMiddleware, userController.getAll);

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send({ userId });
});

router.put("/:userId", (req, res) => {
  const userId = req.params.userId;
  const { name, email, password } = req.body;
  res.send({ id: userId, name, email, password: "****" });
});

router.delete("/:userId", userController.deleteUser);

module.exports = router;*/


//*********** */
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

