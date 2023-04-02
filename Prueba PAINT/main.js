"use strict";

const canvas = document.querySelector(".canvas");
const corner = canvas.getBoundingClientRect(); // Da información de las coords. del canvas respecto a la ventana completa
const ctx = canvas.getContext("2d");

let isPainting, color, lineWidth, cornerX, cornerY;

// "mousedown": evento que ocurre cuando comienza a presionarse el mouse.
canvas.addEventListener("mousedown", event => {
    // event.clientX y event.clientY devuelven en qué punto está el mouse.
    cornerX = event.clientX - corner.left;
    cornerY = event.clientY - corner.top;
    
    isPainting = true;
    
    color = document.querySelector(".color-selector").value;
    lineWidth = document.querySelector(".width-selector").value;
});

// "mouseup": evento que ocurre cuando se suelta el mouse.
canvas.addEventListener("mouseup", event => {
    isPainting = false;
});

// "mousemove": evento que ocurre cuando se mueve el mouse.
canvas.addEventListener("mousemove", event => {
    if (isPainting)
        draw(cornerX, cornerY, color, lineWidth);
    cornerX = event.clientX - corner.left;
    cornerY = event.clientY - corner.top;
});

const draw = (cornerX, cornerY, color, lineWidth) => {
    ctx.beginPath();
    ctx.arc(cornerX, cornerY, lineWidth, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fill();
    ctx.stroke();
}