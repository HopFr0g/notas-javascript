// NOTA:"self" es similar a this y suele utilizarse en service workers.

// Evento que se ejecuta cuando el service worker es instalado
self.addEventListener("install", event => {
    console.log("Instalando service worker...");
});

// Evento que verifica que el service worker se haya activado:
self.addEventListener("activate", event => {
    console.log("El service worker está activo.");
})

// También está disponible el evento "error" en caso de error al instalar/activar serviceworker

// EVENTO FETCH: ACCIONES QUE PODEMOS EJECUTAR CADA VEZ QUE EL CLIENTE ENVÍE PETICIONES A ALGÚN SERVIDOR
self.addEventListener("fetch", event => {
    console.log("El service worker ha interceptado una petición");
});

// El evento "message" recibe mensajes enviados con .postMessage desde el archivo js principal
self.addEventListener("message", event => {
    console.log("Se ha recibido el siguiente mensaje:");
    console.log(event.data);
});