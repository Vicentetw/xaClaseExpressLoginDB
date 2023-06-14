

const express = require('express');
const PORT = 8080;
const bodyParser = require("body-parser")
//Midware para evitar poner header en cada peticion GET
const {loggingMdw, logging} = require("./middleware")
const {userRouter} = require("./routes")

const app = express();
    app.use(bodyParser.json());
    app.use(logging);
    app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`hola vicente estoy escuchando en puerto: ${PORT}`);
});

