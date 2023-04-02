// Seleccionamos un elemento y guardamos el objeto HTML obtenido dentro de una variable:
const contenedor = document.querySelector(".contenedor");

// Una vez seleccionado un objeto, podemos acceder a sus siguientes atributos referidos a childs:

// .fisrtChild para acceder al primer hijo de un contenedor
console.log(contenedor.firstChild);
// aclaración: dado que el texto también es un nodo si, luego de la etiqueta del contenedor, hay un ENTER o ESPACIO, el primer hijo será ese texto

// .lastChild para acceder el último hijo de un contenedor
console.log(contenedor.lastChild);

// con .firstElementChild seleccionamos el primer elemento hijo, y no se considerará el texto que pueda estar a continuación de la etiqueta del contenedor
console.log(contenedor.firstElementChild);

// con .lastElementChild selecciono el último elemento hijo
console.log(contenedor.lastElementChild);

// con .childNodes obtenemos un objeto nodeList con todos los hijos de ese contenedor
console.log(contenedor.childNodes);
console.log(contenedor.childNodes[3]); // de esta forma accedí a un elemento específico del nodeList, que es el <h4></h4>

// NOTA: Los nodeList se pueden recorrer con forEach
const hijos = contenedor.childNodes;
// Ejemplo de .forEach():
hijos.forEach(funcionFlecha = elemento => console.log(elemento));
// Expresión equivalente:
hijos.forEach(elemento => console.log(elemento));

// con .children obtengo un elemento HTMLCollection con las etiquetas HTML que son hijas del contenedor
console.log(contenedor.children);
console.log(contenedor.children[1]); // así accedo a un elemento específico del HTMLCollection

// NOTA: El HTMLCollection no se puede recorrer con un forEach pero si con un "for in" o "for of"
const hijosChildren = contenedor.children;
for (hijo of hijosChildren) {
	console.log(hijo);
}



// Métodos de childs:

// cuando se selecciona un objeto HTML, se pueden acceder a los siguientes métodos para tratar con sus hijos
// se omitirá el método .appendChild() para agregar un hijo, porque ya se explicó

// con .replaceChild(hijo_nuevo, hijo_antiguo); reemplazo un elemento hijo por uno nuevo
// se debe seleccionar el hijo_antiguo con un .querySelector() y se debe crear el hijo_nuevo con un .createElement()
const hijo_antiguo = document.querySelector(".titulo-antiguo");

const hijo_nuevo = document.createElement("H2");
hijo_nuevo.innerHTML = "Nuevo título";

contenedor.replaceChild(hijo_nuevo, hijo_antiguo);

// Eliminamos un hijo con .removeChild() el parámetro debe ser el objeto HTML que contenga ese elemento hijo
// Ejemplo: crearemos un hijo, lo agregaremos, y lo removeremos
const hijito = document.createElement("H1");
hijito.innerHTML = "Hijito";

contenedor.appendChild(hijito);

contenedor.removeChild(hijito);

// .hasChildNodes() devuelve true si el elemento tiene hijos
console.log(contenedor.hasChildNodes());



// Propiedades de los parents:

// parentNode selecciona el padre de un elemento, parentElement selecciona el padre ELEMENTO de un elemento
// Generalmente ambos seleccionan lo mismo. Solo en casos muy específicos, el padre de un elemento no es otro elemento

const subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo.parentElement); 
console.log(subtitulo.parentNode);



// Propiedades de siblings (hermanos, es decir, los elementos que están al lado, al mismo nivel que el elemento en cuestión)

// uso .previousSibling para obtener el hermano anterior (puede ser un elemento, o un nodo que no sea elemento, como un texto (incluso espacios en blanco))
console.log(subtitulo.previousSibling);

// uso .previousElementSibling para ver, estrictamente, el ELEMENTO hermano anterior
console.log(subtitulo.previousElementSibling);

// también puedo seleccionar el siguiente con .nextSibling y .nextElementSibling



// Propiedad extra:

// luego de seleccionar un elemento y guardar ese objeto HTML en una variable (cuyo nombre es "elemento")
// puedo usar el método elemento.closest("selector"); para obtener
// el elemento más cercano que tenga el selector (clase, id, etc) especificado