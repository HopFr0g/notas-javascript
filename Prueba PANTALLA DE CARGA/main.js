const contenedorCargando = document.querySelector(".contenido__cargando");

const consultarServidorFalso = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {resolve(true)}, Math.random() * 10000)
	});
}

const obtenerRespuesta = async () => {
	let respuesta = await consultarServidorFalso();

	if (respuesta)
		contenedorCargando.style.display = "none";
}

obtenerRespuesta();