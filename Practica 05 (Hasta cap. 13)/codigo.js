// PROBLEMA A

let materias = {
	// formato:
	// materia: [porcentajeAsistencia, promedioTrabajos, cantidadTrabajosEntregados (son 4 TP)]
	fisica: [100, 8, 4],
	biologia: [80, 7, 3],
	quimica: [70, 8, 2],
	ingles: [60, 9, 2]
}

const comprobarCondicion = () => {
	
	for (materia in materias) {
		
		console.log(materia);

		if (materias[materia][0] >= 70)
			if (materias[materia][1] >= 6)
				if (materias[materia][2] >= 3)
					console.log("%c    Aprobado", "color: #0f0");
				else
					console.log("%c    Reprobado. Motivo: Menos de 3 trabajos entregados", "color: #f00")
			else
				console.log("%c    Reprobado. Motivo: Promedio menor a 6", "color: #f00");
		else
			console.log("%c    Reprobado. Motivo: Porcentaje de asistencias menor a 70%", "color: #f00");
	}
}

comprobarCondicion();

// PROBLEMA B

// "estudiar 8 horas a la semana, hacer trabajos 4 horas a la semana, descansar 2 horas a la semana"

let tiempoEstudio = Math.trunc((8.0 / 7.0) * 60) + " minutos.";
let tiempoTrabajo = Math.trunc((4.0 / 7.0) * 60) + " minutos.";
let tiempoDescanso = Math.trunc((2.0 / 7.0) * 60) + " minutos.";

for (i = 0; i < 14; ++i) {
	
	if (i == 0) {
		console.groupCollapsed("Semana 1:");
	} else if (i == 7) {
		console.groupEnd();
		console.groupCollapsed("Semana 2:");
	}

	console.groupCollapsed("Día " + (i + 1));
	console.log("Estudiar " + tiempoEstudio);
	console.log("Descansar " + tiempoDescanso);
	console.log("Realizar trabajos " + tiempoTrabajo);
	console.groupEnd();

}