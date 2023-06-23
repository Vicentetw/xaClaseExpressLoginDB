const express = require("express");
const jwt = require("jsonwebtoken");
//const { userController } = require('../controllers');
const userController = require('../controllers/userController');
const router = express.Router();
const {secret} = require("../middleware/authentication");
const userProvider = require('../providers/userProvider');
const { json } = require("body-parser");
// Ruta para el login


router.post("/", async (req, res) => {
    const { user, password } = req.body;
    try {
      if (user === 'admin' && password === 'admin') {
        const token = jwt.sign({ user }, secret);
        res.json({ token });
      } else {
        const dbUser = await userProvider.validateUser(user, password);
        if (dbUser) {
          const token = jwt.sign({ user: dbUser.email }, secret);
          res.json({ token });
        } else {
          res.status(401).json({ message: 'Authentication failed' });
        }
      }
    } catch (error) {
      console.error("Error during authentication", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router;
/* router.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Lógica de autenticación y generación de token
      // Aquí puedes utilizar tu servicio de autenticación o cualquier otra lógica necesaria
      
      // Ejemplo de autenticación básica
      if (email === 'usuario@example.com' && password === 'contraseña') {
        // Autenticación exitosa
        const token = 'aquí va tu token generado';
        console.log("el login ha sido exitoso")
        res.status(200).json({ token });
      } else {
        // Autenticación fallida
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  */