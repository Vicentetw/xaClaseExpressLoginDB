const { User } = require("../models");
const userProvider = require("../providers/userProvider");

const getUser = (id)=> {
    return {id, name:"John"};
};

const getAll = async()=> {
  try{
    const users = await User.findAll();//Consulta totdos los usuario
    return users;
  }catch(error){
    console.error('Error al obtener los usuario', error);
    throw error;
  }
   
};

const createUser = async(user) =>{
    
  return await userProvider.createUser(user);
};

const updateUser = (id, user)=>{
    //llamada al provider con el objeto user
    return user;

}
 const deleteUser = (id)=>{
    //llamada al provider con el id
    return `Adios usuario ${id}`;
 };
 const queryUser = (name) =>{};
 
 /**module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    queryUser
  };*/
  module.exports.getUser = getUser;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.queryUser = queryUser;
module.exports.getAll = getAll;