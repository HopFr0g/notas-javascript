"use strict";

// Cookies: datos que guarda la página en el navegador del usuario.

// Las cookies tienen el siguiente formato:
// clave=valor;domain;path;expires;size;httponly;secure;samesite;sameparty;priority
// Todo el contenido a continuación de "clave=valor" se llaman atributos y son opcionales

// Se puede crear una cookie agregando contenido a la string "document.cookie"

const calculateDate = daysFromToday => {
    let date = new Date();
    date.setTime(date.getTime() + daysFromToday * 1000 * 60 * 60 * 24);
    return date.toUTCString();
}

const createCookie = (name, value, expirationDate, path) => {
    document.cookie = `${name}=${value};expires=${expirationDate};path=${path}`;
}

// Ejemplo, cookie que expira el 15 de noviembre de 2021:
createCookie("language", "spanish", "Mon, 15 Nov 2021 12:00:00 GMT", "/");

// Ejemplo, cookie que expira 7 días después de haberla creado, usando función adicional para calcular esa fecha:
createCookie("user", "hopfr0g", calculateDate(7), "/");
createCookie("rank", "vip", calculateDate(7), "/");
createCookie("banned", "false", calculateDate(7), "/");

// En caso de no definir la fecha de expiración, va a expirar cuando expire la sesión

// Puedo obtener las cookies accediendo a "document.cookie" solo veremos la clave=valor (no los atributos)
// Si hay varías, estarán separadas por ;
console.log(document.cookie);

// EJEMPLO PRÁCTICO: Obtener la string de cookies y separarlas todas en un objeto que almacene las claves:valor
const getCookies = () => {
    // Get string with all cookies:
    let cookiesString = document.cookie;
    // If there are not cookies, return an empty object:
    if (cookiesString == "")
        return {};
    // Generate an array whose elements are all key:value sets:
    let cookiesArray = cookiesString.split(";");
    // Add all key:value sets to an object:
    let cookies = {};
    for (let cookie of cookiesArray) {
        let tmp = cookie.split("=");
        let key = tmp[0].trim(); // .trim() is used to avoid blank spaces before the key name
        let value = tmp[1];
        cookies[key] = value;
    }
    return cookies;
}

console.log(getCookies());