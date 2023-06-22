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
const deleteUser = async (id) => {
  try {
    // Llamar a la función deleteUser del proveedor
    await userProvider.deleteUser(id);
    return `Adiós usuario ${id}, se ha eliminado correctamente`;
  } catch (error) {
    throw error;
  }
};
 const queryUser = (name) =>{};
 
 module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  queryUser,
  getAll,
};