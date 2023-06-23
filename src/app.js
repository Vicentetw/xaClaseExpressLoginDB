const express = require('express');
const bodyParser = require('body-parser');
const { logging } = require('./middleware');
const { userRouter, authRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');
const { userService } = require('./services');
const authentication = require('./middleware/authentication')

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(logging);
app.use('/user', userRouter);
//app.use(userRouter);
app.use('/login', authRouter);
// Ruta para manejar la solicitud POST a /user
userRouter.post('/', async (req, res) => {
  try {
    const user = req.body;
    const createdUser = await userService.createUser(user);
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
});

(async () => {
  try {
    await initializeDB();
    app.listen(PORT, () => {
      console.log(`Hola Vicente, estoy escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
})();