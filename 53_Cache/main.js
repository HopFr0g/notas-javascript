"use strict";

// PARA QUE ESTO FUNCIONA, EJECUTARLO DESDE UN SERVIDOR (XAMPP)

// Cache: almacena recursos en la pc para no tener que descargarlos cada vez que se accede a la página

// En el objeto caches, acceder al método .opens("nombre del almacenamiento en cache")
// Ese método devuelve una promesa que resuelve en el objeto cache, por lo que se debe usar .then()

caches.open("static-files").then(cache => {
    // Este objeto cache tiene los siguientes métodos:
    // .add("url asociado al archivo que queremos guardar")
    // también se acepta .addAll(["archivo1", "archivo2", "archivo3"])
    cache.add("index.html");
    
    // .match("nombre del archivo") en caso de encontrar el archivo, devuelve una promesa que resuelve en un objeto con información de dicho archivo
    // también se acepta .matchAll(["nombre1", "nombre2", "nombre3"])
    
    // Para modificar un archivo se puede utilizar .put(request, response)
    fetch("index.html").then(res => {
        cache.put("index.html", res);
    });
    
    // .delete("archivo") elimina el archivo almacenado en cache
    cache.delete("index.html");
    
    
});