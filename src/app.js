const express = require('express');
const bodyParser = require('body-parser');
const { logging } = require('./middleware');
const { userRouter, authRouter, libraryRouter, bookRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');
const { authMiddleware } = require('./middleware/authentication');
const cors=require('cors');
//const bcrypt = require('bcrypt');
require('dotenv').config();

const PORT = 8080;
const app = express();
// Middleware personalizado para configurar los encabezados CORS
const allowCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};


// Configurar CORS
app.use(cors());
app.use(allowCors);
app.use(bodyParser.json());
app.use(logging);
app.use('/login', authRouter);
app.use('/user', authMiddleware, userRouter);
/*app.use('/library', libraryRouter);
app.use('/book',  bookRouter);
*/
app.use('/library', authMiddleware, libraryRouter);
app.use('/book', authMiddleware, bookRouter);
/*
//código para hashear password de cuentas guardadas en texto plano
(async () => {
  try {
    await initializeDB();

    // Hashear la contraseña del usuario "admin"
    const adminPassword = 'admin'; // Contraseña actual en texto plano
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Actualizar la contraseña hasheada en la base de datos
    const { User } = require('./models');
    const adminUser = await User.findOne({ where: { nombre: 'user' } });
    if (adminUser) {
      adminUser.password = hashedPassword;
      await adminUser.save();
      console.log('Contraseña del usuario "user" actualizada con éxito.');
    } else {
      console.log('Usuario "user" no encontrado en la base de datos.');
    }

    app.listen(PORT, () => {
      console.log(`Hola Vicente, estoy escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
})();
*/
(async () => {
  try {
    await initializeDB();
    console.log("Conexión a la base de datos establecida");

    app.listen(PORT, () => {
      console.log(`Hola Vicente, estoy escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
})();
