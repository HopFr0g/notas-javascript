// La consola es un objeto de javascript y es útil para detectar errores

// El objeto console tiene los siguientes métodos:

// MÉTODOS DE REGISTRO

// console.assert(afirmacion); da un mensaje de error en la consola si la afirmacion es falsa (NO ESTANDAR, NO RECOMENDADO)
console.assert(3 < 1);

// console.clear(); borra todo el contenido de la consola
console.clear();

// console.error(mensaje); da un mensaje de error en la consola
console.error("Programador el que lee");

// console.info(mensaje); emite un mensaje informativo
console.info("Mensaje informativo"); 

// console.log(mensaje); emite un mensaje de depuración
console.log("mensaje de depuración");

// console.table(array/objeto); toma como parámetro obligatorio: data, que debe ser un array o un objeto; y un parámetro adicional: columns; nos muestra una tabla en consola
console.table({desayuno:"tostada", almuerzo:"medallón", merienda:"fruta", cena:"pizza"});
console.table([1, 5, 4, 2])

// console.warn(mensaje); emite un mensaje de advertencia (NO SE USA TANTO)
console.warn("Para que esto funcione, el usuario debe dar click (eso fue un ejemplo)");

// console.dir(array); otra forma de mostrar arrays
console.dir([42, 44, 32]);

// MÉTODOS DE CONTEO

// console.count(); registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta
console.count("Etiqueta de ejemplo");
console.count("Etiqueta de ejemplo");
console.count("Etiqueta de ejemplo");
console.count();
console.count();

// console.countReset(); reinicia el contador console.count()
console.countReset();

// MÉTODOS DE AGRUPACIÓN

// console.group(); crea un nivel de grupo, los posteriores mensajes se mostrarán dentro de ese grupo. Como parámetro opcional se puede usar una etiqueta (string que le dé nombre al grupo)
console.group("Ejemplo");
console.log("esto está dentro del grupo");
console.log("esto también");

// console.groupEnd(); pone fin a un grupo, salir del grupo
console.groupEnd();
console.log("ya no estoy dentro del grupo");

// console.groupCollapsed(); crea un grupo al igual que .group() pero el grupo comenzará cerrado

// MÉTODOS DE TEMPORIZACIÓN

// console.time(); inicia un temporizador, opcionalmente se puede poner un parámetro con una etiqueta (una string para identificarlo)
console.time("Temporizador de ejemplo");

// console.timeLog(); indica cuánto tiempo pasó desde que empezamos a contar el tiempo con .time()
console.timeLog("Temporizador de ejemplo");

// útil para medir cuánto tiempo se ha tardado para ejecutar cierto bloque de código, o cuánto tiempo tardó el usuario en hacer algo

// console.timeEnd(); finaliza el temporizador que habíamos iniciado
console.timeEnd("Temporizador de ejemplo");

// DAR FORMATO AL TEXTO EN CONSOLA

// dentro de un método que muestre texto, como .log(), poner dos parámetros:
// 1) el primero es el texto en cuestión, pero comenzando con %c
// 2) el segundo parámetro es una string con estilos en línea de CSS
console.log("%cHola", "color: #f00; background: #fbb; padding: 8px; border: 1px solid #f00");