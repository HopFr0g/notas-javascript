// Función: bloque de código reutilible al que se le asigna un identificador (nombre) y parámetros de entrada
// Las funciones se declaran usando la palabra reservada "function"

function saludar() {
	let respuesta = prompt("¿Cómo estuvo su día?");
	respuesta == "bien" ? alert("Me alegro mucho.") : alert("Qué pena.");
}

saludar(); // así se invoca a la función, dentro de los paréntesis van los parámetros, aunque esta función no tiene ninguno

// también se pueden utilizar funciones para definir una variable:

let despedir = function() {
	let respuesta = prompt("Ingrese su nombre.");
	alert("Adios, " + respuesta);
}

despedir(); // la funcion se invoca de la misma manera

// ejemplo de una función que recibe dos parámetros y que devuelve una respuesta por medio de la centencia "return"

function sumar(primerNumero, segundoNumero = 0 /* al igual que en C++, puedo poner parámetros por defecto */) {
	return primerNumero + segundoNumero;
}

document.write("3 + 5 = " + sumar(3, 5));

document.write("<br>");

// Funciones flecha: es otra forma de declarar las funciones; solo cambia la sintaxis, el funcionamiento es el mismo

const multiplicar = (primerNumero, segundoNumero) => {
	return primerNumero * segundoNumero;
}

document.write("2 * 3 = " + multiplicar(2, 3));

document.write("<br>");

// PRINCIPALES BENEFICIOS DE LAS FUNCIONES FLECHA:
// Si solo hay un parámetro, no hace falta poner los paréntesis (sí se deben poner en los demás casos, es decir, ningún parametro o muchos parámetros)
// Si el bloque de código ocupa una sola línea, tampoco hace falta poner las llaves!
// Cuando el código ocupa una sola línea y no se usan llaves, el return es automático! No hace falta escribir "return"

const duplicar = numero => numero * 2;

document.write("El doble de 3 es: " + duplicar(3));