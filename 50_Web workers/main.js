"use strict";

// ACCEDER A ESTO DESDE UN SERVIDOR LOCAL (XAMPP) PARA QUE FUNCIONE CORRECTAMENTE

// Web workers: cuando ya se está ejecutando una tarea, permiten que otras tareas se ejecuten en segundo plano

// Se debe crear una instancia de la clase Worker, llamando a su constructor
// El constructor recibe, como parámetro, el nombre del archivo
const worker = new Worker("worker.js");

// El código que se puede ejecutar en el archivo worker es limitado, ya que éste no depende de window
// Por lo tanto, habrá cierta información que tendremos que pasar desde el script principal hacia el worker
// Para ese pasaje de información se utiliza el método .postMessage(parámetro)
worker.postMessage("mensaje de ejemplo");

// Ver el archivo worker.js para conocer el event listener que se utiliza cuando se recibe un mensaje

// De esta forma, se podrá realizar dos tareas en simultáneo
// Por ejemplo, escribir en un input a la vez que se ejecuta un bucle infinito
document.querySelector(".bucle").addEventListener("click", () => {
    worker.postMessage("bucle"); // Le envía un mensaje al worker para que éste se encargue de ejecutar el bucle infinito
});

// Se utiliza el método .terminate() para terminar el worker