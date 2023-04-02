// Práctica 09:

const contenedorInformacion = document.querySelector(".div-info");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputMateria = document.getElementById("materia");
const botonEnviar = document.getElementById("boton-enviar");

const validarCampos = () => {
	if (inputNombre.value.length < 5 || inputNombre.value.length > 20)
		return [true, "El nombre debe tener más de 5 caracteres y menos de 20"];
	if (!inputCorreo.value.includes("@gmail.com"))
		return [true, "Solo se permiten correos de la plataforma gmail.com"];
	if (inputMateria.value == "")
		return [true, "El campo con la materia no puede estar vacío"];
	return [false];
}

botonEnviar.addEventListener("click", (event)=>{
	event.preventDefault(); // el método preventDefault() evita que el elemento tenga su comportamiento default (que, en el caso de un input tipo "submit", es enviar el formulario y recargar la página)
	let error = validarCampos();
	if (error[0]) {
		contenedorInformacion.innerHTML = "Error: " + error[1];
		contenedorInformacion.classList.add("formato-erroneo");
	} else {
		contenedorInformacion.innerHTML = "Formulario enviado exitosamente";
		contenedorInformacion.classList.add("formato-exitoso");
	}
})