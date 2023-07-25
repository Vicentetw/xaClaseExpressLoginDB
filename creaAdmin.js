const User = require("./src/models/users");

const createUserAdmin = async () => {
  try {
    // Verificar si ya existe un usuario admin en la base de datos
    const existingAdmin = await User.findAll({ where: { role: 'admin' } });

    // Si ya existe un usuario admin, no se crea otro
    if (existingAdmin.length > 0) {
      console.log('Ya existe un usuario admin en la base de datos.');
      return;
    }

    // Crear el usuario admin
    const admin = await User.create({
      id: 1,
      nombre: 'admin',
      apellido: 'Admin',
      email: 'admin2@example.com',
      password: 'admin',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log('Usuario admin creado exitosamente:', admin.toJSON());
  } catch (error) {
    console.error('Error al crear el usuario admin:', error);
  }
};

// Llamar a la función para crear el usuario admin
createUserAdmin();