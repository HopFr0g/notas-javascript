// Axios: es una biblioteca con una función similar a XMLHttpRequest y Fetch, aunque más optimizado

// Recomendación:
// Utilizar Axios en aplicaciones que se dedicarán exclusivamente a hacer peticiones
// Utilizar Fetch en aplicaciones que tendrán otro uso, y solo realizarán algunas peticiones

// Esta biblioteca se descarga desde https://github.com/axios/axios

// Las bibliotecas son <script> que se insertan en el documento HTML, siempre deben ir antes del <script> con nuestro código donde vamos a usar esa biblioteca
// Las bibliotecas de uso fundamental se insertan en la sección <head>

// Las request se hacen con axios("Path o URL") y devuelve una promesa pero, a diferencia de fetch,
// no está encapsulada, por lo que no es necesario usar el método .json() y se puede usar
// directamente .then(res=>{})
axios("https://reqres.in/api/users/2").then(res=>console.log(res));

// Para forzar una petición get, utilizar el método .get()
axios.get("https://reqres.in/api/users/2").then(res=>console.log(res));

// En caso de utilizar el método post, se puede agregar un segundo parámetro con un json que contenga la información que se debe enviar al servidor:
axios.post("https://reqres.in/api/users", {"nombre": "Juan", "Especie": "Caballo"}) // NO ES NECESARIO SERIALIZAR EL JSON CUANDO SE USA AXIOS
     .then(res => console.log(res.request.response));

// También se puede utilizar axios("url", {OBJETO Especificando el método y la data a enviar}):
axios("https://reqres.in/api/users", {
    method: "post",
    data: {"nombre": "Juan", "Especie": "Caballo"}
}).then(res => console.log(res.request.response));