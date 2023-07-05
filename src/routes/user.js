const express = require("express");
const userController = require('../controllers/userController');
//const userIsAdminMDW =require("../middleware/authentication");
const { authMiddleware, userIsAdminMDW } = require("../middleware/authentication");

const router = express.Router();
/*
router.post("/", userController.createUser);
router.post("/admin", authMiddleware, userIsAdminMDW, userController.createAdmin);

router.get("/", (req, res) => {
  const { name, email } = req.query;
  res.send({ name, email });
});

router.get('/all', authMiddleware, userController.getAll);
router.get("/:userId", authMiddleware, userIsAdminMDW, userController.getUser);
router.put("/:userId", authMiddleware, userIsAdminMDW, userController.updateUser);
router.delete("/:userId", authMiddleware, userIsAdminMDW,userController.deleteUser);
*/
/*
//usuarios sólo con rol administrador
router.get('/all', userIsAdminMDW, userController.getAll);
router.get("/:userId", userIsAdminMDW, userController.getUser);
router.put("/:userId", userIsAdminMDW, userController.updateUser);
router.delete("/:userId", userIsAdminMDW, userController.deleteUser);
*/

router.get('/', authMiddleware, userIsAdminMDW, userController.getAll);
router.get('/:userId', authMiddleware, userIsAdminMDW, userController.getUser);
router.post('/', authMiddleware, userIsAdminMDW, userController.createUser);
router.put('/:userId', authMiddleware, userIsAdminMDW, userController.updateUser);
router.delete('/:userId', authMiddleware, userIsAdminMDW, userController.deleteUser);


module.exports = router;