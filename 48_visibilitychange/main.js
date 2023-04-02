// visibilitychange es un evento que permite saber si el usuario se encuentra en la página o en otra pestaña

window.addEventListener("visibilitychange", event => {
    console.log(event.target.visibilityState); // también sería válido document.visibilityState
});