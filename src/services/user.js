const { User } = require("../models");
const userProvider = require("../providers/userProvider");

const getUser = async (id) => {
  try {
    const user = await User.findByPk(id); // Buscar usuario por ID en la base de datos
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}`, error);
    throw error;
  }
};

const getAll = async () => {
  try {
    const users = await userProvider.getAll(); // Obtener todos los usuarios desde el proveedor
    return users;
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    throw error;
  }
};

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const updateUser = (id, user) => {
  // Llamada al proveedor con el objeto user
  return user;
};

const deleteUser = async (id) => {
  try {
    // Llamar a la función deleteUser del proveedor
    await userProvider.deleteUser(id);
    return `Adiós usuario ${id}, se ha eliminado correctamente`;
  } catch (error) {
    throw error;
  }
};

const queryUser = (name) => {};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  queryUser,
  getAll,
};