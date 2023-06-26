const userService = require('../services/user');
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err.message });
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

module.exports = {
  createUser,
  getAll,
  deleteUser,
};