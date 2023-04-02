// Aclaraciones antes de comenzar:
// Si me refiero al índice "-1" me estoy refiriendo al último elemento de un array

// METODOS DE ARRAYS

let array = ["Lulu", "Titina", "Fufa"];
let resultado;
document.write("<b>Array original:</b> [" + array + "]<br><br>");

// METODOS TRANSFORMADORES (Transforman el array en uno nuevo):

// .pop() elimina el último elemento del array y lo devuelve
resultado = array.pop();
document.write("<b>Elemento eliminado con .pop():</b> " + resultado + "<br>");
document.write("<b>Array luego del .pop():</b> [" + array + "]<br><br>");

// .shift() elimina el primer elemento del array y lo devuelve
resultado = array.shift();
document.write("<b>Elemento eliminado con .shift():</b> " + resultado + "<br>");
document.write("<b>Array luego del .shift():</b> [" + array + "]<br><br>");

// .push(elemento) agrega un elemento al final del array y devuelve la cantidad de elementos (length) que tendrá el array ahora
// puedo ingresar varios parámetros (separados por comas) si quiero agregar más de un elemento
resultado = array.push("Fufa");
document.write('<b>Elemento "Fufa" agregado. Ahora el array tiene dimensión: </b> ' + resultado + '<br>');
document.write('<b>Array luego del .push("Fufa"):</b> [' + array + ']<br><br>');

// .unshift(elemento) agrega un elemento al comienzo del array y devuelve el length que tendrá el array ahora
// también se pueden agregar más de un elemento
resultado = array.unshift("Lulu");
document.write('<b>Elemento "Lulu" agregado. Ahora el array tiene dimensión: </b> ' + resultado + '<br>');
document.write('<b>Array luego del .unshift("Lulu"):</b> [' + array + ']<br><br>');

// con .splice(indice, cantidadElementos) elimino elementos del array a partir del indice indicado
// si se omite el parámetro cantidadElementos, se eliminarán todos los elementos a partir de indice
// devuelve un array con los elementos eliminados
resultado = array.splice(1, 1);
document.write("<b>Se eliminó 1 elemento a partir del índice 1. Este es el sub-array eliminado:</b> [" + resultado + "]<br>");
document.write("<b>Array resultante luego del .splice(1, 1):</b> [" + array + "]<br><br>");
// también se pueden agregar más parámetros en .splice() con todos los elementos que quiero AGREGAR en el mismo lugar donde eliminé elementos
// o podría usar .splice() solo para agregar elementos, sin eliminar ninguno, por ejemplo:
array.splice(1, 0, "Titina");
document.write("<b>Array resultante luego del .splice(1, 0, Titina):</b> [" + array + "]<br><br>");

// con .reverse() se invierte el orden de los elementos del array
array.reverse();
document.write("<b>Array luego del .reverse():</b> [" + array + "]<br><br>");

// con .sort() se ordenan los elementos del array
// el criterio para ordenar los elementos, es convertir los elementos en strings y ordenarlos alfabéticamente
// también se puede usar, como parámetro, el nombre de una función .sort(funcion) que tenga un criterio distinto para ordenar
array.sort();
document.write("<b>Array ordenado con .sort():</b> [" + array + "]<br><br>");

// METODOS ACCESORES (no modifican el array original, devuelven uno nuevo):

array = ["desayuno", "almuerzo", "merienda", "cena"];
document.write("<b>Array original:</b> " + array + "<br><br>");

// El método .join() devuelve una cadena de texto con los elementos del array. Por defecto, los elementos se separan por comas
// Se puede pasar, como parámetro, la cadena de caracteres que se usará para separar cada elemento del array entre sí
respuesta = array.join(" - ");
document.write('<b>Cadena de texto obtenida con el método join(" - "):</b> ' + respuesta + '<br><br>');

// .slice(posicionInicial, posicionFinal) devuelve un sub-array con los elementos que van desde posicionInicial hasta posicionFinal
// el elemento de la posicionInicial también se incluye, pero el de la posicionFinal, no (finaliza uno antes)
respuesta = array.slice(0, 2);
document.write('<b>sub-array obtenida con el método slice("0, 2"):</b> ' + respuesta + '<br><br>');

// METODOS YA VISTOS EN CADENAS:
// .toString()
// .indexOf()
// .lastIndexOf()
// .includes()

// METODOS DE REPETICION:

array = [2, 9, 77, 8, 22, 49];
document.write("<b>Array original:</b> [" + array + "]<br><br>");

// .filter(callback)
// "callback" debe ser una función que reciba, como único parámetro, cada elemento de nuestro arreglo
// si la función contiene una condición que devuelve true o false, .filter() nos devolverá una array que tenga solo los elementos que cumplieron la condición

// En el siguiente ejemplo, se utiliza una función flecha donde el parámetro "numero" corresponde a cada elemento del array
// y la función devuelve "true" cuando numero ES PAR.
respuesta = array.filter(numero => numero % 2 == 0);
document.write("<b>Array con solo números pares, mediante .filter(numero => numero % 2 == 0):</b> [" + respuesta + "]<br><br>");
// Recordar el beneficio de las funciones flecha:
// 1) si el parámetro es uno solo, no es necesario ponerlo entre (paréntesis)
// 2) si es una sola línea de código, no es necesario ponerla entre {llaves}
// 3) si es una sola línea de código, no se debe poner la sentencia "return", porque el return es automático

// .forEach(callback) es similar a filter, también reciben una función callback como parámetro, pero no tienen la posibilidad
// de devolver un nuevo array con los elementos que cumplan cierta condición
// .forEach() simplemente ejecuta una función para cada elemento del array.

// Ejemplo: función que divide por 10 cada elemento de nuestro array y los escribe en la pantalla:
document.write("<b>A continuación verás cada elemento del array dividio por 10, hecho con forEach(): </b>")
array.forEach(numero => document.write(numero / 10 + ", "));