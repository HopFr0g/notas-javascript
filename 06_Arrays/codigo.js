// Arrays: objetos donde se pueden almacenar múltiples datos, de distintos tipos

// Similar a las listas de Python, se deben agrupar datos entre [corchetes] y separarlos por comas.
let arreglo = ["Messi", 30, "PSG"];

// Se pueden mostrar todos los elementos del array, simplemente usando el nombre de su identificador
document.write("<h2>Arreglo completo:</h2>");
document.write(arreglo);

// O mostrar un elemento específico poniendo su [índice] entre corchetes, empezando a contar desde 0
document.write("<h2>Elemento 0 del arreglo (es el primero):</h2>");
document.write(arreglo[0]);

// Todas las posiciones posibles en un array están declaradas, aquellas que no definimos nosotros, serán "undefined"
document.write("<h2>Elemento 19 del arreglo (no fue definido):</h2>");
document.write(arreglo[19]);

// Arrays asociativos (objetos):
// Arreglos donde cada posición se expresa en forma clave: "valor", si quiero mostrar un dato de ese arreglo,
// en lugar de usar un índice que indique la posición del mismo, debo usar la ["clave"]
let objeto = {nombre: "Lionel Andrés Messi", dorsal: 30, equipo: "PSG"};

// A diferencia de las arrays, no puedo imprimir en pantalla el objeto completo
document.write("<h2>Esto sucede si intento mostrar el objeto completo:</h2>");
document.write(objeto);

// Sí o sí debo especificar una clave, para que me muestre el valor almacenado en la misma
document.write('<h2>Esto se muestra con objeto["nombre"]:</h2>');
document.write(objeto["nombre"]);
document.write('<h2>Esto se muestra con objeto["dorsal"]:</h2>');
document.write(objeto["dorsal"]);
document.write('<h2>Esto se muestra con objeto["equipo"]:</h2>');
document.write(objeto["equipo"]);