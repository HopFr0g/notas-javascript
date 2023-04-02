// window es el objeto de mayor jerarquía en javascript. Hace referencia a la ventana del navegador en sí.

// MÉTODOS Y PROPIEDADES DE WINDOW:

// .open("direccion") abre una nueva pestaña en la dirección (enlace o path de archivo) deseado.
// El método open devuelve la ventana que fue abierta, la cual puede almacenarse en una variable.
let nuevaVentana = window.open("https://www.google.com");

// en una ventana, el método .close() se utiliza para cerrar la misma:
nuevaVentana.close();

// en una ventana, la propiedad .closed indica si la ventana está cerrada (true):
nuevaVentana.closed ? document.write("Ventana cerrada") : document.write("Ventana abierta");

// .stop() detiene la carga de un sitio web
// window.stop();

// .alert() abre una ventana con un mensaje
// se puede usar como un método de window, o simplemente invocar a la función alert()
window.alert("Hola");

// .print() abre un asistente para imprimir la página
// se puede usar como un método de window, o simplemente invocar a la función print()
window.print();

// .prompt() abre un cuadro de diálogo que permite al usuario escribir una respuesta, y devuelve dicha respuesta
// se puede usar como un método de window, o simplemente invocar a la función prompt()
let respuestaPrompt = window.prompt("Nombre:");

// .confirm("pregunta") abre una ventana de confirmación y devuelve un bool de acuerdo a la respuesta del usuario
// se puede usar como un método de window, o simplemente invocar a la función confirm()
let respuestaConfirm = window.confirm("¿Quieres ser mi amigo?");
respuestaConfirm ? document.write("<br>Somos amigos :D") : document.write("<br>No somos amigos ):");

// .screen es un atributo que contiene la referencia al objeto screen (la pantalla)
// hay muchos métodos y atributos con información de la pantalla, por eso es muy útil el objeto screen. Se aprenderá después.
const objetoScreen = window.screen;
// Ejemplo de propiedades del objeto screen: .width y .height; .availWidth y .availHeight

// .screenLeft y .screenTop son propiedades para saber la distancia entre los bordes de la ventana y de la pantalla entera
document.write("<br>Distancia entre el borde izquierdo de la ventana y la izquierda de la pantalla: <b>" + window.screenLeft + "</b>");
document.write("<br>Distancia entre el borde superior de la ventana y la parte superior de la pantalla: <b>" + window.screenTop + "</b>");

// .scrollX es un atributo que informa la cantidad de píxeles que el usuario se ha desplazado horizontalmente
// .scrollY es un atributo que informa la cantidad de píxeles que el usuario se ha desplazado verticalmente
document.write("<br>Te encuentras <b>" + window.scrollX + "</b> px hacia la derecha de la página");
document.write("<br>Te encuentras <b>" + window.scrollY + "</b> px hacia abajo de la página");

// .scroll(x, y) es un método de window para desplazar el documento (hacer scroll) la cantidad especificada en X y en Y
window.scroll(0, 50);

// .resizeBy(x, y) .resizeTo(x, y) son métodos de window para redimensionar la ventana
// .moveBy(x, y) .moveTo(x, y) son métodos de window para mover la ventana

// .location.href son propiedades que contienen la dirección del documento actual (un dominio, path de archivo, etc)
// .location.pathname devuelve la ruta del archivo en que nos encontramos (en un URL, esta información aparece luego del dominio)
// .location.protocol devuelve el protocolo de la APLICACIÓN en donde nos encontramos (HTTP, HTTPS, FILE, etc)
document.write("<br>href: <b>" + window.location.href + "</b>");
document.write("<br>pathname: <b>" + window.location.pathname + "</b>");
document.write("<br>protocol: <b>" + window.location.protocol + "</b>");

// .location.assign("url") es un método utilizado para abrir una nueva página
if (window.confirm("¿Deseas ir a youtube?"))
	window.location.assign("https://www.youtube.com");