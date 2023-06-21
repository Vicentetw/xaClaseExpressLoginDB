
//importo módulos y config inicial
const express = require('express');
const PORT = 8080;
const bodyParser = require("body-parser")
//Midware para evitar poner header en cada peticion GET
const loggingMdw = require('./middleware/logging')
const {logging} = require("./middleware")
const {userRouter} = require("./routes")


//configuro Express
const app = express();
    app.use(bodyParser.json());
    app.use(logging);
    app.use("/user", userRouter);

//inicio servidor
app.listen(PORT, () => {
    console.log(`hola vicente estoy escuchando en puerto: ${PORT}`);
});

