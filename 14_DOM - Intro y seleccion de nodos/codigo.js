// DOM: Document Object Model. El documento de HTML



// Nodo: es cualquier etiqueta del cuerpo, como un párrado, el mismo body o incluso las etiquetas de una lista

	// Document (Value 9): el nodo document es el nodo raíz, a partir del cual derivan el resto de nodos

	// Element (Value 1): nodos definidos por etiquetas HTML

	// Text (Value 3): el texto dentro del nodo element, se considera un nuevo nodo hijo de tipo text

	// Attribute (Value 2): los atributos de las etiquetas definen nodos (en JavaScript no los veremos como nodos, sino como información asociada al nodo de tipo element)

	// Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

	// Los "value" especificados definen el tipo de nodo. En JS usaremos esos valores para saber de qué nodo se trata

	// EJEMPLO: En <h1>Hola</h1> el NODO ELEMENT es <h1> y el NODO TEXTO es "hola"



// SELECCION DE ELEMENTOS - Las siguientes funciones son métodos del objeto document:

// document.getElementByID(); selecciona un elemento por ID
let titulo = document.getElementById("titulo");
// En el documento HTML tengo un <h1 id="titulo"> y de esta forma lo selecciono.
// El contenido seleccionado es un objeto HTMLHeadingElement
document.write("<br><b>Título:</b><br>");
document.write(titulo);

// document.getElementsByTagName(); selecciona todos los elementos que tengan cierta etiqueta
let parrafos = document.getElementsByTagName("p");
// De esta forma selecciono todos los párrafos <p></p>
// El contenido seleccionado es un objeto HTMLCollection, ES UNA LISTA DE ELEMENTOS CON TODOS LOS P
// Puedo acceder a cada HTMLParagraphItem usando [indices]
document.write("<br><b>Colección de todos los párrafos p:</b><br>");
document.write(parrafos);
document.write("<br><b>Párrafo 0 de la colección de párrafos:</b><br>");
document.write(parrafos[0]);

// document.querySelector(); selecciona UN ELEMENTO usando selectores (como .clase, #id, etc. los aprendidos en CSS)
let contenedor = document.querySelector(".container");
// El contenido seleccionado es un HTMLDivElement
document.write("<br><b>Un elemento seleccionado con la clase .container:</b><br>");
document.write(contenedor);

// document.querySelectorAll(); selecciona TODOS LOS ELEMENTOS usando selectores
let contenedores = document.querySelectorAll(".container");
// El contenido seleccionado es un objeto NodeList (no es un array)
document.write("<br><b>Todos los elementos con la clase .container:</b><br>");
document.write(contenedores);