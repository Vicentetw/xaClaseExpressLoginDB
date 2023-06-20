const {User} = require("../models");

const createUser = async (userOptions) => {
    try {
        const newUser = await User.create(userOptions);
        return newUser;
    }catch (error){
        throw error;
    }
};

module.exports = {
    createUser, 
};