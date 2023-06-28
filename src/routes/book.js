const express = require('express');
const { bookController } = require('../controllers');
const { authMiddleware } = require("../middleware/authentication");
const router = express.Router();

router.post("/", authMiddleware, bookController.createBook);
router.get('/all', bookController.getAllBooks);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", authMiddleware, bookController.updateBook);
router.delete('/:bookId', authMiddleware, bookController.deleteBook);

module.exports = router;