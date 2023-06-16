
const axios = require("axios");
const { config } = require("process");
const url = require("url");

// Agregar el interceptor antes de hacer la solicitud
axios.interceptors.request.use(
    (config) => {
        console.log("Antes de enviar el request", config);
        return config;
    },
        (error) => {
            return Promise.reject(error);
        });

async function makeRequest() {
    let payload = { name: "John", email: "john@santex.com" };

    // Método PUT
    // const response = await axios.put("http://localhost:8080/user/1234",payload)
    try {
        const response = await axios.delete("http://localhost:8080/user/1234", payload)
        console.log("Datos del server: ", response.data);
    } catch (error) {
        console.error("Se produjo un error al realizar  la solicitud:", error.message);
    }

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
