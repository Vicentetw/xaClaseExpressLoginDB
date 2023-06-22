const express = require("express");
const {userService} = require("../services");

//const router = express.Router();
const router = require("express").Router(); //des esta forma sólo importo la funcion Router y no todo el módulo express

// Ruta para el login
router.post("/login", async (req, res) => {
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
  



router.post("/",async (req, res) => {

    const { nombre, apellido, email, password } = req.body;

     // Validación de datos
  if (!nombre || !apellido || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

    try{
        const newUser = await userService.createUser({
            nombre,
            apellido,
            email,
            password,
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



router.get("/", (req, res) => {
       const { name , email} = req.query;
    res.send({ name, email});
});

router.get('/all', async (req, res) => {
    try {
      const users = await userService.getAll(); // Obtener todos los usuarios desde la base de datos
      res.status(200).json(users); // Enviar la lista de usuarios como respuesta
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  });

//poner el get userId despues de get all para que no me capture como id antes de solicitar all
  router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send({ userId });
})
// cómo poner midware en una peticion route.put("/user/:userId", myMdw,(req, res) => {
router.put("/:userId", (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ id: userId, name, email, password: "****" });
});

router.delete("/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`);
});

module.exports = router;