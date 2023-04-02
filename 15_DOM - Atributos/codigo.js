// Métodos para definir, obtener y eliminar valores de los atributos

// con document.querySelector() selecciono el objeto HTML. El parámetro debe ser un selector (como una .clase, #id, etc)
const input = document.querySelector(".entrada");

// una vez seleccionado el objeto, puedo acceder a los siguientes métodos

// .setAttribute("nombre atributo", "valor del atributo") para DEFINIRLE UN VALOR al atributo
input.setAttribute("type", "file");

// .getAttribute("nombre del atributo") para OBTENER SU VALOR ACTUAL
let atributoActual = input.getAttribute("type");
document.write("<br>Valor del atributo type en el primer input: " + atributoActual + "<br>");

// .removeAttribute("nombre del atributo") para eliminar el atributo
input.removeAttribute("type");



// Atributos globales

// Los atributos globales son los siguientes:

// contenteditable: indica si el elemento puede ser modificado por el usuario (bool)
// dir: indica la direccionalidad del texto ("ltr" left to right o "rtl" right to left)
// hidden: indica si el elemento aún no es, o ya no es, relevante (da igual el valor, si el atributo está definido, se esconderá sí o sí)
// tabindex: indica si el elemento puede obtener un focus de input (el valor de tabindex es un número, que define en qué orden se accederán los elementos con el tabulador)
// title: contiene un texto con información relacionada al elemento al que pertenece

// Ejemplos:

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contenteditable", "true"); // permitirá que el usuario edite el título
titulo.setAttribute("title", "verás esta descripción cuando apoyes el mouse sobre el título");



// Atributos de inputs

// Los siguientes son ATRIBUTOS DE LOS OBJETOS INPUT, ya NO SON MÉTODOS PARA ACCEDER A LOS MISMOS:

// className
// value
// type
// accept (en inputs de type="file", este atributo define el tipo de archivo aceptado)
// form (para aclarar que el input pertenece a cierta etiqueta <form>, el valor del atributo "form" debe ser el #id que tenga ese formulario)
// minlength
// placeholder (texto inicial, aparece antes de que el usuario escriba algo)
// required (no importa el valor que le dé a este atributo, si el atributo tiene un valor, el input sí o sí va a ser requerido)

// Ejemplos:

const nuevoInput = document.querySelector(".nueva-entrada");

document.write("<br>Valor del atributo className en el segundo input: " + input.className + "<br>");

document.write("<br>Valor del atributo value en el segundo input: " + nuevoInput.value + "<br>");

nuevoInput.placeholder = "texto incial";

nuevoInput.type = "file";

nuevoInput.accept = "image/png";



// Atributo style

// Al seleccionar un objeto, podemos acceder a su atributo style y, a su vez, a las siguientes propiedades:

// .style.color
// .style.backgroundColor
// etc

// Ejemplo:

titulo.style.color = "#f00";