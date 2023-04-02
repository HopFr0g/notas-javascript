// El objeto "history" es un miembro de "window" que tiene los siguientes métodos y atributos:

// history.back() permite retroceder a la página anterior de nuestro historial
// history.forward() permite avanzar a la página siguiente de nuestro historial

// length nos indica el tamaño del historial

// history.go(número) cambia de página según nuestro historial, de la siguiente forma:
// -1 es la página anterior
// 0 es la página actual, solo recarga la página
// 1 es la página siguiente

// podemos consultar el url de la página en que nos encontramos con window.location.href
console.log(location.href);

// Podemos modificar la URL y conservar la info de la página con
// history.pushState({data}, "title", "?url")
// Primer parámetro: {data} es un objeto que se llamará "estado"
// Tercer parámetro: se agregará, al final del url, el signo ? seguido de lo que escribimos

// con history.state veremos el "estado", que es lo que agregamos en {data} con el .pushState()

// Realizar un .pushState() genera un evento "popstate" que detectará un cambio de estado
window.addEventListener("popstate", (event) => {
    console.log(event.state);
});

// .replaceState() es similar a .pushState(), modifica la URL pero no conserva la info de la página

/* .pushState() agrega ?url al final, cada url representa un nuevo estado
    cuando quiera volver hacia atrás en el navegador, volveré la ?url anterior
   .replaceState() agrega ?url al final y, cuando quiera volver hacia atrás,
    volveré a la página anterior, no debo pasar por todos los estados que hubo.
*/