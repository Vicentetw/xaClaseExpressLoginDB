const express = require('express');
const { bookController } = require('../controllers');
const { authMiddleware } = require("../middleware/authentication");
const router = express.Router();

// Obtener todos los libros

router.get('/all', bookController.getAllBooks);

// Obtener un libro en particular
// Obtener una librería
router.get("/:bookId", bookController.getBookById);

// Crear un libro
router.post("/", bookController.createBook);
// Modificar un libro
/*router.put('/:id', (req, res) => {
  const bookId = req.params.id;
  // Lógica para modificar un libro por su ID
});
*/
router.put("/:bookId", authMiddleware, bookController.updateBook);

// Eliminar un libro (borrado lógico)
router.delete('/:bookId', authMiddleware, bookController.deleteBook);
  // Lógica para eliminar un libro por su ID (borrado lógico)


module.exports = router;