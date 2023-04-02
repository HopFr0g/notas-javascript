/// Operadores de asignación:
// Asigna el valor del operando de la izquierda
// basado en el valor del operando de la derecha
let numero;
numero = 10;
numero += 5; // equivale a "numero = numero + 5"
// También disponibles -=, *=, /=, %=, **=, etc...


numero++; // incrementa así "numero += 1" y devuelve el valor ANTERIOR
++numero; // incrementa así "numero += 1" y devuelve el valor LUEGO de incrementar
numero**2; // etc

/// Operadores aritméticos:
// Toman valores numéricos (ya sean literales o variables) como sus operandos
// y retornan un valor numérico único
numero = 2 + 3;

/// Operadores de comparación:
// Comparan dos valores y devuelven un valor booleano
let numero1 = "42", numero2 = 42;
console.log(numero1 == numero2); // igualdad (compara valores sin importar el tipo de datos, ejemplo: 23 es igual a "23")
console.log(numero1 != numero2); // desigualdad
console.log(numero1 === numero2); // igualdad estricta (a diferencia de la igualdad, aquí deben ser idénticos, del mismo tipo de datos)
console.log(numero1 !== numero2); // desigualdad estricta 
console.log(numero1 >= numero2); // mayor o igual
console.log(numero1 <= numero2); // menor o igual
console.log(numero1 > numero2); // mayor estricto
console.log(numero1 < numero2); // menor estricto

/// Operadores lógicos: || (or), && (and), ! (not)