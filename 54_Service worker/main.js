"use strict";

// EJECUTAR ESTE CÓDIGO DESDE UN SERVIDOR PARA QUE FUNCIONE (XAMPP)

// SE DEBE CONTAR CON UN CERTIFICADO SSL (HTTPS), NO FUNCIONA EN HTTP 

// Service worker: intercepta todas las peticiones entre el cliente y el servidor web

// Los service worker son archivos que permanecen en nuestro navegador y harán de intermediarios
// Ejemplo de uso: cuando una página está cerrada y sin embargo me llegan notificaciones de la misma.

// Condicional para comprobar si el navegador acepta serviceworkers:
if (navigator.serviceWorker) {
    // Método para registrar un serviceworker:
    navigator.serviceWorker.register("sw.js");
}

// Para verificar que el service worker esté cargado, se accede al atributo "ready" el cual devuelve una promesa
navigator.serviceWorker.ready.then(res => {
    console.log(res.active);
    // El objeto res.active tiene un atributo .postMessage("mensaje")
    // Se podrá interactuar con el mismo, dentro de sw.js, a través del evento "message"
    res.active.postMessage("Hola");
});

// También se puede crear un listener "message" en el serviceworker para actuar cuando se recibe un mensaje del mismo
navigator.serviceWorker.addEventListener("message", event => {
    console.log("Hemos recibido un mensaje del service worker:");
    console.log(event.data);
});