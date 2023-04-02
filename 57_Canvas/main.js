"use strict";

// Canvas: elemento html en el que podemos crear gráficos

// Seleccionar el elemento html canvas:
const canvas = document.getElementById("canvas");

// Crear un contexto en el cual podamos dibujar gráficos:
const ctx = canvas.getContext("2d"); // También se podría usar "3d"

// Método que se aplica al contexto para crear un rectángulo:
// .strokeRect(left, top, width, height);
// Para cambiar el estilo, se pueden usar los siguientes parámetros previamente:
ctx.lineWidth = "8";
ctx.strokeStyle = "#FF0000";
ctx.strokeRect(50, 20, 160, 80);

// El método fillRect es similar pero el rectángulo estará relleno:
// Para darle color, previamente se modifica el atributo fillStyle:
ctx.fillStyle = "#0000FF";
ctx.fillRect(0, 0, 30, 30);

// La siguiente combinación de métodos, primero define dos o más puntos (x,y) y luego crea una línea entre ellos:
ctx.lineTo(200, 110);
ctx.lineTo(230, 140);
ctx.lineTo(260, 110);
ctx.stroke();
// Para empezar una nueva línea que no sea una continuación de la anterior, usar estos métodos:
ctx.closePath();
ctx.beginPath();