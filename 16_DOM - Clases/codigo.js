const titulo = document.querySelector(".titulo");

// una vez que selecciono un HTML Object, puedo acceder a la propiedad classList que, a su vez, tiene los siguientes métodos:

// con classList.add() puedo agregar una clase más a ese elemento:
titulo.classList.add("otra-clase");

// con classList.remove() remuevo una clase
titulo.classList.remove("otra-clase");

// con classList.item(numero) obtengo las clases de ese objeto, el parámetro "numero" indica la posición de la clase, empezando a contar desde cero
console.log(titulo.classList.item(0));

// classList.contains("clase") devuelve un bool indicando si el elemento tiene la "clase" pasada como parámetro
console.log(titulo.classList.contains("titulo"));

// con classList.toggle("clase") si el elemento no tiene la "clase", entonces será agregada y devolverá false; si el elemento ya tenía esa "clase", entonces será removida y devolverá true
// como segundo parámetro puedo ingresar un bool, si el valor es "true", se pondrá la clase en caso de no tenerla, o no se eliminará en caso de tenerla

// con classList.replace("clase1", "clase2") reemplazo la "clase1" por el contenido de "clase2"
// si el elemento no tenía la "clase1" no se reemplazará nada y devolverá false, de lo contrario, devuelve true
console.log(titulo.classList.replace("titulo", "title"));