const express = require("express");
const userController = require('../controllers/userController');
const { authMiddleware } = require("../middleware/authentication");

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", (req, res) => {
  const { name , email } = req.query;
  res.send({ name, email });
});

router.get('/all', authMiddleware, userController.getAll);

router.get("/:userId", userController.getUser);

router.put("/:userId", (req, res) => {
  const userId = req.params.userId;
  const { name, email, password } = req.body;
  res.send({ id: userId, name, email, password: "****" });
});

router.delete("/:userId", userController.deleteUser);

module.exports = router;