// EVENTOS DEL MOUSE:

// click: ocurre cuando se da un click (es decir, cuando se APRETA y se SUELTA el click dentro del mismo elemento)
// dblckick: ocurre cuando se dan dos clicks en menos de 500 ms
// mouseover: ocurre cuando el cursos del mouse se mueve sobre un elemento o uno de sus hijos
// mouseout: ocurre cuando el cursor del mouse se mueve fuera de un elemento o de sus elementos secundarios
// contextmenu: ocurre cuando doy un click derecho para abrir el menú contextual

// mousemovce: ocurre cuando el cursor se mueve estando dentro de un elemento
// mouseenter: similar al mousemove pero exclusivo para internet explorer
// mouseleave: ocurre cuando el cursor del mouse sale de un elemento (a diferencia del mouseout, este se ejecutará continuamente)
// mousedown: ocurre cuando se APRETA el click dentro del elemento (no espera a que sueltes el click)
// mouseup: ocurre cuando se SUELTA el click dentro del elemento (sin importar dónde comenzaste a apretarlo)



// EVENTOS DEL TECLADO:

// keydown: ocurre cuando la tecla se PRESIONA sobre un elemento (sin esperar si se suelta o no)
// keypress: ocurre cuando la tecla se PRESION y SUELTA sobre un elemento
// keyup: ocurre cuando la tecla se SUELTA sobre un elemento (sin importar dónde se comenzó a apretar)

// puedo conocer qué tecla se ha presionado, agregando el parámetro event en nuestro event listener, y accediendo a event.key
const inputTeclado = document.querySelector(".input-teclado");
const contenedorTeclado = document.querySelector(".contenedor-teclado");
inputTeclado.addEventListener("keypress", (event) => contenedorTeclado.innerHTML = `última tecla presionada: ${event.key}`);



// EVENTOS DE LA INTERFAZ:

// error: ocurre cuando sucede un error al intentar cargar un archivo multimedia (por ejemplo, cancelar la carga de una página donde una imagen aún no terminaba de cargar)
// load: es un evento que se puede usar sobre el objeto window, se ejecuta cuando el sitio termina de cargarse
// beforeunload: ocurre antes de que el usuario acceda al enlace de otro sitio
// unload: ocurre cuando el usuario se fue del sitio
// resize: ocurre cuando se redimensiona la ventana
// scroll: ocurre cada vez que se hace scroll (cuando se desplaza la página hacia arriba/abajo)
// select: solo funciona en inputs y textareas. Si al event listener le agrego un parámetro para el objeto event, luego puedo acceder a los atributos event.target.selectionStart o event.target.selectionEnd para conocer los índices de los caracteres que fueron seleccionados. Conociendo los indices y el input.value, puedo acceder al texto seleccionado
const contenedorSeleccion = document.querySelector(".contenedor-seleccion");
const inputSeleccion = document.querySelector(".input-seleccion");
inputSeleccion.addEventListener("select", (event) => {
	let primerCaracter = event.target.selectionStart;
	let ultimoCaracter = event.target.selectionEnd;
	let textoEscrito = inputSeleccion.value;
	let textoSeleccionado = textoEscrito.substring(primerCaracter, ultimoCaracter);
	contenedorSeleccion.innerHTML = textoSeleccionado;
})



// TEMPORIZADOR:
// Puedo crear un temporizador con la función setTimeout(funcion callback, tiempo en milisegundos)
// Como siempre, la función callback puede ser una función flecha definida ahí mismo, o el nombre de una función previamente creada
// Se recomienda asignar el temporizador a una nueva variable, así luego se lo puede eliminar con clearTimeout(nombre)
const contenedorTimeout = document.querySelector(".contenedor-timeout");
const temporizador = setTimeout(()=>{contenedorTimeout.innerHTML = "Esto se escribió luego de 5 segundos"}, 5000);

// con .setInterval(funcion callback, tiempo en milisegundos) puedo ejecutar una función de forma periódica
// Se recomienda asignar el intervalo a una nueva variable, así luego se lo puede eliminar con clearInterval(nombre)
const contenedorIntervalo = document.querySelector(".contenedor-intervalo");
let tiempo = 1;
const intervalo = setInterval(()=>{contenedorIntervalo.innerHTML = `Estás aquí hace ${tiempo++} segundos`}, 1000); 