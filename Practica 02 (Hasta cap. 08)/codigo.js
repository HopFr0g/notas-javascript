// PROBLEMA 1: Entradas a la fiesta

let entradaGratisEntregada = false;

const controlarEntradas = (hora) => {
	let edad = prompt("Ingrese su edad");

	if (edad >= 18) {
		if (!entradaGratisEntregada && hora >= 2) {
			alert("Puedes entrar gratis, por ser la primera persona luego de las 2 AM");
		} else {
			alert(`Entraste a las ${hora}:00 AM y debes pagar la entrada`);
		}
	} else {
		alert("No puedes entrar a la fiesta.");
	}
}

controlarEntradas(0);
controlarEntradas(1);
controlarEntradas(2);
controlarEntradas(3);
controlarEntradas(4);

// PROBLEMA 2: Toma de asistencias

let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos");
let cantidadClases = prompt("Ingrese la cantidad de clases");
let alumnos = []; // dentro de este array habrá más arrays, cada uno contendrá el nombre de un alumno y las asistencias del mismo

// Cargar los nombres de los alumnos e inicializar su cantidad de asistencias en 0:
for (let i = 0; i < cantidadAlumnos; ++i) {
	alumnos[i] = [prompt("Ingrese nombre del alumno " + (i + 1) + ":"), 0];
}

// Función para recibir un input de "presente" o "ausente" y procesarlo:
const tomarAsistencia = (numeroAlumno, numeroClase) => {
	let asistencia = prompt(`CLASE ${numeroClase}: Ingrese la asistencia de ${alumnos[numeroAlumno][0]} (P/A)`);
	
	while (asistencia != 'P' && asistencia != 'A') {
		asistencia = prompt(`FORMATO INCORRECTO. Por favor ingrese P (de presente) o A (de ausente):`)
	}

	if (asistencia == 'P') {
		++alumnos[numeroAlumno][1];
	}
}

// Tomar asistencia en cada clase:
for (let i = 0; i < cantidadClases; ++i) {
	for (alumno in alumnos) {
		tomarAsistencia(alumno, i + 1);
	}
}

// Función para calcular porcentaje de asistencias de un alumno:
const validarAsistencias = (numeroAlumno, cantidadClases) => {
	let porcentajeAsistencia = parseFloat(alumnos[numeroAlumno][1]) / cantidadClases * 100;
	if (porcentajeAsistencia > 60)
		return `Aprobado con el ${porcentajeAsistencia}% de asistencias. (Asistió: ${alumnos[numeroAlumno][1]} veces de un total de ${cantidadClases})`;
	return `Desaprobado con el ${porcentajeAsistencia}% de asistencias. (Asistió: ${alumnos[numeroAlumno][1]} veces de un total de ${cantidadClases})`;
}

// Bucle para mostrar el porcentaje de asistencias de cada alumno:
for (alumno in alumnos) {
	alert(`Situación final del alumno ${alumnos[alumno][0]}: ${validarAsistencias(alumno, cantidadClases)}`);
}