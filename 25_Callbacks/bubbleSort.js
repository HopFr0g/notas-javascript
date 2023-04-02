const bubbleSort = (arreglo) => {
	let iteraciones = arreglo.length - 1;

	for (let i = 0; i < iteraciones; ++i) {
		for (let j = 0; j < iteraciones - i; ++j) {
			if (arreglo[j] > arreglo[j + 1]) {
				// swap:
				let aux = arreglo[j];
				arreglo[j] = arreglo[j + 1];
				arreglo[j + 1] = aux;
			}
		}
	}
}