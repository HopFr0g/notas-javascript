/// Concatenacion: unir strings

let saludo = "Hola Pepe";
let pregunta = "¿Cómo estás?";

let fraseCompleta = saludo + ", " + pregunta + " - ";

document.write(fraseCompleta);

/// Forzar strings:

// Cuando una string participa en una suma, todos los tipos de datos primitivos se convierten en strings también
// Ejemplo, para concatenar 5 + 9 = 59, les sumo una cadena vacía ""

let concatenacionNumeros = "" + 5 + 9;

document.write(concatenacionNumeros);

/// Método .concat()

// Es un método que se aplica sobre una string
// string.concat(otra string o dato que pueda convertirse)

let ejemploCadena = "Martin";
let ejemploNumero1 = 555;
let ejemploNumero2 = 333;

let ejemploFinal = ejemploCadena.concat(ejemploNumero1);

document.write(" - " + ejemploFinal);

// ejemploFinal = ejemploNumero1.concat(ejemploNumero2); MAL: PORQUE ejemploNumero1 NO ES UNA STRING
ejemploFinal = "".concat("" + ejemploNumero1 + ejemploNumero2); // BIEN
document.write(" - " + ejemploFinal);


/// Otra forma:
let nombre = "Leonel";
let frase = `Soy ${nombre}, estoy aprendiendo JS`; // ALT + 96
document.write(" - " + frase);

// Los backticks (ALT + 96) también permiten utilizar ENTER dentro de una cadena
cadenaBackstick = `Hola,

mundo`;
document.write(" - " + cadenaBackstick); // En el resultado final, se ignoran los enter