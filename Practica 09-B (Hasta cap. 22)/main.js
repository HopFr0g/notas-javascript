// Práctica 09-B

let alumnos = [{
	nombre: "Leonel",
	email: "leonel@gmail.com",
	materia: "Cálculo II"
},{
	nombre: "Lulu",
	email: "lulu@gmail.com",
	materia: "Historia"
},{
	nombre: "Titina",
	email: "titina@gmail.com",
	materia: "Química Orgánica"
},{
	nombre: "Manuel",
	email: "leonel@gmail.com",
	materia: "Formación Ciudadana"
}];

const contenedor = document.querySelector(".grid-container");

let codigoHtml = "";

for (alumno in alumnos) {
	let nombre = alumnos[alumno]["nombre"];
	let email = alumnos[alumno]["email"];
	let materia = alumnos[alumno]["materia"];

	codigoHtml += `
		<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item correo">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="selector-semana">
				<option value="1">Semana 1</option>
				<option value="2">Semana 2</option>
			</select>
		</div>`;

}

contenedor.innerHTML = codigoHtml;

const boton = document.querySelector(".boton-confirmar");

boton.addEventListener("click", () => {
	let confirmacion = window.confirm("¿Desea confirmar las mesas de examen?");

	if (confirmacion) {
		let contenedores = document.querySelectorAll(".semana");
		let selecciones = document.querySelectorAll(".selector-semana");

		for (indice in contenedores) {
			contenedores[indice].innerHTML = "Semana " + selecciones[indice].value;
		}

		document.body.removeChild(boton);
	}
});