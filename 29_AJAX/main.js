// ESTE DOCUMENTO DEBE ESTAR EN LA CARPETA HTDOCS DEL SERVIDOR XAMPP PARA FUNCIONAR CORRECTAMENTE

// Las peticiones sincrónicas implican que la página se recargue cuando se obtenga una respuesta
// AJAX permite realizar peticiones asíncronas (en tiempo real) sin recargar la página

// Para que esto sea posible, debe descargarse un servidor (como xampp, wampp, etc)

// Una vez instalado XAMPP, se debe entrar al launcher y activar los servicios APACHE y MYSQL

// Dentro de la carpeta de instalación de XAMPP, se encuentra la carpeta "htdocs" o "www"
// Dentro del mismo launcher de XAMPP, se encuentra la opción "open application folder" para llegar a la carpeta
// Se puede acceder a los documentos de esa carpeta mediante http://localhost (o a 127.0.0.1)
// Borraremos todo lo que se encuentra en esa carpeta y crearemos una carpeta donde guardaremos nuestros códigos

// abrir xampp desde una terminal de gnu/linux: sudo /opt/lampp/manager-linux-x64.run

// El objeto XMLHttpRequest sirve para enviar peticiones GET y POST
let request = new XMLHttpRequest();
console.log(request);

// PETICIÓN PARA ABRIR UN ARCHIVO - Se debe usar el método .open() sobre un objeto del tipo XMLHttpRequest
// .open("MÉTODO HTTP: Puede ser GET o POST", "URL")
request.open("GET", "ejemplo.json");

// POSTERIORMENTE SE DEBE ENVIAR LA PETICIÓN - Con el método .send()
request.send();

// Las peticiones tienen un atributo "readyStateChange" el cual tomará el valor de 3 o 4 una vez que
// la petición se haya enviado correctamente.
// Para poder trabajar con el archivo .json que obtuvimos con nuestra petición, debemos crear un
// listener "readystatechange".

// Explicación de los 4 valores que puede tomar el "readyState":
// 1: La solicitud se creó correctamente
// 2: La solicitud se envió correctamente
// 3: Se está procesando esta petición
// 4: Todo listo. Se recibió una respuesta y el resultado ya se puede utilizar

// UNA VEZ QUE LA PETICIÓN LLEGÓ AL READY STATE 4, PODEMOS ACCEDER A LA RESPUESTA CON EL ATRIBUTO .response
request.addEventListener("readystatechange", ()=>{
    // también podríamos utilizar el atributo .status, que nos devuelve un código de respuesta:
    // 200 o 201: OK - La solicitud ha tenido éxito.
    // 403: Forbidden.
    // 404: El archivo no fue encontrado.
    // 503: Servicio no disponible.
    // Entre otros.
    if (request.readyState == 4 && request.status == 200)
        console.log(request.response);
});

// Una versión nueva y mejorada, que nos evita la validación de request.readyState == 4
// es utilizando el listener "load".
request.addEventListener("load", ()=>{
    if (request.status == 200)
        console.log(request.response);
});

// DIFENRENCIAS ENTRE PETICIONES GET Y PETICIONES POST
// GET: Peticiones que se pueden ver directamente en el URL
// POST: Peticiones que no se ven en el URL, sino que se envían a través del método HTTP POST

// POST Tiene muchos beneficios sobre GET, por ejemplo, sirve para enviar datos sensibles (contraseñas)

// ENVIAR UNA PETICIÓN POST:
// Sobre un XMLHttpRequest, se debe utilizar el método .open() que ya fue explicado.
// Pero luego, a la hora de utilizar el .send() se debe pasar, como parámetro, un json serializado (string)
// que contenga los datos que le debemos enviar al servidor para que nos devuelva la respuesta deseada.
let peticion = new XMLHttpRequest();
peticion.open("POST", "https://reqres.in/api/users");
// También se debe agregar la siguiente línea de código:
peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");
peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));
peticion.addEventListener("load", ()=>{
    if (peticion.status == 200 || peticion.status == 201)
        console.log(peticion.response);
});