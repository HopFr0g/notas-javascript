"use strict";

// Memoization:
// Cuando un valor tarda mucho en obtenerse, se lo guarda en un array
// Luego, si el valor buscado ya está asociado a un índice del array, se utiliza ése en lugar de calcularlo nuevamente

let cache = []; // array donde se guardarán valores en cada índice

// El memorizador recibe una función como parámetro:
const memoizer = func => {
    // Y devuelve una nueva función la cual recibe un parámetro, ese parámetro es un valor que estará asociado a un índice del array:
    return parameter => {
        const index = parameter.toString();
        // Si el array "cache" no tiene un valor guardado en ese índice, llama a la función "func" dada:
        if (cache[index] == undefined)
            cache[index] = func(parameter);
        // Finalmente, devolver el resultado asociado, ya sea que ya existía o se lo acabó de guardar:
        return cache[index];
    }
}

// Ejemplo - una función muy demandante:
const funcionMuyDemandante = num => {
    const a = 20;
    const b = 12;
    let result = 0;
    for (let i = 0; i < num; ++i)
        for (let j = 0; j < num; ++j)
            result += a * b;
    return result;
}

let inicio, fin;

console.log("FUNCIÓN SIN OPTIMIZAR (Tardará mucho aunque se la ejecute varias veces con el mismo valor):")

inicio = new Date();
console.log(funcionMuyDemandante(60000));
fin = new Date();
console.log(`La función muy demandante tardó ${(fin - inicio)/1000} segundos en ejecutarse para el número 60000`);

// IMPLEMENTACIÓN DEL MEMORIZADOR:
// Crear una variable que represente la función memoizer() donde el parámetro sea la función que queremos optimizar

console.log("FUNCIÓN OPTIMIZADA (Solo tarda mucho en la primera ejecución con cada valor):")

const funcionOptimizada = memoizer(funcionMuyDemandante);

inicio = new Date();
console.log(funcionOptimizada(60000));
fin = new Date();
console.log(`La función optimizada tardó ${(fin - inicio)/1000} segundos en ejecutarse para el número 60000`);

inicio = new Date();
console.log(funcionOptimizada(60000));
fin = new Date();
console.log(`La función optimizada tardó ${(fin - inicio)/1000} segundos en ejecutarse para el número 60000`);

inicio = new Date();
console.log(funcionOptimizada(60000));
fin = new Date();
console.log(`La función optimizada tardó ${(fin - inicio)/1000} segundos en ejecutarse para el número 60000`);