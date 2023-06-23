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
  } catch (err) {
    console.error("Error when validating User", err);
    return false;
  }
};

module.exports = {
  createUser,
  deleteUser,
  validateUser,
};