// PRÁCTICA 06 (También leer comentarios de index.html y main.css)

// Seleccionar el contenedor "flex-container" en donde se agregarán todos los ítems
const contenedor = document.querySelector(".flex-container");

// Se usará un "fragment" para agregar los ítems de a uno en uno en este fragmento
// y luego, cuando ya estén todos los ítems, agregar el fragmento completo en el contenedor (así se ahorran recursos)
const fragmentoItems = document.createDocumentFragment();

const agregarItem = (numero, modelo, precio) => {
	// crear un div, que serán los "flex-item" donde se guarda la información de cada llave
	const divItem = document.createElement("DIV");
	
	// definir los nombres de las clases de cada div:
	divItem.classList.add("flex-item"); 
	divItem.classList.add(`item-${numero}`);

	// Propiedad tab-index para que tengan un orden de selección con la tecla TAB:
	divItem.tabIndex = numero;

	// agregar, dentro del código HTML de este div, elementos HTML que contengan la imagen, precio, etc:
	divItem.innerHTML = "<img src='key.png'>" + `<h2>Llave ${numero}</h2>` + `<h3>Modelo: ${modelo}</h3>` + `<p>Precio: $${precio}</p>`

	// EVENT LISTENER: Contenido aún no aprendido, pero necesario.
	// Agregar un eventListener, hará que se ejecute una función cuando se haga click sobre este div.
	// En este caso, la función consiste en llamar a changeHidden() para que se cambie el número de la llave elegida:
	divItem.addEventListener("click", ()=>changeHidden(numero));

	// una vez creado el div, agregarlo al fragmento:
	fragmentoItems.appendChild(divItem);
}

// Función para asignar, al input invisible, el número de la llave elegida (es una función flecha que no lleva {} por ser de una sola línea): 
const changeHidden = numeroLlave => document.querySelector(".key-data").value = numeroLlave;

// bucle que crea 20 items aleatorios:
for (let i = 0; i < 20; ++i) {
	let numero = i + 1;
	let modelo = Math.trunc(Math.random() * 1000);
	let precio = Math.round(Math.random() * 10000) / 100.0;

	agregarItem(numero, modelo, precio);
}

// agregar el fragmento con los 20 ítems ya creados adentro de nuestro "flex-container":
contenedor.appendChild(fragmentoItems);