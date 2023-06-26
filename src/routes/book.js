const express = require('express');
const { bookController } = require('../controllers');
const router = express.Router();

// Obtener todos los libros
router.get('/', (req, res) => {
  // Lógica para obtener todos los libros
});

// Obtener un libro en particular
router.get('/:id', (req, res) => {
  const bookId = req.params.id;
  // Lógica para obtener un libro por su ID
});

// Crear un libro
router.post("/", bookController.createBook);
// Modificar un libro
router.put('/:id', (req, res) => {
  const bookId = req.params.id;
  // Lógica para modificar un libro por su ID
});

// Eliminar un libro
router.delete('/:id', (req, res) => {
  const bookId = req.params.id;
  // Lógica para eliminar un libro por su ID (borrado lógico)
});

module.exports = router;