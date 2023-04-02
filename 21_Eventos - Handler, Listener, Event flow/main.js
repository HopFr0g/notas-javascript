// Un evento es todo lo que ocurre en una página web


// EVENT HANDLER: Manejador de eventos, sirven para asociar código de javascript a cierto evento.

// PRIMERA FORMA: agregarlos como atributos dentro de una etiqueta HTML
// Son atributos que comienzan con "on" por ejemplo "onclick".
// Un ejemplo de event handler aplicado a un botón sería: <button onclick="alert('Hola')"></button>
// Ver archivo HTML para ejemplos.

// SEGUNDA FORMA: seleccionar el elemento HTML desde Javascript, acceder a su atributo .onclick y asignarle una función.
// Se puede acceder a cualquier otro atributo que represente un evento, onclick solo es un ejemplo.
const botonMagico = document.querySelector(".boton-magico");

botonMagico.onclick = () => {
	let colorRandom = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
	botonMagico.style.backgroundColor = colorRandom;
}

// LOS EVENT HANDLERS YA NO ESTÁN RECOMENDADOS:
// Habrá problemas si se aplica a un elemento que no acepta js o el usuario bloquea js en su navegador


// EVENT LISTENER: Forma recomendada de asociar código javascript a un evento

// Se debe seleccionar un objeto HTML y llamar a su método .addEventListener("nombre del evento", funcion callback)
// la "función callback" es el nombre de una función, y no puede ser una función flecha.
const botonAlerta = document.querySelector(".boton-alerta");

botonAlerta.addEventListener("click", alertar);

function alertar() {
	window.alert("Has sido alertado");
	// Así como agrego un event listener, puedo eliminarlo con .removeEventListener("nombre del evento", funcion callback):
	botonAlerta.removeEventListener("click", alertar);
}

// Si quiero utilizar una función flecha como callback, debo usarla, directamente, como parámetro del .addEventListener():
const botonConfirmacion = document.querySelector(".boton-confirmacion");

botonConfirmacion.addEventListener("click", () => window.confirm("¿Deseas confirmar?"))

// Desventaja: si uso una función flecha, no podré remover el evento con .removeEventListener()


// OBJETO EVENT:
// Cuando creo un event listener, la función callback puede contener UN PARÁMETRO
// ese parámetro puede tener cualquier nombre, aunque se sugiere llamarlo "event", "e" o "evt"
// el identificador que usemos como parámetro, hace referencia al OBJETO EVENT

// puedo acceder al atributo .target de un objeto evento, para obtener el elemento HTML que desencadenó ese evento


// EVENT FLOW:
// ¿Qué pasa si un evento aplica a 2 elementos, y un elemento está dentro del otro? ¿Cuál de los 2 elementos tendrá prioridad?
// Respuesta: el que tendrá más prioridad será el elemento más específico.

const divRojo = document.querySelector(".div-rojo");
const divAzul = document.querySelector(".div-azul");
const boton1 = document.querySelector(".boton-1");

divRojo.addEventListener("click", () => alert("Hiciste click en el div rojo"));
divAzul.addEventListener("click", () => alert("Hiciste click en el div azul"));
boton1.addEventListener("click", () => alert("Hiciste click en el botón"));

// ESTO SE PUEDE CAMBIAR:
// Se puede dar prioridad a un event listener en específico, si al método .addEventListener() le agrego, como 3er parámetro, true.
// Ejemplo: boton.addEventListener("click", () => alert("Hiciste click en el botón"), true);

// COMO DETENER LA PROPAGACIÓN - QUE EL EVENTO SE EJECUTE HASTA CIERTO ELEMENTO Y NO SIGA CON LOS DEMÁS:
// El event listener debe tener una función callback con un único parámetro (el parámetro event) y debo ejecutar el siguiente
// método en el objeto evento: event.stopPropagation();

const divAmarillo = document.querySelector(".div-amarillo");
const divVerde = document.querySelector(".div-verde");
const boton2 = document.querySelector(".boton-2");

divAmarillo.addEventListener("click", () => alert("Hiciste click en el div amarillo"));
divVerde.addEventListener("click", () => alert("Hiciste click en el div verde"));
boton2.addEventListener("click", (event) => {alert("Hiciste click en el botón"); event.stopPropagation()});