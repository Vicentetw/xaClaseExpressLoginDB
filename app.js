

const express = require('express');
const PORT = 8080;
 const app = express();
 
app.get('/', (req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.send('<h1>Este es nuestro Server</h1>');
});


app.listen(PORT, ()=>{
    console.log("hola vicente, esccuchando peticiones en el puerto: " +PORT);    
});
//cerrar servidor
//server.close(); 