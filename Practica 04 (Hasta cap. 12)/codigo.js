materias = {
	fisica: ["Ruiz", "Santos", "Ravenna", "Medina", "Lampone"],
	quimica: ["Martinez", "Ravenna", "Medina", "Lampone"],
	biologia: ["Gimenez", "Santos", "Ravenna", "Medina"],
	ingles: ["Lewandovsky", "Santos", "Ravenna", "Lampone"]
}

const obtenerListaAlumnos = materia => {
	return materias[materia].slice(1);
}

const consultarDocente = materia => {
	return materias[materia][0];
}

const comprobarInscripcion = (materia, alumno) => {
	return obtenerListaAlumnos(materia).includes(alumno);
}

const solicitarMateria = () => {
	let materia = prompt("Ingrese la materia:");

	while (materias[materia] == undefined) {
		materia = prompt("La materia no existe o está mal escrita. Intente de nuevo:");
	}

	return materia;
}

const solicitarInscripcion = () => {
	let materia = solicitarMateria();
	let alumno = prompt("Ingrese nombre del alumno:");
	comprobarInscripcion(materia, alumno) ? alert("El alumno está inscripto") : alert("El alumno no está inscripto");
}

const solicitarInformacion = () => {
	let materia = solicitarMateria();
	alert("Docente: " + consultarDocente(materia) + ". Alumnos inscriptos: " + obtenerListaAlumnos(materia).join(", "));
}

const solicitarCantidadClases = () => {
	let alumno = prompt("Ingrese nombre de un alumno para comprobar en cuántas materias está inscripto:");
	let alumnos;
	let cantidadMaterias = 0;
	let nombreMaterias = [];
	for (materia in materias) /* para recorrer todos los valores del objeto (array asociativo) con un bucle */ {
		alumnos = obtenerListaAlumnos(materia);
		if (alumnos.includes(alumno)) {
			++cantidadMaterias;
			// Cuando recorro un objeto así, for (materia in materia), cada valor de "materia" es un string y puedo aprovecharlo:
			nombreMaterias.push(materia + " (Docente: " + consultarDocente(materia) + ")");
		}
	}
	alert(alumno + " se encuentra inscripto en " + cantidadMaterias + " materias. Estas materias son: " + nombreMaterias.join(", "));
}

solicitarInscripcion();
solicitarInformacion();
solicitarCantidadClases();