const userService = require('../services/user');
const createUser = async (req, res) => {
  try {
   // const newUser = await userService.createUser(req.body);
   const newUser = await userService.createUser({...req.body, role:"user"}); 
   res.json(newUser);
  } catch (err) {
    res.status(400).json({ action: "createUser", error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll(); // Obtener todos los usuarios desde el servicio
    res.status(200).json(users); // Enviar la lista de usuarios como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await userService.getUser(req.params.userId);
    if (!user) {
      res.status(404).json({ action: "getUser", error: "User Not Found" });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ action: "getUser", error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Lógica para eliminar un usuario
    await userService.deleteUser(userId);

    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};
/*const updateUser = async (req, res) => {
  try {
    const updateUser = await userService.updateUser(req.body);
    res.json(updateUser);
  } catch (err) {
    res.status(400).json({ action: "putUser", error: err.message });
  }
};
*/
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updatedUser = req.body;

    const result = await userService.updateUser(userId, updatedUser);

    if (result === 0) {
      res.status(404).json({ action: 'updateUser', message: 'No se encontró el usuario.' });
    } else {
      res.json({ message: 'Usuario actualizado correctamente.' });
    }
  } catch (error) {
    res.status(400).json({ action: 'updateUser', error: error.message });
  }
};
const createAdmin = async (req, res) => {
  try {
    const newAdmin = await userService.createUser({ ...req.body, role: "admin" });
    res.json(newAdmin);
  } catch (err) {
    res.status(400).json({ action: "createAdmin", error: err.message });
  }
};

module.exports = {
  createUser,
  getAll,
  getUser,
  deleteUser,
  updateUser,
  createAdmin,
};