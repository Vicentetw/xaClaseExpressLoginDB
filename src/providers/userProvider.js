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
  validateUser,
};