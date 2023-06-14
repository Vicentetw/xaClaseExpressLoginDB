

const express = require('express');
const PORT = 8080;
const bodyParser = require("body-parser")
//Midware para evitar poner header en cada peticion GET
const {loggingMdw, logging} = require("./middleware")

const app = express();
    app.use(bodyParser.json());
    app.use(logging);

app.listen(PORT, () => {
    console.log(`hola vicente estoy escuchando en puerto: ${PORT}`);
});

app.post("/user", (req, res) => {

    const { name, email, password } = req.body;
    res.send({ name, email, password: "****" });

});

app.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send({ userId });
})

app.get("/user", (req, res) => {
    const name = req.query.name;
    res.send({ name })
});

// cómo ponder midware en una peticion app.put("/user/:userId", myMdw,(req, res) => {
app.put("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
    res.send({ id: userId, name, email, password: "****" });
});

app.delete("/user/:userId", (req, res) => {
    const userId = req.params.userId;
    res.send(`Adios usuario ${userId}`);
});