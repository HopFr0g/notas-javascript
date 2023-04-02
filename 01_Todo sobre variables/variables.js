/// Variable: Espacio de memoria donde almaceno un dato
/// Scope: ámbito de validez, cada bloque de código donde se crean distintas variables



/// Declarar y definir variables:

// Una variable se puede declarar de 3 formas:
var ejemploVar = "ejemplo"; // Variable global. Funciona en todos los scopes.
let ejemploLet = "ejemplo"; // Variable local. Solo funciona en el scope actual.
const ejemploConst = "ejemplo"; // Constante. Sí o sí debe inicializarse cuando se declara.

// Una variable puede declararse sin definirse:
let numeroDocumento;

// Inicializar la variable es darle un primer valor:
numeroDocumento = 345230;



/// Algunos tipos de datos:

// String: cadena de texto, entre comillas simples o dobles
let string = "hola";

// Number: un numero
let number = 19;

// Boolean: numeros 0 y 1 (se identifican con true o false)
let boolean = false;

// Undefined:
let variableIndefinida;
alert(variableIndefinida); // Se da cuando la variable fue declarada pero nunca definida

// null:
let variableNula = null; // Decir que la variable no tendrá ningún valor. Estará vacía. Es una variable definida, donde definimos intencionalmente que no tenga valor.

// NaN:
let variableNan = 5 * "pepe"; // Not a Number.



/// Declarar e inicializar varias variables juntas:
let primerEjemplo, segundoEjemplo;
primerEjemplo = 1;
segundoEjemplo = 2;

let tercerEjemplo = 3, cuartoEjemplo = 4;



/// Hoisting: se verá después, diferencias entre el tiempo de crear un código y de ejecutar el mismo.