console.log("hola vicente");

const http = require('http');

const server = http
.createServer((req, res) =>{
res.writeHead(200, {"Content-Type" : "text/html"});

console.log(`Req URL: ${req.url}`);
if (req.url === "/hello"){
    res.write ("<h1>Bienvenidos a mi sitio web hello !</h1>");
    res.write ("<h2>Este es nuestro servidor!</h2>");
} else{
    res.write ("<h1>Hello word, Bienvenidos a mi sitio web</h1>");
}

res.end();
})
.listen(8080);
//cerrar servidor
//server.close(); 