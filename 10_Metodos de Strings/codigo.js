// ACLARACIONES ANTES DE EMPEZAR.

// Los strings también son objetos y, definir una cadena de texto de esta forma:
let cadena1 = "hola";
// Es lo mismo que definirla de esta forma:
let cadena2 = new String("hola");

// Se puede mostrar el caracter que ocupa una posición específica en la cadena, usando corchetes con su [índice] por ejemplo:
let cadena3 = "pollo frito";
document.write(cadena3[4] + "<br>"); // mostrará el caracter "o" ya que está en la posición [4] de "pollo frito"

// Puedo ver la longitud de una string con la propiedad (no es un método) .length
let cadena4 = "Lionel Andrés Messi";
let longitud = cadena4.length; // "Lionel Andrés Messi" tiene 19 caracteres de longitud
document.write(longitud + "<br>");

// MÉTODOS DE STRINGS

let cadenaPrueba = "cadena de prueba";
let resultado;
document.write("<b>Cadena original:</b> " + cadenaPrueba + "<br>");

// .concat(cadenaTexto) agrega, al final de la cadena original, el contenido de la(s) cadena(s) de texto ingresada(s) como parámetro(s).
resultado = cadenaPrueba.concat(" saludos"); // el resultado será "cadena de prueba saludos"
document.write(resultado + "<br>");

// .startsWith(cadenaTexto) devuelve true si nuestro string comienza con los caracteres de la cadenaTexto ingresada como parámetro
resultado = cadenaPrueba.startsWith("cadena de p"); // devolverá true
document.write(resultado + "<br>");

// .endsWith(cadenaTexto) devuelve true si nuestro string termina con los caracteres de la cadenaTexto ingresada como parámetro
resultado = cadenaPrueba.endsWith("gato"); // devolverá false
document.write(resultado + "<br>");

// .includes(cadenaTexto) devuelve true si nuestro string incluye, en su interior, los caracteres ingresados como parámetro
resultado = cadenaPrueba.includes("de"); // devolverá true
document.write(resultado + "<br>");

// .indexOf(cadenaTexto) busca los caracteres de la cadenaTexto ingresada como parámetro, y nos devuelve la posición que ocupan
// esos caracteres en nuestra cadena original (devuelve posición del primer caracter). Si no los encuentra, devuelve -1
// en caso de que los caracteres que estamos buscando se encuentren varias veces, DEVOLVERÁ EL PRIMER MATCH DE TODOS
resultado = cadenaPrueba.indexOf("prueba"); // devolverá 10, pues es la posición de la primera letra de "prueba" en la string "cadena de prueba"
document.write(resultado + "<br>");

// .lastIndexOf(cadenaTexto) es igual que el anterior pero, en caso de encontrar varios resultados, devuelve el ÚLTIMO MATCH
resultado = cadenaPrueba.lastIndexOf("a"); // devolverá 15, pues es la última "a" encontrada en "cadena de prueba"
document.write(resultado + "<br>");

// .padStart(dimension, cadena) hará que nuestro string comience con la "cadena" ingresada como parámetro,
// todas las veces que sea necesario, para que la cadena tenga la "dimension" ingresada como parámetro
resultado = cadenaPrueba.padStart(30, "."); // el resultado será "..............cadena de prueba"
document.write(resultado + "<br>");

// .padEnd(dimension, cadena) hará lo mismo que el método anterior, pero agrega los caracteres al final
resultado = cadenaPrueba.padEnd(30, "."); // el resultado será "cadena de prueba.............."
document.write(resultado + "<br>");

// .repeat(cantidadVeces) repetirá el contenido de nuestra string la cantidad de veces que indiquemos en el parámetro
resultado = cadenaPrueba.repeat(3); // devolverá "cadena de pruebacadena de pruebacadena de prueba"
document.write(resultado + "<br>");

// .split(caracter) divide la cadena cada vez que encuentra el caracter especificado, y devuelve un array con todos los fragmentos
// el caracter usado para dividir la cadena, será eliminado. Ej: si dividimos en cada " ", no habrá ningún espacio en el resultado
resultado = cadenaPrueba.split(" "); // devolverá el array ["cadena", "de", "prueba"]
document.write(resultado + "<br>");

// .substring(posicionInicial, posicionFinal) devuelve una nueva string que va desde la posicionInicial hasta la posicionFinal del string original.
// Incluye el caracter que está exactamente en la posicionInicial, pero termina un caracter antes de la posicionFinal
resultado = cadenaPrueba.substring(0, 6); // devuelve "cadena"
document.write(resultado + "<br>");

// .toLowerCase() convierte la cadena a minúsculas
// .toUpperCase() convierte la cadena a mayúsculas
resultado = cadenaPrueba.toLowerCase(); // devuelve "cadena de prueba"
document.write(resultado + "<br>");
resultado = cadenaPrueba.toUpperCase(); // devuelve "CADENA DE PRUEBA"
document.write(resultado + "<br>");

// .toString() es un método que se puede aplicar a NÚMEROS para convertirlos en STRINGS

// CON EL MÉTODO .trim() ELIMINAMOS LOS ESPACIOS QUE UNA CADENA TIENE AL COMIENZO Y AL FINAL

// .trimEnd() solo elimina los espacios del final, .trimStart() solo elimina los espacios del comienzo.