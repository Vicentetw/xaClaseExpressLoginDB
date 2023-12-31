const express = require("express");
const jwt = require("jsonwebtoken");
const { secret } = require("../middleware/authentication");
const userProvider = require("../providers/userProvider");

const router = express.Router();
/*
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
*/
/*
//esto solo permite logearse a admin
router.post("/", async (req, res) => {
  const { user, password } = req.body;
  try {
    if (user === "admin" && password === "admin") {
      const token = jwt.sign({ user, role: "admin" }, secret); // Incluye el rol "admin" en el payload
      res.json({ token });
    } else {
      const dbUser = await userProvider.validateUser(user, password);
      if (dbUser) {
        const token = jwt.sign({ user: dbUser.user, role: dbUser.role }, secret); // Incluye el rol del usuario en el payload
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
*/
//elimino la condicion  if (user === "admin" && password === "admin") 

router.post("/", async (req, res) => {
  const { nombre, password } = req.body;
  try {
    const dbUser = await userProvider.validateUser(nombre, password);
    console.log("DB User:", dbUser); // Agrega este console.log para verificar los datos obtenidos de la base de datos
    if (dbUser) {
      const token = jwt.sign({ user: dbUser.nombre, role: dbUser.role }, secret);
      res.json({ token });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error("Error during authentication", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;