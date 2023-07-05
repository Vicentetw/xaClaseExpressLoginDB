const express = require('express');
const { bookController } = require('../controllers');
const { authMiddleware } = require("../middleware/authentication");
const router = express.Router();


router.get('/all', bookController.getAllBooks);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", authMiddleware, bookController.updateBook);
router.delete('/:bookId', authMiddleware, bookController.deleteBook);
router.post("/", authMiddleware, bookController.createBook); 
module.exports = router;