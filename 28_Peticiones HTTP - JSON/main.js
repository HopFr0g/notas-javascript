// Petición HTTP: nuestro navegador (cliente) envía peticiones a un servidor y recibe respuestas

// JSON: Javascript Object Notation, es un formato de datos estructurados.

// Objeto tradicional en Javascript:
let objeto = {
    atributo1: "valor",
    atributo2: "valor"
};

// Objeto JSON:
let json = {
    "atributo1": "valor",
    "atributo2": "valor"
}

// Un objeto de tipo JSON, tiene sus atributos entre "comillas"
// La razón de que los nombres de variables estén entre comillas, es evitar conflictos en las peticiones HTTP

// JSON Serializado: es una cadena de texto con formato texto
let jsonSerializado = '{"atributo1": "valor", "atributo2": "valor"}';

// MÉTRODO JSON.stringify(): convierte un dato de JS en una cadena de texto JSON serializada
let deserializado = {
    "animal": "gato",
    "color": "naranja"
}

let serializado = JSON.stringify(deserializado);

console.log(serializado);
console.log(typeof serializado);

// Cuando enviemos una estructura JSON a otro server, se la enviaremos serializada, es decir, en forma de string

// MÉTODO JSON.parse(): convierte un JSON serializado (o sea, una string) en un objeto JSON normal
let jsonDeserializado = JSON.parse(serializado);

console.log(jsonDeserializado);
console.log(typeof jsonDeserializado);