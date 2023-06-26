const {Op} = require("sequelize");
const { User } = require("../models");

const createUser = async (userOptions) => {
  try {
    const newUser = await User.create(userOptions);
    return newUser;
  } catch (error) {
    console.error("Error al crear usuario", error)
    throw error;
  }
  
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.destroy({ where: { id: userId } });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};
const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId, { include: { all: true } });
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};
const updateUser = async (userId, updatedUser) => {
  try {
    const result = await User.update(updatedUser, { where: { id: userId } });
    if (result[0] === 0) {
      // No se encontró ningún usuario con el ID proporcionado
      throw new Error("No se encontró el usuario.");
    }
    return result[0]; // Devuelve el número de filas actualizadas (debería ser 1)
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    throw error;
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await User.findAll({
      where: {
        email: email,
        password: password,
      },
    });

    if (user.length !== 0) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error when validating User", error);
    return false;
  }
};

module.exports = {
  createUser,
  deleteUser,
  getAll,
  getUser,
  updateUser,
  validateUser,
};