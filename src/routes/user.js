const express = require("express");
const userController = require('../controllers/userController');
//const userIsAdminMDW =require("../middleware/authentication");
const { authMiddleware, userIsAdminMDW } = require("../middleware/authentication");

const router = express.Router();
router.get('/all',  userIsAdminMDW, userController.getAll);
router.get('/', authMiddleware, userIsAdminMDW, userController.getAll);
router.get('/:userId', authMiddleware, userController.getUser);
router.post('/',  userController.createUser);
router.put('/:userId', authMiddleware, userIsAdminMDW, userController.updateUser);
router.delete('/:userId', authMiddleware, userIsAdminMDW, userController.deleteUser);


module.exports = router;