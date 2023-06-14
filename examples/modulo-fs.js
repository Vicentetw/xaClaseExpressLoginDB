const fs = require('fs');

fs.readFile("archivo1.txt", "utf8", (err, data) => {
    if (err) throw err;

    fs.writeFile("archivo2.txt", data, (err) => {
        if (err) throw err;
        console.log("El archivo ha sido guardado.");
    });
});
fs.mkdir('results', (err) => {
    if (err.code === 'EEXIST') {
        console.error("Error: La carpeta ya está creada");
    } else {
        throw err;
    }
    return;
});
