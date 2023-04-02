// matchMedia: API de JS que permite trabajar con responsive design

// Se debe crear un objeto mq/mql (media query) a través del constructor matchMedia("media query")
// "media query" son condiciones como, por ejemplo, el ancho máximo o mínimo de la pantalla (css)
const mq = matchMedia("(max-width: 500px)");

// Funcionalidad: el objeto mq tiene un atributo "matches" que toma un valor booleano
// Cuando se cumpla la condición dada (en este caso, que el ancho de pantalla sea menor que 500px)
// el atributo "matches" será true, de lo contrario, será false.

// El objeto mq también tiene un evento "change" que ocurre cada vez que cambia el valor de "matches"
mq.addEventListener("change", () => {
    console.log("El ancho es menor a 500px: ", mq.matches);
});

// ESTO SE UTILIZA PARA CAMBIAR CLASES A LOS ELEMENTOS
// NO SE DEBE USAR PARA DAR ESTILOS, ESO SE HACE CON CSS