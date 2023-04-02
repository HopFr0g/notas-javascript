// El objeto Fetch es el reemplazo del objeto XMLHttpRequest aprendido en la sección AJAX
// Fetch está basado en promesas: SIEMPRE DEVUELVE UNA PROMESA ENCAPSULADA
// Sobre la respuesta del fetch, se usarán varios métodos para poder acceder a los datos encapsulados

// Crear una petición con fetch:
// fecth("URL", Objeto que describe al método HTTP - Por default es GET)
let peticionGet = fetch("https://reqres.in/api/unknown/2");

// La petición devuelve una promesa (es asíncrona, esperará el tiempo necesario para obtener la respuesta)
peticionGet.then(respuesta => console.log(respuesta));

// Y así, se obtuvo una promesa con el resultado de forma exitosa,
// sin embargo, no se pudo acceder a la respuesta del servidor porque estaba encapsulada.
// Esto se logra con los siguientes métodos: text(), json(), blob(), formData(), arrayBuffer().
// Esos métodos se usan sobre el resultado de la promesa.

// Él método .text() desencapsula el valor de la promesa en un texto:
peticion.then(respuesta => respuesta.text())
        .then(respuesta => console.log(respuesta));


// Petición POST (el segundo parámetro es un objeto con la información method, body y headers):
let peticionPost = fetch("https://reqres.in/api/users", {
                                                            method: "POST",
                                                            body: JSON.stringify({"name": "morpheus", "job": "leader"}),
                                                            headers: {"Content-type": "application/json"}
                                                        });
// El método .json() desencapsula el valor de la promesa en un objeto json:
peticionPost.then(respuesta => respuesta.json())
            .then(respuesta => console.log(respuesta));