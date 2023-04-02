// Beneficios del modo estricto:
// Convierte errores de JS en excepciones
// Evita sintaxis usadas en versiones anteriores de ES6
// Mejora optimización de errores y el tiempo de ejecución

// El modo estricto es una instrucción para el intérprete y se lo puede usar de dos formas:

// 1) Colocar al principio del documento
"use strict";
// Esto hará que se pueda utilizar en el scope global.

// 2) Colocar "use strict" como primera instrucción dentro de una función


// El modo estricto impedirá que defina una variable que no esté declarada (sí o sí debo poner var, let, const)
// El modo estricto mostrará un error si intento sobrescribir un atributo que es writeable: false;

const obj = {};
Object.defineProperty(obj, "nombre", {value: "Pedro", writeable: false});
console.log(obj.nombre);
// Si yo hiciera obj.nombre = "Juan", vería un mensaje de error
obj.nombre = "juan"; // veré un mensaje de error

// El modo estricto impide que se agreguen atributos a un objeto que tenga preventExtensions()

Object.preventExtensions(obj);
obj.nuevoAtributo = "Juan"; // Mostrará un error

// El modo estricto impide que le agregue propiedades a un string

// El modo estricto impide que una función tenga dos parámetros idénticos

// EL OPERADOR DELETE PERMITE BORRAR EL ATRIBUTO DE UN OBJETO
// El modo estricto impide que yo le haga delete a una variable o a una función

// El modo estricto impide que use palabras reservadas como nombre de una variable