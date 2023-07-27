const { Op } = require("sequelize");
const { User } = require("../models");
const bcrypt = require('bcrypt');
/*
const createUser = async (userOptions) => {
  try {
    const newUser = await User.create(userOptions);
    return newUser;
  } catch (error) {
    console.error("Error al crear usuario", error)
    throw error;
  }

};
*/

//crear usuario utilizando bcrypt.hask para realizar hash de la contraseña y no guardarlo como texto plano
const createUser = async (userOptions) => {
  try {
    // Hashear la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(userOptions.password, 10);
    userOptions.password = hashedPassword;
    

    const newUser = await User.create(userOptions);
    return newUser;
  } catch (error) {
    console.error("Error al crear usuario", error);
    throw error;
  }
};
//fin create user con hash



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

`/*
const validateUser = async (nombre, password) => {
  try {
    const user = await User.findOne({
      where: {
        nombre: nombre,
        password: password,
      },
    });

    console.log("User from DB:", user);
    /*
        if (user.length !== 0) {
          return user;
        } else {
          return false;
        }
        */
    if (!user) {
      return false;
    } else {
      return user;
    }
  } catch (error) {
    console.error("Error when validating User", error);
    return false;
  }
};
*/`
const validateUser = async (nombre, password) => {
  try {
    const user = await User.findOne({
      where: {
        nombre: nombre,
        //quité de aquí password verifico existencia de user y compara pass con hash
      },
    });

    if (!user) {
      return false;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
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