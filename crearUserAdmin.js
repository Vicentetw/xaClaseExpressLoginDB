const  User  = require("./src/models/users");

const createUserAdmin = async () => {
    try {
      // Verificar si ya existe un usuario admin en la base de datos
      const existingAdmin = await User.findAll({ role: 'admin' });
  
      // Si ya existe un usuario admin, no se crea otro
      if (existingAdmin) {
        console.log('Ya existe un usuario admin en la base de datos.');
        return;
      }
  
      // Crear el usuario admin
      const admin = new User({
        id: 1,
        nombre: 'admin',
        apellido: 'Admin',
        email: 'admin2@example.com',
        password: 'admin',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
  
      // Guardar el usuario admin en la base de datos
      await admin.save();
  
      console.log('Usuario admin creado exitosamente.');
    } catch (error) {
      console.error('Error al crear el usuario admin:', error);
    }
  };
  
  // Llamar a la función para crear el usuario admin
  createUserAdmin();
  