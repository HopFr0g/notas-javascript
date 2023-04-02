// Bucle while:
document.write("<h2>while:</h2>");

let numero = 1;

while (numero <= 5) {
	document.write(numero, "<br>");
	++numero;
}

// Con el bucle do while, la condición para repetir el bloque de código se pregunta al final en vez del principio:
document.write("<h2>do while:</h2>");

numero = 1;

do {
	document.write(numero, "<br>");
	++numero;
} while (numero <= 5)

// La palabra reservada "break" detiene un bucle y continúa con el resto del programa:
document.write("<h2>bucle while infinito, con un break cuando numero sea mayor a 5:</h2>");

numero = 1;

while (true) {
	document.write(numero, "<br>");
	++numero;

	if (numero > 5) {
		break;
	}
}

// La palabra reservada "continue" detiene la iteración actual del bucle, pero continúa con la siguiente:
document.write("<h2>bucle while que cuenta hasta 5, pero con un continue en el número 3:</h2>")

numero = 0;

while (numero < 5) {
	++numero;

	if (numero == 3) {
		continue;
	}

	document.write(numero, "<br>");
}

// el bucle for se compone de tres partes (declarar la variable; condicional; aumentar o decrementar la variable)
// es un bucle determinado, pues se sabe cuántas iteraciones hará, a diferencia de while o do while que son indeterminados.
document.write("<h2>for:</h2>");

for (let i = 1; i <= 5; ++i) {
	document.write(i, "<br>");
}

// también puedo declarar la variable antes del bucle y, en el bucle for, solo la inicializo (le doy un valor):
let i;

for (i = 0; i <= 5; ++i) {

}

// o puedo declarar e inicializar la variable antes del bucle y, dentro del bucle for, solo pongo el nombre de la misma:
let j = 0;

for (j; j <= 5; ++j) {

}

// bucles "for in" y "for of":
// Estos bucles recorren todos los elementos de un array

let arregloFrutas = ["Banana", "Pera", "Manzana", "Naranja"];

// El bucle for in tiene la forma (variable in nombreArray) y los valores que tomará la variable,
// serán los números con los índices de cada elemento del arreglo.
document.write("<h2>for in:</h2>");

for (fruta in arregloFrutas) {
	document.write(fruta, "<br>");
	// para usar los índices recorridos en este bucle, para mostrar cada elemento del arreglo, debería poner arregloFrutas[fruta]
}

// El bucle for of tiene la forma (variable of nombreArray) y los valores que tomará la variable,
// seran los valores de cada elemento almacenado en el arreglo.
document.write("<h2>for of:</h2>");

for (fruta of arregloFrutas) {
	document.write(fruta, "<br>")
}

// IN GUARDA LA POSICIÓN, OF GUARDA EL VALOR QUE SE ENCUENTRA EN ESA POSICIÓN

// Labels: se le puede dar un nombre a un bucle, y luego usar la sentencia "break" para detener el bucle con nombre especificado

// Ejemplo: tengo un array adentro de otro, cuando llego a cierto elemento del
// array del interior, quiero que también se deje de recorrer el primer array

document.write("<h2>Ejemplo break + label (se terminan de recorrer todos los arrays, cuando se encuentra cierto elemento en un array interior):</h2>")

let arreglo = ["Caballo", "Cerdo", ["Gato", "Perro", "Pez"], "Lobo", "Oveja"];

bucleExterior: /* eso es el label, así se le da nombre a un bucle */
for (indice in arreglo) {
	if (typeof arreglo[indice] == 'object' /* el operador typeof devuelve el tipo de dato que tiene una variable */) {
		// al detectar que un elemento es del tipo object, lo recorro como a un array más:
		for (elemento of arreglo[indice]) {
			// si detecto que un elemento es "Pez", dejo de recorrer TODO (incluyendo el array del exterior):
			if (elemento == "Pez") {
				break bucleExterior;
			}
			document.write(elemento + "<br>");
		}
		// Luego de recorrer un array del interior, termino esta iteracion del bucle para continuar con el siguiente elemento:
		continue;
	}
	// imprimo cada elemento del arreglo del exterior:
	document.write(arreglo[indice] + "<br>");
}