const parrafo = document.querySelector(".parrafo");

// Una vez seleccionado un objeto HTML, puedo acceder a los siguientes atributos para obtener el texto de su interior

// .textContent; devuelve el texto de cualquier nodo, INCLUYENDO TEXTO NO VISIBLE
// (por ejemplo, si adentro del elemento hay una etiqueta <b style="visibility: hidden"></b> con más texto en su interior, ese texto se mostrará igual aunque esté oculto)
document.write("<br>textContent: " + parrafo.textContent + "<br>");

// .innerText - devuelve el texto visible de un node element
// NO RECOMENDADO - No es estandar y consume mas recursos ya que carga los estilos
document.write("<br>innerText: " + parrafo.innerText + "<br>");

// Las propiedades anteriores sirven para obtener el texto contenido dentro de un <elemento></elemento> incluso si,
// dentro del mismo, hay una segunda <etiqueta></etiqueta> con más texto en su interior

// .innerHTML y .outerHTML son similares a las anteriores, pero SÍ CARGAN LAS ETIQUETAS CON CÓDIGO HTML QUE SE ENCUENTREN EN EL INTERIOR DEL ELEMENTO

// .innerHTML cargan solo las etiquetas del interior del elemento:
document.write("<br>innerHTML:" + parrafo.innerHTML + "<br>");

// .outerHTML carga, incluso, las etiquetas del EXTERIOR del elemento:
document.write("<br>outerHTML:" + parrafo.outerHTML + "<br>");

// LO MÁS IMPORTANTES SON .textContent Y .innerHTML



// Creación de elementos:

// una vez seleccionado un objeto HTML, en este caso, un div:
const contenedor = document.querySelector(".contenedor");

// se puede crear un elemento con document.createElement("NOMBRE") el nombre del elemento debe estar en mayúsculas
// el elemento creado será un objeto que debemos guardar en una variable:
const item = document.createElement("LI");

// uso document.createTextNode("texto") para crear un nodo de texto
// el nodo de texto creado es un objeto que debe almacenarse en una variable:
const textoDelItem = document.createTextNode("Texto que quiero ingresar dentro del item de lista");

// un child (hijo) es un elemento que se encuentra dentro de otro

// para agregar un nodo hijo dentro de un elemento, uso el método .appendChild()
// elemento.appendChild(hijo)
// por ejemplo, pondremos el nodo de texto (objeto guardado en la variable textoDelItem) dentro del elemento <li></li> (objeto guardado dentro de la variable item)
item.appendChild(textoDelItem);

// La siguiente lista es para comprobar que se logró con éxito la creación de <li>Texto que quiero ingresar dentro del item de lista</li>
console.log(item);

// Ahora pondremos el elemento <li></li> (que es el objeto ya guardado en la variable "item" y que ya tiene un texto en su interior)
// dentro del contedor que seleccionamos al principio, otra vez con .appendChild()
contenedor.appendChild(item);

// otra forma de ingresar un texto dentro del elemento <li></li> hubiese sido con el atributo .innerHTML que nos permitía acceder al contenido de un elemento:
item.innerHTML = "Texto que quiero ingresar dentro del item de lista"
// pero si lo hago de esa forma, el texto ingresado no es un objeto text node como en el caso anterior, por lo que no contamos con las mismas propiedades

// cada elemento creado con .createElement() es un objeto con un identificador que lo hace ÚNICO
// al ser único, no podría agregar el mismo elemento dos o más veces dentro de otro.

// si quiero agregar un elemento varias veces, podría hacer un bucle for que cree el objeto y lo agregue repetidamente
// pero eso sería ineficiente ya que, cada vez que se agrega un elemento al DOM, este tendría que rescribirse por completo

// la solución para agregar un elemento varias veces, es con document.createDocumentFragment()
// de esa forma crearemos un fragmento, usaremos un bucle para agregar repetidas veces un objeto a ese fragmento
// y luego agregaremos ese fragmento UNA ÚNICA VEZ

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; ++i) {
	const item = document.createElement("LI");
	item.innerHTML = "Texto de la lista";
	// agrego este item dentro del fragmento con .appendChild():
	fragmento.appendChild(item);
}

// Y lo que agrego adentro del contenedor, es el fragmento completo:
contenedor.appendChild(fragmento);