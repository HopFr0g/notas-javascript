"use strict";

for (let i = 1; i <= document.querySelector(".texture-selector").children.length; ++i) {
    const texture = document.querySelector(`.texture-${i}`).addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("numero", i);
    });
}

const area = document.querySelector(".texture-area");

area.addEventListener("dragover", (event) => {
    event.preventDefault();
});

area.addEventListener("drop", (event) => {
    let numeroImagen = event.dataTransfer.getData("numero");
    let nombreImagen = `Texture${numeroImagen}.png`;
    definirTextura(".texture-area", nombreImagen);
});

const definirTextura = (claseContenedor, urlImagen) => {
    document.querySelector(claseContenedor).setAttribute("style", `background-image: url(${urlImagen});`);
}
