const { User } = require("../models");

const createUser = async (userOptions) => {
  try {
    const newUser = await User.create(userOptions);
    return newUser;
  } catch (error) {
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

module.exports = {
  createUser,
  deleteUser,
};