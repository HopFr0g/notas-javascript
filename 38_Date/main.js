// API (Application Programing Interface): es un conjunto de funciones que permite la comunicación entre dos softwares 

// Date() es el constructor de un objeto Date que nos permite trabajar con la fecha y hora (es un API)
// Los métodos de este objeto son .getDate(), .getDays(), .getMonth(), .getYear(), .getHours(), .getMinutes(), .getSeconds()

"use strict";

const fecha = new Date();

// El constructor Date() puede recibir, como parámetro, una fecha en Unix time.
// UNIX TIME: Cantidad de MILISEGUNDOS transcurridos desde el 1 DE ENERO DE 1970 a las 00:00.

// Si no se ingresa ningún parámetro, Date trabajará con la fecha que tiene el navegador web.

// .getDate() devuelve el número del día del mes actual (si es 20 de enero, devuelve 20)
console.log( fecha.getDate() );

// .getDay() devuelve un valor del 0 al 6 según el día de la semana. El día 0 es el DOMINGO
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log( dias[ fecha.getDay() ] );

// .getMonth() devuelve el número del mes, empezando a contar desde cero
console.log( fecha.getMonth() + 1 );

// .getYear() devuelve el año actual menos 1900
console.log( fecha.getYear() + 1900 );

// .getFullYear() devuelve el año actual
console.log( fecha.getFullYear() );

// .getHours() devuelve la hora del día actual
console.log( fecha.getHours() );

// .getMinutes() devuelve el minuto de la hora actual
console.log( fecha.getMinutes() );

// .getSeconds() devuelve los segundos del minuto actual
console.log( fecha.getSeconds() );

// Date.now() devuelve el valor numérico correspondiente a la hora actual
console.log( Date.now() );

// Date.parse("fecha") convierte una string que representa una fecha, en un número Unix Time
console.log( Date.parse("2021/10/16") )