/*const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
}, {
  tableName: "User",
  hooks: {
    afterCreate: async (user, options) => {
      if (user.role === "admin") {
        // Aquí puedes agregar la lógica para configurar al usuario administrador por defecto
        // Por ejemplo, puedes asignarle un ID específico, un nombre y apellido específicos, etc.
        console.log("Se creó un usuario administrador:", user);
      }
    },
  },
});

(async () => {
  try {
    await sequelize.sync({ force: true }); // Este comando elimina y recrea la tabla en la base de datos
    const adminUser = await User.create({
      nombre: "Admin",
      apellido: "Admin",
      email: "admin@example.com",
      password: "admin",
      role: "admin",
    });
    console.log("Usuario administrador creado exitosamente:", adminUser);
    process.exit(0);
  } catch (error) {
    console.error("Error al crear el usuario administrador:", error);
    process.exit(1);
  }
})();*/


const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
}, {
    tableName: "User"
  });

module.exports = User;
