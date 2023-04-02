// Eventos del objeto arrastrado:
// - dragstart
// - drag
// - dragend

// Eventos de la zona:
// - dragenter: cuando un elemento arrastrado, entra en la zona
// - dragover: cuando un elemento arrastrado, se está moviendo dentro de la zona
// - drop: cuando un elemento arrastrado, se suelta dentro de la zona
// - dragleave: cuando un elemento arrastrado, es arrastrado hacia fuera de la zona (sale)

// para que "drop" funcione, el objeto debe tener una propiedad que indique que se puede soltar
// el evento "dragover" le confiere una propiedad al objeto que, por default, indica que NO se puede soltar.
// Para cambiarla y que funcione el drop, se debe realizar:
// .addEventListener("dragover", (event) => {event.preventDefault()})

// Al arrastrar un objeto, existe una transferencia de información entre el objeto que está
// siendo arrastrado, y el objeto contenedor dentro del cual se realiza el arrastre.
// Esta transferencia de información se da mediante el objeto dataTransfer y sus dos métodos:
// - setData(): permite agregar información sobre el objeto arrastrado 
// - getData()
// Se puede acceder al objeto dataTransfer cuando se trabaja con el evento "dragstart":
// .addEventListener("dragstart", (event) => { console.log(event.dataTransfer) })

// Ejemplo de lo visto hasta el momento (html):
const circulo = document.querySelector(".circle");
const tituloCirculo = document.querySelector(".circle-status")
circulo.addEventListener("dragstart", (event) => {
    tituloCirculo.innerHTML = "CÍRCULO: Comenzó a arrastrarlo";
    // se agregará información de la clase del objeto arrastrado:
    event.dataTransfer.setData("clase", event.target.className);
    // a continuación, se imprimirá la misma en consola:
    console.log(event.dataTransfer.getData("clase"));
});
circulo.addEventListener("drag", () => { tituloCirculo.innerHTML = "CÍRCULO: Lo está arrastrando ahora"; });
circulo.addEventListener("dragend", () => { tituloCirculo.innerHTML = "CÍRCULO: Terminó de arrastrarlo"; });

const rectangulo = document.querySelector(".rectangle");
const tituloRectangulo = document.querySelector(".rectangle-status")
rectangulo.addEventListener("dragenter", () => { tituloRectangulo.innerHTML = "RECTÁNGULO: El objeto arrastrado entró a la zona"; });
rectangulo.addEventListener("dragover", (event) => {
    event.preventDefault();
    tituloRectangulo.innerHTML = "RECTÁNGULO: El objeto arrastrado se está moviendo dentro de la zona";
});
rectangulo.addEventListener("drop", () => { tituloRectangulo.innerHTML = "RECTÁNGULO: El objeto arrastrado se soltó dentro de esta zona"; });
rectangulo.addEventListener("dragleave", () => { tituloRectangulo.innerHTML = "RECTÁNGULO: El objeto arrastrado salió de esta zona"; });

