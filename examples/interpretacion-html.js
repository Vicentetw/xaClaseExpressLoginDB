

const express = require('express');
const PORT = 8080;
//const bodyParser = require("body-parser")

const app = express();
//app.use(bodyParser.json());


app.get("/", (req, res) =>{
res.setHeader("Content-Type" , "text/html")
res.send("<h1> Este es mi server 1</h1>");
});

app.listen(PORT, () =>{
    console.log( `hola vicente estoy escuchando en puerto: ${PORT}`);
});

app.get("/hello", (req , res) =>{
    res.setHeader("Content-Type" , "text/html");
    res.send("<h1> Respuesta de Hello</h1>");
})
app.get("/user1/:name1", (req , res) =>{
    const name1 = req.params.name1;
    res.setHeader("Content-Type" , "text/html");
    res.send(`<h1> Bienvenido , ${name1}</h1>`);
})

app.get("/user/:userId", (req , res) =>{
    const userId = req.params.userId;
    res.setHeader("Content-Type" , "Application/json");
    res.send({userId});
})