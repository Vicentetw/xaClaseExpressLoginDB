const getUser = (id)=> {
    return {id, name:"John"};
};

const createUser = (user) =>{
    //llamada al provider con el objeto user
    return { ...user, id: Math.random()*100};
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
 mudule.exports = {getUser, createUser, updateUser, deleteUser};