const userService = require('../services');

const createUser = async (req, res) => {
  try {
    
    // Lógica para crear un usuario
    const { nombre, apellido, email, password } = req.body;
    console.log('Llamando al controller');

    // Validación de datos
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const newUser = await userService.createUser({
      nombre,
      apellido,
      email,
      password,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  deleteUser,
};