const express = require('express');
const bodyParser = require('body-parser');
const { logging } = require('./middleware');
const { userRouter, authRouter, libraryRouter, bookRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');
const { authMiddleware } = require('./middleware/authentication');

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(logging);
app.use('/login', authRouter);
app.use('/user', authMiddleware, userRouter);
/*app.use('/library', libraryRouter);
app.use('/book',  bookRouter);
*/
app.use('/library', authMiddleware, libraryRouter);
app.use('/book', authMiddleware, bookRouter);

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
