const express = require('express');
const { bookController } = require('../controllers');
const { authMiddleware , userIsAdminMDW } = require("../middleware/authentication");
const router = express.Router();


router.get('/all', bookController.getAllBooks);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", authMiddleware, userIsAdminMDW, bookController.updateBook);
router.delete('/:bookId', authMiddleware, userIsAdminMDW, bookController.deleteBook);
router.post("/", authMiddleware, userIsAdminMDW, bookController.createBook); 
module.exports = router;