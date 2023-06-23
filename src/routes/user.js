const express = require("express");
const {userService} = require("../services");
//const { userController } = require('../controllers');
const userController = require('../controllers/userController');

const router = express.Router();
//const router = require("express").Router(); //des esta forma sólo importo la funcion Router y no todo el módulo express


  

  router.post("/", userController.createUser);
//paso el manejo al controlador con la sentencia de arriba
/* router.post("/",async (req, res) => {

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

*/

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

router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    // Eliminar el usuario de la base de datos
    await userService.deleteUser(userId);

    // Enviar mensaje de éxito
    res.status(200).json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    // Manejar el error en caso de fallo al eliminar
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
});

module.exports = router;