"use strict";

// Intersection observer nos permite saber cuándo un elemento se ve en la pantalla y cuándo no

// El objeto observer devolverá un array, al cual llamaremos "entries"
// Ese array debe ser recibido, como parámetro, por el primer callback (verifyVisibility)
const verifyVisibility = entries => {
    // Nuestra entrada será el primer elemento del array entries
    const entry = entries[0];
    // El objeto entry tiene un atributo llamado "isIntersecting" con valor booleano
    // Que indicará, si el elemento que estamos observando, está en pantalla o no
    console.log("Se puede ver la caja 3: ", entry.isIntersecting);
}

// Objeto options:
const options = {
    // Con la propiedad rootMargin defino un margin
    // Éste hará que se considere que el objeto está intersectando antes o después
    rootMargin: "30px",
    // treshold define qué parte del cuerpo se debe ver, del 0 al 1
    // 0 es el principio y, 1, es el final
    treshold: 1
}

// Debemos crear un objeto observer con el constructor IntersectionObserver(callback, object)
const observer = new IntersectionObserver(verifyVisibility, options);

// Podemos utilizar el método .observe(elementoHtml) sobre un elemento HTML
// Este método ejecutará el código de la función verifyVisibility() solo cuando
// el elemento html comience a verse en pantalla, o deje de verse en pantalla
const caja3 = document.querySelector(".caja-3");
observer.observe(caja3);

/* --------------------------------------------------------------------------- */

// Nueva prueba, esta vez trabajando con múltiples cajas:
const veririficarVisibilidad = entradas => {
    for (let entrada of entradas)
        if (entrada.isIntersecting)
            console.log("Se está viendo la caja: ", entrada.target.textContent);
}

const opciones = {
    rootMargin: "0px"
}

const observador = new IntersectionObserver(veririficarVisibilidad, opciones);

const cajas = document.querySelectorAll(".caja");
for (let caja of cajas)
    observador.observe(caja);