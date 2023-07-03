const express = require("express");
const jwt = require("jsonwebtoken");
const { secret } = require("../middleware/authentication");
const userProvider = require("../providers/userProvider");

const router = express.Router();

router.post("/", async (req, res) => {
  const { user, password } = req.body;
  try {
    if (user === "admin" && password === "admin") {
      const token = jwt.sign({ user }, secret);
      res.json({ token });
    } else {
      const dbUser = await userProvider.validateUser(user, password);
      if (dbUser) {
      //  const token = jwt.sign({ user: dbUser.email }, secret);
      const token = jwt.sign({ user: dbUser.user }, secret); // Cambio "email" a "user"
        res.json({ token });
      } else {
        res.status(401).json({ message: "Authentication failed" });
      }
    }
  } catch (error) {
    console.error("Error during authentication", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;