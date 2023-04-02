// El operador ternario funciona igual que en C++:
// [condicion] ? [bloque true] : [bloque false]

// Para realizar más de una acción dentro del operador ternario, se las encierra a todas entre
// paréntesis y se las separa por comas

let numero = prompt("Ingrese un número:");

numero % 2 == 0 ? alert("El número es par") : alert("El número es impar");

// Los parámetros por defecto funcionan igual que en C++:
const restar = (num1, num2 = 0) => {
    // Si el usuario solo ingresa un parámetro, el segundo parámetro tomará el valor 0 por default
    console.log(`${num1} - ${num2} = ` + (num1 - num2));
}

restar(4,5);
restar(4);

// Una forma de utilizar una cantidad indefinida de parámetros:
const sumar = (...num) => {
    // Puedo ingresar la cantidad de parámetros que yo quiera
    // "num" será un array que contenga todos los valores ingresados como parámetro
    
    // Se lo conoce como "rest" y es un parámetro que siempre debe ir al final
    
    let resultado = 0;
    for (let i = 0; i < num.length; ++i) {
        resultado += num[i];
    }
    console.log(resultado);
}

sumar(2,3,4,5,6,23,4,32,2,45,5);

// Operador spread: ...
// Sirve para separar todos los elementos de un arreglo
let mascotas = ["Lulú", "Titina", "Manuel"];
console.log(mascotas);
console.log(...mascotas);