"use strict";

// This es una palabra reservada que se usa dentro de la definición de una clase u objeto
// This permite acceder a atributos (o declararlos) que pertenezcan al objeto en el que está contenido el this
// Cuando this no se encuentra contenido dentro de ningún objeto, entonces hará referencia al objeto window

// Función que utiliza this en su interior:
function saludar() {
    console.log("Hola, soy " + this.nombre)
}

// Un objeto que usa como método a la función saludar, por lo que el "this" utilizado
// Dentro de la función saludar, hará referencia a este objeto
const objeto = {
    nombre: "Leonel",
    saludar: saludar, // el miembro "saludar" de este objeto, es la función saludar() ya creada, esta es otra forma de declarar un método
}

objeto.saludar();

// Problema:
// Dentro de funciones flecha, this no hace referencia al objeto, sino que hace referencia al objeto que llamó al método de ese objeto
// Por eso NO SE RECOMIENDA utilizar funciones flecha a la hora de definir un método.