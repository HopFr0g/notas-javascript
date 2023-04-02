// Práctica 10:

const botonEnviar = document.querySelector("#enviar-nota")
const notas = document.querySelectorAll("#nota");

const modal = document.querySelector(".modal");
const modalResultado = document.querySelector(".modal-ventana__resultado");
const modalPromedio = document.querySelector(".modal-ventana__promedio");
const modalBoton = document.querySelector(".modal-ventana__boton");

botonEnviar.addEventListener("click", () => {
	try {
		let arregloNotas = [];
		let nota;
		for (let i = 0; i < notas.length; ++i) {
			nota = parseInt(notas[i].value);
			if (isNaN(nota))
				throw "NAN";
			else if (nota < 1 || nota > 10)
				throw "OUT OF RANGE";
			arregloNotas.push(nota);
		}
		let promedio = calcularPromedio(arregloNotas[0], arregloNotas[1], arregloNotas[2]);
		let resultado = verificarAprobacion(promedio);
		abrirModal(resultado, promedio);
	}
	catch (error) {
		error == "NAN" ? alert("Un campo está vacío o tiene un valor no numérico") : alert("Las notas deben ser del 1 al 10");
	}
});

modalBoton.addEventListener("click", () => {
	ocultarModal();
});

const abrirModal = (resultado, promedio) => {
	modalResultado.innerHTML = resultado;
	modalPromedio.innerHTML = "Promedio: " + promedio;

	if (promedio >= 6) {
		modalResultado.classList.remove("reprobado");
		modalResultado.classList.add("aprobado");
	} else {
		modalResultado.classList.remove("aprobado");
		modalResultado.classList.add("reprobado");
	}

	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
}

const ocultarModal = () => {
	modal.style.display = "none"
}

const calcularPromedio = (nota1, nota2, nota3) =>
	Math.round((nota1 + nota2 + nota3) / 3.0);

const verificarAprobacion = (promedio) => {
	let resultado;
	switch (promedio) {
		case 10:
			resultado = "EXCELENTE";
			break;
		case 9:
			resultado = "DISTINGUIDO";
			break;
		case 8:
			resultado = "MUY BUENO";
			break;
		case 7:
			resultado = "BUENO";
			break;
		case 6:
			resultado = "APROBADO";
			break;
		default:
			resultado = "REPROBADO";
	}
	return resultado;
}