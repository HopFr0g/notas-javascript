// SessionStorage: almacena información de la página, se pierde al cerrar la misma
// LocalStorage: almacena información de la página, no se pierde al cerrar la misma ya que se almacena localmente

"use strict";

// Se puede acceder al contenido guardado localmente desde Inspeccionar Elemento > Application > Local Storage, desde el navegador web

// Con .setItem("clave", "valor") definimos un valor dentro del almacenamiento local
localStorage.setItem("nombre", "Leonel");

// El objeto localStorage tiene un miembro "length" que indica la cantidad de claves guardadas en el almacenamiento local

console.log(localStorage);

// Con .getItem("clave") obtenemos el valor asociado a una clave dentro del almacenamiento local
console.log(localStorage.getItem("nombre"));

// Puedo utilizar el método .removeItem("clave") para borrar una clave y su valor asociado

// sessionStorage tiene un funcionamiento similar, con la diferencia ya explicada
sessionStorage.setItem("mascotas", ["Lulú", "Titina", "Manuel"]);
console.log(sessionStorage);
console.log(sessionStorage.getItem("mascotas"));