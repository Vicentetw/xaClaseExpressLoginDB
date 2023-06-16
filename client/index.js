
const axios = require("axios");
const url = require("url");

async function makeRequest() {
let payload = { name: "John", email: "john@santex.com"};

// Método PUT
// const response = await axios.put("http://localhost:8080/user/1234",payload)
const response = await axios.delete("http://localhost:8080/user/1234",payload)
console.log("Datos del server: ", response.data);
};

makeRequest();


/*metodo post*/
/* 
const axios = require("axios");
const url = require("url");

async function makeRequest() {
let payload = { name: "John", email: "john@santex.com"};

const response = await axios.post("http://localhost:8080/user",payload)
console.log("Datos del server: ", response.data);
};

makeRequest();
*/
/*Fin post */

/*metodo get*/
/*const axios = require("axios");
const url = require("url");//para caracteres especiales @

async function makeRequest() {
let payload = { name: "John", email: "john@santex.com"};
const params = new url.URLSearchParams(payload); //para caracteres especiales @

    let config = {
    method: 'get',
    url: `http://localhost:8080/user?${params}`,
};
let response = await axios(config);
console.log("Datos del server: ", response.data);
};

makeRequest();
*/
